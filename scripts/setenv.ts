/* eslint-disable no-console */
import ErrnoException = NodeJS.ErrnoException;

const { projects } = require('../angular.json');
const { appendFile, writeFile } = require('fs');
const { argv } = require('yargs');

// read the command line arguments passed with yargs
const Configuration = argv.configuration;
const EnvironmentFile = argv.file || 'environment.ts';

type FileReplacement = {
	replace: string;
	with: string;
}

// loop through each Angular project
Object.keys(projects)
	.forEach(projectName => {
		const Project = projects[projectName];
		const EnvironmentsPath = `${ Project.sourceRoot }/environments`;
		const CurrentConfiguration = Configuration || Project.architect.build.defaultConfiguration;
		const DefaultFileReplacements: FileReplacement[] = [
			{
				replace: `${ EnvironmentsPath }/${ EnvironmentFile }`,
				with: `${ EnvironmentsPath }/${ EnvironmentFile }`,
			},
		];
		const IsProduction = CurrentConfiguration === Project.architect.build.defaultConfiguration; // assumes the default target is production
		const FileReplacements = Project.architect.build.configurations[CurrentConfiguration]?.fileReplacements || DefaultFileReplacements;

		// read environment variables from .env file
		require('dotenv').config({ path: `${ EnvironmentsPath }/.env` });

		// loop through each replacement that matches the `EnvironmentFile` name
		FileReplacements
			.filter((fileReplacement: FileReplacement) => fileReplacement.replace.endsWith(EnvironmentFile))
			.forEach((fileReplacement: FileReplacement) => {
				// there should only be one iteration, but we don't want to break just in case there isn't
				const FileContent = `export const environment = {
	baseUrl: '${ process.env['BASE_URL'] }',
	production: ${ IsProduction },
};
`;

				// write the updated environment file
				writeFile(`./${ fileReplacement.with }`, FileContent, (err: ErrnoException | null): void => {
					if (err) {
						console.log(err);
					}
					console.log(`Wrote variables to ${ fileReplacement.with }`);
				});

				// ensure the original file exists so that imports don't break
				appendFile(`./${ fileReplacement.replace }`, '', (err: ErrnoException | null): void => {
					if (err) {
						console.log(err);
					}
					console.log(`Ensured ${ fileReplacement.replace } exists`);
				});
			});
	});

import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This is the bootstrap component for the application.
 */
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	/**
	 * The title of the application.
	 */
	title = 'browser';
}

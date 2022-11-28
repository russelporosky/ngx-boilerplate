import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This is the bootstrap component for the application.
 */
@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-root',
	styleUrls: ['./app.component.scss'],
	templateUrl: './app.component.html',
})
export class AppComponent {
	/**
	 * The title of the application.
	 */
	title = 'browser';
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			anchorScrolling: 'enabled',
			initialNavigation: 'enabledBlocking',
			onSameUrlNavigation: 'reload',
			scrollPositionRestoration: 'enabled',
			urlUpdateStrategy: 'eager',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

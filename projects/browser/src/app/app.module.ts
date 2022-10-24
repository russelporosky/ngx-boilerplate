import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * **_ngx-boilerplate_**
 *
 * This is an opinionated boilerplate for Angular applications.
 */
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

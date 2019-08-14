import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LibWithAssetsModule} from 'lib-with-assets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibWithAssetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

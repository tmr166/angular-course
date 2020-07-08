import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {EventsAppComponent} from './events/events-app.component';
import {FunFactsComponent} from './fun-facts/fun-facts.component';
import {TopNavbarComponent} from './nav/top-navbar.component';

@NgModule({
  declarations: [
    FunFactsComponent, EventsAppComponent, TopNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

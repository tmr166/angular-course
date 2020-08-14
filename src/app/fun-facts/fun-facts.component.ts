// Imports component and input from angular
import {Component, Input} from '@angular/core';
import {EventsAppComponent} from '../events/events-app.component';

@Component({
  templateUrl: './fun-facts.component.html',
  // add style to component
  styleUrls: ['./fun-facts.css'],
  // tslint:disable-next-line:component-selector
  selector: 'fun-facts',
})

export class FunFactsComponent {
  // Creates property 'event', saying that the event object can be any data type
  // Input means that the object 'event' will be importing data from another file: events-list.component.ts
  @Input() event: any;

  // tslint:disable-next-line:typedef
  poke() {
    const reaction = document.createElement('img');
    reaction.src = './assets/images/JigglypuffAngry.png';
    document.querySelector('body').appendChild(reaction);
  }

  // tslint:disable-next-line:typedef
  energyPercent() {
    if (this.event && this.event.energyPercent < 50) {
      // return class for format the Energy Percentage
      return ['tired'];
    }
    return [];

  }
}

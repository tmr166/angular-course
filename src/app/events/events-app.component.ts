// Typescript File
// Purpose: Call List of Components

// Import Component from Angular
import {Component} from '@angular/core';

@Component({
  templateUrl: '../app.component.html',
  // Name of tag used in HTML.
  // EX) <events-app></events-app>
  // tslint:disable-next-line:component-selector
  selector: 'events-app'
})

// Create class: EventsListComponent
// Note: Class Name = File Name
export class EventsAppComponent {
  funFacts = {
    id: 1,
    name: 'Scarlet',
    day: '7/6/2020',
    time: '01:24 pm',
    hungerPercent: 44.55,
    imageURL: {
      icon: '../assets/images/Blissey.png',
      starter: '../assets/images/Piplup.jpg',
      favorite: '../assets/images/BlisseyNurse.jpg',
      legendary: '../assets/images/Jirachi.jpg',
    },
    pokemon: {
      starter: 'Piplup',
      favorite: 'Blissey',
      legendary: 'Jirachi'
    }
  };
}

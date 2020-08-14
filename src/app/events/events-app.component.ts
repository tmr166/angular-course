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
  funFacts = [
    {
      id: 1,
      name: 'Scarlet',
      day: '7/6/2020',
      time: '01:24 pm',
      hungerPercent: 44.55,
      energyPercent: 55,
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
    },
    {
      id: 2,
      name: 'Cynthia',
      day: '7/6/2020',
      time: '01:24 pm',
      hungerPercent: 44.55,
      energyPercent: 12,
      imageURL: {
        icon: '../assets/images/Cynthia.jpg',
        starter: '../assets/images/Bulbasaur.jpg',
        favorite: '../assets/images/Ninetails.jpg',
        legendary: '../assets/images/Mew.jpg',
      },
      pokemon: {
        starter: 'Bulbasaur',
        favorite: 'Ninetails',
        legendary: 'Mew'
      }
    },
    {
      id: 3,
      name: 'Misty',
      day: '7/6/2020',
      time: '01:24 pm',
      // hungerPercent: 44.55,
      energyPercent: 23,
      imageURL: {
        icon: '../assets/images/Misty.png',
        starter: '../assets/images/Totodile.png',
        favorite: '../assets/images/Dragonite.png',
        legendary: '../assets/images/Entei.jpg',
      },
      pokemon: {
        starter: 'Totodile',
        favorite: 'Dragonite',
        legendary: 'Entei'
      }
    },
    {
      id: 4,
      name: 'May',
      day: '7/6/2020',
      time: '01:24 pm',
      hungerPercent: 44.55,
      energyPercent: 76,
      imageURL: {
        icon: '../assets/images/May.jpg',
        starter: '../assets/images/Torchic.jpg',
        favorite: '../assets/images/Milotic.png',
        legendary: '../assets/images/Manaphy.jpg',
      },
      pokemon: {
        starter: 'Torchic',
        favorite: 'Milotic',
        legendary: 'Manaphy'
      }
    }
  ];

}

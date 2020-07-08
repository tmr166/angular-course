// Imports component and input from angular
import {Component, Input} from '@angular/core';

@Component({
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.css'],
  // tslint:disable-next-line:component-selector
  selector: 'top-navbar',
})

export class TopNavbarComponent {
  content = {
    button1: {
      name: 'Home'
    },
    button2: {
      name: 'Pokemon',
      dropdown: ['Pipluo',
                 'Blissey',
                 'Jirachi']
    },
    button3: {
      name: 'About Me',
    }
  };
}

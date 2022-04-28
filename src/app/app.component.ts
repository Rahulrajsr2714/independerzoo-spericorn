import { Component, VERSION } from '@angular/core';
import { animals } from './data/animals-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  animals = animals;
}

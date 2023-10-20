import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation: HousingLocation = {
    id: 1,
    name: 'Wohnanlage Wien Floridsdorf',
    city: 'Wien',
    state: 'W',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 4,
    wifi: true,
    laundry: false
  }

}

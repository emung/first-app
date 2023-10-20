import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() {
  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    if (!firstName && !lastName && !email) {
      alert("Application form is empty!");
      return;
    }
    alert(`Homes application received! \nFirstname: ${firstName} \nLastname: ${lastName} \nE-Mail: ${email}`);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  location = '';
  weatherData = null;

  constructor() {}

  calculate(kelvin) {
    return Math.ceil(kelvin - 273.15);
  }

  handleSearch() {
    console.log(this.location);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=7bd0dc94a3212db6f91d5eb723443c2f`
    )
      .then((response) => response.json())
      .then((data) => {
        this.weatherData = data;
      });
  }
}

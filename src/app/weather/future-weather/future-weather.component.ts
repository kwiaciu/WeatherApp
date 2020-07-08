import { Component, Input } from '@angular/core';
import { WeatherComponent } from '../weather.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.scss'],
})
export class FutureWeatherComponent {
  @Input() tomato: WeatherComponent;

  //"dt_txt": "2020-05-13 06:00:00"
  checkDays = () => {
    const days = [];
    const today = new Date();
    if (today.getHours() < 12) {
      today.setDate(today.getDate() - 1);
    }
    for (let index = 1; index < 6; index++) {
      let day = new Date(
        Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() + index)
      );
      days.push(`${day.toISOString().slice(0, 10)} 12:00:00`);
    }
    return days;
  };

  getForecastData = () =>
    this.checkDays().map((date) =>
      this.tomato['list'].find(
        (singleResult) => singleResult['dt_txt'] === date
      )
    );

  ForecastTemperature = (data) => Math.round(data['main']['temp']);

  // ForecastFeelTemperature = (data) => Math.round(data['main']['feels_like']);

  ForecastWeatherDesc = (data) => {
    let desc = data['weather'][0]['description'];
    return desc.charAt(0).toUpperCase() + desc.slice(1);
  };

  ForecastWeatherIconSrc = (data) => {
    return `../../../assets/icon/png/${data['weather'][0]['icon']}.png`;
  };

  ForecastPressure = (data) => data['main']['pressure'];

  ForecastHumidity = (data) => data['main']['humidity'];

  // ForecastClouds = (data) => data['clouds']['all'];

  ForecastWind = (data) => data['wind']['speed'];

  constructor() {}
}

import { Component, Input } from '@angular/core';
import { WeatherComponent } from '../weather.component';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
  @Input() potato: WeatherComponent;

  City = () => this.potato['name'];

  Country = () => this.potato['sys']['country'];

  CurrentTemperature = () => Math.round(this.potato['main']['temp']);

  CurrentFeelTemperature = () => Math.round(this.potato['main']['feels_like']);

  CurrentWeatherDesc = () => {
    let desc = this.potato['weather'][0]['description'];
    return desc.charAt(0).toUpperCase() + desc.slice(1);
  };

  CurrentWeatherIconSrc = () => {
    return `/assets/icon/png/${this.potato['weather'][0]['icon']}.png`;
  };

  CurrentPressure = () => this.potato['main']['pressure'];

  CurrentHumidity = () => this.potato['main']['humidity'];

  CurrentClouds = () => this.potato['clouds']['all'];

  CurrentWind = () => this.potato['wind']['speed'];

  // every method should be like this actually, since api doc states that if something is not measured its suddently not in response
  CurrentRain = () =>
    this.potato['rain'] !== undefined ? this.potato['rain']['1h'] : null;

  CurrentSnow = () =>
    this.potato['snow'] !== undefined ? this.potato['snow']['1h'] : null;

  constructor() {}
}

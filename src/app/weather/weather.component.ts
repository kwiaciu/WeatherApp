import { Component } from '@angular/core';
import { backgrounds } from './backgrounds';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {
  location = '';
  backgroundURL = backgrounds;
  currentWeatherData = null;
  forecastWeatherData = null;
  chosenBackground = null;
  errorMessage = null; //TODO error message using form control and validation
  isLoaded = false;
  background = () => {
    this.chosenBackground = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.backgroundURL[this.currentWeatherData['weather'][0]['icon']]
    );
  };

  loaded = () => {
    this.isLoaded = true;
  };

  reset = () => {
    this.location = '';
    this.currentWeatherData = null;
    this.forecastWeatherData = null;
    this.chosenBackground = null;
    this.errorMessage = null;
    this.isLoaded = false;
  };

  constructor(
    private sanitizer: DomSanitizer,
    private httpClient: HttpClient
  ) {}

  handleSearch() {
    this.httpClient
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=7bd0dc94a3212db6f91d5eb723443c2f`
      )
      .subscribe({
        next: (data) => {
          this.currentWeatherData = { ...data };
          this.background();
        },
        error: (err) => (this.errorMessage = err['error']['message']),
      });
    console.log(this.errorMessage);
    this.httpClient
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.location}&units=metric&appid=7bd0dc94a3212db6f91d5eb723443c2f`
      )
      .subscribe((data) => (this.forecastWeatherData = { ...data }));
  }
}

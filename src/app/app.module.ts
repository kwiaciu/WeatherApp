import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component';
import { FutureWeatherComponent } from './weather/future-weather/future-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryComponent,
    WeatherComponent,
    CurrentWeatherComponent,
    FutureWeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

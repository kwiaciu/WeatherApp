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
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
];

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
    HttpClientModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

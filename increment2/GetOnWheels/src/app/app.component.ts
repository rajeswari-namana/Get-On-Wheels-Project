import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieDataProvider } from '../providers/movie-data/movie-data';
import { WeatherProvider } from "../providers/weather/weather";



import { TabsPage } from '../pages/tabs/tabs';
import {AboutPage} from "../pages/about/about";


@Component({
  templateUrl: 'app.html',
  providers: [
    MovieDataProvider,
    WeatherProvider
  ]
})
export class MyApp {
  rootPage:any = AboutPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
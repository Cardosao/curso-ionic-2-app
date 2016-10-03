import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { CameraTest } from '../pages/camera-test/camera-test';

@Component({
  templateUrl: './app.html'
})
export class MyApp {
  pages: Array<any>;
  rootPage = HomePage;

  constructor(platform: Platform, public menu: MenuController) {

    this.pages = [
      {title: 'Home', component: HomePage},
			{title: 'About', component: AboutPage},
			{title: 'Camera', component: CameraTest},
			{title: 'Tabs', component: TabsPage},
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close();
    this.rootPage = page.component;
  }
}

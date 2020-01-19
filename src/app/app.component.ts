import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Cupid Depths',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Daily Mantra',
      url: '/daily-mantra',
      icon: 'book'
    },
    {
      title: 'Ask Me',
      url: '/askme',
      icon: 'contacts'
    },
    {
      title: 'Stories',
      url: '/stories',
      // icon: 'grid'
      icon: 'list'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

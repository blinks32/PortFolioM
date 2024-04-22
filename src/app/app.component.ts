import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private platform: Platform, private nav: NavController) {
    this.initialize()
  }

  async initialize() {
    
    this.platform.ready().then(async (readySource) => {
      console.log('Platform ready from', readySource);
     
     // await StatusBar.setBackgroundColor({color: '#5238ff'})
      await this.LoadSplash();

      });
  }

  async LoadSplash(){
    await SplashScreen.show();

    console.log("dhdhdhfhjdh");

    // await StatusBar.setOverlaysWebView({ overlay: true });
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
 
    //  this.toggleDarkTheme(prefersDark.matches);

    // await StatusBar.setOverlaysWebView({ overlay: true });
  }

  toggleDarkTheme(shouldAdd) {
    if (shouldAdd){
      StatusBar.setStyle({ style: Style.Dark });
    }else{
     StatusBar.setStyle({ style: Style.Light });
    }
  }

  gotoProfile(){
    this.nav.navigateForward('profile');
  }

  gotoPage(p){
    this.nav.navigateForward(p);
  }

  
}

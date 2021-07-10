import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import {environment} from '../environments/environment.prod';

import {deepskin} from '../confidential/deepskinapi';
import {HttpHeaders} from '@angular/common/http';
import {Token} from '../model/token';
import {ApideepskinService} from './services/apideepskin.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private httpService: ApideepskinService) {
    this.initializeApp();
  }

  initializeApp() {
    if (deepskin.token === '') {
      this.httpService.getToken().subscribe( res => {
        deepskin.token = res.token;
      });
    }
    SplashScreen.hide();
  }
}

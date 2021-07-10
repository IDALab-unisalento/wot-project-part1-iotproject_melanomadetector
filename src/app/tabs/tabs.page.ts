import { Component } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {AuthService} from '../services/auth.service';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
              private authService: AuthService
             ) {}

  logout(){
    this.authService.logout();
  }

}

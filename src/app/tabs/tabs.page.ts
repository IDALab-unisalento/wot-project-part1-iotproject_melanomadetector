import { Component } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {AuthService} from '../services/auth.service';
import {ActionSheetController, MenuController} from '@ionic/angular';
import {PhotoService, UserPhoto} from '../services/photo.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
              private authService: AuthService,
             ) {}

  logout(){
    this.authService.logout();
  }

}

import {Component, OnInit} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { UserPhoto, PhotoService } from '../services/photo.service';
import {AuthService} from '../services/auth.service';
import {User} from '../../model/user';
import {Readings} from '../../model/readings';
import {ReadingsService} from '../services/readings.service';
import {AuthConstants} from '../config/auth-constants';
import {StorageService} from '../services/storage.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  loggedInUser: User = {} as User;
  readings: Readings[] = [];
  constructor(private readingService: ReadingsService,private storageService:StorageService, private authService: AuthService, public photoService: PhotoService, public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
    this.storageService.get(AuthConstants.AUTH).then(res => {
      this.loggedInUser = res;
      this.readingService.getAllReadingsUser(this.loggedInUser.id).subscribe(res2 => {
        this.readings = res2;
      });
    });
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }


  logout(){
    this.authService.logout();
  }
}

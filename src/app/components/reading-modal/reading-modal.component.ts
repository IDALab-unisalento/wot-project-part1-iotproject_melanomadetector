import {Component, Input, OnInit} from '@angular/core';
import {Readings_raw} from '../../../model/readings_raw';
import {ModalController} from '@ionic/angular';
import {User} from '../../../model/user';
import {AuthService} from '../../services/auth.service';
import { base64StringToBlob } from 'blob-util';
import {ReadingsService} from '../../services/readings.service';
import {AuthConstants} from '../../config/auth-constants';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-reading-modal',
  templateUrl: './reading-modal.component.html',
  styleUrls: ['./reading-modal.component.scss'],
})
export class ReadingModalComponent implements OnInit {

  @Input() reading: Readings_raw;
  @Input() image: string;
  contentType: 'image/jpg';
  loggedInUser: User = { } as User;
  readingPostData = {
    image: null,
    highestPredictionClass: '',
    highestPredictionScore: 0.0,
    risk: 0,
    user: {} as User
  };
  constructor(private storageService:StorageService, private readingsService: ReadingsService, private modalController: ModalController, private authService: AuthService) { }

  ngOnInit() {
      this.storageService.get(AuthConstants.AUTH).then(res => {
          this.loggedInUser = res;
      });
  }

  dismiss(){
      this.readingPostData.image = this.image;
      this.readingPostData.highestPredictionClass =
        this.reading['8way_results'] === 0 ? 'MELANOMA' : this.reading['8way_results'] === 1 ? 'NEVUS' : this.reading['8way_results'] === 2 ? 'BASAL CELL CARCINOMA' : this.reading['8way_results'] === 3 ?  'ACTINIC KERATOSIS' : this.reading['8way_results'] === 4 ? 'SOLAR LENTIGO' : this.reading['8way_results'] === 5 ? 'DERMATOFIBROMA' : this.reading['8way_results'] === 6 ? 'VASCULAR LESION' : 'SQUAMOUS CELL CARCINOMA';
    this.readingPostData.highestPredictionScore = this.reading['8way_prob'][this.reading['8way_results']];
    this.readingPostData.risk = this.reading.risk;
    this.readingPostData.user = this.loggedInUser;
    this.readingsService.saveReading(this.readingPostData).subscribe(res => {
      console.log(res);
    });
    this.modalController.dismiss();
  }
}

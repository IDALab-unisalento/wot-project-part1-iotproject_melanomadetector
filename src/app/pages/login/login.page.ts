import { Component, OnInit } from '@angular/core';
import {AuthConstants} from '../../config/auth-constants';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {StorageService} from '../../services/storage.service';
import {ToastService} from '../../services/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    "email": '',
    "password": '',
    "type":'patient'
  };

  constructor( private router: Router,
               private authService: AuthService,
               private storageService: StorageService,
               private toastService: ToastService) { }

  ngOnInit() {
  }

  validateInputs(){
    const email = this.postData.email.trim();
    const password = this.postData.password.trim();

    return (this.postData.email && this.postData.password && this.postData.email.length > 0 && this.postData.password.length > 0);
  }
  loginAction(){
    if (this.validateInputs()){
      console.log(this.postData);
      this.authService.login(this.postData).subscribe((res: any) => {
            if (res) {
              this.storageService.store(AuthConstants.AUTH, res).then(() => {
                this.router.navigate(['home']);
              });

            }else{
              this.toastService.presentToast('incorrect user or pwd');
            }
          },
          (error: any) => {
            this.toastService.presentToast('Network connection error:' + JSON.stringify(error));
          });
    }else  {
      this.toastService.presentToast('Please enter valid data');
    }
  }
}

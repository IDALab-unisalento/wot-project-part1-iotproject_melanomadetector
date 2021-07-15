import { Component, OnInit } from '@angular/core';
import {AuthConstants} from '../../config/auth-constants';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public postDataUser = {
    name: '',
    surname: '',
    age: 0,
    email: '',
    password: '',
    codiceFiscale: ''
  };

  constructor(private router: Router,
              private authService: AuthService,
              private storageService: StorageService,
              private toastService: ToastService) { }
  ngOnInit() {
  }

  validateInputs(){
    const email = this.postDataUser.email.trim();
    const password = this.postDataUser.password.trim();

    return this.postDataUser.email && this.postDataUser.password && this.postDataUser.email.length > 0 && this.postDataUser.password.length > 0;
  }
  createPostData(): any{
      return {
          name: this.postDataUser.name,
          surname: this.postDataUser.surname,
          age: this.postDataUser.age,
          email: this.postDataUser.email,
          password: this.postDataUser.password,
          codiceFiscale: this.postDataUser.codiceFiscale,
          type:"patient"
      };
  }
  signupAction(){
    if (this.validateInputs()){
      console.log(this.createPostData());
      this.authService.signup(this.createPostData()).subscribe((res: any) => {
            if (res) {
              this.storageService.store(AuthConstants.AUTH, res).then(() => {
                this.router.navigate(['home']);
              });

            }else{
              this.toastService.presentToast('Error during signup');
            }
          },
          (error: any) => {
            this.toastService.presentToast('Network connection error');
          });
    }else  {
      this.toastService.presentToast('Please enter valid data');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  
  constructor(
    public authService: AuthenticateService,
    public router: Router,
    public toast: ToastController
  ) {
    
  }

  ngOnInit() {
    if(this.authService.isLoggedIn)
    {
      this.router.navigate(['../tabs/tab1']); /// navigate to home if you're logged in
    }
  }

  async presentToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(res.user.emailVerified) {
          this.presentToast("You have successfully logged in.");      
          this.router.navigate(['tabs/exam-info']);
        } else {
          this.presentToast('Email is not verified');
          return false;
        }
      }).catch((error) => {
        this.presentToast(error.message);
      })
  }

  navigateToRegistration(){
    this.router.navigate(['/register']);  
  }

}

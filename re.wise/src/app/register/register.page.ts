import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseOpService } from '../firebase-op.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(
    public authService: AuthenticateService,
    public router: Router,
    public toast: ToastController,
    private firebaseOp: FirebaseOpService
  ) { }

  universities: any[] = [];

  ngOnInit(){
    this.firebaseOp.getUniversities().subscribe((data)=>
    {
      data.forEach(function (doc) {
        this.universities.push(doc.payload.doc.data())
        console.log(this.universities);
      }.bind(this));
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  //MAKE SURE TO AUTHENTICATE ALL THE FIELDS

  signUp(email, password, name, username, studentNo, university){
    this.authService.RegisterUser(email.value, password.value, name.value, username.value, studentNo.value, university.value)
    .then((res) => {
      // Do something here
      this.authService.SendVerificationMail()
      this.router.navigate(['../verify-email']);
      this.presentToast("You have been registered.");
    }).catch((error) => {
      this.presentToast(error.message);
    })
}
}

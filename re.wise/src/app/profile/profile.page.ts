import { Component, OnInit } from '@angular/core';
import { FirebaseOpService } from '../firebase-op.service';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user;
  university;

  constructor(
    private firebaseOp: FirebaseOpService,
    public authService: AuthenticateService
  ) { }

  ngOnInit() {
    this.firebaseOp.getUser().subscribe((user)=>
    {
      this.user = user.data();
      console.log(this.user);

      this.firebaseOp.getUniversities().subscribe((universities)=>
      {
        universities.forEach(university => {
          console.log(university.payload.doc.data());
          if(university.payload.doc.data()['id'] == this.user.university){
            this.university = university.payload.doc.data()['title'];
          }
        });
      })     
    })
  }

}

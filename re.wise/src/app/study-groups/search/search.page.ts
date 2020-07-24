import { Component, OnInit } from '@angular/core';
import { FirebaseOpService } from 'src/app/firebase-op.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  availableStudyGroups = [];

  constructor(
    private firebaseOp: FirebaseOpService
  ) { }


  ngOnInit() {

    this.firebaseOp.getStudyGroups().subscribe((data)=>
    {
      
      this.availableStudyGroups = [];
      data.forEach(function (doc) {
        console.log(doc.payload.doc.id);
        if(doc.payload.doc.data().host != JSON.parse(localStorage.getItem("user")).uid && doc.payload.doc.data().members.length < doc.payload.doc.data().maxParticipants)
        {

          this.availableStudyGroups.push(doc.payload.doc);
        }
      }.bind(this));
      console.log(this.availableStudyGroups);
    });


  }

  join(tId: string){
      this.firebaseOp.joinGroup(tId, JSON.parse(localStorage.getItem("user")).uid);
  }

}

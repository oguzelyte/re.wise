import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseOpService } from 'src/app/firebase-op.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private firebaseOp: FirebaseOpService
  ) { }

  studyGroup;
  host;
  members = [];

  ngOnInit() {
     
      // the path has to match the one in the routing config
      this.activatedRoute.queryParams.subscribe(params => {
        if (!params) {
          //redirect
          this.router.navigate(["/tabs/tab1"]);
          return;
        }
        this.studyGroup = {
          date : params.date,
          description : params.description,
          host : params.host,
          location : params.location,
          locationNotes : params.locationNotes,
          members : params.members,
          time : params.time,
          max : params.max,
          moduleCode : params.moduleCode,
          duration : params.duration,
          title: params.title
        }
        console.log(this.studyGroup);
        if(JSON.parse(localStorage.getItem("user")).uid == params.host)
        {
          this.host='My Group';
        }
        else
        {
          this.host="Lead: " + JSON.parse(localStorage.getItem("user")).name;
        }
        console.log(this.studyGroup);
        this.members = [];
        this.studyGroup.members.forEach(element => {
          this.firebaseOp.getName(element).subscribe(function(doc) {
            if (doc.exists) {
                this.members.push(doc.data().name);
                console.log("Document data:", doc.data().name);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
          }.bind(this))
        });
        
        //this.studyGroup.title = params["firstname"];
        //this.lastname = params["lastname"];
    });

  }


}

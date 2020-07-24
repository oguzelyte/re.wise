import { Component, OnInit } from '@angular/core';
import { FirebaseOpService } from '../firebase-op.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-study-groups',
  templateUrl: './study-groups.page.html',
  styleUrls: ['./study-groups.page.scss'],
})
export class StudyGroupsPage implements OnInit {

  constructor(
    private firebaseOp: FirebaseOpService,
    private router: Router
  ) { }

  myStudyGroups: any[] = [];
  otherStudyGroups: any[] = [];
  currentView: any[] = [];

  ngOnInit() {
    this.firebaseOp.getStudyGroups().subscribe((data)=>
    {
      
      this.myStudyGroups = [];
      this.otherStudyGroups = [];
      data.forEach(function (doc) {
        if(doc.payload.doc.data().host == JSON.parse(localStorage.getItem("user")).uid)
        {
          this.myStudyGroups.push(doc.payload.doc);
        } else {
          doc.payload.doc.data().members.forEach(element => {
            if(element === JSON.parse(localStorage.getItem("user")).uid)
            {
              this.otherStudyGroups.push(doc.payload.doc);
            }
          });
        }
      }.bind(this));
      console.log(this.myStudyGroups);
        console.log(this.otherStudyGroups);
    });
  }

  public send(studyGroup) {
    console.log(studyGroup);
    let navigationExtras: NavigationExtras = {
        queryParams: {
            date: studyGroup.data().date,
            description: studyGroup.data().description,
            host: studyGroup.data().host,
            location: studyGroup.data().location,
            locationNotes: studyGroup.data().locationNotes,
            members: studyGroup.data().members,
            time: studyGroup.data().time,
            max: studyGroup.data().maxParticipants,
            moduleCode: studyGroup.data().moduleCode,
            duration: studyGroup.data().duration,
            title: studyGroup.data().title
        }
    };
    this.router.navigate(["./tabs/study-groups/" + studyGroup.id], navigationExtras);
}

  segmentChanged(ev: any) {
    if(ev.detail.value == "mine")
    {
      this.currentView = this.myStudyGroups;
    } else {
      this.currentView = this.otherStudyGroups;
    }
  }

  getDays(endDate: string): number{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date);
    console.log(endDate);
    const timeDiff  = (Number(new Date(endDate))) - Number((new Date(date)));
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  }

  delete()
  {

  }
  
  edit()
  {

  }
}

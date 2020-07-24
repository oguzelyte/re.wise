import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticateService } from './authenticate.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseOpService {


  constructor(
    private firestore: AngularFirestore,
    private auth: AuthenticateService
  ) { }

  getUniversities() {
    return this.firestore.collection("universities").snapshotChanges();
  }

  getModules(user) {
    console.log(user.course);
    return this.firestore.collection("universities", ref => ref.where('id', '==', user.university)).get()
  }

  getStudyGroups() {
    if (this.auth.isLoggedIn) {
    return this.firestore.collection("studyGroups").snapshotChanges()
    }
  }


  getUser() {
    if (this.auth.isLoggedIn) {
      return this.firestore.doc("users/" + JSON.parse(localStorage.getItem("user")).uid).get();
    }
  }

  getName(uid) {
      return this.firestore.collection("users").doc(uid).get();
  }

  getLogs(uid: string) {
    if (this.auth.isLoggedIn) {
      return this.firestore.collection(uid).snapshotChanges();
    }
  }

  createUploadLog(url: string, name: string, uid: string, moduleCode: string, category: string, tags: string, title: string, description: string) {
    let log = {
      url: url,
      name: name,
      //uid: uid,
      moduleCode: moduleCode,
      category: category,
      tags: tags,
      description: description
    }
    return this.firestore.collection(uid).add(JSON.parse(JSON.stringify(log)));
  }


  createStudyGroup(title, description, moduleCode,  myDate, time, duration, maxPeople, location, locationNotes) {
    let studyGroup = {
      title: title,
      description: description, 
      moduleCode: moduleCode, 
      date: myDate, 
      time: time, 
      duration: duration, 
      location: location, 
      locationNotes: locationNotes,
      maxParticipants: maxPeople,
      host: JSON.parse(localStorage.getItem("user")).uid,
      members: [JSON.parse(localStorage.getItem("user")).uid],
    }
    return this.firestore.collection('studyGroups').add(JSON.parse(JSON.stringify(studyGroup)));
  }

  deleteLog(logID: string) {
    this.firestore.doc(this.auth.userData.uid + "/" + logID).delete();
  }

  joinGroup(ID: string, member) {
    
    console.log(member);
    this.firestore.doc("studyGroups/" + ID)
    .update({
      members: firebase.firestore.FieldValue.arrayUnion(member)
    }    
    );
  }
  /*
    getTrip(tripID: string) {
      if (this.auth.isLoggedIn) {
        return this.firestore.collectionGroup("trips", ref => ref.where('ID', '==', tripID)).snapshotChanges();
      }
    }
  
    createTrip(trip: Trip) {
      return this.firestore.collection("trips").add(JSON.parse(JSON.stringify(trip)));
    }
  
    updateTrip(trip: Trip) {
      delete trip.ID;
      this.firestore.doc("trips/" + trip.ID).update(trip);
    }
  
    deleteTrip(tripID: string) {
      this.firestore.doc("trips/" + tripID).delete();
    }*/

}

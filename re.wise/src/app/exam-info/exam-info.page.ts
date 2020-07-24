import { Component, OnInit } from "@angular/core";
import { FirebaseOpService } from "../firebase-op.service";
import { Platform } from '@ionic/angular';


@Component({
  selector: "app-exam-info",
  templateUrl: "./exam-info.page.html",
  styleUrls: ["./exam-info.page.scss"],
})
export class ExamInfoPage implements OnInit {
  modules: string[] = [];
  exams: any[] = [];
  currentExam: any;

  constructor(private firebaseOp: FirebaseOpService, private platform: Platform) {}

  ngOnInit() {
    if (this.firebaseOp.getUser() != undefined) {
      this.firebaseOp.getUser().subscribe((user) => {
        this.firebaseOp.getModules(user.data()).subscribe((querySnapshot) => {
          querySnapshot.docs[0].ref
            .collection("courses")
            .where("id", "==", user.data().course)
            .get()
            .then((courses) => {
              courses.forEach((course) => {
                course.ref
                  .collection("years")
                  .where("year", "==", user.data().year)
                  .get()
                  .then((years) => {
                    years.forEach((year) => {
                      year.ref
                        .collection("modules")
                        .get()
                        .then((modules) => {
                          this.modules = [];
                          this.exams = [];
                          modules.forEach((module) => {
                            this.modules.push(module.data().id);
                            this.exams.push(module.data());
                          });
                          this.currentExam = this.exams[0]; // assign the default exam segment
                        });
                    });
                  });
              });
            });
        });
      });
    }
  }

  segmentChanged(ev: any) {
    this.currentExam = this.exams.find( ({id}) => id == ev.detail.value);
  }

  public openMapsApp(location: any) {
    if (this.platform.is('android')) {
      window.location.href = 'geo:' + location;
    } else {
      window.location.href = 'maps://maps.apple.com/?q=' + location;
    }
  }
}

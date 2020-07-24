import { Component, OnInit } from '@angular/core';
import { FirebaseOpService } from 'src/app/firebase-op.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  modules = [];
  myDate: String = new Date().toISOString();
  temp = new Date().getTimezoneOffset() * 60000;
  startDate = new Date(Date.now() - this.temp).toISOString().slice(0, -1);
  constructor(
    public firebaseOp: FirebaseOpService
  ) { }

  ngOnInit() {

    if (this.firebaseOp.getUser() != undefined) {
      this.firebaseOp.getUser().subscribe((user) => {
        this.firebaseOp.getModules(user.data()).subscribe((querySnapshot => {
          querySnapshot.docs[0].ref.collection("courses").where('id', '==', user.data().course)
            .get().then(
              (courses) => {
                courses.forEach(course => {
                  course.ref.collection("years").where('year', '==', user.data().year)
                    .get().then(
                      (years) => {
                        years.forEach(year => {
                          year.ref.collection("modules")
                          .get().then(
                            (modules) => {
                              this.modules = [];
                              modules.forEach(module => {
                                this.modules.push(module.data().id);
                              })
                            }
                          );
                        });
                      }
                    )
                });
              });
        }));;
      });
    }

  }

}

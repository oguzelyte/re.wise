import { Component, OnInit } from '@angular/core';
import { FirebaseOpService } from 'src/app/firebase-op.service';
import { Upload } from 'src/app/upload';
import { UploadFileService } from 'src/app/upload-file.service';
import { AngularFireDatabase } from '@angular/fire/database/database';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  modules: string[] = [];
  categories: string[] = ["Tutorial", "Summary", "Lecture Note", "Exam Answers"];

  selectedFiles: FileList;
  currentFileUpload: Upload;
  progress: { percentage: number } = { percentage: 0 };

  constructor(
    private firebaseOp: FirebaseOpService,
    public uploadService: UploadFileService
  ) {
  }


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


  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  upload(title, description, moduleCode, category, tags) {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new Upload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, moduleCode, category, tags, title, description);
  }
}

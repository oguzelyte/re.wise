import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { map } from 'rxjs/operators';
import { AuthenticateService } from '../authenticate.service';
import { FirebaseOpService } from '../firebase-op.service';
import { AngularFireDatabase } from '@angular/fire/database/database';
import * as firebase from 'firebase';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.page.html',
  styleUrls: ['./uploads.page.scss'],
})
export class UploadsPage implements OnInit {

  uploads: any[] = [];

  constructor(
    //public uploadService: UploadFileService,
    private firebaseOp: FirebaseOpService,
    private auth: AuthenticateService,
    private transfer: FileTransfer,
    private file: File,
    private previewAnyFile: PreviewAnyFile,
    private uploadService: UploadFileService
  ) { }

  ngOnInit() {
    
    if (this.auth.isLoggedIn) {
        this.firebaseOp.getLogs(JSON.parse(localStorage.getItem("user")).uid).subscribe((logs) => {
          this.uploads = []; // emply uploads so that duplicates don't get pushed in
          logs.forEach(function (log) {
            let tempLog = {
              id: log.payload.doc.id,
              data: log.payload.doc.data()
            }
            this.uploads.push(tempLog);
          }.bind(this));
        })
    };
  }

  download(url: string, fileName: string) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(url, this.file.dataDirectory + fileName).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log(error);
    });
  }

  splitTags(tags: string){
    tags.split(',')
  }

  delete(fileID: string, moduleCode: string, category: string, name: string){
    this.uploadService.deleteFileStorage(fileID, moduleCode, category, name);
  }

  preview(url: string){
    this.previewAnyFile.preview(url)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));
  }

  
}

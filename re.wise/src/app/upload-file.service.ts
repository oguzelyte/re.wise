import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';

import { Upload } from './upload';
import { AuthenticateService } from './authenticate.service';
import { FirebaseOpService } from './firebase-op.service';

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {

    private basePath = '/uploads';

    constructor(
        private db: AngularFireDatabase,
        private auth: AuthenticateService,
        private firebaseOp: FirebaseOpService) { }

    pushFileToStorage(fileUpload: Upload, progress: { percentage: number },  moduleCode: string, category: string, tags: string, title: string, description: string) {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`${this.basePath}/${this.auth.userData.uid}/${moduleCode}/${category}/${fileUpload.file.name}`).put(fileUpload.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                // in progress
                const snap = snapshot as firebase.storage.UploadTaskSnapshot;
                progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            },
            (error) => {
                // fail
                console.log(error);
            },
            () => {
                // success
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                    console.log('File available at', downloadURL);
                    fileUpload.url = downloadURL;
                    fileUpload.name = fileUpload.file.name;
                    this.saveFileData(fileUpload);
                }).finally(()=>{
                    this.firebaseOp.createUploadLog(fileUpload.url, fileUpload.name, this.auth.userData.uid, moduleCode, category, tags, title, description)
                });
            }
        );
    }

    private saveFileData(fileUpload: Upload) {
        this.db.list(`${this.basePath}/`).push(fileUpload);
    }

    getFileUploads(numberItems): AngularFireList<Upload> {
        return this.db.list(this.basePath, ref =>
            ref.limitToLast(numberItems));
    }

   /*deleteFileUpload(fileUpload: Upload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
                this.deleteFileStorage(fileUpload.name);
            })
            .catch(error => console.log(error));
    }*/

    private deleteFileDatabase(key: string) {
        return this.db.list(`${this.basePath}/`).remove(key);
    }

    deleteFileStorage(fileID: string, moduleCode: string, category: string, name: string) {
        const storageRef = firebase.storage().ref();
        storageRef.child(`${this.basePath}/${this.auth.userData.uid}/${moduleCode}/${category}/${name}`).delete().finally(()=>
        {
            this.firebaseOp.deleteLog(fileID);
        });
    }
}
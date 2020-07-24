(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploads-uploads-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/uploads.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/uploads.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>uploads</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <div *ngIf=\"uploads.length==0\">\n        <h3>You haven't got any uploads, try uploading some.</h3>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div *ngFor=\"let file of uploads\">\n    <ion-card>\n      <ion-item>\n        <ion-label>\n          <h3>{{file.data.moduleCode}} | {{file.data.category}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-card-header>\n        <ion-card-title>{{file.data.name}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{file.data.description}}\n        <div class=\"tags\">\n          <div class=\"tag\" *ngFor=\"let tag of file.data.tags.split(',')\">\n            {{tag}}\n          </div>\n        </div>\n        <div class=\"actions\">\n          <ion-button (click)=\"preview(file.data.url)\"> <ion-icon name=\"eye-outline\" slot=\"start\"></ion-icon> VIEW</ion-button>\n          <ion-button (click)=\"download(file.data.url, file.data.name)\"> <ion-icon name=\"download-outline\" slot=\"start\"></ion-icon>  DOWNLOAD </ion-button>\n          <ion-button (click)=\"delete(file.id, file.data.moduleCode, file.data.category, file.data.name)\"> <ion-icon name=\"trash-outline\" slot=\"start\"></ion-icon>  DELETE </ion-button>\n        </div>\n        \n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button  [routerLink]=\"['/insert']\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/uploads/uploads-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/uploads/uploads-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UploadsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsPageRoutingModule", function() { return UploadsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _uploads_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uploads.page */ "./src/app/uploads/uploads.page.ts");




const routes = [
    {
        path: '',
        component: _uploads_page__WEBPACK_IMPORTED_MODULE_3__["UploadsPage"]
    }
];
let UploadsPageRoutingModule = class UploadsPageRoutingModule {
};
UploadsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadsPageRoutingModule);



/***/ }),

/***/ "./src/app/uploads/uploads.module.ts":
/*!*******************************************!*\
  !*** ./src/app/uploads/uploads.module.ts ***!
  \*******************************************/
/*! exports provided: UploadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsPageModule", function() { return UploadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _uploads_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uploads-routing.module */ "./src/app/uploads/uploads-routing.module.ts");
/* harmony import */ var _uploads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploads.page */ "./src/app/uploads/uploads.page.ts");







let UploadsPageModule = class UploadsPageModule {
};
UploadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _uploads_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadsPageRoutingModule"]
        ],
        declarations: [_uploads_page__WEBPACK_IMPORTED_MODULE_6__["UploadsPage"]]
    })
], UploadsPageModule);



/***/ }),

/***/ "./src/app/uploads/uploads.page.scss":
/*!*******************************************!*\
  !*** ./src/app/uploads/uploads.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tag {\n  background-color: var(--ion-color-secondary) !important;\n  color: black;\n  border-radius: 12px;\n  margin: 2px 2px 2px 2px;\n  padding: 2px 7px 2px 7px;\n  display: inline-block;\n}\n\n.tags {\n  margin: 10px 0px 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy9DOlxcVXNlcnNcXE9saVxcRGVza3RvcFxccmUud2lzZS9zcmNcXGFwcFxcdXBsb2Fkc1xcdXBsb2Fkcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3VwbG9hZHMvdXBsb2Fkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHMvdXBsb2Fkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW46MnB4IDJweCAycHggMnB4O1xyXG4gICAgcGFkZGluZzoycHggN3B4IDJweCA3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50YWdze1xyXG4gICAgbWFyZ2luOjEwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgLy9jbGVhcjpib3RoO1xyXG59XHJcblxyXG4uYWN0aW9uc3tcclxuICAgIC8vY2xlYXI6Ym90aDtcclxufSIsIi50YWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbjogMnB4IDJweCAycHggMnB4O1xuICBwYWRkaW5nOiAycHggN3B4IDJweCA3cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRhZ3Mge1xuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/uploads/uploads.page.ts":
/*!*****************************************!*\
  !*** ./src/app/uploads/uploads.page.ts ***!
  \*****************************************/
/*! exports provided: UploadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadsPage", function() { return UploadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _upload_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-file.service */ "./src/app/upload-file.service.ts");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/authenticate.service.ts");
/* harmony import */ var _firebase_op_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase-op.service */ "./src/app/firebase-op.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/preview-any-file/ngx */ "./node_modules/@ionic-native/preview-any-file/ngx/index.js");








let UploadsPage = class UploadsPage {
    constructor(
    //public uploadService: UploadFileService,
    firebaseOp, auth, transfer, file, previewAnyFile, uploadService) {
        this.firebaseOp = firebaseOp;
        this.auth = auth;
        this.transfer = transfer;
        this.file = file;
        this.previewAnyFile = previewAnyFile;
        this.uploadService = uploadService;
        this.uploads = [];
    }
    ngOnInit() {
        if (this.auth.isLoggedIn) {
            this.firebaseOp.getLogs(JSON.parse(localStorage.getItem("user")).uid).subscribe((logs) => {
                this.uploads = []; // emply uploads so that duplicates don't get pushed in
                logs.forEach(function (log) {
                    let tempLog = {
                        id: log.payload.doc.id,
                        data: log.payload.doc.data()
                    };
                    this.uploads.push(tempLog);
                }.bind(this));
            });
        }
        ;
    }
    download(url, fileName) {
        const fileTransfer = this.transfer.create();
        fileTransfer.download(url, this.file.dataDirectory + fileName).then((entry) => {
            console.log('download complete: ' + entry.toURL());
        }, (error) => {
            console.log(error);
        });
    }
    splitTags(tags) {
        tags.split(',');
    }
    delete(fileID, moduleCode, category, name) {
        this.uploadService.deleteFileStorage(fileID, moduleCode, category, name);
    }
    preview(url) {
        this.previewAnyFile.preview(url)
            .then((res) => console.log(res))
            .catch((error) => console.error(error));
    }
};
UploadsPage.ctorParameters = () => [
    { type: _firebase_op_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseOpService"] },
    { type: _authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] },
    { type: _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__["PreviewAnyFile"] },
    { type: _upload_file_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"] }
];
UploadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uploads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uploads.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/uploads.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uploads.page.scss */ "./src/app/uploads/uploads.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_op_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseOpService"],
        _authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"],
        _ionic_native_preview_any_file_ngx__WEBPACK_IMPORTED_MODULE_7__["PreviewAnyFile"],
        _upload_file_service__WEBPACK_IMPORTED_MODULE_2__["UploadFileService"]])
], UploadsPage);



/***/ })

}]);
//# sourceMappingURL=uploads-uploads-module-es2015.js.map
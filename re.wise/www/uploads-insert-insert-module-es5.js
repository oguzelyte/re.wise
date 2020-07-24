function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uploads-insert-insert-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/insert/insert.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/insert/insert.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadsInsertInsertPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Back button with a default href -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      icon=\"close\"\n      defaultHref=\"/tabs/tab1\">\n    </ion-back-button>\n    </ion-buttons>\n    <ion-title>  Upload File </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #myForm=\"ngForm\"> \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Title</ion-label>\n      <ion-input type=\"text\" #title ngModel name=\"title\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea #description ngModel name=\"description\" required placeholder=\"Enter a description\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> Module Code </ion-label>\n      <ion-select required ngModel name=\"moduleCode\" #moduleCode value={moduleSelected} okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"{{module}}\" *ngFor=\"let module of modules\"> {{module}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> Category </ion-label>\n      <ion-select required ngModel name=\"category\" value={categorySelected} #category okText=\"Okay\" cancelText=\"Dismiss\">\n        <ion-select-option value=\"{{category}}\" *ngFor=\"let category of categories\"> {{category}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n<!-- \nFIGURE OUT HOW TO SAVE FILES TO FIREBASE CLOUD STORAGE-->\n\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Tags (separated by a comma)</ion-label>\n      <ion-input type=\"text\" #tags ngModel name=\"tags\" required></ion-input>\n    </ion-item> \n\n\n\n    <ion-item lines=\"full\">\n      <ion-label >File Upload (img, pdf, word or excel)</ion-label>\n      <ion-input type=\"file\" accept=\"image/*, .pdf, .doc, .docx, .csv\" #file ngModel name=\"file\" required (change)=\"selectFile($event)\"></ion-input>\n    </ion-item>\n\n\n    <ion-row>\n      <ion-col> \n      <ion-button color=\"secondary\" type=\"submit\" [disabled]=\"myForm.invalid\" (click)=\"upload(title.value, description.value, moduleCode.value, category.value, tags.value)\" expand=\"block\">Upload File</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n    <div *ngIf=\"currentFileUpload\" class=\"progress\">\n      <ion-progress-bar [value]=\"progress.percentage/100\"></ion-progress-bar>{{progress.percentage}}%\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/upload.ts":
  /*!***************************!*\
    !*** ./src/app/upload.ts ***!
    \***************************/

  /*! exports provided: Upload */

  /***/
  function srcAppUploadTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Upload", function () {
      return Upload;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Upload = function Upload(file) {
      _classCallCheck(this, Upload);

      this.file = file;
    };
    /***/

  },

  /***/
  "./src/app/uploads/insert/insert-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/uploads/insert/insert-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: InsertPageRoutingModule */

  /***/
  function srcAppUploadsInsertInsertRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsertPageRoutingModule", function () {
      return InsertPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _insert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./insert.page */
    "./src/app/uploads/insert/insert.page.ts");

    var routes = [{
      path: '',
      component: _insert_page__WEBPACK_IMPORTED_MODULE_3__["InsertPage"]
    }];

    var InsertPageRoutingModule = function InsertPageRoutingModule() {
      _classCallCheck(this, InsertPageRoutingModule);
    };

    InsertPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InsertPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/uploads/insert/insert.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/uploads/insert/insert.module.ts ***!
    \*************************************************/

  /*! exports provided: InsertPageModule */

  /***/
  function srcAppUploadsInsertInsertModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsertPageModule", function () {
      return InsertPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _insert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./insert-routing.module */
    "./src/app/uploads/insert/insert-routing.module.ts");
    /* harmony import */


    var _insert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./insert.page */
    "./src/app/uploads/insert/insert.page.ts");

    var InsertPageModule = function InsertPageModule() {
      _classCallCheck(this, InsertPageModule);
    };

    InsertPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _insert_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsertPageRoutingModule"]],
      declarations: [_insert_page__WEBPACK_IMPORTED_MODULE_6__["InsertPage"]]
    })], InsertPageModule);
    /***/
  },

  /***/
  "./src/app/uploads/insert/insert.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/uploads/insert/insert.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadsInsertInsertPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".progress {\n  padding: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkcy9pbnNlcnQvQzpcXFVzZXJzXFxPbGlcXERlc2t0b3BcXHJlLndpc2Uvc3JjXFxhcHBcXHVwbG9hZHNcXGluc2VydFxcaW5zZXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdXBsb2Fkcy9pbnNlcnQvaW5zZXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXBsb2Fkcy9pbnNlcnQvaW5zZXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIucHJvZ3Jlc3Mge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/uploads/insert/insert.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/uploads/insert/insert.page.ts ***!
    \***********************************************/

  /*! exports provided: InsertPage */

  /***/
  function srcAppUploadsInsertInsertPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsertPage", function () {
      return InsertPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_firebase_op_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/firebase-op.service */
    "./src/app/firebase-op.service.ts");
    /* harmony import */


    var src_app_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/upload */
    "./src/app/upload.ts");
    /* harmony import */


    var src_app_upload_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/upload-file.service */
    "./src/app/upload-file.service.ts");

    var InsertPage = /*#__PURE__*/function () {
      function InsertPage(firebaseOp, uploadService) {
        _classCallCheck(this, InsertPage);

        this.firebaseOp = firebaseOp;
        this.uploadService = uploadService;
        this.modules = [];
        this.categories = ["Tutorial", "Summary", "Lecture Note", "Exam Answers"];
        this.progress = {
          percentage: 0
        };
      }

      _createClass(InsertPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.firebaseOp.getUser() != undefined) {
            this.firebaseOp.getUser().subscribe(function (user) {
              _this.firebaseOp.getModules(user.data()).subscribe(function (querySnapshot) {
                querySnapshot.docs[0].ref.collection("courses").where('id', '==', user.data().course).get().then(function (courses) {
                  courses.forEach(function (course) {
                    course.ref.collection("years").where('year', '==', user.data().year).get().then(function (years) {
                      years.forEach(function (year) {
                        year.ref.collection("modules").get().then(function (modules) {
                          _this.modules = [];
                          modules.forEach(function (module) {
                            _this.modules.push(module.data().id);
                          });
                        });
                      });
                    });
                  });
                });
              });

              ;
            });
          }
        }
      }, {
        key: "selectFile",
        value: function selectFile(event) {
          this.selectedFiles = event.target.files;
          console.log(this.selectedFiles);
        }
      }, {
        key: "upload",
        value: function upload(title, description, moduleCode, category, tags) {
          var file = this.selectedFiles.item(0);
          this.selectedFiles = undefined;
          this.currentFileUpload = new src_app_upload__WEBPACK_IMPORTED_MODULE_3__["Upload"](file);
          this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress, moduleCode, category, tags, title, description);
        }
      }]);

      return InsertPage;
    }();

    InsertPage.ctorParameters = function () {
      return [{
        type: src_app_firebase_op_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseOpService"]
      }, {
        type: src_app_upload_file_service__WEBPACK_IMPORTED_MODULE_4__["UploadFileService"]
      }];
    };

    InsertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-insert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./insert.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/uploads/insert/insert.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./insert.page.scss */
      "./src/app/uploads/insert/insert.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_firebase_op_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseOpService"], src_app_upload_file_service__WEBPACK_IMPORTED_MODULE_4__["UploadFileService"]])], InsertPage);
    /***/
  }
}]);
//# sourceMappingURL=uploads-insert-insert-module-es5.js.map
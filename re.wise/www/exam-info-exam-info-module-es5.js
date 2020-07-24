function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exam-info-exam-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/exam-info/exam-info.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exam-info/exam-info.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExamInfoExamInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Exam Information</ion-title>\n  </ion-toolbar>\n  <ion-segment\n    scrollable\n    (ionChange)=\"segmentChanged($event)\"\n    color=\"secondary\"\n    value=\"{{modules[0]}}\"\n  >\n    <ion-segment-button *ngFor=\"let module of modules\" value=\"{{module}}\">\n      <ion-label>{{module}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content *ngIf=\"currentExam\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>{{ currentExam.title }}</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-item lines=\"none\">\n          <ion-label>\n            Date: <br />\n            {{ currentExam.examDate }}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ion-item lines=\"none\">\n          <ion-label>\n            Time: <br />\n            {{ currentExam.examTime }}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-button (click) = \"openMapsApp(currentExam.location)\">\n          <ion-label>\n            Location\n          </ion-label>\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" color=\"secondary\">\n          <ion-label>\n            {{ currentExam.type.toUpperCase() }}\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <h5>Revision List</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-list text-wrap>\n        <ion-item\n          color=\"primary\"\n          *ngFor=\"let line of currentExam.abstract.split('-'); let i = index\"\n          class=\"ion-text-nowrap\"\n        >\n          <ion-label>\n            {{i+1}}. {{ line }}\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5>Bring to Exam</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list text-wrap>\n          <ion-item *ngFor=\"let line of currentExam.examBring; let i = index\">\n            <ion-icon slot=\"start\" name=\"checkmark-circle\"> </ion-icon>\n            <ion-label>\n              {{ line }}\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/exam-info/exam-info-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/exam-info/exam-info-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: ExamInfoPageRoutingModule */

  /***/
  function srcAppExamInfoExamInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamInfoPageRoutingModule", function () {
      return ExamInfoPageRoutingModule;
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


    var _exam_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./exam-info.page */
    "./src/app/exam-info/exam-info.page.ts");

    var routes = [{
      path: '',
      component: _exam_info_page__WEBPACK_IMPORTED_MODULE_3__["ExamInfoPage"]
    }];

    var ExamInfoPageRoutingModule = function ExamInfoPageRoutingModule() {
      _classCallCheck(this, ExamInfoPageRoutingModule);
    };

    ExamInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExamInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/exam-info/exam-info.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/exam-info/exam-info.module.ts ***!
    \***********************************************/

  /*! exports provided: ExamInfoPageModule */

  /***/
  function srcAppExamInfoExamInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamInfoPageModule", function () {
      return ExamInfoPageModule;
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


    var _exam_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./exam-info-routing.module */
    "./src/app/exam-info/exam-info-routing.module.ts");
    /* harmony import */


    var _exam_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./exam-info.page */
    "./src/app/exam-info/exam-info.page.ts");

    var ExamInfoPageModule = function ExamInfoPageModule() {
      _classCallCheck(this, ExamInfoPageModule);
    };

    ExamInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _exam_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExamInfoPageRoutingModule"]],
      declarations: [_exam_info_page__WEBPACK_IMPORTED_MODULE_6__["ExamInfoPage"]]
    })], ExamInfoPageModule);
    /***/
  },

  /***/
  "./src/app/exam-info/exam-info.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/exam-info/exam-info.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppExamInfoExamInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  white-space: normal !important;\n}\n\nion-item {\n  margin: 3px 0px 3px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbS1pbmZvL0M6XFxVc2Vyc1xcT2xpXFxEZXNrdG9wXFxyZS53aXNlL3NyY1xcYXBwXFxleGFtLWluZm9cXGV4YW0taW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2V4YW0taW5mby9leGFtLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9leGFtLWluZm8vZXhhbS1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgbWFyZ2luOjNweCAwcHggM3B4IDBweDtcclxufSIsImlvbi1sYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICBtYXJnaW46IDNweCAwcHggM3B4IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/exam-info/exam-info.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/exam-info/exam-info.page.ts ***!
    \*********************************************/

  /*! exports provided: ExamInfoPage */

  /***/
  function srcAppExamInfoExamInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamInfoPage", function () {
      return ExamInfoPage;
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


    var _firebase_op_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../firebase-op.service */
    "./src/app/firebase-op.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ExamInfoPage = /*#__PURE__*/function () {
      function ExamInfoPage(firebaseOp, platform) {
        _classCallCheck(this, ExamInfoPage);

        this.firebaseOp = firebaseOp;
        this.platform = platform;
        this.modules = [];
        this.exams = [];
      }

      _createClass(ExamInfoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.firebaseOp.getUser() != undefined) {
            this.firebaseOp.getUser().subscribe(function (user) {
              _this.firebaseOp.getModules(user.data()).subscribe(function (querySnapshot) {
                querySnapshot.docs[0].ref.collection("courses").where("id", "==", user.data().course).get().then(function (courses) {
                  courses.forEach(function (course) {
                    course.ref.collection("years").where("year", "==", user.data().year).get().then(function (years) {
                      years.forEach(function (year) {
                        year.ref.collection("modules").get().then(function (modules) {
                          _this.modules = [];
                          _this.exams = [];
                          modules.forEach(function (module) {
                            _this.modules.push(module.data().id);

                            _this.exams.push(module.data());
                          });
                          _this.currentExam = _this.exams[0]; // assign the default exam segment
                        });
                      });
                    });
                  });
                });
              });
            });
          }
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          this.currentExam = this.exams.find(function (_ref) {
            var id = _ref.id;
            return id == ev.detail.value;
          });
        }
      }, {
        key: "openMapsApp",
        value: function openMapsApp(location) {
          if (this.platform.is('android')) {
            window.location.href = 'geo:' + location;
          } else {
            window.location.href = 'maps://maps.apple.com/?q=' + location;
          }
        }
      }]);

      return ExamInfoPage;
    }();

    ExamInfoPage.ctorParameters = function () {
      return [{
        type: _firebase_op_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseOpService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    ExamInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-exam-info",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./exam-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/exam-info/exam-info.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./exam-info.page.scss */
      "./src/app/exam-info/exam-info.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_op_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseOpService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], ExamInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=exam-info-exam-info-module-es5.js.map
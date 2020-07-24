function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-add-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/study-groups/add/add.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/study-groups/add/add.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudyGroupsAddAddPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n      icon=\"close\"\n      defaultHref=\"/tabs/tab1\">\n    </ion-back-button>\n    </ion-buttons>\n    <ion-title>  Add Study Group </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/study-groups/add/add-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/study-groups/add/add-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: AddPageRoutingModule */

  /***/
  function srcAppStudyGroupsAddAddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPageRoutingModule", function () {
      return AddPageRoutingModule;
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


    var _add_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add.page */
    "./src/app/study-groups/add/add.page.ts");

    var routes = [{
      path: '',
      component: _add_page__WEBPACK_IMPORTED_MODULE_3__["AddPage"]
    }];

    var AddPageRoutingModule = function AddPageRoutingModule() {
      _classCallCheck(this, AddPageRoutingModule);
    };

    AddPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/study-groups/add/add.module.ts":
  /*!************************************************!*\
    !*** ./src/app/study-groups/add/add.module.ts ***!
    \************************************************/

  /*! exports provided: AddPageModule */

  /***/
  function srcAppStudyGroupsAddAddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPageModule", function () {
      return AddPageModule;
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


    var _add_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-routing.module */
    "./src/app/study-groups/add/add-routing.module.ts");
    /* harmony import */


    var _add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add.page */
    "./src/app/study-groups/add/add.page.ts");

    var AddPageModule = function AddPageModule() {
      _classCallCheck(this, AddPageModule);
    };

    AddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPageRoutingModule"]],
      declarations: [_add_page__WEBPACK_IMPORTED_MODULE_6__["AddPage"]]
    })], AddPageModule);
    /***/
  },

  /***/
  "./src/app/study-groups/add/add.page.scss":
  /*!************************************************!*\
    !*** ./src/app/study-groups/add/add.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudyGroupsAddAddPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5LWdyb3Vwcy9hZGQvYWRkLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/study-groups/add/add.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/study-groups/add/add.page.ts ***!
    \**********************************************/

  /*! exports provided: AddPage */

  /***/
  function srcAppStudyGroupsAddAddPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPage", function () {
      return AddPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddPage = /*#__PURE__*/function () {
      function AddPage() {
        _classCallCheck(this, AddPage);
      }

      _createClass(AddPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddPage;
    }();

    AddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/study-groups/add/add.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.page.scss */
      "./src/app/study-groups/add/add.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AddPage);
    /***/
  }
}]);
//# sourceMappingURL=add-add-module-es5.js.map
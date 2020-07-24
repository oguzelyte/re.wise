function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-email-verify-email-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerifyEmailVerifyEmailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-img src='../assets/rewise-logo.png'></ion-img>\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <h2>Thank you for registering!\n      </h2>\n      <p>\n        Please verify your email address.\n      </p>\n    </ion-row>\n    <ion-button color=\"secondary\" type=\"submit\"\n      (click)=\"authService.SendVerificationMail()\"\n      expand=\"block\">\n      Resend Verification Email\n    </ion-button>\n    <ion-button expand=\"full\">\n      Open mail\n    </ion-button>\n    <ion-row class=\"ion-text-center\">\n      <p><a routerLink=\"/login\">\n          Head to the login page\n        </a>\n\n      </p>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/verify-email/verify-email-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/verify-email/verify-email-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: VerifyEmailPageRoutingModule */

  /***/
  function srcAppVerifyEmailVerifyEmailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailPageRoutingModule", function () {
      return VerifyEmailPageRoutingModule;
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


    var _verify_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verify-email.page */
    "./src/app/verify-email/verify-email.page.ts");

    var routes = [{
      path: '',
      component: _verify_email_page__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailPage"]
    }];

    var VerifyEmailPageRoutingModule = function VerifyEmailPageRoutingModule() {
      _classCallCheck(this, VerifyEmailPageRoutingModule);
    };

    VerifyEmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyEmailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verify-email/verify-email.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/verify-email/verify-email.module.ts ***!
    \*****************************************************/

  /*! exports provided: VerifyEmailPageModule */

  /***/
  function srcAppVerifyEmailVerifyEmailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function () {
      return VerifyEmailPageModule;
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


    var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verify-email-routing.module */
    "./src/app/verify-email/verify-email-routing.module.ts");
    /* harmony import */


    var _verify_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify-email.page */
    "./src/app/verify-email/verify-email.page.ts");

    var VerifyEmailPageModule = function VerifyEmailPageModule() {
      _classCallCheck(this, VerifyEmailPageModule);
    };

    VerifyEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPageRoutingModule"]],
      declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPage"]]
    })], VerifyEmailPageModule);
    /***/
  },

  /***/
  "./src/app/verify-email/verify-email.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/verify-email/verify-email.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerifyEmailVerifyEmailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  max-width: 60%;\n  height: auto;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 30px;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\np {\n  margin: auto;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5LWVtYWlsL0M6XFxVc2Vyc1xcT2xpXFxEZXNrdG9wXFxyZS53aXNlL3NyY1xcYXBwXFx2ZXJpZnktZW1haWxcXHZlcmlmeS1lbWFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5we1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLy8gQ1JFQVRFIEFOIFVQTE9BRCBQQUdFIFdJVEggV0hJQ0ggWU9VIFdJTExcclxuLy8gVVBMT0FEIEZJTEVTIFRPIEZJUkVTVE9SRSwgQ0FOIEJFIE9OTFkgUERGIE9SIFdPUkQgRklMRVNcclxuLy8gQU5EIElOIFRIRSBVUExPQUQgU0VDVElPTiBZT1UgV0lMTCBTRUUgQUxMIFRIRSBJTkZPIEFCT1VUIFRIRSBVUExPQURcclxuLy8gRkxPQVRJTkcgQUNUSU9OIEJVVFRPTiBXSUxMIEFMTE9XIFlPVSBUTyBDUkVBVEUgQU4gVVBMT0FEXHJcbi8vIENSRUFURSBBIE1PRFVMRVMgU1RPUkFHRVxyXG4vLyBPTiBVU0VSIEpTT04gRklMRSBDUkVBVEUgRU5UUlkgbW9kdWxlczogY3MyMzQsIGNycjUsIGNkd2VyIC0gV0lUSCBMSVNUIE9GIE1PRFVMRVMgVVNFUiBCRUxPTkdTIFRPIiwiaW9uLWltZyB7XG4gIG1heC13aWR0aDogNjAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnAge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/verify-email/verify-email.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/verify-email/verify-email.page.ts ***!
    \***************************************************/

  /*! exports provided: VerifyEmailPage */

  /***/
  function srcAppVerifyEmailVerifyEmailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function () {
      return VerifyEmailPage;
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


    var _authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authenticate.service */
    "./src/app/authenticate.service.ts");

    var VerifyEmailPage = /*#__PURE__*/function () {
      function VerifyEmailPage(authService) {
        _classCallCheck(this, VerifyEmailPage);

        this.authService = authService;
      }

      _createClass(VerifyEmailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerifyEmailPage;
    }();

    VerifyEmailPage.ctorParameters = function () {
      return [{
        type: _authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]
      }];
    };

    VerifyEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-email.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-email/verify-email.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-email.page.scss */
      "./src/app/verify-email/verify-email.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])], VerifyEmailPage);
    /***/
  }
}]);
//# sourceMappingURL=verify-email-verify-email-module-es5.js.map
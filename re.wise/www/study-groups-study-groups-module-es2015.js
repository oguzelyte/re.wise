(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["study-groups-study-groups-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/study-groups/study-groups.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/study-groups/study-groups.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Study Groups</ion-title>\n  </ion-toolbar>\n  <ion-segment\n    scrollable\n    (ionChange)=\"segmentChanged($event)\"\n    color=\"secondary\"\n    value=\"mine\"\n  >\n    <ion-segment-button value=\"mine\">\n      <ion-label>MINE</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"others\">\n      <ion-label>BY OTHERS</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n<ion-content>\n\n    <!-- fab placed to the bottom end -->\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button  [routerLink]=\"['add']\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/study-groups/study-groups-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/study-groups/study-groups-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: StudyGroupsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyGroupsPageRoutingModule", function() { return StudyGroupsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _study_groups_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./study-groups.page */ "./src/app/study-groups/study-groups.page.ts");




const routes = [
    {
        path: '',
        component: _study_groups_page__WEBPACK_IMPORTED_MODULE_3__["StudyGroupsPage"]
    },
    {
        path: 'add',
        loadChildren: () => __webpack_require__.e(/*! import() | add-add-module */ "add-add-module").then(__webpack_require__.bind(null, /*! ./add/add.module */ "./src/app/study-groups/add/add.module.ts")).then(m => m.AddPageModule)
    }
];
let StudyGroupsPageRoutingModule = class StudyGroupsPageRoutingModule {
};
StudyGroupsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StudyGroupsPageRoutingModule);



/***/ }),

/***/ "./src/app/study-groups/study-groups.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/study-groups/study-groups.module.ts ***!
  \*****************************************************/
/*! exports provided: StudyGroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyGroupsPageModule", function() { return StudyGroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _study_groups_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./study-groups-routing.module */ "./src/app/study-groups/study-groups-routing.module.ts");
/* harmony import */ var _study_groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./study-groups.page */ "./src/app/study-groups/study-groups.page.ts");







let StudyGroupsPageModule = class StudyGroupsPageModule {
};
StudyGroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _study_groups_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudyGroupsPageRoutingModule"]
        ],
        declarations: [_study_groups_page__WEBPACK_IMPORTED_MODULE_6__["StudyGroupsPage"]]
    })
], StudyGroupsPageModule);



/***/ }),

/***/ "./src/app/study-groups/study-groups.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/study-groups/study-groups.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWR5LWdyb3Vwcy9zdHVkeS1ncm91cHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/study-groups/study-groups.page.ts":
/*!***************************************************!*\
  !*** ./src/app/study-groups/study-groups.page.ts ***!
  \***************************************************/
/*! exports provided: StudyGroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyGroupsPage", function() { return StudyGroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudyGroupsPage = class StudyGroupsPage {
    constructor() { }
    ngOnInit() {
    }
};
StudyGroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-study-groups',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./study-groups.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/study-groups/study-groups.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./study-groups.page.scss */ "./src/app/study-groups/study-groups.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StudyGroupsPage);



/***/ })

}]);
//# sourceMappingURL=study-groups-study-groups-module-es2015.js.map
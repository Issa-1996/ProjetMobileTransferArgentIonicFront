(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["depot-depot-module"],{

/***/ "30E+":
/*!***************************************!*\
  !*** ./src/app/depot/depot.module.ts ***!
  \***************************************/
/*! exports provided: DepotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotPageModule", function() { return DepotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _depot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./depot-routing.module */ "p6pz");
/* harmony import */ var _depot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./depot.page */ "vVq7");







let DepotPageModule = class DepotPageModule {
};
DepotPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _depot_routing_module__WEBPACK_IMPORTED_MODULE_5__["DepotPageRoutingModule"]
        ],
        declarations: [_depot_page__WEBPACK_IMPORTED_MODULE_6__["DepotPage"]]
    })
], DepotPageModule);



/***/ }),

/***/ "Nrm7":
/*!***************************************!*\
  !*** ./src/app/depot/depot.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBvdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "p6pz":
/*!***********************************************!*\
  !*** ./src/app/depot/depot-routing.module.ts ***!
  \***********************************************/
/*! exports provided: DepotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotPageRoutingModule", function() { return DepotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _depot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./depot.page */ "vVq7");




const routes = [
    {
        path: '',
        component: _depot_page__WEBPACK_IMPORTED_MODULE_3__["DepotPage"]
    }
];
let DepotPageRoutingModule = class DepotPageRoutingModule {
};
DepotPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DepotPageRoutingModule);



/***/ }),

/***/ "tuZX":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/depot/depot.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>depot</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "vVq7":
/*!*************************************!*\
  !*** ./src/app/depot/depot.page.ts ***!
  \*************************************/
/*! exports provided: DepotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotPage", function() { return DepotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_depot_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./depot.page.html */ "tuZX");
/* harmony import */ var _depot_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./depot.page.scss */ "Nrm7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let DepotPage = class DepotPage {
    constructor() { }
    ngOnInit() {
    }
};
DepotPage.ctorParameters = () => [];
DepotPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-depot',
        template: _raw_loader_depot_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_depot_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DepotPage);



/***/ })

}]);
//# sourceMappingURL=depot-depot-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-snippets-reactive/add-snippets-reactive.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/add-snippets-reactive/add-snippets-reactive.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid {\n  border: 1px solid red;\n}\n"

/***/ }),

/***/ "./src/app/add-snippets-reactive/add-snippets-reactive.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/add-snippets-reactive/add-snippets-reactive.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"snippetForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"col-lg-12\">\n    <div class=\"col-lg-3\">\n      <label>Name</label><input class=\"form-control\" type=\"text\" formControlName=\"name\">\n    </div>\n    <div class=\"col-lg-3\">\n      <label>Language</label><select class=\"form-control\" formControlName=\"language\">\n        <option *ngFor=\"let option of languageList\" [ngValue]=\"option.language\">{{option.language}}</option>\n      </select>\n    </div>\n    <div class=\"col-lg-3\">\n      <label>Code</label><input class=\"form-control\" type=\"text\" formControlName=\"code\">\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\">Add Snippet</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/add-snippets-reactive/add-snippets-reactive.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/add-snippets-reactive/add-snippets-reactive.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddSnippetsReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSnippetsReactiveComponent", function() { return AddSnippetsReactiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-snippets/snippets.services */ "./src/app/list-snippets/snippets.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSnippetsReactiveComponent = /** @class */ (function () {
    function AddSnippetsReactiveComponent(formBuilder, snippetsService, activeRoute, router) {
        this.formBuilder = formBuilder;
        this.snippetsService = snippetsService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.forbiddenNames = ['Kutta', 'Kamina'];
        this.newSnippetAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddSnippetsReactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snippetsService.getLanguageDropdown().subscribe(function (data) {
            _this.languageList = data;
        });
        this.snippetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', this.nameValidator.bind(this)),
            language: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    AddSnippetsReactiveComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.snippetForm.valid);
        this.snippetsService.saveSnippet(this.snippetForm.value).subscribe(function (data) {
            console.log(data);
            _this.newSnippetAdded.emit(data);
        });
    };
    AddSnippetsReactiveComponent.prototype.nameValidator = function (control) {
        if (this.forbiddenNames.indexOf(control.value) !== -1) {
            return { 'forbidden name': true };
        }
        else {
            return null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddSnippetsReactiveComponent.prototype, "newSnippetAdded", void 0);
    AddSnippetsReactiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-snippet-reactive',
            template: __webpack_require__(/*! ./add-snippets-reactive.component.html */ "./src/app/add-snippets-reactive/add-snippets-reactive.component.html"),
            styles: [__webpack_require__(/*! ./add-snippets-reactive.component.css */ "./src/app/add-snippets-reactive/add-snippets-reactive.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_2__["SnippetsServices"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddSnippetsReactiveComponent);
    return AddSnippetsReactiveComponent;
}());



/***/ }),

/***/ "./src/app/add-snippets/add-snippets.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-snippets/add-snippets.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid {\n  border: 1px solid red;\n}\n"

/***/ }),

/***/ "./src/app/add-snippets/add-snippets.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-snippets/add-snippets.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(formData)\" #formData=\"ngForm\">\n  <div class=\"col-lg-12\">\n    <div class=\"col-lg-3\">\n      <label>Name</label><input class=\"form-control\" type=\"text\" ngModel name=\"name\" required>\n    </div>\n    <div class=\"col-lg-3\">\n      <label>Language</label><select class=\"form-control\" ngModel name=\"language\">\n        <option *ngFor=\"let option of languageList\" [ngValue]=\"option.language\">{{option.language}}</option>\n      </select>\n    </div>\n    <div class=\"col-lg-3\">\n      <label>Code</label><input class=\"form-control\" type=\"text\" ngModel name=\"code\">\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\">Add Snippet</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/add-snippets/add-snippets.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-snippets/add-snippets.component.ts ***!
  \********************************************************/
/*! exports provided: AddSnippetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSnippetsComponent", function() { return AddSnippetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-snippets/snippets.services */ "./src/app/list-snippets/snippets.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddSnippetsComponent = /** @class */ (function () {
    function AddSnippetsComponent(snippetsService, route) {
        this.snippetsService = snippetsService;
        this.route = route;
        this.newSnippetAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log('Add Const Initialized');
    }
    AddSnippetsComponent.prototype.saveSnippets = function () {
        var newSnippet = {
            'id': null,
            'name': this.name,
            'language': this.language,
            'code': this.code
        };
        console.log(newSnippet);
        this.snippetsService.saveSnippet(newSnippet);
        this.newSnippetAdded.emit(newSnippet);
    };
    AddSnippetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snippetsService.getLanguageDropdown().subscribe(function (data) {
            _this.languageList = data;
        });
        console.log('Inside Add Snippet Init');
    };
    AddSnippetsComponent.prototype.ngOnChanges = function () {
        console.log('Inside Add Snippet On Changes');
    };
    AddSnippetsComponent.prototype.ngOnDestroy = function () {
        console.log('Inside Add Snippet On Destroy');
    };
    AddSnippetsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form);
        var newSnippet = {
            'id': null,
            'name': form.value.name,
            'language': form.value.language,
            'code': form.value.code
        };
        console.log(newSnippet);
        this.snippetsService.saveSnippet(newSnippet).subscribe(function (data) {
            _this.newSnippetAdded.emit(data);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddSnippetsComponent.prototype, "newSnippetAdded", void 0);
    AddSnippetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-snippet',
            template: __webpack_require__(/*! ./add-snippets.component.html */ "./src/app/add-snippets/add-snippets.component.html"),
            styles: [__webpack_require__(/*! ./add-snippets.component.css */ "./src/app/add-snippets/add-snippets.component.css")]
        }),
        __metadata("design:paramtypes", [_list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_1__["SnippetsServices"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddSnippetsComponent);
    return AddSnippetsComponent;
}());



/***/ }),

/***/ "./src/app/app-footer/app-footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-4 {\n    background-color: #2f2f2f;\n    color: #ffffff;\n}\n"

/***/ }),

/***/ "./src/app/app-footer/app-footer.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid bg-4 text-center\">\n  <p>© 2018 Copyright Swastik</p>\n</footer>\n"

/***/ }),

/***/ "./src/app/app-footer/app-footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.ts ***!
  \****************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.css */ "./src/app/app-footer/app-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_snippets_add_snippets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-snippets/add-snippets.component */ "./src/app/add-snippets/add-snippets.component.ts");
/* harmony import */ var _view_snippets_view_snippets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-snippets/view-snippets.component */ "./src/app/view-snippets/view-snippets.component.ts");
/* harmony import */ var _view_snippets_view_snippet_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-snippets/view-snippet.resolver */ "./src/app/view-snippets/view-snippet.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'addSnippet', component: _add_snippets_add_snippets_component__WEBPACK_IMPORTED_MODULE_2__["AddSnippetsComponent"] },
    { path: 'viewSnippet/:id', component: _view_snippets_view_snippets_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], resolve: {
            viewres: _view_snippets_view_snippet_resolver__WEBPACK_IMPORTED_MODULE_4__["ViewSnippetResolver"]
        } }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [],
            providers: [_view_snippets_view_snippet_resolver__WEBPACK_IMPORTED_MODULE_4__["ViewSnippetResolver"]],
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-snippet-list></app-snippet-list>\n<div class=\"col-lg-12\">\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_snippets_list_snippets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-snippets/list-snippets.component */ "./src/app/list-snippets/list-snippets.component.ts");
/* harmony import */ var _add_snippets_add_snippets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-snippets/add-snippets.component */ "./src/app/add-snippets/add-snippets.component.ts");
/* harmony import */ var _view_snippets_view_snippets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-snippets/view-snippets.component */ "./src/app/view-snippets/view-snippets.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-snippets/snippets.services */ "./src/app/list-snippets/snippets.services.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _text_color_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text-color.directive */ "./src/app/text-color.directive.ts");
/* harmony import */ var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-footer/app-footer.component */ "./src/app/app-footer/app-footer.component.ts");
/* harmony import */ var _add_snippets_reactive_add_snippets_reactive_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-snippets-reactive/add-snippets-reactive.component */ "./src/app/add-snippets-reactive/add-snippets-reactive.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_snippets_list_snippets_component__WEBPACK_IMPORTED_MODULE_5__["ListSnippetsComponent"],
                _add_snippets_add_snippets_component__WEBPACK_IMPORTED_MODULE_6__["AddSnippetsComponent"],
                _view_snippets_view_snippets_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"],
                _text_color_directive__WEBPACK_IMPORTED_MODULE_11__["ColorDirective"],
                _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_12__["AppFooterComponent"],
                _add_snippets_reactive_add_snippets_reactive_component__WEBPACK_IMPORTED_MODULE_13__["AddSnippetsReactiveComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRouting"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"]
            ],
            providers: [_list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_9__["SnippetsServices"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list-snippets/list-snippets.component.html":
/*!************************************************************!*\
  !*** ./src/app/list-snippets/list-snippets.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>List Of Snippets</h1>\n<ng-select [items]=\"listOfSnippets\"\n           bindLabel=\"name\"\n           bindValue=\"id\"\n           [(ngModel)]=\"filteredSnippet\" (change)=\"search()\">\n</ng-select>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Language</th>\n      <th>Code</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of listOfSnippets\">\n      <th>{{ item.id }}</th>\n      <th>{{ item.name }}</th>\n      <th>{{ item.language }}</th>\n      <th appColor>{{ item.code }}</th>\n      <th>\n        <span class=\"glyphicon glyphicon-pencil\" [routerLink]=\"['/viewSnippet', item.id]\"></span>\n      </th>\n    </tr>\n  </tbody>\n</table>\n<button class=\"btn btn-primary\" (click)=\"test()\">Test</button>\n<button class=\"btn btn-primary\" (click)=\"showAddToggle()\">{{showAdd ? 'Cancel':'Create'}}</button>\n<button class=\"btn btn-primary\" (click)=\"showAddReactiveToggle()\">{{showAddReactive ? 'Cancel':'Create Reactive'}}</button>\n<div *ngIf='showAdd'>\n  <app-add-snippet (newSnippetAdded)='updateSnippet($event)'></app-add-snippet>\n</div>\n<div *ngIf='showAddReactive'>\n  <app-add-snippet-reactive (newSnippetAdded)='updateSnippet($event)'></app-add-snippet-reactive>\n</div>\n<router-outlet (deleteSnippetEvent)='delete($event)'></router-outlet>\n"

/***/ }),

/***/ "./src/app/list-snippets/list-snippets.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/list-snippets/list-snippets.component.ts ***!
  \**********************************************************/
/*! exports provided: ListSnippetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSnippetsComponent", function() { return ListSnippetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _snippets_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snippets.services */ "./src/app/list-snippets/snippets.services.ts");
/* harmony import */ var _add_snippets_add_snippets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-snippets/add-snippets.component */ "./src/app/add-snippets/add-snippets.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListSnippetsComponent = /** @class */ (function () {
    function ListSnippetsComponent(snippetsService, changeRef) {
        this.snippetsService = snippetsService;
        this.changeRef = changeRef;
        this.listOfSnippets = [];
        this.showAdd = false;
        this.showUpdate = false;
        this.showAddReactive = false;
    }
    ListSnippetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snippetsService.getSnippets();
        this.codeSnippetSubscription = this.snippetsService.getSnippetUpdateListener().subscribe(function (data) {
            _this.listOfSnippets = data;
        });
        console.log(this.addInfo.name + 'update');
        this.people = ['Souj', 'Swas', 'Shan', 'Jyo'];
    };
    ListSnippetsComponent.prototype.addSnippetEventHandler = function (event) {
        this.listOfSnippets.push(event);
    };
    ListSnippetsComponent.prototype.showSnippet = function (snippet) {
        this.showAdd = false;
        this.showUpdate = true;
        console.log('SSS');
        console.log(snippet.name);
        this.selectedSnippet = snippet;
    };
    ListSnippetsComponent.prototype.showAddToggle = function () {
        console.log('Inside show add' + this.showAdd);
        this.showAdd = !this.showAdd;
    };
    ListSnippetsComponent.prototype.deleteSnippetEventHandler = function (event) {
        console.log('Delete Handler');
        this.listOfSnippets.splice(this.listOfSnippets.indexOf(event), 1);
    };
    ListSnippetsComponent.prototype.ngOnChanges = function () {
        console.log('List Snippet On Changes');
    };
    ListSnippetsComponent.prototype.ngOnDestroy = function () {
        console.log('List Snippet On Destroy');
    };
    ListSnippetsComponent.prototype.ngDoCheck = function () {
    };
    ListSnippetsComponent.prototype.updateSnippet = function (newSnippet) {
        this.listOfSnippets.push(newSnippet);
    };
    ListSnippetsComponent.prototype.test = function () {
        console.log('test');
        this.snippetsService.testParameter();
    };
    ListSnippetsComponent.prototype.delete = function (event) {
        console.log('Delete Called');
    };
    ListSnippetsComponent.prototype.showAddReactiveToggle = function () {
        this.showAddReactive = !this.showAddReactive;
    };
    ListSnippetsComponent.prototype.search = function () {
        var _this = this;
        if (this.filteredSnippet !== undefined) {
            this.listOfSnippets = this.listOfSnippets.filter(function (snippet) {
                return _this.filteredSnippet === snippet.id;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_add_snippets_add_snippets_component__WEBPACK_IMPORTED_MODULE_2__["AddSnippetsComponent"]),
        __metadata("design:type", Object)
    ], ListSnippetsComponent.prototype, "addInfo", void 0);
    ListSnippetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snippet-list',
            template: __webpack_require__(/*! ./list-snippets.component.html */ "./src/app/list-snippets/list-snippets.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_snippets_services__WEBPACK_IMPORTED_MODULE_1__["SnippetsServices"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ListSnippetsComponent);
    return ListSnippetsComponent;
}());



/***/ }),

/***/ "./src/app/list-snippets/snippets.services.ts":
/*!****************************************************!*\
  !*** ./src/app/list-snippets/snippets.services.ts ***!
  \****************************************************/
/*! exports provided: SnippetsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnippetsServices", function() { return SnippetsServices; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SnippetsServices = /** @class */ (function () {
    function SnippetsServices(http) {
        this.http = http;
        this.eventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.codeSnippets = [];
        this.codeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    SnippetsServices.prototype.getSnippets = function () {
        var _this = this;
        this.http.get('snippets/allsnippets').subscribe(function (data) {
            _this.codeSnippets = data;
            _this.codeUpdated.next(_this.codeSnippets.slice());
        });
    };
    SnippetsServices.prototype.getSnippetUpdateListener = function () {
        return this.codeUpdated.asObservable();
    };
    SnippetsServices.prototype.saveSnippet = function (codeSnippets) {
        console.log('Inside Save Snippet');
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        return this.http.post('snippets/savesnippet', codeSnippets);
    };
    SnippetsServices.prototype.deleteSnippet = function (id) {
        console.log('ID to be deleted' + id);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        this.http.delete('snippets/deletesnippet/' + id).subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); }, function () { return console.log('delete complete'); });
    };
    SnippetsServices.prototype.getSnippetById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["RequestOptions"]({ headers: headers });
        return this.http.get('snippets/getsnippet/' + id);
    };
    SnippetsServices.prototype.testParameter = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                first_name: 'ss',
                last_name: 'pp'
            }
        });
        this.http.post('snippets/testpost', params).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
    };
    SnippetsServices.prototype.getLanguageDropdown = function () {
        return this.http.get('snippets/getSupportedLanguages');
    };
    SnippetsServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SnippetsServices);
    return SnippetsServices;
}());



/***/ }),

/***/ "./src/app/text-color.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/text-color.directive.ts ***!
  \*****************************************/
/*! exports provided: ColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDirective", function() { return ColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorDirective = /** @class */ (function () {
    function ColorDirective(elementRef) {
        elementRef.nativeElement.style.color = 'red';
        elementRef.nativeElement.style.backgroundColor = 'orange';
    }
    ColorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[appColor]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ColorDirective);
    return ColorDirective;
}());



/***/ }),

/***/ "./src/app/view-snippets/view-snippet.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/view-snippets/view-snippet.resolver.ts ***!
  \********************************************************/
/*! exports provided: ViewSnippetResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSnippetResolver", function() { return ViewSnippetResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-snippets/snippets.services */ "./src/app/list-snippets/snippets.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewSnippetResolver = /** @class */ (function () {
    function ViewSnippetResolver(snippetService) {
        this.snippetService = snippetService;
    }
    ViewSnippetResolver.prototype.resolve = function (route, rstate) {
        console.log('Route Resolver Called');
        return this.snippetService.getSnippetById(route.params['id']);
    };
    ViewSnippetResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_1__["SnippetsServices"]])
    ], ViewSnippetResolver);
    return ViewSnippetResolver;
}());



/***/ }),

/***/ "./src/app/view-snippets/view-snippets.component.html":
/*!************************************************************!*\
  !*** ./src/app/view-snippets/view-snippets.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n  <div class=\"col-lg-3\">\n    <label>Name</label><input class=\"form-control\" type=\"text\" [(ngModel)]=\"currentSnippet.name\">\n  </div>\n  <div class=\"col-lg-3\">\n    <label>Language</label><select class=\"form-control\" type=\"text\" [(ngModel)]=\"currentSnippet.language\">\n        <option *ngFor=\"let option of languageList\" [ngValue]=\"option.language\">{{option.language}}</option>\n    </select>\n  </div>\n  <div class=\"col-lg-3\">\n    <label appColor>Code</label><input class=\"form-control\" type=\"text\" [(ngModel)]=\"currentSnippet.code\">\n  </div>\n  <div class=\"col-lg-3\">\n    <button class=\"btn btn-primary\" (click)=\"updateSnippets()\">Update Snippet</button>\n    <button class=\"btn btn-danger\" (click)=\"deleteSnippets()\">Delete Snippet</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/view-snippets/view-snippets.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/view-snippets/view-snippets.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-snippets/snippets.services */ "./src/app/list-snippets/snippets.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(snippetsService, activatedRoute, route) {
        var _this = this;
        this.snippetsService = snippetsService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.deleteSnippetEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentSnippet = { id: 0, name: '', language: '', code: '' };
        /*const productId = this.activatedRoute.snapshot.params['id'];
        this.snippetsService.getSnippetById(productId).subscribe(
          (data: CodeSnippets) => {
            this.currentSnippet = data;
          }
        );*/
        this.activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.viewres; })).subscribe(function (data) {
            _this.currentSnippet = data;
        });
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snippetsService.getLanguageDropdown().subscribe(function (data) {
            _this.languageList = data;
        });
    };
    ViewComponent.prototype.updateSnippets = function () {
        console.log('updateSnippets');
        this.snippetsService.saveSnippet(this.currentSnippet);
        this.route.navigate(['/']);
    };
    ViewComponent.prototype.deleteSnippets = function () {
        this.snippetsService.deleteSnippet(this.currentSnippet.id);
        this.deleteSnippetEvent.emit();
        this.route.navigate(['/']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ViewComponent.prototype, "deleteSnippetEvent", void 0);
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-snippets',
            template: __webpack_require__(/*! ./view-snippets.component.html */ "./src/app/view-snippets/view-snippets.component.html")
        }),
        __metadata("design:paramtypes", [_list_snippets_snippets_services__WEBPACK_IMPORTED_MODULE_1__["SnippetsServices"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/swastik/Documents/AngularSpringBootWorkspace/course-snippet-app/course-snippet-app-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
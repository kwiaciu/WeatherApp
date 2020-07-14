function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _weather_weather_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./weather/weather.component */
    "./src/app/weather/weather.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weather");
        }
      },
      directives: [_weather_weather_component__WEBPACK_IMPORTED_MODULE_1__["WeatherComponent"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  color: #12acc7;\n  text-align: center;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  justify-content: space-evenly;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: aquamarine;\n}\n\n.turquoise[_ngcontent-%COMP%] {\n  background-color: turquoise;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RzXFx3c2JcXFpqYXpkIDhcXGFuZ3VsYXItd29ya3NwYWNlXFxnYWxsZXJ5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0pGOztBREtFO0VBQ0UsYUFBQTtBQ0hKOztBREtJO0VBQ0UsNEJBQUE7QUNITjs7QURRQTtFQUNFLDJCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqIHtcclxuLy8gICBmb250LWZhbWlseTogXCJMdWNpZGEgU2Fuc1wiLCBcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcIiwgXCJMdWNpZGEgR3JhbmRlXCIsXHJcbi8vICAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4vLyB9XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6IHJnYigxOCwgMTcyLCAxOTkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGxpIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udHVycXVvaXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XHJcbn1cclxuXHJcbmFwcC13ZWF0aGVyIHtcclxufVxyXG4iLCJoMSB7XG4gIGNvbG9yOiAjMTJhY2M3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG51bCBsaSB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG51bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG5cbi50dXJxdW9pc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _weather_weather_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./weather/weather.component */
    "./src/app/weather/weather.component.ts");
    /* harmony import */


    var _weather_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./weather/current-weather/current-weather.component */
    "./src/app/weather/current-weather/current-weather.component.ts");
    /* harmony import */


    var _weather_future_weather_future_weather_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./weather/future-weather/future-weather.component */
    "./src/app/weather/future-weather/future-weather.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");

    var routes = [{
      path: '',
      component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"]
    }, {
      path: 'header',
      component: _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
    }, {
      path: 'weather',
      component: _weather_weather_component__WEBPACK_IMPORTED_MODULE_10__["WeatherComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"], _weather_weather_component__WEBPACK_IMPORTED_MODULE_10__["WeatherComponent"], _weather_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_11__["CurrentWeatherComponent"], _weather_future_weather_future_weather_component__WEBPACK_IMPORTED_MODULE_12__["FutureWeatherComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"], _weather_weather_component__WEBPACK_IMPORTED_MODULE_10__["WeatherComponent"], _weather_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_11__["CurrentWeatherComponent"], _weather_future_weather_future_weather_component__WEBPACK_IMPORTED_MODULE_12__["FutureWeatherComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes)],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_weather_weather_component__WEBPACK_IMPORTED_MODULE_10__["WeatherComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_18__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Dir"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_l"], _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"], _weather_weather_component__WEBPACK_IMPORTED_MODULE_10__["WeatherComponent"], _weather_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_11__["CurrentWeatherComponent"], _weather_future_weather_future_weather_component__WEBPACK_IMPORTED_MODULE_12__["FutureWeatherComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/gallery/gallery.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/gallery/gallery.component.ts ***!
    \**********************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GalleryComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_li_2_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var i_r4 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.handleClick(i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var picture_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentIndex === i_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r3.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", picture_r3.alt);
      }
    }

    function GalleryComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.handlePrev();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GalleryComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.handleNext();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent() {
        var _this = this;

        _classCallCheck(this, GalleryComponent);

        this.pictures = [{
          src: 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80',
          alt: 'basket of cats'
        }, {
          src: 'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          alt: 'cat'
        }, {
          src: 'https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1278&q=80',
          alt: 'two cats'
        }];
        this.currentIndex = 0;
        setInterval(function () {
          if (_this.currentIndex < _this.pictures.length - 1) {
            _this.currentIndex++;
          } else {
            _this.currentIndex = 0;
          }
        }, 5000);
      }

      _createClass(GalleryComponent, [{
        key: "handleClick",
        value: function handleClick(index) {
          this.currentIndex = index;
        }
      }, {
        key: "handlePrev",
        value: function handlePrev() {
          this.currentIndex = this.currentIndex - 1;
        }
      }, {
        key: "handleNext",
        value: function handleNext() {
          this.currentIndex = this.currentIndex + 1;
        }
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)();
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 7,
      vars: 5,
      consts: [[1, "miniatures"], [3, "active", 4, "ngFor", "ngForOf"], [1, "big-picture"], [3, "src", "alt"], ["class", "left", 3, "click", 4, "ngIf"], ["class", "right", 3, "click", 4, "ngIf"], [3, "src", "alt", "click"], [1, "left", 3, "click"], [1, "arrow"], [1, "right", 3, "click"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleryComponent_li_2_Template, 2, 4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryComponent_div_5_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleryComponent_div_6_Template, 3, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pictures);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pictures[ctx.currentIndex].src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.pictures[ctx.currentIndex].alt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentIndex !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentIndex < ctx.pictures.length - 1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["section[_ngcontent-%COMP%] {\n  border: solid 1px darkgray;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  gap: 1rem;\n}\n\n.miniatures[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-auto-rows: 1fr;\n  gap: 1rem;\n}\n\n.miniatures[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.miniatures[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  transition: all 0.2s ease-in-out;\n}\n\n.big-picture[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.big-picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.big-picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  border-radius: 2rem;\n  line-height: 4rem;\n  text-align: center;\n  position: absolute;\n  color: whitesmoke;\n  right: 10%;\n  bottom: 10%;\n  background-color: #0000008e;\n  transition: all 0.2s ease-in-out;\n}\n\n.big-picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  background-color: #000000d8;\n  cursor: pointer;\n}\n\n.big-picture[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 1000;\n}\n\n.big-picture[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  left: 10%;\n}\n\n.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9DOlxccHJvamVjdHNcXHdzYlxcWmphemQgOFxcYW5ndWxhci13b3Jrc3BhY2VcXGdhbGxlcnkvc3JjXFxhcHBcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNBRjs7QURFRTtFQUNFLG9DQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQ0FBQTtBQ0RKOztBREtBO0VBQ0Usa0JBQUE7QUNGRjs7QURJRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUNISjs7QURLSTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQ0hOOztBRE1JO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSk47O0FEUUU7RUFDRSxTQUFBO0FDTko7O0FEV0U7RUFDRSxZQUFBO0FDUko7O0FEYUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ1ZKOztBRGNBO0VBQ0UsYUFBQTtBQ1hGIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggZGFya2dyYXk7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubWluaWF0dXJlcyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1yb3dzOiAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG5cclxuICBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLmJpZy1waWN0dXJlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGVmdCB7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBpbWcge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxufVxyXG5cclxubGkge1xyXG4gIGltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCJzZWN0aW9uIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZGFya2dyYXk7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ubWluaWF0dXJlcyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcbiAgZ2FwOiAxcmVtO1xufVxuLm1pbmlhdHVyZXMgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4ubWluaWF0dXJlcyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5iaWctcGljdHVyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iaWctcGljdHVyZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYmlnLXBpY3R1cmUgZGl2IHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcmlnaHQ6IDEwJTtcbiAgYm90dG9tOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uYmlnLXBpY3R1cmUgZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGQ4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmlnLXBpY3R1cmUgZGl2IGkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuLmJpZy1waWN0dXJlIC5sZWZ0IHtcbiAgbGVmdDogMTAlO1xufVxuXG4uYWN0aXZlIGltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxubGkgaW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 2,
      vars: 0,
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["p[_ngcontent-%COMP%] {\n  color: turquoise;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxwcm9qZWN0c1xcd3NiXFxaamF6ZCA4XFxhbmd1bGFyLXdvcmtzcGFjZVxcZ2FsbGVyeS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGNvbG9yOiB0dXJxdW9pc2U7XHJcbn1cclxuIiwicCB7XG4gIGNvbG9yOiB0dXJxdW9pc2U7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/weather/backgrounds.ts":
  /*!****************************************!*\
    !*** ./src/app/weather/backgrounds.ts ***!
    \****************************************/

  /*! exports provided: backgrounds */

  /***/
  function srcAppWeatherBackgroundsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "backgrounds", function () {
      return backgrounds;
    });

    var backgrounds = {
      '01d': 'https://player.vimeo.com/video/210729888?background=1&autoplay=1&loop=1&byline=0&title=0',
      '01n': 'https://player.vimeo.com/video/382149552?background=1&autoplay=1&loop=1&byline=0&title=0',
      '02d': 'https://player.vimeo.com/video/350239638?background=1&autoplay=1&loop=1&byline=0&title=0',
      '02n': 'https://player.vimeo.com/video/357938694?background=1&autoplay=1&loop=1&byline=0&title=0',
      '03d': 'https://player.vimeo.com/video/378388898?background=1&autoplay=1&loop=1&byline=0&title=0',
      '03n': 'https://player.vimeo.com/video/385175564?background=1&autoplay=1&loop=1&byline=0&title=0',
      '04d': 'https://player.vimeo.com/video/399232131?background=1&autoplay=1&loop=1&byline=0&title=0',
      '04n': 'https://player.vimeo.com/video/385175564?background=1&autoplay=1&loop=1&byline=0&title=0',
      '09d': 'https://player.vimeo.com/video/377769527?background=1&autoplay=1&loop=1&byline=0&title=0',
      '09n': 'https://player.vimeo.com/video/349605213?background=1&autoplay=1&loop=1&byline=0&title=0',
      '10d': 'https://player.vimeo.com/video/314009652?background=1&autoplay=1&loop=1&byline=0&title=0',
      '10n': 'https://player.vimeo.com/video/293913779?background=1&autoplay=1&loop=1&byline=0&title=0',
      '11d': 'https://player.vimeo.com/video/387901246?background=1&autoplay=1&loop=1&byline=0&title=0',
      '11n': 'https://player.vimeo.com/video/291718076?background=1&autoplay=1&loop=1&byline=0&title=0',
      '13d': 'https://player.vimeo.com/video/375346491?background=1&autoplay=1&loop=1&byline=0&title=0',
      '13n': 'https://player.vimeo.com/video/191381877?background=1&autoplay=1&loop=1&byline=0&title=0',
      '50d': 'https://player.vimeo.com/video/369251264?background=1&autoplay=1&loop=1&byline=0&title=0',
      '50n': 'https://player.vimeo.com/video/362723523?background=1&autoplay=1&loop=1&byline=0&title=0'
    };
    /***/
  },

  /***/
  "./src/app/weather/current-weather/current-weather.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/weather/current-weather/current-weather.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CurrentWeatherComponent */

  /***/
  function srcAppWeatherCurrentWeatherCurrentWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentWeatherComponent", function () {
      return CurrentWeatherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CurrentWeatherComponent_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.CurrentWeatherIconSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CurrentWeatherComponent_li_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rain: ", ctx_r1.CurrentRain(), "mm");
      }
    }

    function CurrentWeatherComponent_li_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Snow: ", ctx_r2.CurrentSnow(), "mm");
      }
    }

    var CurrentWeatherComponent = function CurrentWeatherComponent() {
      var _this2 = this;

      _classCallCheck(this, CurrentWeatherComponent);

      this.City = function () {
        return _this2.potato['name'];
      };

      this.Country = function () {
        return _this2.potato['sys']['country'];
      };

      this.CurrentTemperature = function () {
        return Math.round(_this2.potato['main']['temp']);
      };

      this.CurrentFeelTemperature = function () {
        return Math.round(_this2.potato['main']['feels_like']);
      };

      this.CurrentWeatherDesc = function () {
        var desc = _this2.potato['weather'][0]['description'];
        return desc.charAt(0).toUpperCase() + desc.slice(1);
      };

      this.CurrentWeatherIconSrc = function () {
        return "assets/icon/png/".concat(_this2.potato['weather'][0]['icon'], ".png");
      };

      this.CurrentPressure = function () {
        return _this2.potato['main']['pressure'];
      };

      this.CurrentHumidity = function () {
        return _this2.potato['main']['humidity'];
      };

      this.CurrentClouds = function () {
        return _this2.potato['clouds']['all'];
      };

      this.CurrentWind = function () {
        return _this2.potato['wind']['speed'];
      }; // every method should be like this actually, since api doc states that if something is not measured its suddently not in response


      this.CurrentRain = function () {
        return _this2.potato['rain'] !== undefined ? _this2.potato['rain']['1h'] : null;
      };

      this.CurrentSnow = function () {
        return _this2.potato['snow'] !== undefined ? _this2.potato['snow']['1h'] : null;
      };
    };

    CurrentWeatherComponent.ɵfac = function CurrentWeatherComponent_Factory(t) {
      return new (t || CurrentWeatherComponent)();
    };

    CurrentWeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrentWeatherComponent,
      selectors: [["app-current-weather"]],
      inputs: {
        potato: "potato"
      },
      decls: 28,
      vars: 12,
      consts: [[1, "main"], [1, "left"], [1, "right"], ["class", "icon", "alt", "weather icon", 3, "src", 4, "ngIf"], [1, "details"], [4, "ngIf"], ["alt", "weather icon", 1, "icon", 3, "src"]],
      template: function CurrentWeatherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CurrentWeatherComponent_img_8_Template, 1, 1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CurrentWeatherComponent_li_26_Template, 2, 1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CurrentWeatherComponent_li_27_Template, 2, 1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.City());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Country());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CurrentWeatherIconSrc());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.CurrentTemperature(), "\xB0C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.CurrentWeatherDesc());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Apparent temperature: ", ctx.CurrentFeelTemperature(), "\xB0C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pressure: ", ctx.CurrentPressure(), " hPa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Humidity: ", ctx.CurrentHumidity(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cloudiness: ", ctx.CurrentClouds(), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wind: ", ctx.CurrentWind(), "m/s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CurrentRain());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CurrentSnow());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\narticle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: whitesmoke;\n  width: 600px;\n  margin: auto;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n}\n\narticle[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  margin: 0 1rem 1rem 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\narticle[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 80px;\n  margin: 1rem;\n}\n\narticle[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\narticle[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  margin: 0 1rem 0 1rem;\n}\n\narticle[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 90px;\n  line-height: 30px;\n}\n\n@media only screen and (max-width: 600px) {\n  article[_ngcontent-%COMP%] {\n    width: 90%;\n    min-width: auto;\n  }\n  article[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  article[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-wrap: none;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9jdXJyZW50LXdlYXRoZXIvQzpcXHByb2plY3RzXFx3c2JcXFpqYXpkIDhcXGFuZ3VsYXItd29ya3NwYWNlXFxnYWxsZXJ5L3NyY1xcYXBwXFx3ZWF0aGVyXFxjdXJyZW50LXdlYXRoZXJcXGN1cnJlbnQtd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2VhdGhlci9jdXJyZW50LXdlYXRoZXIvY3VycmVudC13ZWF0aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENFO0VBQ0Usd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBRENJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDTjs7QURFSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FOOztBRElFO0VBQ0UscUJBQUE7QUNGSjs7QURJSTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNGTjs7QURPQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGVBQUE7RUNKRjtFRE1FO0lBQ0Usc0JBQUE7RUNKSjtFRFFJO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNOTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci9jdXJyZW50LXdlYXRoZXIvY3VycmVudC13ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gIC5tYWluIHtcclxuICAgIG1hcmdpbjogMCAxcmVtIDFyZW0gMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXRhaWxzIHtcclxuICAgIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBhcnRpY2xlIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcblxyXG4gICAgLm1haW4ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmFydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbmFydGljbGUgLm1haW4ge1xuICBtYXJnaW46IDAgMXJlbSAxcmVtIDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmFydGljbGUgLm1haW4gLmljb24ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMXJlbTtcbn1cbmFydGljbGUgLm1haW4gLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmFydGljbGUgLmRldGFpbHMge1xuICBtYXJnaW46IDAgMXJlbSAwIDFyZW07XG59XG5hcnRpY2xlIC5kZXRhaWxzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDkwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGFydGljbGUge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG4gIGFydGljbGUgLm1haW4ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgYXJ0aWNsZSAuZGV0YWlscyB1bCB7XG4gICAgZmxleC13cmFwOiBub25lO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentWeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-current-weather',
          templateUrl: './current-weather.component.html',
          styleUrls: ['./current-weather.component.scss']
        }]
      }], function () {
        return [];
      }, {
        potato: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/weather/future-weather/future-weather.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/weather/future-weather/future-weather.component.ts ***!
    \********************************************************************/

  /*! exports provided: FutureWeatherComponent */

  /***/
  function srcAppWeatherFutureWeatherFutureWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FutureWeatherComponent", function () {
      return FutureWeatherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FutureWeatherComponent_li_2_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
      }

      if (rf & 2) {
        var date_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.ForecastWeatherIconSrc(date_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FutureWeatherComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FutureWeatherComponent_li_2_img_5_Template, 1, 1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var date_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 7, date_r1["dt_txt"], "EEEE, d MMMM y"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ForecastWeatherIconSrc(date_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.ForecastTemperature(date_r1), "\xB0C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ForecastWeatherDesc(date_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pressure: ", ctx_r0.ForecastPressure(date_r1), " hPa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Humidity: ", ctx_r0.ForecastHumidity(date_r1), "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Wind: ", ctx_r0.ForecastWind(date_r1), "m/s");
      }
    }

    var FutureWeatherComponent = function FutureWeatherComponent() {
      var _this3 = this;

      _classCallCheck(this, FutureWeatherComponent);

      //"dt_txt": "2020-05-13 06:00:00"
      this.checkDays = function () {
        var days = [];
        var today = new Date();

        if (today.getHours() < 12) {
          today.setDate(today.getDate() - 1);
        }

        for (var index = 1; index < 6; index++) {
          var day = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() + index));
          days.push("".concat(day.toISOString().slice(0, 10), " 12:00:00"));
        }

        return days;
      };

      this.getForecastData = function () {
        return _this3.checkDays().map(function (date) {
          return _this3.tomato['list'].find(function (singleResult) {
            return singleResult['dt_txt'] === date;
          });
        });
      };

      this.ForecastTemperature = function (data) {
        return Math.round(data['main']['temp']);
      }; // ForecastFeelTemperature = (data) => Math.round(data['main']['feels_like']);


      this.ForecastWeatherDesc = function (data) {
        var desc = data['weather'][0]['description'];
        return desc.charAt(0).toUpperCase() + desc.slice(1);
      };

      this.ForecastWeatherIconSrc = function (data) {
        return "assets/icon/png/".concat(data['weather'][0]['icon'], ".png");
      };

      this.ForecastPressure = function (data) {
        return data['main']['pressure'];
      };

      this.ForecastHumidity = function (data) {
        return data['main']['humidity'];
      }; // ForecastClouds = (data) => data['clouds']['all'];


      this.ForecastWind = function (data) {
        return data['wind']['speed'];
      };
    };

    FutureWeatherComponent.ɵfac = function FutureWeatherComponent_Factory(t) {
      return new (t || FutureWeatherComponent)();
    };

    FutureWeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FutureWeatherComponent,
      selectors: [["app-future-weather"]],
      inputs: {
        tomato: "tomato"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "forecast"], ["class", "day", 4, "ngFor", "ngForOf"], [1, "day"], [1, "header"], ["class", "icon", "alt", "weather icon", 3, "src", 4, "ngIf"], [1, "details"], ["alt", "weather icon", 1, "icon", 3, "src"]],
      template: function FutureWeatherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FutureWeatherComponent_li_2_Template, 18, 10, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getForecastData());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: ["ul[_ngcontent-%COMP%] {\n  margin: 1rem;\n  color: whitesmoke;\n  list-style: none;\n  padding: 0;\n}\nul.forecast[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\nh4[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  margin-top: 0;\n}\n.day[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 1rem;\n  width: min(220px);\n  margin: 1rem;\n}\n.day[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.day[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 50px;\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9mdXR1cmUtd2VhdGhlci9DOlxccHJvamVjdHNcXHdzYlxcWmphemQgOFxcYW5ndWxhci13b3Jrc3BhY2VcXGdhbGxlcnkvc3JjXFxhcHBcXHdlYXRoZXJcXGZ1dHVyZS13ZWF0aGVyXFxmdXR1cmUtd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2VhdGhlci9mdXR1cmUtd2VhdGhlci9mdXR1cmUtd2VhdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREdBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGO0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvZnV0dXJlLXdlYXRoZXIvZnV0dXJlLXdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgJi5mb3JlY2FzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuaDQge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uZGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB3aWR0aDogbWluKDIyMHB4KTtcclxuICBtYXJnaW46IDFyZW07XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwidWwge1xuICBtYXJnaW46IDFyZW07XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxudWwuZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5oNCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmRheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IG1pbigyMjBweCk7XG4gIG1hcmdpbjogMXJlbTtcbn1cbi5kYXkgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZGF5IC5oZWFkZXIgLmljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FutureWeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-future-weather',
          templateUrl: './future-weather.component.html',
          styleUrls: ['./future-weather.component.scss']
        }]
      }], function () {
        return [];
      }, {
        tomato: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/weather/weather.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/weather/weather.component.ts ***!
    \**********************************************/

  /*! exports provided: WeatherComponent */

  /***/
  function srcAppWeatherWeatherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeatherComponent", function () {
      return WeatherComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _backgrounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./backgrounds */
    "./src/app/weather/backgrounds.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    function WeatherComponent_iframe_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "iframe", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function WeatherComponent_iframe_1_Template_iframe_load_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.loaded();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.chosenBackground, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function WeatherComponent_section_2_mat_hint_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.errorMessage);
      }
    }

    function WeatherComponent_section_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeatherComponent_section_2_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.location = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeatherComponent_section_2_mat_hint_6_Template, 2, 1, "mat-hint", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_section_2_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.handleSearch();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Find");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
      }
    }

    function WeatherComponent_section_3_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeatherComponent_section_3_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.reset();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check another");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WeatherComponent_section_3_app_current_weather_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-current-weather", 15);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("potato", ctx_r12.currentWeatherData);
      }
    }

    function WeatherComponent_section_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherComponent_section_3_button_1_Template, 2, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherComponent_section_3_app_current_weather_2_Template, 1, 1, "app-current-weather", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentWeatherData);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.currentWeatherData);
      }
    }

    function WeatherComponent_section_4_app_future_weather_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-future-weather", 17);
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tomato", ctx_r15.forecastWeatherData);
      }
    }

    function WeatherComponent_section_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherComponent_section_4_app_future_weather_1_Template, 1, 1, "app-future-weather", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.forecastWeatherData);
      }
    }

    function WeatherComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var WeatherComponent = /*#__PURE__*/function () {
      function WeatherComponent(sanitizer, httpClient) {
        var _this4 = this;

        _classCallCheck(this, WeatherComponent);

        this.sanitizer = sanitizer;
        this.httpClient = httpClient;
        this.location = '';
        this.backgroundURL = _backgrounds__WEBPACK_IMPORTED_MODULE_1__["backgrounds"];
        this.currentWeatherData = null;
        this.forecastWeatherData = null;
        this.chosenBackground = null;
        this.errorMessage = null; //TODO error message using form control and validation

        this.isLoaded = false;

        this.background = function () {
          _this4.chosenBackground = _this4.sanitizer.bypassSecurityTrustResourceUrl(_this4.backgroundURL[_this4.currentWeatherData['weather'][0]['icon']]);
        };

        this.loaded = function () {
          _this4.isLoaded = true;
        };

        this.reset = function () {
          _this4.location = '';
          _this4.currentWeatherData = null;
          _this4.forecastWeatherData = null;
          _this4.chosenBackground = null;
          _this4.errorMessage = null;
          _this4.isLoaded = false;
        };
      }

      _createClass(WeatherComponent, [{
        key: "handleSearch",
        value: function handleSearch() {
          var _this5 = this;

          this.httpClient.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.location, "&units=metric&appid=7bd0dc94a3212db6f91d5eb723443c2f")).subscribe({
            next: function next(data) {
              _this5.currentWeatherData = Object.assign({}, data);

              _this5.background();
            },
            error: function error(err) {
              return _this5.errorMessage = err['error']['message'];
            }
          });
          console.log(this.errorMessage);
          this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q=".concat(this.location, "&units=metric&appid=7bd0dc94a3212db6f91d5eb723443c2f")).subscribe(function (data) {
            return _this5.forecastWeatherData = Object.assign({}, data);
          });
        }
      }]);

      return WeatherComponent;
    }();

    WeatherComponent.ɵfac = function WeatherComponent_Factory(t) {
      return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    WeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeatherComponent,
      selectors: [["app-weather"]],
      decls: 6,
      vars: 5,
      consts: [[1, "vimeo-wrapper"], ["frameborder", "0", "allowfullscreen", "", 3, "src", "load", 4, "ngIf"], ["class", "app-wrapper", 4, "ngIf"], [4, "ngIf"], ["class", "vimeo-wrapper", 4, "ngIf"], ["frameborder", "0", "allowfullscreen", "", 3, "src", "load"], [1, "app-wrapper"], ["action", "", 1, "entry"], [1, ""], ["for", "input-city"], ["matInput", "", "id", "input-city", "name", "city", "type", "text", 3, "ngModel", "ngModelChange"], ["matRipple", "", "mat-stroked-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click", 4, "ngIf"], [3, "potato", 4, "ngIf"], ["mat-stroked-button", "", "color", "accent", 3, "click"], [3, "potato"], [3, "tomato", 4, "ngIf"], [3, "tomato"]],
      template: function WeatherComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeatherComponent_iframe_1_Template, 1, 1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeatherComponent_section_2_Template, 9, 2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WeatherComponent_section_3_Template, 3, 2, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WeatherComponent_section_4_Template, 2, 1, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeatherComponent_div_5_Template, 2, 0, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentWeatherData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.currentWeatherData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded && ctx.currentWeatherData);
        }
      },
      styles: [".app-wrapper[_ngcontent-%COMP%] {\n  background-color: #b2ebf2;\n  height: 100vh;\n  width: 100vw;\n  display: block;\n}\n\n.entry[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 2rem;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n  transform: translate(-50%, -50%);\n  width: 300px;\n  height: 200px;\n  padding: 2rem;\n  background-color: whitesmoke;\n  border-radius: 1rem;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n}\n\n.entry[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.vimeo-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n.vimeo-wrapper[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%] {\n  position: relative;\n  top: calc(50% - 50px);\n  left: calc(50% - 50px);\n}\n\n.vimeo-wrapper[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 56.25vw;\n  \n  min-height: 100vh;\n  min-width: 177.77vh;\n  \n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.mat-hint[_ngcontent-%COMP%] {\n  color: #b00020;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9DOlxccHJvamVjdHNcXHdzYlxcWmphemQgOFxcYW5ndWxhci13b3Jrc3BhY2VcXGdhbGxlcnkvc3JjXFxhcHBcXHdlYXRoZXJcXHdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLDBFQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUFpQixnREFBQTtFQUNqQixpQkFBQTtFQUNBLG1CQUFBO0VBQXFCLGlEQUFBO0VBQ3JCLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0dGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmViZjI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5lbnRyeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi52aW1lby13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5tYXQtc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gIH1cclxufVxyXG4udmltZW8td3JhcHBlciBpZnJhbWUge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDU2LjI1dnc7IC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDkvMTYqMTAwID0gNTYuMjUgKi9cclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDE3Ny43N3ZoOyAvKiBHaXZlbiBhIDE2OjkgYXNwZWN0IHJhdGlvLCAxNi85KjEwMCA9IDE3Ny43NyAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5tYXQtaGludCB7XHJcbiAgY29sb3I6ICNiMDAwMjA7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuIiwiLmFwcC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyZWJmMjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVudHJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA0MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuLmVudHJ5IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4udmltZW8td3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udmltZW8td3JhcHBlciAubWF0LXNwaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcbn1cblxuLnZpbWVvLXdyYXBwZXIgaWZyYW1lIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDU2LjI1dnc7XG4gIC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDkvMTYqMTAwID0gNTYuMjUgKi9cbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTc3Ljc3dmg7XG4gIC8qIEdpdmVuIGEgMTY6OSBhc3BlY3QgcmF0aW8sIDE2LzkqMTAwID0gMTc3Ljc3ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5tYXQtaGludCB7XG4gIGNvbG9yOiAjYjAwMDIwO1xuICBmb250LXNpemU6IG1lZGl1bTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-weather',
          templateUrl: './weather.component.html',
          styleUrls: ['./weather.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\projects\wsb\Zjazd 8\angular-workspace\gallery\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
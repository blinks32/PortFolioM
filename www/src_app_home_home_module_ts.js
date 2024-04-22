"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule] }); })();


/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emailjs/browser */ 7624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class HomePage {
  constructor(nav, loadingCtrl, fb, alertCtrl) {
    this.nav = nav;
    this.loadingCtrl = loadingCtrl;
    this.fb = fb;
    this.alertCtrl = alertCtrl; // Initialize the form

    this.contactForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  } //start the scene


  ngOnInit() {
    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  sendEmail() {
    var _this = this;

    return (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Create a loading spinner
      const loading = yield _this.loadingCtrl.create({
        message: 'Sending your message...'
      });

      if (_this.contactForm.valid && _this.contactForm.get('email')?.value) {
        const templateParams = {
          from_name: _this.contactForm.get('name')?.value,
          to_name: 'Chinedu',
          message: _this.contactForm.get('message')?.value,
          from_email: _this.contactForm.get('email')?.value,
          to_email: 'playstudio86@gmail.com'
        }; // Show the loading spinner

        yield loading.present();
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__["default"].send('service_nv9pe6g', 'template_veo4r98', templateParams, 'WKkpGLeomUoJAg0om').then( /*#__PURE__*/function () {
          var _ref = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
            console.log('Email sent successfully!', response.status, response.text); // Hide the loading spinner

            yield loading.dismiss(); // Show a success alert

            const alert = yield _this.alertCtrl.create({
              header: 'Success',
              message: 'Your message has been sent successfully!',
              buttons: ['OK']
            });
            yield alert.present();
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch( /*#__PURE__*/function () {
          var _ref2 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
            console.error('Failed to send email:', error); // Hide the loading spinner

            yield loading.dismiss(); // Show an error alert

            const alert = yield _this.alertCtrl.create({
              header: 'Error',
              message: 'There was a problem sending your message. Please try again.',
              buttons: ['OK']
            });
            yield alert.present();
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      } else {
        // Dismiss the loading spinner if it's still visible
        yield loading.dismiss(); // Show a validation error alert

        const alert = yield _this.alertCtrl.create({
          header: 'Validation Error',
          message: 'Please fill out all required fields and ensure the email is valid.',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  gotoProfile() {
    this.nav.navigateForward('profile');
  }

  scrollToBottom() {
    this.content.scrollToBottom();
  }

}

HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController));
};

HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["app-home"]],
  viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  decls: 152,
  vars: 3,
  consts: [[3, "fullscreen"], ["id", "background", 1, "background-section"], [1, "background-image"], ["src", "assets/imgs/ui.jpeg", "alt", "Profile Image"], ["id", "about", 1, "section", "about"], [1, "intro-card", "animated", "fadeInUp"], [1, "profile-image"], ["src", "assets/imgs/pic.jpeg", "alt", "Profile Image"], [1, "ion-text-center"], ["expand", "block", "shape", "round", "href", "https://www.linkedin.com/in/chinedu-etoamaihe-a041a6105/", "target", "_blank", 1, "centered-button"], ["slot", "icon-only", "name", "logo-linkedin"], ["expand", "block", "shape", "round", "href", "https://github.com/blinks32", "target", "_blank", 1, "centered-button"], ["slot", "icon-only", "name", "logo-github"], ["expand", "block", "shape", "round", "href", "https://twitter.com/documentMe_", "target", "_blank", 1, "centered-button"], ["slot", "icon-only", "name", "logo-twitter"], ["expand", "block", "shape", "round", "target", "_blank", 1, "centered-button", 3, "click"], ["slot", "icon-only", "name", "mail"], ["id", "portfolio-toolbar"], ["id", "projects", 1, "section", "projects"], ["animated", "", "fadeInUp", "", 1, "project-card", "animated", "fadeInLeft"], ["src", "https://pbs.twimg.com/profile_images/1664599707027488770/mnC6E6TL_400x400.jpg", "alt", "Project Image"], ["expand", "block", "shape", "round", 3, "click"], ["expand", "block", "shape", "round", "href", "https://twitter.com/documentMe_", "target", "_blank"], ["src", "https://releases-cdn.legendsoflearning.com/legends/image/upload/c_fill,g_auto:classic,h_300,w_300/dubfgji5jfemvbnunpnr", "alt", "Project Image"], ["expand", "block", "shape", "round", "href", "https://app.legendsoflearning.com/game/astro/3248?partner=legends-developer&learning_objective_id=408"], ["src", "https://releases-cdn.legendsoflearning.com/legends/image/upload/c_fill,g_auto:classic,h_300,w_300/qdpok67ue6ohik3p3pwm", "alt", "Project Image"], ["expand", "block", "shape", "round", "href", "https://app.legendsoflearning.com/game/escape/3309?partner=legends-developer&learning_objective_id=364"], ["src", "https://releases-cdn.legendsoflearning.com/legends/image/upload/c_fill,g_auto:classic,h_300,w_300/tdlm9y5dg3yyift3gdop", "alt", "Project Image"], ["expand", "block", "shape", "round", "href", "https://app.legendsoflearning.com/game/rounding-with-tom/3167?partner=legends-developer&learning_objective_id=1795"], ["id", "skills", 1, "section", "skills"], [1, "skill-card", "animated", "fadeInUp"], ["id", "contact", 1, "section", "contact"], [1, "animated", "fadeInUp"], [3, "formGroup", "ngSubmit"], ["position", "floating"], ["formControlName", "name", "type", "text", "required", ""], ["formControlName", "email", "type", "email", "required", ""], ["formControlName", "message", "required", ""], ["type", "submit", "expand", "block", "size", "large", "shape", "round", 3, "disabled"], [1, "contact-details"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0)(1, "section", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 4)(5, "ion-card", 5)(6, "ion-card-header")(7, "ion-avatar", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-card-title", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Etoamaihe Chinedu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-card-content")(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "I'm A Self Taught, Passionate Full Stack Game Developer with up to 8 years experience. I have worked on so many projects, below are a few projects I'm currently managing.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-grid")(15, "ion-row")(16, "ion-col")(17, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " LinkedIn ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-col")(21, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Github ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-col")(25, "ion-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Twitter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-col")(29, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_29_listener() {
        return ctx.scrollToBottom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Contact ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 17)(33, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "section", 18)(36, "ion-grid")(37, "ion-row")(38, "ion-col")(39, "ion-card", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "ion-card-header")(42, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Personal Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "ion-card-content")(45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "A simple 3d running game with a twist, here the player uses power ups to defeat their opponent.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "ion-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_47_listener() {
        return ctx.gotoProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "View Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "ion-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "View Project on X");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "ion-col")(52, "ion-card", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ion-card-header")(55, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Astro");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "ion-card-content")(58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Help the astronaut build an atom. Using an atom generator located in a distant part of space.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "ion-button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "View Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "ion-col")(63, "ion-card", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "ion-card-header")(66, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Escape");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "ion-card-content")(69, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Your city has been ravaged by earthquakes caused by plate tectonics. You must escape the disaster!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "ion-button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "View Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "ion-col")(74, "ion-card", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "ion-card-header")(77, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Rounding With Tom");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "ion-card-content")(80, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "During the game you help Tom find his friends while you learn how to round to any decimal place ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "ion-button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "View Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 17)(85, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "section", 29)(88, "ion-grid")(89, "ion-row")(90, "ion-col")(91, "ion-card", 30)(92, "ion-card-header")(93, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Unity");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "ion-card-content")(96, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Unity is A game development Engine");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "ion-col")(99, "ion-card", 30)(100, "ion-card-header")(101, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "C#");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "ion-card-content")(104, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "C sharp is a programming language.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "ion-col")(107, "ion-card", 30)(108, "ion-card-header")(109, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Firebase");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "ion-card-content")(112, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "platform for creating applications.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "ion-col")(115, "ion-card", 30)(116, "ion-card-header")(117, "ion-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "GIMP");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "ion-card-content")(120, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "free graphics editor used for image editing.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "section", 31)(123, "ion-card", 32)(124, "ion-card-header")(125, "ion-card-title", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Contact Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "ion-card-content")(128, "form", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function HomePage_Template_form_ngSubmit_128_listener() {
        return ctx.sendEmail();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "ion-item")(130, "ion-label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "ion-input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "ion-item")(134, "ion-label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](136, "ion-input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "ion-item")(138, "ion-label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "ion-textarea", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "ion-button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 39)(144, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "For inquiries, you can also reach me via email at:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Playstudio86@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Or give me a call at:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "+2347041684556");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](128);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.contactForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  position: relative;\n}\nion-content[_ngcontent-%COMP%]   #portfolio-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n  margin-top: 4%;\n  margin-bottom: 4%;\n}\nion-content[_ngcontent-%COMP%]   #portfolio-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .profile-image[_ngcontent-%COMP%] {\n  width: 100px; \n  height: 100px; \n  border: 2px solid #fff; \n  border-radius: 50%; \n  margin: 0 auto; \n  display: block; \n}\nion-content[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\nion-content[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.5;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 40px;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: 10px;\n  border-radius: 10px;\n  flex: 1;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n  background-color: #f2f2f2;\n  border-bottom: 2px solid #ddd;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #333;\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #666;\n}\nion-content[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nion-content[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .intro-card[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\nion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #999;\n}\n.animated.fadeInUp[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(0px);\n  animation: fadeInUp 1s ease forwards;\n}\n#about[_ngcontent-%COMP%]   .intro-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#about[_ngcontent-%COMP%]   .intro-card[_ngcontent-%COMP%]   .centered-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n#contact[_ngcontent-%COMP%]   .ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 90%;\n  margin: 20px auto;\n}\n#contact[_ngcontent-%COMP%]   .ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#contact[_ngcontent-%COMP%]   .ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n#contact[_ngcontent-%COMP%]   .ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n}\n#contact[_ngcontent-%COMP%]   .ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[type=submit][_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n#contact[_ngcontent-%COMP%]   .ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n#contact[_ngcontent-%COMP%]   .ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n@media only screen and (max-width: 768px) {\n  #contact[_ngcontent-%COMP%]   .ion-card[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 10px auto;\n  }\n  #contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(100px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vSU9OSUMlMjBQUk9KRUNUUy9TT1VSQ0UlMjBDT0RFL1BvcnRGb2xpby9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7QURFSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0FOO0FESUU7RUFDRSxZQUFBLEVBQUEsK0JBQUE7RUFDQSxhQUFBLEVBQUEsZ0NBQUE7RUFDQSxzQkFBQSxFQUFBLDJCQUFBO0VBQ0Esa0JBQUEsRUFBQSxxQkFBQTtFQUNBLGNBQUEsRUFBQSxrQ0FBQTtFQUNBLGNBQUEsRUFBQSxpQ0FBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEo7QURLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNKTjtBRFFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNOSjtBRFFJO0VBQ0UsV0FBQTtBQ05OO0FEU0k7RUFDRSxhQUFBO0FDUE47QURVSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNSTjtBRFVNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUNSUjtBRFVRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNSVjtBRFdRO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDVFY7QURXVTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDVFo7QURhUTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDWFY7QURhVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDWFo7QURjVTtFQUNFLGdCQUFBO0FDWlo7QURvQkk7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDbEJOO0FEc0JFO0VBQ0UsZ0JBQUE7QUNwQko7QUQwQkk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUN2Qk47QUQ2QkU7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQzFCSjtBRGdDSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDN0JOO0FEZ0NJO0VBQ0UsZ0JBQUE7QUM5Qk47QURxQ0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDbENKO0FEb0NJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNsQ047QURvQ007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNsQ1I7QURvQ1E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNsQ1Y7QURxQ1E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNuQ1Y7QUR1Q007RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDckNSO0FEdUNRO0VBQ0UsYUFBQTtBQ3JDVjtBRDRDRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VDMUNKO0VENkNFO0lBQ0UsV0FBQTtFQzNDSjtBQUNGO0FEa0RBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUMvQ0Y7RURpREE7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUMvQ0Y7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAjcG9ydGZvbGlvLXRvb2xiYXIgeyAvLyBBbiBpZCB0byB1bmlxdWVseSBpZGVudGlmeSB0aGUgdG9vbGJhciBmb3IgdGhlIHBvcnRmb2xpb1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIG1hcmdpbi1ib3R0b206IDQlO1xuXG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnByb2ZpbGUtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDBweDsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgICBoZWlnaHQ6IDEwMHB4OyAvKiBBZGp1c3QgdGhlIGhlaWdodCBhcyBuZWVkZWQgKi9cbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmOyAvKiBPcHRpb25hbDogQWRkIGEgYm9yZGVyICovXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlIGl0IGNpcmN1bGFyICovXG4gICAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgaW1hZ2UgaG9yaXpvbnRhbGx5ICovXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEVuc3VyZSB0aGUgbWFyZ2luIGF1dG8gd29ya3MgKi9cbiAgfVxuXG4gICNiYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xuXG4gICAgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaWJiLmNvL3RicjVNV2gnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgLnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgICBpb24tZ3JpZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgaW9uLWNvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgaW9uLWNhcmQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgZmxleDogMTsgLy8gRW5zdXJlcyBjYXJkcyB0YWtlIGFsbCBhdmFpbGFibGUgc3BhY2UgaW4gdGhlIGNvbHVtblxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDsgLy8gRml4ZWQgaGVpZ2h0IGZvciBhbGwgaW1hZ2VzXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgZmxleDogMCAxIGF1dG87XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFib3V0IHtcbiAgICAuaW50cm8tY2FyZCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgLmNvbnRhY3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICB9XG4gIH1cbn1cblxuLmFuaW1hdGVkIHtcbiAgJi5mYWRlSW5VcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDFzIGVhc2UgZm9yd2FyZHM7XG4gIH1cbn1cblxuI2Fib3V0IHtcbiAgLmludHJvLWNhcmQge1xuICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNlbnRlcmVkLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4OyAvLyBBZGp1c3QgYXMgbmVlZGVkXG4gICAgfVxuICB9XG59XG5cblxuI2NvbnRhY3Qge1xuICAuaW9uLWNhcmQge1xuICAgIHdpZHRoOiAxMDAlOyAvLyBFbnN1cmUgdGhlIGNhcmQgdGFrZXMgdGhlIGZ1bGwgd2lkdGhcbiAgICBtYXgtd2lkdGg6IDkwJTsgLy8gU2V0IGEgbWF4aW11bSB3aWR0aCBmb3IgbGFyZ2Ugc2NyZWVuc1xuICAgIG1hcmdpbjogMjBweCBhdXRvOyAvLyBDZW50ZXIgdGhlIGNhcmQgaG9yaXpvbnRhbGx5IGFuZCBhZGQgbWFyZ2luXG5cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgZm9ybSB7XG4gICAgICAgIHdpZHRoOiAxMDAlOyAvLyBTZXQgdGhlIGZvcm0gd2lkdGggdG8gZmlsbCB0aGUgY2FyZFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4OyAvLyBPcHRpb25hbDogbGltaXQgZm9ybSB3aWR0aCBvbiBsYXJnZXIgc2NyZWVucyBmb3IgYmV0dGVyIGFlc3RoZXRpY3NcblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7IC8vIEVuc3VyZSBpbnB1dCBmaWVsZHMgZmlsbCB0aGUgZm9ybSB3aWR0aFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IC8vIFJlZHVjZSB0aGUgbWFyZ2luIGJvdHRvbSBmb3IgYmV0dGVyIGNvbXBhY3RuZXNzXG4gICAgICAgIH1cblxuICAgICAgICBpb24tYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlOyAvLyBFbnN1cmUgc3VibWl0IGJ1dHRvbiBmaWxscyB0aGUgZm9ybSB3aWR0aFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7IC8vIFJlZHVjZSBtYXJnaW4gdG9wIGZvciBhIG1vcmUgY29tcGFjdCBsYXlvdXRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29udGFjdC1kZXRhaWxzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAvLyBBZGQgc3BhY2luZyBiZXR3ZWVuIHRoZSBmb3JtIGFuZCBjb250YWN0IGRldGFpbHNcblxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDVweCAwOyAvLyBNYWludGFpbiBwYXJhZ3JhcGggc3BhY2luZ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTWVkaWEgcXVlcnkgZm9yIHNtYWxsZXIgc2NyZWVuc1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmlvbi1jYXJkIHtcbiAgICAgIHdpZHRoOiA5MCU7IC8vIEFsbG93IHRoZSBjYXJkIHRvIHRha2UgOTAlIG9mIHRoZSB2aWV3cG9ydCB3aWR0aFxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87IC8vIENlbnRlciBhbmQgcmVkdWNlIG1hcmdpblxuICAgIH1cblxuICAgIGZvcm0ge1xuICAgICAgd2lkdGg6IDEwMCU7IC8vIEVuc3VyZSBmb3JtIHRha2VzIGZ1bGwgd2lkdGggb24gc21hbGxlciBzY3JlZW5zXG4gICAgfVxuICB9XG59XG5cblxuXG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4iLCJpb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAjcG9ydGZvbGlvLXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luLXRvcDogNCU7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xufVxuaW9uLWNvbnRlbnQgI3BvcnRmb2xpby10b29sYmFyIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAucHJvZmlsZS1pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDsgLyogQWRqdXN0IHRoZSB3aWR0aCBhcyBuZWVkZWQgKi9cbiAgaGVpZ2h0OiAxMDBweDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkICovXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7IC8qIE9wdGlvbmFsOiBBZGQgYSBib3JkZXIgKi9cbiAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiBNYWtlIGl0IGNpcmN1bGFyICovXG4gIG1hcmdpbjogMCBhdXRvOyAvKiBDZW50ZXIgdGhlIGltYWdlIGhvcml6b250YWxseSAqL1xuICBkaXNwbGF5OiBibG9jazsgLyogRW5zdXJlIHRoZSBtYXJnaW4gYXV0byB3b3JrcyAqL1xufVxuaW9uLWNvbnRlbnQgI2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5pb24tY29udGVudCAjYmFja2dyb3VuZCAuYmFja2dyb3VuZC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC41O1xufVxuaW9uLWNvbnRlbnQgLnNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbmlvbi1jb250ZW50IC5zZWN0aW9uIGlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuc2VjdGlvbiBpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1jb250ZW50IC5zZWN0aW9uIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tY29udGVudCAuc2VjdGlvbiBpb24tY29sIGlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsZXg6IDE7XG59XG5pb24tY29udGVudCAuc2VjdGlvbiBpb24tY29sIGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCAuc2VjdGlvbiBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuc2VjdGlvbiBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnNlY3Rpb24gaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMSAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCAuc2VjdGlvbiBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM2NjY7XG59XG5pb24tY29udGVudCAuc2VjdGlvbiBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAuYWJvdXQgLmludHJvLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50IC5jb250YWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5hbmltYXRlZC5mYWRlSW5VcCB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICBhbmltYXRpb246IGZhZGVJblVwIDFzIGVhc2UgZm9yd2FyZHM7XG59XG5cbiNhYm91dCAuaW50cm8tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2Fib3V0IC5pbnRyby1jYXJkIC5jZW50ZXJlZC1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jY29udGFjdCAuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuI2NvbnRhY3QgLmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2NvbnRhY3QgLmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuI2NvbnRhY3QgLmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgZm9ybSBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuI2NvbnRhY3QgLmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgZm9ybSBpb24tYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuI2NvbnRhY3QgLmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmNvbnRhY3QtZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiNjb250YWN0IC5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5jb250YWN0LWRldGFpbHMgcCB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNjb250YWN0IC5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuICAjY29udGFjdCBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */"]
});

/***/ }),

/***/ 921:
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendPost": () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ 8030);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ 1367);



const sendPost = /*#__PURE__*/function () {
  var _ref = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, data, headers = {}) {
    const response = yield fetch(_store_store__WEBPACK_IMPORTED_MODULE_2__.store.origin + url, {
      method: 'POST',
      headers,
      body: data
    });
    const message = yield response.text();
    const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_1__.EmailJSResponseStatus(response.status, message);

    if (response.ok) {
      return responseStatus;
    }

    throw responseStatus;
  });

  return function sendPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 1444:
/*!****************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockedEmailError": () => (/* binding */ blockedEmailError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ 8030);

const blockedEmailError = () => {
  return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(403, 'Forbidden');
};

/***/ }),

/***/ 1557:
/*!********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headlessError": () => (/* binding */ headlessError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ 8030);

const headlessError = () => {
  return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(451, 'Unavailable For Headless Browser');
};

/***/ }),

/***/ 4652:
/*!**********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "limitRateError": () => (/* binding */ limitRateError)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/EmailJSResponseStatus */ 8030);

const limitRateError = () => {
  return new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(429, 'Too Many Requests');
};

/***/ }),

/***/ 7624:
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailJSResponseStatus": () => (/* reexport safe */ _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "init": () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init),
/* harmony export */   "send": () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send),
/* harmony export */   "sendForm": () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/EmailJSResponseStatus */ 8030);
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/init/init */ 4919);
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/send/send */ 1306);
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ 7449);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: _methods_init_init__WEBPACK_IMPORTED_MODULE_1__.init,
  send: _methods_send_send__WEBPACK_IMPORTED_MODULE_2__.send,
  sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_3__.sendForm,
  EmailJSResponseStatus: _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus
});

/***/ }),

/***/ 4919:
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ 1367);
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ 5695);


/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */

const init = (options, origin = 'https://api.emailjs.com') => {
  if (!options) return;
  const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_1__.buildOptions)(options);
  _store_store__WEBPACK_IMPORTED_MODULE_0__.store.publicKey = opts.publicKey;
  _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockHeadless = opts.blockHeadless;
  _store_store__WEBPACK_IMPORTED_MODULE_0__.store.storageProvider = opts.storageProvider;
  _store_store__WEBPACK_IMPORTED_MODULE_0__.store.blockList = opts.blockList;
  _store_store__WEBPACK_IMPORTED_MODULE_0__.store.limitRate = opts.limitRate;
  _store_store__WEBPACK_IMPORTED_MODULE_0__.store.origin = opts.origin || origin;
};

/***/ }),

/***/ 1306:
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "send": () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/store */ 1367);
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ 921);
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ 5695);
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ 9986);
/* harmony import */ var _utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validateTemplateParams/validateTemplateParams */ 1283);
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ 8007);
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ 1557);
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ 743);
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ 1444);
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ 5401);
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ 4652);












/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */

const send = /*#__PURE__*/function () {
  var _ref = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (serviceID, templateID, templateParams, options) {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_3__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_1__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_1__.store.blockHeadless;
    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_1__.store.storageProvider || opts.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_1__.store.blockList,
      ...opts.blockList
    };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_1__.store.limitRate,
      ...opts.limitRate
    };

    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_6__.isHeadless)(navigator)) {
      return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_7__.headlessError)());
    }

    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_4__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateTemplateParams_validateTemplateParams__WEBPACK_IMPORTED_MODULE_5__.validateTemplateParams)(templateParams);

    if (templateParams && (0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_8__.isBlockedValueInParams)(blockList, templateParams)) {
      return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_9__.blockedEmailError)());
    }

    if (yield (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_10__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
      return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_11__.limitRateError)());
    }

    const params = {
      lib_version: '4.3.3',
      user_id: publicKey,
      service_id: serviceID,
      template_id: templateID,
      template_params: templateParams
    };
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
      'Content-type': 'application/json'
    });
  });

  return function send(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 7449:
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendForm": () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/store */ 1367);
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ 921);
/* harmony import */ var _utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/buildOptions/buildOptions */ 5695);
/* harmony import */ var _utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateForm/validateForm */ 1182);
/* harmony import */ var _utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validateParams/validateParams */ 9986);
/* harmony import */ var _utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/isHeadless/isHeadless */ 8007);
/* harmony import */ var _errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors/headlessError/headlessError */ 1557);
/* harmony import */ var _utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/isBlockedValueInParams/isBlockedValueInParams */ 743);
/* harmony import */ var _errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../errors/blockedEmailError/blockedEmailError */ 1444);
/* harmony import */ var _utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/isLimitRateHit/isLimitRateHit */ 5401);
/* harmony import */ var _errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../errors/limitRateError/limitRateError */ 4652);













const findHTMLForm = form => {
  return typeof form === 'string' ? document.querySelector(form) : form;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */


const sendForm = /*#__PURE__*/function () {
  var _ref = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (serviceID, templateID, form, options) {
    const opts = (0,_utils_buildOptions_buildOptions__WEBPACK_IMPORTED_MODULE_3__.buildOptions)(options);
    const publicKey = opts.publicKey || _store_store__WEBPACK_IMPORTED_MODULE_1__.store.publicKey;
    const blockHeadless = opts.blockHeadless || _store_store__WEBPACK_IMPORTED_MODULE_1__.store.blockHeadless;
    const storageProvider = _store_store__WEBPACK_IMPORTED_MODULE_1__.store.storageProvider || opts.storageProvider;
    const blockList = { ..._store_store__WEBPACK_IMPORTED_MODULE_1__.store.blockList,
      ...opts.blockList
    };
    const limitRate = { ..._store_store__WEBPACK_IMPORTED_MODULE_1__.store.limitRate,
      ...opts.limitRate
    };

    if (blockHeadless && (0,_utils_isHeadless_isHeadless__WEBPACK_IMPORTED_MODULE_6__.isHeadless)(navigator)) {
      return Promise.reject((0,_errors_headlessError_headlessError__WEBPACK_IMPORTED_MODULE_7__.headlessError)());
    }

    const currentForm = findHTMLForm(form);
    (0,_utils_validateParams_validateParams__WEBPACK_IMPORTED_MODULE_5__.validateParams)(publicKey, serviceID, templateID);
    (0,_utils_validateForm_validateForm__WEBPACK_IMPORTED_MODULE_4__.validateForm)(currentForm);
    const formData = new FormData(currentForm);

    if ((0,_utils_isBlockedValueInParams_isBlockedValueInParams__WEBPACK_IMPORTED_MODULE_8__.isBlockedValueInParams)(blockList, formData)) {
      return Promise.reject((0,_errors_blockedEmailError_blockedEmailError__WEBPACK_IMPORTED_MODULE_9__.blockedEmailError)());
    }

    if (yield (0,_utils_isLimitRateHit_isLimitRateHit__WEBPACK_IMPORTED_MODULE_10__.isLimitRateHit)(location.pathname, limitRate, storageProvider)) {
      return Promise.reject((0,_errors_limitRateError_limitRateError__WEBPACK_IMPORTED_MODULE_11__.limitRateError)());
    }

    formData.append('lib_version', '4.3.3');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', publicKey);
    return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);
  });

  return function sendForm(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 8030:
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailJSResponseStatus": () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
  constructor(_status = 0, _text = 'Network Error') {
    this.status = _status;
    this.text = _text;
  }

}

/***/ }),

/***/ 1367:
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createWebStorage/createWebStorage */ 2494);

const store = {
  origin: 'https://api.emailjs.com',
  blockHeadless: false,
  storageProvider: (0,_utils_createWebStorage_createWebStorage__WEBPACK_IMPORTED_MODULE_0__.createWebStorage)()
};

/***/ }),

/***/ 5695:
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildOptions": () => (/* binding */ buildOptions)
/* harmony export */ });
const buildOptions = options => {
  if (!options) return {}; // support compatibility with SDK v3

  if (typeof options === 'string') {
    return {
      publicKey: options
    };
  } // eslint-disable-next-line @typescript-eslint/no-base-to-string


  if (options.toString() === '[object Object]') {
    return options;
  }

  return {};
};

/***/ }),

/***/ 2494:
/*!*************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWebStorage": () => (/* binding */ createWebStorage)
/* harmony export */ });
const createWebStorage = () => {
  if (typeof localStorage === 'undefined') return;
  return {
    get: key => Promise.resolve(localStorage.getItem(key)),
    set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    remove: key => Promise.resolve(localStorage.removeItem(key))
  };
};

/***/ }),

/***/ 743:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBlockedValueInParams": () => (/* binding */ isBlockedValueInParams)
/* harmony export */ });
/* harmony import */ var _validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validateBlockListParams/validateBlockListParams */ 7150);


const isBlockListDisabled = options => {
  return !options.list?.length || !options.watchVariable;
};

const getValue = (data, name) => {
  return data instanceof FormData ? data.get(name) : data[name];
};

const isBlockedValueInParams = (options, params) => {
  if (isBlockListDisabled(options)) return false;
  (0,_validateBlockListParams_validateBlockListParams__WEBPACK_IMPORTED_MODULE_0__.validateBlockListParams)(options.list, options.watchVariable);
  const value = getValue(params, options.watchVariable);
  if (typeof value !== 'string') return false;
  return options.list.includes(value);
};

/***/ }),

/***/ 8007:
/*!*************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHeadless": () => (/* binding */ isHeadless)
/* harmony export */ });
const isHeadless = navigator => {
  return navigator.webdriver || !navigator.languages || navigator.languages.length === 0;
};

/***/ }),

/***/ 5401:
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isLimitRateHit": () => (/* binding */ isLimitRateHit)
/* harmony export */ });
/* harmony import */ var _Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validateLimitRateParams/validateLimitRateParams */ 6603);



const getLeftTime = /*#__PURE__*/function () {
  var _ref = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (id, throttle, storage) {
    const lastTime = Number((yield storage.get(id)) || 0);
    return throttle - Date.now() + lastTime;
  });

  return function getLeftTime(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

const isLimitRateHit = /*#__PURE__*/function () {
  var _ref2 = (0,_Users_chineduetoh_Desktop_IONIC_PROJECTS_SOURCE_CODE_PortFolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (defaultID, options, storage) {
    if (!options.throttle || !storage) {
      return false;
    }

    (0,_validateLimitRateParams_validateLimitRateParams__WEBPACK_IMPORTED_MODULE_1__.validateLimitRateParams)(options.throttle, options.id);
    const id = options.id || defaultID;
    const leftTime = yield getLeftTime(id, options.throttle, storage);

    if (leftTime > 0) {
      return true;
    }

    yield storage.set(id, Date.now().toString());
    return false;
  });

  return function isLimitRateHit(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 7150:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateBlockListParams": () => (/* binding */ validateBlockListParams)
/* harmony export */ });
const validateBlockListParams = (list, watchVariable) => {
  if (!Array.isArray(list)) {
    throw 'The BlockList list has to be an array';
  }

  if (typeof watchVariable !== 'string') {
    throw 'The BlockList watchVariable has to be a string';
  }
};

/***/ }),

/***/ 1182:
/*!*****************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateForm": () => (/* binding */ validateForm)
/* harmony export */ });
const validateForm = form => {
  if (!form || form.nodeName !== 'FORM') {
    throw 'The 3rd parameter is expected to be the HTML form element or the style selector of the form';
  }
};

/***/ }),

/***/ 6603:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateLimitRateParams": () => (/* binding */ validateLimitRateParams)
/* harmony export */ });
const validateLimitRateParams = (throttle, id) => {
  if (typeof throttle !== 'number' || throttle < 0) {
    throw 'The LimitRate throttle has to be a positive number';
  }

  if (id && typeof id !== 'string') {
    throw 'The LimitRate ID has to be a string';
  }
};

/***/ }),

/***/ 9986:
/*!*********************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateParams": () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey || typeof publicKey !== 'string') {
    throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
  }

  if (!serviceID || typeof serviceID !== 'string') {
    throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
  }

  if (!templateID || typeof templateID !== 'string') {
    throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
  }
};

/***/ }),

/***/ 1283:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateTemplateParams": () => (/* binding */ validateTemplateParams)
/* harmony export */ });
const validateTemplateParams = templateParams => {
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  if (templateParams && templateParams.toString() !== '[object Object]') {
    throw 'The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/';
  }
};

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map
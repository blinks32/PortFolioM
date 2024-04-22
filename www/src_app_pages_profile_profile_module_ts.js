"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
class ProfilePageRoutingModule {
}
ProfilePageRoutingModule.ɵfac = function ProfilePageRoutingModule_Factory(t) { return new (t || ProfilePageRoutingModule)(); };
ProfilePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProfilePageRoutingModule });
ProfilePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfilePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class ProfilePageModule {
}
ProfilePageModule.ɵfac = function ProfilePageModule_Factory(t) { return new (t || ProfilePageModule)(); };
ProfilePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfilePageModule });
ProfilePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfilePageModule, { declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule] }); })();


/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class ProfilePage {
    constructor(router, loadingController, alertController, nav) {
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.nav = nav;
        this.profile = null;
    }
    ngOnInit() {
    }
}
ProfilePage.ɵfac = function ProfilePage_Factory(t) { return new (t || ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController)); };
ProfilePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePage, selectors: [["app-profile"]], decls: 47, vars: 0, consts: [[1, "ion-no-border"], ["slot", "start"], ["color", "primary"], [1, "ion-text-center"], [1, "full-text-section"], [1, "full-text"], ["src", "assets/imgs/3.png", "alt", "Image 1"], ["src", "assets/imgs/1.png", "alt", "Image 2"], ["src", "assets/imgs/2.png", "alt", "Image 3"], [1, "text-below-images"], [1, "text"], ["controls", "", "autoplay", ""], ["src", "assets/vids/3.mov", "type", "video/mp4"], ["src", "assets/vids/2.mov", "type", "video/mp4"], ["src", "assets/vids/1.mov", "type", "video/mp4"]], template: function ProfilePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Personal Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content")(8, "section", 4)(9, "div", 5)(10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Embark on an Epic Adventure: The Ultimate Gaming Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Embark on an adrenaline-fueled journey through vibrant landscapes and treacherous obstacles in our exhilarating game. Dive into a world where speed is your ally and reflexes your greatest weapon. As the sun sets on a futuristic cityscape, you find yourself at the starting line of an epic race against time and formidable opponents. With each stride, you'll collect coins to purchase powerful upgrades and unlock new abilities, propelling you closer to victory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section")(15, "ion-grid")(16, "ion-row")(17, "ion-col")(18, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-col")(21, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-col")(24, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 9)(27, "div", 10)(28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dive into the Action: Experience the Thrills of Our game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Immerse yourself in the heart-pounding action of our game as you journey through a world of exhilarating challenges and jaw-dropping visuals. With stunning graphics and dynamic gameplay, every moment is a pulse-pounding adventure waiting to unfold. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section")(33, "ion-grid")(34, "ion-row")(35, "ion-col")(36, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "source", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ion-col")(40, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "source", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ion-col")(44, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "source", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonBackButtonDelegate], styles: ["ion-content[_ngcontent-%COMP%]   .full-text-section[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 20px;\n  text-align: center;\n  color: light;\n}\nion-content[_ngcontent-%COMP%]   .full-text-section[_ngcontent-%COMP%]   .full-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #007bff;\n}\nion-content[_ngcontent-%COMP%]   .full-text-section[_ngcontent-%COMP%]   .full-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nion-content[_ngcontent-%COMP%]   .full-text-section[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\nion-content[_ngcontent-%COMP%]   .full-text-section[_ngcontent-%COMP%]   #background[_ngcontent-%COMP%]   .background-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  opacity: 0.5;\n}\nion-content[_ngcontent-%COMP%]   .image-grid-section[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nion-content[_ngcontent-%COMP%]   .image-grid-section[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   .image-grid-section[_ngcontent-%COMP%]   .image-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\nion-content[_ngcontent-%COMP%]   .text-below-images[_ngcontent-%COMP%] {\n  background: none;\n  padding: 20px;\n  text-align: center;\n  color: light;\n}\nion-content[_ngcontent-%COMP%]   .text-below-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #007bff;\n}\nion-content[_ngcontent-%COMP%]   .text-below-images[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nion-content[_ngcontent-%COMP%]   .video-grid-section[_ngcontent-%COMP%] {\n  padding: 20px;\n}\nion-content[_ngcontent-%COMP%]   .video-grid-section[_ngcontent-%COMP%]   .video-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 5px;\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   .video-grid-section[_ngcontent-%COMP%]   .video-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vSU9OSUMlMjBQUk9KRUNUUy9TT1VSQ0UlMjBDT0RFL1BvcnRGb2xpby9zcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdNO0VBQ0UsY0FBQTtBQ0RSO0FESU07RUFDRSxnQkFBQTtBQ0ZSO0FETUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSk47QURNTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNMUjtBRFVFO0VBQ0UsYUFBQTtBQ1JKO0FEV007RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRFdRO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNUVjtBRGVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDYko7QURnQk07RUFDRSxjQUFBO0FDZFI7QURpQk07RUFDRSxnQkFBQTtBQ2ZSO0FEb0JFO0VBQ0UsYUFBQTtBQ2xCSjtBRHFCTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ25CUjtBRHFCUTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDbkJWIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuZnVsbC10ZXh0LXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvLyBMaWdodCBncmF5IGJhY2tncm91bmQgY29sb3JcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogbGlnaHQ7IC8vIERhcmsgZ3JheSB0ZXh0IGNvbG9yXG5cbiAgICAuZnVsbC10ZXh0IHtcbiAgICAgIGgyIHtcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7IC8vIEJsdWUgaGVhZGVyIHRleHQgY29sb3JcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgI2JhY2tncm91bmQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgei1pbmRleDogLTE7XG4gIFxuICAgICAgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pYmIuY28vdGJyNU1XaCcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW1hZ2UtZ3JpZC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmltYWdlLWdyaWQge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBTaGFkb3cgZWZmZWN0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGV4dC1iZWxvdy1pbWFnZXMge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGxpZ2h0O1xuXG4gICAgLnRleHQge1xuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnZpZGVvLWdyaWQtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC52aWRlby1ncmlkIHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICB2aWRlbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCAuZnVsbC10ZXh0LXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogbGlnaHQ7XG59XG5pb24tY29udGVudCAuZnVsbC10ZXh0LXNlY3Rpb24gLmZ1bGwtdGV4dCBoMiB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuaW9uLWNvbnRlbnQgLmZ1bGwtdGV4dC1zZWN0aW9uIC5mdWxsLXRleHQgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAuZnVsbC10ZXh0LXNlY3Rpb24gI2JhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5pb24tY29udGVudCAuZnVsbC10ZXh0LXNlY3Rpb24gI2JhY2tncm91bmQgLmJhY2tncm91bmQtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbmlvbi1jb250ZW50IC5pbWFnZS1ncmlkLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmltYWdlLWdyaWQtc2VjdGlvbiAuaW1hZ2UtZ3JpZCBpb24tY29sIHtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuaW1hZ2UtZ3JpZC1zZWN0aW9uIC5pbWFnZS1ncmlkIGlvbi1jb2wgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5pb24tY29udGVudCAudGV4dC1iZWxvdy1pbWFnZXMge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBsaWdodDtcbn1cbmlvbi1jb250ZW50IC50ZXh0LWJlbG93LWltYWdlcyAudGV4dCBoMyB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuaW9uLWNvbnRlbnQgLnRleHQtYmVsb3ctaW1hZ2VzIC50ZXh0IHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnZpZGVvLWdyaWQtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5pb24tY29udGVudCAudmlkZW8tZ3JpZC1zZWN0aW9uIC52aWRlby1ncmlkIGlvbi1jb2wge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC52aWRlby1ncmlkLXNlY3Rpb24gLnZpZGVvLWdyaWQgaW9uLWNvbCB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map
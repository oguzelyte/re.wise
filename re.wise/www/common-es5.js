function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExploreContainerExploreContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>";
    /***/
  },

  /***/
  "./src/app/authenticate.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/authenticate.service.ts ***!
    \*****************************************/

  /*! exports provided: AuthenticateService */

  /***/
  function srcAppAuthenticateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateService", function () {
      return AuthenticateService;
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


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");

    var AuthenticateService = /*#__PURE__*/function () {
      function AuthenticateService(afStore, ngFireAuth, router, ngZone) {
        var _this = this;

        _classCallCheck(this, AuthenticateService);

        this.afStore = afStore;
        this.ngFireAuth = ngFireAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.ngFireAuth.authState.subscribe(function (user) {
          if (user) {
            _this.userData = user;
            localStorage.setItem("user", JSON.stringify(_this.userData));
            JSON.parse(localStorage.getItem("user"));
          } else {
            localStorage.setItem("user", null);
            JSON.parse(localStorage.getItem("user"));
          }
        });
      } // Login in with email/password


      _createClass(AuthenticateService, [{
        key: "SignIn",
        value: function SignIn(email, password) {
          return this.ngFireAuth.signInWithEmailAndPassword(email, password);
        } // Register user with email/password

      }, {
        key: "RegisterUser",
        value: function RegisterUser(email, password, name, username, studentNo, university) {
          var _this2 = this;

          return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then(function () {
            _this2.ngFireAuth.user.subscribe(function (data) {
              var user = {
                email: email,
                uid: data.uid,
                name: name,
                username: username,
                studentNo: studentNo,
                university: university
              };

              _this2.SetUserData(user);
            });
          });
        } // Email verification when new user register

      }, {
        key: "SendVerificationMail",
        value: function SendVerificationMail() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.ngFireAuth.currentUser;

                  case 2:
                    return _context3.abrupt("return", _context3.sent.sendEmailVerification().then(function () {
                      _this3.router.navigate(["verify-email"]);
                    }));

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Recover password

      }, {
        key: "PasswordRecover",
        value: function PasswordRecover(passwordResetEmail) {
          return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail).then(function () {
            window.alert("Password reset email has been sent, please check your inbox.");
          })["catch"](function (error) {
            window.alert(error);
          });
        } // Returns true when user is looged in

      }, {
        key: "GoogleAuth",
        // Sign in with Gmail
        value: function GoogleAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
        } // Auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          var _this4 = this;

          return this.ngFireAuth.signInWithPopup(provider).then(function (result) {
            _this4.ngZone.run(function () {
              _this4.router.navigate(["dashboard"]);
            });

            _this4.SetUserData(result.user);
          })["catch"](function (error) {
            window.alert(error);
          });
        } // Store user in localStorage

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afStore.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            name: user.name,
            username: user.username,
            studentNo: user.studentNo,
            university: user.university,
            emailVerified: user.emailVerified
          };
          return userRef.set(JSON.parse(JSON.stringify(userData)), {
            merge: true
          });
        } // Sign-out

      }, {
        key: "SignOut",
        value: function SignOut() {
          var _this5 = this;

          return this.ngFireAuth.signOut().then(function () {
            localStorage.removeItem("user");
            _this5.router.onSameUrlNavigation = "reload";

            _this5.router.navigate(["tabs/home"]);
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem("user"));
          return user !== null && user.emailVerified !== false ? true : false;
        } // Returns true when user's email is verified

      }, {
        key: "isEmailVerified",
        get: function get() {
          var user = JSON.parse(localStorage.getItem("user"));
          return user.emailVerified !== false ? true : false;
        }
      }]);

      return AuthenticateService;
    }();

    AuthenticateService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    AuthenticateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], AuthenticateService);
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExploreContainerExploreContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvQzpcXFVzZXJzXFxPbGlcXERlc2t0b3BcXHJlLndpc2Uvc3JjXFxhcHBcXGV4cGxvcmUtY29udGFpbmVyXFxleHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwbG9yZS1jb250YWluZXIvZXhwbG9yZS1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9leHBsb3JlLWNvbnRhaW5lci9leHBsb3JlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/explore-container/explore-container.component.ts ***!
    \******************************************************************/

  /*! exports provided: ExploreContainerComponent */

  /***/
  function srcAppExploreContainerExploreContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponent", function () {
      return ExploreContainerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExploreContainerComponent = /*#__PURE__*/function () {
      function ExploreContainerComponent() {
        _classCallCheck(this, ExploreContainerComponent);
      }

      _createClass(ExploreContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExploreContainerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], ExploreContainerComponent.prototype, "name", void 0);
    ExploreContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-explore-container',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./explore-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./explore-container.component.scss */
      "./src/app/explore-container/explore-container.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExploreContainerComponent);
    /***/
  },

  /***/
  "./src/app/explore-container/explore-container.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/explore-container/explore-container.module.ts ***!
    \***************************************************************/

  /*! exports provided: ExploreContainerComponentModule */

  /***/
  function srcAppExploreContainerExploreContainerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreContainerComponentModule", function () {
      return ExploreContainerComponentModule;
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


    var _explore_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./explore-container.component */
    "./src/app/explore-container/explore-container.component.ts");

    var ExploreContainerComponentModule = function ExploreContainerComponentModule() {
      _classCallCheck(this, ExploreContainerComponentModule);
    };

    ExploreContainerComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]],
      exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponent"]]
    })], ExploreContainerComponentModule);
    /***/
  },

  /***/
  "./src/app/firebase-op.service.ts":
  /*!****************************************!*\
    !*** ./src/app/firebase-op.service.ts ***!
    \****************************************/

  /*! exports provided: FirebaseOpService */

  /***/
  function srcAppFirebaseOpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseOpService", function () {
      return FirebaseOpService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authenticate.service */
    "./src/app/authenticate.service.ts");

    var FirebaseOpService = /*#__PURE__*/function () {
      function FirebaseOpService(firestore, auth) {
        _classCallCheck(this, FirebaseOpService);

        this.firestore = firestore;
        this.auth = auth;
      }

      _createClass(FirebaseOpService, [{
        key: "getUniversities",
        value: function getUniversities() {
          return this.firestore.collection("universities").snapshotChanges();
        }
      }, {
        key: "getModules",
        value: function getModules(user) {
          console.log(user.course);
          return this.firestore.collection("universities", function (ref) {
            return ref.where('id', '==', user.university);
          }).get();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          if (this.auth.isLoggedIn) {
            return this.firestore.doc("users/" + JSON.parse(localStorage.getItem("user")).uid).get();
          }
        }
      }, {
        key: "getLogs",
        value: function getLogs(uid) {
          if (this.auth.isLoggedIn) {
            return this.firestore.collection(uid).snapshotChanges();
          }
        }
      }, {
        key: "createUploadLog",
        value: function createUploadLog(url, name, uid, moduleCode, category, tags, title, description) {
          var log = {
            url: url,
            name: name,
            //uid: uid,
            moduleCode: moduleCode,
            category: category,
            tags: tags,
            description: description
          };
          return this.firestore.collection(uid).add(JSON.parse(JSON.stringify(log)));
        }
      }, {
        key: "deleteLog",
        value: function deleteLog(logID) {
          this.firestore.doc(this.auth.userData.uid + "/" + logID)["delete"]();
        }
      }]);

      return FirebaseOpService;
    }();

    FirebaseOpService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]
      }];
    };

    FirebaseOpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])], FirebaseOpService);
    /***/
  },

  /***/
  "./src/app/upload-file.service.ts":
  /*!****************************************!*\
    !*** ./src/app/upload-file.service.ts ***!
    \****************************************/

  /*! exports provided: UploadFileService */

  /***/
  function srcAppUploadFileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadFileService", function () {
      return UploadFileService;
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


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/storage */
    "./node_modules/firebase/storage/dist/index.esm.js");
    /* harmony import */


    var _authenticate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authenticate.service */
    "./src/app/authenticate.service.ts");
    /* harmony import */


    var _firebase_op_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./firebase-op.service */
    "./src/app/firebase-op.service.ts");

    var UploadFileService = /*#__PURE__*/function () {
      function UploadFileService(db, auth, firebaseOp) {
        _classCallCheck(this, UploadFileService);

        this.db = db;
        this.auth = auth;
        this.firebaseOp = firebaseOp;
        this.basePath = '/uploads';
      }

      _createClass(UploadFileService, [{
        key: "pushFileToStorage",
        value: function pushFileToStorage(fileUpload, progress, moduleCode, category, tags, title, description) {
          var _this6 = this;

          var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
          var uploadTask = storageRef.child("".concat(this.basePath, "/").concat(this.auth.userData.uid, "/").concat(moduleCode, "/").concat(category, "/").concat(fileUpload.file.name)).put(fileUpload.file);
          uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round(snap.bytesTransferred / snap.totalBytes * 100);
          }, function (error) {
            // fail
            console.log(error);
          }, function () {
            // success
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              console.log('File available at', downloadURL);
              fileUpload.url = downloadURL;
              fileUpload.name = fileUpload.file.name;

              _this6.saveFileData(fileUpload);
            })["finally"](function () {
              _this6.firebaseOp.createUploadLog(fileUpload.url, fileUpload.name, _this6.auth.userData.uid, moduleCode, category, tags, title, description);
            });
          });
        }
      }, {
        key: "saveFileData",
        value: function saveFileData(fileUpload) {
          this.db.list("".concat(this.basePath, "/")).push(fileUpload);
        }
      }, {
        key: "getFileUploads",
        value: function getFileUploads(numberItems) {
          return this.db.list(this.basePath, function (ref) {
            return ref.limitToLast(numberItems);
          });
        }
        /*deleteFileUpload(fileUpload: Upload) {
             this.deleteFileDatabase(fileUpload.key)
                 .then(() => {
                     this.deleteFileStorage(fileUpload.name);
                 })
                 .catch(error => console.log(error));
         }*/

      }, {
        key: "deleteFileDatabase",
        value: function deleteFileDatabase(key) {
          return this.db.list("".concat(this.basePath, "/")).remove(key);
        }
      }, {
        key: "deleteFileStorage",
        value: function deleteFileStorage(fileID, moduleCode, category, name) {
          var _this7 = this;

          var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
          storageRef.child("".concat(this.basePath, "/").concat(this.auth.userData.uid, "/").concat(moduleCode, "/").concat(category, "/").concat(name))["delete"]()["finally"](function () {
            _this7.firebaseOp.deleteLog(fileID);
          });
        }
      }]);

      return UploadFileService;
    }();

    UploadFileService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]
      }, {
        type: _firebase_op_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseOpService"]
      }];
    };

    UploadFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _authenticate_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"], _firebase_op_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseOpService"]])], UploadFileService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map
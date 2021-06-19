window.$_mod_ybar = {
    ready: function () {
        ! function () {
            "use strict";
            var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

            function t(e) {
                if (e.__esModule) return e;
                var t = Object.defineProperty({}, "__esModule", {
                    value: !0
                });
                return Object.keys(e).forEach((function (n) {
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(t, n, r.get ? r : {
                        enumerable: !0,
                        get: function () {
                            return e[n]
                        }
                    })
                })), t
            }

            function n(e) {
                var t = {
                    exports: {}
                };
                return e(t, t.exports), t.exports
            }
            n((function (t, n) {
                t.exports = function () {
                    function t(e) {
                        var t = typeof e;
                        return null !== e && ("object" === t || "function" === t)
                    }

                    function n(e) {
                        return "function" == typeof e
                    }
                    var r = Array.isArray ? Array.isArray : function (e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        o = 0,
                        i = void 0,
                        a = void 0,
                        s = function (e, t) {
                            _[o] = e, _[o + 1] = t, 2 === (o += 2) && (a ? a(w) : C())
                        };

                    function c(e) {
                        a = e
                    }

                    function l(e) {
                        s = e
                    }
                    var u = "undefined" != typeof window ? window : void 0,
                        d = u || {},
                        f = d.MutationObserver || d.WebKitMutationObserver,
                        p = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
                        m = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                    function y() {
                        return function () {
                            return process.nextTick(w)
                        }
                    }

                    function h() {
                        return void 0 !== i ? function () {
                            i(w)
                        } : v()
                    }

                    function g() {
                        var e = 0,
                            t = new f(w),
                            n = document.createTextNode("");
                        return t.observe(n, {
                                characterData: !0
                            }),
                            function () {
                                n.data = e = ++e % 2
                            }
                    }

                    function b() {
                        var e = new MessageChannel;
                        return e.port1.onmessage = w,
                            function () {
                                return e.port2.postMessage(0)
                            }
                    }

                    function v() {
                        var e = setTimeout;
                        return function () {
                            return e(w, 1)
                        }
                    }
                    var _ = new Array(1e3);

                    function w() {
                        for (var e = 0; e < o; e += 2)(0, _[e])(_[e + 1]), _[e] = void 0, _[e + 1] = void 0;
                        o = 0
                    }

                    function E() {
                        try {
                            var e = Function("return this")().require("vertx");
                            return i = e.runOnLoop || e.runOnContext, h()
                        } catch (e) {
                            return v()
                        }
                    }
                    var C = void 0;

                    function x(e, t) {
                        var n = this,
                            r = new this.constructor(S);
                        void 0 === r[k] && W(r);
                        var o = n._state;
                        if (o) {
                            var i = arguments[o - 1];
                            s((function () {
                                return Y(o, r, i, n._result)
                            }))
                        } else D(n, r, e, t);
                        return r
                    }

                    function T(e) {
                        var t = this;
                        if (e && "object" == typeof e && e.constructor === t) return e;
                        var n = new t(S);
                        return j(n, e), n
                    }
                    C = p ? y() : f ? g() : m ? b() : void 0 === u ? E() : v();
                    var k = Math.random().toString(36).substring(2);

                    function S() {}
                    var I = void 0,
                        M = 1,
                        L = 2;

                    function O() {
                        return new TypeError("You cannot resolve a promise with itself")
                    }

                    function A() {
                        return new TypeError("A promises callback cannot return that same promise.")
                    }

                    function N(e, t, n, r) {
                        try {
                            e.call(t, n, r)
                        } catch (e) {
                            return e
                        }
                    }

                    function P(e, t, n) {
                        s((function (e) {
                            var r = !1,
                                o = N(n, t, (function (n) {
                                    r || (r = !0, t !== n ? j(e, n) : R(e, n))
                                }), (function (t) {
                                    r || (r = !0, H(e, t))
                                }), "Settle: " + (e._label || " unknown promise"));
                            !r && o && (r = !0, H(e, o))
                        }), e)
                    }

                    function B(e, t) {
                        t._state === M ? R(e, t._result) : t._state === L ? H(e, t._result) : D(t, void 0, (function (t) {
                            return j(e, t)
                        }), (function (t) {
                            return H(e, t)
                        }))
                    }

                    function q(e, t, r) {
                        t.constructor === e.constructor && r === x && t.constructor.resolve === T ? B(e, t) : void 0 === r ? R(e, t) : n(r) ? P(e, t, r) : R(e, t)
                    }

                    function j(e, n) {
                        if (e === n) H(e, O());
                        else if (t(n)) {
                            var r = void 0;
                            try {
                                r = n.then
                            } catch (t) {
                                return void H(e, t)
                            }
                            q(e, n, r)
                        } else R(e, n)
                    }

                    function V(e) {
                        e._onerror && e._onerror(e._result), F(e)
                    }

                    function R(e, t) {
                        e._state === I && (e._result = t, e._state = M, 0 !== e._subscribers.length && s(F, e))
                    }

                    function H(e, t) {
                        e._state === I && (e._state = L, e._result = t, s(V, e))
                    }

                    function D(e, t, n, r) {
                        var o = e._subscribers,
                            i = o.length;
                        e._onerror = null, o[i] = t, o[i + M] = n, o[i + L] = r, 0 === i && e._state && s(F, e)
                    }

                    function F(e) {
                        var t = e._subscribers,
                            n = e._state;
                        if (0 !== t.length) {
                            for (var r = void 0, o = void 0, i = e._result, a = 0; a < t.length; a += 3) r = t[a], o = t[a + n], r ? Y(n, r, o, i) : o(i);
                            e._subscribers.length = 0
                        }
                    }

                    function Y(e, t, r, o) {
                        var i = n(r),
                            a = void 0,
                            s = void 0,
                            c = !0;
                        if (i) {
                            try {
                                a = r(o)
                            } catch (e) {
                                c = !1, s = e
                            }
                            if (t === a) return void H(t, A())
                        } else a = o;
                        t._state !== I || (i && c ? j(t, a) : !1 === c ? H(t, s) : e === M ? R(t, a) : e === L && H(t, a))
                    }

                    function U(e, t) {
                        try {
                            t((function (t) {
                                j(e, t)
                            }), (function (t) {
                                H(e, t)
                            }))
                        } catch (t) {
                            H(e, t)
                        }
                    }
                    var z = 0;

                    function Q() {
                        return z++
                    }

                    function W(e) {
                        e[k] = z++, e._state = void 0, e._result = void 0, e._subscribers = []
                    }

                    function G() {
                        return new Error("Array Methods must be provided an Array")
                    }
                    var J = function () {
                        function e(e, t) {
                            this._instanceConstructor = e, this.promise = new e(S), this.promise[k] || W(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? R(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && R(this.promise, this._result))) : H(this.promise, G())
                        }
                        return e.prototype._enumerate = function (e) {
                            for (var t = 0; this._state === I && t < e.length; t++) this._eachEntry(e[t], t)
                        }, e.prototype._eachEntry = function (e, t) {
                            var n = this._instanceConstructor,
                                r = n.resolve;
                            if (r === T) {
                                var o = void 0,
                                    i = void 0,
                                    a = !1;
                                try {
                                    o = e.then
                                } catch (e) {
                                    a = !0, i = e
                                }
                                if (o === x && e._state !== I) this._settledAt(e._state, t, e._result);
                                else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                                else if (n === te) {
                                    var s = new n(S);
                                    a ? H(s, i) : q(s, e, o), this._willSettleAt(s, t)
                                } else this._willSettleAt(new n((function (t) {
                                    return t(e)
                                })), t)
                            } else this._willSettleAt(r(e), t)
                        }, e.prototype._settledAt = function (e, t, n) {
                            var r = this.promise;
                            r._state === I && (this._remaining--, e === L ? H(r, n) : this._result[t] = n), 0 === this._remaining && R(r, this._result)
                        }, e.prototype._willSettleAt = function (e, t) {
                            var n = this;
                            D(e, void 0, (function (e) {
                                return n._settledAt(M, t, e)
                            }), (function (e) {
                                return n._settledAt(L, t, e)
                            }))
                        }, e
                    }();

                    function K(e) {
                        return new J(this, e).promise
                    }

                    function $(e) {
                        var t = this;
                        return r(e) ? new t((function (n, r) {
                            for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                        })) : new t((function (e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        }))
                    }

                    function X(e) {
                        var t = new this(S);
                        return H(t, e), t
                    }

                    function Z() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }

                    function ee() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }
                    var te = function () {
                        function e(t) {
                            this[k] = Q(), this._result = this._state = void 0, this._subscribers = [], S !== t && ("function" != typeof t && Z(), this instanceof e ? U(this, t) : ee())
                        }
                        return e.prototype.catch = function (e) {
                            return this.then(null, e)
                        }, e.prototype.finally = function (e) {
                            var t = this,
                                r = t.constructor;
                            return n(e) ? t.then((function (t) {
                                return r.resolve(e()).then((function () {
                                    return t
                                }))
                            }), (function (t) {
                                return r.resolve(e()).then((function () {
                                    throw t
                                }))
                            })) : t.then(e, e)
                        }, e
                    }();

                    function ne() {
                        var t = void 0;
                        if (void 0 !== e) t = e;
                        else if ("undefined" != typeof self) t = self;
                        else try {
                            t = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var n = t.Promise;
                        if (n) {
                            var r = null;
                            try {
                                r = Object.prototype.toString.call(n.resolve())
                            } catch (e) {}
                            if ("[object Promise]" === r && !n.cast) return
                        }
                        t.Promise = te
                    }
                    return te.prototype.then = x, te.all = K, te.race = $, te.resolve = T, te.reject = X, te._setScheduler = c, te._setAsap = l, te._asap = s, te.polyfill = ne, te.Promise = te, te
                }()
            })).polyfill();
            var r, o = [{
                    pageOffset: 44,
                    animationClassName: "ybar-hide-navigation",
                    transitionElSelector: "#ybar-navigation"
                }],
                i = function (e, t) {
                    if (!r) {
                        var n = document.getElementById("ybarConfig");
                        n && (r = JSON.parse(n.textContent))
                    }
                    return r && e in r ? r[e] : t
                },
                a = function (e) {
                    return {
                        selectorStr: function () {
                            for (var t = Array.prototype.slice.call(arguments), n = [], r = 0; r < t.length; ++r) {
                                var o = t[r];
                                e[o] && (o = "." + e[o].trim().replace(/ /g, ".")), n.push(o)
                            }
                            return n.join(" ")
                        }
                    }
                },
                s = function (e) {
                    var t = i("scrollThreshold", "scrollThreshold" in (e = void 0 === e ? {} : e) ? e.scrollThreshold : 0),
                        n = i("scrollUpThreshold", "scrollUpThreshold" in e ? e.scrollUpThreshold : t),
                        r = i("modalClassName", "modalClassName" in e ? e.modalClassName : "modal-open"),
                        a = i("scrollPoints", "scrollPoints" in e ? e.scrollPoints : o),
                        s = document.documentElement,
                        c = a.map((function (e) {
                            return t = e.transitionElSelector, n = document.querySelectorAll(t), r = [], 0 === n.length ? {
                                isRunning: !1
                            } : (Array.prototype.forEach.call(n, (function (e, t) {
                                r[t] = !1;
                                var n = function () {
                                    r[t] = !1, e.removeEventListener("transitionend", n)
                                };
                                e.addEventListener("transitionstart", (function () {
                                    r[t] = !0, e.addEventListener("transitionend", n)
                                }))
                            })), {
                                get isRunning() {
                                    return r.reduce((function (e, t) {}), 0)
                                }
                            });
                            var t, n, r
                        })),
                        l = 0;
                    addEventListener("scroll", (function () {
                        a.forEach((function (e, o) {
                            if (!c[o].isRunning) {
                                var i = s.classList.contains(e.animationClassName),
                                    a = s.scrollTop > 0,
                                    u = s.scrollTop < e.pageOffset,
                                    d = s.scrollTop > e.pageOffset,
                                    f = s.scrollTop > l + t,
                                    p = s.scrollTop < l - n,
                                    m = e.animationClassNameOnScrollUp;
                                s.classList[a ? "add" : "remove"]("ybar-page-is-scrolled"), s.classList.contains(r) || (i && (u || d && p) ? (m && s.classList.add(m), s.classList.remove(e.animationClassName)) : !i && d && f && (m && s.classList.remove(m), s.classList.add(e.animationClassName)))
                            }
                        })), l = s.scrollTop
                    }))
                },
                c = a({
                    "ybar-container": "_yb_164ej",
                    "property-help": "_yb_ooj42",
                    "ybar-inner-wrap": "_yb_13agh",
                    smartphone: "_yb_q98jt",
                    "ybar-row": "_yb_10qkm",
                    "ybar-row-inner-wrap": "_yb_fbxdt",
                    "property-generic": "_yb_cxziq",
                    "property-homepage": "_yb_1uq9v",
                    "ybar-row-navigation": "_yb_1m77i",
                    "ybar-row-main": "_yb_1eryy",
                    "property-mail": "_yb_16po3",
                    "ybar-row-topnavigation": "_yb_gar2h",
                    "ybar-row-topnavigation-spacer": "_yb_tyyss",
                    "main-components": "_yb_6zqw5",
                    "property-gdpr": "_yb_dxjyx",
                    "property-guce": "_yb_gyfya",
                    "property-login": "_yb_x5636",
                    "property-marketingpreferences": "_yb_1gxaa",
                    "property-member-center": "_yb_ltm37",
                    "property-member-center-generic": "_yb_1d8oh",
                    "ybar-inline-searchbox": "_yb_1ojce",
                    "ybar-show-searchicon": "_yb_1au43",
                    "ybar-row-searchbox": "_yb_1vu07",
                    searchbox: "_yb_88lxm",
                    "show-subnavigation": "_yb_1mhgt",
                    "non-article": "_yb_16pq9",
                    "is-article": "_yb_c21f2",
                    searchtrending: "_yb_j5djk",
                    "property-finance": "_yb_12an9",
                    "locale-zh-hant-tw": "_yb_1rqng",
                    toolbar: "_yb_1qyn1",
                    "locale-es-us": "_yb_sh278",
                    "variant-att": "_yb_1jm54",
                    "locale-en-us": "_yb_101xv",
                    "variant-frontier": "_yb_148rv",
                    "locale-fr-ca": "_yb_1jqnn",
                    "variant-rogers": "_yb_1skw3",
                    "locale-en-ca": "_yb_2jr9b",
                    logo: "_yb_1aprm",
                    bentobox: "_yb_1oiz3",
                    "property-view": "_yb_5ytug",
                    "variant-intheknow": "_yb_1wsxu",
                    "variant-aol": "_yb_1c4e5",
                    "variant-huffpost": "_yb_y8xef",
                    "variant-kanvas": "_yb_7slwl",
                    "variant-makers": "_yb_1c42s",
                    "variant-polyvore": "_yb_bypaf",
                    "variant-autoblog": "_yb_1kl6b",
                    "variant-build": "_yb_krjzd",
                    "variant-mapquest": "_yb_xg6ov",
                    "variant-builtbygirls": "_yb_1jfw7",
                    "variant-engadget": "_yb_1iz8t",
                    "proeprty-guce": "_yb_hbhpt",
                    "variant-flurry": "_yb_1nv1q",
                    "variant-moviefone": "_yb_1caw8",
                    "variant-rivals": "_yb_1hj49",
                    "variant-ryot": "_yb_n2g3j",
                    "variant-stylemepretty": "_yb_8gjyx",
                    "variant-talktalk": "_yb_15gmu",
                    "variant-techcrunch": "_yb_1ny8r",
                    "variant-tumblr": "_yb_zv2hu",
                    "locale-ml-in": "_yb_51yvk",
                    "locale-te-in": "_yb_71bwv",
                    "locale-ta-in": "_yb_n8k4d",
                    "searchtrending-wrap": "_yb_1wy5e",
                    trendingleft: "_yb_19w6q",
                    trendingright: "_yb_1b2oj",
                    backbutton: "_yb_1kisi",
                    mail: "_yb_1apsm",
                    notification: "_yb_onakc",
                    account: "_yb_15khy",
                    dialpad: "_yb_1o88w",
                    shoppingcart: "_yb_be8hc",
                    help: "_yb_1aq7w",
                    "featured-icon": "_yb_18078",
                    banner: "_yb_rt4kf",
                    "ybar-has-topnavigation": "_yb_jurvy",
                    "ybar-has-navigation": "_yb_2owxo",
                    "ybar-has-searchtrending": "_yb_1qa2y",
                    "ybar-ymobile-toolbar": "_yb_1l3z1",
                    "ybar-ymobile-signin": "_yb_1tgl6",
                    "ybar-ymobile2-signin": "_yb_qd7l3",
                    "ybar-ymobile4-signin": "_yb_1xgzi",
                    "ybar-show-ymobile2": "_yb_1ju69",
                    "ybar-show-ymobile3": "_yb_iifif",
                    "ybar-show-ymobile4": "_yb_11h0x",
                    searchicon: "_yb_b8jd2",
                    show: "_yb_1aq9w",
                    hide: "_yb_1apte",
                    "smartphone-wrapper": "_yb_10p3q"
                }).selectorStr,
                l = document.querySelector(c("smartphone")),
                u = {
                    scrollPoints: [{
                        pageOffset: 44,
                        animationClassName: "ybar-hide-navigation",
                        animationClassNameOnScrollUp: "ybar-show-navigation",
                        transitionElSelector: "#ybar-navigation"
                    }],
                    scrollUpThreshold: 5
                },
                d = !1,
                f = function () {
                    d || (d = !0, s(l ? u : {}))
                };
            "interactive" === document.readyState || "complete" === document.readyState ? (console.log("[ybar debug] Nav-hide init triggered immediately"), f()) : (document.addEventListener("DOMContentLoaded", (function () {
                console.log("[ybar debug] Nav-hide init triggered ondomcontentloaded"), f()
            })), document.addEventListener("load", (function () {
                console.log("[ybar debug] Nav-hide init triggered onload"), f()
            })));
            var p = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.logPerformance = t.logError = t.addEventListener = t.triggerEvent = void 0;
                    var n = function (e, t) {
                        var n = "ybar." + e,
                            r = {
                                detail: t
                            };
                        window.dispatchEvent("function" == typeof CustomEvent ? new CustomEvent(n, r) : function (e, t) {
                            var n = document.createEvent("Event");
                            return n.initEvent(e, !0, !0), n.detail = t.detail, n
                        }(n, r))
                    };
                    t.triggerEvent = n;
                    t.addEventListener = function (e, t) {
                        window.addEventListener("ybar." + e, t)
                    };
                    t.logError = function (e, t, r) {
                        n("error", {
                            message: e + ": " + t.message,
                            error: t,
                            meta: r
                        })
                    };
                    t.logPerformance = function (e) {
                        n("performance", {
                            name: e.name,
                            metrics: e.duration
                        })
                    }
                })),
                m = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.setNavStartTime = t.getPerformanceI13nObject = t.saveCurrentTimerValue = t.initRapid = t.isModuleTracked = t.beaconEvent = t.beaconClick = t.refreshModule = void 0;
                    var n, r, o, i = document.getElementById("ybar"),
                        a = "",
                        s = [],
                        c = function () {},
                        l = function () {
                            window.removeEventListener("beforeunload", l), "" !== a && p.logError("Rapid not found on page", new Error(a))
                        },
                        u = function () {
                            var e = 0,
                                t = window.YAHOO;
                            if (n) return n;
                            if (t)
                                if (t.i13n)
                                    if (t.i13n.SPACEID)
                                        if (t.i13n.__RAPID_INSTANCES__)
                                            if (t.i13n.__RAPID_INSTANCES__.length < 1) a = "YBAR: no instances of rapid found!";
                                            else {
                                                a = "", n = t.i13n.__RAPID_INSTANCES__[0].instance, clearInterval(r), window.removeEventListener("beforeunload", l);
                                                var u = {
                                                    useViewability: !0
                                                };
                                                !!document.querySelector(".ybar-track-link-views") || (u.clickonly = !0), n.addModules("ybar", !1, u), i && (o = i.getAttribute("data-spaceid"));
                                                var d = document.querySelectorAll("[data-redirect-params]"),
                                                    f = "pspid=" + (t.i13n.SPACEID || o) + "&";
                                                if (d)
                                                    for (e = 0; e < d.length; ++e) d[e].href = d[e].href.replace("pspid=&", f);
                                                if (s.length > 0)
                                                    for (e = 0; e < s.length; ++e) {
                                                        var p = s[e];
                                                        p.type && p.options && ("beaconClick" === p.type ? n.beaconClick(p.options.secValue, p.options.slkValue, p.options._pValue, p.options.clickParams, p.options.outcome, c, p.options.options) : "beaconEvent" === p.type && n.beaconEvent(p.options.eventName, p.options.pageParams, p.options.outcome))
                                                    }
                                            }
                            else a = "YBAR: `YAHOO.i13n.__RAPID_INSTANCES__` is not defined!";
                            else a = "YBAR: `YAHOO.i13n.SPACEID` is not defined!";
                            else a = "YBAR: `YAHOO.i13n` is not defined!";
                            else a = "YBAR: `YAHOO` is not defined!"
                        };
                    t.beaconClick = function (e, t, r, o, i, a, l) {
                        n ? n.beaconClick(e, t, r, o, i, c, l) : s.push({
                            type: "beaconClick",
                            options: {
                                secValue: e,
                                slkValue: t,
                                _pValue: r,
                                clickParams: o,
                                outcome: i || null,
                                options: l || null
                            }
                        }), a && "function" == typeof a && a()
                    };
                    var d = function (e, t, r, o) {
                        n ? n.beaconEvent(e, t, r) : s.push({
                            type: "beaconEvent",
                            options: {
                                eventName: e,
                                pageParams: t,
                                outcome: r
                            }
                        }), o && "function" == typeof o && o()
                    };
                    t.beaconEvent = d;
                    t.refreshModule = function () {
                        n && n.refreshModule("ybar")
                    };
                    t.isModuleTracked = function () {
                        n && n.isModuleTracked("ybar")
                    };
                    var f = {},
                        m = null,
                        y = null,
                        h = function () {
                            return Date.now()
                        },
                        g = function (e, t) {
                            return "number" == typeof e && "number" == typeof t ? Math.floor(t - e) : null
                        };
                    t.saveCurrentTimerValue = function (e) {
                        var t = h();
                        return null !== t && (f[e] || (f[e] = t)), t
                    };
                    t.getPerformanceI13nObject = function () {
                        var e = {
                            ns_ready: g(m, f.search_assist_ready),
                            ns_focus: g(m, f.search_input_focus_click),
                            ns_key: g(m, f.search_input_keyboard_input),
                            dcl_search: g(y, f.search_query_submit),
                            ns_search: g(m, f.search_query_submit)
                        };
                        return Object.keys(e).forEach((function (t) {
                            null === e[t] && delete e[t]
                        })), JSON.stringify(e)
                    };
                    var b = function (e) {
                        m = e
                    };
                    t.setNavStartTime = b;
                    var v = function () {
                        y = h(), window.performance && window.performance.timing && window.performance.timing.navigationStart && b(window.performance.timing.navigationStart), window.performance && window.performance.timing && window.performance.timing.domContentLoadedEventStart && (y = window.performance.timing.domContentLoadedEventStart);
                        var e = {
                            ns_ready: g(m, f.search_assist_ready),
                            dcl_ready: g(y, f.search_assist_ready)
                        };
                        setTimeout((function () {
                            d("saready", e, null, c)
                        }), 200)
                    };
                    t.initRapid = function () {
                        r = window.setInterval(u, 100), setTimeout((function () {
                            r && (clearInterval(r), l())
                        }), 1e4), window.addEventListener("beforeunload", l), u(), m = h(), "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", v) : v()
                    }
                })),
                y = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.hideOutlineOnMouseDown = t.addHoverEvent = t.isHovered = t.init = void 0;
                    t.init = function () {
                        document.body.addEventListener("click", (function () {
                            p.triggerEvent("close-all-menus")
                        }))
                    };
                    t.isHovered = function (e) {
                        return !(!e || !e.parentNode) && e === e.parentNode.querySelector(e.nodeName + ":hover")
                    };
                    var n = {};
                    t.addHoverEvent = function (e, t, r, o) {
                        e.addEventListener("mouseenter", (function () {
                            var e = JSON.stringify({
                                sec: t,
                                slk: r,
                                params: o
                            });
                            n[e] || (n[e] = !0, m.beaconClick(t, r, "", o), setTimeout((function () {
                                delete n[e]
                            }), 1e3))
                        }))
                    };
                    t.hideOutlineOnMouseDown = function (e, t) {
                        var n, r = function () {
                                return "_yb_ol_" + String(1e6 * Math.random() | 0)
                            },
                            o = r(),
                            i = r(),
                            a = document.createElement("style");
                        a.textContent = "\n        ." + o + " {\n            outline-offset: 2px;\n            outline: 3px solid #00abf0;\n            outline: 5px solid -webkit-focus-ring-color;\n        }\n        ." + i + " {\n            outline: none !important;\n        }\n    ", document.head.appendChild(a);
                        var s = [],
                            c = document.querySelector(e),
                            l = document.querySelector(t),
                            u = function (e, t) {
                                for (var n = e.className.split(" "), r = [], a = 0; a < n.length; ++a) {
                                    var s = n[a].trim();
                                    s !== i && s !== o && r.push(s)
                                }
                                r.push(t), e.className = r.join(" ")
                            },
                            d = function () {
                                l && u(l, i)
                            },
                            f = function () {
                                l && u(l, o)
                            };
                        c && (null === (n = c.parentNode) || void 0 === n || n.addEventListener("mousedown", (function () {
                            s.push({
                                name: "mousedown",
                                ts: new Date
                            })
                        })), c.addEventListener("focus", (function () {
                            for (var e = 2, t = [function () {}, d, f], n = 0; n < s.length; ++n) {
                                var r = s[n];
                                if (0 === e && "mousedown" === r.name) e = 2;
                                else if (1 !== e && "mousedown" === r.name) {
                                    (new Date).getTime() - r.ts.getTime() < 100 && (e = 1)
                                } else "mousedown" === s[0].name && "blur" === r.name && (e = 0)
                            }
                            s.length = 0, t[e]()
                        })), c.addEventListener("blur", (function () {
                            s.push({
                                name: "blur",
                                ts: new Date
                            }), d()
                        })))
                    }
                })),
                h = {
                    init: function () {
                        document.body.addEventListener("click", (function () {
                            p.triggerEvent("close-all-menus")
                        }))
                    },
                    isHovered: y.isHovered,
                    addHoverEvent: y.addHoverEvent,
                    hideOutlineOnMouseDown: y.hideOutlineOnMouseDown
                };
            h.init();
            var g = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.getPerformanceMetrics = t.getConfig = void 0;
                    t.getConfig = function () {
                        if (void 0 !== window._ybar_runtime_config) return window._ybar_runtime_config;
                        var e = "YBAR client-side config is undefined",
                            t = new Error(e);
                        throw p.logError(e, t), t
                    };
                    t.getPerformanceMetrics = function () {
                        return window._ybar_perf_metrics
                    }
                })),
                b = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.registerPaintObserver = t.measure = void 0, window._ybar_perf_metrics = {};
                    t.measure = function (e) {
                        var t = "start_" + e,
                            n = "stop_" + e;
                        performance.mark(t);
                        return {
                            stop: function () {
                                performance.mark(n), performance.measure(e, t, n), performance.getEntriesByName(e, "measure").forEach((function (e, t) {
                                    g.getPerformanceMetrics()[e.name + "_" + t] = e.duration, p.logPerformance(e)
                                }))
                            }
                        }
                    };
                    t.registerPaintObserver = function () {
                        if ("PerformanceObserver" in window) try {
                            new PerformanceObserver((function (e) {
                                e.getEntries().forEach((function (e, t) {
                                    g.getPerformanceMetrics()[e.name + "_" + t] = e.startTime, p.logPerformance(e)
                                }))
                            })).observe({
                                entryTypes: ["paint"]
                            })
                        } catch (t) {
                            var e = new Error("Unknown error observing paint event");
                            p.logError("Error", e)
                        }
                    }
                })),
                v = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initYbar = t.initModule = void 0;
                    t.initModule = function (e, t) {
                        var n = b.measure(e);
                        t({
                            triggerEvent: p.triggerEvent,
                            addEventListener: p.addEventListener,
                            logError: p.logError,
                            logPerformance: p.logPerformance,
                            getConfig: g.getConfig,
                            getPerformanceMetrics: g.getPerformanceMetrics
                        }, document, window), n.stop()
                    };
                    t.initYbar = function () {
                        window.YBAR = {
                            triggerEvent: p.triggerEvent,
                            addEventListener: p.addEventListener,
                            logError: p.logError,
                            logPerformance: p.logPerformance,
                            getConfig: g.getConfig,
                            getPerformanceMetrics: g.getPerformanceMetrics
                        }, b.registerPaintObserver(), p.triggerEvent("ready", window.YBAR)
                    }
                })),
                _ = function (e, t) {
                    return (_ = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function (e, t) {
                            e.__proto__ = t
                        } || function (e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                };
            var w = function () {
                return (w = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };
            var E = Object.create ? function (e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                        return t[n]
                    }
                })
            } : function (e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            };

            function C(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function () {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function x(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function T(e) {
                return this instanceof T ? (this.v = e, this) : new T(e)
            }
            var k = Object.create ? function (e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function (e, t) {
                e.default = t
            };
            var S = t(Object.freeze({
                    __proto__: null,
                    __extends: function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function n() {
                            this.constructor = e
                        }
                        _(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                    },
                    get __assign() {
                        return w
                    },
                    __rest: function (e, t) {
                        var n = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var o = 0;
                            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                        }
                        return n
                    },
                    __decorate: function (e, t, n, r) {
                        var o, i = arguments.length,
                            a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                        else
                            for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
                        return i > 3 && a && Object.defineProperty(t, n, a), a
                    },
                    __param: function (e, t) {
                        return function (n, r) {
                            t(n, r, e)
                        }
                    },
                    __metadata: function (e, t) {
                        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                    },
                    __awaiter: function (e, t, n, r) {
                        return new(n || (n = Promise))((function (o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    __generator: function (e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function () {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                            return this
                        }), i;

                        function s(i) {
                            return function (s) {
                                return function (i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    __createBinding: E,
                    __exportStar: function (e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || E(t, e, n)
                    },
                    __values: C,
                    __read: x,
                    __spread: function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(x(arguments[t]));
                        return e
                    },
                    __spreadArrays: function () {
                        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                        var r = Array(e),
                            o = 0;
                        for (t = 0; t < n; t++)
                            for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
                        return r
                    },
                    __spreadArray: function (e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || t)
                    },
                    __await: T,
                    __asyncGenerator: function (e, t, n) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var r, o = n.apply(e, t || []),
                            i = [];
                        return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function () {
                            return this
                        }, r;

                        function a(e) {
                            o[e] && (r[e] = function (t) {
                                return new Promise((function (n, r) {
                                    i.push([e, t, n, r]) > 1 || s(e, t)
                                }))
                            })
                        }

                        function s(e, t) {
                            try {
                                (n = o[e](t)).value instanceof T ? Promise.resolve(n.value.v).then(c, l) : u(i[0][2], n)
                            } catch (e) {
                                u(i[0][3], e)
                            }
                            var n
                        }

                        function c(e) {
                            s("next", e)
                        }

                        function l(e) {
                            s("throw", e)
                        }

                        function u(e, t) {
                            e(t), i.shift(), i.length && s(i[0][0], i[0][1])
                        }
                    },
                    __asyncDelegator: function (e) {
                        var t, n;
                        return t = {}, r("next"), r("throw", (function (e) {
                            throw e
                        })), r("return"), t[Symbol.iterator] = function () {
                            return this
                        }, t;

                        function r(r, o) {
                            t[r] = e[r] ? function (t) {
                                return (n = !n) ? {
                                    value: T(e[r](t)),
                                    done: "return" === r
                                } : o ? o(t) : t
                            } : o
                        }
                    },
                    __asyncValues: function (e) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var t, n = e[Symbol.asyncIterator];
                        return n ? n.call(e) : (e = C(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function () {
                            return this
                        }, t);

                        function r(n) {
                            t[n] = e[n] && function (t) {
                                return new Promise((function (r, o) {
                                    (function (e, t, n, r) {
                                        Promise.resolve(r).then((function (t) {
                                            e({
                                                value: t,
                                                done: n
                                            })
                                        }), t)
                                    })(r, o, (t = e[n](t)).done, t.value)
                                }))
                            }
                        }
                    },
                    __makeTemplateObject: function (e, t) {
                        return Object.defineProperty ? Object.defineProperty(e, "raw", {
                            value: t
                        }) : e.raw = t, e
                    },
                    __importStar: function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && E(t, e, n);
                        return k(t, e), t
                    },
                    __importDefault: function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    },
                    __classPrivateFieldGet: function (e, t, n, r) {
                        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                    },
                    __classPrivateFieldSet: function (e, t, n, r, o) {
                        if ("m" === r) throw new TypeError("Private method is not writable");
                        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
                        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
                    }
                })),
                I = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.initPerformanceMetricsBeaconListener = t.initErrorBeaconListener = void 0;
                    var n, r = document.getElementById("ybar"),
                        o = r && r.className && r.className.match(/ybar-property-([a-z]*)/);
                    (null == o ? void 0 : o.length) && (n = o[1]);
                    var i = function (e, t, r) {
                        e || r && r("Missing required params - type: " + e);
                        var o = S.__assign(S.__assign({}, t), {
                                src: "ybar",
                                _rdn: (new Date).getTime().toString().substr(7)
                            }),
                            i = "https://www.yahoo.com/_td_api/beacon/" + e + "?" + Object.keys(o).map((function (e) {
                                return encodeURIComponent(e) + "=" + encodeURIComponent(o[e])
                            })).join("&") + function () {
                                var e = "";
                                try {
                                    var t = window.YAHOO && window.YAHOO.context || window.Af && window.Af.context || {};
                                    ["apptype", "rid", "bucketId", "bucket", "device", "osName", "browserName", "browserVersion"].forEach((function (n) {
                                        void 0 !== t[n] && (e += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(t[n]))
                                    }))
                                } catch (e) {
                                    console.log(e)
                                }
                                return e
                            }() + "&site=" + n,
                            a = new Image;
                        a.onerror = function (e) {
                            var t = e instanceof ErrorEvent ? e.error : e.toString();
                            r && r(t)
                        }, a.onload = function () {
                            r && r()
                        }, a.src = i
                    };
                    t.initErrorBeaconListener = function () {
                        p.addEventListener("error", (function (e) {
                            var t = e && e.detail || {},
                                n = t.error || {},
                                r = t.message || n.message || n.toString();
                            try {
                                var o = {
                                    code: n.name,
                                    file: n.fileName || "",
                                    line: n.lineNumber || "",
                                    message: r
                                };
                                i("error", o)
                            } catch (e) {}
                        }))
                    };
                    t.initPerformanceMetricsBeaconListener = function () {
                        p.addEventListener("performance", (function () {
                            setTimeout((function () {
                                try {
                                    var e = g.getPerformanceMetrics();
                                    Math.round(100 * Math.random()) > 90 && i("performance", e)
                                } catch (e) {}
                            }), 1e3)
                        }))
                    }
                })),
                M = b.measure("ybar-init");
            v.initYbar(), M.stop(), I.initPerformanceMetricsBeaconListener(), m.initRapid(), I.initErrorBeaconListener();
            var L = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.addTopnavigationEventlisteners = void 0;
                    var n = function (e, t) {
                        return [].forEach.call(e, t)
                    };
                    t.addTopnavigationEventlisteners = function (e, t) {
                        var r, o, i = e.getConfig();
                        if (n(t.allLinks, (function (e) {
                                return e.addEventListener("click", (function () {
                                    var e;
                                    e = t.allLinks, n(e, (function (e) {
                                        e.style.pointerEvents = "none"
                                    })), setTimeout((function () {
                                        n(e, (function (e) {
                                            e.style.pointerEvents = "auto"
                                        }))
                                    }), 1e3)
                                }))
                            })), "mail" === i.property) {
                            var a = (r = t.allLinks, o = function (e) {
                                return e.classList.contains("selected")
                            }, [].find.call(r, o));
                            a && a.addEventListener("click", (function (t) {
                                t.preventDefault(), e.triggerEvent("topnav-link-click", {
                                    id: "mail"
                                })
                            }))
                        }
                    }
                })),
                O = "_yb_1aoge";
            v.initModule("ybar-mod-topnavigation", (function (e) {
                var t = {
                    allLinks: document.querySelectorAll("." + O + " a")
                };
                L.addTopnavigationEventlisteners(e, t)
            }));
            var A = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.init = void 0;
                    t.init = function (e, t) {
                        var n;
                        t.logoImages && (n = t.logoImages).length > 0 && Array.prototype.forEach.call(n, (function (e) {
                            e.onerror = function () {
                                e.onerror = null, e.style.display = "none"
                            }
                        })), t.wrapper && (function (e) {
                            e && y.hideOutlineOnMouseDown("#ybar-logo", "#ybar-logo")
                        }(t.wrapper), function (e, t) {
                            t && t.addEventListener("click", (function () {
                                e.triggerEvent("logo-click")
                            }))
                        }(e, t.wrapper))
                    }
                })),
                N = "_yb_1mm6q";
            v.initModule("ybar-mod-logo", (function (e) {
                    var t = {
                        wrapper: document.getElementById("ybar-logo"),
                        logoImages: document.querySelectorAll("." + N)
                    };
                    A.init(e, t)
                })), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
                    var n, r;
                    if (null == this) throw new TypeError(" this is null or not defined");
                    var o = Object(this),
                        i = o.length >>> 0;
                    if ("function" != typeof e) throw new TypeError(e + " is not a function");
                    for (arguments.length > 1 && (n = t), r = 0; r < i;) {
                        var a;
                        r in o && (a = o[r], e.call(n, a, r, o)), r++
                    }
                }), Array.prototype.filter || (Array.prototype.filter = function (e) {
                    if (null == this) throw new TypeError;
                    var t = Object(this),
                        n = t.length >>> 0;
                    if ("function" != typeof e) throw new TypeError;
                    for (var r = [], o = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < n; i++)
                        if (i in t) {
                            var a = t[i];
                            e.call(o, a, i, t) && r.push(a)
                        } return r
                }), Array.prototype.map || (Array.prototype.map = function (e, t) {
                    var n, r, o;
                    if (null == this) throw new TypeError(" this is null or not defined");
                    var i = Object(this),
                        a = i.length >>> 0;
                    if ("function" != typeof e) throw new TypeError(e + " is not a function");
                    for (arguments.length > 1 && (n = t), r = new Array(a), o = 0; o < a;) {
                        var s, c;
                        o in i && (s = i[o], c = e.call(n, s, o, i), r[o] = c), o++
                    }
                    return r
                }), String.prototype.includes || (String.prototype.includes = function (e, t) {
                    return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                }),
                function () {
                    function e(e) {
                        return "function" == typeof e.trim ? e.trim() : e.replace(/^\s+|\s+$/gm, "")
                    }

                    function t(e) {
                        var t;
                        s && s < 9 && void 0 !== e.createTextRange ? ((t = e.createTextRange()).collapse(!1), t.select()) : "number" == typeof e.selectionStart && (e.selectionStart = e.selectionEnd = e.value.length)
                    }

                    function n(e) {
                        "focus" in e && e.focus()
                    }

                    function r(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    }

                    function o() {}
                    var i, a, s;
                    i = window, a = document, s = function () {
                        if ("Microsoft Internet Explorer" !== i.navigator.appName) return !1;
                        var e = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(i.navigator.userAgent);
                        return e && e[1] && parseFloat(e[1])
                    }(), o.prototype = {
                        set: function (e, t, n) {
                            e.setAttribute(t, n)
                        },
                        get: function (e, t) {
                            return e.getAttribute(t)
                        },
                        ieVer: s,
                        merge: function e(t, n) {
                            for (var r in n) "object" == typeof n[r] && "object" == typeof t[r] ? e(t[r], n[r]) : t[r] = n[r]
                        },
                        extend: function (e, t) {
                            function n() {}
                            var r;
                            e.prototype = Object.create ? Object.create(t.prototype) : (r = t.prototype, n.prototype = r, new n), e.prototype.constructor = e
                        },
                        buildUrl: function (e, t) {
                            var n = [];
                            for (var r in t) t.hasOwnProperty(r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                            return 0 < n.length && (e = e + (-1 === e.indexOf("?") ? "?" : "&") + n.join("&")), e
                        },
                        stopPropagation: function (e) {
                            e.returnValue = !1, e.cancelBubble = !0, e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation()
                        },
                        setFocus: function (e) {
                            t(e), n(e)
                        },
                        cursorEnd: t,
                        select: function (e, t, r) {
                            var o;
                            s && s < 9 && void 0 !== e.createTextRange ? ((o = e.createTextRange()).moveStart("character", t), o.moveEnd("character", r), o.select()) : (e.selectionStart = t, e.selectionEnd = r, n(e))
                        },
                        hasClass: function (e, t) {
                            if (e.classList) return e.classList.contains(t);
                            var n = new RegExp("(\\s|^)" + r(t) + "(\\s|$)");
                            return e.className.match(n)
                        },
                        removeClass: function (t, n) {
                            var o;
                            t.classList ? n && t.classList.remove(n) : (o = new RegExp("(\\s|^)" + r(n) + "(\\s|$)"), t.className = e(t.className.replace(o, " ")))
                        },
                        trim: e,
                        htmlEncode: function (e) {
                            return e.replace(/[\u00A0-\u9999<>\&]/gim, (function (e) {
                                return "&#" + e.charCodeAt(0) + ";"
                            }))
                        },
                        ae: function (e, t, n, r) {
                            if (r = r || !1, e.addEventListener) e.addEventListener(t, n, r);
                            else {
                                if (!e.attachEvent) return !1;
                                e.attachEvent("on" + t, n)
                            }
                        },
                        de: function (e, t, n) {
                            if (e.removeEventListener) e.removeEventListener(t, n);
                            else {
                                if (!e.detachEvent) return !1;
                                e.detachEvent("on" + t, n)
                            }
                        },
                        ts: function () {
                            return Math.round((new Date).getTime() / 1e3)
                        },
                        bold: function (e, t, n, o) {
                            var i, a = (o.pattern ? o.pattern : "") + "(&[^;\\s]*)?(%needles)",
                                s = o.exact ? [r(n)] : n.split(/[\s|,]+/).filter((function (e) {
                                    return "" !== e
                                })).sort((function (e, t) {
                                    return t.length - e.length
                                })).map(r);
                            return s.length ? (a = a.replace("%needles", s.join("|")), t = t.replace(new RegExp(a, "gi"), (i = e, function (e, t, n) {
                                return t && !/\s/.test(n) ? e : i.replace(/\{s\}/g, n)
                            }))) : t
                        },
                        fireEvent: function (e, t, n) {
                            var r;
                            "function" == typeof i.CustomEvent ? (r = new i.CustomEvent(t, {
                                detail: n
                            }), e.dispatchEvent(r)) : "function" == typeof a.createEvent ? ((r = a.createEvent("CustomEvent")).initCustomEvent(t, !1, !1, n), e.dispatchEvent(r)) : (a.attachEvent, document.documentElement[t] = n)
                        }
                    }, i.YAHOO = i.YAHOO || {}, i.YAHOO.NBClass = o, i.YAHOO.NB = new o, Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
                        var n, r;
                        if (null == this) throw new TypeError(" this is null or not defined");
                        var o, i = Object(this),
                            a = i.length >>> 0;
                        if ("function" != typeof e) throw new TypeError(e + " is not a function");
                        for (1 < arguments.length && (n = t), r = 0; r < a;) r in i && (o = i[r], e.call(n, o, r, i)), r++
                    }), Array.prototype.filter || (Array.prototype.filter = function (e) {
                        if (null == this) throw new TypeError;
                        var t = Object(this),
                            n = t.length >>> 0;
                        if ("function" != typeof e) throw new TypeError;
                        for (var r, o = [], i = 2 <= arguments.length ? arguments[1] : void 0, a = 0; a < n; a++) a in t && (r = t[a], e.call(i, r, a, t) && o.push(r));
                        return o
                    }), Array.prototype.map || (Array.prototype.map = function (e, t) {
                        var n, r, o;
                        if (null == this) throw new TypeError(" this is null or not defined");
                        var i, a, s = Object(this),
                            c = s.length >>> 0;
                        if ("function" != typeof e) throw new TypeError(e + " is not a function");
                        for (1 < arguments.length && (n = t), r = new Array(c), o = 0; o < c;) o in s && (i = s[o], a = e.call(n, i, o, s), r[o] = a), o++;
                        return r
                    }), String.prototype.includes || (String.prototype.includes = function (e, t) {
                        return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                    });
                    var c, l, u, d, f, p, m = window,
                        y = document,
                        h = m.YAHOO,
                        g = h.NB,
                        b = {},
                        v = "before_get_assist",
                        _ = "before_display_data",
                        w = "before_init_view",
                        E = "after_init_view",
                        C = "before_parse_data",
                        x = "before_update_assist",
                        T = "after_update_list",
                        k = "after_create_item",
                        S = "before_show_sa",
                        I = "after_reset_view",
                        M = "after_hide_view",
                        L = "after_init_controller",
                        O = "click_assist",
                        A = "before_query_assist",
                        N = "before_key_submit",
                        P = "before_button_submit",
                        B = "before_submit_query",
                        q = "after_item_highlight",
                        j = "after_item_reset_highlight",
                        V = "before_sb_focus",
                        R = "after_sb_focus",
                        H = "before_sb_blur",
                        D = "after_sb_blur",
                        F = "before_beacon",
                        Y = "after_set_ylc",
                        U = "after_reset_controller";

                    function z(e, t) {
                        t = (e = e || {}).tag || t || "div";
                        var n, r = y.createElement(t);
                        for (var o in e.css && (r.className = e.css), e.text && (r.textContent = e.text), e.attrs) g.set(r, o, e.attrs[o]);
                        for (var o in e.style) r.style[o] = e.style[o];
                        return e.wrap ? ((n = z(e.wrap)).appendChild(r), n) : r
                    }

                    function Q(e) {
                        this.config = e || {}, this.listeners = {}, this.cb = {}
                    }

                    function W() {}

                    function G() {}

                    function J() {}

                    function K() {
                        var e = this,
                            t = e.app.view.elems.sbForm,
                            n = t.fr,
                            r = e.config.def || "";
                        n = n || t.appendChild(e.createElem({
                            attrs: {
                                type: "hidden",
                                name: "fr",
                                value: r
                            }
                        }, "input"));
                        e.origFr = n.value, e.fr = n
                    }

                    function $() {
                        var e = this.fr,
                            t = this.config,
                            n = this.app.view.assistItem.data;
                        e.value = t.fr || "", "" == n.q && 9 == n.m && t.tnFr && (e.value = t.tnFr)
                    }

                    function X() {
                        this.fr.value = this.origFr
                    }

                    function Z() {}

                    function ee() {
                        this.isTriggerByInput = !this.app.view.sameQuery()
                    }

                    function te(e) {
                        var t, n, r = this.app.view.elems.sbInput;
                        this.isTriggerByInput && ("number" == typeof r.selectionStart ? t = r.selectionStart : y.selection && (r.focus(), (n = y.selection.createRange()).moveStart("character", -y.activeElement.value.length), t = n.text.length), null !== t && t !== r.value.length && (e.ipos = t), this.isTriggerByInput = !1)
                    }

                    function ne() {}

                    function re() {
                        var e = this.config,
                            t = this.createElem,
                            n = t(e.ctn, "div"),
                            r = n.appendChild(t(e.tray, "div")),
                            o = y.getElementById(e.parent) || y.body,
                            i = y.getElementById(e.beforeNode),
                            a = y.getElementById(e.afterNode),
                            s = i || a;
                        s ? (o = s.parentNode, i || (s = s.nextSibling), o.insertBefore(n, s)) : o.appendChild(n), this.app.view.elems.saTray = r
                    }

                    function oe() {
                        this.config = {
                            ctn: {
                                css: "sa-tray-ctn"
                            },
                            tray: {
                                css: "sa-tray"
                            }
                        }
                    }

                    function ie() {
                        this.selectedIndex = -1
                    }

                    function ae() {
                        function e() {
                            var e = n.selectedIndex;
                            0 <= e && (g.removeClass(i[e].li, r.css), n.app.notify(j))
                        }

                        function t(e) {
                            g.hasClass(e, r.css) || (e.className += " " + r.css), n.app.notify(q)
                        }
                        var n = this,
                            r = n.config,
                            o = n.app.view,
                            i = o.items,
                            a = o.elems,
                            s = a.sbInput,
                            c = a.saTray,
                            l = g.ieVer,
                            u = !1;
                        g.ae(c, "mouseover", (function (r) {
                            for (var i = r.target || r.srcElement; i && i != c;) {
                                var a = g.get(i, "pos"),
                                    s = a ? o.items[a] : {};
                                if (s && i === s.li) {
                                    e(), n.selectedIndex = a, t(i);
                                    break
                                }
                                i = i.parentNode
                            }
                        })), g.ae(c, "mouseout", (function (t) {
                            e()
                        })), g.ae(s, "keydown", (function (a) {
                            var c = a.keyCode,
                                l = n.selectedIndex;
                            switch (c) {
                                case 38:
                                case 40:
                                    if (!i.length) return;
                                    e();
                                    for (var d, f = i.length; 40 == c ? l < 0 || f - 1 <= l ? l = 0 : l++ : l <= 0 ? l = f - 1 : l--, !(d = i[l]).li.parentNode;);
                                    n.selectedIndex = l, o.assistItem = d, s.value = d.data.k, t(d.li), g.stopPropagation(a), u = !0;
                                    break;
                                case 9:
                                case 39:
                                    if (9 == c && r.useDefaultTab) return;
                                    var p = s.value.length;
                                    if (s.selectionEnd == p && s.selectionStart == p) {
                                        if (!i.length) return;
                                        (0 <= l || s.value !== i[0].data.k) && (s.value = 0 <= l ? i[l].data.k : i[0].data.k, o.show(), g.stopPropagation(a))
                                    } else 9 == c && (s.selectionEnd = s.selectionStart = s.value.length, g.stopPropagation(a))
                            }
                        })), l && (8 === l && g.ae(s, "propertychange", (function (e) {
                            "value" === e.propertyName && !0 !== u && o.show(), u = !1
                        })), 9 === l && (n.onSelctionChange = function (e) {
                            y.activeElement === s && o.show()
                        }))
                    }

                    function se() {
                        var e = g.ieVer;
                        e && 9 === e && !this.ie9_attached && (g.ae(y, "selectionchange", this.onSelctionChange), this.ie9_attached = !0)
                    }

                    function ce() {
                        var e = g.ieVer;
                        e && 9 === e && this.ie9_attached && (g.de(y, "selectionchange", this.onSelctionChange), this.ie9_attached = !1)
                    }

                    function le() {
                        this.config = {
                            css: "highlight",
                            useDefaultTab: !1
                        }
                    }
                    h.SA = (l = [], Q.prototype = {
                        jsonp: function (e) {
                            var t = y.getElementsByTagName("head")[0],
                                n = y.createElement("script");
                            g.set(n, "type", "text/javascript"), g.set(n, "src", e), t.appendChild(n), g.ae(n, "load", (function () {
                                t.removeChild(n)
                            }))
                        },
                        createElem: z,
                        on: function (e, t, n) {
                            var r;
                            e && t && ((r = this.listeners)[e] || (r[e] = []), r[e].push({
                                thisArg: n || this,
                                fn: t
                            }))
                        },
                        notify: function (e, t) {
                            var n = this.listeners;
                            if (!n[e]) return !1;
                            n[e].forEach((function (e) {
                                var n = e.thisArg,
                                    r = e.fn;
                                r && r.apply && 1 != n.config.disable && r.apply(n, t || [])
                            }))
                        },
                        init: function (e) {
                            var t, n, r, o = this,
                                i = o.config,
                                a = i.plugins = {};
                            for (var s in o.view = t = new c.viewClass, o.model = n = new c.modelClass, o.control = r = new c.controlClass, b) {
                                var l = new b[s];
                                a[s] = l.config = l.config || {}, l.createElem = z, l.init(o)
                            }
                            "object" == typeof e && g.merge(i, e), o.ready = t.init(o) && n.init(o) && r.init(o)
                        }
                    }, u = Q, c = {
                        ver: "assistjs-v1.0.111",
                        apps: l,
                        plugs: b,
                        add: function (e, t) {
                            b[e] = t
                        },
                        msg: {
                            BEFORE_GET_ASSIST: v,
                            BEFORE_DISPLAY_DATA: _,
                            BEFORE_INIT_VIEW: w,
                            AFTER_INIT_VIEW: E,
                            BEFORE_PARSE_DATA: C,
                            BEFORE_UPDATE_ASSIST: x,
                            AFTER_UPDATE_LIST: T,
                            AFTER_CREATE_ITEM: k,
                            BEFORE_SHOW_SA: S,
                            AFTER_RESET_VIEW: I,
                            AFTER_HIDE_VIEW: M,
                            AFTER_INIT_CONTROLLER: L,
                            CLICK_ASSIST: O,
                            BEFORE_QUERY_ASSIST: A,
                            BEFORE_KEY_SUBMIT: N,
                            BEFORE_BUTTON_SUBMIT: P,
                            BEFORE_SUBMIT_QUERY: B,
                            BEFORE_SB_FOCUS: V,
                            AFTER_SB_FOCUS: R,
                            BEFORE_SB_BLUR: H,
                            AFTER_SB_BLUR: D,
                            BEFORE_BEACON: F,
                            AFTER_SET_YLC: Y,
                            AFTER_RESET_CONTROLLER: U,
                            AFTER_ITEM_HIGHLIGHT: q,
                            AFTER_ITEM_RESET_HIGHLIGHT: j
                        },
                        init: function (e) {
                            var t = g.ieVer;
                            if (t && t < 8) return !1;
                            var n = new u(this.initConfig ? this.initConfig() : {});
                            if (n.init(e), !n.ready) return !1;
                            n.config.customEvent && 8 === t && (y.documentElement.assistSelection = null), n.idx = l.length, l.push(n), !this.latency && m.performance && "function" == typeof m.performance.now && (this.latency = m.performance.now())
                        }
                    }), c.controlClass = (d = "ylcAssist", f = "ylcKey", p = "ylcBtn", W.prototype = {
                        init: function (e) {
                            function t(e) {
                                h.pqstr = "", h.pqstrl = 0, h.pos = 0;
                                var t = a.sbForm.fr2,
                                    n = a.sbInput.value,
                                    s = r.data;
                                switch (h.query = encodeURIComponent(n), h.qstrl = n.length, h.t_stmp = g.ts(), h.gprid = s.l && s.l.gprid ? s.l.gprid : "", h.n_sugg = s.r ? s.r.length : 0, t && (h.fr2 = t.value), o.assistItem && (h.pos = o.assistItem.idx + 1), e) {
                                    case d:
                                        var c = o.lastInput;
                                        g.merge(h, i[d]), h.pqstr = c, h.pqstrl = c.length;
                                        break;
                                    case f:
                                        g.merge(h, i[f]);
                                        break;
                                    default:
                                        g.merge(h, i[p])
                                }
                                x(Y), E.lastActn = h.t4
                            }

                            function n(e) {
                                var t = a.sbInput.value;
                                a.mustHaveInput && (t = a.mustHaveInput.value), !t || "" === t || void 0 !== t.trim && "" === t.trim() || (x(B), e ? g.fireEvent(s, e, {
                                    data: o.assistItem
                                }) : c.submit(), setTimeout((function () {
                                    T()
                                }), 400))
                            }
                            var r, o, i, a, s, c, l, u, h, b, v, _, w, E = this,
                                C = g.ieVer,
                                x = function (t, n) {
                                    e.notify(t, n)
                                },
                                T = function () {
                                    s.blur(), o.reset(), x(U)
                                };
                            return E.model = r = e.model, E.view = o = e.view, E.config = i = e.config, E.customEvent = u = i.customEvent || {}, E.lastActn = "", E.ylc = h = {}, g.merge(h, i.ylc), a = o.elems, s = a.sbInput, c = a.sbForm, l = a.sbSubmit, b = i.autofocus, (!C || 9 <= C) && g.ae(s, "input", (function () {
                                o.show()
                            })), C && g.ae(m, "load", (function () {
                                b = !1
                            })), g.ae(s, "focus", (function () {
                                b || (x(V), i.sbScrollTop && (y.body.scrollTop = 0), o.triggered || o.show(), x(R))
                            })), g.ae(s, "blur", (function (e) {
                                e.relatedTarget && c.contains && c.contains(e.relatedTarget) || (x(H), x(D))
                            })), g.ae(s, "click", (function () {
                                o.triggered || o.show()
                            })), g.ae(s, "keydown", (function (e) {
                                switch (E.lastActn = "key_" + e.keyCode, e.keyCode) {
                                    case 13:
                                        e.preventDefault(), x(N), t(f), n(u.customKeyBoard);
                                        break;
                                    case 27:
                                        s.blur(), o.hide(), g.stopPropagation(e)
                                }
                            })), l ? g.ae(l, "click", (function (e) {
                                e.preventDefault(), x(P), t(p), n(u.customBtn)
                            })) : g.ae(c, "submit", (function () {
                                x(e, P), t(p), x(B), setTimeout((function () {
                                    T()
                                }), 400)
                            })), "ontouchstart" in m && (w = function (e, t) {
                                return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
                            }, g.ae(y, "touchstart", (function (e) {
                                o.shown && (v = w(e, "X"), _ = w(e, "Y"))
                            })), g.ae(y, "touchend", (function (e) {
                                o.shown && (5 <= Math.abs(w(e, "X") - v) || 5 <= Math.abs(w(e, "Y") - _)) && e.preventDefault()
                            }))), g.ae(y, "click", (function (e) {
                                if (o.shown) {
                                    for (var r = e.target ? e.target : e.srcElement, l = !1; r;) {
                                        if (r === c || r === a.saTray) return;
                                        var f = g.get(r, "pos"),
                                            p = f ? o.items[f] : {};
                                        if (x(O, [function () {
                                                l = !0
                                            }, r, p]), l) return;
                                        if (r === p.li) return s.value = p.data.k, o.assistItem = p, x(A), t(d), void n(u.customSelection);
                                        if ((r = r.parentNode) === y) break
                                    }
                                    i.hideOnOutsideClick && o.hide()
                                }
                            })), x(L), !0
                        },
                        beacon: function (e, t, n) {
                            var r, o, i, a, s, c;
                            n && (o = (r = this).customEvent, i = r.config, r.model.app.notify(F, [n]), a = "sa_rt" in n ? {
                                rt: n.sa_rt,
                                q: n.cqry,
                                la: r.lastActn,
                                n: n.nitems,
                                s: n._S
                            } : {}, r.lastActn = n.t4, o[e] ? g.fireEvent(t, o[e], n) : h.ULT ? (c = (s = h.ULT).BEACON, i.saBeacon && (s.BEACON = location.protocol + "//" + g.buildUrl(i.saBeacon, a)), s.beacon_click(n), s.BEACON = c) : h.SaBeacon && h.SaBeacon(n))
                        }
                    }, W), c.modelClass = (G.prototype = {
                        init: function (e) {
                            var t = this;
                            return t.app = e, t.view = e.view, t.config = e.config, t.cbIdx = 0, t.data = {}, !0
                        },
                        fetch: function () {
                            var e = this,
                                t = e.app,
                                n = "sacb" + e.cbIdx++,
                                r = e.view,
                                o = {
                                    pq: r.origQuery,
                                    command: r.elems.sbInput.value,
                                    t_stmp: g.ts(),
                                    callback: "YAHOO.SA.apps[" + t.idx + "].cb." + n
                                },
                                i = e.config.saBE,
                                a = t.cb;
                            for (var s in g.merge(o, i.params), a) a.hasOwnProperty(s) && (a[s] = function () {});
                            a[n] = function (t) {
                                e.read(t || {}), a[n] = function () {}
                            }, t.notify(v, [o]), e.getAssist(i, o)
                        },
                        getAssist: function (e, t) {
                            this.app.jsonp(e.host + g.buildUrl(e.base, t))
                        },
                        read: function (e) {
                            this.data = e, this.app.notify(_, [e]), this.view.dropdown(e)
                        }
                    }, G), c.viewClass = (J.prototype = {
                        init: function (e) {
                            var t, n, r, o, i, a = this;
                            a.app = e, a.model = e.model, a.config = t = e.config, a.elems = n = {}, a.items = [], a.assistItem = null, e.notify(w);
                            var s = t.elems;
                            for (var c in s) n[c] || (n[c] = y.getElementById(s[c]));
                            return r = n.sbInput, i = n.saTray, !!((o = n.sbForm) && r && i) && (a.origQuery = a.lastInput = r.value, g.set(r, "role", "combobox"), g.set(r, "aria-autocomplete", "both"), a.origAction = o.action, t.autofocus && g.setFocus(r), e.notify(E), g.ae(m, "load", (function () {
                                n.saAria = y.body.appendChild(e.createElem(t.saAria, "div"))
                            })), !0)
                        },
                        dropdown: function (e) {
                            var t = this,
                                n = t.config,
                                r = t.app,
                                o = e && e.r ? e.r.length : 0,
                                i = t.elems,
                                a = i.saAria,
                                s = i.saTray,
                                c = t.app.createElem,
                                l = n.noQueryClass,
                                u = n.typingClass,
                                d = c(n.sa, "div"),
                                f = c(n.saList, "ul");
                            if (g.hasClass(y.body, u) || (y.body.className += " " + u), "" == e.q ? g.hasClass(s, l) || (s.className += " " + l) : g.removeClass(s, l), t.shown = !0, t.clearAssist(), o) {
                                d.appendChild(f), r.notify(C, [e]);
                                for (var p = 0; p < o; p++) {
                                    var m = e.r[p],
                                        h = {
                                            idx: p,
                                            fd: {}
                                        };
                                    m.q = e.q, g.merge(h, m), h.origData = m, r.notify(x, [h]);
                                    var b = this.createItem(h);
                                    t.items.push(b), f.appendChild(b.li)
                                }
                                r.notify(T, [f]), s.appendChild(d)
                            }
                            a && (g.set(a, "aria-expanded", "true"), a.innerHTML = "<p>" + o + " " + t.config.saAria.shownText + "</p>")
                        },
                        show: function () {
                            var e = this,
                                t = e.config,
                                n = e.elems.sbInput.value,
                                r = n.length;
                            e.app.notify(S), e.shown && e.sameQuery() || (e.lastInput = n, r < t.minInput || r > t.maxInput ? e.hide() : (e.model.fetch(), e.triggered = !0))
                        },
                        hide: function () {
                            var e = this,
                                t = e.elems.saAria;
                            g.removeClass(y.body, e.config.typingClass), e.clearAssist(), e.shown = !1, e.triggered = !1, t && (g.set(t, "aria-expanded", "false"), t.innerHTML = "<p>" + e.config.saAria.closedText + "</p>"), e.app.notify(M)
                        },
                        clearAssist: function () {
                            this.elems.saTray.innerHTML = "", this.items.splice(0, this.items.length), this.assistItem = null
                        },
                        createItem: function (e) {
                            var t = {
                                    idx: e.idx,
                                    data: e.origData
                                },
                                n = g.htmlEncode,
                                r = this.config,
                                o = this.app.createElem,
                                i = o(r.saItem, "li");
                            g.set(i, "pos", e.idx);
                            var a = o(r.saTitle, "span");
                            return a.innerHTML = e.t ? e.t : r.boldTag && e.k && e.q ? g.bold(r.boldTag, n(e.k), n(e.q), r.highlight || {}) : n(e.k), i.appendChild(a), t.li = i, t.title = a, this.app.notify(k, [t, e]), t
                        },
                        resetQuery: function () {
                            this.elems.sbInput.value = this.origQuery
                        },
                        reset: function () {
                            var e = this,
                                t = e.config,
                                n = e.elems.sbForm;
                            t.resetQuery && e.resetQuery(), e.hide(), n.action = e.origAction, e.app.notify(I)
                        },
                        sameQuery: function () {
                            return this.elems.sbInput.value == this.lastInput
                        }
                    }, J), c.initConfig = function () {
                        return {
                            elems: {
                                sbForm: "sb-form",
                                sbInput: "sb-input",
                                sbSubmit: "sb-search",
                                sbClear: "sb-clr",
                                sbCancel: "sb-cancel",
                                saTray: "sa-tray"
                            },
                            customEvent: {},
                            sa: {
                                css: "sa",
                                attrs: {
                                    type: "normal"
                                }
                            },
                            saList: {
                                css: "sa-list",
                                attrs: {
                                    role: "listbox"
                                },
                                style: {
                                    cursor: "pointer"
                                }
                            },
                            saItem: {
                                css: "sa-item",
                                attrs: {
                                    role: "option"
                                }
                            },
                            saTitle: {
                                css: "sa-item-title"
                            },
                            saAria: {
                                shownText: "new suggestions shown",
                                closedText: "Suggestion box closed",
                                css: "sa-aria-live-region",
                                attrs: {
                                    "aria-live": "polite"
                                },
                                style: {
                                    position: "absolute",
                                    left: "-9999px"
                                }
                            },
                            saBE: {
                                host: "",
                                base: "/sugg/gossip/gossip-us-ura/",
                                params: {
                                    l: 1,
                                    bm: 3,
                                    output: "sd1",
                                    nresults: 10
                                }
                            },
                            shBE: {
                                host: "",
                                base: "/history"
                            },
                            minInput: 0,
                            maxInput: 255,
                            boldTag: "<b>{s}</b>",
                            ylc: {
                                _r: 2
                            },
                            ylcAssist: {
                                use_case: ""
                            },
                            hideOnOutsideClick: !0,
                            noQueryClass: "sa-noQuery",
                            typingClass: "typing"
                        }
                    }, b.saFr = (Z.prototype = {
                        init: function (e) {
                            (this.app = e).on(E, K, this), e.on(A, $, this), e.on(I, X, this)
                        }
                    }, Z), b.ipos = (ne.prototype = {
                        init: function (e) {
                            (this.app = e).on(S, ee, this), e.on(v, te, this)
                        }
                    }, ne), b.saTray = (oe.prototype = {
                        init: function (e) {
                            (this.app = e).on(w, re, this)
                        }
                    }, oe), b.saPCActn = (le.prototype = {
                        init: function (e) {
                            var t = this;
                            t.app = e, t.selectedIndex = -1, e.on(_, ie, t), e.on(L, ae, t), e.on(R, se, t), e.on(D, ce, t)
                        }
                    }, le)
                }();
            var P = {
                    "sa-sbx-container": "_yb_d9o34",
                    sa: "_yb_17gte",
                    "sub-assist": "_yb_186qm",
                    "no-wrap": "_yb_8jsbj",
                    "sa-tray": "_yb_1xnuf",
                    "sa-tray-list-container": "_yb_1oxo4",
                    "yui3-highlight": "_yb_1w17h",
                    lowlight: "_yb_1jli8",
                    "list-item-hover": "_yb_1rh6c",
                    "related-title": "_yb_1dsns",
                    "trending-title": "_yb_1kcli",
                    "sa-fd-actn-cont": "_yb_117bx",
                    "suggestion-title": "_yb_n693z",
                    "bot-search-item": "_yb_drfqe",
                    "bot-search-item-col": "_yb_1dg4c",
                    "bot-search-icon-container": "_yb_kjdn0",
                    "bot-search-span": "_yb_13aki",
                    "bot-search-icon": "_yb_90vre"
                },
                B = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.saConfV1 = void 0, t.saConfV1 = {
                        boldTag: '<b class="' + P["yui3-highlight"] + '">{s}</b>',
                        customEvent: {
                            customBtn: "searchBtnClicked",
                            customKeyBoard: "enterKeyPressed",
                            customSelection: "assistSelectionClicked"
                        },
                        elems: {
                            sbForm: "ybar-sf",
                            sbInput: "ybar-sbq",
                            sbSubmit: "ybar-search",
                            sbClear: "ybar-sbq-x"
                        },
                        hightlight: {
                            exact: !0,
                            pattern: "^"
                        },
                        minInput: 1,
                        sa: {
                            css: P["sa-tray"]
                        },
                        saBE: {
                            base: "",
                            host: "",
                            params: {
                                appid: "yfp-t"
                            }
                        },
                        saItem: {
                            css: ""
                        },
                        saList: {
                            css: P["sa-tray-list-container"]
                        },
                        saTitle: {
                            css: "",
                            style: {
                                display: "block"
                            }
                        },
                        plugins: {
                            saFr: {
                                fr: "yfp-t"
                            },
                            saTray: {
                                afterNode: "ybar-sbq",
                                ctn: {
                                    css: P["sa-sbx-container"]
                                },
                                tray: {
                                    css: P.sa + " " + P.lowlight
                                }
                            },
                            saPCActn: {
                                css: P["list-item-hover"]
                            }
                        }
                    }
                })),
                q = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.searchboxGlobalKeydown = t.suggestionTitle = t.getI13nObject = t.getObjectFromYlkData = t.setTypeByQueryString = t.setTsrc = t.setFr2 = t.setFr = void 0;
                    var n = function (e) {
                            var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.search);
                            return t ? t[1] : null
                        },
                        r = function (e, t, n) {
                            var r = e.querySelectorAll(t);
                            if (r)
                                for (var o = 0; o < r.length; ++o) r[o].value = n
                        };
                    t.setFr = function (e, t, o) {
                        void 0 === t && (t = !1), void 0 === o && (o = !1);
                        var i = function (e, t) {
                            void 0 === e && (e = !1), void 0 === t && (t = !1);
                            var r = document.querySelector('input[name="fr"]'),
                                o = r ? r.value : "yfp-t",
                                i = n("fr") || o,
                                a = document.getElementById("ybar"),
                                s = a && a.className && a.className.match(/ybar-variant-([a-z]+)/),
                                c = s ? s[1] : "";
                            return -1 === ["att", "frontier", "rogers"].indexOf(c) && (e && (i += "-m"), t && (i += "-s")), i
                        }(t, o);
                        i && r(e, 'input[name="fr"]', i)
                    };
                    t.setFr2 = function (e, t, n) {
                        void 0 === n && (n = !1);
                        var o = function (e, t, n) {
                            void 0 === n && (n = !1);
                            var r = null,
                                o = "smartphone" === t && !!document.querySelector(".Reader-open") || "smartphone" !== t && !!document.querySelector(".modal-open"),
                                i = e.querySelector('input[name="fr2"]');
                            if (i) {
                                r = i.value;
                                var a = i.dataset && i.dataset.savalue,
                                    s = i.dataset && i.dataset.modalsb,
                                    c = i.dataset && i.dataset.modalsa;
                                n ? r = o && c ? c : a : o && s && (r = s)
                            }
                            return r
                        }(e, t, n);
                        o && r(e, 'input[name="fr2"]', o)
                    };
                    t.setTsrc = function (e, t) {
                        void 0 === t && (t = !1);
                        var n = function (e, t) {
                            void 0 === t && (t = !1);
                            var n = null,
                                r = e.querySelector('input[name=".tsrc"]');
                            if (r) {
                                n = r.value;
                                var o = r.dataset && r.dataset.savalue;
                                t && o && (n = o)
                            }
                            return n
                        }(e, t);
                        n && r(e, 'input[name=".tsrc"]', n)
                    };
                    t.getObjectFromYlkData = function (e) {
                        var t = "";
                        return e.split(";").forEach((function (e) {
                            if ("" !== e) {
                                "" !== t && (t += ",");
                                var n = e.split(":");
                                t += '"' + n[0] + '":"' + n[1] + '"'
                            }
                        })), JSON.parse("{" + t + "}")
                    };
                    t.getI13nObject = function (e, t, n) {
                        return void 0 === t && (t = "0"), void 0 === n && (n = "1"), {
                            sec: "ybar",
                            slk: "websrch",
                            pValue: n,
                            clickParams: {
                                elm: "search",
                                elmt: e,
                                subsec: "searchbox",
                                itc: t,
                                tar: "search.yahoo.com"
                            }
                        }
                    };
                    t.suggestionTitle = function (e, t) {
                        if (t) {
                            var n = document.createElement("div");
                            n.className = e["suggestion-title"];
                            var r = document.createElement("span"),
                                o = document.createElement("span");
                            return o.textContent = t, r.appendChild(o), n.appendChild(r), n
                        }
                    };
                    t.setTypeByQueryString = function (e) {
                        var t = n("type");
                        if (t)
                            if (e.querySelectorAll('input[name="type"]').length) r(e, 'input[name="type"]', t);
                            else {
                                var o = document.createElement("input");
                                o.setAttribute("type", "hidden"), o.setAttribute("name", "type"), o.setAttribute("value", t), e.appendChild(o)
                            }
                    };
                    t.searchboxGlobalKeydown = function (e, t) {
                        if (e = e || window.event, "" === t.value.trim()) {
                            var n = "scrollBehavior" in document.documentElement.style; - 1 !== [32].indexOf(e.keyCode) && (n ? window.scrollBy({
                                top: Math.floor(.95 * window.innerHeight),
                                left: 0,
                                behavior: "smooth"
                            }) : window.scrollBy(0, Math.floor(.95 * window.innerHeight)), e.preventDefault()), -1 !== [38, 40].indexOf(e.keyCode) && (n ? window.scrollBy({
                                top: Math.floor(40 * (38 === e.keyCode ? -1 : 1)),
                                left: 0,
                                behavior: "smooth"
                            }) : window.scrollBy(0, Math.floor(40 * (38 === e.keyCode ? -1 : 1))), e.preventDefault())
                        }
                    }
                })),
                j = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.ApplyOverrides = void 0;
                    t.ApplyOverrides = function (e, t) {
                        var n = e.querySelector("#ybar-sbq"),
                            r = 1;
                        window.addEventListener("keydown", (function (e) {
                            n && document.activeElement === n && q.searchboxGlobalKeydown(e, n)
                        }), !0);
                        var o = function (t) {
                                var r, o = !!document.querySelector(".modal-open"),
                                    i = 1,
                                    a = !1;
                                n && "" !== n.value.trim() && ("enterKeyPressed" === t.type ? t.detail && t.detail.data && t.detail.data.idx >= 0 ? (r = "srch-asst", a = !0, i = t.detail.data.idx + 1) : r = "kybrd" : r = "icon", q.setFr(e, o, a), c(q.getI13nObject(r, "0", i.toString())))
                            },
                            i = function (t) {
                                var n = !!document.querySelector(".modal-open"),
                                    r = (t.detail && t.detail.data && t.detail.data.idx || 0) + 1;
                                q.setFr(e, n, !0), c(q.getI13nObject("srch-asst", "0", r.toString()))
                            },
                            a = function (e) {
                                if ("function" == typeof t.beaconClick && 9 !== e.keyCode && 13 !== e.keyCode && 1 === r) {
                                    t.saveCurrentTimerValue("search_input_keyboard_input");
                                    var n = q.getI13nObject("keystroke", "1");
                                    r++, t.beaconClick(n.sec, n.slk, n.pValue, n.clickParams)
                                }
                            },
                            s = function () {
                                t.saveCurrentTimerValue("search_input_focus_click")
                            },
                            c = function (n) {
                                if ("function" == typeof t.beaconClick) {
                                    t.saveCurrentTimerValue("search_query_submit");
                                    var r = {
                                        pp: {
                                            A_utm: t.getPerformanceI13nObject()
                                        }
                                    };
                                    t.beaconClick(n.sec, n.slk, n.pValue, n.clickParams, void 0, (function () {
                                        setTimeout((function () {
                                            e && e.submit()
                                        }), 300)
                                    }), r)
                                } else e && e.submit()
                            };
                        n && (n && (n.addEventListener("enterKeyPressed", o), n.addEventListener("assistSelectionClicked", i), n.addEventListener("searchBtnClicked", o), n.addEventListener("keydown", a), n.addEventListener("click", s)), q.setTypeByQueryString(e), t.saveCurrentTimerValue("search_assist_ready"))
                    }
                })),
                V = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.saInitV1 = void 0;
                    t.saInitV1 = function (e, t, n) {
                        if (window.YAHOO && window.YAHOO.SA) n.saBE.host = t.searchBox.getAttribute("data-sabase"), window.YAHOO.SA.init(n), j.ApplyOverrides(t.searchBox, {
                            beaconClick: m.beaconClick,
                            saveCurrentTimerValue: m.saveCurrentTimerValue,
                            getPerformanceI13nObject: m.getPerformanceI13nObject
                        });
                        else {
                            var r = "Search lib not found. SearchAssist failed to initialise";
                            e.logError(r, new Error(r))
                        }
                    }
                })),
                R = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.saConfV0 = void 0, t.saConfV0 = {
                        boldTag: '<b class="' + P["yui3-highlight"] + '">{s}</b>',
                        clearButtonId: "ybar-sbq-x",
                        suppressEmptyQuery: !0,
                        anykey: !0,
                        autofocus: !0,
                        fr2: "sa-gp-ybar",
                        searchBoxId: "ybar-sbq",
                        cssClass: {
                            container: P["sa-sbx-container"],
                            trayContainer: P.sa + " " + P.lowlight,
                            tray: P["sa-tray"],
                            traySub: P["sa-tray"] + " " + P["sub-assist"] + " " + P["no-wrap"],
                            ul: P["sa-tray-list-container"],
                            liHighlight: P["list-item-hover"],
                            li: "",
                            span: "",
                            text: "",
                            aria: "",
                            actionContainer: P["sa-fd-actn-cont"],
                            relatedSearches: P["related-title"],
                            trendingNow: P["trending-title"]
                        }
                    }
                })),
                H = n((function (e) {
                    var t = function (e, t) {
                        var n = function () {
                            if ("Microsoft Internet Explorer" === e.navigator.appName) {
                                var t = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e.navigator.userAgent);
                                return t && t[1] && parseFloat(t[1])
                            }
                            return !1
                        }();

                        function r(e, t) {
                            e.prototype = Object.create ? Object.create(t.prototype) : function (e) {
                                function t() {}
                                return t.prototype = e, new t
                            }(t.prototype), e.prototype.constructor = e
                        }

                        function o(e) {
                            return "function" == typeof e.trim ? e.trim() : e.replace(/^\s+|\s+$/gm, "")
                        }

                        function i(e) {
                            if (n && n < 9 && void 0 !== e.createTextRange) {
                                var t = e.createTextRange();
                                t.collapse(!1), t.select()
                            } else "number" == typeof e.selectionStart && (e.selectionStart = e.selectionEnd = e.value.length)
                        }

                        function a(e) {
                            "focus" in e && e.focus()
                        }

                        function s(e) {
                            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\\\$&")
                        }

                        function c() {
                            this.config = {}
                        }

                        function l() {
                            this.itemList = [], this.selectedItem = !1
                        }

                        function u(e) {
                            this.saView = e, this.currentStatus = !1, this.callBackIdx = 0, this.cbTable = {}, this.triggered = !1
                        }

                        function d(e, t) {
                            this.saModel = e, this.saView = t
                        }

                        function f() {
                            this.config = {
                                searchBoxId: "yschsp",
                                clearButtonId: "sbq-clear",
                                fr2: "sa-gp-search",
                                saBase: "//search.yahoo.com/sugg/gossip/gossip-us-ura/",
                                ylcParam: {
                                    _r: 2,
                                    gprid: "",
                                    n_rslt: 0,
                                    n_sugg: 0,
                                    pos: 0,
                                    pqstr: "",
                                    pqstrl: 0
                                },
                                gossipParam: {
                                    l: 1,
                                    bm: 3,
                                    output: "sd1",
                                    appid: "search.yahoo.com",
                                    nresults: 10
                                },
                                max: 255,
                                clrLog: {},
                                boldTag: "<b>{s}</b>",
                                annotation: {},
                                cssClass: {
                                    container: "sa-sbx-container",
                                    trayContainer: "sa lowlight",
                                    tray: "sa-tray",
                                    traySub: "sa-tray sub-assist no-wrap",
                                    ul: "sa-tray-list-container",
                                    liHighlight: "list-item-hover",
                                    li: "",
                                    span: "",
                                    text: "",
                                    aria: "sa-aria-live-region",
                                    actionContainer: "sa-fd-actn-cont",
                                    relatedSearches: "related-title",
                                    trendingNow: "trending-title"
                                },
                                text: {
                                    relatedSearches: "Related Searches",
                                    trendingNow: "Trending Now",
                                    ariaShown: "new suggestions shown",
                                    ariaClosed: "Suggestion box closed"
                                },
                                customEvent: !1,
                                suppressEmptyQuery: !1,
                                enableAnnotation: !1,
                                enableIpos: !0,
                                subAssist: !0,
                                subTrayDelta: 5,
                                trayPadding: 12,
                                debug: !1,
                                objectName: "SA",
                                anykey: !1,
                                clearBeaconing: !1,
                                enableYlc: !0,
                                autofocus: !1,
                                highlight: {
                                    pattern: "",
                                    exact: !1
                                },
                                minQueryLength: 0,
                                enableTabRender: !0
                            }
                        }
                        return e.YAHOO = e.YAHOO || {}, c.prototype = {
                            set: function (e, t, n) {
                                e.setAttribute(t, n)
                            },
                            get: function (e, t) {
                                return e.getAttribute(t)
                            },
                            merge: function e(t, n) {
                                for (var r in n) "object" == typeof n[r] && "object" == typeof t[r] ? e(t[r], n[r]) : t[r] = n[r]
                            },
                            extend: r,
                            buildUrl: function (e, t) {
                                var n = [];
                                for (var r in t) t.hasOwnProperty(r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
                                return n.length > 0 && (e = e + (-1 === e.indexOf("?") ? "?" : "&") + n.join("&")), e
                            },
                            stopPropagation: function (e) {
                                e.returnValue = !1, e.cancelBubble = !0, e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation()
                            },
                            setFocus: function (e) {
                                i(e), a(e)
                            },
                            cursorEnd: i,
                            select: function (e, t, r) {
                                if (n && n < 9 && void 0 !== e.createTextRange) {
                                    var o = e.createTextRange();
                                    o.moveStart("character", t), o.moveEnd("character", r), o.select()
                                } else e.selectionStart = t, e.selectionEnd = r, a(e)
                            },
                            htmlEncode: function (e) {
                                return e.replace(/[\u00A0-\u9999<>\&]/gim, (function (e) {
                                    return "&#" + e.charCodeAt(0) + ";"
                                }))
                            },
                            ae: function (e, t, n, r) {
                                if (r || (r = !1), e.addEventListener) e.addEventListener(t, n, r);
                                else {
                                    if (!e.attachEvent) return !1;
                                    e.attachEvent("on" + t, n)
                                }
                            },
                            de: function (e, t, n) {
                                if (e.removeEventListener) e.removeEventListener(t, n);
                                else {
                                    if (!e.detachEvent) return !1;
                                    e.detachEvent("on" + t, n)
                                }
                            },
                            ts: function () {
                                return Math.round((new Date).getTime() / 1e3)
                            },
                            bold: function (e, t, n, r) {
                                var o, i, a = (r.pattern ? r.pattern : "") + "(&[^;\\s]*)?(%needles)";
                                return (o = r.exact ? [s(n)] : n.split(/[\s|,]+/).filter((function (e) {
                                    return "" !== e
                                })).sort((function (e, t) {
                                    return t.length - e.length
                                })).map((function (e) {
                                    return s(e)
                                }))).length ? (a = a.replace("%needles", o.join("|")), t = t.replace(new RegExp(a, "gi"), (i = e, function (e, t, n) {
                                    return t && !/\s/.test(n) ? e : i.replace(/\{s\}/g, n)
                                }))) : t
                            },
                            debug: function (t) {
                                this.config.debug && e.console && e.console.log && e.console.log(t)
                            }
                        }, r(l, c), l.prototype.init = function (n, r) {
                            var o = this;
                            if (this.saModel = r, this.config = n, this.clearButton = this.clearButton || t.getElementById(this.config.clearButtonId), this.searchbox = this.searchbox || t.getElementById(this.config.searchBoxId), !this.searchbox) return !1;
                            this.config.gossipParam.pq = this.searchbox.value;
                            for (var i = this.searchbox; i && !this.formTag;) i.tagName && "form" === i.tagName.toLowerCase() && (this.formTag = i), i = i.parentNode;
                            return !!this.formTag && (this.container = t.createElement("div"), this.container.className = this.config.cssClass.container, this.trayContainer = t.createElement("div"), this.trayContainer.className = this.config.cssClass.trayContainer, this.container.appendChild(this.trayContainer), this.searchbox.parentNode.insertBefore(this.container, this.searchbox.nextSibling), this.searchbox.setAttribute("role", "combobox"), this.searchbox.setAttribute("aria-autocomplete", "both"), this.ae(e, "load", (function () {
                                o.aria = t.createElement("div"), o.aria.className = o.config.cssClass.aria, o.set(o.aria, "aria-live", "polite"), o.aria.style.position = "absolute", o.aria.style.left = "-9999px", t.body.appendChild(o.aria)
                            })), !0)
                        }, l.prototype.getWidth = function (e, n) {
                            var r, o = {
                                    p: e,
                                    t: this.config.boldTag.replace("{s}", this.htmlEncode(e)),
                                    idx: 0
                                },
                                i = t.createElement("div");
                            i.className = this.config.cssClass.container;
                            var a = t.createElement("div");
                            a.className = this.config.cssClass.trayContainer, i.appendChild(a);
                            var s = t.createElement("div");
                            s.className = this.config.cssClass.traySub, s.style.left = "-9999px", a.appendChild(s);
                            var c = t.createElement("ul");
                            c.className = this.config.cssClass.ul, s.appendChild(c);
                            var l = this.createItem(o);
                            n && ((r = t.createElement("span")).innerHTML = n, l.suggestionSpan.appendChild(r)), c.appendChild(l.li), this.searchbox.parentNode.insertBefore(i, this.searchbox.nextSibling);
                            var u = l.suggestionSpan.clientWidth + this.config.subTrayDelta;
                            return i.outerHTML = "", u
                        }, l.prototype.display = function (n) {
                            var r = n.data,
                                o = n.sqpos,
                                i = n.hiddenNeedle,
                                a = this,
                                s = {};
                            this.hide(), this.selectedItem = !1, this.tray = t.createElement("div"), this.set(this.tray, "type", "normal"), this.tray.className = this.config.cssClass.tray, o && this.config.subAssist && (this.tray.className = this.config.cssClass.traySub, this.tray.style.left = this.getWidth(i) + "px"), this.ul = t.createElement("ul"), this.ul.className = this.config.cssClass.ul, this.set(this.ul, "role", "listbox"), this.tray.appendChild(this.ul), this.itemList = [], this.config.ylcParam.n_sugg = a.saModel.ylc.n_sugg, r.forEach((function (n) {
                                var r;
                                if (n.idx = a.itemList.length, 4 === n.m && a.config.text.trendingNow && !s.trending) {
                                    var i = t.createElement("span");
                                    i.className = a.config.cssClass.trendingNow, i.innerHTML = a.config.text.trendingNow, a.ul.appendChild(i), s.trending = !0
                                }
                                var c = a.createItem(n);
                                !o && a.config.enableAnnotation && n.m && a.config.annotation[n.m] && n.fd && (r = a.getItemAnnotation(n, c.suggestionSpan)) && c.suggestionSpan.appendChild(r), a.ul.appendChild(c.li), a.itemList.push(c.li), a.ae(c.li, "mouseenter", (function (e) {
                                    a.resetHighlight(), c.li.className = a.config.cssClass.li + " " + a.config.cssClass.liHighlight, a.selectedItem = n.idx
                                })), a.ae(c.li, "mouseleave", (function (e) {
                                    c.li.className = a.config.cssClass.li
                                })), a.ae(c.li, "click", (function (r) {
                                    var o = a.searchbox.value,
                                        i = r.target || r.srcElement;
                                    a.saModel.ylc.pos = n.idx + 1, a.saModel.ylc.pqstr = o, a.saModel.ylc.pqstrl = o.length, a.saModel.ylc.use_case = "", a.formTag.fr2 && (a.formTag.fr2.value = a.config.fr2), a.searchbox.value = n.p, i.tagName && "a" === i.tagName.toLowerCase() && (a.searchbox.value = a.get(i, "data"), a.saModel.ylc.use_case = i.innerHTML), a.hide(), a.saModel.addYlc(a.saModel.clickTarget), a.config.customEvent ? (a.saModel.addYlk(i), function (n, r, o) {
                                        var i;
                                        "function" == typeof e.CustomEvent ? (i = new e.CustomEvent(r, {
                                            detail: o
                                        }), n.dispatchEvent(i)) : "function" == typeof t.createEvent ? ((i = t.createEvent("CustomEvent")).initCustomEvent(r, !1, !1, o), n.dispatchEvent(i)) : (t.attachEvent, document.documentElement[r] = o)
                                    }(a.searchbox, "assistSelection", {
                                        data: n
                                    })) : a.suggestionClick(r, n)
                                }))
                            })), this.aria && (this.set(this.aria, "aria-expanded", "true"), this.aria.innerHTML = "<p>" + a.itemList.length + " " + this.config.text.ariaShown + "</p>"), this.show()
                        }, l.prototype.suggestionClick = function (e, t) {
                            this.formTag.submit()
                        }, l.prototype.show = function () {
                            this.shown = !0, this.resetHighlight(), this.trayContainer.appendChild(this.tray)
                        }, l.prototype.hide = function () {
                            this.aria && (this.set(this.aria, "aria-expanded", "false"), this.aria.innerHTML = "<p>" + this.config.text.ariaClosed + "</p>"), this.shown = !1, this.resetHighlight(), this.trayContainer.innerHTML = ""
                        }, l.prototype.resetHighlight = function () {
                            !1 !== this.selectedItem && this.itemList.length && (this.itemList[this.selectedItem].className = this.config.cssClass.li)
                        }, l.prototype.resetHightlight = l.prototype.resetHighlight, l.prototype.tab = function () {
                            if (!this.shown || !this.itemList.length) return !1;
                            if (!1 !== this.selectedItem) this.searchbox.value = this.get(this.itemList[this.selectedItem], "data"), this.saModel.fetch();
                            else {
                                if (this.searchbox.value === this.get(this.itemList[0], "data")) return this.saModel.unset(), !1;
                                this.searchbox.value = this.get(this.itemList[0], "data"), this.saModel.fetch()
                            }
                            return !0
                        }, l.prototype.moveUpDown = function (e) {
                            return !(!this.shown || !this.itemList.length) && (this.resetHighlight(), e ? !1 === this.selectedItem || this.selectedItem <= 0 ? this.selectedItem = this.itemList.length - 1 : this.selectedItem-- : !1 === this.selectedItem || this.selectedItem >= this.itemList.length - 1 ? this.selectedItem = 0 : this.selectedItem++, this.itemList[this.selectedItem].className = this.config.cssClass.li + " " + this.config.cssClass.liHighlight, this.searchbox.value = this.get(this.itemList[this.selectedItem], "data"), !0)
                        }, l.prototype.createItem = function (e) {
                            var n = t.createElement("li"),
                                r = this;
                            if (n.className = this.config.cssClass.li, this.set(n, "pos", e.idx), this.set(n, "role", "option"), this.config.formatResult) {
                                var o = this.config.ylcVal;
                                o && (o = o.replace("cposV", e.idx), r.config.ylcParam && (o = o.replace("t9Val", r.config.ylcParam.n_sugg)), this.set(n, "data-ylk", o)), this.set(n, "data-position", e.idx)
                            }
                            r.set(n, "data", e.p);
                            var i = t.createElement("span");
                            i.className = r.config.cssClass.span, i.style.display = "block", n.appendChild(i);
                            var a = t.createElement("span");
                            return a.className = r.config.cssClass.text, a.innerHTML = e.t, i.appendChild(a), {
                                li: n,
                                suggestionSpan: i
                            }
                        }, l.prototype.getItemAnnotation = function (e) {
                            var n, r, o, i = this.config.annotation[e.m] || {},
                                a = this.config.cssClass,
                                s = e.fd,
                                c = "",
                                l = "",
                                u = this.searchbox.clientWidth - 2 * this.config.trayPadding;
                            if (i.subtitle && s.subtitle) {
                                if (l = i.subtitle.replace("{subtitle}", this.htmlEncode(s.subtitle)), !(this.getWidth(e.p, l) < u)) return n;
                                c += l
                            }
                            if (i.actions && s.actions && s.actions.length) {
                                for (l = "", o = 0; o < s.actions.length; o++)
                                    if (r = s.actions[o], l && i.actionsSeparator && (l += i.actionsSeparator), l += i.actions.replace("{text}", this.htmlEncode(r.text)).replace("{res}", this.htmlEncode(r.res)), this.getWidth(e.p, c + '<span class="' + a.actionContainer + '">' + l + "</span>") > u) {
                                        l = "";
                                        break
                                    } l && (c += '<span class="' + a.actionContainer + '">' + l + "</span>")
                            }
                            return c && ((n = t.createElement("span")).innerHTML = c), n
                        }, r(u, c), u.prototype.unset = function () {
                            this.triggered = !1, this.saView.hide()
                        }, u.prototype.jsonp = function (e, n) {
                            var r = {
                                command: this.saView.searchbox.value,
                                t_stmp: this.ts(),
                                callback: "YAHOO." + this.config.objectName + ".cb." + e
                            };
                            this.merge(r, this.config.gossipParam), n && this.merge(r, n);
                            var o = this.buildUrl(this.config.saBase, r),
                                i = t.getElementsByTagName("head")[0],
                                a = t.createElement("script");
                            this.set(a, "type", "text/javascript"), this.set(a, "src", o), i.appendChild(a), this.ae(a, "load", (function () {
                                i.removeChild(a)
                            }))
                        }, u.prototype.read = function (e) {
                            var t, n = this,
                                r = [],
                                o = e.sqpos,
                                i = e.q = e.q || "",
                                a = "";
                            e && "object" == typeof e.r && e.r.length > 0 ? (n.config.subAssist && o && (i = e.q.substr(o), a = e.q.substr(0, o), e.r.forEach((function (t) {
                                n.saView.getWidth(t.k) > n.saView.searchbox.clientWidth && (o = 0, i = e.q, a = "")
                            }))), e.r.forEach((function (e) {
                                t = n.config.subAssist && o ? e.k.substr(o) : e.k, r.push({
                                    p: e.k,
                                    t: n.bold(n.config.boldTag, n.htmlEncode(t), n.htmlEncode(i), n.config.highlight),
                                    fd: e.fd,
                                    m: e.m
                                })
                            })), this.ylc.n_sugg = e.r.length, this.ylc.pos = 0, this.saView.display({
                                data: r,
                                sqpos: o,
                                hiddenNeedle: a
                            })) : (this.ylc.n_sugg = 0, this.ylc.pos = 0, this.saView.hide()), e && e.l && (this.ylc.gprid = e.l.gprid)
                        }, u.prototype.fetch = function () {
                            var e, t = this.saView.searchbox,
                                n = this,
                                r = null,
                                i = n.lastValue === n.saView.searchbox.value;
                            if (n.config.suppressEmptyQuery && "" == o(t.value)) return n.unset(), !0;
                            if (n.saView.shown && i) return !0;
                            if (this.config.enableIpos && !i && void 0 !== n.lastValue && ((e = this.getCursorPosition()) === t.value.length && (e = null), null !== e && (r = {
                                    ipos: e
                                })), n.lastValue = n.saView.searchbox.value, this.config.minQueryLength && this.saView.searchbox.value.length < this.config.minQueryLength) return this.unset(), !1;
                            if (this.config.max && this.saView.searchbox.value.length > this.config.max) return this.unset(), !0;
                            this.triggered = !0, this.callBackIdx++;
                            var a = "sacb" + this.callBackIdx;
                            for (var s in n.cbTable) n.cbTable.hasOwnProperty(s) && (n.cbTable[s] = function () {});
                            this.cbTable[a] = function (e) {
                                n.read(e || {}), n.cbTable[a] = function () {}
                            }, this.jsonp(a, r)
                        }, u.prototype.getCursorPosition = function () {
                            var e, n = this.saView.searchbox,
                                r = null;
                            return "number" == typeof n.selectionStart ? r = n.selectionStart : t.selection && (n.focus(), (e = t.selection.createRange()).moveStart("character", -t.activeElement.value.length), r = e.text.length), r
                        }, u.prototype.addYlc = function (e) {
                            var t = encodeURIComponent(this.saView.searchbox.value);
                            this.ylc.query = t, this.ylc.qstrl = t.length, this.ylc.t_stmp = this.ts(), this.config.enableYlc && this.ULT ? this.saView.formTag.action = this.ULT.y64_token("ylc", e, this.ylc) : this.debug("YLC logging is disabled")
                        }, u.prototype.addYlk = function (e) {
                            var t = this,
                                n = [];
                            if (["gprid", "query", "pqstr"].forEach((function (e) {
                                    e in t.ylc && n.push(e + ":" + t.ylc[e])
                                })), t.config.ylcVal = t.config.ylcVal + ";" + n.join(";"), e) {
                                var r = t.get(e, "data-ylk") + ";" + n.join(";");
                                t.set(e, "data-ylk", r)
                            }
                        }, u.prototype.init = function (t) {
                            return this.config = t, this.ULT = e.YAHOO.ULT, this.ULT || (this.debug("ULT library is missing. Disabling ylc logging"), this.config.enableYlc = !1), this.ylc = {}, this.merge(this.ylc, this.config.ylcParam), this.clickTarget = this.config.clkLink ? this.config.clkLink : this.saView.formTag.action, this.submitTarget = this.saView.formTag.action, !0
                        }, r(d, c), d.prototype.init = function (r) {
                            var i = this;
                            i.lastValue = null, this.config = r, this.config.autofocus && this.setFocus(this.saView.searchbox), !n || n >= 9 ? this.ae(this.saView.searchbox, "input", (function (e) {
                                i.saModel.fetch()
                            })) : 8 === n && this.ae(this.saView.searchbox, "propertychange", (function (e) {
                                "value" === e.propertyName && !1 === i.saView.selectedItem && i.saModel.fetch()
                            })), i.config.anykey && this.ae(t, "keydown", (function (e) {
                                var n = t.activeElement;
                                if (!n.tagName || "input" !== n.tagName.toLowerCase() && "textarea" !== n.tagName.toLowerCase()) return 27 === e.keyCode && !i.saView.shown && i.saView.searchbox.value.length ? (i.select(i.saView.searchbox, 0, i.saView.searchbox.value.length), void i.stopPropagation(e)) : void(e.keyCode <= 40 || e.ctrlKey || e.metaKey || (i.saView.searchbox.value = o(i.saView.searchbox.value), "" !== i.saView.searchbox.value && (i.saView.searchbox.value += " "), i.saModel.triggered = !0, i.setFocus(i.saView.searchbox)))
                            })), this.ae(this.saView.searchbox, "keydown", (function (e) {
                                switch (e.keyCode) {
                                    case 13:
                                        !1 !== i.saView.selectedItem && (i.config.ylcParam.pqstr = i.saModel.lastValue), i.config.ylcParam.gprid = i.saModel.ylc.gprid, i.config.ylcParam.query = encodeURIComponent(i.saView.searchbox.value);
                                        break;
                                    case 40:
                                        i.saView.moveUpDown(!1), i.stopPropagation(e);
                                        break;
                                    case 38:
                                        i.saView.moveUpDown(!0), i.stopPropagation(e);
                                        break;
                                    case 27:
                                        if (!i.saView.shown) return;
                                        return i.cursorEnd(i.saView.searchbox), i.saView.searchbox.blur(), i.saModel.unset(), i.saView.resetHighlight(), i.saView.selectedItem = !1, i.stopPropagation(e), !1;
                                    case 9:
                                        if (i.saView.searchbox.selectionEnd == i.saView.searchbox.value.length && i.saView.searchbox.selectionStart == i.saView.searchbox.value.length) {
                                            if (!i.config.enableTabRender) return i.saModel.unset(), !1;
                                            if (i.saView.tab()) return i.stopPropagation(e), !1
                                        } else i.saView.searchbox.selectionEnd = i.saView.searchbox.selectionStart = i.saView.searchbox.value.length, i.stopPropagation(e);
                                        break;
                                    case 39:
                                        i.saView.searchbox.selectionEnd == i.saView.searchbox.value.length && i.saView.searchbox.selectionStart == i.saView.searchbox.value.length && i.saView.tab();
                                        break;
                                    default:
                                        i.saView.resetHighlight(), i.saView.selectedItem = !1
                                }
                            }));
                            var a = function (e) {
                                if (n && n <= 8 && t.selection) {
                                    var r, o, a = i.saView.searchbox,
                                        s = a.value.replace(/\r\n/g, "\n"),
                                        c = t.selection.createRange(),
                                        l = a.value.length,
                                        u = a.createTextRange();
                                    u.moveToBookmark(c.getBookmark());
                                    var d = a.createTextRange();
                                    d.collapse(!1), u.compareEndPoints("StartToEnd", d) > -1 ? r = o = l : (r = -u.moveStart("character", -l), r += s.slice(0, r).split("\n").length - 1, u.compareEndPoints("EndToEnd", d) > -1 ? o = l : (o = -u.moveEnd("character", -l), o += s.slice(0, o).split("\n").length - 1)), a.selectionStart = r, a.selectionEnd = o
                                }
                                i.lastValue !== i.saView.searchbox.value && !1 === i.saView.selectedItem && i.saModel.fetch()
                            };
                            this.ae(this.saView.searchbox, "focus", (function (e) {
                                !i.saModel.triggered && i.saModel.fetch(), n && 9 === n && !i.ie9_attached && (i.ae(t, "selectionchange", a), i.ie9_attached = !0)
                            })), this.ae(this.saView.searchbox, "blur", (function (e) {
                                n && 9 === n && i.ie9_attached && (i.de(t, "selectionchange", a), i.ie9_attached = !1)
                            })), this.ae(this.saView.searchbox, "click", (function (e) {
                                !i.saModel.triggered && i.saModel.fetch()
                            }));
                            var s = function (e) {
                                if (i.saView.shown) {
                                    for (var t = e.target ? e.target : e.srcElement; t;) {
                                        if (t === i.saView.formTag) return;
                                        t = t.parentNode
                                    }
                                    i.config.touchOriented && i.stopPropagation(e), i.saModel.unset()
                                }
                            };
                            return "ontouchstart" in e ? (this.config.touchOriented = !0, this.ae(t.body, "touchstart", s, !0)) : this.ae(t, "click", s), this.ae(this.saView.formTag, "submit", (function (e) {
                                i.saModel.addYlc(i.saModel.submitTarget)
                            })), this.saView.clearButton && this.ae(this.saView.clearButton, "click", (function (e) {
                                if (i.saView.searchbox.value = "", i.saModel.triggered = !1, i.setFocus(i.saView.searchbox), i.config.enableYlc && i.config.clearBeaconing && i.saModel.ULT) {
                                    var t = {
                                        _r: 2,
                                        actn: "clk",
                                        pos: 1,
                                        sec: "clearsearch",
                                        slk: "clear",
                                        t1: "hdr",
                                        t2: "searchbox",
                                        t3: "clear"
                                    };
                                    i.merge(t, i.config.clrLog), i.saModel.ULT.beacon_click(t)
                                }
                            })), !0
                        }, r(f, c), f.prototype.saModelClass = u, f.prototype.saViewClass = l, f.prototype.saControlClass = d, f.prototype.init = function (r) {
                            return !(n && n < 8) && ("object" == typeof r && this.merge(this.config, r), this.saView = new this.saViewClass, this.saModel = new this.saModelClass(this.saView), this.saControl = new this.saControlClass(this.saModel, this.saView), this.cb = this.saModel.cbTable, this.config.customEvent && 8 === n && (t.documentElement.assistSelection = null), this.ready = this.saView.init(this.config, this.saModel) && this.saModel.init(this.config) && this.saControl.init(this.config), !!this.ready && (e.YAHOO[this.config.objectName] = this, void(e.performance && "function" == typeof e.performance.now && (this.latency = e.performance.now()))))
                        }, f
                    };
                    e.exports = {
                        assistJS: t
                    }, "undefined" != typeof window && (window.YAHOO = window.YAHOO || {}, window.YAHOO.SAClass = t(window, document))
                })),
                D = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.ApplyOverrides = void 0;
                    var n = H.assistJS;
                    t.ApplyOverrides = function (e, t, r, o) {
                        var i = n(window, document),
                            a = i.prototype.saControlClass,
                            s = i.prototype.saViewClass,
                            c = function (e, t) {
                                a.call(this, e, t)
                            },
                            l = !!document.querySelector(".modal-open"),
                            u = null,
                            d = null;
                        "homepage" !== r && "my" !== r && "ngy" !== r || q.setFr(e.searchBox, l), "homepage" === r && q.setTypeByQueryString(e.searchBox), e.searchInput && e.searchInput.addEventListener("click", (function () {
                            t.saveCurrentTimerValue("search_input_focus_click")
                        })), i.prototype.extend(c, a);
                        var f = 1;
                        c.prototype.init = function (n) {
                            var i = this,
                                s = 1,
                                c = this.get(i.saView.formTag, "data-appid"),
                                p = this.get(i.saView.formTag, "data-pubid"),
                                m = this.get(i.saView.formTag, "data-textShown"),
                                y = this.get(i.saView.formTag, "data-textClosed"),
                                h = this.get(i.saView.formTag, "data-sabase"),
                                g = this.get(i.saView.formTag, "data-botSearch"),
                                b = this.get(i.saView.formTag, "data-textSuggestionTitle"),
                                v = this.get(i.saView.formTag, "data-textBotSearch");
                            a.prototype.init.call(this, n), p && (this.config.gossipParam.pubid = p), c && (this.config.gossipParam.appid = c), m && (this.config.text.ariaShown = m), y && (this.config.text.ariaClosed = y), h && (this.config.saBase = h), g && (this.config.botSearch = g, this.config.botSearchSlk = "sitesrch"), b && (this.config.text.suggestionTitle = b), v && (this.config.text.botSearch = v), window.addEventListener("keydown", (function (e) {
                                document.activeElement === i.saView.searchbox && q.searchboxGlobalKeydown(e, i.saView.searchbox)
                            }), !0);
                            var _ = "",
                                w = null;
                            return setTimeout((function () {
                                var t = e.searchBox.querySelector("input[type=submit]");
                                t && (_ = t.getAttribute("data-ylk")) && (w = q.getObjectFromYlkData(_), t.removeAttribute("data-ylk"))
                            }), 0), i.saView.formTag.onsubmit = function (n) {
                                if (i.owner.searching && 2 !== f || "" === i.saView.searchbox.value.trim()) n.preventDefault();
                                else if (1 === f) {
                                    i.owner.searching = !0, f = 2, t.saveCurrentTimerValue("search_query_submit"), u = w, d = {
                                        pp: {
                                            A_utm: t.getPerformanceI13nObject()
                                        }
                                    };
                                    var o = i.config.botSearchSlk;
                                    if (u) {
                                        var a = u.sec,
                                            s = u.slk;
                                        delete u.sec, delete u.slk, t.beaconClick(a, o || s, "1", u, void 0, (function () {
                                            setTimeout((function () {
                                                i.saView.formTag.submit()
                                            }), 300)
                                        }), d)
                                    }
                                    l = !!document.querySelector(".modal-open"), "homepage" !== r && "ngy" !== r && "my" !== r || !l || q.setFr(e.searchBox, l), n.preventDefault()
                                } else {
                                    var c = e.searchBox.querySelector("input[type=submit]");
                                    c && setTimeout((function () {
                                        c && (c.disabled = !0), setTimeout((function () {
                                            i.owner.searching = !1, c.disabled = !1
                                        }), 1e3)
                                    }), 0), i.owner.searching = !0, f = 1
                                }
                            }, this.ae(this.saView.searchbox, "keydown", (function (n) {
                                if (t.saveCurrentTimerValue("search_input_keyboard_input"), 13 === n.keyCode) {
                                    if (n.preventDefault(), i.owner.searching) return;
                                    if ("" !== i.saView.searchbox.value.trim()) {
                                        t.saveCurrentTimerValue("search_query_submit"), i.owner.searching = !0, setTimeout((function () {
                                            i.owner.searching = !1
                                        }), 1e3), l = !!document.querySelector(".modal-open");
                                        var a = i.saView.shown && !1 !== i.saView.selectedItem;
                                        if ("homepage" !== r && "my" !== r || !l && !a ? "smartphone" === o && (q.setFr2(e.searchBox, o, a), q.setTsrc(e.searchBox, a)) : (q.setFr(e.searchBox, l, a), q.setFr2(e.searchBox, o, a), q.setTsrc(e.searchBox, a)), "ngy" === r && (l || a) && q.setFr(e.searchBox, l, a), "function" == typeof t.beaconClick) {
                                            u = {
                                                elm: "search",
                                                elmt: "kybrd",
                                                subsec: "searchbox",
                                                itc: "0",
                                                tar: "search.yahoo.com"
                                            }, a && (u.elmt = "srch-asst"), d = {
                                                pp: {
                                                    A_utm: t.getPerformanceI13nObject()
                                                }
                                            };
                                            var c = i.config.botSearchSlk;
                                            t.beaconClick("ybar", c || "websrch", "1", u, void 0, (function () {
                                                setTimeout((function () {
                                                    f = 0, i.saView.formTag.submit()
                                                }), 300)
                                            }), d)
                                        } else i.saView.formTag.submit()
                                    }
                                } else 9 !== n.keyCode && 13 !== n.keyCode && 1 === s && (s++, u = {
                                    elm: "search",
                                    elmt: "keystroke",
                                    subsec: "searchbox",
                                    itc: "1",
                                    tar: "search.yahoo.com"
                                }, d = {
                                    pp: {
                                        A_utm: t.getPerformanceI13nObject()
                                    }
                                }, "function" == typeof t.beaconClick && t.beaconClick("ybar", "websrch", "1", u, void 0, void 0, d))
                            })), e.searchBoxBackButton && e.searchBoxBackButton.addEventListener("click", (function (e) {
                                e.stopPropagation(), i.saModel.unset(), i.saView.resetHighlight(), i.saView.selectedItem = !1, u = {
                                    elm: "btn",
                                    subsec: "searchbox",
                                    itc: "1"
                                }, t.beaconClick("ybar", "back-close-srch", "", u)
                            })), !0
                        }, i.prototype.saControlClass = c;
                        var p = function () {
                            s.call(this)
                        };
                        return i.prototype.extend(p, s), p.prototype.display = function (e) {
                            var n = this;
                            s.prototype.display.call(this, e);
                            var r = n.config.botSearch;
                            if (r) {
                                var o = document.querySelector('ul[role="listbox"]'),
                                    i = q.suggestionTitle(P, n.config.text.suggestionTitle),
                                    a = function (e, t) {
                                        var n = document.createElement("div");
                                        n.className = P["bot-search-item"];
                                        var r = document.createElement("div"),
                                            o = document.createElement("div");
                                        r.className = P["bot-search-item-col"], o.className = P["bot-search-item-col"];
                                        var i = document.createElement("div");
                                        i.className = P["bot-search-icon-container"];
                                        var a = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                                            s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                        a.setAttribute("width", "20"), a.setAttribute("height", "20"), a.setAttribute("viewBox", "0 0 24 24"), a.classList.add(P["bot-search-icon"]), s.setAttribute("d", "M3.7634,15.837 L6.1814,15.837 C6.5214,17.45 7.0614,18.891 7.7584,20.045 C6.0094,19.118 4.6024,17.637 3.7634,15.837 L3.7634,15.837 Z M2.9144,12.008 C2.9144,11.351 2.9844,10.711 3.1164,10.094 L5.8884,10.094 C5.8264,10.717 5.7864,11.354 5.7864,12.008 C5.7864,12.663 5.8264,13.299 5.8884,13.922 L3.1164,13.922 C2.9844,13.305 2.9144,12.665 2.9144,12.008 L2.9144,12.008 Z M7.7584,3.971 C7.0614,5.125 6.5214,6.566 6.1814,8.179 L3.7634,8.179 C4.6024,6.379 6.0094,4.898 7.7584,3.971 L7.7584,3.971 Z M11.0504,3.142 L11.0504,8.179 L8.1054,8.179 C8.6604,5.664 9.7414,3.771 11.0504,3.142 L11.0504,3.142 Z M12.9654,3.142 C14.2754,3.771 15.3564,5.664 15.9114,8.179 L12.9654,8.179 L12.9654,3.142 Z M20.2524,8.179 L17.8344,8.179 C17.4954,6.566 16.9544,5.126 16.2574,3.971 C18.0064,4.898 19.4144,6.379 20.2524,8.179 L20.2524,8.179 Z M11.0504,20.875 C9.7414,20.245 8.6594,18.352 8.1054,15.837 L10.1354,15.837 C10.2104,15.161 10.3914,14.519 10.6584,13.922 L7.7984,13.922 C7.7354,13.305 7.7004,12.665 7.7004,12.008 C7.7004,11.351 7.7354,10.711 7.7984,10.094 L11.0504,10.094 L11.0504,13.184 C11.5394,12.388 12.1904,11.702 12.9654,11.183 L12.9654,10.094 L20.8994,10.094 C21.0284,10.697 21.0964,11.323 21.0994,11.964 L21.0994,11.964 L21.0994,12.661 C21.0994,13.19 21.5284,13.618 22.0574,13.618 L22.0584,13.618 C22.5874,13.618 23.0164,13.19 23.0164,12.661 L23.0164,11.965 L23.0144,11.965 C22.9904,5.662 17.6704,0.608 11.2724,1.024 C5.8994,1.373 1.4994,5.676 1.0414,11.04 C0.5134,17.228 5.1074,22.463 11.0504,22.975 C11.1664,22.985 11.3274,22.993 11.4844,22.999 C11.8104,23.012 12.1194,22.85 12.2904,22.572 L12.2924,22.569 C12.5734,22.113 12.3964,21.514 11.9124,21.284 L11.0504,20.875 Z M15.9434,18.874 C14.6054,18.874 13.5214,17.79 13.5214,16.452 C13.5214,15.115 14.6054,14.03 15.9434,14.03 C17.2804,14.03 18.3654,15.115 18.3654,16.452 C18.3654,17.79 17.2804,18.874 15.9434,18.874 M21.6354,20.908 L19.4524,18.725 C19.8774,18.07 20.1264,17.291 20.1264,16.452 C20.1264,14.145 18.2584,12.274 15.9514,12.269 L15.9354,12.269 C13.6284,12.274 11.7604,14.145 11.7604,16.452 C11.7604,18.763 13.6324,20.635 15.9434,20.635 C16.7814,20.635 17.5614,20.386 18.2154,19.961 L20.3984,22.144 C20.7404,22.486 21.2934,22.486 21.6354,22.144 C21.9774,21.803 21.9774,21.249 21.6354,20.908"), a.appendChild(s), i.appendChild(a), r.appendChild(i);
                                        var c = document.createElement("span"),
                                            l = document.createElement("span");
                                        l.className = P["bot-search-span"];
                                        var u = document.createElement("span"),
                                            d = e.split("{query}");
                                        return c.textContent = d[0] || "", l.textContent = t, u.textContent = d[1] || "", o.appendChild(c), o.appendChild(l), o.appendChild(u), n.appendChild(r), n.appendChild(o), n
                                    }(n.config.text.botSearch, n.searchbox.value);
                                o && i && (o.prepend(i), o.appendChild(a)), n.ae(a, "click", (function () {
                                    n.hide(), n.formTag.action = r, t.saveCurrentTimerValue("search_query_submit"), n.owner.searching = !0, setTimeout((function () {
                                        n.owner.searching = !1
                                    }), 1e3), u = {
                                        elm: "search",
                                        elmt: "button",
                                        subsec: "searchbox",
                                        itc: "0",
                                        tar: "search.yahoo.com"
                                    }, d = {
                                        pp: {
                                            A_utm: t.getPerformanceI13nObject()
                                        }
                                    }, "function" == typeof t.beaconClick ? t.beaconClick("ybar", "websrch", "1", u, void 0, (function () {
                                        setTimeout((function () {
                                            f = 0, n.formTag.submit()
                                        }), 300)
                                    }), d) : n.formTag.submit()
                                }))
                            }
                        }, p.prototype.suggestionClick = function (n, i) {
                            var a = this;
                            if (!a.owner.searching) {
                                t.saveCurrentTimerValue("search_query_submit"), a.owner.searching = !0, setTimeout((function () {
                                    a.owner.searching = !1
                                }), 1e3), u = {
                                    cpos: i.idx,
                                    elm: "search",
                                    elmt: "srch-asst",
                                    subsec: "searchbox",
                                    itc: "0",
                                    tar: "search.yahoo.com"
                                }, d = {
                                    pp: {
                                        A_utm: t.getPerformanceI13nObject()
                                    }
                                };
                                var s = !0;
                                if (l = !!document.querySelector(".modal-open"), "homepage" === r || "my" === r ? (q.setFr(e.searchBox, l, s), q.setFr2(e.searchBox, o, s), q.setTsrc(e.searchBox, s)) : "smartphone" === o && (q.setFr2(e.searchBox, o, s), q.setTsrc(e.searchBox, s)), "ngy" === r && q.setFr(e.searchBox, l, s), "function" == typeof t.beaconClick) {
                                    var c = a.config.botSearchSlk;
                                    t.beaconClick("ybar", c || "websrch", "1", u, void 0, (function () {
                                        setTimeout((function () {
                                            f = 0, a.formTag.submit()
                                        }), 300)
                                    }), d)
                                } else a.formTag.submit()
                            }
                        }, p.prototype.show = function () {
                            s.prototype.show.call(this), e.searchBox && e.searchBox.classList && (e.searchBox.classList.add("sa"), e.searchInput && e.searchInput.setAttribute("aria-expanded", "true"))
                        }, p.prototype.hide = function () {
                            s.prototype.hide.call(this), e.searchBox && e.searchBox.classList && (e.searchBox.classList.remove("sa"), e.searchInput && e.searchInput.setAttribute("aria-expanded", "false"))
                        }, i.prototype.saViewClass = p, i
                    }
                })),
                F = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.saInitV0 = void 0;
                    var n = m;
                    t.saInitV0 = function (e, t, r, o, i) {
                        var a = JSON.parse(JSON.stringify(r));
                        "homepage" === o ? "tablet" === i ? a.fr2 = "p:fp,m:sb" : delete a.fr2 : "my" === o && (a.fr2 = "p:my,m:sb"), t.searchInput && (a.autofocus = t.searchInput.autofocus), "smartphone" === i && t.searchBox && t.searchBox.addEventListener("click", (function () {
                            t.ybar && t.ybar.classList.add("ybar-searchbox-assist-fullscreen"), document.documentElement.classList.contains("ybar-overlay") || document.documentElement.classList.toggle("ybar-overlay")
                        }));
                        var s = new(D.ApplyOverrides(t, m, o, i));
                        return s.init(a), s.searching = !1, s.saControl.owner = s, s.saView.owner = s, n.saveCurrentTimerValue("search_assist_ready"), s
                    }
                }));
            v.initModule("ybar-mod-assistjs", (function (e) {
                var t = document.getElementById("ybar-sf");
                if (t && "true" === t.getAttribute("data-saEnabled")) {
                    var n = t.getAttribute("data-saVersion"),
                        r = {
                            ybar: document.getElementById("ybar"),
                            searchBox: t,
                            searchInput: document.getElementById(R.saConfV0.searchBoxId),
                            searchBoxBackButton: document.getElementById("ybar-search-back-btn")
                        },
                        o = e.getConfig();
                    "0" === n ? F.saInitV0(e, r, R.saConfV0, o.property, o.device) : V.saInitV1(e, r, B.saConfV1)
                }
            }));
            var Y = m.beaconClick,
                U = m.refreshModule,
                z = function (e) {
                    (new Image).src = e
                },
                Q = function (e) {
                    Y("ybar", e && e.slk || "Ybar", "", e, null, (function () {}))
                },
                W = {
                    openMenuBeacon: function () {
                        var e = document.querySelectorAll("#ybarYmobileContainer ul a[data-beacon]");
                        if (e && e.length)
                            for (var t = 0; t < e.length; ++t) {
                                var n = e[t].getAttribute("data-beacon");
                                n && z(n)
                            }
                        Q({
                            slk: "icon",
                            elm: "btn",
                            elmt: "open",
                            sec: "ybar",
                            subsec: "ymobile",
                            itc: "2"
                        })
                    },
                    refreshModule: U
                },
                G = W.openMenuBeacon,
                J = W.refreshModule,
                K = function (e, t) {
                    e.isOpen || (t.classList.add("ybarMenuOpen"), e.isOpen = !0, G()), setTimeout((function () {
                        J()
                    }), 800)
                },
                $ = function (e, t) {
                    e.isOpen && (document.activeElement.blur(), t.classList.remove("ybarMenuOpen"), e.isOpen = !1)
                },
                X = function (e, t) {
                    if (t.container) {
                        var n = {
                            isOpen: !1
                        };
                        t.container.addEventListener("mouseenter", (function () {
                            e.triggerEvent("close-all-menus"), K(n, t.popover)
                        })), e.addEventListener("close-all-menus", (function () {
                            var e;
                            (e = t.container) && e.parentNode && e === e.parentNode.querySelector(e.nodeName + ":hover") || $(n, t.popover)
                        })), t.container.addEventListener("mouseleave", (function () {
                            $(n, t.popover)
                        })), t.container.addEventListener("focusin", (function (e) {
                            e && null !== e.relatedTarget && K(n, t.popover)
                        })), t.container.addEventListener("focusout", (function (e) {
                            e && null !== e.relatedTarget && $(n, t.popover)
                        })), t.container.addEventListener("click", (function (e) {
                            t.container.blur(), e.target && t.icon.contains(e.target) && (e.stopPropagation(), n.isOpen ? $(n, t.popover) : K(n, t.popover))
                        }))
                    } else e.logError("ybar-mod-ymobile", new Error("No container element found"))
                },
                Z = v.initModule,
                ee = X;
            Z("ybar-mod-ymobile", (function (e) {
                var t = {
                    container: document.getElementById("ymobile-container"),
                    popover: document.getElementById("ybarYmobileContainer"),
                    icon: document.getElementById("ybarYmobileIcon")
                };
                ee(e, t)
            }));
            var te, ne = {
                    "ybar-mod-account": "_yb_3of80",
                    "ybar-link-color": "_yb_mj38w",
                    "ybar-margin-bottom-8": "_yb_ujva7",
                    "ybar-margin-top-14": "_yb_1wyjd",
                    "ybar-margin-right-20": "_yb_b2sej",
                    "ybar-text-overflow": "_yb_1dl6z",
                    "ybar-item-border": "_yb_1tr2l",
                    "ybar-inline-block": "_yb_1az7w",
                    "ybar-block": "_yb_54y87",
                    "ybar-see-info": "_yb_1nfyu",
                    "ybar-login-btn": "_yb_wgvnl",
                    "property-generic": "_yb_w6376",
                    "property-homepage": "_yb_1ta3v",
                    "ybar-account": "_yb_1f5ny",
                    "ybar-account-img": "_yb_17vz4",
                    smartphone: "_yb_vkw1v",
                    "logged-in": "_yb_156ic",
                    "ybar-account-name": "_yb_1ytcw",
                    "ybar-account-container": "_yb_1rw3y _yb_hcki1",
                    "sign-in-menu": "_yb_ekbmf",
                    show: "_yb_vd2ut",
                    "property-mail": "_yb_1i8yc",
                    "ybar-user-accounts-list": "_yb_1j87w",
                    "ybar-account-menu": "_yb_tzluo _yb_12igk",
                    "ybar-account-menu-item-current": "_yb_116cw",
                    "signedout-text": "_yb_1e22w",
                    "ybar-avatar": "_yb_19gim",
                    "ybar-current-user-profile-img": "_yb_1uut4",
                    "ybar-current-user-profile-shape": "_yb_1riv3",
                    "ybar-user-profile-img": "_yb_s12xm",
                    "ybar-user-profile-shape": "_yb_uravx",
                    "ybar-gradient": "_yb_111tn",
                    "ybar-account-menu-item": "_yb_1xsa9",
                    "ybar-account-menu-item-signed-out": "_yb_1p3qq",
                    "ybar-account-img-signed-out": "_yb_o43xo",
                    "ybar-account-item-hover": "_yb_1ug0k",
                    "ybar-sign-out": "_yb_4kl69",
                    "ybar-account-info": "_yb_1yir9",
                    "ybar-account-info-spacing": "_yb_z85xr",
                    "ybar-account-user-name": "_yb_1l5ea",
                    "ybar-account-user-email": "_yb_bczog",
                    "ybar-account-info-link": "_yb_i2oqb",
                    "ybar-account-wrapper": "_yb_9d3fs",
                    "ybar-account-settings-item": "_yb_1aqik",
                    "ybar-account-settings-item-text": "_yb_b4exm",
                    "ybar-icon": "_yb_1px3l",
                    "ybar-menu-item-icon": "_yb_njh3v",
                    "ybar-icon-wrapper": "_yb_132n5",
                    "ybar-homepage-menu-item-icon": "_yb_194m9",
                    "ybar-icon-camera": "_yb_16b2p",
                    "ybar-icon-image-wrapper": "_yb_d9fek",
                    "ybar-btn-default-homepage": "_yb_1pehy",
                    "ybar-btn-update-phone-number": "_yb_3k4oh",
                    "locale-es-us": "_yb_1g9lh",
                    "variant-att": "_yb_1c2o7",
                    "locale-en-us": "_yb_17wnm",
                    "variant-aol": "_yb_1vljt",
                    "variant-engadget": "_yb_7fekc",
                    "variant-stylemepretty": "_yb_dx7oa",
                    "variant-polyvore": "_yb_1gsl1",
                    "variant-rivals": "_yb_13pjn",
                    "variant-tumblr": "_yb_nkv0l",
                    "variant-techcrunch": "_yb_1yb6x",
                    "variant-moviefone": "_yb_30je6",
                    "variant-builtbygirls": "_yb_r7h0k",
                    "variant-mapquest": "_yb_1qt6q",
                    "ybar-sign-out-text": "_yb_toetu",
                    "no-lazy-image": "_yb_cj44d",
                    "lazy-image": "_yb_1v3t6",
                    mobile: "_yb_1wyxt",
                    "ybar-login-link": "_yb_pqhb4",
                    "ybar-icon-arrow": "_yb_1vwe5",
                    "ybar-item-hidden": "_yb_1shwj",
                    "ybar-icon-arrow-down": "_yb_1v5ur",
                    "ybar-icon-arrow-up": "_yb_petwi",
                    "smartphone-inner-wrapper": "_yb_dgka8",
                    "smartphone-profile-panel-container": "_yb_1o4z4",
                    "gray-divider": "_yb_6hwrp",
                    "box-shadow": "_yb_gxcxu",
                    "current-account-first-row": "_yb_14vpt",
                    "oneyahoo-icon-wrapper": "_yb_l23zn",
                    "smartphone-user-profile-img": "_yb_1tz0m",
                    "small-icon": "_yb_1ig3i",
                    "smartphone-account-info": "_yb_1cish",
                    "smartphone-account-max-width": "_yb_12eu7",
                    "signed-out": "_yb_1xx0x",
                    "signed-in": "_yb_15bsm",
                    "ybar-account-user-signedout": "_yb_ywmq5",
                    "ybar-account-user-email-other": "_yb_43syi",
                    "smartphone-account-normal": "_yb_12cc4",
                    "smartphone-icon-wrapper": "_yb_19qlw",
                    "height-auto": "_yb_1rpl1",
                    "smartphone-logo": "_yb_1r7mj",
                    "gray-background": "_yb_u54vc",
                    "smartphone-align-right": "_yb_r5fnm",
                    "current-account-second-row": "_yb_6duif",
                    "user-account-list-item": "_yb_1yaoc",
                    "vertical-align-center": "_yb_1eu4w",
                    "other-accounts-wrapper": "_yb_ypjt3",
                    "smartphone-row": "_yb_18u58",
                    "ybar-border-bottom": "_yb_9z9um",
                    "ybar-margin-top-adjust": "_yb_hr0ki",
                    "ybar-padding-bottom-adjust": "_yb_1nzl6",
                    "signin-wrapper": "_yb_1nrjg",
                    "signin-message": "_yb_cuks6",
                    "signin-button": "_yb_113jc",
                    "smartphone-account-dark": "_yb_1g4c2",
                    "notif-dropdown-container": "_yb_137ct",
                    "notif-badge": "_yb_10tc5",
                    "prof-notif-badge": "_yb_1km2m",
                    "position-relative": "_yb_jyl4u",
                    "dropdown-header-wrapper": "_yb_1pdww",
                    "dropdown-header-title": "_yb_1qh6y",
                    "oneyahoo-active-user-icon": "_yb_1ff94",
                    "oneyahoo-profile-footer": "_yb_1ygg0",
                    homepage_show_saved_accounts: "_yb_1vv4a"
                },
                re = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.ybarFetch = t.postreq = t.getreq = void 0;
                    var n = function (e, t) {
                            if (200 !== e.status) {
                                var n = new Error("Request failed with status: " + e.status);
                                n._meta = {
                                    status: e.status
                                }, e.ymreqid && (n._meta = {
                                    ymreqid: e.ymreqid
                                }), t(n)
                            } else {
                                var r = null;
                                try {
                                    r = JSON.parse(e.responseText)
                                } catch (e) {
                                    var o = new Error("Error parsing responseText");
                                    return o._meta = {
                                        originalError: e
                                    }, void t(o)
                                }
                                t(null, r)
                            }
                        },
                        r = function (e, t) {
                            return void 0 === t && (t = {}), S.__awaiter(void 0, void 0, void 0, (function () {
                                return S.__generator(this, (function (n) {
                                    return [2, new Promise((function (n, r) {
                                        var o = new XMLHttpRequest;
                                        if (o.open("string" == typeof t.method ? t.method : "GET", "string" == typeof e ? e : e.url, !0), "object" == typeof t.headers) {
                                            var i = t.headers;
                                            for (var a in i) o.setRequestHeader(a, i[a])
                                        }
                                        o.withCredentials = "include" === t.credentials, o.onreadystatechange = function () {
                                            4 === o.readyState && n({
                                                status: o.status,
                                                text: function () {
                                                    return Promise.resolve(o.responseText)
                                                },
                                                json: function () {
                                                    return new Promise((function (e, t) {
                                                        try {
                                                            e(JSON.parse(o.responseText))
                                                        } catch (e) {
                                                            t(e)
                                                        }
                                                    }))
                                                }
                                            })
                                        }, o.send(t.body)
                                    }))]
                                }))
                            }))
                        },
                        o = function (e, t) {
                            return void 0 === t && (t = {}), t.headers = S.__assign(S.__assign({}, t.headers || {}), {
                                "X-Requested-With": "XMLHttpRequest"
                            }), ("function" == typeof window.fetch ? fetch : r)(e, t)
                        };
                    t.ybarFetch = o;
                    t.getreq = function (e, t) {
                        var r = e.url,
                            i = e.headers;
                        return o(r, {
                            headers: void 0 === i ? {} : i,
                            credentials: "include"
                        }).then((function (e) {
                            return e.text().then((function (r) {
                                n({
                                    status: e.status,
                                    responseText: r
                                }, t)
                            }))
                        }))
                    };
                    t.postreq = function (e, t) {
                        var r = e.url,
                            i = e.ymreqid,
                            a = e.body;
                        return o(r, {
                            method: "POST",
                            headers: S.__assign({
                                "Content-Type": "application/json"
                            }, "string" == typeof i ? {
                                "X-Oath-YmReqId": i
                            } : {}),
                            body: void 0 !== a ? JSON.stringify(a) : null,
                            credentials: "include"
                        }).then((function (e) {
                            return e.text().then((function (r) {
                                n({
                                    status: e.status,
                                    responseText: r,
                                    ymreqid: i
                                }, t)
                            }))
                        }))
                    }
                })),
                oe = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.getObjectValue = t.appendQorA = void 0;
                    t.getObjectValue = function (e, t, n) {
                        if (!e) return n;
                        if (!t) return e;
                        "string" == typeof t && (t = t.split("."));
                        for (var r = 0; e && r < t.length; ++r) e = e[t[r]];
                        return null == e ? n : e
                    };
                    t.appendQorA = function (e) {
                        return ~e.indexOf("?") ? e += "&" : e += "?", e
                    }
                })),
                ie = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.getTemplateContent = t.trustHTML = void 0;
                    var n, r, o, i = (n = "ybar", o = {
                        createHTML: function (e) {
                            return e
                        }
                    }, void 0 !== (r = window.trustedTypes) && void 0 !== r.createPolicy ? window.trustedTypes.createPolicy(n, o) : o);
                    t.trustHTML = function (e) {
                        return i.createHTML(e)
                    };
                    t.getTemplateContent = function (e) {
                        if ("content" in e) return e.content.cloneNode(!0);
                        for (var t = document.createDocumentFragment(), n = 0; n < e.children.length; ++n) t.appendChild(e.children[n].cloneNode(!0));
                        return t
                    }
                })),
                ae = re.getreq,
                se = a(ne).selectorStr,
                ce = document.querySelector.bind(document),
                le = document.querySelectorAll.bind(document),
                ue = oe.appendQorA,
                de = ie.getTemplateContent,
                fe = p.logError,
                pe = document.getElementById("ybarAccMenuItemTemplate"),
                me = document.getElementById("ybar"),
                ye = window && window.YAHOO && window.YAHOO.i13n && window.YAHOO.i13n.SPACEID || "",
                he = document.getElementById("generalSignin"),
                ge = document.getElementById("inSessionSignin"),
                be = ce(se("smartphone")),
                ve = ce(se("ybar-mod-account", "sign-in-menu"));
            me && "" === ye && (ye = me.getAttribute("data-spaceid"));
            var _e = function (e, t) {
                    var n = (t + 1).toString(),
                        r = pe.getAttribute("data-signedOutState"),
                        o = pe.getAttribute("data-done"),
                        i = de(pe),
                        a = i.children && i.children[0];
                    if (!a && i.childNodes)
                        for (var s = 0; s < i.childNodes.length; ++s)
                            if (1 === i.childNodes[s].nodeType) {
                                a = i.childNodes[s];
                                break
                            } if (a) {
                        var c = a.querySelector("a");
                        c && (c.setAttribute("href", c.getAttribute("href").replace("[[crumb]]", encodeURIComponent(te.value)).replace("[[login]]", encodeURIComponent(e.identifier)).replace("[[page]]", encodeURIComponent(window.location.href)).replace("[[done]]", encodeURIComponent(o))), c.setAttribute("data-ylk", c.getAttribute("data-ylk").replace("[[ylk_pos]]", n).replace("[[ylk_slk]]", 2 === e.state ? "saved-acct-signin" : "acct-switch")), c.setAttribute("aria-label", e.fullName + " " + e.identifier));
                        var l = a.querySelector("img");
                        l && l.setAttribute("src", e.imageUrl);
                        var u = c.querySelector("." + ne["ybar-user-profile-img"]);
                        2 === e.state && (c.classList.add(ne["ybar-account-menu-item-signed-out"]), u && u.classList.add(ne["ybar-account-img-signed-out"]));
                        var d = a.querySelector("." + ne["ybar-account-user-name"]);
                        d && (d.classList.add(2 === e.state ? ne["signed-out"] : ne["signed-in"]), d.innerText = e.fullName);
                        var f = a.querySelector("." + ne["ybar-account-user-email"] + ", ." + ne["ybar-account-user-email-other"]);
                        f && (f.classList.add(2 === e.state ? ne["signed-out"] : ne["signed-in"]), f.innerText = e.identifier);
                        var p = a.querySelector("." + ne["ybar-account-user-signedout"] + ", ." + ne["signedout-text"]);
                        return p && (r = null !== ce(se("homepage_show_saved_accounts")) ? r : "(" + r + ")", p.classList.add(2 === e.state ? ne["signed-out"] : ne["signed-in"]), p.innerText = 2 === e.state ? r : ""), a
                    }
                },
                we = function (e, t, n) {
                    return 0 === e.indexOf("javascript:") ? e : (n && (n = ~e.indexOf("&activity=ybar-") ? void 0 : n.replace("[[pspid]]", ye)), ~e.indexOf("done=") ? (e = e.replace(/\[\[page\]\]/g, encodeURIComponent(window.location.href)), n && (e += "&" + n), e) : (e = ue(e), e += ".done=" + encodeURIComponent(t), n && (e += "&" + n), e))
                },
                Ee = function () {
                    var e, t, n = ce(se("ybar-mod-account", "ybar-login-btn")),
                        r = le(se("ybar-mod-account", "ybar-account-container") + " a"),
                        o = window.location.href;
                    for (n && (n.href = we(n.href, o, n.getAttribute("data-redirect-params"))), pe ? (o = pe.getAttribute("data-done"), e = pe.getAttribute("data-sign-out-url")) : (e = ce(se("ybar-mod-account", "ybar-sign-out"))) && (e = e.getAttribute("data-sign-out-url")), t = 0; t < r.length; ++t) {
                        var i = r[t].getAttribute("data-redirect-params");
                        r[t].classList.contains(ne["ybar-sign-out"]) ? r[t].href = we(r[t].href, e, i) : r[t].href = we(r[t].href, o, i)
                    }
                    m.refreshModule()
                };
            Ee();
            var Ce = function (e, t) {
                    te = ce('input[name="crumb"]');
                    var n = !be && ce(".ybar-property-homepage") && !ce(se("homepage_show_saved_accounts"));
                    if (te && te.value && pe && !n) {
                        ae({
                            url: "https://jsapi.login.yahoo.com/w/device_users?.crumb=" + te.value
                        }, (function (n, r) {
                            if (n) return fe("Account Switcher request failed", n, n._meta), t && t(n), console.error(n);
                            if (r && r.users && r.users.length) {
                                ge && (ge.style.display = "block");
                                var o, i = function (e) {
                                    for (var t = e.length - 1; t >= 0; --t) {
                                        e[t] = (o = void 0, (o = {
                                            fn: (r = e[t]).fn || "",
                                            ln: r.ln || "",
                                            em: r.em || "",
                                            alias: r.alias || "",
                                            imageUrl: r.imageUrl,
                                            state: r.state,
                                            fullName: null,
                                            identifier: null
                                        }).fullName = function (e, t) {
                                            for (var n = e + t, r = 0; r < n.length; ++r) {
                                                var o = n.charCodeAt(r);
                                                if ((o < 19968 || o > 40959) && (o < 13312 || o > 19903)) return !1
                                            }
                                            return !0
                                        }(o.fn, o.ln) ? [o.ln, o.fn].join("") : [o.fn, o.ln].join(" "), o.identifier = o.em || o.alias, o);
                                        var n = e[t].state;
                                        0 !== n && "0" !== n || e.splice(t, 1)[0]
                                    }
                                    var r, o;
                                    return e
                                }(r.users);
                                o = window.YBAR && window.YBAR.getConfig().bucketConfig.homepage_show_saved_accounts_enabled ? 2 : 3;
                                for (var a = ce(se("ybar-user-accounts-list")), s = 0; s < i.length && s < o; ++s) a.appendChild(_e(i[s], s));
                                if (i.length > 0) {
                                    var c = ce(se("ybar-account-menu", "ybar-sign-out")),
                                        l = c && c.getAttribute("data-soa"),
                                        u = ce(se("ybar-account-menu", "ybar-sign-out-text"));
                                    if (u && l && (u.innerText = l), ve && ve.classList.add(ne.show), e) {
                                        var d = ce(se("ybar-account-menu", "ybar-icon-arrow")),
                                            f = se("ybar-icon-arrow-up").substr(1),
                                            p = se("ybar-icon-arrow-down").substr(1),
                                            m = se("ybar-item-hidden").substr(1),
                                            y = le(se("ybar-item-hidden"));
                                        d && (d.classList.toggle(p), d.addEventListener("click", (function () {
                                            for (s = 0; s < y.length; ++s) y[s].classList.toggle(m);
                                            d.classList.toggle(p), d.classList.toggle(f)
                                        })))
                                    }
                                }
                                if (i.length > o) {
                                    var h = ce(se("ybar-account-menu", "ybar-see-info"));
                                    h && h.style && (h.style.display = "block")
                                }
                                Ee(), t && t(null)
                            } else he && (he.style.display = "block")
                        }))
                    }
                },
                xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                Te = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                ke = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                Se = function () {
                    function e(t) {
                        Te(this, e), this._config = t
                    }
                    return ke(e, [{
                        key: "_getRequestUrl",
                        value: function (e) {
                            var t = e.url || this._config.service.url,
                                n = e.isRMP || this._config.service.isRMP;
                            if (t) {
                                var r = t.split("?"),
                                    o = {
                                        path: r[0],
                                        queryParams: r[1] ? r[1].split("&") : []
                                    };
                                r = o.path.split(";"), o.path = r[0], o.matrixParams = r.slice(1);
                                var i = e.queryParams,
                                    a = e.matrixParams;
                                a && !n && Object.keys(a).forEach((function (e) {
                                    o.matrixParams.push(encodeURIComponent(e) + "=" + encodeURIComponent(a[e] || ""))
                                })), i && Object.keys(i).forEach((function (e) {
                                    o.queryParams.push(encodeURIComponent(e) + "=" + encodeURIComponent(i[e] || ""))
                                }));
                                var s = o.path;
                                return o.matrixParams.length && (s += ";" + o.matrixParams.join(";")), o.queryParams.length && (s += "?" + o.queryParams.join("&")), s
                            }
                        }
                    }, {
                        key: "_getRequestBody",
                        value: function (e) {
                            return e && JSON.stringify(e) || ""
                        }
                    }, {
                        key: "_parseRequestResult",
                        value: function (e) {
                            var t = this._config.service.isRMP;
                            if ("string" == typeof e) try {
                                e = JSON.parse(e)
                            } catch (t) {
                                e = {}
                            }
                            return e = e || {}, {
                                css: t ? e.assets && e.assets.css : e.css,
                                count: t ? e.data && e.data.count : e.count,
                                markup: e.html,
                                newCount: t ? e.data && e.data.newCount : e.newCount
                            }
                        }
                    }, {
                        key: "read",
                        value: function (e, t) {
                            this._attemptRequest("GET", e, t)
                        }
                    }, {
                        key: "update",
                        value: function (e, t) {
                            this._attemptRequest("PUT", e, t)
                        }
                    }, {
                        key: "create",
                        value: function (e, t) {
                            this._attemptRequest("POST", e, t)
                        }
                    }, {
                        key: "_attemptRequest",
                        value: function (e, t, n) {
                            var r = this._config.service.attemptCount;
                            t || (t = {});
                            var o = this._getRequestUrl(t),
                                i = {
                                    body: this._getRequestBody(t.body),
                                    method: e,
                                    url: o
                                };
                            this._sendRequest(i, r, n)
                        }
                    }, {
                        key: "_sendRequest",
                        value: function (e, t, n) {
                            var r = this;
                            e = e || {};
                            var o = r._config.service,
                                i = 1e3 * o.attemptDelay,
                                a = e,
                                s = a.url,
                                c = a.body,
                                l = new XMLHttpRequest;
                            l.open(e.method, s), l.responseType = o.responseType, l.timeout = o.timeout;
                            var u = function () {
                                t > 0 ? (t--, setTimeout((function () {
                                    r._sendRequest(e, t, n)
                                }), i)) : n && n(new Error("Error: " + l.status + " " + l.statusText), null)
                            };
                            l.onload = function () {
                                if (200 === l.status) {
                                    var t = r._parseRequestResult(l.response || l.responseText);
                                    n && n(null, t, e)
                                } else u()
                            }, l.onerror = u, "GET" === e.method ? l.send() : l.send(c)
                        }
                    }]), e
                }(),
                Ie = " ";

            function Me(e, t) {
                if (e && !Le(e, t)) {
                    var n = e.className + Ie + t;
                    e.className = n
                }
            }

            function Le(e, t) {
                var n = e && e.className && e.className.split(Ie);
                return !!n && -1 !== n.indexOf(t)
            }

            function Oe(e, t) {
                if (e) {
                    var n = e.className && e.className.split(Ie);
                    if (n) {
                        var r = n.indexOf(t);
                        r >= 0 && n.splice(r, 1), e.className = n.join(Ie)
                    }
                }
            }

            function Ae(e, t) {
                if (e) {
                    if (!t) return e;
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                }
            }
            var Ne, Pe, Be = function () {
                    function e(t, n) {
                        Te(this, e);
                        var r = this;
                        r._config = t, r._markup = "", r._newCount, r._count, r._request = n
                    }
                    return ke(e, [{
                        key: "_replaceAllNotifications",
                        value: function (e) {
                            this._markup = e.markup || "", this._newCount = e.newCount && parseInt(e.newCount, 10) || 0, this._count = e.count && parseInt(e.count, 10) || 0
                        }
                    }, {
                        key: "resetNewCount",
                        value: function () {
                            if (0 !== this._newCount && this._config.service.resetUrl) {
                                var e = {
                                    url: this._config.service.resetUrl
                                };
                                this._request.read(e, (function (e, t) {}))
                            }
                            this._newCount = 0
                        }
                    }, {
                        key: "_requestNotifications",
                        value: function (e, t) {
                            var n = this,
                                r = n._config.panel,
                                o = {
                                    count: r.maxCount,
                                    imageTag: r.imageTag,
                                    theme: r.theme
                                };
                            e || (e = {}), r.notificationTypes && (o.notificationTypes = r.notificationTypes), Ae(o, e.matrixParams);
                            var i = {
                                matrixParams: o
                            };
                            n._request.read(i, (function (e, r) {
                                !e && r && n._replaceAllNotifications(r), r = r || {}, t && t(e, r)
                            }))
                        }
                    }, {
                        key: "getNotifications",
                        value: function () {
                            return {
                                count: this._count,
                                markup: this._markup,
                                newCount: this._newCount
                            }
                        }
                    }, {
                        key: "fetchNotifications",
                        value: function (e, t) {
                            this._requestNotifications(e, t)
                        }
                    }]), e
                }(),
                qe = "yns-panel-loading",
                je = "yns-panel",
                Ve = "yns-hide",
                Re = "yns-panel-padding-btm",
                He = function () {
                    function e(t, n) {
                        Te(this, e);
                        var r = this;
                        r._config = t, r._panelNode = null, r._store = n
                    }
                    return ke(e, [{
                        key: "_generatePanelMarkup",
                        value: function (e, t) {
                            var n = this._config,
                                r = void 0,
                                o = void 0;
                            "undefined" != typeof window && (r = window.Notification && "default" === window.Notification.permission, o = Le(document.body, n.promos.eligibleBodyClass));
                            var i = n.promos.enableNotifOnboard && r && o ? '<li class="yns-container yns-promo {noLogoClass}"><div class="yns-link"><img class="yns-img yns-promo-logo" src="https://s.yimg.com/cv/apiv2/notifications/default-notif-img.png-168x168.png" /><div class="yns-content yns-promo-content"><span class="yns-promo-title yns-title">{notifOnboardMsg}</span><span class="yns-promo-button"><button class="yns-promo-ctr js-push-subscribe" data-subscription-topic="{subscriptionTopic}" data-ylk="sec:hd;subsec:notifications-promo;slk:Notify Me;" data-subscription-ylk="sec:hd;subsec:notifications-promo;" >{notifOnboardBtnLabel}</button></span></div></div></li>' : "";
                            if (i) {
                                var a = n.promos.showYahooLogo ? "" : "yns-no-logo";
                                i = i.replace("{notifOnboardBtnLabel}", n.promos.notifOnboardBtnLabel).replace("{notifOnboardMsg}", n.promos.notifOnboardMsg).replace("{subscriptionTopic}", n.promos.subscriptionTopic).replace("{noLogoClass}", a)
                            }
                            var s = t.newCount > n.panel.maxCount ? t.newCount : "",
                                c = n.panel.notificationCenterPath,
                                l = c ? "" : Ve,
                                u = n.panel.headerMsg ? "" : " " + Ve,
                                d = c ? Re : "",
                                f = void 0;
                            t.count ? f = t.markup : f = '<li class="yns-container yns-empty"><div class="yns-content">{emptyPanelMsg}</div></li>'.replace("{emptyPanelMsg}", n.panel.emptyPanelMsg);
                            return e = e.replace("{notifMarkup}", f).replace("{promoMarkup}", i).replace("{hideClass}", l).replace("{notifCenterLink}", c).replace("{paddingClass}", d).replace("{headerMsg}", n.panel.headerMsg).replace("{hideHeaderClass}", u).replace(/{notificationCenterNavMsg}/g, n.panel.notificationCenterNavMsg).replace(/{newCount}/g, s)
                        }
                    }, {
                        key: "render",
                        value: function (e, t) {
                            var n = this;
                            if (n._panelNode) {
                                var r = void 0,
                                    o = n._panelNode,
                                    i = void 0,
                                    a = void 0;
                                switch (e) {
                                    case "expanded_panel":
                                        r = '<div class="yns-panel-header{hideHeaderClass}"><span class="yns-panel-header-title">{headerMsg}</span></div><div class="yns-panel-data"><ul class="yns-notifications {paddingClass}">{promoMarkup}{notifMarkup}</ul></div><div class="yns-panel-footer-action {hideClass}"><a class="yns-navigate-center" href="{notifCenterLink}" data-ylk="sec:hd;subsec:notifications-viewall;slk:{notificationCenterNavMsg};">{notificationCenterNavMsg}</a></div>', a = n._store.getNotifications(), i = n._generatePanelMarkup(r, a), o.innerHTML = i;
                                        break;
                                    case "error_panel":
                                        i = (r = '<div class="yns-panel-error"><span> {errorMsg} </span></div>').replace("{errorMsg}", n._config.panel.errorMsg), o.innerHTML = i
                                }
                                t && t()
                            } else t && t(new Error("No panel parent"))
                        }
                    }, {
                        key: "createPanelParentNode",
                        value: function (e) {
                            e && (e.innerHTML = '<div class="yns-panel" id="yns-panel"></div>', this._panelNode = document.getElementById(je))
                        }
                    }, {
                        key: "updateBadgeNode",
                        value: function (e) {
                            if (e) {
                                var t = this._store.getNotifications().newCount,
                                    n = this._config.badge.maxCount;
                                if (t) {
                                    var r = t > n ? n + "+" : t;
                                    e.innerHTML = r
                                } else e.innerHTML = ""
                            }
                        }
                    }, {
                        key: "addStyles",
                        value: function (e) {
                            if (e && "undefined" != typeof window) {
                                var t = document.getElementById(this._config.panel.styleTagId);
                                t || ((t = document.createElement("style")).type = "text/css", t.id = this._config.panel.styleTagId, t.innerText = e, document.head.appendChild(t))
                            }
                        }
                    }]), e
                }(),
                De = function () {
                    function e(t, n, r) {
                        Te(this, e);
                        var o = this;
                        o._store = n, o._view = r, o._config = t;
                        var i = o._config.panel;
                        o._panelParentNode = document.querySelector(i.parentSelector), o._badgeNode = o._config.badge.selector && document.querySelector(o._config.badge.selector), o._indicatorNode = i.indicatorSelector && document.querySelector(i.indicatorSelector)
                    }
                    return ke(e, [{
                        key: "createPanelParentNode",
                        value: function () {
                            this._view.createPanelParentNode(this._panelParentNode), this._notifPanelNode = document.getElementById(je)
                        }
                    }, {
                        key: "refreshPanelNode",
                        value: function (e, t) {
                            var n = this;
                            Me(n._notifPanelNode, qe), n._store.fetchNotifications(e, (function (e, r) {
                                e ? n._notifPanelNode.innerHTML || (n._view.render("error_panel"), Me(n._notifPanelNode, qe)) : (n._view.render("expanded_panel"), n._view.updateBadgeNode(n._badgeNode), n._showBadge(), n._showIndicator(), n._view.addStyles(r.css)), Oe(n._notifPanelNode, qe), t && t(e, r)
                            }))
                        }
                    }, {
                        key: "resetBadge",
                        value: function () {
                            var e = this;
                            e._store.resetNewCount(), e._view.updateBadgeNode(e._badgeNode), Me(e._badgeNode, e._config.badge.hideClass)
                        }
                    }, {
                        key: "_showIndicator",
                        value: function () {
                            this._indicatorNode && (this._store.getNotifications().newCount ? Me(this._indicatorNode, this._config.panel.indicatorClass) : Oe(this._indicatorNode, this._config.panel.indicatorClass))
                        }
                    }, {
                        key: "_showBadge",
                        value: function () {
                            var e = this;
                            e._store.getNotifications().newCount ? Oe(e._badgeNode, e._config.badge.hideClass) : Me(e._badgeNode, e._config.badge.hideClass)
                        }
                    }]), e
                }(),
                Fe = {
                    promos: {
                        eligibleBodyClass: "display-push-promos",
                        enableNotifOnboard: !0,
                        notifOnboardBtnLabel: "Notify Me",
                        notifOnboardMsg: "Get alerts for breaking news and top stories",
                        showYahooLogo: !0,
                        subscriptionTopic: "gondor_homerun_news"
                    },
                    badge: {
                        hideClass: "",
                        maxCount: 5,
                        selector: ""
                    },
                    panel: {
                        emptyPanelMsg: "You have no new notifications.",
                        errorMsg: "",
                        headerMsg: "Notifications",
                        imageTag: "img:40x40|2|80",
                        indicatorClass: "yns-indicator",
                        indicatorSelector: null,
                        maxCount: 6,
                        notificationCenterNavMsg: "View all {newCount} notifications",
                        notificationCenterPath: "",
                        notificationTypes: "",
                        parentSelector: null,
                        styleTagId: "notificationStyles",
                        theme: "default"
                    },
                    service: {
                        attemptCount: 2,
                        attemptDelay: 1,
                        url: null,
                        resetUrl: null,
                        isRMP: !1,
                        responseType: "json",
                        timeout: 1500
                    }
                },
                Ye = {
                    NotificationClient: function () {
                        function e(t) {
                            Te(this, e);
                            var n = this;
                            n.config = n._parseConfig(t), n._validateRequiredConfigs() && (n._request = new Se(n.config), n._store = new Be(n.config, n._request), n._view = new He(n.config, n._store), n._panelController = new De(n.config, n._store, n._view), n._panelController.createPanelParentNode(), n._assignHelperMethods())
                        }
                        return ke(e, [{
                            key: "_parseConfig",
                            value: function (e) {
                                var t = {};
                                for (var n in Ae(t, Fe), t)
                                    if (t.hasOwnProperty(n)) {
                                        var r = t[n],
                                            o = e[n];
                                        "object" === (void 0 === r ? "undefined" : xe(r)) ? Ae(r, o): t[n] = e[n]
                                    } return t
                            }
                        }, {
                            key: "_validateRequiredConfigs",
                            value: function () {
                                var e = this.config;
                                return !(!e.panel.parentSelector || !e.service.url)
                            }
                        }, {
                            key: "_assignHelperMethods",
                            value: function () {
                                var e = this;
                                e.helpers = {
                                    refreshPanelNode: e._panelController.refreshPanelNode.bind(e._panelController),
                                    resetBadge: e._panelController.resetBadge.bind(e._panelController),
                                    resetIndicator: function () {
                                        Oe(e._panelController._indicatorNode, e.config.panel.indicatorClass)
                                    }
                                }
                            }
                        }]), e
                    }()
                },
                Ue = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.setTimeStamp = t.getTimeStamp = void 0;
                    var n = "lnct";
                    t.getTimeStamp = function () {
                        var e;
                        return null === (e = window.localStorage) || void 0 === e ? void 0 : e.getItem(n)
                    };
                    t.setTimeStamp = function () {
                        var e, t = "" + Math.floor((new Date).getTime() / 1e3);
                        return null === (e = window.localStorage) || void 0 === e || e.setItem(n, t), t
                    }
                })),
                ze = n((function (e, t) {
                    var n, r;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.resetBadge = t.refreshPanel = void 0;
                    var o = {
                            promos: {
                                eligibleBodyClass: "display-push-promos",
                                enableNotifOnboard: !0
                            },
                            badge: {
                                selector: "#notif-badge",
                                hideClass: "ybar-notification-hidden"
                            },
                            panel: {
                                emptyPanelMsg: "You have no new notifications.",
                                errorMsg: "Please check back later.",
                                headerMsg: "Notifications",
                                maxCount: 5,
                                parentSelector: "#ybarNotificationBody",
                                notificationTypes: "breakingNews"
                            },
                            service: {
                                url: "/tdv2_fp/api/resource/NotificationHistory.getHistory",
                                isRMP: !1
                            }
                        },
                        i = document.getElementById("ybar"),
                        a = null === (n = null == i ? void 0 : i.className) || void 0 === n ? void 0 : n.match(/ybar-variant-([a-z]*)/),
                        s = document.getElementById("notification-container"),
                        c = null === (r = null == s ? void 0 : s.dataset) || void 0 === r ? void 0 : r.config,
                        l = !1,
                        u = {};
                    if (c) {
                        "att" === (null == a ? void 0 : a[1]) && (o.promos.showYahooLogo = !1);
                        try {
                            var d = JSON.parse(c);
                            u = S.__assign({}, d), l = 1 === d.personalize
                        } catch (e) {
                            p.logError("Notifications config parsing error", e)
                        }
                        s && delete s.dataset.config
                    }
                    var f = new Ye.NotificationClient(function (e, t) {
                        var n = S.__assign({}, e);
                        for (var r in e) n[r] = S.__assign(S.__assign({}, e[r]), t[r]);
                        return n
                    }(o, u));
                    t.refreshPanel = function (e) {
                        var t = {
                                lastUpdate: Ue.getTimeStamp() || Ue.setTimeStamp(),
                                loadInHpViewer: !0,
                                includePersonalized: l
                            },
                            n = window.YAHOO && window.YAHOO.context || window.Af && window.Af.context || {};
                        n.region && n.lang && (t.lang = n.lang, t.region = n.region), (null == a ? void 0 : a.length) && (t.partner = a[1]), f.helpers.refreshPanelNode({
                            matrixParams: t
                        }, (function (t, n) {
                            t ? p.logError("Notification refresh error:", t) : n && e && "function" == typeof e && e(n)
                        }))
                    };
                    t.resetBadge = function () {
                        f.helpers.resetBadge(), Ue.setTimeStamp()
                    }
                })),
                Qe = a(ne).selectorStr,
                We = document.querySelector.bind(document),
                Ge = m.beaconClick,
                Je = document.getElementById("ybarAccountContainer"),
                Ke = document.getElementById("smartphoneNotifContainer"),
                $e = document.getElementById("smartphoneNotifMenu"),
                Xe = document.getElementById("notif-badge"),
                Ze = We(Qe("prof-notif-badge")),
                et = document.getElementById("notifDropdownContainer"),
                tt = document.getElementById("ybarNotificationBody"),
                nt = document.getElementById("backButton"),
                rt = function (e) {
                    Ge("ybar", e && e.slk || "Ybar", "", e, null, (function () {}))
                },
                ot = function (e) {
                    e && e.newCount > 0 && Xe && (Xe.style.visibility = "visible", Ze && (Ze.style.visibility = "visible", Ze.innerText = Xe.innerText))
                },
                it = function () {
                    ze.refreshPanel(ot)
                },
                at = function () {
                    Ke && (it(), setInterval((function () {
                        it()
                    }), 3e5), $e.addEventListener("click", (function () {
                        et.style.display = "block", Je.style.width = "100%", Je.scrollTop = 0, Je.style.overflow = "hidden", ze.resetBadge(), Xe.style.visibility = "hidden", Ze.style.visibility = "hidden", rt({
                            slk: "notification",
                            elm: "btn",
                            elmt: "visible" === Xe.style.visibility ? "new alert" : "",
                            sec: "ybar",
                            subsec: "notification",
                            pkgt: "profile-pane",
                            itc: "1"
                        })
                    })), nt.addEventListener("click", (function () {
                        et.style.display = "none", Je.style.width = null, Je.style.overflow = null, rt({
                            slk: "back-notification",
                            elm: "arrow",
                            pkgt: "profile-pane",
                            sec: "ybar",
                            subsec: "notification",
                            itc: "1"
                        })
                    })), tt && tt.addEventListener("click", (function (e) {
                        (function (e) {
                            if ("function" == typeof e.composedPath) return e.composedPath();
                            if (e.path) return e.path;
                            for (var t = e.target, n = []; null !== t.parentNode;) n.push(t), t = t.parentNode;
                            return n.push(document, window), n
                        })(e).find((function (e) {
                            if (e.nodeName && "a" === e.nodeName.toLowerCase() && e.classList.contains("yns-link")) return et.style.display = "none", Je.style.width = null, Je.dispatchEvent(new CustomEvent("toggle-overlay")), !0
                        }))
                    })))
                },
                st = {
                    overlay: "_yb_18f25",
                    noscroll: "_yb_18801",
                    animation: "_yb_13dmx",
                    "left-open": "_yb_1birk",
                    "right-open": "_yb_5j6gc"
                },
                ct = m.refreshModule,
                lt = function (e, t) {
                    e = e || document.body;
                    var n = document.createElement("div");
                    n.classList.add(st.overlay), n.setAttribute("data-hidden", !0), e.parentNode.parentNode.appendChild(n), e.classList.add(st.animation);
                    var r = document.documentElement,
                        o = !0,
                        i = 0,
                        a = function () {
                            o = !o, n.setAttribute("data-hidden", o), r && r.classList.toggle("ybar-overlay"), document.body.classList.toggle(st.noscroll, !o), e.classList.toggle(st[t + "-open"], !o), o && (n.scrollTop = 0), 0 === i && (i = 1, setTimeout((function () {
                                ct()
                            }), 300))
                        };
                    e.addEventListener("toggle-overlay", (function () {
                        a()
                    })), n.addEventListener("mousedown", (function () {
                        a()
                    }))
                },
                ut = m.beaconClick,
                dt = m.refreshModule,
                ft = lt,
                pt = p.logError,
                mt = a(ne).selectorStr,
                yt = document.querySelector.bind(document),
                ht = !0,
                gt = document.getElementById("ybarAccountContainer"),
                bt = document.getElementById("ybarAccountMenu"),
                vt = yt(mt("mobile", "ybar-account-user-email")),
                _t = yt(mt("smartphone")),
                wt = document.getElementById("ybarMenuManagePub"),
                Et = document.getElementById("smartphone-arrow"),
                Ct = document.getElementById("down-arrow"),
                xt = document.getElementById("up-arrow"),
                Tt = document.getElementById("otherAccWrapper"),
                kt = yt(mt("ybar-mod-account", "sign-in-menu")),
                St = yt(mt("ybar-mod-account", "ybar-login-btn")),
                It = !1,
                Mt = 0,
                Lt = {
                    ybarAccountImage: {
                        selector: "ybar-account-img",
                        size: "64"
                    },
                    ybarCurrentUserProfileImage: {
                        selector: "ybar-current-user-profile-img",
                        size: "128"
                    },
                    ybarUserProfileImage: {
                        selector: "ybar-user-profile-img",
                        size: "128"
                    }
                },
                Ot = function (e) {
                    if (gt) gt.style.removeProperty("display"), "false" === gt.getAttribute("data-enabled") && (gt.style.display = "none");
                    else {
                        var t = new Error("ybarAccountContainer not Found");
                        pt("ERROR:", t)
                    }
                    gt && ht && (ht = !1, Ce(e))
                },
                At = function () {
                    0 === Mt && (Mt = 1, bt.parentNode.removeEventListener("mouseenter", At), bt.parentNode.removeEventListener("focusin", At), setTimeout((function () {
                        dt()
                    }), 500))
                },
                Nt = function () {
                    gt.classList.remove("ybarMenuOpen")
                };
            if (St && (Ne = {
                    elm: "signin",
                    subsec: "settings",
                    itc: "2"
                }, h.addHoverEvent(St, "ybar", "sign-in", Ne)), bt || vt || kt) {
                if (vt) Ot(!0);
                else {
                    if (Ot(), p.addEventListener("close-all-menus", (function () {
                            bt && !h.isHovered(bt) ? bt.checked = !1 : kt && kt.classList.contains(ne.show) && !h.isHovered(kt.parentNode) && Nt()
                        })), bt) {
                        if (bt.onchange = function () {
                                p.triggerEvent("close-all-menus")
                            }, Ne = {
                                itc: "2",
                                elm: "menu",
                                elmt: "user-info",
                                subsec: "accounts"
                            }, _t) {
                            var Pt = document.querySelector("#ybarAccountMenuOpener");
                            Pt && Pt.setAttribute("data-ylk", "slk:Settings;elm:btn;sec:ybar;subsec:settings;pkgt:profile-pane;itc:0;tar:login.yahoo.com"),
                                function () {
                                    ft(gt, "right");
                                    var e = yt(mt("ybar-icon-image-wrapper"));
                                    e && e.addEventListener("click", (function () {
                                        gt.dispatchEvent(new CustomEvent("toggle-overlay"))
                                    }))
                                }(), Et && Et.addEventListener("click", (function () {
                                    if (It ? (Ct.classList.remove("hide"), xt.classList.add("hide"), Tt.style.height = 0) : (Ct.classList.add("hide"), xt.classList.remove("hide"), r = (n = Tt).scrollHeight, n.style.height = r + "px"), It = !It, "function" == typeof ut) {
                                        var e = "manage-account-open",
                                            t = {
                                                elm: "expand",
                                                subsec: "settings",
                                                pkgt: "profile-pane",
                                                itc: "1"
                                            };
                                        It || (e = "manage-account-close", t.elm = "btn"), ut("ybar", e, "", t)
                                    }
                                    var n, r
                                })), at()
                        } else {
                            var Bt = document.querySelector("#ybarAccountMenu + label");
                            Bt && h.addHoverEvent(Bt, "ybar", "profile-expand", Ne), bt.parentNode.addEventListener("mouseenter", At), bt.parentNode.addEventListener("focusin", At)
                        }
                        h.hideOutlineOnMouseDown("#ybarAccountMenu", "#ybarAccountMenu + label")
                    }
                    gt.addEventListener("focusin", (function () {
                        gt.classList.add("ybarMenuOpen")
                    })), gt.addEventListener("focusout", Nt), wt && wt.addEventListener("click", Nt)
                }
                Object.keys(Lt).forEach((function (e) {
                    var t = Lt[e],
                        n = yt(mt(t.selector));
                    n && (n.onerror = function () {
                        var e, r, o;
                        e = t.size, o = "https://s.yimg.com/wm/modern/images/default_user_profile_pic_" + e + ".png", (r = n).onerror = null, r.srcset = "", r.src = o
                    })
                }))
            }(Pe = document.querySelector(".return-ngy")) && Pe.addEventListener("click", (function (e) {
                if (window.wafer) {
                    e.preventDefault();
                    var t = new Date;
                    t.setDate(t.getDate() + 30), window.wafer.utils.setCookie("yhoptin", "nextgen", {
                        expires: t,
                        domain: window.location.hostname,
                        path: "/"
                    }), window.location = window.location.href.split("?")[0]
                }
            }));
            var qt = {
                    "ybar-mod-mail": "_yb_1xvj5",
                    "ybar-mail-preview": "_yb_12gew _yb_hcki1",
                    "ybar-mail-link": "_yb_9mle4",
                    "property-homepage": "_yb_o7415",
                    smartphone: "_yb_1ovyd",
                    "ybar-mail-icon": "_yb_lemin",
                    "ybar-unread": "_yb_jv6rk",
                    "property-member-center": "_yb_xcauc",
                    "property-help": "_yb_1u4mq",
                    mobile: "_yb_hml1u",
                    count: "_yb_40rox",
                    "ybar-mail-icon-text": "_yb_1dgh7",
                    "ybar-text-wrap": "_yb_126t4",
                    "ybar-text-bold": "_yb_16lii",
                    "ybar-mail-signin": "_yb_kj57t",
                    "ybar-mail-loading": "_yb_1jq2d",
                    "ybar-mail-signin-link": "_yb_48vyi",
                    "popover-body": "_yb_8zm6s _yb_12igk",
                    "ybar-mail-list": "_yb_1tmbs",
                    "ybar-mail-item": "_yb_vg0ti",
                    "ybar-mail-item-link": "_yb_14bog",
                    "ybar-mail-item-name": "_yb_1xis8",
                    "ybar-mail-item-desc": "_yb_1ktdc",
                    "ybar-mail-item-image": "_yb_loaqr",
                    "ybar-mail-item-unread": "_yb_d8har",
                    "ybar-mail-bottom-wrapper": "_yb_1gsaa",
                    "ybar-mail-compose-link": "_yb_hq5wv",
                    "ybar-icon-compose": "_yb_1wol7",
                    "ybar-compose-link-text": "_yb_135u0",
                    "mail-animation": "_yb_na443",
                    "ybar-mail-item-snippet": "_yb_1utsb",
                    "ybar-mail-item-time": "_yb_15pe1",
                    "ybar-mail-viewall": "_yb_1iusw"
                },
                jt = function (e, t, n, r) {
                    var o = new XMLHttpRequest,
                        i = n ? JSON.stringify(n) : null;
                    o.open("POST", e, !0), o.setRequestHeader("Content-type", "application/json"), o.setRequestHeader("X-Oath-YmReqId", t), o.withCredentials = !0, o.onreadystatechange = function () {
                        4 === o.readyState && function (e, t, n, r) {
                            if (200 !== e) {
                                var o = new Error("Post request failed with status: " + e);
                                o._meta = {
                                    status: e,
                                    ymreqid: r
                                }, n(o)
                            } else {
                                var i = null;
                                try {
                                    i = JSON.parse(t)
                                } catch (e) {
                                    var a = new Error("Error parsing responseText");
                                    return a._meta = {
                                        originalError: e
                                    }, void n(a)
                                }
                                n(null, i)
                            }
                        }(o.status, o.responseText, r, t)
                    }, o.send(i)
                },
                Vt = function () {
                    var e = (new Date).getTime(),
                        t = null;
                    return "xxxxxxxx-xxxx-xxxx-09xx-xxxxxxxxxx00".replace(/x/g, (function (n) {
                        return t = (e + 16 * Math.random()) % 16 | 0, e = Math.floor(e / 16), t.toString(16)
                    }))
                },
                Rt = p.logError,
                Ht = document.querySelector('input[name="mail_wssid"]'),
                Dt = document.querySelector('input[name="mail_appid"]'),
                Ft = function (e, t) {
                    var n = t.pop();
                    return t.reduce((function (e, t) {
                        return e[t] || {}
                    }), e || {})[n]
                },
                Yt = [],
                Ut = null,
                zt = !1,
                Qt = function (e) {
                    jt("https://apis.mail.yahoo.com/ws/v3/batch?appId=" + Dt.value + "&wssid=" + Ht.value, Vt(), {
                        responseType: "json",
                        requests: [{
                            id: "GetMailboxId",
                            uri: "/ws/v3/mailboxes/",
                            method: "GET",
                            filters: {
                                select: {
                                    mailboxId: "$..mailboxes[?(@.isPrimary==true)].id"
                                }
                            },
                            suppressResponse: !0,
                            requests: [{
                                id: "ListMessages",
                                uri: "/ws/v3/mailboxes/@.id==$(mailboxId)/messages/@.select==q?q=count%3A6+offset%3A0+folderType%3AINBOX+-sort%3Adate",
                                method: "GET"
                            }]
                        }]
                    }, (function (t, n) {
                        if (t) return console.error(t), t._meta = t._meta || {}, n && n.error && (t._meta.jedi = n.error), t._meta && 0 !== t._meta.status && Rt("Error loading mail messages", t, t._meta), e(t, null);
                        var r = null;
                        if (!n.error && n.result && n.result.responses && n.result.responses.length && (r = Ft(n.result.responses[0], ["response", "result", "messages"])), !r) {
                            var o = new Error("Missing data for reverse cron");
                            return console.error(o), e(o, null)
                        }
                        var i = r.map((function (e) {
                            return {
                                from: e.headers.from.length ? e.headers.from[0].name : "",
                                email: e.headers.from.length ? e.headers.from[0].email : "",
                                subject: e.headers.subject,
                                read: !!e.flags && e.flags.read,
                                mid: e.id,
                                date: e.headers.date,
                                snippet: e.snippet
                            }
                        }));
                        e(null, i)
                    }))
                },
                Wt = function (e, t) {
                    if (t && null !== Ut) return e(null, Ut);
                    if (!Dt || !Dt.value) return e(new Error("No appId, user is logged out"));
                    if (!Ht || !Ht.value) {
                        var n = new Error("Missing wssid for getUnseen");
                        return Rt("Wssid error", n), console.error(n), e(n)
                    }
                    Yt.push(e), zt || (zt = !0, jt("https://apis.mail.yahoo.com/ws/v3/batch?appId=" + Dt.value + "&wssid=" + Ht.value, Vt(), {
                        responseType: "json",
                        requests: [{
                            id: "GetMailboxId",
                            uri: "/ws/v3/mailboxes/",
                            method: "GET",
                            filters: {
                                select: {
                                    mailboxId: "$..mailboxes[?(@.isPrimary==true)].id"
                                }
                            },
                            suppressResponse: !0,
                            requests: [{
                                id: "ListDecos",
                                uri: "/ws/v3/mailboxes/@.id==$(mailboxId)/decos",
                                method: "GET"
                            }]
                        }]
                    }, (function (e, t) {
                        if (e) return console.error(e), e._meta = e._meta || {}, t && t.error && (e._meta.jedi = t.error), Rt("Error with mail count request", e, e._meta), Yt.forEach((function (t) {
                            t(e, null)
                        })), void(zt = !1);
                        var n = null;
                        if (!t.error && t.result && t.result.responses && t.result.responses.length)
                            for (var r = Ft(t.result.responses[0], ["response", "result", "decos"]), o = 0; o < r.length; ++o) {
                                var i = r[o];
                                "FTI" === i.id && (n = i)
                            }
                        var a = n && n.counts && n.counts.length ? n.counts[0].unseen : 0;
                        Ut = a, Yt.forEach((function (e) {
                            e(null, a)
                        })), zt = !1
                    })))
                },
                Gt = function (e) {
                    if (!Dt || !Dt.value) return e(new Error("No appId, user is logged out"));
                    if (!Ht || !Ht.value) {
                        var t = new Error("Missing wssid for getMessages");
                        return Rt("Wssid error", t), console.error(t), e(t)
                    }
                    Qt(e)
                },
                Jt = function (e, t, n) {
                    var r = new XMLHttpRequest,
                        o = t ? JSON.stringify(t) : null;
                    r.open("POST", e, !0), r.setRequestHeader("Content-type", "application/json"), r.withCredentials = !0, r.onreadystatechange = function () {
                        4 === r.readyState && function (e, t, n) {
                            if (200 !== e) n(new Error("Something went wrong " + e));
                            else {
                                var r = null;
                                try {
                                    r = JSON.parse(t)
                                } catch (e) {
                                    return void n(new Error("Error parsing responseText"))
                                }
                                n(null, r)
                            }
                        }(r.status, r.responseText, n)
                    }, r.send(o)
                },
                Kt = function (e) {
                    Jt("/fp_ngymtls_ms/_rcv/remote", {
                        m_id: "react-wafer-mailpreview",
                        m_mode: "json",
                        ctrl: "MailPreview"
                    }, (function (t, n) {
                        t || e(n)
                    }))
                },
                $t = function (e, t, n) {
                    var r, o, i, a, s = [],
                        c = [];
                    for (r = 0; r < e.length; ++r) i = "https://s.yimg.com" + e[r].value, a = void 0, (a = document.createElement("link")).rel = "stylesheet", a.type = "text/css", a.href = i, c.push(a), document.getElementsByTagName("head")[0].appendChild(a);
                    for (r = 0; r < t.length; ++r) s.push("s:" + t[r].value);
                    if (o = "https://s.yimg.com/zz/combo?" + s.join("&"), e.length) {
                        document.getElementById("atomic") || document.documentElement.getAttribute("id") || (document.documentElement.id = "atomic");
                        var l = setInterval((function () {
                            var e = !0;
                            for (r = 0; r < c.length; ++r) e = e && Boolean(c[r].sheet);
                            e && (clearInterval(l), n(), void 0 === window.wafer && s.length > 0 && function (e) {
                                var t = document.createElement("script");
                                t.src = e, t.type = "text/javascript", t.async = !0, document.getElementsByTagName("head")[0].appendChild(t)
                            }(o))
                        }), 10)
                    }
                },
                Xt = m.beaconClick,
                Zt = h.isHovered,
                en = a(qt).selectorStr,
                tn = oe.appendQorA,
                nn = oe.getObjectValue,
                rn = ie.trustHTML,
                on = ie.getTemplateContent,
                an = p.logError,
                sn = !1,
                cn = !1,
                ln = function () {
                    cn || (cn = !0, un({
                        slk: "Mail",
                        elm: "expand",
                        sec: "ybar",
                        subsec: "mailprev",
                        itc: "2"
                    }), setTimeout((function () {
                        cn = !1
                    }), 1e3))
                },
                un = function (e) {
                    Xt("ybar", e && e.slk || "Mail", "", e, null, (function () {}))
                },
                dn = function (e, t) {
                    var n, r, o = (n = e.date, (r = Math.round((new Date).getTime() / 1e3) - n) < 60 ? parseInt(r) + "s" : r < 3600 ? parseInt(r / 60) + "m" : r <= 86400 ? parseInt(r / 3600) + "h" : r > 86400 ? parseInt(r / 86400) + "d" : ""),
                        i = on(document.getElementById("ybarMailItemTemplate")),
                        a = i.children && i.children[0];
                    if (!a && i.childNodes)
                        for (var s = 0; s < i.childNodes.length; ++s)
                            if (1 === i.childNodes[s].nodeType) {
                                a = i.childNodes[s];
                                break
                            } if (a) {
                        var c = a.querySelector("a." + qt["ybar-mail-item-link"]);
                        if (c)
                            if (c.setAttribute("href", "https://mrd.mail.yahoo.com/msg?fid=Inbox&src=hp&mid=" + encodeURIComponent(e.mid)), c.setAttribute("aria-label", c.getAttribute("aria-label").replace("[[mail_from]]", e.from).replace("[[mail_subject]]", e.subject)), c.addEventListener("click", (function () {
                                    document.getElementById("ybarMailPreview").style.pointerEvents = "none", un({
                                        slk: "message-" + (e.read ? "old" : "new"),
                                        elm: "btn",
                                        subsec: "mailprev",
                                        pos: t,
                                        itc: "0",
                                        tar: "mail.yahoo.com",
                                        tar_uri: "/msg?fid=Inbox&src=hp&mid=" + e.mid
                                    })
                                })), e.read);
                            else {
                                var l = c.querySelector("span");
                                l && l.classList.add(qt["ybar-mail-item-unread"])
                            } var u = a.querySelector("." + qt["ybar-mail-item-name"]);
                        u && (u.innerText = e.from);
                        var d = a.querySelector("." + qt["ybar-mail-item-desc"]);
                        d && (d.innerText = e.subject);
                        var f = a.querySelector("." + qt["ybar-mail-item-snippet"]);
                        f && (f.innerText = e.snippet);
                        var p = a.querySelector("." + qt["ybar-mail-item-time"]);
                        p && (p.innerText = o);
                        var m = a.querySelector("." + qt["ybar-mail-item-image"]);
                        return m && m.setAttribute("src", "https://data.mail.yahoo.com/xobni/v4/endpoints/smtp:" + encodeURIComponent(e.email) + "/photo?psize=24X24&fallback_url=https%3A%2F%2Fs.yimg.com%2Fdh%2Fap%2Fsocial%2Fprofile%2Fprofile_a24.png&alphatar_photo=true&format=image"), a
                    }
                },
                fn = function () {
                    var e = document.getElementById("ybarMailPreview");
                    e && e.classList.add("ybarMenuOpen")
                },
                pn = function () {
                    var e = document.getElementById("ybarMailPreview");
                    e && e.classList.remove("ybarMenuOpen")
                },
                mn = function () {
                    var e = null !== document.querySelector(".ybar-property-ngy");
                    sn || (sn = !0, e ? yn() : Gt((function (e, t) {
                        if (!e) {
                            if (0 === t.length) return document.getElementById("ybarMailMessages").children[0].style.display = "none", void(document.getElementById("ybarMailMessages").children[1].style.display = "block");
                            var n = document.createElement("ul");
                            n.className = qt["ybar-mail-list"];
                            for (var r = 0; r < t.length; ++r) {
                                var o = dn(t[r], r);
                                n.appendChild(o)
                            }
                            var i = document.getElementById("ybarMailPreview");
                            i.addEventListener("focusin", fn), i.addEventListener("focusout", pn);
                            var a = document.querySelector(en("popover-body"));
                            a.replaceChild(n, a.children[0])
                        }
                    })))
                },
                yn = function () {
                    var e = document.querySelector(en("ybar-mail-preview", "popover-body"));
                    Kt((function (t) {
                        var n = nn(t, "assets.css", []),
                            r = nn(t, "assets.js", []);
                        $t(n, r, (function () {
                            if (e && t.html) window.wafer && window.wafer.base.destroy(e), e.innerHTML = rn(t.html), window.wafer && window.wafer.base.sync(e);
                            else {
                                var n = new Error("Mail preview content not available");
                                an("Mail Preview Error", n)
                            }
                        }));
                        var o = document.getElementById("ybarMailPreview");
                        o.addEventListener("focusin", fn), o.addEventListener("focusout", pn)
                    }))
                },
                hn = function () {
                    var e = document.querySelector(en("ybar-mod-mail")),
                        t = null !== document.querySelector(".ybar-ytheme-fuji2"),
                        n = document.querySelector(en("ybar-mail-link")),
                        r = document.querySelector(en("ybar-mail-signin-link")),
                        o = document.getElementById("ybar"),
                        i = window && window.YAHOO && window.YAHOO.i13n && window.YAHOO.i13n.SPACEID || "";
                    if (o && "" === i && (i = o.getAttribute("data-spaceid")), e)
                        if (e.addEventListener("mouseover", (function () {
                                p.triggerEvent("close-all-menus"), ln()
                            })), p.addEventListener("close-all-menus", (function () {
                                Zt(e) || pn()
                            })), sn = !1, Wt((function (e, n) {
                                if (!(e || n <= 0)) {
                                    var r = document.getElementById("ybarUnread");
                                    if (r) {
                                        r.style.visibility = "visible";
                                        var o = r.querySelector("span");
                                        o && (o.textContent = n > 999 && t ? "99+" : n > 999 ? "999+" : n)
                                    }
                                }
                            })), null !== document.getElementById("ybarMailMessages")) n.addEventListener("mouseover", (function () {
                            mn()
                        })), n.addEventListener("focus", (function () {
                            mn(), ln()
                        }));
                        else {
                            var a = n.getAttribute("data-redirect-params");
                            a && "" !== a && (a = -1 !== n.href.indexOf("&activity=ybar-") ? "" : a.replace(/\[\[pspid\]\]/, i), n.href = tn(n.href) + a, r && r.href && (r.href = tn(r.href) + a))
                        }
                },
                gn = (0, b.measure)("ybar-mail-init");
            hn(), gn.stop();
            var bn = n((function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.showMailUnreadCount = void 0;
                var n = Wt;
                t.showMailUnreadCount = function () {
                    var e = document.querySelector("#ybar-navigation-item-mail"),
                        t = document.querySelector("#ybar-navigation-item-mail > a"),
                        r = document.querySelector("#ybar-navigation-item-mail > a > span");
                    null !== e && null !== t && (console.log("[ybar mailcount] nav calling unseen"), n((function (e, t) {
                        e || t <= 0 || null === r || (r.textContent = "(" + (t > 999 ? "999+" : t) + ")")
                    }), !0))
                }
            }));
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var vn = Element.prototype;
                vn.matches = vn.matchesSelector || vn.mozMatchesSelector || vn.msMatchesSelector || vn.oMatchesSelector || vn.webkitMatchesSelector
            }
            var _n = function (e, t) {
                for (; e && 9 !== e.nodeType;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            };

            function wn(e, t, n, r, o) {
                var i = En.apply(this, arguments);
                return e.addEventListener(n, i, o), {
                    destroy: function () {
                        e.removeEventListener(n, i, o)
                    }
                }
            }

            function En(e, t, n, r) {
                return function (n) {
                    n.delegateTarget = _n(n.target, t), n.delegateTarget && r.call(e, n)
                }
            }
            var Cn = function (e, t, n, r, o) {
                    return "function" == typeof e.addEventListener ? wn.apply(null, arguments) : "function" == typeof n ? wn.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, (function (e) {
                        return wn(e, t, n, r, o)
                    })))
                },
                xn = n((function (e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.init = t.temporarilyDisablePointerEvents = void 0;
                    var n, r = -1;
                    t.temporarilyDisablePointerEvents = function (e) {
                        for (var t = 0; t < e.length; ++t) {
                            var n = e[t];
                            n instanceof HTMLElement && (n.style.pointerEvents = "none")
                        }
                        setTimeout((function () {
                            for (var t = 0; t < e.length; ++t) {
                                var n = e[t];
                                n instanceof HTMLElement && (n.style.pointerEvents = "auto")
                            }
                        }), 1e3)
                    };
                    var o = function (e) {
                        var t = -1,
                            n = 0;
                        if (e.ybarNav) {
                            for (var o = window.getComputedStyle(e.ybarNav), i = parseInt(o.width, 10) - parseInt(o.paddingLeft, 10) - parseInt(o.paddingRight, 10), a = 0; a < e.navItems.length; ++a) {
                                var s = e.navItems[a].getBoundingClientRect().width;
                                if (n + s > i - 84 && (a !== e.navItems.length - 1 || n + s > i || e.moreMenuDropdown && e.moreMenuDropdown.hasChildNodes() && r < 0)) {
                                    t = a;
                                    break
                                }
                                n += s
                            }
                            if (-1 === t && -1 !== r && n <= i) {
                                for (var c = r; c < e.navItems.length && e.moreMenuDropdown && e.moreMenuDropdown.hasChildNodes() && e.moreMenuDropdown.firstChild;) e.moreMenuDropdown.removeChild(e.moreMenuDropdown.firstChild), c++;
                                r = -1, e.navList && (e.navList.style.maxWidth = "none")
                            }
                            if (-1 !== t && t !== r) {
                                if (t > r && -1 !== r)
                                    for (var l = r; l < t && e.moreMenuDropdown && e.moreMenuDropdown.hasChildNodes() && e.moreMenuDropdown.firstChild;) e.moreMenuDropdown.removeChild(e.moreMenuDropdown.firstChild), l++;
                                else
                                    for (var u = -1 === r ? e.navItems.length - 1 : r - 1; u >= t;) {
                                        var d = e.navItems[u].cloneNode(!0),
                                            f = d.querySelector("." + e.navigationDropdownListClass);
                                        f && (f.style.display = "none"), d.classList.remove(e.dropdownWrapperClass), d.classList.remove(e.ybarNavigationItemClass), d.classList.add(e.navigationDropdownItemClass), e.moreMenuDropdown && e.moreMenuDropdown.insertBefore(d, e.moreMenuDropdown.firstChild), u--
                                    }
                                r = t
                            } - 1 !== t && e.navList && (e.navList.style.maxWidth = parseInt(n.toString(), 10) + "px"), e.moreMenuNavItem && e.moreMenuDropdown && e.moreMenuDropdown.hasChildNodes() ? (e.moreMenuNavItem.classList.add(e.dropdownWrapperClass), e.moreMenuNavItem.style.visibility = "visible") : null !== e.moreMenuNavItem && (e.moreMenuNavItem.classList.remove(e.dropdownWrapperClass), e.moreMenuNavItem.style.visibility = "hidden"), e.moreMenuDropdown && e.moreMenuDropdown.childElementCount > 10 ? e.moreMenuDropdown.classList.add(e.longListClass) : null !== e.moreMenuDropdown && e.moreMenuDropdown.classList.remove(e.longListClass)
                        }
                    };
                    t.init = function (e, r) {
                        for (var i = function () {
                                t.temporarilyDisablePointerEvents(r.navLinks)
                            }, a = 0; a < r.navLinks.length; ++a) r.navLinks[a].addEventListener("click", i);
                        ! function (e, t) {
                            var r = t.isTablet ? "touchstart" : "mouseover";
                            Cn("." + t.dropdownWrapperClass + ", ." + t.navigationDropdownListClass, r, (function (r) {
                                if (window || document) {
                                    var o = window.innerWidth || document.documentElement.clientWidth,
                                        i = r.delegateTarget;
                                    if (i && i.className.indexOf(t.dropdownWrapperClass) && (i = i.querySelector("." + t.navigationDropdownListClass)), i) {
                                        i.style.removeProperty("left"), t.shiftMoreMenuEnabled && n && (i.style.marginLeft = n + "px");
                                        var a = i.getBoundingClientRect().right;
                                        a > o && (t.shiftMoreMenuEnabled ? (n || (n = parseInt(window.getComputedStyle(i).marginLeft, 10)), i.style.marginLeft = n + o - a + "px") : i.style.left = o - a + "px")
                                    }
                                } else {
                                    var s = new Error("Dropdown could not be initialized");
                                    e.logError("Error:", s)
                                }
                            }))
                        }(e, r), bn.showMailUnreadCount(), document.addEventListener("DOMContentLoaded", bn.showMailUnreadCount), r.shiftMoreMenuEnabled && r.isFuji2 && r.navList && r.navItems && r.navItems.length > 0 && (o(r), window.addEventListener("load", (function () {
                            o(r)
                        })), window.addEventListener("resize", (function () {
                            o(r)
                        })))
                    }
                })),
                Tn = "_yb_w5q1w",
                kn = "_yb_1wkfw",
                Sn = "_yb_1uhn0",
                In = "_yb_1pr71",
                Mn = "_yb_1puxd";
            v.initModule("ybar-mod-navigation", (function (e) {
                var t = {
                    dropdownWrapperClass: Sn,
                    isFuji2: null !== document.querySelector(".ybar-ytheme-fuji2"),
                    isTablet: null !== document.querySelector(".tablet"),
                    longListClass: In,
                    moreMenuDropdown: document.querySelector("#ybar-nav-more-menu ul"),
                    moreMenuNavItem: document.querySelector("#ybar-nav-more-menu"),
                    navigationDropdownItemClass: Mn,
                    navigationDropdownListClass: Tn,
                    navItems: document.querySelectorAll("li." + kn),
                    navLinks: document.querySelectorAll(".ybar-mod-navigation a"),
                    navList: document.querySelector(".ybar-mod-navigation ul"),
                    shiftMoreMenuEnabled: document.querySelector(".ybar-shift-more-menu"),
                    ybarNav: document.getElementById("ybar-navigation"),
                    ybarNavigationItemClass: kn
                };
                xn.init(e, t)
            }));
            var Ln = n((function (e, t) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.init = void 0;
                var n = function (e) {
                    m.beaconClick("ybar", e.slk, "", e, void 0, (function () {}))
                };
                t.init = function (e, t) {
                    var r = t.notifMenu,
                        o = t.notifDropdown,
                        i = t.notifBadge,
                        a = t.notifContainer,
                        s = t.animatedIcon,
                        c = !1,
                        l = function () {
                            r && (r.checked = !1), null == o || o.classList.remove("ybarMenuOpen")
                        },
                        u = function (e) {
                            (null == e ? void 0 : e.newCount) && e.newCount > 0 && i && (i.style.visibility = "visible", s && s.play())
                        };
                    e.addEventListener("close-all-menus", (function () {
                        y.isHovered(a) || l()
                    })), a && (ze.refreshPanel(u), setInterval((function () {
                        ze.refreshPanel(u)
                    }), 3e5), a.addEventListener("mouseenter", (function () {
                        e.triggerEvent("close-all-menus"), ze.resetBadge(), i && (i.style.visibility = "hidden"), c || (c = !0, n({
                            slk: "notification",
                            elm: "expand",
                            elmt: "visible" === (null == i ? void 0 : i.style.visibility) ? "new alert" : "",
                            sec: "ybar",
                            subsec: "notification",
                            itc: "2"
                        }), setTimeout((function () {
                            c = !1
                        }), 1e3))
                    })), a.addEventListener("mouseleave", l)), r && r.addEventListener("click", (function () {
                        n({
                            slk: "notification",
                            elm: "btn",
                            elmt: "visible" === (null == i ? void 0 : i.style.visibility) ? "new alert" : "",
                            sec: "ybar",
                            subsec: "notification",
                            itc: "1"
                        })
                    })), o && (o.addEventListener("focusin", (function () {
                        r && (r.checked = !0), null == o || o.classList.add("ybarMenuOpen")
                    })), o.addEventListener("focusout", l))
                }
            }));
            v.initModule("ybar-mod-notification", (function (e) {
                var t = {
                    notifContainer: document.getElementById("notification-container"),
                    notifBadge: document.getElementById("notif-badge"),
                    notifMenu: document.getElementById("ybarNotificationMenu"),
                    notifDropdown: document.getElementById("notifDropdownContainer"),
                    animatedIcon: document.getElementById("notifBell")
                };
                Ln.init(e, t)
            }))
        }()
    }
}; 
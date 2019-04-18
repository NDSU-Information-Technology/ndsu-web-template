'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*https://cdn.polyfill.io/v2/polyfill.min.js?features=Promise,Array.from|gated&ua=ie/10.0.0*/
/* Disable minification (remove `.min` from URL path) for more info */

(function (undefined) {
    if (!('keys' in Object && function () {
        // Safari 5.0 bug where Object.keys doesn't work with arguments
        return Object.keys(arguments).length === 2;
    }(1, 2) && function () {
        try {
            // In ES6 Object.keys works on all object except `null` and `undefined`.
            Object.keys('');
            return true;
        } catch (e) {
            return false;
        }
    }())) {
        Object.keys = function () {
            "use strict";
            function t(t) {
                var e = r.call(t),
                    n = "[object Arguments]" === e;return n || (n = "[object Array]" !== e && null !== t && "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)), n;
            }var e = Object.prototype.hasOwnProperty,
                r = Object.prototype.toString,
                n = Object.prototype.propertyIsEnumerable,
                o = !n.call({ toString: null }, "toString"),
                l = n.call(function () {}, "prototype"),
                c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                i = function i(t) {
                var e = t.constructor;return e && e.prototype === t;
            },
                u = { $console: !0, $external: !0, $frame: !0, $frameElement: !0, $frames: !0, $innerHeight: !0, $innerWidth: !0, $outerHeight: !0, $outerWidth: !0, $pageXOffset: !0, $pageYOffset: !0, $parent: !0, $scrollLeft: !0, $scrollTop: !0, $scrollX: !0, $scrollY: !0, $self: !0, $webkitIndexedDB: !0, $webkitStorageInfo: !0, $window: !0 },
                a = function () {
                if ("undefined" == typeof window) return !1;for (var t in window) {
                    try {
                        if (!u["$" + t] && e.call(window, t) && null !== window[t] && "object" == _typeof(window[t])) try {
                            i(window[t]);
                        } catch (r) {
                            return !0;
                        }
                    } catch (r) {
                        return !0;
                    }
                }return !1;
            }(),
                f = function f(t) {
                if ("undefined" == typeof window || !a) return i(t);try {
                    return i(t);
                } catch (e) {
                    return !1;
                }
            };return function (n) {
                var i = "[object Function]" === r.call(n),
                    u = t(n),
                    a = "[object String]" === r.call(n),
                    p = [];if (n === undefined || null === n) throw new TypeError("Cannot convert undefined or null to object");var s = l && i;if (a && n.length > 0 && !e.call(n, 0)) for (var g = 0; g < n.length; ++g) {
                    p.push(String(g));
                }if (u && n.length > 0) for (var w = 0; w < n.length; ++w) {
                    p.push(String(w));
                } else for (var y in n) {
                    s && "prototype" === y || !e.call(n, y) || p.push(String(y));
                }if (o) for (var h = f(n), $ = 0; $ < c.length; ++$) {
                    h && "constructor" === c[$] || !e.call(n, c[$]) || p.push(c[$]);
                }return p;
            };
        }();
    }if (!('assign' in Object)) {
        !function () {
            function e(e) {
                if (null === e || e === undefined) throw new TypeError("Cannot call method on " + e);return Object(e);
            }Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function value(n, r) {
                    var t = e(n);if (1 === arguments.length) return t;var l,
                        o,
                        a,
                        i,
                        u = Array.prototype.slice.call(arguments, 1);for (l = 0; l < u.length; l++) {
                        var c = u[l];for (c === undefined || null === c ? a = [] : (i = e(c), a = Object.keys(i)), o = 0; o < a.length; o++) {
                            var f = a[o],
                                b = Object.getOwnPropertyDescriptor(i, f);if (b !== undefined && b.enumerable) {
                                var d = i[f];t[f] = d;
                            }
                        }
                    }return t;
                } });
        }();
    }if (!('Symbol' in this)) {
        !function (e, n, t) {
            var r,
                o = 0,
                u = "" + Math.random(),
                a = "__symbol:",
                c = a.length,
                l = "__symbol@@" + u,
                i = "defineProperty",
                f = "defineProperties",
                v = "getOwnPropertyNames",
                s = "getOwnPropertyDescriptor",
                b = "propertyIsEnumerable",
                y = e.prototype,
                h = y.hasOwnProperty,
                m = y[b],
                p = y.toString,
                w = Array.prototype.concat,
                g = "object" == (typeof window === 'undefined' ? 'undefined' : _typeof(window)) ? e.getOwnPropertyNames(window) : [],
                d = e[v],
                P = function P(e) {
                if ("[object Window]" === p.call(e)) try {
                    return d(e);
                } catch (n) {
                    return w.call([], g);
                }return d(e);
            },
                S = e[s],
                O = e.create,
                j = e.keys,
                E = e.freeze || e,
                _ = e[i],
                k = e[f],
                N = S(e, v),
                T = function T(e, n, t) {
                if (!h.call(e, l)) try {
                    _(e, l, { enumerable: !1, configurable: !1, writable: !1, value: {} });
                } catch (r) {
                    e[l] = {};
                }e[l]["@@" + n] = t;
            },
                z = function z(e, n) {
                var t = O(e);return P(n).forEach(function (e) {
                    M.call(n, e) && G(t, e, n[e]);
                }), t;
            },
                A = function A(e) {
                var n = O(e);return n.enumerable = !1, n;
            },
                D = function D() {},
                F = function F(e) {
                return e != l && !h.call(x, e);
            },
                I = function I(e) {
                return e != l && h.call(x, e);
            },
                M = function M(e) {
                var n = "" + e;return I(n) ? h.call(this, n) && this[l]["@@" + n] : m.call(this, e);
            },
                W = function W(n) {
                var t = { enumerable: !1, configurable: !0, get: D, set: function set(e) {
                        r(this, n, { enumerable: !1, configurable: !0, writable: !0, value: e }), T(this, n, !0);
                    } };try {
                    _(y, n, t);
                } catch (o) {
                    y[n] = t.value;
                }return E(x[n] = _(e(n), "constructor", B));
            },
                q = function K(e) {
                if (this instanceof K) throw new TypeError("Symbol is not a constructor");return W(a.concat(e || "", u, ++o));
            },
                x = O(null),
                B = { value: q },
                C = function C(e) {
                return x[e];
            },
                G = function G(e, n, t) {
                var o = "" + n;return I(o) ? (r(e, o, t.enumerable ? A(t) : t), T(e, o, !!t.enumerable)) : _(e, n, t), e;
            },
                H = function H(e) {
                return function (n) {
                    return h.call(e, l) && h.call(e[l], "@@" + n);
                };
            },
                J = function J(e) {
                return P(e).filter(e === y ? H(e) : I).map(C);
            };N.value = G, _(e, i, N), N.value = J, _(e, "getOwnPropertySymbols", N), N.value = function (e) {
                return P(e).filter(F);
            }, _(e, v, N), N.value = function (e, n) {
                var t = J(n);return t.length ? j(n).concat(t).forEach(function (t) {
                    M.call(n, t) && G(e, t, n[t]);
                }) : k(e, n), e;
            }, _(e, f, N), N.value = M, _(y, b, N), N.value = q, _(t, "Symbol", N), N.value = function (e) {
                var n = a.concat(a, e, u);return n in y ? x[n] : W(n);
            }, _(q, "for", N), N.value = function (e) {
                if (F(e)) throw new TypeError(e + " is not a symbol");return h.call(x, e) ? e.slice(2 * c, -u.length) : void 0;
            }, _(q, "keyFor", N), N.value = function (e, n) {
                var t = S(e, n);return t && I(n) && (t.enumerable = M.call(e, n)), t;
            }, _(e, s, N), N.value = function (e, n) {
                return 1 === arguments.length || void 0 === n ? O(e) : z(e, n);
            }, _(e, "create", N), N.value = function () {
                var e = p.call(this);return "[object String]" === e && I(this) ? "[object Symbol]" : e;
            }, _(y, "toString", N), r = function r(e, n, t) {
                var r = S(y, n);delete y[n], _(e, n, t), e !== y && _(y, n, r);
            };
        }(Object, 0, this);
    }if (!('Symbol' in this && 'iterator' in this.Symbol)) {
        Object.defineProperty(Symbol, "iterator", { value: Symbol("iterator") });
    }if (!('Symbol' in this && 'toStringTag' in this.Symbol)) {
        Object.defineProperty(Symbol, "toStringTag", { value: Symbol("toStringTag") });
    }var Iterator = function () {
        var e = function e() {
            return this.length = 0, this;
        },
            t = function t(e) {
            if ("function" != typeof e) throw new TypeError(e + " is not a function");return e;
        },
            _ = function _(e, n) {
            if (!(this instanceof _)) return new _(e, n);Object.defineProperties(this, { __list__: { writable: !0, value: e }, __context__: { writable: !0, value: n }, __nextIndex__: { writable: !0, value: 0 } }), n && (t(n.on), n.on("_add", this._onAdd.bind(this)), n.on("_delete", this._onDelete.bind(this)), n.on("_clear", this._onClear.bind(this)));
        };return Object.defineProperties(_.prototype, Object.assign({ constructor: { value: _, configurable: !0, enumerable: !1, writable: !0 }, _next: { value: function value() {
                    var e;if (this.__list__) return this.__redo__ && (e = this.__redo__.shift()) !== undefined ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind();
                }, configurable: !0, enumerable: !1, writable: !0 }, next: { value: function value() {
                    return this._createResult(this._next());
                }, configurable: !0, enumerable: !1, writable: !0 }, _createResult: { value: function value(e) {
                    return e === undefined ? { done: !0, value: undefined } : { done: !1, value: this._resolve(e) };
                }, configurable: !0, enumerable: !1, writable: !0 }, _resolve: { value: function value(e) {
                    return this.__list__[e];
                }, configurable: !0, enumerable: !1, writable: !0 }, _unBind: { value: function value() {
                    this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd.bind(this)), this.__context__.off("_delete", this._onDelete.bind(this)), this.__context__.off("_clear", this._onClear.bind(this)), this.__context__ = null);
                }, configurable: !0, enumerable: !1, writable: !0 }, toString: { value: function value() {
                    return "[object Iterator]";
                }, configurable: !0, enumerable: !1, writable: !0 } }, { _onAdd: { value: function value(e) {
                    if (!(e >= this.__nextIndex__)) {
                        if (++this.__nextIndex__, !this.__redo__) return void Object.defineProperty(this, "__redo__", { value: [e], configurable: !0, enumerable: !1, writable: !1 });this.__redo__.forEach(function (t, _) {
                            t >= e && (this.__redo__[_] = ++t);
                        }, this), this.__redo__.push(e);
                    }
                }, configurable: !0, enumerable: !1, writable: !0 }, _onDelete: { value: function value(e) {
                    var t;e >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (t = this.__redo__.indexOf(e), -1 !== t && this.__redo__.splice(t, 1), this.__redo__.forEach(function (t, _) {
                        t > e && (this.__redo__[_] = --t);
                    }, this)));
                }, configurable: !0, enumerable: !1, writable: !0 }, _onClear: { value: function value() {
                    this.__redo__ && e.call(this.__redo__), this.__nextIndex__ = 0;
                }, configurable: !0, enumerable: !1, writable: !0 } })), Object.defineProperty(_.prototype, Symbol.iterator, { value: function value() {
                return this;
            }, configurable: !0, enumerable: !1, writable: !0 }), Object.defineProperty(_.prototype, Symbol.toStringTag, { value: "Iterator", configurable: !1, enumerable: !1, writable: !0 }), _;
    }();!function () {
        if (!Object.setPrototypeOf) {
            var t,
                e,
                o = Object.getOwnPropertyNames,
                r = Object.getOwnPropertyDescriptor,
                n = Object.create,
                c = Object.defineProperty,
                _ = Object.getPrototypeOf,
                f = Object.prototype,
                O = function O(t, e) {
                return o(e).forEach(function (o) {
                    c(t, o, r(e, o));
                }), t;
            },
                p = function p(t, e) {
                return O(n(e), t);
            };try {
                t = r(f, "__proto__").set, t.call({}, null), e = function e(_e, o) {
                    return t.call(_e, o), _e;
                };
            } catch (u) {
                t = { __proto__: null }, t instanceof Object ? e = p : (t.__proto__ = f, e = t instanceof Object ? function (t, e) {
                    return t.__proto__ = e, t;
                } : function (t, e) {
                    return _(t) ? (t.__proto__ = e, t) : p(t, e);
                });
            }Object.setPrototypeOf = e;
        }
    }();if (!('includes' in String.prototype)) {
        String.prototype.includes = function (t, e) {
            if ("object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && t instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return -1 !== this.indexOf(t, e);
        };
    }if (!('contains' in String.prototype)) {
        String.prototype.contains = String.prototype.includes;
    }var ArrayIterator = function () {
        var e = function e(t, r) {
            if (!(this instanceof e)) return new e(t, r);Iterator.call(this, t), r = r ? String.prototype.contains.call(r, "key+value") ? "key+value" : String.prototype.contains.call(r, "key") ? "key" : "value" : "value", Object.defineProperty(this, "__kind__", { value: r, configurable: !1, enumerable: !1, writable: !1 });
        };return Object.setPrototypeOf && Object.setPrototypeOf(e, Iterator.prototype), e.prototype = Object.create(Iterator.prototype, { constructor: { value: e, configurable: !0, enumerable: !1, writable: !0 }, _resolve: { value: function value(e) {
                    return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e;
                }, configurable: !0, enumerable: !1, writable: !0 }, toString: { value: function value() {
                    return "[object Array Iterator]";
                }, configurable: !0, enumerable: !1, writable: !0 } }), e;
    }();if (!('isFinite' in Number)) {
        Number.isFinite = Number.isFinite || function (i) {
            return "number" == typeof i && isFinite(i);
        };
    }if (!('isNaN' in Number)) {
        Number.isNaN = Number.isNaN || function (N) {
            return "number" == typeof N && isNaN(N);
        };
    }if (!('from' in Array && function () {
        try {
            Array.from({ length: -Infinity });

            return true;
        } catch (e) {
            return false;
        }
    }())) {
        !function () {
            "use strict";
            function t(t) {
                var e = Number(t);return r(e) * Math.floor(Math.abs(Math.min(Math.max(e || 0, 0), 9007199254740991)));
            }function r(t) {
                return t >= 0 ? 1 : -1;
            }function e(t) {
                return "string" == typeof t || "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && (y ? i(t) : f.call(t) === l);
            }function n(t) {
                if (!t) return !1;if ("function" != typeof t && "object" != (typeof t === 'undefined' ? 'undefined' : _typeof(t))) return !1;if (y) return s(t);if (b(t)) return !1;var r = f.call(t);return r === g || r === d;
            }var o,
                a,
                u = Object.prototype.hasOwnProperty,
                c = String.prototype.valueOf,
                i = function i(t) {
                try {
                    return c.call(t), !0;
                } catch (r) {
                    return !1;
                }
            },
                f = Object.prototype.toString,
                l = "[object String]",
                p = "function" == typeof Symbol,
                y = p && "toStringTag" in Symbol,
                v = Function.prototype.toString,
                h = /^\s*class /,
                b = function b(t) {
                try {
                    var r = v.call(t),
                        e = r.replace(/\/\/.*\n/g, ""),
                        n = e.replace(/\/\*[.\s\S]*\*\//g, ""),
                        o = n.replace(/\n/gm, " ").replace(/ {2}/g, " ");return h.test(o);
                } catch (a) {
                    return !1;
                }
            },
                s = function s(t) {
                try {
                    return !b(t) && (v.call(t), !0);
                } catch (r) {
                    return !1;
                }
            },
                g = "[object Function]",
                d = "[object GeneratorFunction]",
                S = Array.isArray,
                j = function j(t) {
                var r,
                    e = !1,
                    n = [];if (t && "function" == typeof t.next) for (; !e;) {
                    if (r = t.next(), !u.call(r, "value") || !u.call(r, "done")) {
                        if (!0 === r.done) {
                            e = !0;break;
                        }break;
                    }if (!0 === r.done) {
                        e = !0;break;
                    }if (!1 !== r.done) break;n.push(r.value);
                }return !!e && n;
            },
                m = "function" == typeof Set,
                w = "function" == typeof Map;if (p) o = Symbol.iterator;else {
                var F;try {
                    F = Function("iterable", "var arr = []; for (var value of iterable) arr.push(value); return arr;");
                } catch (q) {}if (function () {
                    try {
                        var t = !1;return F({ "@@iterator": function iterator() {
                                return { next: function next() {
                                        return t = !0, { done: !0, value: undefined };
                                    } };
                            } }), t;
                    } catch (q) {
                        return !1;
                    }
                }()) o = "@@iterator";else if ("function" == typeof Set) {
                    var O = new Set();O.add(0);try {
                        1 === F(O).length && (a = F);
                    } catch (q) {}
                }
            }var D;if (m) {
                var M = Object.getOwnPropertyDescriptor(Set.prototype, "size").get;D = function D(t) {
                    try {
                        return M.call(t), !0;
                    } catch (q) {
                        return !1;
                    }
                };
            }var x;if (w) {
                var A = Object.getOwnPropertyDescriptor(Map.prototype, "size").get;x = function x(t) {
                    try {
                        return A.call(t), !0;
                    } catch (q) {
                        return !1;
                    }
                };
            }var k = m && Set.prototype.forEach,
                P = w && Map.prototype.forEach,
                E = function E(t) {
                var r = [];return u.call(t, o) ? t[o]() : k && D(t) ? (k.call(t, function (t) {
                    r.push(t);
                }), { next: function next() {
                        return 0 === r.length ? { done: !0 } : { value: r.splice(0, 1)[0], done: !1 };
                    } }) : P && x(t) ? (P.call(t, function (t, e) {
                    r.push([e, t]);
                }), { next: function next() {
                        return 0 === r.length ? { done: !0 } : { value: r.splice(0, 1)[0], done: !1 };
                    } }) : t;
            },
                T = String.prototype.match,
                z = function z(t) {
                var r = j(E(t));if (!r) if (e(t)) r = T.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];else if (a && !S(t)) try {
                    r = a(t);
                } catch (q) {}return r || t;
            };Object.defineProperty(Array, "from", { configurable: !0, value: function value(r) {
                    var e = this;if (null === r || void 0 === r) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");var o, a;if ("undefined" != typeof arguments[1]) {
                        if (o = arguments[1], !n(o)) throw new TypeError("When provided, the second argument to `Array.from` must be a function");arguments.length > 2 && (a = arguments[2]);
                    }for (var u, c, i = Object(z(r)), f = t(i.length), l = n(e) ? Object(new e(f)) : new Array(f), p = 0; p < f;) {
                        u = i[p], c = o ? void 0 === a ? o(u, p) : o.apply(a, [u, p]) : u, Object.defineProperty(l, p, { configurable: !0, enumerable: !0, value: c, writable: !0 }), p += 1;
                    }return l.length = f, l;
                }, writable: !0 });
        }();
    }!function (n) {
        function t(e) {
            if (r[e]) return r[e].exports;var o = r[e] = { exports: {}, id: e, loaded: !1 };return n[e].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports;
        }var r = {};t.m = n, t.c = r, t.p = "", t(0);
    }({ 0: function _(n, t, r) {
            (function (n) {
                var t = r(80);try {
                    (n || {}).Promise = t, window.Promise = t;
                } catch (e) {}
            }).call(t, function () {
                return this;
            }());
        }, 80: function _(n, t) {
            (function (t) {
                !function () {
                    "use strict";
                    function r() {
                        return en[B][G] || J;
                    }function e(n, t) {
                        for (var r in t) {
                            n[r] = t[r];
                        }
                    }function o(n) {
                        return n && "object" == (typeof n === 'undefined' ? 'undefined' : _typeof(n));
                    }function i(n) {
                        return "function" == typeof n;
                    }function u(n, t) {
                        return n instanceof t;
                    }function c(n) {
                        return u(n, U);
                    }function f(n, t, r) {
                        if (!t(n)) throw v(r);
                    }function s() {
                        try {
                            return C.apply(F, arguments);
                        } catch (e) {
                            return nn.e = e, nn;
                        }
                    }function a(n, t) {
                        return C = n, F = t, s;
                    }function l(n, t) {
                        function r() {
                            for (var r = 0; r < o;) {
                                t(e[r], e[r + 1]), e[r++] = S, e[r++] = S;
                            }o = 0, e.length > n && (e.length = n);
                        }var e = O(n),
                            o = 0;return function (n, t) {
                            e[o++] = n, e[o++] = t, 2 === o && en.nextTick(r);
                        };
                    }function h(n, t) {
                        var r,
                            e,
                            o,
                            c,
                            f = 0;if (!n) throw v(V);var s = n[en[B][D]];if (i(s)) e = s.call(n);else {
                            if (!i(n.next)) {
                                if (u(n, O)) {
                                    for (r = n.length; f < r;) {
                                        t(n[f], f++);
                                    }return f;
                                }throw v(V);
                            }e = n;
                        }for (; !(o = e.next()).done;) {
                            if ((c = a(t)(o.value, f++)) === nn) throw i(e[K]) && e[K](), c.e;
                        }return f;
                    }function v(n) {
                        return new TypeError(n);
                    }function _(n) {
                        return (n ? "" : W) + new U().stack;
                    }function d(n, t) {
                        var r = "on" + n.toLowerCase(),
                            e = H[r];I && I.listeners(n).length ? n === Z ? I.emit(n, t._v, t) : I.emit(n, t) : e ? e({ reason: t._v, promise: t }) : en[n](t._v, t);
                    }function p(n) {
                        return n && n._s;
                    }function w(n) {
                        if (p(n)) return new n(tn);var t, r, e;return t = new n(function (n, o) {
                            if (t) throw v();r = n, e = o;
                        }), f(r, i), f(e, i), t;
                    }function m(n, t) {
                        return function (r) {
                            A && (n[Q] = _(!0)), t === q ? T(n, r) : k(n, t, r);
                        };
                    }function y(n, t, r, e) {
                        return i(r) && (t._onFulfilled = r), i(e) && (n[M] && d(Y, n), t._onRejected = e), A && (t._p = n), n[n._c++] = t, n._s !== z && on(n, t), t;
                    }function j(n) {
                        if (n._umark) return !0;n._umark = !0;for (var t, r = 0, e = n._c; r < e;) {
                            if (t = n[r++], t._onRejected || j(t)) return !0;
                        }
                    }function x(n, t) {
                        function r(n) {
                            return e.push(n.replace(/^\s+|\s+$/g, ""));
                        }var e = [];return A && (t[Q] && r(t[Q]), function o(n) {
                            n && N in n && (o(n._next), r(n[N] + ""), o(n._p));
                        }(t)), (n && n.stack ? n.stack : n) + ("\n" + e.join("\n")).replace(rn, "");
                    }function g(n, t) {
                        return n(t);
                    }function k(n, t, r) {
                        var e = 0,
                            o = n._c;if (n._s === z) for (n._s = t, n._v = r, t === $ && (A && c(r) && (r.longStack = x(r, n)), un(n)); e < o;) {
                            on(n, n[e++]);
                        }return n;
                    }function T(n, t) {
                        if (t === n && t) return k(n, $, v(X)), n;if (t !== P && (i(t) || o(t))) {
                            var r = a(b)(t);if (r === nn) return k(n, $, r.e), n;i(r) ? (A && p(t) && (n._next = t), p(t) ? R(n, t, r) : en.nextTick(function () {
                                R(n, t, r);
                            })) : k(n, q, t);
                        } else k(n, q, t);return n;
                    }function b(n) {
                        return n.then;
                    }function R(n, t, r) {
                        var e = a(r, t)(function (r) {
                            t && (t = P, T(n, r));
                        }, function (r) {
                            t && (t = P, k(n, $, r));
                        });e === nn && t && (k(n, $, e.e), t = P);
                    }var S,
                        C,
                        F,
                        P = null,
                        E = "object" == (typeof window === 'undefined' ? 'undefined' : _typeof(window)),
                        H = E ? window : t,
                        I = H.process,
                        L = H.console,
                        A = !1,
                        O = Array,
                        U = Error,
                        $ = 1,
                        q = 2,
                        z = 3,
                        B = "Symbol",
                        D = "iterator",
                        G = "species",
                        J = B + "(" + G + ")",
                        K = "return",
                        M = "_uh",
                        N = "_pt",
                        Q = "_st",
                        V = "Invalid argument",
                        W = "\nFrom previous ",
                        X = "Chaining cycle detected for promise",
                        Y = "rejectionHandled",
                        Z = "unhandledRejection",
                        nn = { e: P },
                        tn = function tn() {},
                        rn = /^.+\/node_modules\/yaku\/.+\n?/gm,
                        en = n.exports = function (n) {
                        var t,
                            r = this;if (!o(r) || r._s !== S) throw v("Invalid this");if (r._s = z, A && (r[N] = _()), n !== tn) {
                            if (!i(n)) throw v(V);(t = a(n)(m(r, q), m(r, $))) === nn && k(r, $, t.e);
                        }
                    };en["default"] = en, e(en.prototype, { then: function then(n, t) {
                            if (void 0 === this._s) throw v();return y(this, w(en.speciesConstructor(this, en)), n, t);
                        }, "catch": function _catch(n) {
                            return this.then(S, n);
                        }, "finally": function _finally(n) {
                            function t(t) {
                                return en.resolve(n()).then(function () {
                                    return t;
                                });
                            }return this.then(t, t);
                        }, _c: 0, _p: P }), en.resolve = function (n) {
                        return p(n) ? n : T(w(this), n);
                    }, en.reject = function (n) {
                        return k(w(this), $, n);
                    }, en.race = function (n) {
                        var t = this,
                            r = w(t),
                            e = function e(n) {
                            k(r, q, n);
                        },
                            o = function o(n) {
                            k(r, $, n);
                        },
                            i = a(h)(n, function (n) {
                            t.resolve(n).then(e, o);
                        });return i === nn ? t.reject(i.e) : r;
                    }, en.all = function (n) {
                        function t(n) {
                            k(o, $, n);
                        }var r,
                            e = this,
                            o = w(e),
                            i = [];return r = a(h)(n, function (n, u) {
                            e.resolve(n).then(function (n) {
                                i[u] = n, --r || k(o, q, i);
                            }, t);
                        }), r === nn ? e.reject(r.e) : (r || k(o, q, []), o);
                    }, en.Symbol = H[B] || {}, a(function () {
                        Object.defineProperty(en, r(), { get: function get() {
                                return this;
                            } });
                    })(), en.speciesConstructor = function (n, t) {
                        var e = n.constructor;return e ? e[r()] || t : t;
                    }, en.unhandledRejection = function (n, t) {
                        L && L.error("Uncaught (in promise)", A ? t.longStack : x(n, t));
                    }, en.rejectionHandled = tn, en.enableLongStackTrace = function () {
                        A = !0;
                    }, en.nextTick = E ? function (n) {
                        setTimeout(n);
                    } : I.nextTick, en._s = 1;var on = l(999, function (n, t) {
                        var r, e;return e = n._s !== $ ? t._onFulfilled : t._onRejected, e === S ? void k(t, n._s, n._v) : (r = a(g)(e, n._v), r === nn ? void k(t, $, r.e) : void T(t, r));
                    }),
                        un = l(9, function (n) {
                        j(n) || (n[M] = 1, d(Z, n));
                    });
                }();
            }).call(t, function () {
                return this;
            }());
        } });
}).call('object' === (typeof window === 'undefined' ? 'undefined' : _typeof(window)) && window || 'object' === (typeof self === 'undefined' ? 'undefined' : _typeof(self)) && self || 'object' === (typeof global === 'undefined' ? 'undefined' : _typeof(global)) && global || {});
window.NDSU = {};

if (!NDSU.fullOverlayElement) {
    var fullOverlay = document.createElement('div');
    fullOverlay.className = 'full-overlay';
    fullOverlay.setAttribute('role', 'presentation');
    fullOverlay.addEventListener('click', function (e) {
        if (fullOverlay.offsetHeight !== 0) {
            NDSU.hideOverlay();
        }
    });

    NDSU.fullOverlayElement = fullOverlay;
    document.body.appendChild(NDSU.fullOverlayElement);
}

NDSU.contentElement = document.getElementById('content');

NDSU.showOverlay = function (overlayLevel) {
    NDSU.fullOverlayElement.classList.add('active');
    if (overlayLevel) {
        NDSU.fullOverlayElement.classList.add(overlayLevel);
    }
    document.body.style.overflow = 'hidden';
};
NDSU.hideOverlay = function (overlayLevel) {
    NDSU.fullOverlayElement.classList.remove('active');
    if (overlayLevel) {
        NDSU.fullOverlayElement.classList.remove(overlayLevel);
    }
    document.body.style.overflow = '';
};

// From https://www.w3.org/WAI/tutorials/carousels/examples/carousel/

/* Focusin/out event polyfill (for Firefox) by nuxodin
 * Source: https://gist.github.com/nuxodin/9250e56a3ce6c0446efa
 */

!function () {
    var w = window,
        d = w.document;

    if (w.onfocusin === undefined) {
        d.addEventListener('focus', addPolyfill, true);
        d.addEventListener('blur', addPolyfill, true);
        d.addEventListener('focusin', removePolyfill, true);
        d.addEventListener('focusout', removePolyfill, true);
    }
    function addPolyfill(e) {
        var type = e.type === 'focus' ? 'focusin' : 'focusout';
        var event = new CustomEvent(type, { bubbles: true, cancelable: false });
        event.c1Generated = true;
        e.target.dispatchEvent(event);
    }
    function removePolyfill(e) {
        if (!e.c1Generated) {
            // focus after focusin, so chrome will the first time trigger tow times focusin
            d.removeEventListener('focus', addPolyfill, true);
            d.removeEventListener('blur', addPolyfill, true);
            d.removeEventListener('focusin', removePolyfill, true);
            d.removeEventListener('focusout', removePolyfill, true);
        }
        setTimeout(function () {
            d.removeEventListener('focusin', removePolyfill, true);
            d.removeEventListener('focusout', removePolyfill, true);
        });
    }
}();

/* Carousel by Eric Eggert for W3C */

var myCarousel = function myCarousel() {

    "use strict";

    // Some variables for the instance of the carousel

    var carousel,
        slides,
        index,
        slidenav,
        settings,
        timer,
        setFocus,
        animationSuspended,
        announceSlide = 'false';

    // Helper function for removing classes
    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    // Helper function for detecting if an element has a class
    function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    }

    // Initialization for the carousel
    // Argument: set = an object of settings
    // Possible settings:
    // id <string> ID of the carousel wrapper element (required).
    // slidenav <bool> If true, a list of slides is shown.
    // animate <bool> If true, the slides can be animated.
    // startAnimated <bool> If true, the animation begins
    //                        immediately.
    //                      If false, the animation needs
    //                        to be initiated by clicking
    //                        the play button.
    // pause <int> number of ms the slide will pause at a slide
    function init(set) {
        // Make settings available to all functions
        settings = set;
        settings.pause = settings.pause || 5000;

        // Select the element and the individual slides
        carousel = document.getElementById(settings.id);
        slides = carousel.querySelectorAll('.slide');

        carousel.className = 'active carousel';

        // Add the previous/next controls
        var ctrls = document.createElement('ul');

        ctrls.className = 'controls';
        ctrls.innerHTML = '<li>' + '<button type="button" class="btn-prev"><span class="sr-only">Previous Slide</span>&lsaquo;</button>' + '</li>' + '<li>' + '<button type="button" class="btn-next"><span class="sr-only">Next Slide</span>&rsaquo;</button>' + '</li>';

        ctrls.querySelector('.btn-prev').addEventListener('click', prevSlide);
        ctrls.querySelector('.btn-next').addEventListener('click', nextSlide);

        carousel.appendChild(ctrls);

        // Add list of slides and/or play/pause button
        if (settings.slidenav || settings.animate) {
            slidenav = document.createElement('ul');

            slidenav.className = 'slidenav';

            var li = document.createElement('li');

            if (settings.animate) {

                // Add Play/Pause button if the slider is animated

                if (settings.startAnimated) {
                    li.innerHTML = '<button data-stop=true><span class="sr-only">Stop Animation </span>⏸</button>';
                } else {
                    li.innerHTML = '<button data-start=true><span class="sr-only">Start Animation </span>▶</button>';
                }

                slidenav.appendChild(li);
            }

            if (settings.slidenav) {

                // Add button for each slide if slidenav = true
                for (var i = slides.length - 1; i >= 0; i--) {
                    var klass = i === 0 ? 'class="current" ' : '';
                    var kurrent = i === 0 ? ' <span class="sr-only">(Current Slide)</span>' : '';

                    li.innerHTML = '<button ' + klass + 'data-slide="' + i + '"><span class="sr-only">News</span> ' + (i + 1) + kurrent + '</button>';
                    slidenav.appendChild(li);
                }
            }

            // Register click event on the slidenav
            slidenav.addEventListener('click', function (event) {
                var button = event.target;
                if (button.localName == 'button') {
                    if (button.getAttribute('data-slide')) {
                        // If the button is from the slide list,
                        // stop the animation and go to the slide
                        stopAnimation();
                        setSlides(button.getAttribute('data-slide'), true);
                    } else if (button.getAttribute('data-stop')) {
                        // Stop animation if the stop button is activated
                        stopAnimation();
                    } else if (button.getAttribute('data-start')) {
                        // Start animation if the stop button is activated
                        startAnimation();
                    }
                }
            }, true);

            carousel.className = 'active carousel with-slidenav';
            carousel.appendChild(slidenav);
        }

        // Register a transitionend event so the slides can be
        // hidden after the transition
        slides[0].parentNode.addEventListener('transitionend', function (event) {
            var slide = event.target;
            removeClass(slide, 'in-transition');
            if (hasClass(slide, 'current')) {
                // Also, if the global setFocus variable is set
                // and the transition ended on the current slide,
                // set the focus on this slide.
                if (setFocus) {
                    // This is done if the user clicks a slidenav button.
                    slide.setAttribute('tabindex', '-1');
                    slide.focus();
                    setFocus = false;
                }
                if (announceSlide) {
                    slide.removeAttribute('aria-live');
                    announceSlide = false;
                }
            }
        });

        // Suspend the animation if the mouse enters the carousel
        // or if an element of the carousel (that is not the current
        // slide) receives focus.
        // (Re-)start animation when the mouse leaves or the focus
        // is removed.
        carousel.addEventListener('mouseenter', suspendAnimation);
        carousel.addEventListener('mouseleave', continueAnimation);

        carousel.addEventListener('focusin', function (event) {
            if (!hasClass(event.target, 'slide')) {
                suspendAnimation();
            }
        });
        carousel.addEventListener('focusout', function (event) {
            if (!hasClass(event.target, 'slide')) {
                continueAnimation();
            }
        });

        // Add arrow keys handler 
        carousel.addEventListener('keydown', function (event) {
            if (event.which == 37) {
                event.preventDefault();
                prevSlide();
            } else if (event.which == 39) {
                event.preventDefault();
                nextSlide();
            }
        });

        // Set the index (=current slide) to 0 – the first slide
        index = 0;
        setSlides(index);

        // If the carousel is animated, advance to the
        // next slide after 5s
        if (settings.startAnimated) {
            clearTimeout(timer);
            timer = setTimeout(nextSlide, settings.pause);
        }
    }

    // Function to set a slide the current slide
    function setSlides(new_current, focus, transition) {
        // Both, focus and transition are optional parameters.
        // focus denotes if the focus should be set after the
        // carousel advanced to slide number new_current.
        // transition denotes if the transition is going into the
        // next or previous direction.
        // Here defaults are set:
        setFocus = typeof focus !== 'undefined' ? focus : false;
        transition = typeof transition !== 'undefined' ? transition : 'none';

        new_current = parseFloat(new_current);

        var length = slides.length;
        var new_next = new_current + 1;
        var new_prev = new_current - 1;

        // If the next slide number is equal to the length,
        // the next slide should be the first one of the slides.
        // If the previous slide number is less than 0.
        // the previous slide is the last of the slides.
        if (new_next === length) {
            new_next = 0;
        } else if (new_prev < 0) {
            new_prev = length - 1;
        }

        // Reset slide classes
        for (var i = slides.length - 1; i >= 0; i--) {
            slides[i].className = "slide";
        }

        // Add classes to the previous, next and current slide
        slides[new_next].className = 'next slide';
        if (transition == 'next') {
            slides[new_next].className = 'next slide in-transition';
            slides[new_next].setAttribute('aria-hidden', 'true');
        }

        slides[new_prev].className = 'prev slide';
        if (transition == 'prev') {
            slides[new_prev].className = 'prev slide in-transition';
            slides[new_next].setAttribute('aria-hidden', 'true');
        }

        slides[new_current].className = 'current slide';
        slides[new_current].removeAttribute('aria-hidden');

        if (announceSlide) {
            slides[new_current].setAttribute('aria-live', 'polite');
        }

        // Update the slidenav buttons
        if (settings.slidenav) {
            var buttons = carousel.querySelectorAll('.slidenav button[data-slide]');
            for (var j = buttons.length - 1; j >= 0; j--) {
                buttons[j].className = '';
                buttons[j].innerHTML = '<span class="sr-only">News</span> ' + (j + 1);
            }
            buttons[new_current].className = "current";
            buttons[new_current].innerHTML = '<span class="sr-only">News</span> ' + (new_current + 1) + ' <span class="sr-only">(Current Slide)</span>';
        }

        // Set the global index to the new current value
        index = new_current;
    }

    // Function to advance to the next slide
    function nextSlide() {

        var length = slides.length,
            new_current = index + 1;

        if (new_current === length) {
            new_current = 0;
        }

        announceSlide = true;

        // If we advance to the next slide, the previous needs to be
        // visible to the user, so the third parameter is 'prev', not
        // next.
        setSlides(new_current, false, 'prev');

        // If the carousel is animated, advance to the next
        // slide after 5s
        if (settings.animate) {
            clearTimeout(timer);
            timer = setTimeout(nextSlide, settings.pause);
        }
    }

    // Function to advance to the previous slide
    function prevSlide() {
        var length = slides.length,
            new_current = index - 1;

        if (new_current < 0) {
            new_current = length - 1;
        }

        announceSlide = true;

        // If we advance to the previous slide, the next needs to be
        // visible to the user, so the third parameter is 'next', not
        // prev.
        setSlides(new_current, false, 'next');
    }

    // Function to stop the animation
    function stopAnimation() {
        clearTimeout(timer);
        settings.animate = false;
        animationSuspended = false;
        var _this = carousel.querySelector('[data-stop], [data-start]');
        _this.innerHTML = '<span class="sr-only">Start Animation </span>▶';
        _this.removeAttribute('data-stop');
        _this.setAttribute('data-start', 'true');
    }

    // Function to start the animation
    function startAnimation() {
        settings.animate = true;
        animationSuspended = false;
        clearTimeout(timer);
        timer = setTimeout(function () {
            nextSlide();
        }, settings.pause);
        var _this = carousel.querySelector('[data-stop], [data-start]');
        _this.innerHTML = '<span class="sr-only">Stop Animation </span>⏸';
        _this.setAttribute('data-stop', 'true');
        _this.removeAttribute('data-start');
    }

    // Function to suspend the animation
    function suspendAnimation() {
        if (settings.animate) {
            clearTimeout(timer);
            animationSuspended = true;
        }
    }

    function continueAnimation() {
        animationSuspended = false;
        if (settings.animate) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                nextSlide();
            }, settings.pause);
        }
    }

    // Making some functions public
    return {
        init: init,
        next: nextSlide,
        prev: prevSlide,
        goto: setSlides,
        stop: stopAnimation,
        start: startAnimation
    };
};

var GalleryBaseObj = function GalleryBaseObj(baseElement) {
    _classCallCheck(this, GalleryBaseObj);

    this.element = baseElement;
};

;

var Gallery = function (_GalleryBaseObj) {
    _inherits(Gallery, _GalleryBaseObj);

    function Gallery(galleryElement) {
        _classCallCheck(this, Gallery);

        var _this2 = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, galleryElement));

        _this2.pictureLinks = Array.from(_this2.element.querySelectorAll('.gallery-item')).map(function (link) {
            return new GalleryPictureLink(link);
        });
        return _this2;
    }

    return Gallery;
}(GalleryBaseObj);

;

var GalleryPictureLink = function (_GalleryBaseObj2) {
    _inherits(GalleryPictureLink, _GalleryBaseObj2);

    _createClass(GalleryPictureLink, [{
        key: 'openPopup',
        value: function openPopup() {
            var _this4 = this;

            NDSU.showOverlay(this.overlayLevel);
            var el = NDSU.fullOverlayElement;
            var containerEl = el.querySelector('.gallery-full-size');
            var imgEl = el.querySelector('.gallery-full-size img');
            var closeEl = el.querySelector('.gallery-full-size .close-button');
            if (!containerEl) {
                containerEl = document.createElement('div');
                containerEl.className = 'gallery-full-size';
                containerEl.setAttribute('role', 'dialog');
                imgEl = document.createElement('img');

                closeEl = document.createElement('a');
                closeEl.setAttribute('href', '#');
                closeEl.className = 'btn  btn-tiny close-button';
                closeEl.innerText = 'Close';
                closeEl.addEventListener('click', function (event) {
                    event.preventDefault();
                    _this4.closePopup();
                });

                containerEl.appendChild(closeEl);
                containerEl.appendChild(imgEl);
                el.appendChild(containerEl);
            };

            imgEl.setAttribute('src', this.fullSizeImageSrc);
            imgEl.setAttribute('alt', this.imageDesc);

            var elId = this.element.getAttribute('id');

            if (!elId) {
                elId = 'parentLink_' + Math.random().toString(36).substr(2, 10);
                this.element.setAttribute('id', elId);
            }

            containerEl.classList.add('active');
            closeEl.setAttribute('data-parent-control', elId);
            closeEl.focus();
        }
    }, {
        key: 'closePopup',
        value: function closePopup() {
            NDSU.hideOverlay(this.overlayLevel);
            var el = NDSU.fullOverlayElement;
            var containerEl = el.querySelector('.gallery-full-size');
            var closeEl = el.querySelector('.gallery-full-size .close-button');
            if (containerEl) {
                containerEl.classList.remove('active');
            }
            if (closeEl) {
                var parentId = closeEl.getAttribute('data-parent-control');
                var parentEl = document.getElementById(parentId);
                if (parentEl) parentEl.focus();
            }
        }
    }], [{
        key: 'setEvents',
        value: function setEvents(inst) {
            inst.element.addEventListener('click', function (event) {
                event.preventDefault();
                inst.openPopup();
            });
            NDSU.fullOverlayElement.addEventListener('click', inst.closePopup);
        }
    }]);

    function GalleryPictureLink(pictureLinkElement) {
        _classCallCheck(this, GalleryPictureLink);

        var _this3 = _possibleConstructorReturn(this, (GalleryPictureLink.__proto__ || Object.getPrototypeOf(GalleryPictureLink)).call(this, pictureLinkElement));

        _this3.imageElement = _this3.element.querySelector('img');
        if (!_this3.imageElement) return _possibleConstructorReturn(_this3);

        _this3.imageSrc = _this3.imageElement.getAttribute('src');
        _this3.imageDesc = _this3.imageElement.getAttribute('alt');
        _this3.fullSizeImageSrc = _this3.imageElement.getAttribute('data-full-size-src') || _this3.imageSrc;
        _this3.overlayLevel = 'high';

        if (_this3.element.querySelector('a')) return _possibleConstructorReturn(_this3);

        _this3.element.setAttribute('aria-haspopup', true);
        GalleryPictureLink.setEvents(_this3);
        return _this3;
    }

    return GalleryPictureLink;
}(GalleryBaseObj);

;

NDSU.galleries = Array.from(document.querySelectorAll('.gallery')).map(function (galleryElement) {
    return new Gallery(galleryElement);
});

function timeoutPromise(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Timeout!");
        }, delay);
    });
};

function detectAutoPlay() {
    var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;


    var autoPlayDetection = new Promise(function (resolve, reject) {
        // AUTOPLAY detection from https://gist.github.com/mrcoles/5537536
        // Audio file data URIs from comments in
        // [this gist](https://gist.github.com/westonruter/253174)
        // via [mudcube](https://github.com/mudcube)
        var mp3 = 'data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';

        var ogg = 'data:audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=';

        try {
            var audio = new Audio();
            var src = audio.canPlayType('audio/ogg') ? ogg : mp3;
            audio.autoplay = true;
            audio.volume = 0;

            // this will only be triggered if autoplay works
            audio.addEventListener('play', function () {
                resolve(true);
            });

            audio.src = src;
        } catch (e) {
            reject(e);
        }
    });

    return Promise.race([autoPlayDetection, timeoutPromise(delay)]).then(function () {
        return true;
    }, function () {
        return Promise.reject('AUTOPLAY not detected within the specified timeframe');
    });
};

function onYouTubeIframeAPIReady() {
    var onYtPlayerReady = function onYtPlayerReady(e) {
        e.target.setVolume(0);
        e.target.mute();
    };

    var onYtPlayerStateChange = function onYtPlayerStateChange(e) {
        if (e.data === YT.PlayerState.PLAYING) {
            var iframeElement = e.target.getIframe();
            iframeElement.style.opacity = "1";
        } else if (e.data === YT.PlayerState.ENDED) {
            var ytPlayer = e.target;
            ytPlayer.seekTo(ytPlayer.getDuration() - 0.08);
            ytPlayer.pauseVideo();
        }
    };

    var heroBannerElements = document.querySelectorAll('.hero-banner[data-video-id]');
    NDSU.ytPlayers = Array.prototype.map.call(heroBannerElements, function (heroBanner) {
        var videoId = heroBanner.getAttribute('data-video-id');
        // let videoPosterUrl = heroBanner.getAttribute('data-video-poster');

        var playerContainer = document.createElement('div');
        playerContainer.className = 'yt-player';

        // let posterElement = document.createElement('div');
        // posterElement.className = 'poster';
        // posterElement.style.backgroundImage = 'url(' + videoPosterUrl + ')';

        var playerElement = document.createElement('div');
        var playerElementId = 'ytPlayer_' + Math.random().toString(36).substr(2, 10);
        playerElement.id = playerElementId;

        heroBanner.appendChild(playerContainer);
        // playerContainer.appendChild(posterElement);
        playerContainer.appendChild(playerElement);

        return new YT.Player(playerElementId, {
            height: '720',
            width: '1280',
            videoId: videoId,
            events: {
                'onReady': onYtPlayerReady,
                'onStateChange': onYtPlayerStateChange
            },
            playerVars: {
                autoplay: 1,
                cc_load_pollicy: 0,
                controls: 0,
                disablekb: 1,
                enablejsapi: 1,
                fs: 0,
                iv_load_policy: 3,
                loop: 0,
                origin: window.location.hostname,
                rel: 0,
                showinfo: 0
            }
        });
    });
};

detectAutoPlay(1000).then(function (autoplay) {
    if (!autoplay) return;

    var heroBannerElements = document.querySelectorAll('.hero-banner[data-video-id]');
    if (!heroBannerElements.length) return;

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}, function (error) {
    console.log(error);
});

var NavBaseClass = function () {
    _createClass(NavBaseClass, [{
        key: 'setRole',
        value: function setRole(value) {
            this.element.setAttribute('role', value);
        }
    }]);

    function NavBaseClass(baseElement) {
        _classCallCheck(this, NavBaseClass);

        this.element = baseElement;
    }

    return NavBaseClass;
}();

;

var Navbar = function (_NavBaseClass) {
    _inherits(Navbar, _NavBaseClass);

    _createClass(Navbar, [{
        key: '_setRoles',
        value: function _setRoles() {
            if (this.parentNavItem) {
                this.setRole('menu');
                this.parentNavItem.element.classList.add('nav-item-haschild');
                if (this.isDropUp) {
                    this.parentNavItem.element.classList.add('nav-item-haschild-up');
                }
            } else {
                this.setRole('menubar');
            }
        }
    }, {
        key: 'getNextNavItem',
        value: function getNextNavItem(currentNavItem) {
            var increment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var currentIndex = Array.prototype.indexOf.call(this.childNavItems, currentNavItem);
            if (currentIndex === -1) return undefined;

            var nextIndex = currentIndex + increment;
            return nextIndex < this.childNavItems.length ? this.childNavItems[nextIndex] : undefined;
        }
    }, {
        key: 'getPreviousNavItem',
        value: function getPreviousNavItem(currentNavItem) {
            return this.getNextNavItem(currentNavItem, -1);
        }
    }, {
        key: 'setOffset',
        value: function setOffset() {
            if (!this.parentNavItem) return;

            if (this.isVerticalNavbar) {
                var currentEl = this.element;
                var boundingRect = currentEl.getBoundingClientRect();
                if (document.body.clientWidth - (boundingRect.x + boundingRect.width) < 0) {
                    currentEl.style.left = 'auto';
                    currentEl.style.right = 0;
                }
                return;
            }

            var parentEl = this.parentNavItem.element;
            var elStyle = window.getComputedStyle(parentEl);

            var elHeight = parentEl.offsetHeight;

            if (this.isDropUp) {
                elHeight += parseInt(elStyle.marginTop);
                this.element.style.bottom = elHeight + 'px';
            } else {
                elHeight += parseInt(elStyle.marginBottom);
                this.element.style.top = elHeight + 'px';
            }

            if (this.isExtendedChildNavbar) {
                var rootNavbar = this.parentNavItem.parentNavbar;
                if (rootNavbar && rootNavbar.element) {
                    var destLeft = -parentEl.offsetLeft;
                    var elWidth = rootNavbar.element.offsetWidth;

                    this.element.style.left = -parentEl.offsetLeft + 'px';
                    this.element.style.minWidth = elWidth + 'px';
                }
            } else {
                var _elWidth = parentEl.offsetWidth;
                this.element.style.minWidth = _elWidth + 'px';
            }
        }
    }, {
        key: 'getNavItems',
        value: function getNavItems() {
            var _this6 = this;

            return Array.from(this.element.children).filter(function (child) {
                return child.classList.contains('nav-item');
            }).map(function (navItemElement) {
                return new NavItem(navItemElement, _this6);
            });
        }
    }, {
        key: 'isVerticalNavbar',
        get: function get() {
            return this.options.direction === 'vertical';
        }
    }, {
        key: 'isDropUp',
        get: function get() {
            return this.options.dropup;
        }
    }, {
        key: 'isExtendedChildNavbar',
        get: function get() {
            return this.options.extendedChildNavbar;
        }
    }, {
        key: 'isAccordion',
        get: function get() {
            return this.options.accordion;
        }
    }, {
        key: 'isOpen',
        get: function get() {
            return !this.isAccordion || this.element.classList.contains('expanded');
        }
    }]);

    function Navbar(navbarElement, parentNavItem) {
        _classCallCheck(this, Navbar);

        var _this5 = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, navbarElement));

        _this5.parentNavItem = parentNavItem;

        var isVerticalNavbar = navbarElement.classList.contains('navbar-vertical');
        var isDropUp = navbarElement.classList.contains('dropup');
        var isExtendedChildNavbar = navbarElement.classList.contains('extended-child-navbar');
        var isAccordion = navbarElement.classList.contains('accordion') || _this5.parentNavItem && _this5.parentNavItem.isAccordion;

        _this5.options = {
            autoCollapse: true,
            direction: isVerticalNavbar ? 'vertical' : 'horizontal',
            dropup: isDropUp,
            accordion: isAccordion,
            extendedChildNavbar: isExtendedChildNavbar
        };

        _this5.childNavItems = _this5.getNavItems();
        _this5._setRoles();
        return _this5;
    }

    return Navbar;
}(NavBaseClass);

;

var MobileNavbar = function (_Navbar) {
    _inherits(MobileNavbar, _Navbar);

    _createClass(MobileNavbar, [{
        key: 'getNavItems',
        value: function getNavItems() {
            var _this8 = this;

            return Array.from(this.element.children).filter(function (child) {
                return child.classList.contains('nav-item');
            }).map(function (navItemElement) {
                return new MobileNavItem(navItemElement, _this8);
            });
        }
    }, {
        key: 'setOffset',
        value: function setOffset() {
            if (!this.containerElement) return;

            var el = this.containerElement;
            var elStyle = window.getComputedStyle(el);

            var elHeight = el.offsetHeight;
            var windowHeight = window.innerHeight;
            this.element.style.maxHeight = windowHeight - elHeight + 'px';

            if (this.isDropUp) {
                elHeight += parseInt(elStyle.marginTop);
                this.element.style.bottom = elHeight + 'px';
            } else {
                elHeight += parseInt(elStyle.marginBottom);
                this.element.style.top = elHeight + 'px';
            }
        }
    }, {
        key: 'setToggleElement',
        value: function setToggleElement() {
            if (this.toggleElement) {
                this.toggleElement.setAttribute('aria-haspopup', true);
                this.toggleElement.setAttribute('aria-expanded', false);
                this.toggleElement.addEventListener('click', this.clickEvent);
                NDSU.fullOverlayElement.addEventListener('click', this.closeMenu);
            }
        }
    }], [{
        key: '_clickEvent',
        value: function _clickEvent(e, inst) {
            e.preventDefault();

            if (inst.element.offsetHeight === 0) {
                inst.openMenu();
            } else {
                inst.closeMenu();
            }
            e.stopPropagation();
        }
    }, {
        key: '_openMenu',
        value: function _openMenu(inst) {
            NDSU.showOverlay();
            inst.element.classList.add('expanded');
            inst.toggleElement.setAttribute('aria-expanded', true);
            inst.setOffset();
        }
    }, {
        key: '_closeMenu',
        value: function _closeMenu(inst) {
            inst.element.classList.remove('expanded');
            inst.toggleElement.setAttribute('aria-expanded', false);
            NDSU.hideOverlay();
        }
    }]);

    function MobileNavbar(navbarElement, parentNavItem, navbarContainerElement, navbarToggleElement) {
        _classCallCheck(this, MobileNavbar);

        var _this7 = _possibleConstructorReturn(this, (MobileNavbar.__proto__ || Object.getPrototypeOf(MobileNavbar)).call(this, navbarElement, parentNavItem));

        _this7.containerElement = navbarContainerElement;
        _this7.toggleElement = navbarToggleElement;

        _this7.openMenu = function () {
            return MobileNavbar._openMenu(_this7);
        };
        _this7.closeMenu = function () {
            return MobileNavbar._closeMenu(_this7);
        };
        _this7.clickEvent = function (e) {
            return MobileNavbar._clickEvent(e, _this7);
        };

        _this7.setToggleElement();
        return _this7;
    }

    return MobileNavbar;
}(Navbar);

;

var NavItem = function (_NavBaseClass2) {
    _inherits(NavItem, _NavBaseClass2);

    _createClass(NavItem, [{
        key: '_getChildNavbar',
        value: function _getChildNavbar() {
            var childNavbarElement = this.element.querySelector('.child-navbar');
            return childNavbarElement ? new Navbar(childNavbarElement, this) : undefined;
        }
    }, {
        key: '_getLinkElement',
        value: function _getLinkElement() {

            var linkElement = Array.prototype.filter.call(this.element.children, function (child) {
                return child.classList.contains('nav-link');
            })[0];
            if (linkElement) return linkElement;

            var titleElement = this.element.querySelector('.child-section-title');
            if (!titleElement) return linkElement;

            var title = titleElement.innerText;
            linkElement = document.createElement('a');
            linkElement.href = '#';
            linkElement.innerText = title;
            linkElement.className = 'nav-link';

            this.element.insertBefore(linkElement, this.element.firstChild);

            return linkElement;
        }
    }, {
        key: '_setEventListeners',
        value: function _setEventListeners() {
            var _this10 = this;

            if (!this.parentNavbar.isExtendedChildNavbar && !this.isAccordion) {
                this.element.addEventListener('focusin', this.focusInListener);
                this.element.addEventListener('focusout', this.focusOutListener);
                this.element.addEventListener('mouseenter', this.mouseInListener);
                this.element.addEventListener('mouseleave', this.focusOutListener);
            }

            this.element.addEventListener('keydown', function (e) {
                return NavItem._keysListener(e, _this10);
            });
        }
    }, {
        key: '_setRoles',
        value: function _setRoles() {
            this.setRole('presentation');
            if (this.linkElement) {
                this.linkElement.setAttribute('role', 'menuitem');
            }
            if (this.childNavbar && this.linkElement) {
                this.linkElement.setAttribute('aria-haspopup', true);
                var elId = this.linkElement.getAttribute('id');
                if (!elId) {
                    elId = 'parentLink_' + Math.random().toString(36).substr(2, 10);
                    this.linkElement.setAttribute('id', elId);
                }

                this.childNavbar.element.setAttribute('aria-labelledby', elId);
                this.linkElement.setAttribute('aria-expanded', false);
            }
        }
    }, {
        key: 'focus',
        value: function focus() {
            if (this.linkElement) {
                this.linkElement.focus();
            } else if (this.childNavbar && this.childNavbar.childNavItems.length) {
                this.childNavbar.childNavItems[0].focus();
            }
        }
    }, {
        key: 'open',
        value: function open() {
            NavItem._open(this);
        }
    }, {
        key: 'openChild',
        value: function openChild() {
            NavItem._open(this.childNavbar);
        }
    }, {
        key: 'close',
        value: function close() {
            NavItem._close(this);
        }
    }, {
        key: 'closeChild',
        value: function closeChild() {
            NavItem._close(this.childNavbar);
        }
    }, {
        key: 'closeTimeout',
        get: function get() {
            return 200;
        }
    }, {
        key: 'previousNavItem',
        get: function get() {
            return this.parentNavbar.getPreviousNavItem(this) || this.parentNavbar.parentNavItem;
        }
    }, {
        key: 'nextNavItem',
        get: function get() {
            return this.parentNavbar.getNextNavItem(this);
        }
    }, {
        key: 'parentNavItem',
        get: function get() {
            return this.parentNavbar.parentNavItem;
        }
    }, {
        key: 'firstChildNavItem',
        get: function get() {
            if (!this.childNavbar) return undefined;
            return this.childNavbar.childNavItems[0];
        }
    }, {
        key: 'leftNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (!this.parentNavbar.isVerticalNavbar) {
                neighbor = this.previousNavItem;
            } else if (this.parentNavItem) {
                var parentItem = this.parentNavItem;
                neighbor = parentItem.parentNavbar.getPreviousNavItem(parentItem) || parentItem;
            }
            return neighbor;
        }
    }, {
        key: 'rightNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (!this.parentNavbar.isVerticalNavbar) {
                neighbor = this.nextNavItem;
            } else if (this.parentNavItem) {
                var parentItem = this.parentNavItem;
                neighbor = parentItem.parentNavbar.getNextNavItem(parentItem) || parentItem;
            }

            return neighbor;
        }
    }, {
        key: 'downNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (this.parentNavbar.isVerticalNavbar) {
                if (this.parentNavbar.isDropUp) {
                    neighbor = this.nextNavItem || this._parentNavItem;
                } else {
                    neighbor = this.nextNavItem;
                }
            } else {
                neighbor = this.firstChildNavItem;
            }
            return neighbor;
        }
    }, {
        key: 'upNeighbor',
        get: function get() {
            var neighbor = void 0;
            if (this.parentNavbar.isVerticalNavbar) {
                if (this.parentNavbar.isDropUp) {
                    neighbor = this.previousNavItem;
                } else {
                    neighbor = this.previousNavItem || this._parentNavItem;
                }
            } else if (this.parentNavbar.isExtendedChildNavbar && !this.parentNavbar.isDropUp) {
                neighbor = this.parentNavItem;
            }
            return neighbor;
        }
    }, {
        key: 'isAccordion',
        get: function get() {
            return this.parentNavbar.isAccordion;
        }
    }, {
        key: 'isChildOpen',
        get: function get() {
            return this.childNavbar && this.childNavbar.isOpen;
        }
    }], [{
        key: '_open',
        value: function _open(inst) {
            if (!inst || !inst.element) return;
            inst.element.classList.add('expanded');
            inst.setOffset();
            if (inst.parentNavItem) {
                inst.parentNavItem.linkElement.setAttribute('aria-expanded', true);
            }
        }
    }, {
        key: '_close',
        value: function _close(inst) {
            if (!inst || !inst.element) return;
            inst.element.classList.remove('expanded');
            if (inst.parentNavItem) {
                inst.parentNavItem.linkElement.setAttribute('aria-expanded', false);
            }
        }
    }, {
        key: '_keysListener',
        value: function _keysListener(e, inst) {
            e.stopPropagation();
            var nextItem = void 0;
            if (e.which === 37) {
                nextItem = inst.leftNeighbor;
            } else if (e.which === 38) {
                nextItem = inst.upNeighbor;
            } else if (e.which === 39) {
                nextItem = inst.rightNeighbor;
            } else if (e.which === 40) {
                nextItem = inst.downNeighbor;
            }

            if (nextItem) {
                e.preventDefault();
                nextItem.focus();
            }
        }
    }, {
        key: '_focusInEvent',
        value: function _focusInEvent(e, inst) {
            inst.openChild();
            if (inst.closeTimeoutinst) {
                clearTimeout(inst.closeTimeoutinst);
            }
        }
    }, {
        key: '_focusOutEvent',
        value: function _focusOutEvent(e, inst) {
            inst.closeTimeoutinst = setTimeout(function () {
                inst.closeChild();
            }, inst.closeTimeout);
        }
    }]);

    function NavItem(navItemElement, parentNavbar) {
        _classCallCheck(this, NavItem);

        var _this9 = _possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).call(this, navItemElement));

        _this9.parentNavbar = parentNavbar;
        _this9.linkElement = _this9._getLinkElement();
        _this9.childNavbar = _this9._getChildNavbar();

        _this9.closeTimeoutinst;
        _this9.focusInListener = function (e) {
            if (_this9.parentNavbar.options.autoCollapse) {
                NavItem._focusInEvent(e, _this9);
            }
        };

        _this9.mouseInListener = function (e) {
            return NavItem._focusInEvent(e, _this9);
        };

        _this9.focusOutListener = function (e) {
            return NavItem._focusOutEvent(e, _this9);
        };

        if (_this9.isAccordion && _this9.childNavbar) {
            var expandElement = document.createElement('a');
            expandElement.href = '#';
            expandElement.className = 'nav-expand-link';
            expandElement.innerText = _this9.isChildOpen ? '-' : '+';

            var srOnlyText = document.createElement('span');
            srOnlyText.innerText = "expand/collapse menu";
            srOnlyText.className = 'sr-only';

            expandElement.addEventListener('click', function (e) {
                e.preventDefault();
                if (_this9.isChildOpen) {
                    _this9.closeChild();
                    e.currentTarget.innerText = '+';
                } else {
                    _this9.openChild();
                    e.currentTarget.innerText = '-';
                }
            });

            expandElement.appendChild(srOnlyText);
            _this9.element.insertBefore(expandElement, _this9.linkElement.nextSibling);
        }

        _this9._setEventListeners();
        _this9._setRoles();
        return _this9;
    }

    return NavItem;
}(NavBaseClass);

var MobileNavItem = function (_NavItem) {
    _inherits(MobileNavItem, _NavItem);

    _createClass(MobileNavItem, [{
        key: '_getChildNavbar',
        value: function _getChildNavbar() {
            var childNavbarElement = this.element.querySelector('.child-navbar');
            return childNavbarElement ? new MobileNavbar(childNavbarElement, this) : undefined;
        }
    }, {
        key: '_getLinkElement',
        value: function _getLinkElement() {
            var linkElement = Array.prototype.filter.call(this.element.children, function (child) {
                return child.classList.contains('nav-link');
            })[0];
            if (linkElement) return linkElement;

            var titleElement = this.element.querySelector('.child-section-title');
            if (!titleElement) return linkElement;

            var title = titleElement.innerText;
            linkElement = document.createElement('a');
            linkElement.href = '#';
            linkElement.innerText = title;
            linkElement.className = 'nav-link';

            this.element.insertBefore(linkElement, this.element.firstChild);

            return linkElement;
        }
    }, {
        key: '_setEventListeners',
        value: function _setEventListeners() {
            var _this12 = this;

            this.linkElement.addEventListener('click', function (e) {
                var childNavbar = _this12.childNavbar;
                if (!childNavbar) return;

                if (childNavbar.element.offsetHeight === 0) {
                    childNavbar.element.classList.add('expanded');
                    _this12.linkElement.classList.add('expanded');
                    _this12.linkElement.setAttribute('aria-expanded', true);
                } else {
                    childNavbar.element.classList.remove('expanded');
                    _this12.linkElement.classList.remove('expanded');
                    _this12.linkElement.setAttribute('aria-expanded', false);
                }
                e.preventDefault();
            });
        }
    }]);

    function MobileNavItem(navItemElement, parentNavbar) {
        _classCallCheck(this, MobileNavItem);

        var _this11 = _possibleConstructorReturn(this, (MobileNavItem.__proto__ || Object.getPrototypeOf(MobileNavItem)).call(this, navItemElement, parentNavbar));

        if (navItemElement.classList.contains('nav-item-home')) {
            _this11.linkElement.innerHTML = _this11.linkElement.innerText;
        }

        if (_this11.childNavbar) {
            var cloneElement = navItemElement.cloneNode();
            cloneElement.classList.remove('nav-item-haschild');

            var cloneLink = _this11.linkElement.cloneNode(true);
            cloneLink.setAttribute('id', '');
            cloneElement.appendChild(cloneLink);

            _this11.childNavbar.element.insertBefore(cloneElement, _this11.childNavbar.element.firstChild);
        }
        return _this11;
    }

    return MobileNavItem;
}(NavItem);

NDSU.mobileNavbars = Array.prototype.map.call(document.querySelectorAll('.navbar-mobile-container'), function (navbarContainer) {
    var mobileNavbar = navbarContainer.querySelector('.navbar-mobile:not(.child-navbar)');
    var navbarToggle = navbarContainer.querySelector('.navbar-toggle');

    if (!mobileNavbar || !navbarToggle || !navbarToggle.classList.contains('navbar-toggle')) return 0;

    var mobilizedNavbars = Array.from(document.querySelectorAll('.navbar-mobilize:not(.child-navbar):not(.navbar-mobile)'));

    Array.prototype.sort.call(mobilizedNavbars, function (a, b) {
        var orderA = parseInt(a.getAttribute('data-mobile-order')) || 0;
        var orderB = parseInt(b.getAttribute('data-mobile-order')) || 0;

        return orderA - orderB;
    });

    Array.prototype.forEach.call(mobilizedNavbars, function (navbar) {
        Array.from(navbar.children).filter(function (child) {
            return child.classList.contains('nav-item') && !child.classList.contains('nav-item-mobile-hide');
        }).forEach(function (navItem) {
            mobileNavbar.appendChild(navItem.cloneNode(true));
        });
    });

    return new MobileNavbar(mobileNavbar, null, navbarContainer, navbarToggle);
});

NDSU.navbars = Array.prototype.map.call(document.querySelectorAll('.navbar:not(.child-navbar):not(.navbar-mobile)'), function (navbar) {
    return new Navbar(navbar);
});

var setPictureComponentSize = function setPictureComponentSize(img) {
    if (img.style.width) {
        img.style.width = "";
    }
    if (img.style.height) {
        img.style.height = "";
    }
    var imgParent = img.parentElement;

    var imgRatio = img.naturalWidth / img.naturalHeight;

    if (imgParent.clientHeight == 0 && imgParent.clientWidth == 0) {
        imgParent.style.height = img.naturalHeight + 'px';
        imgParent.style.width = img.naturalWidth + 'px';
    } else if (imgParent.clientHeight == 0) {
        imgParent.style.height = imgParent.clientWidth / imgRatio + 'px';
    } else if (imgParent.clientWidth == 0) {
        imgParent.style.width = imgParent.clientHeight * imgRatio + 'px';
    }

    var parentRatio = imgParent.clientWidth / imgParent.clientHeight;
    if (parentRatio >= imgRatio) {
        img.style.width = '100%';
    } else {
        img.style.height = '100%';
    }
};

Array.prototype.forEach.call(document.querySelectorAll('.img-wrapper.full-size-img'), function (picWrapper) {
    // if (picWrapper.offsetHeight > 0) return;
    var picImg = picWrapper.querySelector('img');
    if (!picImg) return;
    if (picImg.complete) {
        setPictureComponentSize(picImg);
    } else {
        picImg.addEventListener('load', function (imgLoadEvent) {
            return setPictureComponentSize(imgLoadEvent.currentTarget);
        });
    }
});

var StickyBar = function () {
    _createClass(StickyBar, null, [{
        key: '_scrollEvent',
        value: function _scrollEvent(e, obj) {
            var currentY = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;

            if (currentY > obj.offsetTop) {
                obj.element.classList.add('sticky-bar-on');
                obj.bufferElement.style.height = obj.element.offsetHeight + 'px';
            } else if (currentY <= obj.offsetTop - obj.element.offsetHeight) {
                obj.element.classList.remove('sticky-bar-on');
                obj.bufferElement.style.height = 0;
            }
        }
    }]);

    function StickyBar(baseElement) {
        var _this13 = this;

        _classCallCheck(this, StickyBar);

        this.element = baseElement;
        this.offsetTop = this.element.offsetTop;

        this.bufferElement = document.createElement('div');
        this.bufferElement.classList.add('sticky-buffer');

        var sizes = ['xl', 'lg', 'md', 'sm', 'xs'];
        sizes.forEach(function (size) {
            var stickyClass = 'sticky-' + size;
            if (_this13.element.classList.contains(stickyClass)) _this13.bufferElement.classList.add(stickyClass);
        });
        this.element.parentElement.insertBefore(this.bufferElement, this.element);

        window.addEventListener('scroll', function (e) {
            return StickyBar._scrollEvent(e, _this13);
        });
    }

    return StickyBar;
}();

;

NDSU.stickyBars = Array.prototype.map.call(document.querySelectorAll('.sticky-bar'), function (stickyBar) {
    return new StickyBar(stickyBar);
});

NDSU.resizeTimer;

var scrollToMainContent = function scrollToMainContent(ev) {
    if (window.location.hash) {
        window.setTimeout(function () {
            var adjustedHeight = Array.prototype.reduce.call(NDSU.stickyBars, function (rh, sb) {
                return Math.max(rh, sb.bufferElement.offsetHeight);
            }, 0);
            if (adjustedHeight === 0) return;

            window.scrollBy(0, -(adjustedHeight * 2));
        }, 250);
    }
};

window.addEventListener("hashchange", scrollToMainContent);
scrollToMainContent();
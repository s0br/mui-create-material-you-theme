import * as gn from "react";
const jn = {
  black: "#000",
  white: "#fff"
}, qr = jn, zn = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Or = zn, Un = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ir = Un, Hn = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Br = Hn, Wn = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, _r = Wn, Yn = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Rr = Yn, Gn = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Hr = Gn, qn = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Kn = qn;
function Ar(r) {
  let e = "https://mui.com/production-error/?code=" + r;
  for (let n = 1; n < arguments.length; n += 1)
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + r + "; visit " + e + " for the full message.";
}
const Xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ar
}, Symbol.toStringTag, { value: "Module" }));
function rr() {
  return rr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var t in n)
        ({}).hasOwnProperty.call(n, t) && (r[t] = n[t]);
    }
    return r;
  }, rr.apply(null, arguments);
}
function Vr(r, e) {
  if (r == null)
    return {};
  var n = {};
  for (var t in r)
    if ({}.hasOwnProperty.call(r, t)) {
      if (e.indexOf(t) !== -1)
        continue;
      n[t] = r[t];
    }
  return n;
}
function Jn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function pn(r) {
  if (r.__esModule)
    return r;
  var e = r.default;
  if (typeof e == "function") {
    var n = function t() {
      return this instanceof t ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(r).forEach(function(t) {
    var o = Object.getOwnPropertyDescriptor(r, t);
    Object.defineProperty(n, t, o.get ? o : {
      enumerable: !0,
      get: function() {
        return r[t];
      }
    });
  }), n;
}
var ve = { exports: {} }, Zr = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Zn() {
  if (qe)
    return j;
  qe = 1;
  var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, t = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, i = r ? Symbol.for("react.provider") : 60109, s = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, d = r ? Symbol.for("react.forward_ref") : 60112, h = r ? Symbol.for("react.suspense") : 60113, l = r ? Symbol.for("react.suspense_list") : 60120, b = r ? Symbol.for("react.memo") : 60115, p = r ? Symbol.for("react.lazy") : 60116, m = r ? Symbol.for("react.block") : 60121, v = r ? Symbol.for("react.fundamental") : 60117, P = r ? Symbol.for("react.responder") : 60118, R = r ? Symbol.for("react.scope") : 60119;
  function E(y) {
    if (typeof y == "object" && y !== null) {
      var U = y.$$typeof;
      switch (U) {
        case e:
          switch (y = y.type, y) {
            case c:
            case u:
            case t:
            case a:
            case o:
            case h:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case d:
                case p:
                case b:
                case i:
                  return y;
                default:
                  return U;
              }
          }
        case n:
          return U;
      }
    }
  }
  function O(y) {
    return E(y) === u;
  }
  return j.AsyncMode = c, j.ConcurrentMode = u, j.ContextConsumer = s, j.ContextProvider = i, j.Element = e, j.ForwardRef = d, j.Fragment = t, j.Lazy = p, j.Memo = b, j.Portal = n, j.Profiler = a, j.StrictMode = o, j.Suspense = h, j.isAsyncMode = function(y) {
    return O(y) || E(y) === c;
  }, j.isConcurrentMode = O, j.isContextConsumer = function(y) {
    return E(y) === s;
  }, j.isContextProvider = function(y) {
    return E(y) === i;
  }, j.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, j.isForwardRef = function(y) {
    return E(y) === d;
  }, j.isFragment = function(y) {
    return E(y) === t;
  }, j.isLazy = function(y) {
    return E(y) === p;
  }, j.isMemo = function(y) {
    return E(y) === b;
  }, j.isPortal = function(y) {
    return E(y) === n;
  }, j.isProfiler = function(y) {
    return E(y) === a;
  }, j.isStrictMode = function(y) {
    return E(y) === o;
  }, j.isSuspense = function(y) {
    return E(y) === h;
  }, j.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === t || y === u || y === a || y === o || y === h || y === l || typeof y == "object" && y !== null && (y.$$typeof === p || y.$$typeof === b || y.$$typeof === i || y.$$typeof === s || y.$$typeof === d || y.$$typeof === v || y.$$typeof === P || y.$$typeof === R || y.$$typeof === m);
  }, j.typeOf = E, j;
}
var z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Qn() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, t = r ? Symbol.for("react.fragment") : 60107, o = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, i = r ? Symbol.for("react.provider") : 60109, s = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, d = r ? Symbol.for("react.forward_ref") : 60112, h = r ? Symbol.for("react.suspense") : 60113, l = r ? Symbol.for("react.suspense_list") : 60120, b = r ? Symbol.for("react.memo") : 60115, p = r ? Symbol.for("react.lazy") : 60116, m = r ? Symbol.for("react.block") : 60121, v = r ? Symbol.for("react.fundamental") : 60117, P = r ? Symbol.for("react.responder") : 60118, R = r ? Symbol.for("react.scope") : 60119;
    function E(C) {
      return typeof C == "string" || typeof C == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      C === t || C === u || C === a || C === o || C === h || C === l || typeof C == "object" && C !== null && (C.$$typeof === p || C.$$typeof === b || C.$$typeof === i || C.$$typeof === s || C.$$typeof === d || C.$$typeof === v || C.$$typeof === P || C.$$typeof === R || C.$$typeof === m);
    }
    function O(C) {
      if (typeof C == "object" && C !== null) {
        var yr = C.$$typeof;
        switch (yr) {
          case e:
            var Dr = C.type;
            switch (Dr) {
              case c:
              case u:
              case t:
              case a:
              case o:
              case h:
                return Dr;
              default:
                var Ur = Dr && Dr.$$typeof;
                switch (Ur) {
                  case s:
                  case d:
                  case p:
                  case b:
                  case i:
                    return Ur;
                  default:
                    return yr;
                }
            }
          case n:
            return yr;
        }
      }
    }
    var y = c, U = u, L = s, W = i, G = e, H = d, ir = t, sr = p, cr = b, Q = n, vr = a, ar = o, er = h, Cr = !1;
    function Er(C) {
      return Cr || (Cr = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), g(C) || O(C) === c;
    }
    function g(C) {
      return O(C) === u;
    }
    function x(C) {
      return O(C) === s;
    }
    function A(C) {
      return O(C) === i;
    }
    function M(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function S(C) {
      return O(C) === d;
    }
    function B(C) {
      return O(C) === t;
    }
    function D(C) {
      return O(C) === p;
    }
    function I(C) {
      return O(C) === b;
    }
    function _(C) {
      return O(C) === n;
    }
    function V(C) {
      return O(C) === a;
    }
    function $(C) {
      return O(C) === o;
    }
    function ur(C) {
      return O(C) === h;
    }
    z.AsyncMode = y, z.ConcurrentMode = U, z.ContextConsumer = L, z.ContextProvider = W, z.Element = G, z.ForwardRef = H, z.Fragment = ir, z.Lazy = sr, z.Memo = cr, z.Portal = Q, z.Profiler = vr, z.StrictMode = ar, z.Suspense = er, z.isAsyncMode = Er, z.isConcurrentMode = g, z.isContextConsumer = x, z.isContextProvider = A, z.isElement = M, z.isForwardRef = S, z.isFragment = B, z.isLazy = D, z.isMemo = I, z.isPortal = _, z.isProfiler = V, z.isStrictMode = $, z.isSuspense = ur, z.isValidElementType = E, z.typeOf = O;
  }()), z;
}
var Xe;
function bn() {
  return Xe || (Xe = 1, process.env.NODE_ENV === "production" ? Zr.exports = Zn() : Zr.exports = Qn()), Zr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var le, Je;
function rt() {
  if (Je)
    return le;
  Je = 1;
  var r = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function t(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(i).map(function(d) {
        return i[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return le = o() ? Object.assign : function(a, i) {
    for (var s, c = t(a), u, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var h in s)
        e.call(s, h) && (c[h] = s[h]);
      if (r) {
        u = r(s);
        for (var l = 0; l < u.length; l++)
          n.call(s, u[l]) && (c[u[l]] = s[u[l]]);
      }
    }
    return c;
  }, le;
}
var me, Ze;
function Se() {
  if (Ze)
    return me;
  Ze = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return me = r, me;
}
var he, Qe;
function Fn() {
  return Qe || (Qe = 1, he = Function.call.bind(Object.prototype.hasOwnProperty)), he;
}
var ye, rn;
function et() {
  if (rn)
    return ye;
  rn = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Se(), n = {}, t = Fn();
    r = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (t(a, d)) {
          var h;
          try {
            if (typeof a[d] != "function") {
              var l = Error(
                (c || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw l.name = "Invariant Violation", l;
            }
            h = a[d](i, d, c, s, null, e);
          } catch (p) {
            h = p;
          }
          if (h && !(h instanceof Error) && r(
            (c || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var b = u ? u() : "";
            r(
              "Failed " + s + " type: " + h.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ye = o, ye;
}
var ge, en;
function nt() {
  if (en)
    return ge;
  en = 1;
  var r = bn(), e = rt(), n = Se(), t = Fn(), o = et(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return ge = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(g) {
      var x = g && (u && g[u] || g[d]);
      if (typeof x == "function")
        return x;
    }
    var l = "<<anonymous>>", b = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: R(),
      arrayOf: E,
      element: O(),
      elementType: y(),
      instanceOf: U,
      node: H(),
      objectOf: W,
      oneOf: L,
      oneOfType: G,
      shape: sr,
      exact: cr
    };
    function p(g, x) {
      return g === x ? g !== 0 || 1 / g === 1 / x : g !== g && x !== x;
    }
    function m(g, x) {
      this.message = g, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function v(g) {
      if (process.env.NODE_ENV !== "production")
        var x = {}, A = 0;
      function M(B, D, I, _, V, $, ur) {
        if (_ = _ || l, $ = $ || I, ur !== n) {
          if (c) {
            var C = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw C.name = "Invariant Violation", C;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var yr = _ + ":" + I;
            !x[yr] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + _ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[yr] = !0, A++);
          }
        }
        return D[I] == null ? B ? D[I] === null ? new m("The " + V + " `" + $ + "` is marked as required " + ("in `" + _ + "`, but its value is `null`.")) : new m("The " + V + " `" + $ + "` is marked as required in " + ("`" + _ + "`, but its value is `undefined`.")) : null : g(D, I, _, V, $);
      }
      var S = M.bind(null, !1);
      return S.isRequired = M.bind(null, !0), S;
    }
    function P(g) {
      function x(A, M, S, B, D, I) {
        var _ = A[M], V = ar(_);
        if (V !== g) {
          var $ = er(_);
          return new m(
            "Invalid " + B + " `" + D + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected ") + ("`" + g + "`."),
            { expectedType: g }
          );
        }
        return null;
      }
      return v(x);
    }
    function R() {
      return v(i);
    }
    function E(g) {
      function x(A, M, S, B, D) {
        if (typeof g != "function")
          return new m("Property `" + D + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var I = A[M];
        if (!Array.isArray(I)) {
          var _ = ar(I);
          return new m("Invalid " + B + " `" + D + "` of type " + ("`" + _ + "` supplied to `" + S + "`, expected an array."));
        }
        for (var V = 0; V < I.length; V++) {
          var $ = g(I, V, S, B, D + "[" + V + "]", n);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return v(x);
    }
    function O() {
      function g(x, A, M, S, B) {
        var D = x[A];
        if (!s(D)) {
          var I = ar(D);
          return new m("Invalid " + S + " `" + B + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(g);
    }
    function y() {
      function g(x, A, M, S, B) {
        var D = x[A];
        if (!r.isValidElementType(D)) {
          var I = ar(D);
          return new m("Invalid " + S + " `" + B + "` of type " + ("`" + I + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(g);
    }
    function U(g) {
      function x(A, M, S, B, D) {
        if (!(A[M] instanceof g)) {
          var I = g.name || l, _ = Er(A[M]);
          return new m("Invalid " + B + " `" + D + "` of type " + ("`" + _ + "` supplied to `" + S + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return v(x);
    }
    function L(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function x(A, M, S, B, D) {
        for (var I = A[M], _ = 0; _ < g.length; _++)
          if (p(I, g[_]))
            return null;
        var V = JSON.stringify(g, function(ur, C) {
          var yr = er(C);
          return yr === "symbol" ? String(C) : C;
        });
        return new m("Invalid " + B + " `" + D + "` of value `" + String(I) + "` " + ("supplied to `" + S + "`, expected one of " + V + "."));
      }
      return v(x);
    }
    function W(g) {
      function x(A, M, S, B, D) {
        if (typeof g != "function")
          return new m("Property `" + D + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var I = A[M], _ = ar(I);
        if (_ !== "object")
          return new m("Invalid " + B + " `" + D + "` of type " + ("`" + _ + "` supplied to `" + S + "`, expected an object."));
        for (var V in I)
          if (t(I, V)) {
            var $ = g(I, V, S, B, D + "." + V, n);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return v(x);
    }
    function G(g) {
      if (!Array.isArray(g))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var x = 0; x < g.length; x++) {
        var A = g[x];
        if (typeof A != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Cr(A) + " at index " + x + "."
          ), i;
      }
      function M(S, B, D, I, _) {
        for (var V = [], $ = 0; $ < g.length; $++) {
          var ur = g[$], C = ur(S, B, D, I, _, n);
          if (C == null)
            return null;
          C.data && t(C.data, "expectedType") && V.push(C.data.expectedType);
        }
        var yr = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new m("Invalid " + I + " `" + _ + "` supplied to " + ("`" + D + "`" + yr + "."));
      }
      return v(M);
    }
    function H() {
      function g(x, A, M, S, B) {
        return Q(x[A]) ? null : new m("Invalid " + S + " `" + B + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return v(g);
    }
    function ir(g, x, A, M, S) {
      return new m(
        (g || "React class") + ": " + x + " type `" + A + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function sr(g) {
      function x(A, M, S, B, D) {
        var I = A[M], _ = ar(I);
        if (_ !== "object")
          return new m("Invalid " + B + " `" + D + "` of type `" + _ + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var V in g) {
          var $ = g[V];
          if (typeof $ != "function")
            return ir(S, B, D, V, er($));
          var ur = $(I, V, S, B, D + "." + V, n);
          if (ur)
            return ur;
        }
        return null;
      }
      return v(x);
    }
    function cr(g) {
      function x(A, M, S, B, D) {
        var I = A[M], _ = ar(I);
        if (_ !== "object")
          return new m("Invalid " + B + " `" + D + "` of type `" + _ + "` " + ("supplied to `" + S + "`, expected `object`."));
        var V = e({}, A[M], g);
        for (var $ in V) {
          var ur = g[$];
          if (t(g, $) && typeof ur != "function")
            return ir(S, B, D, $, er(ur));
          if (!ur)
            return new m(
              "Invalid " + B + " `" + D + "` key `" + $ + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(A[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(g), null, "  ")
            );
          var C = ur(I, $, S, B, D + "." + $, n);
          if (C)
            return C;
        }
        return null;
      }
      return v(x);
    }
    function Q(g) {
      switch (typeof g) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !g;
        case "object":
          if (Array.isArray(g))
            return g.every(Q);
          if (g === null || s(g))
            return !0;
          var x = h(g);
          if (x) {
            var A = x.call(g), M;
            if (x !== g.entries) {
              for (; !(M = A.next()).done; )
                if (!Q(M.value))
                  return !1;
            } else
              for (; !(M = A.next()).done; ) {
                var S = M.value;
                if (S && !Q(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function vr(g, x) {
      return g === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function ar(g) {
      var x = typeof g;
      return Array.isArray(g) ? "array" : g instanceof RegExp ? "object" : vr(x, g) ? "symbol" : x;
    }
    function er(g) {
      if (typeof g > "u" || g === null)
        return "" + g;
      var x = ar(g);
      if (x === "object") {
        if (g instanceof Date)
          return "date";
        if (g instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function Cr(g) {
      var x = er(g);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function Er(g) {
      return !g.constructor || !g.constructor.name ? l : g.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, ge;
}
var pe, nn;
function tt() {
  if (nn)
    return pe;
  nn = 1;
  var r = Se();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, pe = function() {
    function t(i, s, c, u, d, h) {
      if (h !== r) {
        var l = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw l.name = "Invariant Violation", l;
      }
    }
    t.isRequired = t;
    function o() {
      return t;
    }
    var a = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: o,
      element: t,
      elementType: t,
      instanceOf: o,
      node: t,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, pe;
}
if (process.env.NODE_ENV !== "production") {
  var ot = bn(), at = !0;
  ve.exports = nt()(ot.isElement, at);
} else
  ve.exports = tt()();
var it = ve.exports;
const Wr = /* @__PURE__ */ Jn(it);
function $r(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const e = Object.getPrototypeOf(r);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}
function Cn(r) {
  if (/* @__PURE__ */ gn.isValidElement(r) || !$r(r))
    return r;
  const e = {};
  return Object.keys(r).forEach((n) => {
    e[n] = Cn(r[n]);
  }), e;
}
function Pr(r, e, n = {
  clone: !0
}) {
  const t = n.clone ? rr({}, r) : r;
  return $r(r) && $r(e) && Object.keys(e).forEach((o) => {
    /* @__PURE__ */ gn.isValidElement(e[o]) ? t[o] = e[o] : $r(e[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(r, o) && $r(r[o]) ? t[o] = Pr(r[o], e[o], n) : n.clone ? t[o] = $r(e[o]) ? Cn(e[o]) : e[o] : t[o] = e[o];
  }), t;
}
const st = ["values", "unit", "step"], ct = (r) => {
  const e = Object.keys(r).map((n) => ({
    key: n,
    val: r[n]
  })) || [];
  return e.sort((n, t) => n.val - t.val), e.reduce((n, t) => rr({}, n, {
    [t.key]: t.val
  }), {});
};
function ut(r) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: e = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: t = 5
  } = r, o = Vr(r, st), a = ct(e), i = Object.keys(a);
  function s(l) {
    return `@media (min-width:${typeof e[l] == "number" ? e[l] : l}${n})`;
  }
  function c(l) {
    return `@media (max-width:${(typeof e[l] == "number" ? e[l] : l) - t / 100}${n})`;
  }
  function u(l, b) {
    const p = i.indexOf(b);
    return `@media (min-width:${typeof e[l] == "number" ? e[l] : l}${n}) and (max-width:${(p !== -1 && typeof e[i[p]] == "number" ? e[i[p]] : b) - t / 100}${n})`;
  }
  function d(l) {
    return i.indexOf(l) + 1 < i.length ? u(l, i[i.indexOf(l) + 1]) : s(l);
  }
  function h(l) {
    const b = i.indexOf(l);
    return b === 0 ? s(i[1]) : b === i.length - 1 ? c(i[b]) : u(l, i[i.indexOf(l) + 1]).replace("@media", "@media not all and");
  }
  return rr({
    keys: i,
    values: a,
    up: s,
    down: c,
    between: u,
    only: d,
    not: h,
    unit: n
  }, o);
}
const ft = {
  borderRadius: 4
}, dt = ft, lt = process.env.NODE_ENV !== "production" ? Wr.oneOfType([Wr.number, Wr.string, Wr.object, Wr.array]) : {}, Mr = lt;
function Yr(r, e) {
  return e ? Pr(r, e, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : r;
}
const ke = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, tn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (r) => `@media (min-width:${ke[r]}px)`
};
function Sr(r, e, n) {
  const t = r.theme || {};
  if (Array.isArray(e)) {
    const a = t.breakpoints || tn;
    return e.reduce((i, s, c) => (i[a.up(a.keys[c])] = n(e[c]), i), {});
  }
  if (typeof e == "object") {
    const a = t.breakpoints || tn;
    return Object.keys(e).reduce((i, s) => {
      if (Object.keys(a.values || ke).indexOf(s) !== -1) {
        const c = a.up(s);
        i[c] = n(e[s], s);
      } else {
        const c = s;
        i[c] = e[c];
      }
      return i;
    }, {});
  }
  return n(e);
}
function mt(r = {}) {
  var e;
  return ((e = r.keys) == null ? void 0 : e.reduce((t, o) => {
    const a = r.up(o);
    return t[a] = {}, t;
  }, {})) || {};
}
function ht(r, e) {
  return r.reduce((n, t) => {
    const o = n[t];
    return (!o || Object.keys(o).length === 0) && delete n[t], n;
  }, e);
}
function xn(r) {
  if (typeof r != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ar(7));
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function te(r, e, n = !0) {
  if (!e || typeof e != "string")
    return null;
  if (r && r.vars && n) {
    const t = `vars.${e}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, r);
    if (t != null)
      return t;
  }
  return e.split(".").reduce((t, o) => t && t[o] != null ? t[o] : null, r);
}
function Qr(r, e, n, t = n) {
  let o;
  return typeof r == "function" ? o = r(n) : Array.isArray(r) ? o = r[n] || t : o = te(r, n) || t, e && (o = e(o, t, r)), o;
}
function X(r) {
  const {
    prop: e,
    cssProperty: n = r.prop,
    themeKey: t,
    transform: o
  } = r, a = (i) => {
    if (i[e] == null)
      return null;
    const s = i[e], c = i.theme, u = te(c, t) || {};
    return Sr(i, s, (h) => {
      let l = Qr(u, o, h);
      return h === l && typeof h == "string" && (l = Qr(u, o, `${e}${h === "default" ? "" : xn(h)}`, h)), n === !1 ? l : {
        [n]: l
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [e]: Mr
  } : {}, a.filterProps = [e], a;
}
function yt(r) {
  const e = {};
  return (n) => (e[n] === void 0 && (e[n] = r(n)), e[n]);
}
const gt = {
  m: "margin",
  p: "padding"
}, pt = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, on = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, bt = yt((r) => {
  if (r.length > 2)
    if (on[r])
      r = on[r];
    else
      return [r];
  const [e, n] = r.split(""), t = gt[e], o = pt[n] || "";
  return Array.isArray(o) ? o.map((a) => t + a) : [t + o];
}), oe = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ae = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ft = [...oe, ...ae];
function Xr(r, e, n, t) {
  var o;
  const a = (o = te(r, e, !1)) != null ? o : n;
  return typeof a == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${t} argument to be a number or a string, got ${i}.`), a * i) : Array.isArray(a) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > a.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${i} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`].join(`
`))), a[i]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${e}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function vn(r) {
  return Xr(r, "spacing", 8, "spacing");
}
function Jr(r, e) {
  if (typeof e == "string" || e == null)
    return e;
  const n = Math.abs(e), t = r(n);
  return e >= 0 ? t : typeof t == "number" ? -t : `-${t}`;
}
function Ct(r, e) {
  return (n) => r.reduce((t, o) => (t[o] = Jr(e, n), t), {});
}
function xt(r, e, n, t) {
  if (e.indexOf(n) === -1)
    return null;
  const o = bt(n), a = Ct(o, t), i = r[n];
  return Sr(r, i, a);
}
function En(r, e) {
  const n = vn(r.theme);
  return Object.keys(r).map((t) => xt(r, e, t, n)).reduce(Yr, {});
}
function q(r) {
  return En(r, oe);
}
q.propTypes = process.env.NODE_ENV !== "production" ? oe.reduce((r, e) => (r[e] = Mr, r), {}) : {};
q.filterProps = oe;
function K(r) {
  return En(r, ae);
}
K.propTypes = process.env.NODE_ENV !== "production" ? ae.reduce((r, e) => (r[e] = Mr, r), {}) : {};
K.filterProps = ae;
process.env.NODE_ENV !== "production" && Ft.reduce((r, e) => (r[e] = Mr, r), {});
function vt(r = 8) {
  if (r.mui)
    return r;
  const e = vn({
    spacing: r
  }), n = (...t) => (process.env.NODE_ENV !== "production" && (t.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${t.length}`)), (t.length === 0 ? [1] : t).map((a) => {
    const i = e(a);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return n.mui = !0, n;
}
function ie(...r) {
  const e = r.reduce((t, o) => (o.filterProps.forEach((a) => {
    t[a] = o;
  }), t), {}), n = (t) => Object.keys(t).reduce((o, a) => e[a] ? Yr(o, e[a](t)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? r.reduce((t, o) => Object.assign(t, o.propTypes), {}) : {}, n.filterProps = r.reduce((t, o) => t.concat(o.filterProps), []), n;
}
function pr(r) {
  return typeof r != "number" ? r : `${r}px solid`;
}
function Fr(r, e) {
  return X({
    prop: r,
    themeKey: "borders",
    transform: e
  });
}
const Et = Fr("border", pr), Tt = Fr("borderTop", pr), Pt = Fr("borderRight", pr), St = Fr("borderBottom", pr), kt = Fr("borderLeft", pr), Mt = Fr("borderColor"), wt = Fr("borderTopColor"), At = Fr("borderRightColor"), Dt = Fr("borderBottomColor"), Ot = Fr("borderLeftColor"), It = Fr("outline", pr), Bt = Fr("outlineColor"), se = (r) => {
  if (r.borderRadius !== void 0 && r.borderRadius !== null) {
    const e = Xr(r.theme, "shape.borderRadius", 4, "borderRadius"), n = (t) => ({
      borderRadius: Jr(e, t)
    });
    return Sr(r, r.borderRadius, n);
  }
  return null;
};
se.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Mr
} : {};
se.filterProps = ["borderRadius"];
ie(Et, Tt, Pt, St, kt, Mt, wt, At, Dt, Ot, se, It, Bt);
const ce = (r) => {
  if (r.gap !== void 0 && r.gap !== null) {
    const e = Xr(r.theme, "spacing", 8, "gap"), n = (t) => ({
      gap: Jr(e, t)
    });
    return Sr(r, r.gap, n);
  }
  return null;
};
ce.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Mr
} : {};
ce.filterProps = ["gap"];
const ue = (r) => {
  if (r.columnGap !== void 0 && r.columnGap !== null) {
    const e = Xr(r.theme, "spacing", 8, "columnGap"), n = (t) => ({
      columnGap: Jr(e, t)
    });
    return Sr(r, r.columnGap, n);
  }
  return null;
};
ue.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Mr
} : {};
ue.filterProps = ["columnGap"];
const fe = (r) => {
  if (r.rowGap !== void 0 && r.rowGap !== null) {
    const e = Xr(r.theme, "spacing", 8, "rowGap"), n = (t) => ({
      rowGap: Jr(e, t)
    });
    return Sr(r, r.rowGap, n);
  }
  return null;
};
fe.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Mr
} : {};
fe.filterProps = ["rowGap"];
const _t = X({
  prop: "gridColumn"
}), Rt = X({
  prop: "gridRow"
}), $t = X({
  prop: "gridAutoFlow"
}), Nt = X({
  prop: "gridAutoColumns"
}), Lt = X({
  prop: "gridAutoRows"
}), Vt = X({
  prop: "gridTemplateColumns"
}), jt = X({
  prop: "gridTemplateRows"
}), zt = X({
  prop: "gridTemplateAreas"
}), Ut = X({
  prop: "gridArea"
});
ie(ce, ue, fe, _t, Rt, $t, Nt, Lt, Vt, jt, zt, Ut);
function Nr(r, e) {
  return e === "grey" ? e : r;
}
const Ht = X({
  prop: "color",
  themeKey: "palette",
  transform: Nr
}), Wt = X({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Nr
}), Yt = X({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Nr
});
ie(Ht, Wt, Yt);
function hr(r) {
  return r <= 1 && r !== 0 ? `${r * 100}%` : r;
}
const Gt = X({
  prop: "width",
  transform: hr
}), Me = (r) => {
  if (r.maxWidth !== void 0 && r.maxWidth !== null) {
    const e = (n) => {
      var t, o;
      const a = ((t = r.theme) == null || (t = t.breakpoints) == null || (t = t.values) == null ? void 0 : t[n]) || ke[n];
      return a ? ((o = r.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${a}${r.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: hr(n)
      };
    };
    return Sr(r, r.maxWidth, e);
  }
  return null;
};
Me.filterProps = ["maxWidth"];
const qt = X({
  prop: "minWidth",
  transform: hr
}), Kt = X({
  prop: "height",
  transform: hr
}), Xt = X({
  prop: "maxHeight",
  transform: hr
}), Jt = X({
  prop: "minHeight",
  transform: hr
});
X({
  prop: "size",
  cssProperty: "width",
  transform: hr
});
X({
  prop: "size",
  cssProperty: "height",
  transform: hr
});
const Zt = X({
  prop: "boxSizing"
});
ie(Gt, Me, qt, Kt, Xt, Jt, Zt);
const Qt = {
  // borders
  border: {
    themeKey: "borders",
    transform: pr
  },
  borderTop: {
    themeKey: "borders",
    transform: pr
  },
  borderRight: {
    themeKey: "borders",
    transform: pr
  },
  borderBottom: {
    themeKey: "borders",
    transform: pr
  },
  borderLeft: {
    themeKey: "borders",
    transform: pr
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: pr
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: se
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Nr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Nr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Nr
  },
  // spacing
  p: {
    style: K
  },
  pt: {
    style: K
  },
  pr: {
    style: K
  },
  pb: {
    style: K
  },
  pl: {
    style: K
  },
  px: {
    style: K
  },
  py: {
    style: K
  },
  padding: {
    style: K
  },
  paddingTop: {
    style: K
  },
  paddingRight: {
    style: K
  },
  paddingBottom: {
    style: K
  },
  paddingLeft: {
    style: K
  },
  paddingX: {
    style: K
  },
  paddingY: {
    style: K
  },
  paddingInline: {
    style: K
  },
  paddingInlineStart: {
    style: K
  },
  paddingInlineEnd: {
    style: K
  },
  paddingBlock: {
    style: K
  },
  paddingBlockStart: {
    style: K
  },
  paddingBlockEnd: {
    style: K
  },
  m: {
    style: q
  },
  mt: {
    style: q
  },
  mr: {
    style: q
  },
  mb: {
    style: q
  },
  ml: {
    style: q
  },
  mx: {
    style: q
  },
  my: {
    style: q
  },
  margin: {
    style: q
  },
  marginTop: {
    style: q
  },
  marginRight: {
    style: q
  },
  marginBottom: {
    style: q
  },
  marginLeft: {
    style: q
  },
  marginX: {
    style: q
  },
  marginY: {
    style: q
  },
  marginInline: {
    style: q
  },
  marginInlineStart: {
    style: q
  },
  marginInlineEnd: {
    style: q
  },
  marginBlock: {
    style: q
  },
  marginBlockStart: {
    style: q
  },
  marginBlockEnd: {
    style: q
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (r) => ({
      "@media print": {
        display: r
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: ce
  },
  rowGap: {
    style: fe
  },
  columnGap: {
    style: ue
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: hr
  },
  maxWidth: {
    style: Me
  },
  minWidth: {
    transform: hr
  },
  height: {
    transform: hr
  },
  maxHeight: {
    transform: hr
  },
  minHeight: {
    transform: hr
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, we = Qt;
function ro(...r) {
  const e = r.reduce((t, o) => t.concat(Object.keys(o)), []), n = new Set(e);
  return r.every((t) => n.size === Object.keys(t).length);
}
function eo(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function no() {
  function r(n, t, o, a) {
    const i = {
      [n]: t,
      theme: o
    }, s = a[n];
    if (!s)
      return {
        [n]: t
      };
    const {
      cssProperty: c = n,
      themeKey: u,
      transform: d,
      style: h
    } = s;
    if (t == null)
      return null;
    if (u === "typography" && t === "inherit")
      return {
        [n]: t
      };
    const l = te(o, u) || {};
    return h ? h(i) : Sr(i, t, (p) => {
      let m = Qr(l, d, p);
      return p === m && typeof p == "string" && (m = Qr(l, d, `${n}${p === "default" ? "" : xn(p)}`, p)), c === !1 ? m : {
        [c]: m
      };
    });
  }
  function e(n) {
    var t;
    const {
      sx: o,
      theme: a = {}
    } = n || {};
    if (!o)
      return null;
    const i = (t = a.unstable_sxConfig) != null ? t : we;
    function s(c) {
      let u = c;
      if (typeof c == "function")
        u = c(a);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = mt(a.breakpoints), h = Object.keys(d);
      let l = d;
      return Object.keys(u).forEach((b) => {
        const p = eo(u[b], a);
        if (p != null)
          if (typeof p == "object")
            if (i[b])
              l = Yr(l, r(b, p, a, i));
            else {
              const m = Sr({
                theme: a
              }, p, (v) => ({
                [b]: v
              }));
              ro(m, p) ? l[b] = e({
                sx: p,
                theme: a
              }) : l = Yr(l, m);
            }
          else
            l = Yr(l, r(b, p, a, i));
      }), ht(h, l);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return e;
}
const Tn = no();
Tn.filterProps = ["sx"];
const Pn = Tn;
function to(r, e) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(r).replace(/(\[[^\]]+\])/, "*:where($1)")]: e
  } : n.palette.mode === r ? e : {};
}
const oo = ["breakpoints", "palette", "spacing", "shape"];
function ao(r = {}, ...e) {
  const {
    breakpoints: n = {},
    palette: t = {},
    spacing: o,
    shape: a = {}
  } = r, i = Vr(r, oo), s = ut(n), c = vt(o);
  let u = Pr({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: rr({
      mode: "light"
    }, t),
    spacing: c,
    shape: rr({}, dt, a)
  }, i);
  return u.applyStyles = to, u = e.reduce((d, h) => Pr(d, h), u), u.unstable_sxConfig = rr({}, we, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(h) {
    return Pn({
      sx: h,
      theme: this
    });
  }, u;
}
const an = (r) => r, io = () => {
  let r = an;
  return {
    configure(e) {
      r = e;
    },
    generate(e) {
      return r(e);
    },
    reset() {
      r = an;
    }
  };
}, so = io(), co = so, uo = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function fo(r, e, n = "Mui") {
  const t = uo[e];
  return t ? `${n}-${t}` : `${co.generate(r)}-${e}`;
}
function Sn(r, e = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(e, Math.min(r, n));
}
const lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sn
}, Symbol.toStringTag, { value: "Module" }));
function mo(r, e = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (r < e || r > n) && console.error(`MUI: The value provided ${r} is out of range [${e}, ${n}].`), Sn(r, e, n);
}
function ho(r) {
  r = r.slice(1);
  const e = new RegExp(`.{1,${r.length >= 6 ? 2 : 1}}`, "g");
  let n = r.match(e);
  return n && n[0].length === 1 && (n = n.map((t) => t + t)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((t, o) => o < 3 ? parseInt(t, 16) : Math.round(parseInt(t, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function kn(r) {
  if (r.type)
    return r;
  if (r.charAt(0) === "#")
    return kn(ho(r));
  const e = r.indexOf("("), n = r.substring(0, e);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${r}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ar(9, r));
  let t = r.substring(e + 1, r.length - 1), o;
  if (n === "color") {
    if (t = t.split(" "), o = t.shift(), t.length === 4 && t[3].charAt(0) === "/" && (t[3] = t[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ar(10, o));
  } else
    t = t.split(",");
  return t = t.map((a) => parseFloat(a)), {
    type: n,
    values: t,
    colorSpace: o
  };
}
function yo(r) {
  const {
    type: e,
    colorSpace: n
  } = r;
  let {
    values: t
  } = r;
  return e.indexOf("rgb") !== -1 ? t = t.map((o, a) => a < 3 ? parseInt(o, 10) : o) : e.indexOf("hsl") !== -1 && (t[1] = `${t[1]}%`, t[2] = `${t[2]}%`), e.indexOf("color") !== -1 ? t = `${n} ${t.join(" ")}` : t = `${t.join(", ")}`, `${e}(${t})`;
}
function dr(r, e) {
  return r = kn(r), e = mo(e), (r.type === "rgb" || r.type === "hsl") && (r.type += "a"), r.type === "color" ? r.values[3] = `/${e}` : r.values[3] = e, yo(r);
}
function go(r, e) {
  return rr({
    toolbar: {
      minHeight: 56,
      [r.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [r.up("sm")]: {
        minHeight: 64
      }
    }
  }, e);
}
var J = {}, Mn = { exports: {} };
(function(r) {
  function e(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  r.exports = e, r.exports.__esModule = !0, r.exports.default = r.exports;
})(Mn);
var po = Mn.exports;
const bo = /* @__PURE__ */ pn(Xn), Fo = /* @__PURE__ */ pn(lo);
var wn = po;
Object.defineProperty(J, "__esModule", {
  value: !0
});
J.alpha = In;
J.blend = Do;
J.colorChannel = void 0;
var Co = J.darken = De;
J.decomposeColor = br;
J.emphasize = Bn;
var sn = J.getContrastRatio = So;
J.getLuminance = re;
J.hexToRgb = An;
J.hslToRgb = On;
var xo = J.lighten = Oe;
J.private_safeAlpha = ko;
J.private_safeColorChannel = void 0;
J.private_safeDarken = Mo;
J.private_safeEmphasize = Ao;
J.private_safeLighten = wo;
J.recomposeColor = jr;
J.rgbToHex = Po;
var cn = wn(bo), vo = wn(Fo);
function Ae(r, e = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (r < e || r > n) && console.error(`MUI: The value provided ${r} is out of range [${e}, ${n}].`), (0, vo.default)(r, e, n);
}
function An(r) {
  r = r.slice(1);
  const e = new RegExp(`.{1,${r.length >= 6 ? 2 : 1}}`, "g");
  let n = r.match(e);
  return n && n[0].length === 1 && (n = n.map((t) => t + t)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((t, o) => o < 3 ? parseInt(t, 16) : Math.round(parseInt(t, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Eo(r) {
  const e = r.toString(16);
  return e.length === 1 ? `0${e}` : e;
}
function br(r) {
  if (r.type)
    return r;
  if (r.charAt(0) === "#")
    return br(An(r));
  const e = r.indexOf("("), n = r.substring(0, e);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${r}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, cn.default)(9, r));
  let t = r.substring(e + 1, r.length - 1), o;
  if (n === "color") {
    if (t = t.split(" "), o = t.shift(), t.length === 4 && t[3].charAt(0) === "/" && (t[3] = t[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, cn.default)(10, o));
  } else
    t = t.split(",");
  return t = t.map((a) => parseFloat(a)), {
    type: n,
    values: t,
    colorSpace: o
  };
}
const Dn = (r) => {
  const e = br(r);
  return e.values.slice(0, 3).map((n, t) => e.type.indexOf("hsl") !== -1 && t !== 0 ? `${n}%` : n).join(" ");
};
J.colorChannel = Dn;
const To = (r, e) => {
  try {
    return Dn(r);
  } catch {
    return e && process.env.NODE_ENV !== "production" && console.warn(e), r;
  }
};
J.private_safeColorChannel = To;
function jr(r) {
  const {
    type: e,
    colorSpace: n
  } = r;
  let {
    values: t
  } = r;
  return e.indexOf("rgb") !== -1 ? t = t.map((o, a) => a < 3 ? parseInt(o, 10) : o) : e.indexOf("hsl") !== -1 && (t[1] = `${t[1]}%`, t[2] = `${t[2]}%`), e.indexOf("color") !== -1 ? t = `${n} ${t.join(" ")}` : t = `${t.join(", ")}`, `${e}(${t})`;
}
function Po(r) {
  if (r.indexOf("#") === 0)
    return r;
  const {
    values: e
  } = br(r);
  return `#${e.map((n, t) => Eo(t === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function On(r) {
  r = br(r);
  const {
    values: e
  } = r, n = e[0], t = e[1] / 100, o = e[2] / 100, a = t * Math.min(o, 1 - o), i = (u, d = (u + n / 30) % 12) => o - a * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const c = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return r.type === "hsla" && (s += "a", c.push(e[3])), jr({
    type: s,
    values: c
  });
}
function re(r) {
  r = br(r);
  let e = r.type === "hsl" || r.type === "hsla" ? br(On(r)).values : r.values;
  return e = e.map((n) => (r.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
}
function So(r, e) {
  const n = re(r), t = re(e);
  return (Math.max(n, t) + 0.05) / (Math.min(n, t) + 0.05);
}
function In(r, e) {
  return r = br(r), e = Ae(e), (r.type === "rgb" || r.type === "hsl") && (r.type += "a"), r.type === "color" ? r.values[3] = `/${e}` : r.values[3] = e, jr(r);
}
function ko(r, e, n) {
  try {
    return In(r, e);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), r;
  }
}
function De(r, e) {
  if (r = br(r), e = Ae(e), r.type.indexOf("hsl") !== -1)
    r.values[2] *= 1 - e;
  else if (r.type.indexOf("rgb") !== -1 || r.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      r.values[n] *= 1 - e;
  return jr(r);
}
function Mo(r, e, n) {
  try {
    return De(r, e);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), r;
  }
}
function Oe(r, e) {
  if (r = br(r), e = Ae(e), r.type.indexOf("hsl") !== -1)
    r.values[2] += (100 - r.values[2]) * e;
  else if (r.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      r.values[n] += (255 - r.values[n]) * e;
  else if (r.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      r.values[n] += (1 - r.values[n]) * e;
  return jr(r);
}
function wo(r, e, n) {
  try {
    return Oe(r, e);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), r;
  }
}
function Bn(r, e = 0.15) {
  return re(r) > 0.5 ? De(r, e) : Oe(r, e);
}
function Ao(r, e, n) {
  try {
    return Bn(r, e);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), r;
  }
}
function Do(r, e, n, t = 1) {
  const o = (c, u) => Math.round((c ** (1 / t) * (1 - n) + u ** (1 / t) * n) ** t), a = br(r), i = br(e), s = [o(a.values[0], i.values[0]), o(a.values[1], i.values[1]), o(a.values[2], i.values[2])];
  return jr({
    type: "rgb",
    values: s
  });
}
const Oo = ["mode", "contrastThreshold", "tonalOffset"], un = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: qr.white,
    default: qr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, be = {
  text: {
    primary: qr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: qr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function fn(r, e, n, t) {
  const o = t.light || t, a = t.dark || t * 1.5;
  r[e] || (r.hasOwnProperty(n) ? r[e] = r[n] : e === "light" ? r.light = xo(r.main, o) : e === "dark" && (r.dark = Co(r.main, a)));
}
function Io(r = "light") {
  return r === "dark" ? {
    main: Br[200],
    light: Br[50],
    dark: Br[400]
  } : {
    main: Br[700],
    light: Br[400],
    dark: Br[800]
  };
}
function Bo(r = "light") {
  return r === "dark" ? {
    main: Ir[200],
    light: Ir[50],
    dark: Ir[400]
  } : {
    main: Ir[500],
    light: Ir[300],
    dark: Ir[700]
  };
}
function _o(r = "light") {
  return r === "dark" ? {
    main: Or[500],
    light: Or[300],
    dark: Or[700]
  } : {
    main: Or[700],
    light: Or[400],
    dark: Or[800]
  };
}
function Ro(r = "light") {
  return r === "dark" ? {
    main: _r[400],
    light: _r[300],
    dark: _r[700]
  } : {
    main: _r[700],
    light: _r[500],
    dark: _r[900]
  };
}
function $o(r = "light") {
  return r === "dark" ? {
    main: Rr[400],
    light: Rr[300],
    dark: Rr[700]
  } : {
    main: Rr[800],
    light: Rr[500],
    dark: Rr[900]
  };
}
function No(r = "light") {
  return r === "dark" ? {
    main: Hr[400],
    light: Hr[300],
    dark: Hr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Hr[500],
    dark: Hr[900]
  };
}
function Lo(r) {
  const {
    mode: e = "light",
    contrastThreshold: n = 3,
    tonalOffset: t = 0.2
  } = r, o = Vr(r, Oo), a = r.primary || Io(e), i = r.secondary || Bo(e), s = r.error || _o(e), c = r.info || Ro(e), u = r.success || $o(e), d = r.warning || No(e);
  function h(m) {
    const v = sn(m, be.text.primary) >= n ? be.text.primary : un.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = sn(m, v);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${v} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return v;
  }
  const l = ({
    color: m,
    name: v,
    mainShade: P = 500,
    lightShade: R = 300,
    darkShade: E = 700
  }) => {
    if (m = rr({}, m), !m.main && m[P] && (m.main = m[P]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : Ar(11, v ? ` (${v})` : "", P));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${v ? ` (${v})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ar(12, v ? ` (${v})` : "", JSON.stringify(m.main)));
    return fn(m, "light", R, t), fn(m, "dark", E, t), m.contrastText || (m.contrastText = h(m.main)), m;
  }, b = {
    dark: be,
    light: un
  };
  return process.env.NODE_ENV !== "production" && (b[e] || console.error(`MUI: The palette mode \`${e}\` is not supported.`)), Pr(rr({
    // A collection of common colors.
    common: rr({}, qr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: e,
    // The colors used to represent primary interface elements for a user.
    primary: l({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: l({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: l({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: l({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: l({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: l({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Kn,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: l,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: t
  }, b[e]), o);
}
const Vo = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function jo(r) {
  return Math.round(r * 1e5) / 1e5;
}
const dn = {
  textTransform: "uppercase"
}, ln = '"Roboto", "Helvetica", "Arial", sans-serif';
function zo(r, e) {
  const n = typeof e == "function" ? e(r) : e, {
    fontFamily: t = ln,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h
  } = n, l = Vr(n, Vo);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, p = h || ((P) => `${P / u * b}rem`), m = (P, R, E, O, y) => rr({
    fontFamily: t,
    fontWeight: P,
    fontSize: p(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: E
  }, t === ln ? {
    letterSpacing: `${jo(O / R)}em`
  } : {}, y, d), v = {
    h1: m(a, 96, 1.167, -1.5),
    h2: m(a, 60, 1.2, -0.5),
    h3: m(i, 48, 1.167, 0),
    h4: m(i, 34, 1.235, 0.25),
    h5: m(i, 24, 1.334, 0),
    h6: m(s, 20, 1.6, 0.15),
    subtitle1: m(i, 16, 1.75, 0.15),
    subtitle2: m(s, 14, 1.57, 0.1),
    body1: m(i, 16, 1.5, 0.15),
    body2: m(i, 14, 1.43, 0.15),
    button: m(s, 14, 1.75, 0.4, dn),
    caption: m(i, 12, 1.66, 0.4),
    overline: m(i, 12, 2.66, 1, dn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Pr(rr({
    htmlFontSize: u,
    pxToRem: p,
    fontFamily: t,
    fontSize: o,
    fontWeightLight: a,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c
  }, v), l, {
    clone: !1
    // No need to clone deep
  });
}
const Uo = 0.2, Ho = 0.14, Wo = 0.12;
function Y(...r) {
  return [`${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${Uo})`, `${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${Ho})`, `${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${Wo})`].join(",");
}
const Yo = ["none", Y(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Y(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Y(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Y(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Y(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Y(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Y(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Y(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Y(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Y(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Y(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Y(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Y(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Y(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Y(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Y(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Y(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Y(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Y(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Y(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Y(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Y(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Y(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Y(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Go = Yo, qo = ["duration", "easing", "delay"], Ko = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Xo = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function mn(r) {
  return `${Math.round(r)}ms`;
}
function Jo(r) {
  if (!r)
    return 0;
  const e = r / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function Zo(r) {
  const e = rr({}, Ko, r.easing), n = rr({}, Xo, r.duration);
  return rr({
    getAutoHeightDuration: Jo,
    create: (o = ["all"], a = {}) => {
      const {
        duration: i = n.standard,
        easing: s = e.easeInOut,
        delay: c = 0
      } = a, u = Vr(a, qo);
      if (process.env.NODE_ENV !== "production") {
        const d = (l) => typeof l == "string", h = (l) => !isNaN(parseFloat(l));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(i) && !d(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), d(s) || console.error('MUI: Argument "easing" must be a string.'), !h(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof i == "string" ? i : mn(i)} ${s} ${typeof c == "string" ? c : mn(c)}`).join(",");
    }
  }, r, {
    easing: e,
    duration: n
  });
}
const Qo = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ra = Qo, ea = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function hn(r = {}, ...e) {
  const {
    mixins: n = {},
    palette: t = {},
    transitions: o = {},
    typography: a = {}
  } = r, i = Vr(r, ea);
  if (r.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  r.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ar(18));
  const s = Lo(t), c = ao(r);
  let u = Pr(c, {
    mixins: go(c.breakpoints, n),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Go.slice(),
    typography: zo(s, a),
    transitions: Zo(o),
    zIndex: rr({}, ra)
  });
  if (u = Pr(u, i), u = e.reduce((d, h) => Pr(d, h), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (l, b) => {
      let p;
      for (p in l) {
        const m = l[p];
        if (d.indexOf(p) !== -1 && Object.keys(m).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const v = fo("", p);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${p}\` internal state.`, "You can not override it like this: ", JSON.stringify(l, null, 2), "", `Instead, you need to use the '&.${v}' syntax:`, JSON.stringify({
              root: {
                [`&.${v}`]: m
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          l[p] = {};
        }
      }
    };
    Object.keys(u.components).forEach((l) => {
      const b = u.components[l].styleOverrides;
      b && l.indexOf("Mui") === 0 && h(b, l);
    });
  }
  return u.unstable_sxConfig = rr({}, we, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(h) {
    return Pn({
      sx: h,
      theme: this
    });
  }, u;
}
const na = {
  info: "#0288d1",
  success: "#2e7d32",
  warning: "#ed6c02"
}, _n = {
  description: `TYPE: CUSTOM
Material Theme Builder export 2025-04-18 10:05:49`,
  seed: "#1976D2",
  coreColors: {
    primary: "#1976D2",
    secondary: "#9C27B0",
    tertiary: "#A6902D",
    error: "#B70000",
    neutral: "#919094",
    neutralVariant: "#8C9198"
  },
  extendedColors: [],
  schemes: {
    light: {
      primary: "#3C6090",
      surfaceTint: "#3C6090",
      onPrimary: "#FFFFFF",
      primaryContainer: "#D4E3FF",
      onPrimaryContainer: "#224876",
      secondary: "#7B4E7F",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#FFD6FE",
      onSecondaryContainer: "#613766",
      tertiary: "#6E5D0E",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#F9E287",
      onTertiaryContainer: "#544600",
      error: "#904B40",
      onError: "#FFFFFF",
      errorContainer: "#FFDAD4",
      onErrorContainer: "#73342B",
      background: "#F9F9FF",
      onBackground: "#191C20",
      surface: "#FAF8FF",
      onSurface: "#1A1B21",
      surfaceVariant: "#DEE3EB",
      onSurfaceVariant: "#42474E",
      outline: "#72787F",
      outlineVariant: "#C2C7CF",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#2F3036",
      inverseOnSurface: "#F1F0F7",
      inversePrimary: "#A6C8FF",
      primaryFixed: "#D4E3FF",
      onPrimaryFixed: "#001C3A",
      primaryFixedDim: "#A6C8FF",
      onPrimaryFixedVariant: "#224876",
      secondaryFixed: "#FFD6FE",
      onSecondaryFixed: "#310937",
      secondaryFixedDim: "#EBB5ED",
      onSecondaryFixedVariant: "#613766",
      tertiaryFixed: "#F9E287",
      onTertiaryFixed: "#221B00",
      tertiaryFixedDim: "#DCC66E",
      onTertiaryFixedVariant: "#544600",
      surfaceDim: "#DAD9E0",
      surfaceBright: "#FAF8FF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F4F3FA",
      surfaceContainer: "#EEEDF4",
      surfaceContainerHigh: "#E8E7EF",
      surfaceContainerHighest: "#E3E2E9"
    },
    "light-medium-contrast": {
      primary: "#0B3765",
      surfaceTint: "#3C6090",
      onPrimary: "#FFFFFF",
      primaryContainer: "#4C6E9F",
      onPrimaryContainer: "#FFFFFF",
      secondary: "#4F2654",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#8B5D8F",
      onSecondaryContainer: "#FFFFFF",
      tertiary: "#403500",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#7D6C1E",
      onTertiaryContainer: "#FFFFFF",
      error: "#5E241C",
      onError: "#FFFFFF",
      errorContainer: "#A1594E",
      onErrorContainer: "#FFFFFF",
      background: "#F9F9FF",
      onBackground: "#191C20",
      surface: "#FAF8FF",
      onSurface: "#101116",
      surfaceVariant: "#DEE3EB",
      onSurfaceVariant: "#31373D",
      outline: "#4D535A",
      outlineVariant: "#686E74",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#2F3036",
      inverseOnSurface: "#F1F0F7",
      inversePrimary: "#A6C8FF",
      primaryFixed: "#4C6E9F",
      onPrimaryFixed: "#FFFFFF",
      primaryFixedDim: "#325685",
      onPrimaryFixedVariant: "#FFFFFF",
      secondaryFixed: "#8B5D8F",
      onSecondaryFixed: "#FFFFFF",
      secondaryFixedDim: "#714575",
      onSecondaryFixedVariant: "#FFFFFF",
      tertiaryFixed: "#7D6C1E",
      onTertiaryFixed: "#FFFFFF",
      tertiaryFixedDim: "#645402",
      onTertiaryFixedVariant: "#FFFFFF",
      surfaceDim: "#C6C6CD",
      surfaceBright: "#FAF8FF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F4F3FA",
      surfaceContainer: "#E8E7EF",
      surfaceContainerHigh: "#DDDCE3",
      surfaceContainerHighest: "#D2D1D8"
    },
    "light-high-contrast": {
      primary: "#002C57",
      surfaceTint: "#3C6090",
      onPrimary: "#FFFFFF",
      primaryContainer: "#254A79",
      onPrimaryContainer: "#FFFFFF",
      secondary: "#441C49",
      onSecondary: "#FFFFFF",
      secondaryContainer: "#643969",
      onSecondaryContainer: "#FFFFFF",
      tertiary: "#352C00",
      onTertiary: "#FFFFFF",
      tertiaryContainer: "#564800",
      onTertiaryContainer: "#FFFFFF",
      error: "#511A13",
      onError: "#FFFFFF",
      errorContainer: "#76362D",
      onErrorContainer: "#FFFFFF",
      background: "#F9F9FF",
      onBackground: "#191C20",
      surface: "#FAF8FF",
      onSurface: "#000000",
      surfaceVariant: "#DEE3EB",
      onSurfaceVariant: "#000000",
      outline: "#272D33",
      outlineVariant: "#444A50",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#2F3036",
      inverseOnSurface: "#FFFFFF",
      inversePrimary: "#A6C8FF",
      primaryFixed: "#254A79",
      onPrimaryFixed: "#FFFFFF",
      primaryFixedDim: "#043361",
      onPrimaryFixedVariant: "#FFFFFF",
      secondaryFixed: "#643969",
      onSecondaryFixed: "#FFFFFF",
      secondaryFixedDim: "#4B2250",
      onSecondaryFixedVariant: "#FFFFFF",
      tertiaryFixed: "#564800",
      onTertiaryFixed: "#FFFFFF",
      tertiaryFixedDim: "#3C3200",
      onTertiaryFixedVariant: "#FFFFFF",
      surfaceDim: "#B8B8BF",
      surfaceBright: "#FAF8FF",
      surfaceContainerLowest: "#FFFFFF",
      surfaceContainerLow: "#F1F0F7",
      surfaceContainer: "#E3E2E9",
      surfaceContainerHigh: "#D4D4DB",
      surfaceContainerHighest: "#C6C6CD"
    },
    dark: {
      primary: "#A6C8FF",
      surfaceTint: "#A6C8FF",
      onPrimary: "#01315E",
      primaryContainer: "#224876",
      onPrimaryContainer: "#D4E3FF",
      secondary: "#EBB5ED",
      onSecondary: "#49204E",
      secondaryContainer: "#613766",
      onSecondaryContainer: "#FFD6FE",
      tertiary: "#DCC66E",
      onTertiary: "#3A3000",
      tertiaryContainer: "#544600",
      onTertiaryContainer: "#F9E287",
      error: "#FFB4A8",
      onError: "#561E16",
      errorContainer: "#73342B",
      onErrorContainer: "#FFDAD4",
      background: "#111318",
      onBackground: "#E1E2E9",
      surface: "#121318",
      onSurface: "#E3E2E9",
      surfaceVariant: "#42474E",
      onSurfaceVariant: "#C2C7CF",
      outline: "#8C9198",
      outlineVariant: "#42474E",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#E3E2E9",
      inverseOnSurface: "#2F3036",
      inversePrimary: "#3C6090",
      primaryFixed: "#D4E3FF",
      onPrimaryFixed: "#001C3A",
      primaryFixedDim: "#A6C8FF",
      onPrimaryFixedVariant: "#224876",
      secondaryFixed: "#FFD6FE",
      onSecondaryFixed: "#310937",
      secondaryFixedDim: "#EBB5ED",
      onSecondaryFixedVariant: "#613766",
      tertiaryFixed: "#F9E287",
      onTertiaryFixed: "#221B00",
      tertiaryFixedDim: "#DCC66E",
      onTertiaryFixedVariant: "#544600",
      surfaceDim: "#121318",
      surfaceBright: "#38393F",
      surfaceContainerLowest: "#0D0E13",
      surfaceContainerLow: "#1A1B21",
      surfaceContainer: "#1E1F25",
      surfaceContainerHigh: "#292A2F",
      surfaceContainerHighest: "#33343A"
    },
    "dark-medium-contrast": {
      primary: "#CADDFF",
      surfaceTint: "#A6C8FF",
      onPrimary: "#00264C",
      primaryContainer: "#7092C6",
      onPrimaryContainer: "#000000",
      secondary: "#FFCCFF",
      onSecondary: "#3C1542",
      secondaryContainer: "#B280B4",
      onSecondaryContainer: "#000000",
      tertiary: "#F3DC82",
      onTertiary: "#2D2500",
      tertiaryContainer: "#A3903F",
      onTertiaryContainer: "#000000",
      error: "#FFD2CB",
      onError: "#48140D",
      errorContainer: "#CC7B6F",
      onErrorContainer: "#000000",
      background: "#111318",
      onBackground: "#E1E2E9",
      surface: "#121318",
      onSurface: "#FFFFFF",
      surfaceVariant: "#42474E",
      onSurfaceVariant: "#D8DDE5",
      outline: "#ADB2BA",
      outlineVariant: "#8B9198",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#E3E2E9",
      inverseOnSurface: "#292A2F",
      inversePrimary: "#234978",
      primaryFixed: "#D4E3FF",
      onPrimaryFixed: "#001128",
      primaryFixedDim: "#A6C8FF",
      onPrimaryFixedVariant: "#0B3765",
      secondaryFixed: "#FFD6FE",
      onSecondaryFixed: "#24002C",
      secondaryFixedDim: "#EBB5ED",
      onSecondaryFixedVariant: "#4F2654",
      tertiaryFixed: "#F9E287",
      onTertiaryFixed: "#161100",
      tertiaryFixedDim: "#DCC66E",
      onTertiaryFixedVariant: "#403500",
      surfaceDim: "#121318",
      surfaceBright: "#43444A",
      surfaceContainerLowest: "#06070C",
      surfaceContainerLow: "#1C1D23",
      surfaceContainer: "#26282D",
      surfaceContainerHigh: "#313238",
      surfaceContainerHighest: "#3C3D43"
    },
    "dark-high-contrast": {
      primary: "#EAF0FF",
      surfaceTint: "#A6C8FF",
      onPrimary: "#000000",
      primaryContainer: "#A2C4FB",
      onPrimaryContainer: "#000B1E",
      secondary: "#FFEAFB",
      onSecondary: "#000000",
      secondaryContainer: "#E7B1E9",
      onSecondaryContainer: "#1B0021",
      tertiary: "#FFF0BC",
      onTertiary: "#000000",
      tertiaryContainer: "#D8C26B",
      onTertiaryContainer: "#0F0B00",
      error: "#FFECE9",
      onError: "#000000",
      errorContainer: "#FFAEA1",
      onErrorContainer: "#220000",
      background: "#111318",
      onBackground: "#E1E2E9",
      surface: "#121318",
      onSurface: "#FFFFFF",
      surfaceVariant: "#42474E",
      onSurfaceVariant: "#FFFFFF",
      outline: "#EBF0F8",
      outlineVariant: "#BEC3CB",
      shadow: "#000000",
      scrim: "#000000",
      inverseSurface: "#E3E2E9",
      inverseOnSurface: "#000000",
      inversePrimary: "#234978",
      primaryFixed: "#D4E3FF",
      onPrimaryFixed: "#000000",
      primaryFixedDim: "#A6C8FF",
      onPrimaryFixedVariant: "#001128",
      secondaryFixed: "#FFD6FE",
      onSecondaryFixed: "#000000",
      secondaryFixedDim: "#EBB5ED",
      onSecondaryFixedVariant: "#24002C",
      tertiaryFixed: "#F9E287",
      onTertiaryFixed: "#000000",
      tertiaryFixedDim: "#DCC66E",
      onTertiaryFixedVariant: "#161100",
      surfaceDim: "#121318",
      surfaceBright: "#4F5056",
      surfaceContainerLowest: "#000000",
      surfaceContainerLow: "#1E1F25",
      surfaceContainer: "#2F3036",
      surfaceContainerHigh: "#3A3B41",
      surfaceContainerHighest: "#46464C"
    }
  },
  palettes: {
    primary: {
      0: "#000000",
      5: "#001128",
      10: "#001C3A",
      15: "#00264C",
      20: "#00315F",
      25: "#003C72",
      30: "#004786",
      35: "#00539A",
      40: "#005FAF",
      50: "#1D78D4",
      60: "#4492F0",
      70: "#72ADFF",
      80: "#A5C8FF",
      90: "#D4E3FF",
      95: "#EBF1FF",
      98: "#F9F9FF",
      99: "#FDFCFF",
      100: "#FFFFFF"
    },
    secondary: {
      0: "#000000",
      5: "#24002B",
      10: "#35003F",
      15: "#460052",
      20: "#570066",
      25: "#69007A",
      30: "#7B008F",
      35: "#8C10A1",
      40: "#9A25AE",
      50: "#B744CA",
      60: "#D560E6",
      70: "#F07EFF",
      80: "#F9ABFF",
      90: "#FFD6FE",
      95: "#FFEBFB",
      98: "#FFF7FA",
      99: "#FFFBFF",
      100: "#FFFFFF"
    },
    tertiary: {
      0: "#000000",
      5: "#161100",
      10: "#221B00",
      15: "#2E2500",
      20: "#3A3000",
      25: "#473B00",
      30: "#544600",
      35: "#615100",
      40: "#6F5D00",
      50: "#8A7612",
      60: "#A6902D",
      70: "#C2AA45",
      80: "#DFC65D",
      90: "#FCE276",
      95: "#FFF0C0",
      98: "#FFF9EE",
      99: "#FFFBFF",
      100: "#FFFFFF"
    },
    neutral: {
      0: "#000000",
      5: "#111111",
      10: "#1C1B1B",
      15: "#262626",
      20: "#313030",
      25: "#3C3B3B",
      30: "#484646",
      35: "#535252",
      40: "#605E5E",
      50: "#797676",
      60: "#939090",
      70: "#ADAAAA",
      80: "#C9C6C5",
      90: "#E5E2E1",
      95: "#F4F0EF",
      98: "#FDF8F8",
      99: "#FEFBFF",
      100: "#FFFFFF"
    },
    "neutral-variant": {
      0: "#000000",
      5: "#111111",
      10: "#1B1B1C",
      15: "#262626",
      20: "#303031",
      25: "#3C3B3C",
      30: "#474647",
      35: "#535253",
      40: "#5F5E5F",
      50: "#787777",
      60: "#929091",
      70: "#ADABAB",
      80: "#C8C6C6",
      90: "#E4E2E2",
      95: "#F3F0F0",
      98: "#FCF9F9",
      99: "#FFFBFC",
      100: "#FFFFFF"
    }
  }
}, ta = ({ palette: r, shadows: e }) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: e[1],
        border: `0px solid ${r.outlineVariant.main}`,
        color: r.onBackground.main,
        backgroundColor: r.surfaceBright.main,
        "&:before": {
          backgroundColor: r.surfaceBright.main,
          display: "none"
        },
        "&.Mui-disabled": {
          backgroundColor: r.inverseOnSurface.main,
          color: r.inverseSurface.main,
          border: `0px solid ${r.outlineVariant.main}`
        },
        "& .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper ": {
          color: r.onBackground.main
        }
      }
    }
  }
}), oa = ({ palette: r }) => ({
  MuiAlert: {
    defaultProps: {
      variant: "standard"
    },
    styleOverrides: {
      root: {
        borderRadius: "20px"
      },
      standardError: {
        background: r.errorContainer.main,
        color: r.onErrorContainer.main
      },
      standardInfo: {
        background: r.infoContainer.main,
        color: r.infoContainer.contrastText
      },
      standardWarning: {
        background: r.warningContainer.main,
        color: r.onWarningContainer.main
      },
      standardSuccess: {
        background: r.successContainer.main,
        color: r.onSuccessContainer.main
      },
      filledError: {
        background: r.error.main,
        color: r.onError.main
      },
      filledInfo: {
        background: r.info.main,
        color: r.onInfo.main
      },
      filledWarning: {
        background: r.warning.main,
        color: r.onWarning.main
      },
      filledSuccess: {
        background: r.success.main,
        color: r.onSuccess.main
      },
      outlinedError: {
        color: r.error.main
      },
      outlinedInfo: {
        color: r.info.main
      },
      outlinedWarning: {
        color: r.warning.main
      },
      outlinedSuccess: {
        color: r.success.main
      }
    }
  }
}), aa = ({ palette: r }) => ({
  MuiAppBar: {
    defaultProps: {
      elevation: 0,
      color: "default"
    },
    styleOverrides: {
      colorDefault: {
        background: r.surfaceContainer.main,
        color: r.onSurface.main
      },
      colorPrimary: {
        background: r.surface.main,
        color: r.onSurface.main
      }
    }
  }
}), ia = ({ palette: r }) => ({
  MuiBadge: {
    defaultProps: { color: "default" },
    variants: [
      {
        props: { color: "default" },
        style: {
          ".MuiBadge-badge": {
            backgroundColor: r.error.main,
            color: r.onError.main
          }
        }
      }
    ]
  }
});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lr(r) {
  return r < 0 ? -1 : r === 0 ? 0 : 1;
}
function Gr(r, e, n) {
  return (1 - n) * r + n * e;
}
function sa(r, e, n) {
  return n < r ? r : n > e ? e : n;
}
function ee(r, e, n) {
  return n < r ? r : n > e ? e : n;
}
function Ie(r) {
  return r = r % 360, r < 0 && (r = r + 360), r;
}
function ca(r, e) {
  return Ie(e - r) <= 180 ? 1 : -1;
}
function ua(r, e) {
  return 180 - Math.abs(Math.abs(r - e) - 180);
}
function Ee(r, e) {
  const n = r[0] * e[0][0] + r[1] * e[0][1] + r[2] * e[0][2], t = r[0] * e[1][0] + r[1] * e[1][1] + r[2] * e[1][2], o = r[0] * e[2][0] + r[1] * e[2][1] + r[2] * e[2][2];
  return [n, t, o];
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fa = [
  [0.41233895, 0.35762064, 0.18051042],
  [0.2126, 0.7152, 0.0722],
  [0.01932141, 0.11916382, 0.95034478]
], da = [
  [
    3.2413774792388685,
    -1.5376652402851851,
    -0.49885366846268053
  ],
  [
    -0.9691452513005321,
    1.8758853451067872,
    0.04156585616912061
  ],
  [
    0.05562093689691305,
    -0.20395524564742123,
    1.0571799111220335
  ]
], la = [95.047, 100, 108.883];
function Be(r, e, n) {
  return (255 << 24 | (r & 255) << 16 | (e & 255) << 8 | n & 255) >>> 0;
}
function yn(r) {
  const e = wr(r[0]), n = wr(r[1]), t = wr(r[2]);
  return Be(e, n, t);
}
function Rn(r) {
  return r >> 16 & 255;
}
function $n(r) {
  return r >> 8 & 255;
}
function Nn(r) {
  return r & 255;
}
function ma(r, e, n) {
  const t = da, o = t[0][0] * r + t[0][1] * e + t[0][2] * n, a = t[1][0] * r + t[1][1] * e + t[1][2] * n, i = t[2][0] * r + t[2][1] * e + t[2][2] * n, s = wr(o), c = wr(a), u = wr(i);
  return Be(s, c, u);
}
function ha(r) {
  const e = Lr(Rn(r)), n = Lr($n(r)), t = Lr(Nn(r));
  return Ee([e, n, t], fa);
}
function ya(r) {
  const e = kr(r), n = wr(e);
  return Be(n, n, n);
}
function Te(r) {
  const e = ha(r)[1];
  return 116 * Ln(e / 100) - 16;
}
function kr(r) {
  return 100 * pa((r + 16) / 116);
}
function Pe(r) {
  return Ln(r / 100) * 116 - 16;
}
function Lr(r) {
  const e = r / 255;
  return e <= 0.040449936 ? e / 12.92 * 100 : Math.pow((e + 0.055) / 1.055, 2.4) * 100;
}
function wr(r) {
  const e = r / 100;
  let n = 0;
  return e <= 31308e-7 ? n = e * 12.92 : n = 1.055 * Math.pow(e, 1 / 2.4) - 0.055, sa(0, 255, Math.round(n * 255));
}
function ga() {
  return la;
}
function Ln(r) {
  const e = 0.008856451679035631, n = 24389 / 27;
  return r > e ? Math.pow(r, 1 / 3) : (n * r + 16) / 116;
}
function pa(r) {
  const e = 0.008856451679035631, n = 24389 / 27, t = r * r * r;
  return t > e ? t : (116 * r - 16) / n;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr {
  /**
   * Create ViewingConditions from a simple, physically relevant, set of
   * parameters.
   *
   * @param whitePoint White point, measured in the XYZ color space.
   *     default = D65, or sunny day afternoon
   * @param adaptingLuminance The luminance of the adapting field. Informally,
   *     how bright it is in the room where the color is viewed. Can be
   *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
   *     or 200 lux.
   * @param backgroundLstar The lightness of the area surrounding the color.
   *     measured by L* in L*a*b*. default = 50.0
   * @param surround A general description of the lighting surrounding the
   *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
   *     dimly light room, like watching TV at home at night. 2.0 means there
   *     is no difference between the lighting on the color and around it.
   *     default = 2.0
   * @param discountingIlluminant Whether the eye accounts for the tint of the
   *     ambient lighting, such as knowing an apple is still red in green light.
   *     default = false, the eye does not perform this process on
   *       self-luminous objects like displays.
   */
  static make(e = ga(), n = 200 / Math.PI * kr(50) / 100, t = 50, o = 2, a = !1) {
    const i = e, s = i[0] * 0.401288 + i[1] * 0.650173 + i[2] * -0.051461, c = i[0] * -0.250268 + i[1] * 1.204414 + i[2] * 0.045854, u = i[0] * -2079e-6 + i[1] * 0.048952 + i[2] * 0.953127, d = 0.8 + o / 10, h = d >= 0.9 ? Gr(0.59, 0.69, (d - 0.9) * 10) : Gr(0.525, 0.59, (d - 0.8) * 10);
    let l = a ? 1 : d * (1 - 1 / 3.6 * Math.exp((-n - 42) / 92));
    l = l > 1 ? 1 : l < 0 ? 0 : l;
    const b = d, p = [
      l * (100 / s) + 1 - l,
      l * (100 / c) + 1 - l,
      l * (100 / u) + 1 - l
    ], m = 1 / (5 * n + 1), v = m * m * m * m, P = 1 - v, R = v * n + 0.1 * P * P * Math.cbrt(5 * n), E = kr(t) / e[1], O = 1.48 + Math.sqrt(E), y = 0.725 / Math.pow(E, 0.2), U = y, L = [
      Math.pow(R * p[0] * s / 100, 0.42),
      Math.pow(R * p[1] * c / 100, 0.42),
      Math.pow(R * p[2] * u / 100, 0.42)
    ], W = [
      400 * L[0] / (L[0] + 27.13),
      400 * L[1] / (L[1] + 27.13),
      400 * L[2] / (L[2] + 27.13)
    ], G = (2 * W[0] + W[1] + 0.05 * W[2]) * y;
    return new xr(E, G, y, U, h, b, p, R, Math.pow(R, 0.25), O);
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(e, n, t, o, a, i, s, c, u, d) {
    this.n = e, this.aw = n, this.nbb = t, this.ncb = o, this.c = a, this.nc = i, this.rgbD = s, this.fl = c, this.fLRoot = u, this.z = d;
  }
}
xr.DEFAULT = xr.make();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tr {
  /**
   * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
   * the following combinations:
   *      -  {j or q} and {c, m, or s} and hue
   *      - jstar, astar, bstar
   * Prefer using a static method that constructs from 3 of those dimensions.
   * This constructor is intended for those methods to use to return all
   * possible dimensions.
   *
   * @param hue
   * @param chroma informally, colorfulness / color intensity. like saturation
   *     in HSL, except perceptually accurate.
   * @param j lightness
   * @param q brightness; ratio of lightness to white point's lightness
   * @param m colorfulness
   * @param s saturation; ratio of chroma to white point's chroma
   * @param jstar CAM16-UCS J coordinate
   * @param astar CAM16-UCS a coordinate
   * @param bstar CAM16-UCS b coordinate
   */
  constructor(e, n, t, o, a, i, s, c, u) {
    this.hue = e, this.chroma = n, this.j = t, this.q = o, this.m = a, this.s = i, this.jstar = s, this.astar = c, this.bstar = u;
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(e) {
    const n = this.jstar - e.jstar, t = this.astar - e.astar, o = this.bstar - e.bstar, a = Math.sqrt(n * n + t * t + o * o);
    return 1.41 * Math.pow(a, 0.63);
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(e) {
    return tr.fromIntInViewingConditions(e, xr.DEFAULT);
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(e, n) {
    const t = (e & 16711680) >> 16, o = (e & 65280) >> 8, a = e & 255, i = Lr(t), s = Lr(o), c = Lr(a), u = 0.41233895 * i + 0.35762064 * s + 0.18051042 * c, d = 0.2126 * i + 0.7152 * s + 0.0722 * c, h = 0.01932141 * i + 0.11916382 * s + 0.95034478 * c, l = 0.401288 * u + 0.650173 * d - 0.051461 * h, b = -0.250268 * u + 1.204414 * d + 0.045854 * h, p = -2079e-6 * u + 0.048952 * d + 0.953127 * h, m = n.rgbD[0] * l, v = n.rgbD[1] * b, P = n.rgbD[2] * p, R = Math.pow(n.fl * Math.abs(m) / 100, 0.42), E = Math.pow(n.fl * Math.abs(v) / 100, 0.42), O = Math.pow(n.fl * Math.abs(P) / 100, 0.42), y = lr(m) * 400 * R / (R + 27.13), U = lr(v) * 400 * E / (E + 27.13), L = lr(P) * 400 * O / (O + 27.13), W = (11 * y + -12 * U + L) / 11, G = (y + U - 2 * L) / 9, H = (20 * y + 20 * U + 21 * L) / 20, ir = (40 * y + 20 * U + L) / 20, cr = Math.atan2(G, W) * 180 / Math.PI, Q = cr < 0 ? cr + 360 : cr >= 360 ? cr - 360 : cr, vr = Q * Math.PI / 180, ar = ir * n.nbb, er = 100 * Math.pow(ar / n.aw, n.c * n.z), Cr = 4 / n.c * Math.sqrt(er / 100) * (n.aw + 4) * n.fLRoot, Er = Q < 20.14 ? Q + 360 : Q, g = 0.25 * (Math.cos(Er * Math.PI / 180 + 2) + 3.8), A = 5e4 / 13 * g * n.nc * n.ncb * Math.sqrt(W * W + G * G) / (H + 0.305), M = Math.pow(A, 0.9) * Math.pow(1.64 - Math.pow(0.29, n.n), 0.73), S = M * Math.sqrt(er / 100), B = S * n.fLRoot, D = 50 * Math.sqrt(M * n.c / (n.aw + 4)), I = (1 + 100 * 7e-3) * er / (1 + 7e-3 * er), _ = 1 / 0.0228 * Math.log(1 + 0.0228 * B), V = _ * Math.cos(vr), $ = _ * Math.sin(vr);
    return new tr(Q, S, er, Cr, B, D, I, V, $);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(e, n, t) {
    return tr.fromJchInViewingConditions(e, n, t, xr.DEFAULT);
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(e, n, t, o) {
    const a = 4 / o.c * Math.sqrt(e / 100) * (o.aw + 4) * o.fLRoot, i = n * o.fLRoot, s = n / Math.sqrt(e / 100), c = 50 * Math.sqrt(s * o.c / (o.aw + 4)), u = t * Math.PI / 180, d = (1 + 100 * 7e-3) * e / (1 + 7e-3 * e), h = 1 / 0.0228 * Math.log(1 + 0.0228 * i), l = h * Math.cos(u), b = h * Math.sin(u);
    return new tr(t, n, e, a, i, c, d, l, b);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(e, n, t) {
    return tr.fromUcsInViewingConditions(e, n, t, xr.DEFAULT);
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromUcsInViewingConditions(e, n, t, o) {
    const a = n, i = t, s = Math.sqrt(a * a + i * i), u = (Math.exp(s * 0.0228) - 1) / 0.0228 / o.fLRoot;
    let d = Math.atan2(i, a) * (180 / Math.PI);
    d < 0 && (d += 360);
    const h = e / (1 - (e - 100) * 7e-3);
    return tr.fromJchInViewingConditions(h, u, d, o);
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(xr.DEFAULT);
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(e) {
    const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), t = Math.pow(n / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), o = this.hue * Math.PI / 180, a = 0.25 * (Math.cos(o + 2) + 3.8), i = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), s = a * (5e4 / 13) * e.nc * e.ncb, c = i / e.nbb, u = Math.sin(o), d = Math.cos(o), h = 23 * (c + 0.305) * t / (23 * s + 11 * t * d + 108 * t * u), l = h * d, b = h * u, p = (460 * c + 451 * l + 288 * b) / 1403, m = (460 * c - 891 * l - 261 * b) / 1403, v = (460 * c - 220 * l - 6300 * b) / 1403, P = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p))), R = lr(p) * (100 / e.fl) * Math.pow(P, 1 / 0.42), E = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), O = lr(m) * (100 / e.fl) * Math.pow(E, 1 / 0.42), y = Math.max(0, 27.13 * Math.abs(v) / (400 - Math.abs(v))), U = lr(v) * (100 / e.fl) * Math.pow(y, 1 / 0.42), L = R / e.rgbD[0], W = O / e.rgbD[1], G = U / e.rgbD[2], H = 1.86206786 * L - 1.01125463 * W + 0.14918677 * G, ir = 0.38752654 * L + 0.62144744 * W - 897398e-8 * G, sr = -0.0158415 * L - 0.03412294 * W + 1.04996444 * G;
    return ma(H, ir, sr);
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(e, n, t, o) {
    const a = 0.401288 * e + 0.650173 * n - 0.051461 * t, i = -0.250268 * e + 1.204414 * n + 0.045854 * t, s = -2079e-6 * e + 0.048952 * n + 0.953127 * t, c = o.rgbD[0] * a, u = o.rgbD[1] * i, d = o.rgbD[2] * s, h = Math.pow(o.fl * Math.abs(c) / 100, 0.42), l = Math.pow(o.fl * Math.abs(u) / 100, 0.42), b = Math.pow(o.fl * Math.abs(d) / 100, 0.42), p = lr(c) * 400 * h / (h + 27.13), m = lr(u) * 400 * l / (l + 27.13), v = lr(d) * 400 * b / (b + 27.13), P = (11 * p + -12 * m + v) / 11, R = (p + m - 2 * v) / 9, E = (20 * p + 20 * m + 21 * v) / 20, O = (40 * p + 20 * m + v) / 20, U = Math.atan2(R, P) * 180 / Math.PI, L = U < 0 ? U + 360 : U >= 360 ? U - 360 : U, W = L * Math.PI / 180, G = O * o.nbb, H = 100 * Math.pow(G / o.aw, o.c * o.z), ir = 4 / o.c * Math.sqrt(H / 100) * (o.aw + 4) * o.fLRoot, sr = L < 20.14 ? L + 360 : L, cr = 1 / 4 * (Math.cos(sr * Math.PI / 180 + 2) + 3.8), vr = 5e4 / 13 * cr * o.nc * o.ncb * Math.sqrt(P * P + R * R) / (E + 0.305), ar = Math.pow(vr, 0.9) * Math.pow(1.64 - Math.pow(0.29, o.n), 0.73), er = ar * Math.sqrt(H / 100), Cr = er * o.fLRoot, Er = 50 * Math.sqrt(ar * o.c / (o.aw + 4)), g = (1 + 100 * 7e-3) * H / (1 + 7e-3 * H), x = Math.log(1 + 0.0228 * Cr) / 0.0228, A = x * Math.cos(W), M = x * Math.sin(W);
    return new tr(L, er, H, ir, Cr, Er, g, A, M);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(e) {
    const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), t = Math.pow(n / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9), o = this.hue * Math.PI / 180, a = 0.25 * (Math.cos(o + 2) + 3.8), i = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z), s = a * (5e4 / 13) * e.nc * e.ncb, c = i / e.nbb, u = Math.sin(o), d = Math.cos(o), h = 23 * (c + 0.305) * t / (23 * s + 11 * t * d + 108 * t * u), l = h * d, b = h * u, p = (460 * c + 451 * l + 288 * b) / 1403, m = (460 * c - 891 * l - 261 * b) / 1403, v = (460 * c - 220 * l - 6300 * b) / 1403, P = Math.max(0, 27.13 * Math.abs(p) / (400 - Math.abs(p))), R = lr(p) * (100 / e.fl) * Math.pow(P, 1 / 0.42), E = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), O = lr(m) * (100 / e.fl) * Math.pow(E, 1 / 0.42), y = Math.max(0, 27.13 * Math.abs(v) / (400 - Math.abs(v))), U = lr(v) * (100 / e.fl) * Math.pow(y, 1 / 0.42), L = R / e.rgbD[0], W = O / e.rgbD[1], G = U / e.rgbD[2], H = 1.86206786 * L - 1.01125463 * W + 0.14918677 * G, ir = 0.38752654 * L + 0.62144744 * W - 897398e-8 * G, sr = -0.0158415 * L - 0.03412294 * W + 1.04996444 * G;
    return [H, ir, sr];
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(e) {
    return (e + Math.PI * 8) % (Math.PI * 2);
  }
  /**
   * Delinearizes an RGB component, returning a floating-point
   * number.
   *
   * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
   * linear R/G/B channel
   * @return 0.0 <= output <= 255.0, color channel converted to
   * regular RGB space
   */
  static trueDelinearized(e) {
    const n = e / 100;
    let t = 0;
    return n <= 31308e-7 ? t = n * 12.92 : t = 1.055 * Math.pow(n, 1 / 2.4) - 0.055, t * 255;
  }
  static chromaticAdaptation(e) {
    const n = Math.pow(Math.abs(e), 0.42);
    return lr(e) * 400 * n / (n + 27.13);
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(e) {
    const n = Ee(e, T.SCALED_DISCOUNT_FROM_LINRGB), t = T.chromaticAdaptation(n[0]), o = T.chromaticAdaptation(n[1]), a = T.chromaticAdaptation(n[2]), i = (11 * t + -12 * o + a) / 11, s = (t + o - 2 * a) / 9;
    return Math.atan2(s, i);
  }
  static areInCyclicOrder(e, n, t) {
    const o = T.sanitizeRadians(n - e), a = T.sanitizeRadians(t - e);
    return o < a;
  }
  /**
   * Solves the lerp equation.
   *
   * @param source The starting number.
   * @param mid The number in the middle.
   * @param target The ending number.
   * @return A number t such that lerp(source, target, t) = mid.
   */
  static intercept(e, n, t) {
    return (n - e) / (t - e);
  }
  static lerpPoint(e, n, t) {
    return [
      e[0] + (t[0] - e[0]) * n,
      e[1] + (t[1] - e[1]) * n,
      e[2] + (t[2] - e[2]) * n
    ];
  }
  /**
   * Intersects a segment with a plane.
   *
   * @param source The coordinates of point A.
   * @param coordinate The R-, G-, or B-coordinate of the plane.
   * @param target The coordinates of point B.
   * @param axis The axis the plane is perpendicular with. (0: R, 1:
   * G, 2: B)
   * @return The intersection point of the segment AB with the plane
   * R=coordinate, G=coordinate, or B=coordinate
   */
  static setCoordinate(e, n, t, o) {
    const a = T.intercept(e[o], n, t[o]);
    return T.lerpPoint(e, a, t);
  }
  static isBounded(e) {
    return 0 <= e && e <= 100;
  }
  /**
   * Returns the nth possible vertex of the polygonal intersection.
   *
   * @param y The Y value of the plane.
   * @param n The zero-based index of the point. 0 <= n <= 11.
   * @return The nth possible vertex of the polygonal intersection
   * of the y plane and the RGB cube, in linear RGB coordinates, if
   * it exists. If this possible vertex lies outside of the cube,
   * [-1.0, -1.0, -1.0] is returned.
   */
  static nthVertex(e, n) {
    const t = T.Y_FROM_LINRGB[0], o = T.Y_FROM_LINRGB[1], a = T.Y_FROM_LINRGB[2], i = n % 4 <= 1 ? 0 : 100, s = n % 2 === 0 ? 0 : 100;
    if (n < 4) {
      const c = i, u = s, d = (e - c * o - u * a) / t;
      return T.isBounded(d) ? [d, c, u] : [-1, -1, -1];
    } else if (n < 8) {
      const c = i, u = s, d = (e - u * t - c * a) / o;
      return T.isBounded(d) ? [u, d, c] : [-1, -1, -1];
    } else {
      const c = i, u = s, d = (e - c * t - u * o) / a;
      return T.isBounded(d) ? [c, u, d] : [-1, -1, -1];
    }
  }
  /**
   * Finds the segment containing the desired color.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return A list of two sets of linear RGB coordinates, each
   * corresponding to an endpoint of the segment containing the
   * desired color.
   */
  static bisectToSegment(e, n) {
    let t = [-1, -1, -1], o = t, a = 0, i = 0, s = !1, c = !0;
    for (let u = 0; u < 12; u++) {
      const d = T.nthVertex(e, u);
      if (d[0] < 0)
        continue;
      const h = T.hueOf(d);
      if (!s) {
        t = d, o = d, a = h, i = h, s = !0;
        continue;
      }
      (c || T.areInCyclicOrder(a, h, i)) && (c = !1, T.areInCyclicOrder(a, n, h) ? (o = d, i = h) : (t = d, a = h));
    }
    return [t, o];
  }
  static midpoint(e, n) {
    return [
      (e[0] + n[0]) / 2,
      (e[1] + n[1]) / 2,
      (e[2] + n[2]) / 2
    ];
  }
  static criticalPlaneBelow(e) {
    return Math.floor(e - 0.5);
  }
  static criticalPlaneAbove(e) {
    return Math.ceil(e - 0.5);
  }
  /**
   * Finds a color with the given Y and hue on the boundary of the
   * cube.
   *
   * @param y The Y value of the color.
   * @param targetHue The hue of the color.
   * @return The desired color, in linear RGB coordinates.
   */
  static bisectToLimit(e, n) {
    const t = T.bisectToSegment(e, n);
    let o = t[0], a = T.hueOf(o), i = t[1];
    for (let s = 0; s < 3; s++)
      if (o[s] !== i[s]) {
        let c = -1, u = 255;
        o[s] < i[s] ? (c = T.criticalPlaneBelow(T.trueDelinearized(o[s])), u = T.criticalPlaneAbove(T.trueDelinearized(i[s]))) : (c = T.criticalPlaneAbove(T.trueDelinearized(o[s])), u = T.criticalPlaneBelow(T.trueDelinearized(i[s])));
        for (let d = 0; d < 8 && !(Math.abs(u - c) <= 1); d++) {
          const h = Math.floor((c + u) / 2), l = T.CRITICAL_PLANES[h], b = T.setCoordinate(o, l, i, s), p = T.hueOf(b);
          T.areInCyclicOrder(a, n, p) ? (i = b, u = h) : (o = b, a = p, c = h);
        }
      }
    return T.midpoint(o, i);
  }
  static inverseChromaticAdaptation(e) {
    const n = Math.abs(e), t = Math.max(0, 27.13 * n / (400 - n));
    return lr(e) * Math.pow(t, 1 / 0.42);
  }
  /**
   * Finds a color with the given hue, chroma, and Y.
   *
   * @param hueRadians The desired hue in radians.
   * @param chroma The desired chroma.
   * @param y The desired Y.
   * @return The desired color as a hexadecimal integer, if found; 0
   * otherwise.
   */
  static findResultByJ(e, n, t) {
    let o = Math.sqrt(t) * 11;
    const a = xr.DEFAULT, i = 1 / Math.pow(1.64 - Math.pow(0.29, a.n), 0.73), c = 0.25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * a.nc * a.ncb, u = Math.sin(e), d = Math.cos(e);
    for (let h = 0; h < 5; h++) {
      const l = o / 100, b = n === 0 || o === 0 ? 0 : n / Math.sqrt(l), p = Math.pow(b * i, 1 / 0.9), v = a.aw * Math.pow(l, 1 / a.c / a.z) / a.nbb, P = 23 * (v + 0.305) * p / (23 * c + 11 * p * d + 108 * p * u), R = P * d, E = P * u, O = (460 * v + 451 * R + 288 * E) / 1403, y = (460 * v - 891 * R - 261 * E) / 1403, U = (460 * v - 220 * R - 6300 * E) / 1403, L = T.inverseChromaticAdaptation(O), W = T.inverseChromaticAdaptation(y), G = T.inverseChromaticAdaptation(U), H = Ee([L, W, G], T.LINRGB_FROM_SCALED_DISCOUNT);
      if (H[0] < 0 || H[1] < 0 || H[2] < 0)
        return 0;
      const ir = T.Y_FROM_LINRGB[0], sr = T.Y_FROM_LINRGB[1], cr = T.Y_FROM_LINRGB[2], Q = ir * H[0] + sr * H[1] + cr * H[2];
      if (Q <= 0)
        return 0;
      if (h === 4 || Math.abs(Q - t) < 2e-3)
        return H[0] > 100.01 || H[1] > 100.01 || H[2] > 100.01 ? 0 : yn(H);
      o = o - (Q - t) * o / (2 * Q);
    }
    return 0;
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return A hexadecimal representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToInt(e, n, t) {
    if (n < 1e-4 || t < 1e-4 || t > 99.9999)
      return ya(t);
    e = Ie(e);
    const o = e / 180 * Math.PI, a = kr(t), i = T.findResultByJ(o, n, a);
    if (i !== 0)
      return i;
    const s = T.bisectToLimit(a, o);
    return yn(s);
  }
  /**
   * Finds an sRGB color with the given hue, chroma, and L*, if
   * possible.
   *
   * @param hueDegrees The desired hue, in degrees.
   * @param chroma The desired chroma.
   * @param lstar The desired L*.
   * @return An CAM16 object representing the sRGB color. The color
   * has sufficiently close hue, chroma, and L* to the desired
   * values, if possible; otherwise, the hue and L* will be
   * sufficiently close, and chroma will be maximized.
   */
  static solveToCam(e, n, t) {
    return tr.fromInt(T.solveToInt(e, n, t));
  }
}
T.SCALED_DISCOUNT_FROM_LINRGB = [
  [
    0.001200833568784504,
    0.002389694492170889,
    2795742885861124e-19
  ],
  [
    5891086651375999e-19,
    0.0029785502573438758,
    3270666104008398e-19
  ],
  [
    10146692491640572e-20,
    5364214359186694e-19,
    0.0032979401770712076
  ]
];
T.LINRGB_FROM_SCALED_DISCOUNT = [
  [
    1373.2198709594231,
    -1100.4251190754821,
    -7.278681089101213
  ],
  [
    -271.815969077903,
    559.6580465940733,
    -32.46047482791194
  ],
  [
    1.9622899599665666,
    -57.173814538844006,
    308.7233197812385
  ]
];
T.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722];
T.CRITICAL_PLANES = [
  0.015176349177441876,
  0.045529047532325624,
  0.07588174588720938,
  0.10623444424209313,
  0.13658714259697685,
  0.16693984095186062,
  0.19729253930674434,
  0.2276452376616281,
  0.2579979360165119,
  0.28835063437139563,
  0.3188300904430532,
  0.350925934958123,
  0.3848314933096426,
  0.42057480301049466,
  0.458183274052838,
  0.4976837250274023,
  0.5391024159806381,
  0.5824650784040898,
  0.6277969426914107,
  0.6751227633498623,
  0.7244668422128921,
  0.775853049866786,
  0.829304845476233,
  0.8848452951698498,
  0.942497089126609,
  1.0022825574869039,
  1.0642236851973577,
  1.1283421258858297,
  1.1946592148522128,
  1.2631959812511864,
  1.3339731595349034,
  1.407011200216447,
  1.4823302800086415,
  1.5599503113873272,
  1.6398909516233677,
  1.7221716113234105,
  1.8068114625156377,
  1.8938294463134073,
  1.9832442801866852,
  2.075074464868551,
  2.1693382909216234,
  2.2660538449872063,
  2.36523901573795,
  2.4669114995532007,
  2.5710888059345764,
  2.6777882626779785,
  2.7870270208169257,
  2.898822059350997,
  3.0131901897720907,
  3.1301480604002863,
  3.2497121605402226,
  3.3718988244681087,
  3.4967242352587946,
  3.624204428461639,
  3.754355295633311,
  3.887192587735158,
  4.022731918402185,
  4.160988767090289,
  4.301978482107941,
  4.445716283538092,
  4.592217266055746,
  4.741496401646282,
  4.893568542229298,
  5.048448422192488,
  5.20615066083972,
  5.3666897647573375,
  5.5300801301023865,
  5.696336044816294,
  5.865471690767354,
  6.037501145825082,
  6.212438385869475,
  6.390297286737924,
  6.571091626112461,
  6.7548350853498045,
  6.941541251256611,
  7.131223617812143,
  7.323895587840543,
  7.5195704746346665,
  7.7182615035334345,
  7.919981813454504,
  8.124744458384042,
  8.332562408825165,
  8.543448553206703,
  8.757415699253682,
  8.974476575321063,
  9.194643831691977,
  9.417930041841839,
  9.644347703669503,
  9.873909240696694,
  10.106627003236781,
  10.342513269534024,
  10.58158024687427,
  10.8238400726681,
  11.069304815507364,
  11.317986476196008,
  11.569896988756009,
  11.825048221409341,
  12.083451977536606,
  12.345119996613247,
  12.610063955123938,
  12.878295467455942,
  13.149826086772048,
  13.42466730586372,
  13.702830557985108,
  13.984327217668513,
  14.269168601521828,
  14.55736596900856,
  14.848930523210871,
  15.143873411576273,
  15.44220572664832,
  15.743938506781891,
  16.04908273684337,
  16.35764934889634,
  16.66964922287304,
  16.985093187232053,
  17.30399201960269,
  17.62635644741625,
  17.95219714852476,
  18.281524751807332,
  18.614349837764564,
  18.95068293910138,
  19.290534541298456,
  19.633915083172692,
  19.98083495742689,
  20.331304511189067,
  20.685334046541502,
  21.042933821039977,
  21.404114048223256,
  21.76888489811322,
  22.137256497705877,
  22.50923893145328,
  22.884842241736916,
  23.264076429332462,
  23.6469514538663,
  24.033477234264016,
  24.42366364919083,
  24.817520537484558,
  25.21505769858089,
  25.61628489293138,
  26.021211842414342,
  26.429848230738664,
  26.842203703840827,
  27.258287870275353,
  27.678110301598522,
  28.10168053274597,
  28.529008062403893,
  28.96010235337422,
  29.39497283293396,
  29.83362889318845,
  30.276079891419332,
  30.722335150426627,
  31.172403958865512,
  31.62629557157785,
  32.08401920991837,
  32.54558406207592,
  33.010999283389665,
  33.4802739966603,
  33.953417292456834,
  34.430438229418264,
  34.911345834551085,
  35.39614910352207,
  35.88485700094671,
  36.37747846067349,
  36.87402238606382,
  37.37449765026789,
  37.87891309649659,
  38.38727753828926,
  38.89959975977785,
  39.41588851594697,
  39.93615253289054,
  40.460400508064545,
  40.98864111053629,
  41.520882981230194,
  42.05713473317016,
  42.597404951718396,
  43.141702194811224,
  43.6900349931913,
  44.24241185063697,
  44.798841244188324,
  45.35933162437017,
  45.92389141541209,
  46.49252901546552,
  47.065252796817916,
  47.64207110610409,
  48.22299226451468,
  48.808024568002054,
  49.3971762874833,
  49.9904556690408,
  50.587870934119984,
  51.189430279724725,
  51.79514187861014,
  52.40501387947288,
  53.0190544071392,
  53.637271562750364,
  54.259673423945976,
  54.88626804504493,
  55.517063457223934,
  56.15206766869424,
  56.79128866487574,
  57.43473440856916,
  58.08241284012621,
  58.734331877617365,
  59.39049941699807,
  60.05092333227251,
  60.715611475655585,
  61.38457167773311,
  62.057811747619894,
  62.7353394731159,
  63.417162620860914,
  64.10328893648692,
  64.79372614476921,
  65.48848194977529,
  66.18756403501224,
  66.89098006357258,
  67.59873767827808,
  68.31084450182222,
  69.02730813691093,
  69.74813616640164,
  70.47333615344107,
  71.20291564160104,
  71.93688215501312,
  72.67524319850172,
  73.41800625771542,
  74.16517879925733,
  74.9167682708136,
  75.67278210128072,
  76.43322770089146,
  77.1981124613393,
  77.96744375590167,
  78.74122893956174,
  79.51947534912904,
  80.30219030335869,
  81.08938110306934,
  81.88105503125999,
  82.67721935322541,
  83.4778813166706,
  84.28304815182372,
  85.09272707154808,
  85.90692527145302,
  86.72564993000343,
  87.54890820862819,
  88.3767072518277,
  89.2090541872801,
  90.04595612594655,
  90.88742016217518,
  91.73345337380438,
  92.58406282226491,
  93.43925555268066,
  94.29903859396902,
  95.16341895893969,
  96.03240364439274,
  96.9059996312159,
  97.78421388448044,
  98.6670533535366,
  99.55452497210776
];
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class or {
  static from(e, n, t) {
    return new or(T.solveToInt(e, n, t));
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(e) {
    return new or(e);
  }
  toInt() {
    return this.argb;
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue;
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(e) {
    this.setInternalState(T.solveToInt(e, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(e) {
    this.setInternalState(T.solveToInt(this.internalHue, e, this.internalTone));
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone;
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(e) {
    this.setInternalState(T.solveToInt(this.internalHue, this.internalChroma, e));
  }
  constructor(e) {
    this.argb = e;
    const n = tr.fromInt(e);
    this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = Te(e), this.argb = e;
  }
  setInternalState(e) {
    const n = tr.fromInt(e);
    this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = Te(e), this.argb = e;
  }
  /**
   * Translates a color into different [ViewingConditions].
   *
   * Colors change appearance. They look different with lights on versus off,
   * the same color, as in hex code, on white looks different when on black.
   * This is called color relativity, most famously explicated by Josef Albers
   * in Interaction of Color.
   *
   * In color science, color appearance models can account for this and
   * calculate the appearance of a color in different settings. HCT is based on
   * CAM16, a color appearance model, and uses it to make these calculations.
   *
   * See [ViewingConditions.make] for parameters affecting color appearance.
   */
  inViewingConditions(e) {
    const t = tr.fromInt(this.toInt()).xyzInViewingConditions(e), o = tr.fromXyzInViewingConditions(t[0], t[1], t[2], xr.make());
    return or.from(o.hue, o.chroma, Pe(t[1]));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de {
  /**
   * Blend the design color's HCT hue towards the key color's HCT
   * hue, in a way that leaves the original color recognizable and
   * recognizably shifted towards the key color.
   *
   * @param designColor ARGB representation of an arbitrary color.
   * @param sourceColor ARGB representation of the main theme color.
   * @return The design color with a hue shifted towards the
   * system's color, a slightly warmer/cooler variant of the design
   * color's hue.
   */
  static harmonize(e, n) {
    const t = or.fromInt(e), o = or.fromInt(n), a = ua(t.hue, o.hue), i = Math.min(a * 0.5, 15), s = Ie(t.hue + i * ca(t.hue, o.hue));
    return or.from(s, t.chroma, t.tone).toInt();
  }
  /**
   * Blends hue from one color into another. The chroma and tone of
   * the original color are maintained.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, with a hue blended towards to. Chroma and tone
   * are constant.
   */
  static hctHue(e, n, t) {
    const o = de.cam16Ucs(e, n, t), a = tr.fromInt(o), i = tr.fromInt(e);
    return or.from(a.hue, i.chroma, Te(e)).toInt();
  }
  /**
   * Blend in CAM16-UCS space.
   *
   * @param from ARGB representation of color
   * @param to ARGB representation of color
   * @param amount how much blending to perform; 0.0 >= and <= 1.0
   * @return from, blended towards to. Hue, chroma, and tone will
   * change.
   */
  static cam16Ucs(e, n, t) {
    const o = tr.fromInt(e), a = tr.fromInt(n), i = o.jstar, s = o.astar, c = o.bstar, u = a.jstar, d = a.astar, h = a.bstar, l = i + (u - i) * t, b = s + (d - s) * t, p = c + (h - c) * t;
    return tr.fromUcs(l, b, p).toInt();
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(e, n) {
    return e = ee(0, 100, e), n = ee(0, 100, n), nr.ratioOfYs(kr(e), kr(n));
  }
  static ratioOfYs(e, n) {
    const t = e > n ? e : n, o = t === n ? e : n;
    return (t + 5) / (o + 5);
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighter(e, n) {
    if (e < 0 || e > 100)
      return -1;
    const t = kr(e), o = n * (t + 5) - 5, a = nr.ratioOfYs(o, t), i = Math.abs(a - n);
    if (a < n && i > 0.04)
      return -1;
    const s = Pe(o) + 0.4;
    return s < 0 || s > 100 ? -1 : s;
  }
  /**
   * Returns a tone <= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns -1 if ratio cannot be achieved with tone parameter.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in -1 being returned.
   * @param ratio Contrast ratio of return value and tone.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darker(e, n) {
    if (e < 0 || e > 100)
      return -1;
    const t = kr(e), o = (t + 5) / n - 5, a = nr.ratioOfYs(t, o), i = Math.abs(a - n);
    if (a < n && i > 0.04)
      return -1;
    const s = Pe(o) - 0.4;
    return s < 0 || s > 100 ? -1 : s;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the ratio with tone. For example, there is no color lighter than T100.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 100 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static lighterUnsafe(e, n) {
    const t = nr.lighter(e, n);
    return t < 0 ? 100 : t;
  }
  /**
   * Returns a tone >= tone parameter that ensures ratio parameter.
   * Return value is between 0 and 100.
   * Returns 100 if ratio cannot be achieved with tone parameter.
   *
   * This method is unsafe because the returned value is guaranteed to be in
   * bounds for tone, i.e. between 0 and 100. However, that value may not reach
   * the [ratio with [tone]. For example, there is no color darker than T0.
   *
   * @param tone Tone return value must contrast with.
   * Range is 0 to 100. Invalid values will result in 0 being returned.
   * @param ratio Desired contrast ratio of return value and tone parameter.
   * Range is 1 to 21, invalid values have undefined behavior.
   */
  static darkerUnsafe(e, n) {
    const t = nr.darker(e, n);
    return t < 0 ? 0 : t;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(e) {
    const n = Math.round(e.hue) >= 90 && Math.round(e.hue) <= 111, t = Math.round(e.chroma) > 16, o = Math.round(e.tone) < 65;
    return n && t && o;
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(e) {
    return _e.isDisliked(e) ? or.from(e.hue, e.chroma, 70) : e;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(e) {
    return new F(e.name ?? "", e.palette, e.tone, e.isBackground ?? !1, e.background, e.secondBackground, e.contrastCurve, e.toneDeltaPair);
  }
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  constructor(e, n, t, o, a, i, s, c) {
    if (this.name = e, this.palette = n, this.tone = t, this.isBackground = o, this.background = a, this.secondBackground = i, this.contrastCurve = s, this.toneDeltaPair = c, this.hctCache = /* @__PURE__ */ new Map(), !a && i)
      throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);
    if (!a && s)
      throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);
    if (a && !s)
      throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`);
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(e) {
    return this.getHct(e).toInt();
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getHct(e) {
    const n = this.hctCache.get(e);
    if (n != null)
      return n;
    const t = this.getTone(e), o = this.palette(e).getHct(t);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, o), o;
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getTone(e) {
    const n = e.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const t = this.toneDeltaPair(e), o = t.roleA, a = t.roleB, i = t.delta, s = t.polarity, c = t.stayTogether, d = this.background(e).getTone(e), h = s === "nearer" || s === "lighter" && !e.isDark || s === "darker" && e.isDark, l = h ? o : a, b = h ? a : o, p = this.name === l.name, m = e.isDark ? 1 : -1, v = l.contrastCurve.getContrast(e.contrastLevel), P = b.contrastCurve.getContrast(e.contrastLevel), R = l.tone(e);
      let E = nr.ratioOfTones(d, R) >= v ? R : F.foregroundTone(d, v);
      const O = b.tone(e);
      let y = nr.ratioOfTones(d, O) >= P ? O : F.foregroundTone(d, P);
      return n && (E = F.foregroundTone(d, v), y = F.foregroundTone(d, P)), (y - E) * m >= i || (y = ee(0, 100, E + i * m), (y - E) * m >= i || (E = ee(0, 100, y - i * m))), 50 <= E && E < 60 ? m > 0 ? (E = 60, y = Math.max(y, E + i * m)) : (E = 49, y = Math.min(y, E + i * m)) : 50 <= y && y < 60 && (c ? m > 0 ? (E = 60, y = Math.max(y, E + i * m)) : (E = 49, y = Math.min(y, E + i * m)) : m > 0 ? y = 60 : y = 49), p ? E : y;
    } else {
      let t = this.tone(e);
      if (this.background == null)
        return t;
      const o = this.background(e).getTone(e), a = this.contrastCurve.getContrast(e.contrastLevel);
      if (nr.ratioOfTones(o, t) >= a || (t = F.foregroundTone(o, a)), n && (t = F.foregroundTone(o, a)), this.isBackground && 50 <= t && t < 60 && (nr.ratioOfTones(49, o) >= a ? t = 49 : t = 60), this.secondBackground) {
        const [i, s] = [this.background, this.secondBackground], [c, u] = [i(e).getTone(e), s(e).getTone(e)], [d, h] = [Math.max(c, u), Math.min(c, u)];
        if (nr.ratioOfTones(d, t) >= a && nr.ratioOfTones(h, t) >= a)
          return t;
        const l = nr.lighter(d, a), b = nr.darker(h, a), p = [];
        return l !== -1 && p.push(l), b !== -1 && p.push(b), F.tonePrefersLightForeground(c) || F.tonePrefersLightForeground(u) ? l < 0 ? 100 : l : p.length === 1 ? p[0] : b < 0 ? 0 : b;
      }
      return t;
    }
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */
  static foregroundTone(e, n) {
    const t = nr.lighterUnsafe(e, n), o = nr.darkerUnsafe(e, n), a = nr.ratioOfTones(t, e), i = nr.ratioOfTones(o, e);
    if (F.tonePrefersLightForeground(e)) {
      const c = Math.abs(a - i) < 0.1 && a < n && i < n;
      return a >= n || a >= i || c ? t : o;
    } else
      return i >= n || i >= a ? o : t;
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */
  static tonePrefersLightForeground(e) {
    return Math.round(e) < 60;
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(e) {
    return Math.round(e) <= 49;
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(e) {
    return F.tonePrefersLightForeground(e) && !F.toneAllowsLightForeground(e) ? 49 : e;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kr;
(function(r) {
  r[r.MONOCHROME = 0] = "MONOCHROME", r[r.NEUTRAL = 1] = "NEUTRAL", r[r.TONAL_SPOT = 2] = "TONAL_SPOT", r[r.VIBRANT = 3] = "VIBRANT", r[r.EXPRESSIVE = 4] = "EXPRESSIVE", r[r.FIDELITY = 5] = "FIDELITY", r[r.CONTENT = 6] = "CONTENT", r[r.RAINBOW = 7] = "RAINBOW", r[r.FRUIT_SALAD = 8] = "FRUIT_SALAD";
})(Kr || (Kr = {}));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(e, n, t, o) {
    this.low = e, this.normal = n, this.medium = t, this.high = o;
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(e) {
    return e <= -1 ? this.low : e < 0 ? Gr(this.low, this.normal, (e - -1) / 1) : e < 0.5 ? Gr(this.normal, this.medium, (e - 0) / 0.5) : e < 1 ? Gr(this.medium, this.high, (e - 0.5) / 0.5) : this.high;
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr {
  /**
   * Documents a constraint in tone distance between two DynamicColors.
   *
   * The polarity is an adjective that describes "A", compared to "B".
   *
   * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
   * A's tone should be at least 15 darker than B's.
   *
   * 'nearer' and 'farther' describes closeness to the surface roles. For
   * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
   * should be 10 lighter than B in light mode, and 10 darker than B in dark
   * mode.
   *
   * @param roleA The first role in a pair.
   * @param roleB The second role in a pair.
   * @param delta Required difference between tones. Absolute value, negative
   * values have undefined behavior.
   * @param polarity The relative relation between tones of roleA and roleB,
   * as described above.
   * @param stayTogether Whether these two roles should stay on the same side of
   * the "awkward zone" (T50-59). This is necessary for certain cases where
   * one role has two backgrounds.
   */
  constructor(e, n, t, o, a) {
    this.roleA = e, this.roleB = n, this.delta = t, this.polarity = o, this.stayTogether = a;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function zr(r) {
  return r.variant === Kr.FIDELITY || r.variant === Kr.CONTENT;
}
function Z(r) {
  return r.variant === Kr.MONOCHROME;
}
function ba(r, e, n, t) {
  let o = n, a = or.from(r, e, n);
  if (a.chroma < e) {
    let i = a.chroma;
    for (; a.chroma < e; ) {
      o += t ? -1 : 1;
      const s = or.from(r, e, o);
      if (i > s.chroma || Math.abs(s.chroma - e) < 0.4)
        break;
      const c = Math.abs(s.chroma - e), u = Math.abs(a.chroma - e);
      c < u && (a = s), i = Math.max(i, s.chroma);
    }
  }
  return o;
}
function Fa(r) {
  return xr.make(
    /*whitePoint=*/
    void 0,
    /*adaptingLuminance=*/
    void 0,
    /*backgroundLstar=*/
    r.isDark ? 30 : 80,
    /*surround=*/
    void 0,
    /*discountingIlluminant=*/
    void 0
  );
}
function Re(r, e) {
  const n = r.inViewingConditions(Fa(e));
  return F.tonePrefersLightForeground(r.tone) && !F.toneAllowsLightForeground(n.tone) ? F.enableLightForeground(r.tone) : F.enableLightForeground(n.tone);
}
class f {
  static highestSurface(e) {
    return e.isDark ? f.surfaceBright : f.surfaceDim;
  }
}
f.contentAccentToneDelta = 15;
f.primaryPaletteKeyColor = F.fromPalette({
  name: "primary_palette_key_color",
  palette: (r) => r.primaryPalette,
  tone: (r) => r.primaryPalette.keyColor.tone
});
f.secondaryPaletteKeyColor = F.fromPalette({
  name: "secondary_palette_key_color",
  palette: (r) => r.secondaryPalette,
  tone: (r) => r.secondaryPalette.keyColor.tone
});
f.tertiaryPaletteKeyColor = F.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => r.tertiaryPalette.keyColor.tone
});
f.neutralPaletteKeyColor = F.fromPalette({
  name: "neutral_palette_key_color",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.neutralPalette.keyColor.tone
});
f.neutralVariantPaletteKeyColor = F.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.neutralVariantPalette.keyColor.tone
});
f.background = F.fromPalette({
  name: "background",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 6 : 98,
  isBackground: !0
});
f.onBackground = F.fromPalette({
  name: "on_background",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 90 : 10,
  background: (r) => f.background,
  contrastCurve: new N(3, 3, 4.5, 7)
});
f.surface = F.fromPalette({
  name: "surface",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 6 : 98,
  isBackground: !0
});
f.surfaceDim = F.fromPalette({
  name: "surface_dim",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 6 : 87,
  isBackground: !0
});
f.surfaceBright = F.fromPalette({
  name: "surface_bright",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 24 : 98,
  isBackground: !0
});
f.surfaceContainerLowest = F.fromPalette({
  name: "surface_container_lowest",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 4 : 100,
  isBackground: !0
});
f.surfaceContainerLow = F.fromPalette({
  name: "surface_container_low",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 10 : 96,
  isBackground: !0
});
f.surfaceContainer = F.fromPalette({
  name: "surface_container",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 12 : 94,
  isBackground: !0
});
f.surfaceContainerHigh = F.fromPalette({
  name: "surface_container_high",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 17 : 92,
  isBackground: !0
});
f.surfaceContainerHighest = F.fromPalette({
  name: "surface_container_highest",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 22 : 90,
  isBackground: !0
});
f.onSurface = F.fromPalette({
  name: "on_surface",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 90 : 10,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.surfaceVariant = F.fromPalette({
  name: "surface_variant",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.isDark ? 30 : 90,
  isBackground: !0
});
f.onSurfaceVariant = F.fromPalette({
  name: "on_surface_variant",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.isDark ? 80 : 30,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(3, 4.5, 7, 11)
});
f.inverseSurface = F.fromPalette({
  name: "inverse_surface",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 90 : 20
});
f.inverseOnSurface = F.fromPalette({
  name: "inverse_on_surface",
  palette: (r) => r.neutralPalette,
  tone: (r) => r.isDark ? 20 : 95,
  background: (r) => f.inverseSurface,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.outline = F.fromPalette({
  name: "outline",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.isDark ? 60 : 50,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1.5, 3, 4.5, 7)
});
f.outlineVariant = F.fromPalette({
  name: "outline_variant",
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.isDark ? 30 : 80,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7)
});
f.shadow = F.fromPalette({
  name: "shadow",
  palette: (r) => r.neutralPalette,
  tone: (r) => 0
});
f.scrim = F.fromPalette({
  name: "scrim",
  palette: (r) => r.neutralPalette,
  tone: (r) => 0
});
f.surfaceTint = F.fromPalette({
  name: "surface_tint",
  palette: (r) => r.primaryPalette,
  tone: (r) => r.isDark ? 80 : 40,
  isBackground: !0
});
f.primary = F.fromPalette({
  name: "primary",
  palette: (r) => r.primaryPalette,
  tone: (r) => Z(r) ? r.isDark ? 100 : 0 : r.isDark ? 80 : 40,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new mr(f.primaryContainer, f.primary, 15, "nearer", !1)
});
f.onPrimary = F.fromPalette({
  name: "on_primary",
  palette: (r) => r.primaryPalette,
  tone: (r) => Z(r) ? r.isDark ? 10 : 90 : r.isDark ? 20 : 100,
  background: (r) => f.primary,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.primaryContainer = F.fromPalette({
  name: "primary_container",
  palette: (r) => r.primaryPalette,
  tone: (r) => zr(r) ? Re(r.sourceColorHct, r) : Z(r) ? r.isDark ? 85 : 25 : r.isDark ? 30 : 90,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.primaryContainer, f.primary, 15, "nearer", !1)
});
f.onPrimaryContainer = F.fromPalette({
  name: "on_primary_container",
  palette: (r) => r.primaryPalette,
  tone: (r) => zr(r) ? F.foregroundTone(f.primaryContainer.tone(r), 4.5) : Z(r) ? r.isDark ? 0 : 100 : r.isDark ? 90 : 10,
  background: (r) => f.primaryContainer,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.inversePrimary = F.fromPalette({
  name: "inverse_primary",
  palette: (r) => r.primaryPalette,
  tone: (r) => r.isDark ? 40 : 80,
  background: (r) => f.inverseSurface,
  contrastCurve: new N(3, 4.5, 7, 11)
});
f.secondary = F.fromPalette({
  name: "secondary",
  palette: (r) => r.secondaryPalette,
  tone: (r) => r.isDark ? 80 : 40,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new mr(f.secondaryContainer, f.secondary, 15, "nearer", !1)
});
f.onSecondary = F.fromPalette({
  name: "on_secondary",
  palette: (r) => r.secondaryPalette,
  tone: (r) => Z(r) ? r.isDark ? 10 : 100 : r.isDark ? 20 : 100,
  background: (r) => f.secondary,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.secondaryContainer = F.fromPalette({
  name: "secondary_container",
  palette: (r) => r.secondaryPalette,
  tone: (r) => {
    const e = r.isDark ? 30 : 90;
    if (Z(r))
      return r.isDark ? 30 : 85;
    if (!zr(r))
      return e;
    let n = ba(r.secondaryPalette.hue, r.secondaryPalette.chroma, e, !r.isDark);
    return n = Re(r.secondaryPalette.getHct(n), r), n;
  },
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.secondaryContainer, f.secondary, 15, "nearer", !1)
});
f.onSecondaryContainer = F.fromPalette({
  name: "on_secondary_container",
  palette: (r) => r.secondaryPalette,
  tone: (r) => zr(r) ? F.foregroundTone(f.secondaryContainer.tone(r), 4.5) : r.isDark ? 90 : 10,
  background: (r) => f.secondaryContainer,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.tertiary = F.fromPalette({
  name: "tertiary",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => Z(r) ? r.isDark ? 90 : 25 : r.isDark ? 80 : 40,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new mr(f.tertiaryContainer, f.tertiary, 15, "nearer", !1)
});
f.onTertiary = F.fromPalette({
  name: "on_tertiary",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => Z(r) ? r.isDark ? 10 : 90 : r.isDark ? 20 : 100,
  background: (r) => f.tertiary,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.tertiaryContainer = F.fromPalette({
  name: "tertiary_container",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => {
    if (Z(r))
      return r.isDark ? 60 : 49;
    if (!zr(r))
      return r.isDark ? 30 : 90;
    const e = Re(r.tertiaryPalette.getHct(r.sourceColorHct.tone), r), n = r.tertiaryPalette.getHct(e);
    return _e.fixIfDisliked(n).tone;
  },
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.tertiaryContainer, f.tertiary, 15, "nearer", !1)
});
f.onTertiaryContainer = F.fromPalette({
  name: "on_tertiary_container",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => Z(r) ? r.isDark ? 0 : 100 : zr(r) ? F.foregroundTone(f.tertiaryContainer.tone(r), 4.5) : r.isDark ? 90 : 10,
  background: (r) => f.tertiaryContainer,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.error = F.fromPalette({
  name: "error",
  palette: (r) => r.errorPalette,
  tone: (r) => r.isDark ? 80 : 40,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new mr(f.errorContainer, f.error, 15, "nearer", !1)
});
f.onError = F.fromPalette({
  name: "on_error",
  palette: (r) => r.errorPalette,
  tone: (r) => r.isDark ? 20 : 100,
  background: (r) => f.error,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.errorContainer = F.fromPalette({
  name: "error_container",
  palette: (r) => r.errorPalette,
  tone: (r) => r.isDark ? 30 : 90,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.errorContainer, f.error, 15, "nearer", !1)
});
f.onErrorContainer = F.fromPalette({
  name: "on_error_container",
  palette: (r) => r.errorPalette,
  tone: (r) => r.isDark ? 90 : 10,
  background: (r) => f.errorContainer,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.primaryFixed = F.fromPalette({
  name: "primary_fixed",
  palette: (r) => r.primaryPalette,
  tone: (r) => Z(r) ? 40 : 90,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.primaryFixed, f.primaryFixedDim, 10, "lighter", !0)
});
f.primaryFixedDim = F.fromPalette({
  name: "primary_fixed_dim",
  palette: (r) => r.primaryPalette,
  tone: (r) => Z(r) ? 30 : 80,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.primaryFixed, f.primaryFixedDim, 10, "lighter", !0)
});
f.onPrimaryFixed = F.fromPalette({
  name: "on_primary_fixed",
  palette: (r) => r.primaryPalette,
  tone: (r) => Z(r) ? 100 : 10,
  background: (r) => f.primaryFixedDim,
  secondBackground: (r) => f.primaryFixed,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.onPrimaryFixedVariant = F.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (r) => r.primaryPalette,
  tone: (r) => Z(r) ? 90 : 30,
  background: (r) => f.primaryFixedDim,
  secondBackground: (r) => f.primaryFixed,
  contrastCurve: new N(3, 4.5, 7, 11)
});
f.secondaryFixed = F.fromPalette({
  name: "secondary_fixed",
  palette: (r) => r.secondaryPalette,
  tone: (r) => Z(r) ? 80 : 90,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.secondaryFixed, f.secondaryFixedDim, 10, "lighter", !0)
});
f.secondaryFixedDim = F.fromPalette({
  name: "secondary_fixed_dim",
  palette: (r) => r.secondaryPalette,
  tone: (r) => Z(r) ? 70 : 80,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.secondaryFixed, f.secondaryFixedDim, 10, "lighter", !0)
});
f.onSecondaryFixed = F.fromPalette({
  name: "on_secondary_fixed",
  palette: (r) => r.secondaryPalette,
  tone: (r) => 10,
  background: (r) => f.secondaryFixedDim,
  secondBackground: (r) => f.secondaryFixed,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.onSecondaryFixedVariant = F.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (r) => r.secondaryPalette,
  tone: (r) => Z(r) ? 25 : 30,
  background: (r) => f.secondaryFixedDim,
  secondBackground: (r) => f.secondaryFixed,
  contrastCurve: new N(3, 4.5, 7, 11)
});
f.tertiaryFixed = F.fromPalette({
  name: "tertiary_fixed",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => Z(r) ? 40 : 90,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.tertiaryFixed, f.tertiaryFixedDim, 10, "lighter", !0)
});
f.tertiaryFixedDim = F.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => Z(r) ? 30 : 80,
  isBackground: !0,
  background: (r) => f.highestSurface(r),
  contrastCurve: new N(1, 1, 3, 7),
  toneDeltaPair: (r) => new mr(f.tertiaryFixed, f.tertiaryFixedDim, 10, "lighter", !0)
});
f.onTertiaryFixed = F.fromPalette({
  name: "on_tertiary_fixed",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => Z(r) ? 100 : 10,
  background: (r) => f.tertiaryFixedDim,
  secondBackground: (r) => f.tertiaryFixed,
  contrastCurve: new N(4.5, 7, 11, 21)
});
f.onTertiaryFixedVariant = F.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (r) => r.tertiaryPalette,
  tone: (r) => Z(r) ? 90 : 30,
  background: (r) => f.tertiaryFixedDim,
  secondBackground: (r) => f.tertiaryFixed,
  contrastCurve: new N(3, 4.5, 7, 11)
});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(e) {
    const n = or.fromInt(e);
    return fr.fromHct(n);
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(e) {
    return new fr(e.hue, e.chroma, e);
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(e, n) {
    return new fr(e, n, fr.createKeyColor(e, n));
  }
  constructor(e, n, t) {
    this.hue = e, this.chroma = n, this.keyColor = t, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e, n) {
    let o = or.from(e, n, 50), a = Math.abs(o.chroma - n);
    for (let i = 1; i < 50; i += 1) {
      if (Math.round(n) === Math.round(o.chroma))
        return o;
      const s = or.from(e, n, 50 + i), c = Math.abs(s.chroma - n);
      c < a && (a = c, o = s);
      const u = or.from(e, n, 50 - i), d = Math.abs(u.chroma - n);
      d < a && (a = d, o = u);
    }
    return o;
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(e) {
    let n = this.cache.get(e);
    return n === void 0 && (n = or.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, n)), n;
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(e) {
    return or.fromInt(this.tone(e));
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr {
  /**
   * @param argb ARGB representation of a color
   */
  static of(e) {
    return new gr(e, !1);
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(e) {
    return new gr(e, !0);
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(e) {
    return gr.createPaletteFromColors(!1, e);
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(e) {
    return gr.createPaletteFromColors(!0, e);
  }
  static createPaletteFromColors(e, n) {
    const t = new gr(n.primary, e);
    if (n.secondary) {
      const o = new gr(n.secondary, e);
      t.a2 = o.a1;
    }
    if (n.tertiary) {
      const o = new gr(n.tertiary, e);
      t.a3 = o.a1;
    }
    if (n.error) {
      const o = new gr(n.error, e);
      t.error = o.a1;
    }
    if (n.neutral) {
      const o = new gr(n.neutral, e);
      t.n1 = o.n1;
    }
    if (n.neutralVariant) {
      const o = new gr(n.neutralVariant, e);
      t.n2 = o.n2;
    }
    return t;
  }
  constructor(e, n) {
    const t = or.fromInt(e), o = t.hue, a = t.chroma;
    n ? (this.a1 = fr.fromHueAndChroma(o, a), this.a2 = fr.fromHueAndChroma(o, a / 3), this.a3 = fr.fromHueAndChroma(o + 60, a / 2), this.n1 = fr.fromHueAndChroma(o, Math.min(a / 12, 4)), this.n2 = fr.fromHueAndChroma(o, Math.min(a / 6, 8))) : (this.a1 = fr.fromHueAndChroma(o, Math.max(48, a)), this.a2 = fr.fromHueAndChroma(o, 16), this.a3 = fr.fromHueAndChroma(o + 60, 24), this.n1 = fr.fromHueAndChroma(o, 4), this.n2 = fr.fromHueAndChroma(o, 8)), this.error = fr.fromHueAndChroma(25, 84);
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vn(r) {
  const e = Rn(r), n = $n(r), t = Nn(r), o = [e.toString(16), n.toString(16), t.toString(16)];
  for (const [a, i] of o.entries())
    i.length === 1 && (o[a] = "0" + i);
  return "#" + o.join("");
}
function ne(r) {
  r = r.replace("#", "");
  const e = r.length === 3, n = r.length === 6, t = r.length === 8;
  if (!e && !n && !t)
    throw new Error("unexpected hex " + r);
  let o = 0, a = 0, i = 0;
  return e ? (o = Tr(r.slice(0, 1).repeat(2)), a = Tr(r.slice(1, 2).repeat(2)), i = Tr(r.slice(2, 3).repeat(2))) : n ? (o = Tr(r.slice(0, 2)), a = Tr(r.slice(2, 4)), i = Tr(r.slice(4, 6))) : t && (o = Tr(r.slice(2, 4)), a = Tr(r.slice(4, 6)), i = Tr(r.slice(6, 8))), (255 << 24 | (o & 255) << 16 | (a & 255) << 8 | i & 255) >>> 0;
}
function Tr(r) {
  return parseInt(r, 16);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ca(r, e) {
  let n = e.value;
  const t = n, o = r;
  e.blend && (n = de.harmonize(t, o));
  const i = gr.of(n).a1;
  return {
    color: e,
    value: n,
    light: {
      color: i.tone(40),
      onColor: i.tone(100),
      colorContainer: i.tone(90),
      onColorContainer: i.tone(10)
    },
    dark: {
      color: i.tone(80),
      onColor: i.tone(20),
      colorContainer: i.tone(30),
      onColorContainer: i.tone(90)
    }
  };
}
var k = /* @__PURE__ */ ((r) => (r[r.Hover = 0.08] = "Hover", r[r.Focus = 0.12] = "Focus", r[r.Press = 0.12] = "Press", r[r.Drag = 0.16] = "Drag", r))(k || {});
const w = (r, e, n) => Vn(de.cam16Ucs(ne(e), ne(n), r)), Fe = (r, e, n, t) => ({
  props: { variant: r, color: e },
  style: {
    backgroundColor: n,
    color: t,
    "&:hover": {
      backgroundColor: w(k.Hover, n, t)
    },
    "&:focus": {
      backgroundColor: w(k.Focus, n, t)
    },
    "&:active": {
      backgroundColor: w(k.Press, n, t)
    }
  }
}), xa = (r, e, n, t) => ({
  props: { variant: "outlined", color: r },
  style: {
    color: e,
    "&:hover": {
      backgroundColor: w(k.Hover, n, e),
      borderColor: w(k.Hover, t, e)
    },
    "&:focus": {
      backgroundColor: w(k.Focus, n, e),
      borderColor: w(k.Focus, e, e)
    },
    "&:active": {
      backgroundColor: w(k.Press, n, e),
      borderColor: w(k.Press, t, e)
    }
  }
}), Ce = (r) => [
  {
    props: { variant: r, size: "small" },
    style: {
      padding: "4px 10px",
      fontSize: "0.8125rem",
      minHeight: "32px"
    }
  },
  {
    props: { variant: r, size: "medium" },
    style: {
      padding: "6px 16px",
      fontSize: "0.875rem",
      minHeight: "36px"
    }
  },
  {
    props: { variant: r, size: "large" },
    style: {
      padding: "8px 22px",
      fontSize: "0.9375rem",
      minHeight: "40px"
    }
  }
], va = (r, e, n) => ({
  props: { variant: "text", color: r },
  style: {
    color: e,
    "&:hover": {
      backgroundColor: w(k.Hover, n, e)
    },
    "&:focus": {
      backgroundColor: w(k.Focus, n, e)
    },
    "&:active": {
      backgroundColor: w(k.Press, n, e)
    }
  }
}), Ea = ({ palette: r, shadows: e }) => {
  const t = [
    ["primary", r.primary.main, r.onPrimary.main],
    ["secondary", r.secondary.main, r.onSecondary.main],
    ["tertiary", r.tertiary.main, r.onTertiary.main],
    ["error", r.error.main, r.onError.main],
    ["info", r.info.main, r.onInfo.main],
    ["success", r.success.main, r.onSuccess.main],
    ["warning", r.warning.main, r.onWarning.main]
  ].map(
    (m) => Fe("filled", ...m)
  ), o = Ce("filled"), i = [
    ["primary", r.primaryContainer.main, r.onPrimaryContainer.main],
    ["secondary", r.secondaryContainer.main, r.onSecondaryContainer.main],
    ["tertiary", r.tertiaryContainer.main, r.onTertiaryContainer.main],
    ["error", r.errorContainer.main, r.onErrorContainer.main],
    ["info", r.infoContainer.main, r.onInfoContainer.main],
    ["success", r.successContainer.main, r.onSuccessContainer.main],
    ["warning", r.warningContainer.main, r.onWarningContainer.main]
  ].map(
    (m) => Fe("tonal", ...m)
  ), s = Ce("tonal"), u = [
    ["primary", r.primary.main, r.surface.main, r.outline.main],
    ["secondary", r.secondary.main, r.surface.main, r.outline.main],
    ["tertiary", r.tertiary.main, r.surface.main, r.outline.main],
    ["error", r.error.main, r.surface.main, r.outline.main],
    ["info", r.info.main, r.surface.main, r.outline.main],
    ["success", r.success.main, r.surface.main, r.outline.main],
    ["warning", r.warning.main, r.surface.main, r.outline.main]
  ].map(
    (m) => xa(...m)
  ), h = [
    ["primary", r.surfaceContainerLow.main, r.primary.main],
    ["secondary", r.surfaceContainerLow.main, r.secondary.main],
    ["tertiary", r.surfaceContainerLow.main, r.tertiary.main],
    ["error", r.surfaceContainerLow.main, r.error.main],
    ["info", r.surfaceContainerLow.main, r.info.main],
    ["success", r.surfaceContainerLow.main, r.success.main],
    ["warning", r.surfaceContainerLow.main, r.warning.main]
  ].map(
    (m) => Fe("elevated", ...m)
  ), l = Ce("elevated"), p = [
    ["primary", r.primary.main, r.surface.main],
    ["secondary", r.secondary.main, r.surface.main],
    ["tertiary", r.tertiary.main, r.surface.main],
    ["error", r.error.main, r.surface.main],
    ["info", r.info.main, r.surface.main],
    ["success", r.success.main, r.surface.main],
    ["warning", r.warning.main, r.surface.main]
  ].map(
    (m) => va(...m)
  );
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
          //   fontWeight: 'bold',
          "&:has(>svg)": {
            padding: "8px",
            borderRadius: "50%",
            minWidth: "1em",
            minHeight: "1em"
          }
        }
      },
      variants: [
        {
          props: { variant: "filled" },
          style: {
            boxShadow: e[0],
            "&.Mui-disabled": {
              backgroundColor: dr(r.onSurface.main, 0.12),
              color: dr(r.onSurface.main, 0.38),
              boxShadow: e[0]
            },
            "&:hover": {
              boxShadow: e[1]
            },
            "&:focus": {
              boxShadow: e[0]
            },
            "&:active": {
              boxShadow: e[0]
            }
          }
        },
        ...t,
        ...o,
        {
          props: { variant: "tonal" },
          style: {
            boxShadow: e[0],
            "&.Mui-disabled": {
              backgroundColor: dr(r.onSurface.main, 0.12),
              color: dr(r.onSurface.main, 0.38),
              boxShadow: e[0]
            },
            "&:hover": {
              boxShadow: e[1]
            },
            "&:focus": {
              boxShadow: e[0]
            },
            "&:active": {
              boxShadow: e[0]
            }
          }
        },
        ...i,
        ...s,
        {
          props: { variant: "outlined" },
          style: {
            //backgroundColor: palette.surface.main,
            borderColor: r.outline.main,
            borderWidth: "1px",
            boxShadow: e[0],
            "&.Mui-disabled": {
              borderColor: dr(r.onSurface.main, 0.12),
              color: dr(r.onSurface.main, 0.38)
            }
          }
        },
        ...u,
        {
          props: { variant: "elevated" },
          style: {
            boxShadow: e[1],
            backgroundColor: r.surfaceContainerLow.main,
            "&.Mui-disabled": {
              backgroundColor: dr(r.onSurface.main, 0.12),
              color: dr(r.onSurface.main, 0.38),
              boxShadow: e[0]
            }
          }
        },
        ...h,
        ...l,
        {
          props: { variant: "text" },
          style: {
            backgroundColor: "transparent",
            boxShadow: e[0],
            padding: "5px 15px",
            "&.Mui-disabled": {
              color: dr(r.onSurface.main, 0.38)
            }
          }
        },
        ...p
      ]
    }
  };
}, Ta = ({ palette: r, shadows: e, transitions: n }) => ({
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "20px"
      }
    },
    variants: [
      {
        props: { variant: "elevation" },
        style: {
          boxShadow: e[1],
          backgroundColor: r.surfaceContainerLow.main,
          transition: n.create(
            ["background-color", "box-shadow", "border-color", "color"],
            {
              duration: n.duration.short
            }
          ),
          "&:hover": {
            background: w(
              k.Hover,
              r.surfaceContainerLow.main,
              r.primary.main
            ),
            boxShadow: e[2]
          },
          "&:focus": {
            boxShadow: e[1],
            background: w(
              k.Focus,
              r.surfaceContainerLow.main,
              r.primary.main
            )
          },
          "&:active": {
            boxShadow: e[1],
            background: w(
              k.Press,
              r.surfaceContainerLow.main,
              r.primary.main
            )
          },
          "&.Mui-disabled": {
            backgroundColor: dr(r.surfaceContainerLow.main, 0.38),
            color: r.surfaceVariant.main,
            boxShadow: e[0]
          }
        }
      },
      {
        props: { variant: "filled" },
        style: {
          boxShadow: e[0],
          backgroundColor: r.surfaceContainerHighest.main,
          transition: n.create(
            ["background-color", "box-shadow", "border-color", "color"],
            {
              duration: n.duration.short
            }
          ),
          "&:hover": {
            background: w(
              k.Hover,
              r.surfaceContainerHighest.main,
              r.primary.main
            ),
            boxShadow: e[1]
          },
          "&:focus": {
            boxShadow: e[0],
            background: w(
              k.Focus,
              r.surfaceContainerHighest.main,
              r.primary.main
            )
          },
          "&:active": {
            boxShadow: e[1],
            background: w(
              k.Press,
              r.surfaceContainerHighest.main,
              r.primary.main
            )
          },
          "&.Mui-disabled": {
            backgroundColor: dr(r.surfaceContainerHighest.main, 0.38),
            color: r.surfaceVariant.main,
            boxShadow: e[1]
          }
        }
      },
      {
        props: { variant: "outlined" },
        style: {
          boxShadow: e[0],
          backgroundColor: r.surface.main,
          borderColor: r.outline.main,
          transition: n.create(
            ["background-color", "box-shadow", "border-color", "color"],
            {
              duration: n.duration.short
            }
          ),
          "&:hover": {
            background: w(
              k.Hover,
              r.surface.main,
              r.primary.main
            ),
            boxShadow: e[1]
          },
          "&:focus": {
            boxShadow: e[0],
            background: w(
              k.Focus,
              r.surface.main,
              r.primary.main
            )
          },
          "&:active": {
            boxShadow: e[2],
            background: w(
              k.Press,
              r.surfaceContainerHighest.main,
              r.primary.main
            )
          },
          "&.Mui-disabled": {
            borderColor: dr(r.surfaceContainerHighest.main, 0.12),
            boxShadow: e[0]
          }
        }
      }
    ]
  }
}), Pa = (r) => ({
  MuiCssBaseline: {
    defaultProps: {
      enableColorScheme: !0
    },
    styleOverrides: {
      "*::-webkit-scrollbar": {
        display: "none"
      }
    }
  }
}), Sa = ({ palette: r }) => ({
  MuiDrawer: {
    styleOverrides: {
      paper: {
        border: "0px",
        background: r.surfaceContainer.main,
        color: r.onSurfaceVariant.main
      }
    }
  }
}), ka = ({ palette: r, shadows: e }) => ({
  MuiFab: {
    defaultProps: { color: "secondary" },
    styleOverrides: {
      root: {
        boxShadow: e[3],
        borderRadius: "18px"
      }
    },
    variants: [
      {
        props: { color: "primary" },
        style: {
          backgroundColor: r.primaryContainer.main,
          color: r.onPrimaryContainer.main,
          "&:hover": {
            background: w(
              k.Hover,
              r.primaryContainer.main,
              r.onPrimaryContainer.main
            ),
            boxShadow: e[4]
          },
          "&:focus": {
            background: w(
              k.Focus,
              r.primaryContainer.main,
              r.onPrimaryContainer.main
            ),
            boxShadow: e[3]
          },
          "&:active": {
            background: w(
              k.Press,
              r.primaryContainer.main,
              r.onPrimaryContainer.main
            ),
            boxShadow: e[3]
          }
        }
      },
      {
        props: { color: "secondary" },
        style: {
          backgroundColor: r.secondaryContainer.main,
          color: r.onSecondaryContainer.main,
          "&:hover": {
            background: w(
              k.Hover,
              r.secondaryContainer.main,
              r.onSecondaryContainer.main
            ),
            boxShadow: e[4]
          },
          "&:focus": {
            background: w(
              k.Focus,
              r.secondaryContainer.main,
              r.onSecondaryContainer.main
            ),
            boxShadow: e[3]
          },
          "&:active": {
            background: w(
              k.Press,
              r.secondaryContainer.main,
              r.onSecondaryContainer.main
            ),
            boxShadow: e[3]
          }
        }
      },
      {
        props: { color: "surface" },
        style: {
          backgroundColor: r.surfaceContainer.main,
          color: r.primary.main,
          "&:hover": {
            background: w(
              k.Hover,
              r.surfaceContainer.main,
              r.primary.main
            ),
            boxShadow: e[4]
          },
          "&:focus": {
            background: w(
              k.Focus,
              r.surfaceContainer.main,
              r.primary.main
            ),
            boxShadow: e[3]
          },
          "&:active": {
            background: w(
              k.Press,
              r.surfaceContainer.main,
              r.primary.main
            ),
            boxShadow: e[3]
          }
        }
      },
      {
        props: { color: "tertiary" },
        style: {
          backgroundColor: r.tertiaryContainer.main,
          color: r.onTertiaryContainer.main,
          "&:hover": {
            background: w(
              k.Hover,
              r.tertiaryContainer.main,
              r.onTertiaryContainer.main
            ),
            boxShadow: e[4]
          },
          "&:focus": {
            background: w(
              k.Focus,
              r.tertiaryContainer.main,
              r.onTertiaryContainer.main
            ),
            boxShadow: e[3]
          },
          "&:active": {
            background: w(
              k.Press,
              r.tertiaryContainer.main,
              r.onTertiaryContainer.main
            ),
            boxShadow: e[3]
          }
        }
      }
    ]
  }
}), Ma = (r) => ({
  MuiListItem: {
    styleOverrides: {
      root: {
        paddingTop: 1,
        paddingBottom: 1,
        "& .MuiListItemButton-root": {
          paddingTop: 8,
          paddingBottom: 8
        }
      }
    }
  }
}), wa = ({ palette: r }) => ({
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 50,
        color: r.onSurfaceVariant.main,
        "&:hover": {
          backgroundColor: w(
            k.Hover,
            r.surfaceContainerLow.main,
            r.onSurface.main
          ),
          color: w(
            k.Hover,
            r.onSurfaceVariant.main,
            r.onSurface.main
          )
        },
        "&:active": {
          backgroundColor: w(
            k.Press,
            r.surfaceContainerLow.main,
            r.onSecondaryContainer.main
          ),
          color: w(
            k.Press,
            r.onSurfaceVariant.main,
            r.onSurface.main
          )
        },
        "&.Mui-selected": {
          color: r.onSecondaryContainer.main,
          background: r.secondaryContainer.main,
          "& > .MuiListItemText-root > .MuiTypography-root": {
            fontWeight: "bold"
          },
          "&:hover": {
            backgroundColor: w(
              k.Hover,
              r.secondaryContainer.main,
              r.onSecondaryContainer.main
            ),
            color: w(
              k.Hover,
              r.onSecondaryContainer.main,
              r.secondaryContainer.main
            )
          },
          "&:active": {
            backgroundColor: w(
              k.Press,
              r.secondaryContainer.main,
              r.onSecondaryContainer.main
            ),
            color: w(
              k.Press,
              r.onSecondaryContainer.main,
              r.secondaryContainer.main
            )
          }
        }
      }
    }
  }
}), Aa = (r) => ({
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        color: "inherit",
        minWidth: 32,
        "&.Mui-selected": {
          fontWeight: "bold"
        }
      }
    }
  }
}), Da = ({ palette: r, shadows: e }) => ({
  MuiMenu: {
    defaultProps: { color: "default" },
    styleOverrides: {
      root: {},
      paper: {
        backgroundColor: r.surfaceContainerLow.main,
        boxShadow: e[3],
        color: r.onSurface.main
      }
    }
  }
}), Oa = (r, e, n) => ({
  props: { color: r },
  style: {
    "& .MuiSwitch-switchBase": {
      "&.Mui-checked": {
        "& + .MuiSwitch-track": {
          backgroundColor: e
        },
        "& .MuiSwitch-thumb": {
          color: n
        }
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: e,
        border: `6px solid ${n}`
      }
    }
  }
}), Ia = ({ palette: r }) => ({
  MuiSwitch: {
    variants: [...[
      ["primary", r.primary.main, r.onPrimary.main],
      ["secondary", r.secondary.main, r.onSecondary.main],
      ["error", r.error.main, r.onError.main],
      ["info", r.info.main, r.onInfo.main],
      ["success", r.success.main, r.onSuccess.main],
      ["warning", r.warning.main, r.onWarning.main],
      ["default", r.primary.main, r.onPrimary.main]
    ].map(
      (t) => Oa(...t)
    )],
    styleOverrides: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        marginLeft: 12,
        marginRight: 8,
        borderColor: r.outline.main,
        "& .MuiSwitch-switchBase": {
          padding: 0,
          margin: 7,
          transitionDuration: "100ms",
          "&.Mui-checked": {
            transform: "translateX(16px)",
            margin: 4,
            "& + .MuiSwitch-track": {
              opacity: 1,
              border: 0
            },
            "& .MuiSwitch-thumb": {
              width: 18,
              height: 18
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              backgroundColor: dr(r.onSurface.main, 0.1)
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
              color: dr(r.surface.main, 0.8)
            }
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color: dr(r.onSurface.main, 0.3)
          }
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          color: r.outline.main,
          width: 12,
          height: 12,
          "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }
        },
        "& .MuiSwitch-track": {
          borderRadius: 20,
          border: `2px solid ${r.outline.main}`,
          backgroundColor: r.surfaceContainerHighest.main,
          opacity: 1,
          transition: "background .2s"
        }
      }
    }
  }
}), Ba = ({ palette: r }) => ({
  MuiToggleButton: {
    styleOverrides: {
      root: {
        borderRadius: "50px",
        textTransform: "none",
        color: r.onSurface.main,
        "&.Mui-selected": {
          color: r.onSecondaryContainer.main,
          backgroundColor: r.secondaryContainer.main
        },
        "&.MuiToggleButton-primary": {
          borderColor: "transparent"
        },
        "&.MuiToggleButton-primary.Mui-selected": {
          color: r.onPrimary.main,
          backgroundColor: r.primary.main
        }
        /*'&.MuiToggleButton-primary.Mui-selected:hover': {
                      background: getStateLayerColor(StateLayer.Hover, palette.primary.main, palette.onPrimary.main),
                  },
                  '&.Mui-selected:not(.MuiToggleButtonGroup-grouped):has(>svg)': {
                      color: palette.onPrimary.main,
                      backgroundColor: palette.primary.main
                  },*/
        /*'&:hover': {
                      background: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.primary.main),
                  },
                  '&.Mui-selected:hover': {
                      background: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                  },
                  '&:focus': {
                      background: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.onSurface.main),
                  },
                  '&.Mui-selected:focus': {
                      background: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                  },
                  '&:active': {
                      background: getStateLayerColor(StateLayer.Press, palette.surface.main, palette.onSurface.main),
                  },
                  '&.Mui-selected:active': {
                      background: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                  }*/
      }
    }
  }
}), _a = ({ palette: r }) => ({
  MuiToggleButtonGroup: {
    styleOverrides: {
      grouped: {
        borderRadius: "50px",
        borderColor: r.outline.main,
        "&:not(:first-of-type)": {
          marginLeft: 0,
          borderLeft: 0
        },
        "&:hover": {
          background: w(
            k.Hover,
            r.surface.main,
            r.primary.main
          )
        },
        "&.Mui-selected:hover": {
          background: w(
            k.Hover,
            r.secondaryContainer.main,
            r.onSecondaryContainer.main
          )
        }
      }
    }
  }
}), Ra = ({ palette: r }) => ({
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        background: r.inverseSurface.main,
        color: r.inverseOnSurface.main
      }
    }
  }
}), $a = (r) => ({
  ...Pa(),
  ...ta(r),
  ...oa(r),
  ...aa(r),
  ...ia(r),
  ...Ea(r),
  ...Ta(r),
  ...Sa(r),
  ...ka(r),
  ...Ma(),
  ...wa(r),
  ...Aa(),
  ...Da(r),
  ...Ia(r),
  ...Ba(r),
  ..._a(r),
  ...Ra(r)
}), Na = (r, e) => {
  const {
    primary: n,
    onPrimary: t,
    primaryContainer: o,
    onPrimaryContainer: a,
    secondary: i,
    onSecondary: s,
    secondaryContainer: c,
    onSecondaryContainer: u,
    tertiary: d,
    onTertiary: h,
    tertiaryContainer: l,
    onTertiaryContainer: b,
    error: p,
    onError: m,
    errorContainer: v,
    onErrorContainer: P,
    background: R,
    onBackground: E,
    surface: O,
    onSurface: y,
    surfaceVariant: U,
    onSurfaceVariant: L,
    outline: W,
    outlineVariant: G,
    shadow: H,
    scrim: ir,
    inverseSurface: sr,
    inverseOnSurface: cr,
    inversePrimary: Q,
    primaryFixed: vr,
    onPrimaryFixed: ar,
    primaryFixedDim: er,
    onPrimaryFixedVariant: Cr,
    secondaryFixed: Er,
    onSecondaryFixed: g,
    secondaryFixedDim: x,
    onSecondaryFixedVariant: A,
    tertiaryFixed: M,
    onTertiaryFixed: S,
    tertiaryFixedDim: B,
    onTertiaryFixedVariant: D,
    surfaceTint: I,
    surfaceDim: _,
    surfaceBright: V,
    surfaceContainerLowest: $,
    surfaceContainerLow: ur,
    surfaceContainer: C,
    surfaceContainerHigh: yr,
    surfaceContainerHighest: Dr,
    info: Ur,
    onInfo: $e,
    infoContainer: Ne,
    onInfoContainer: Le,
    success: Ve,
    onSuccess: je,
    successContainer: ze,
    onSuccessContainer: Ue,
    warning: He,
    onWarning: We,
    warningContainer: Ye,
    onWarningContainer: Ge
  } = e;
  return {
    mode: r,
    primary: {
      main: n,
      contrastText: t
    },
    onPrimary: {
      main: t,
      contrastText: n
    },
    primaryContainer: {
      main: o,
      contrastText: a
    },
    onPrimaryContainer: {
      main: a,
      contrastText: o
    },
    secondary: {
      main: i,
      contrastText: s
    },
    onSecondary: {
      main: s,
      contrastText: i
    },
    secondaryContainer: {
      main: c,
      contrastText: u
    },
    onSecondaryContainer: {
      main: u,
      contrastText: c
    },
    tertiary: {
      main: d,
      contrastText: h
    },
    onTertiary: {
      main: h,
      contrastText: d
    },
    tertiaryContainer: {
      main: l,
      contrastText: b
    },
    onTertiaryContainer: {
      main: b,
      contrastText: l
    },
    error: {
      main: p,
      contrastText: m
    },
    onError: {
      main: m,
      contrastText: p
    },
    errorContainer: {
      main: v,
      contrastText: P
    },
    onErrorContainer: {
      main: P,
      contrastText: v
    },
    primaryFixed: {
      main: vr
    },
    primaryFixedDim: {
      main: er
    },
    onPrimaryFixed: {
      main: ar
    },
    onPrimaryFixedVariant: {
      main: Cr
    },
    secondaryFixed: {
      main: Er
    },
    secondaryFixedDim: {
      main: x
    },
    onSecondaryFixed: {
      main: g
    },
    onSecondaryFixedVariant: {
      main: A
    },
    tertiaryFixed: {
      main: M
    },
    tertiaryFixedDim: {
      main: B
    },
    onTertiaryFixed: {
      main: S
    },
    onTertiaryFixedVariant: {
      main: D
    },
    surface: {
      main: O,
      contrastText: y
    },
    onSurface: {
      main: y,
      contrastText: O
    },
    surfaceDim: {
      main: _
    },
    surfaceBright: {
      main: V
    },
    surfaceContainerLowest: {
      main: $
    },
    surfaceContainerLow: {
      main: ur
    },
    surfaceContainer: {
      main: C
    },
    surfaceContainerHigh: {
      main: yr
    },
    surfaceContainerHighest: {
      main: Dr
    },
    surfaceVariant: {
      main: U,
      contrastText: L
    },
    onSurfaceVariant: {
      main: L,
      contrastText: U
    },
    outline: {
      main: W
    },
    outlineVariant: {
      main: G
    },
    inversePrimary: {
      main: Q
    },
    inverseSurface: {
      main: sr,
      contrastText: sr
    },
    inverseOnSurface: {
      main: cr,
      contrastText: sr
    },
    shadow: {
      main: H
    },
    scrim: {
      main: ir
    },
    surfaceTint: {
      main: I
    },
    background: {
      default: C,
      paper: O
    },
    onBackground: {
      main: y
    },
    common: {
      white: R,
      black: E
    },
    text: {
      primary: y,
      secondary: u
    },
    info: {
      main: Ur,
      contrastText: $e
    },
    onInfo: {
      main: $e,
      contrastText: Ur
    },
    infoContainer: {
      main: Ne,
      contrastText: Le
    },
    onInfoContainer: {
      main: Le,
      contrastText: Ne
    },
    success: {
      main: Ve,
      contrastText: je
    },
    onSuccess: {
      main: je,
      contrastText: Ve
    },
    successContainer: {
      main: ze,
      contrastText: Ue
    },
    onSuccessContainer: {
      main: Ue,
      contrastText: ze
    },
    warning: {
      main: He,
      contrastText: We
    },
    onWarning: {
      main: We,
      contrastText: He
    },
    warningContainer: {
      main: Ye,
      contrastText: Ge
    },
    onWarningContainer: {
      main: Ge,
      contrastText: Ye
    },
    divider: W
  };
}, xe = (r, e, n) => {
  const t = {
    name: e,
    value: ne(n),
    blend: !1
  }, o = Ca(ne("#000000"), t)[r];
  return Object.entries(o).reduce(
    (i, [s, c]) => ({ ...i, [s]: Vn(c) }),
    {}
  );
}, La = (r, e, { info: n, success: t, warning: o } = na) => {
  const a = xe(r, "info", n), i = xe(r, "success", t), s = xe(r, "warning", o);
  return {
    ...e,
    info: a.color,
    onInfo: a.onColor,
    infoContainer: a.colorContainer,
    onInfoContainer: a.onColorContainer,
    success: i.color,
    onSuccess: i.onColor,
    successContainer: i.colorContainer,
    onSuccessContainer: i.onColorContainer,
    warning: s.color,
    onWarning: s.onColor,
    warningContainer: s.colorContainer,
    onWarningContainer: s.onColorContainer
  };
}, Va = (r, e = _n.schemes[r], n, t) => {
  const o = La(r, e, t), a = Na(r, o), i = hn({ ...n, palette: a }), s = $a(i);
  return hn(i, { components: s });
}, ja = (r, e = _n.schemes[r], n, t) => Va(r, e, n, t);
export {
  ja as createCompatibleTheme,
  Va as createMaterialYouTheme
};

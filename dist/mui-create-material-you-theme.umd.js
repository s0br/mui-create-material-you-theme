;(function (Dr, Gr) {
  typeof exports == 'object' && typeof module < 'u'
    ? Gr(exports, require('react'))
    : typeof define == 'function' && define.amd
      ? define(['exports', 'react'], Gr)
      : ((Dr = typeof globalThis < 'u' ? globalThis : Dr || self),
        Gr((Dr.MuiCreateMaterialYouTheme = {}), Dr.React))
})(this, function (Dr, Gr) {
  'use strict'
  function nn(r) {
    const e = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } })
    if (r) {
      for (const t in r)
        if (t !== 'default') {
          const n = Object.getOwnPropertyDescriptor(r, t)
          Object.defineProperty(e, t, n.get ? n : { enumerable: !0, get: () => r[t] })
        }
    }
    return (e.default = r), Object.freeze(e)
  }
  const Ze = nn(Gr),
    qr = { black: '#000', white: '#fff' },
    Lr = { 300: '#e57373', 400: '#ef5350', 500: '#f44336', 700: '#d32f2f', 800: '#c62828' },
    Nr = {
      50: '#f3e5f5',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      700: '#7b1fa2',
    },
    Vr = { 50: '#e3f2fd', 200: '#90caf9', 400: '#42a5f5', 700: '#1976d2', 800: '#1565c0' },
    jr = { 300: '#4fc3f7', 400: '#29b6f6', 500: '#03a9f4', 700: '#0288d1', 900: '#01579b' },
    zr = {
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
    },
    Kr = { 300: '#ffb74d', 400: '#ffa726', 500: '#ff9800', 700: '#f57c00', 900: '#e65100' },
    on = {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    }
  function Or(r, ...e) {
    const t = new URL(`https://mui.com/production-error/?code=${r}`)
    return (
      e.forEach((n) => t.searchParams.append('args[]', n)),
      `Minified MUI error #${r}; visit ${t} for the full message.`
    )
  }
  function an(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r
  }
  var ae = { exports: {} },
    K = {}
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var rt
  function sn() {
    if (rt) return K
    rt = 1
    var r = typeof Symbol == 'function' && Symbol.for,
      e = r ? Symbol.for('react.element') : 60103,
      t = r ? Symbol.for('react.portal') : 60106,
      n = r ? Symbol.for('react.fragment') : 60107,
      o = r ? Symbol.for('react.strict_mode') : 60108,
      a = r ? Symbol.for('react.profiler') : 60114,
      i = r ? Symbol.for('react.provider') : 60109,
      c = r ? Symbol.for('react.context') : 60110,
      f = r ? Symbol.for('react.async_mode') : 60111,
      l = r ? Symbol.for('react.concurrent_mode') : 60111,
      d = r ? Symbol.for('react.forward_ref') : 60112,
      m = r ? Symbol.for('react.suspense') : 60113,
      h = r ? Symbol.for('react.suspense_list') : 60120,
      C = r ? Symbol.for('react.memo') : 60115,
      b = r ? Symbol.for('react.lazy') : 60116,
      u = r ? Symbol.for('react.block') : 60121,
      T = r ? Symbol.for('react.fundamental') : 60117,
      w = r ? Symbol.for('react.responder') : 60118,
      R = r ? Symbol.for('react.scope') : 60119
    function S(p) {
      if (typeof p == 'object' && p !== null) {
        var V = p.$$typeof
        switch (V) {
          case e:
            switch (((p = p.type), p)) {
              case f:
              case l:
              case n:
              case a:
              case o:
              case m:
                return p
              default:
                switch (((p = p && p.$$typeof), p)) {
                  case c:
                  case d:
                  case b:
                  case C:
                  case i:
                    return p
                  default:
                    return V
                }
            }
          case t:
            return V
        }
      }
    }
    function x(p) {
      return S(p) === l
    }
    return (
      (K.AsyncMode = f),
      (K.ConcurrentMode = l),
      (K.ContextConsumer = c),
      (K.ContextProvider = i),
      (K.Element = e),
      (K.ForwardRef = d),
      (K.Fragment = n),
      (K.Lazy = b),
      (K.Memo = C),
      (K.Portal = t),
      (K.Profiler = a),
      (K.StrictMode = o),
      (K.Suspense = m),
      (K.isAsyncMode = function (p) {
        return x(p) || S(p) === f
      }),
      (K.isConcurrentMode = x),
      (K.isContextConsumer = function (p) {
        return S(p) === c
      }),
      (K.isContextProvider = function (p) {
        return S(p) === i
      }),
      (K.isElement = function (p) {
        return typeof p == 'object' && p !== null && p.$$typeof === e
      }),
      (K.isForwardRef = function (p) {
        return S(p) === d
      }),
      (K.isFragment = function (p) {
        return S(p) === n
      }),
      (K.isLazy = function (p) {
        return S(p) === b
      }),
      (K.isMemo = function (p) {
        return S(p) === C
      }),
      (K.isPortal = function (p) {
        return S(p) === t
      }),
      (K.isProfiler = function (p) {
        return S(p) === a
      }),
      (K.isStrictMode = function (p) {
        return S(p) === o
      }),
      (K.isSuspense = function (p) {
        return S(p) === m
      }),
      (K.isValidElementType = function (p) {
        return (
          typeof p == 'string' ||
          typeof p == 'function' ||
          p === n ||
          p === l ||
          p === a ||
          p === o ||
          p === m ||
          p === h ||
          (typeof p == 'object' &&
            p !== null &&
            (p.$$typeof === b ||
              p.$$typeof === C ||
              p.$$typeof === i ||
              p.$$typeof === c ||
              p.$$typeof === d ||
              p.$$typeof === T ||
              p.$$typeof === w ||
              p.$$typeof === R ||
              p.$$typeof === u))
        )
      }),
      (K.typeOf = S),
      K
    )
  }
  var X = {}
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var et
  function cn() {
    return (
      et ||
        ((et = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            var r = typeof Symbol == 'function' && Symbol.for,
              e = r ? Symbol.for('react.element') : 60103,
              t = r ? Symbol.for('react.portal') : 60106,
              n = r ? Symbol.for('react.fragment') : 60107,
              o = r ? Symbol.for('react.strict_mode') : 60108,
              a = r ? Symbol.for('react.profiler') : 60114,
              i = r ? Symbol.for('react.provider') : 60109,
              c = r ? Symbol.for('react.context') : 60110,
              f = r ? Symbol.for('react.async_mode') : 60111,
              l = r ? Symbol.for('react.concurrent_mode') : 60111,
              d = r ? Symbol.for('react.forward_ref') : 60112,
              m = r ? Symbol.for('react.suspense') : 60113,
              h = r ? Symbol.for('react.suspense_list') : 60120,
              C = r ? Symbol.for('react.memo') : 60115,
              b = r ? Symbol.for('react.lazy') : 60116,
              u = r ? Symbol.for('react.block') : 60121,
              T = r ? Symbol.for('react.fundamental') : 60117,
              w = r ? Symbol.for('react.responder') : 60118,
              R = r ? Symbol.for('react.scope') : 60119
            function S(k) {
              return (
                typeof k == 'string' ||
                typeof k == 'function' ||
                k === n ||
                k === l ||
                k === a ||
                k === o ||
                k === m ||
                k === h ||
                (typeof k == 'object' &&
                  k !== null &&
                  (k.$$typeof === b ||
                    k.$$typeof === C ||
                    k.$$typeof === i ||
                    k.$$typeof === c ||
                    k.$$typeof === d ||
                    k.$$typeof === T ||
                    k.$$typeof === w ||
                    k.$$typeof === R ||
                    k.$$typeof === u))
              )
            }
            function x(k) {
              if (typeof k == 'object' && k !== null) {
                var Er = k.$$typeof
                switch (Er) {
                  case e:
                    var Hr = k.type
                    switch (Hr) {
                      case f:
                      case l:
                      case n:
                      case a:
                      case o:
                      case m:
                        return Hr
                      default:
                        var oe = Hr && Hr.$$typeof
                        switch (oe) {
                          case c:
                          case d:
                          case b:
                          case C:
                          case i:
                            return oe
                          default:
                            return Er
                        }
                    }
                  case t:
                    return Er
                }
              }
            }
            var p = f,
              V = l,
              B = c,
              G = i,
              H = e,
              s = d,
              v = n,
              O = b,
              U = C,
              er = t,
              gr = a,
              lr = o,
              fr = m,
              kr = !1
            function Mr(k) {
              return (
                kr ||
                  ((kr = !0),
                  console.warn(
                    'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.',
                  )),
                F(k) || x(k) === f
              )
            }
            function F(k) {
              return x(k) === l
            }
            function P(k) {
              return x(k) === c
            }
            function $(k) {
              return x(k) === i
            }
            function _(k) {
              return typeof k == 'object' && k !== null && k.$$typeof === e
            }
            function M(k) {
              return x(k) === d
            }
            function j(k) {
              return x(k) === n
            }
            function L(k) {
              return x(k) === b
            }
            function N(k) {
              return x(k) === C
            }
            function z(k) {
              return x(k) === t
            }
            function q(k) {
              return x(k) === a
            }
            function W(k) {
              return x(k) === o
            }
            function hr(k) {
              return x(k) === m
            }
            ;(X.AsyncMode = p),
              (X.ConcurrentMode = V),
              (X.ContextConsumer = B),
              (X.ContextProvider = G),
              (X.Element = H),
              (X.ForwardRef = s),
              (X.Fragment = v),
              (X.Lazy = O),
              (X.Memo = U),
              (X.Portal = er),
              (X.Profiler = gr),
              (X.StrictMode = lr),
              (X.Suspense = fr),
              (X.isAsyncMode = Mr),
              (X.isConcurrentMode = F),
              (X.isContextConsumer = P),
              (X.isContextProvider = $),
              (X.isElement = _),
              (X.isForwardRef = M),
              (X.isFragment = j),
              (X.isLazy = L),
              (X.isMemo = N),
              (X.isPortal = z),
              (X.isProfiler = q),
              (X.isStrictMode = W),
              (X.isSuspense = hr),
              (X.isValidElementType = S),
              (X.typeOf = x)
          })()),
      X
    )
  }
  var tt
  function nt() {
    return (
      tt ||
        ((tt = 1),
        process.env.NODE_ENV === 'production' ? (ae.exports = sn()) : (ae.exports = cn())),
      ae.exports
    )
  }
  var ie = { exports: {} }
  /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var ke, ot
  function un() {
    if (ot) return ke
    ot = 1
    var r = Object.getOwnPropertySymbols,
      e = Object.prototype.hasOwnProperty,
      t = Object.prototype.propertyIsEnumerable
    function n(a) {
      if (a == null) throw new TypeError('Object.assign cannot be called with null or undefined')
      return Object(a)
    }
    function o() {
      try {
        if (!Object.assign) return !1
        var a = new String('abc')
        if (((a[5] = 'de'), Object.getOwnPropertyNames(a)[0] === '5')) return !1
        for (var i = {}, c = 0; c < 10; c++) i['_' + String.fromCharCode(c)] = c
        var f = Object.getOwnPropertyNames(i).map(function (d) {
          return i[d]
        })
        if (f.join('') !== '0123456789') return !1
        var l = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (d) {
            l[d] = d
          }),
          Object.keys(Object.assign({}, l)).join('') === 'abcdefghijklmnopqrst'
        )
      } catch {
        return !1
      }
    }
    return (
      (ke = o()
        ? Object.assign
        : function (a, i) {
            for (var c, f = n(a), l, d = 1; d < arguments.length; d++) {
              c = Object(arguments[d])
              for (var m in c) e.call(c, m) && (f[m] = c[m])
              if (r) {
                l = r(c)
                for (var h = 0; h < l.length; h++) t.call(c, l[h]) && (f[l[h]] = c[l[h]])
              }
            }
            return f
          }),
      ke
    )
  }
  var ve, at
  function Pe() {
    if (at) return ve
    at = 1
    var r = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    return (ve = r), ve
  }
  var we, it
  function st() {
    return it || ((it = 1), (we = Function.call.bind(Object.prototype.hasOwnProperty))), we
  }
  var Ae, ct
  function fn() {
    if (ct) return Ae
    ct = 1
    var r = function () {}
    if (process.env.NODE_ENV !== 'production') {
      var e = Pe(),
        t = {},
        n = st()
      r = function (a) {
        var i = 'Warning: ' + a
        typeof console < 'u' && console.error(i)
        try {
          throw new Error(i)
        } catch {}
      }
    }
    function o(a, i, c, f, l) {
      if (process.env.NODE_ENV !== 'production') {
        for (var d in a)
          if (n(a, d)) {
            var m
            try {
              if (typeof a[d] != 'function') {
                var h = Error(
                  (f || 'React class') +
                    ': ' +
                    c +
                    ' type `' +
                    d +
                    '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                    typeof a[d] +
                    '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                )
                throw ((h.name = 'Invariant Violation'), h)
              }
              m = a[d](i, d, f, c, null, e)
            } catch (b) {
              m = b
            }
            if (
              (m &&
                !(m instanceof Error) &&
                r(
                  (f || 'React class') +
                    ': type specification of ' +
                    c +
                    ' `' +
                    d +
                    '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                    typeof m +
                    '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                ),
              m instanceof Error && !(m.message in t))
            ) {
              t[m.message] = !0
              var C = l ? l() : ''
              r('Failed ' + c + ' type: ' + m.message + (C ?? ''))
            }
          }
      }
    }
    return (
      (o.resetWarningCache = function () {
        process.env.NODE_ENV !== 'production' && (t = {})
      }),
      (Ae = o),
      Ae
    )
  }
  var Me, ut
  function ln() {
    if (ut) return Me
    ut = 1
    var r = nt(),
      e = un(),
      t = Pe(),
      n = st(),
      o = fn(),
      a = function () {}
    process.env.NODE_ENV !== 'production' &&
      (a = function (c) {
        var f = 'Warning: ' + c
        typeof console < 'u' && console.error(f)
        try {
          throw new Error(f)
        } catch {}
      })
    function i() {
      return null
    }
    return (
      (Me = function (c, f) {
        var l = typeof Symbol == 'function' && Symbol.iterator,
          d = '@@iterator'
        function m(F) {
          var P = F && ((l && F[l]) || F[d])
          if (typeof P == 'function') return P
        }
        var h = '<<anonymous>>',
          C = {
            array: w('array'),
            bigint: w('bigint'),
            bool: w('boolean'),
            func: w('function'),
            number: w('number'),
            object: w('object'),
            string: w('string'),
            symbol: w('symbol'),
            any: R(),
            arrayOf: S,
            element: x(),
            elementType: p(),
            instanceOf: V,
            node: s(),
            objectOf: G,
            oneOf: B,
            oneOfType: H,
            shape: O,
            exact: U,
          }
        function b(F, P) {
          return F === P ? F !== 0 || 1 / F === 1 / P : F !== F && P !== P
        }
        function u(F, P) {
          ;(this.message = F), (this.data = P && typeof P == 'object' ? P : {}), (this.stack = '')
        }
        u.prototype = Error.prototype
        function T(F) {
          if (process.env.NODE_ENV !== 'production')
            var P = {},
              $ = 0
          function _(j, L, N, z, q, W, hr) {
            if (((z = z || h), (W = W || N), hr !== t)) {
              if (f) {
                var k = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
                )
                throw ((k.name = 'Invariant Violation'), k)
              } else if (process.env.NODE_ENV !== 'production' && typeof console < 'u') {
                var Er = z + ':' + N
                !P[Er] &&
                  $ < 3 &&
                  (a(
                    'You are manually calling a React.PropTypes validation function for the `' +
                      W +
                      '` prop on `' +
                      z +
                      '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                  ),
                  (P[Er] = !0),
                  $++)
              }
            }
            return L[N] == null
              ? j
                ? L[N] === null
                  ? new u(
                      'The ' +
                        q +
                        ' `' +
                        W +
                        '` is marked as required ' +
                        ('in `' + z + '`, but its value is `null`.'),
                    )
                  : new u(
                      'The ' +
                        q +
                        ' `' +
                        W +
                        '` is marked as required in ' +
                        ('`' + z + '`, but its value is `undefined`.'),
                    )
                : null
              : F(L, N, z, q, W)
          }
          var M = _.bind(null, !1)
          return (M.isRequired = _.bind(null, !0)), M
        }
        function w(F) {
          function P($, _, M, j, L, N) {
            var z = $[_],
              q = lr(z)
            if (q !== F) {
              var W = fr(z)
              return new u(
                'Invalid ' +
                  j +
                  ' `' +
                  L +
                  '` of type ' +
                  ('`' + W + '` supplied to `' + M + '`, expected ') +
                  ('`' + F + '`.'),
                { expectedType: F },
              )
            }
            return null
          }
          return T(P)
        }
        function R() {
          return T(i)
        }
        function S(F) {
          function P($, _, M, j, L) {
            if (typeof F != 'function')
              return new u(
                'Property `' +
                  L +
                  '` of component `' +
                  M +
                  '` has invalid PropType notation inside arrayOf.',
              )
            var N = $[_]
            if (!Array.isArray(N)) {
              var z = lr(N)
              return new u(
                'Invalid ' +
                  j +
                  ' `' +
                  L +
                  '` of type ' +
                  ('`' + z + '` supplied to `' + M + '`, expected an array.'),
              )
            }
            for (var q = 0; q < N.length; q++) {
              var W = F(N, q, M, j, L + '[' + q + ']', t)
              if (W instanceof Error) return W
            }
            return null
          }
          return T(P)
        }
        function x() {
          function F(P, $, _, M, j) {
            var L = P[$]
            if (!c(L)) {
              var N = lr(L)
              return new u(
                'Invalid ' +
                  M +
                  ' `' +
                  j +
                  '` of type ' +
                  ('`' + N + '` supplied to `' + _ + '`, expected a single ReactElement.'),
              )
            }
            return null
          }
          return T(F)
        }
        function p() {
          function F(P, $, _, M, j) {
            var L = P[$]
            if (!r.isValidElementType(L)) {
              var N = lr(L)
              return new u(
                'Invalid ' +
                  M +
                  ' `' +
                  j +
                  '` of type ' +
                  ('`' + N + '` supplied to `' + _ + '`, expected a single ReactElement type.'),
              )
            }
            return null
          }
          return T(F)
        }
        function V(F) {
          function P($, _, M, j, L) {
            if (!($[_] instanceof F)) {
              var N = F.name || h,
                z = Mr($[_])
              return new u(
                'Invalid ' +
                  j +
                  ' `' +
                  L +
                  '` of type ' +
                  ('`' + z + '` supplied to `' + M + '`, expected ') +
                  ('instance of `' + N + '`.'),
              )
            }
            return null
          }
          return T(P)
        }
        function B(F) {
          if (!Array.isArray(F))
            return (
              process.env.NODE_ENV !== 'production' &&
                (arguments.length > 1
                  ? a(
                      'Invalid arguments supplied to oneOf, expected an array, got ' +
                        arguments.length +
                        ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).',
                    )
                  : a('Invalid argument supplied to oneOf, expected an array.')),
              i
            )
          function P($, _, M, j, L) {
            for (var N = $[_], z = 0; z < F.length; z++) if (b(N, F[z])) return null
            var q = JSON.stringify(F, function (hr, k) {
              var Er = fr(k)
              return Er === 'symbol' ? String(k) : k
            })
            return new u(
              'Invalid ' +
                j +
                ' `' +
                L +
                '` of value `' +
                String(N) +
                '` ' +
                ('supplied to `' + M + '`, expected one of ' + q + '.'),
            )
          }
          return T(P)
        }
        function G(F) {
          function P($, _, M, j, L) {
            if (typeof F != 'function')
              return new u(
                'Property `' +
                  L +
                  '` of component `' +
                  M +
                  '` has invalid PropType notation inside objectOf.',
              )
            var N = $[_],
              z = lr(N)
            if (z !== 'object')
              return new u(
                'Invalid ' +
                  j +
                  ' `' +
                  L +
                  '` of type ' +
                  ('`' + z + '` supplied to `' + M + '`, expected an object.'),
              )
            for (var q in N)
              if (n(N, q)) {
                var W = F(N, q, M, j, L + '.' + q, t)
                if (W instanceof Error) return W
              }
            return null
          }
          return T(P)
        }
        function H(F) {
          if (!Array.isArray(F))
            return (
              process.env.NODE_ENV !== 'production' &&
                a('Invalid argument supplied to oneOfType, expected an instance of array.'),
              i
            )
          for (var P = 0; P < F.length; P++) {
            var $ = F[P]
            if (typeof $ != 'function')
              return (
                a(
                  'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                    kr($) +
                    ' at index ' +
                    P +
                    '.',
                ),
                i
              )
          }
          function _(M, j, L, N, z) {
            for (var q = [], W = 0; W < F.length; W++) {
              var hr = F[W],
                k = hr(M, j, L, N, z, t)
              if (k == null) return null
              k.data && n(k.data, 'expectedType') && q.push(k.data.expectedType)
            }
            var Er = q.length > 0 ? ', expected one of type [' + q.join(', ') + ']' : ''
            return new u('Invalid ' + N + ' `' + z + '` supplied to ' + ('`' + L + '`' + Er + '.'))
          }
          return T(_)
        }
        function s() {
          function F(P, $, _, M, j) {
            return er(P[$])
              ? null
              : new u(
                  'Invalid ' +
                    M +
                    ' `' +
                    j +
                    '` supplied to ' +
                    ('`' + _ + '`, expected a ReactNode.'),
                )
          }
          return T(F)
        }
        function v(F, P, $, _, M) {
          return new u(
            (F || 'React class') +
              ': ' +
              P +
              ' type `' +
              $ +
              '.' +
              _ +
              '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
              M +
              '`.',
          )
        }
        function O(F) {
          function P($, _, M, j, L) {
            var N = $[_],
              z = lr(N)
            if (z !== 'object')
              return new u(
                'Invalid ' +
                  j +
                  ' `' +
                  L +
                  '` of type `' +
                  z +
                  '` ' +
                  ('supplied to `' + M + '`, expected `object`.'),
              )
            for (var q in F) {
              var W = F[q]
              if (typeof W != 'function') return v(M, j, L, q, fr(W))
              var hr = W(N, q, M, j, L + '.' + q, t)
              if (hr) return hr
            }
            return null
          }
          return T(P)
        }
        function U(F) {
          function P($, _, M, j, L) {
            var N = $[_],
              z = lr(N)
            if (z !== 'object')
              return new u(
                'Invalid ' +
                  j +
                  ' `' +
                  L +
                  '` of type `' +
                  z +
                  '` ' +
                  ('supplied to `' + M + '`, expected `object`.'),
              )
            var q = e({}, $[_], F)
            for (var W in q) {
              var hr = F[W]
              if (n(F, W) && typeof hr != 'function') return v(M, j, L, W, fr(hr))
              if (!hr)
                return new u(
                  'Invalid ' +
                    j +
                    ' `' +
                    L +
                    '` key `' +
                    W +
                    '` supplied to `' +
                    M +
                    '`.\nBad object: ' +
                    JSON.stringify($[_], null, '  ') +
                    `
Valid keys: ` +
                    JSON.stringify(Object.keys(F), null, '  '),
                )
              var k = hr(N, W, M, j, L + '.' + W, t)
              if (k) return k
            }
            return null
          }
          return T(P)
        }
        function er(F) {
          switch (typeof F) {
            case 'number':
            case 'string':
            case 'undefined':
              return !0
            case 'boolean':
              return !F
            case 'object':
              if (Array.isArray(F)) return F.every(er)
              if (F === null || c(F)) return !0
              var P = m(F)
              if (P) {
                var $ = P.call(F),
                  _
                if (P !== F.entries) {
                  for (; !(_ = $.next()).done; ) if (!er(_.value)) return !1
                } else
                  for (; !(_ = $.next()).done; ) {
                    var M = _.value
                    if (M && !er(M[1])) return !1
                  }
              } else return !1
              return !0
            default:
              return !1
          }
        }
        function gr(F, P) {
          return F === 'symbol'
            ? !0
            : P
              ? P['@@toStringTag'] === 'Symbol' ||
                (typeof Symbol == 'function' && P instanceof Symbol)
              : !1
        }
        function lr(F) {
          var P = typeof F
          return Array.isArray(F)
            ? 'array'
            : F instanceof RegExp
              ? 'object'
              : gr(P, F)
                ? 'symbol'
                : P
        }
        function fr(F) {
          if (typeof F > 'u' || F === null) return '' + F
          var P = lr(F)
          if (P === 'object') {
            if (F instanceof Date) return 'date'
            if (F instanceof RegExp) return 'regexp'
          }
          return P
        }
        function kr(F) {
          var P = fr(F)
          switch (P) {
            case 'array':
            case 'object':
              return 'an ' + P
            case 'boolean':
            case 'date':
            case 'regexp':
              return 'a ' + P
            default:
              return P
          }
        }
        function Mr(F) {
          return !F.constructor || !F.constructor.name ? h : F.constructor.name
        }
        return (
          (C.checkPropTypes = o), (C.resetWarningCache = o.resetWarningCache), (C.PropTypes = C), C
        )
      }),
      Me
    )
  }
  var De, ft
  function dn() {
    if (ft) return De
    ft = 1
    var r = Pe()
    function e() {}
    function t() {}
    return (
      (t.resetWarningCache = e),
      (De = function () {
        function n(i, c, f, l, d, m) {
          if (m !== r) {
            var h = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
            )
            throw ((h.name = 'Invariant Violation'), h)
          }
        }
        n.isRequired = n
        function o() {
          return n
        }
        var a = {
          array: n,
          bigint: n,
          bool: n,
          func: n,
          number: n,
          object: n,
          string: n,
          symbol: n,
          any: n,
          arrayOf: o,
          element: n,
          elementType: n,
          instanceOf: o,
          node: n,
          objectOf: o,
          oneOf: o,
          oneOfType: o,
          shape: o,
          exact: o,
          checkPropTypes: t,
          resetWarningCache: e,
        }
        return (a.PropTypes = a), a
      }),
      De
    )
  }
  var lt
  function mn() {
    if (lt) return ie.exports
    if (((lt = 1), process.env.NODE_ENV !== 'production')) {
      var r = nt(),
        e = !0
      ie.exports = ln()(r.isElement, e)
    } else ie.exports = dn()()
    return ie.exports
  }
  var hn = mn()
  const Xr = an(hn)
  var se = { exports: {} },
    J = {}
  /**
   * @license React
   * react-is.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var dt
  function gn() {
    if (dt) return J
    dt = 1
    var r = Symbol.for('react.transitional.element'),
      e = Symbol.for('react.portal'),
      t = Symbol.for('react.fragment'),
      n = Symbol.for('react.strict_mode'),
      o = Symbol.for('react.profiler'),
      a = Symbol.for('react.consumer'),
      i = Symbol.for('react.context'),
      c = Symbol.for('react.forward_ref'),
      f = Symbol.for('react.suspense'),
      l = Symbol.for('react.suspense_list'),
      d = Symbol.for('react.memo'),
      m = Symbol.for('react.lazy'),
      h = Symbol.for('react.view_transition'),
      C = Symbol.for('react.client.reference')
    function b(u) {
      if (typeof u == 'object' && u !== null) {
        var T = u.$$typeof
        switch (T) {
          case r:
            switch (((u = u.type), u)) {
              case t:
              case o:
              case n:
              case f:
              case l:
              case h:
                return u
              default:
                switch (((u = u && u.$$typeof), u)) {
                  case i:
                  case c:
                  case m:
                  case d:
                    return u
                  case a:
                    return u
                  default:
                    return T
                }
            }
          case e:
            return T
        }
      }
    }
    return (
      (J.ContextConsumer = a),
      (J.ContextProvider = i),
      (J.Element = r),
      (J.ForwardRef = c),
      (J.Fragment = t),
      (J.Lazy = m),
      (J.Memo = d),
      (J.Portal = e),
      (J.Profiler = o),
      (J.StrictMode = n),
      (J.Suspense = f),
      (J.SuspenseList = l),
      (J.isContextConsumer = function (u) {
        return b(u) === a
      }),
      (J.isContextProvider = function (u) {
        return b(u) === i
      }),
      (J.isElement = function (u) {
        return typeof u == 'object' && u !== null && u.$$typeof === r
      }),
      (J.isForwardRef = function (u) {
        return b(u) === c
      }),
      (J.isFragment = function (u) {
        return b(u) === t
      }),
      (J.isLazy = function (u) {
        return b(u) === m
      }),
      (J.isMemo = function (u) {
        return b(u) === d
      }),
      (J.isPortal = function (u) {
        return b(u) === e
      }),
      (J.isProfiler = function (u) {
        return b(u) === o
      }),
      (J.isStrictMode = function (u) {
        return b(u) === n
      }),
      (J.isSuspense = function (u) {
        return b(u) === f
      }),
      (J.isSuspenseList = function (u) {
        return b(u) === l
      }),
      (J.isValidElementType = function (u) {
        return (
          typeof u == 'string' ||
          typeof u == 'function' ||
          u === t ||
          u === o ||
          u === n ||
          u === f ||
          u === l ||
          (typeof u == 'object' &&
            u !== null &&
            (u.$$typeof === m ||
              u.$$typeof === d ||
              u.$$typeof === i ||
              u.$$typeof === a ||
              u.$$typeof === c ||
              u.$$typeof === C ||
              u.getModuleId !== void 0))
        )
      }),
      (J.typeOf = b),
      J
    )
  }
  var Q = {}
  /**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var mt
  function yn() {
    return (
      mt ||
        ((mt = 1),
        process.env.NODE_ENV !== 'production' &&
          (function () {
            function r(u) {
              if (typeof u == 'object' && u !== null) {
                var T = u.$$typeof
                switch (T) {
                  case e:
                    switch (((u = u.type), u)) {
                      case n:
                      case a:
                      case o:
                      case l:
                      case d:
                      case C:
                        return u
                      default:
                        switch (((u = u && u.$$typeof), u)) {
                          case c:
                          case f:
                          case h:
                          case m:
                            return u
                          case i:
                            return u
                          default:
                            return T
                        }
                    }
                  case t:
                    return T
                }
              }
            }
            var e = Symbol.for('react.transitional.element'),
              t = Symbol.for('react.portal'),
              n = Symbol.for('react.fragment'),
              o = Symbol.for('react.strict_mode'),
              a = Symbol.for('react.profiler'),
              i = Symbol.for('react.consumer'),
              c = Symbol.for('react.context'),
              f = Symbol.for('react.forward_ref'),
              l = Symbol.for('react.suspense'),
              d = Symbol.for('react.suspense_list'),
              m = Symbol.for('react.memo'),
              h = Symbol.for('react.lazy'),
              C = Symbol.for('react.view_transition'),
              b = Symbol.for('react.client.reference')
            ;(Q.ContextConsumer = i),
              (Q.ContextProvider = c),
              (Q.Element = e),
              (Q.ForwardRef = f),
              (Q.Fragment = n),
              (Q.Lazy = h),
              (Q.Memo = m),
              (Q.Portal = t),
              (Q.Profiler = a),
              (Q.StrictMode = o),
              (Q.Suspense = l),
              (Q.SuspenseList = d),
              (Q.isContextConsumer = function (u) {
                return r(u) === i
              }),
              (Q.isContextProvider = function (u) {
                return r(u) === c
              }),
              (Q.isElement = function (u) {
                return typeof u == 'object' && u !== null && u.$$typeof === e
              }),
              (Q.isForwardRef = function (u) {
                return r(u) === f
              }),
              (Q.isFragment = function (u) {
                return r(u) === n
              }),
              (Q.isLazy = function (u) {
                return r(u) === h
              }),
              (Q.isMemo = function (u) {
                return r(u) === m
              }),
              (Q.isPortal = function (u) {
                return r(u) === t
              }),
              (Q.isProfiler = function (u) {
                return r(u) === a
              }),
              (Q.isStrictMode = function (u) {
                return r(u) === o
              }),
              (Q.isSuspense = function (u) {
                return r(u) === l
              }),
              (Q.isSuspenseList = function (u) {
                return r(u) === d
              }),
              (Q.isValidElementType = function (u) {
                return (
                  typeof u == 'string' ||
                  typeof u == 'function' ||
                  u === n ||
                  u === a ||
                  u === o ||
                  u === l ||
                  u === d ||
                  (typeof u == 'object' &&
                    u !== null &&
                    (u.$$typeof === h ||
                      u.$$typeof === m ||
                      u.$$typeof === c ||
                      u.$$typeof === i ||
                      u.$$typeof === f ||
                      u.$$typeof === b ||
                      u.getModuleId !== void 0))
                )
              }),
              (Q.typeOf = r)
          })()),
      Q
    )
  }
  var ht
  function pn() {
    return (
      ht ||
        ((ht = 1),
        process.env.NODE_ENV === 'production' ? (se.exports = gn()) : (se.exports = yn())),
      se.exports
    )
  }
  var gt = pn()
  function Ir(r) {
    if (typeof r != 'object' || r === null) return !1
    const e = Object.getPrototypeOf(r)
    return (
      (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in r) &&
      !(Symbol.iterator in r)
    )
  }
  function yt(r) {
    if (Ze.isValidElement(r) || gt.isValidElementType(r) || !Ir(r)) return r
    const e = {}
    return (
      Object.keys(r).forEach((t) => {
        e[t] = yt(r[t])
      }),
      e
    )
  }
  function br(r, e, t = { clone: !0 }) {
    const n = t.clone ? { ...r } : r
    return (
      Ir(r) &&
        Ir(e) &&
        Object.keys(e).forEach((o) => {
          Ze.isValidElement(e[o]) || gt.isValidElementType(e[o])
            ? (n[o] = e[o])
            : Ir(e[o]) && Object.prototype.hasOwnProperty.call(r, o) && Ir(r[o])
              ? (n[o] = br(r[o], e[o], t))
              : t.clone
                ? (n[o] = Ir(e[o]) ? yt(e[o]) : e[o])
                : (n[o] = e[o])
        }),
      n
    )
  }
  const bn = (r) => {
    const e = Object.keys(r).map((t) => ({ key: t, val: r[t] })) || []
    return e.sort((t, n) => t.val - n.val), e.reduce((t, n) => ({ ...t, [n.key]: n.val }), {})
  }
  function Cn(r) {
    const {
        values: e = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: t = 'px',
        step: n = 5,
        ...o
      } = r,
      a = bn(e),
      i = Object.keys(a)
    function c(h) {
      return `@media (min-width:${typeof e[h] == 'number' ? e[h] : h}${t})`
    }
    function f(h) {
      return `@media (max-width:${(typeof e[h] == 'number' ? e[h] : h) - n / 100}${t})`
    }
    function l(h, C) {
      const b = i.indexOf(C)
      return `@media (min-width:${typeof e[h] == 'number' ? e[h] : h}${t}) and (max-width:${(b !== -1 && typeof e[i[b]] == 'number' ? e[i[b]] : C) - n / 100}${t})`
    }
    function d(h) {
      return i.indexOf(h) + 1 < i.length ? l(h, i[i.indexOf(h) + 1]) : c(h)
    }
    function m(h) {
      const C = i.indexOf(h)
      return C === 0
        ? c(i[1])
        : C === i.length - 1
          ? f(i[C])
          : l(h, i[i.indexOf(h) + 1]).replace('@media', '@media not all and')
    }
    return { keys: i, values: a, up: c, down: f, between: l, only: d, not: m, unit: t, ...o }
  }
  function Fn(r, e) {
    if (!r.containerQueries) return e
    const t = Object.keys(e)
      .filter((n) => n.startsWith('@container'))
      .sort((n, o) => {
        var i, c
        const a = /min-width:\s*([0-9.]+)/
        return (
          +(((i = n.match(a)) == null ? void 0 : i[1]) || 0) -
          +(((c = o.match(a)) == null ? void 0 : c[1]) || 0)
        )
      })
    return t.length
      ? t.reduce(
          (n, o) => {
            const a = e[o]
            return delete n[o], (n[o] = a), n
          },
          { ...e },
        )
      : e
  }
  function Sn(r, e) {
    return (
      e === '@' ||
      (e.startsWith('@') && (r.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/)))
    )
  }
  function Tn(r, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/)
    if (!t) {
      if (process.env.NODE_ENV !== 'production')
        throw new Error(
          process.env.NODE_ENV !== 'production'
            ? `MUI: The provided shorthand ${`(${e})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`
            : Or(18, `(${e})`),
        )
      return null
    }
    const [, n, o] = t,
      a = Number.isNaN(+n) ? n || 0 : +n
    return r.containerQueries(o).up(a)
  }
  function En(r) {
    const e = (a, i) => a.replace('@media', i ? `@container ${i}` : '@container')
    function t(a, i) {
      ;(a.up = (...c) => e(r.breakpoints.up(...c), i)),
        (a.down = (...c) => e(r.breakpoints.down(...c), i)),
        (a.between = (...c) => e(r.breakpoints.between(...c), i)),
        (a.only = (...c) => e(r.breakpoints.only(...c), i)),
        (a.not = (...c) => {
          const f = e(r.breakpoints.not(...c), i)
          return f.includes('not all and')
            ? f
                .replace('not all and ', '')
                .replace('min-width:', 'width<')
                .replace('max-width:', 'width>')
                .replace('and', 'or')
            : f
        })
    }
    const n = {},
      o = (a) => (t(n, a), n)
    return t(o), { ...r, containerQueries: o }
  }
  const xn = { borderRadius: 4 },
    Rr =
      process.env.NODE_ENV !== 'production'
        ? Xr.oneOfType([Xr.number, Xr.string, Xr.object, Xr.array])
        : {}
  function Jr(r, e) {
    return e ? br(r, e, { clone: !1 }) : r
  }
  const ce = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    pt = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (r) => `@media (min-width:${ce[r]}px)` },
    kn = {
      containerQueries: (r) => ({
        up: (e) => {
          let t = typeof e == 'number' ? e : ce[e] || e
          return (
            typeof t == 'number' && (t = `${t}px`),
            r ? `@container ${r} (min-width:${t})` : `@container (min-width:${t})`
          )
        },
      }),
    }
  function Pr(r, e, t) {
    const n = r.theme || {}
    if (Array.isArray(e)) {
      const a = n.breakpoints || pt
      return e.reduce((i, c, f) => ((i[a.up(a.keys[f])] = t(e[f])), i), {})
    }
    if (typeof e == 'object') {
      const a = n.breakpoints || pt
      return Object.keys(e).reduce((i, c) => {
        if (Sn(a.keys, c)) {
          const f = Tn(n.containerQueries ? n : kn, c)
          f && (i[f] = t(e[c], c))
        } else if (Object.keys(a.values || ce).includes(c)) {
          const f = a.up(c)
          i[f] = t(e[c], c)
        } else {
          const f = c
          i[f] = e[f]
        }
        return i
      }, {})
    }
    return t(e)
  }
  function vn(r = {}) {
    var t
    return (
      ((t = r.keys) == null
        ? void 0
        : t.reduce((n, o) => {
            const a = r.up(o)
            return (n[a] = {}), n
          }, {})) || {}
    )
  }
  function Pn(r, e) {
    return r.reduce((t, n) => {
      const o = t[n]
      return (!o || Object.keys(o).length === 0) && delete t[n], t
    }, e)
  }
  function bt(r) {
    if (typeof r != 'string')
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? 'MUI: `capitalize(string)` expects a string argument.'
          : Or(7),
      )
    return r.charAt(0).toUpperCase() + r.slice(1)
  }
  function ue(r, e, t = !0) {
    if (!e || typeof e != 'string') return null
    if (r && r.vars && t) {
      const n = `vars.${e}`.split('.').reduce((o, a) => (o && o[a] ? o[a] : null), r)
      if (n != null) return n
    }
    return e.split('.').reduce((n, o) => (n && n[o] != null ? n[o] : null), r)
  }
  function fe(r, e, t, n = t) {
    let o
    return (
      typeof r == 'function'
        ? (o = r(t))
        : Array.isArray(r)
          ? (o = r[t] || n)
          : (o = ue(r, t) || n),
      e && (o = e(o, n, r)),
      o
    )
  }
  function ar(r) {
    const { prop: e, cssProperty: t = r.prop, themeKey: n, transform: o } = r,
      a = (i) => {
        if (i[e] == null) return null
        const c = i[e],
          f = i.theme,
          l = ue(f, n) || {}
        return Pr(i, c, (m) => {
          let h = fe(l, o, m)
          return (
            m === h &&
              typeof m == 'string' &&
              (h = fe(l, o, `${e}${m === 'default' ? '' : bt(m)}`, m)),
            t === !1 ? h : { [t]: h }
          )
        })
      }
    return (
      (a.propTypes = process.env.NODE_ENV !== 'production' ? { [e]: Rr } : {}),
      (a.filterProps = [e]),
      a
    )
  }
  function wn(r) {
    const e = {}
    return (t) => (e[t] === void 0 && (e[t] = r(t)), e[t])
  }
  const An = { m: 'margin', p: 'padding' },
    Mn = {
      t: 'Top',
      r: 'Right',
      b: 'Bottom',
      l: 'Left',
      x: ['Left', 'Right'],
      y: ['Top', 'Bottom'],
    },
    Ct = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
    Dn = wn((r) => {
      if (r.length > 2)
        if (Ct[r]) r = Ct[r]
        else return [r]
      const [e, t] = r.split(''),
        n = An[e],
        o = Mn[t] || ''
      return Array.isArray(o) ? o.map((a) => n + a) : [n + o]
    }),
    le = [
      'm',
      'mt',
      'mr',
      'mb',
      'ml',
      'mx',
      'my',
      'margin',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'marginX',
      'marginY',
      'marginInline',
      'marginInlineStart',
      'marginInlineEnd',
      'marginBlock',
      'marginBlockStart',
      'marginBlockEnd',
    ],
    de = [
      'p',
      'pt',
      'pr',
      'pb',
      'pl',
      'px',
      'py',
      'padding',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'paddingX',
      'paddingY',
      'paddingInline',
      'paddingInlineStart',
      'paddingInlineEnd',
      'paddingBlock',
      'paddingBlockStart',
      'paddingBlockEnd',
    ],
    On = [...le, ...de]
  function Qr(r, e, t, n) {
    const o = ue(r, e, !0) ?? t
    return typeof o == 'number' || typeof o == 'string'
      ? (a) =>
          typeof a == 'string'
            ? a
            : (process.env.NODE_ENV !== 'production' &&
                typeof a != 'number' &&
                console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`),
              typeof o == 'string'
                ? o.startsWith('var(') && a === 0
                  ? 0
                  : o.startsWith('var(') && a === 1
                    ? o
                    : `calc(${a} * ${o})`
                : o * a)
      : Array.isArray(o)
        ? (a) => {
            if (typeof a == 'string') return a
            const i = Math.abs(a)
            process.env.NODE_ENV !== 'production' &&
              (Number.isInteger(i)
                ? i > o.length - 1 &&
                  console.error(
                    [
                      `MUI: The value provided (${i}) overflows.`,
                      `The supported values are: ${JSON.stringify(o)}.`,
                      `${i} > ${o.length - 1}, you need to add the missing values.`,
                    ].join(`
`),
                  )
                : console.error(
                    [
                      `MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`,
                    ].join(`
`),
                  ))
            const c = o[i]
            return a >= 0
              ? c
              : typeof c == 'number'
                ? -c
                : typeof c == 'string' && c.startsWith('var(')
                  ? `calc(-1 * ${c})`
                  : `-${c}`
          }
        : typeof o == 'function'
          ? o
          : (process.env.NODE_ENV !== 'production' &&
              console.error(
                [
                  `MUI: The \`theme.${e}\` value (${o}) is invalid.`,
                  'It should be a number, an array or a function.',
                ].join(`
`),
              ),
            () => {})
  }
  function Oe(r) {
    return Qr(r, 'spacing', 8, 'spacing')
  }
  function Zr(r, e) {
    return typeof e == 'string' || e == null ? e : r(e)
  }
  function In(r, e) {
    return (t) => r.reduce((n, o) => ((n[o] = Zr(e, t)), n), {})
  }
  function Rn(r, e, t, n) {
    if (!e.includes(t)) return null
    const o = Dn(t),
      a = In(o, n),
      i = r[t]
    return Pr(r, i, a)
  }
  function Ft(r, e) {
    const t = Oe(r.theme)
    return Object.keys(r)
      .map((n) => Rn(r, e, n, t))
      .reduce(Jr, {})
  }
  function nr(r) {
    return Ft(r, le)
  }
  ;(nr.propTypes =
    process.env.NODE_ENV !== 'production' ? le.reduce((r, e) => ((r[e] = Rr), r), {}) : {}),
    (nr.filterProps = le)
  function or(r) {
    return Ft(r, de)
  }
  ;(or.propTypes =
    process.env.NODE_ENV !== 'production' ? de.reduce((r, e) => ((r[e] = Rr), r), {}) : {}),
    (or.filterProps = de),
    process.env.NODE_ENV !== 'production' && On.reduce((r, e) => ((r[e] = Rr), r), {})
  function St(r = 8, e = Oe({ spacing: r })) {
    if (r.mui) return r
    const t = (...n) => (
      process.env.NODE_ENV !== 'production' &&
        (n.length <= 4 ||
          console.error(
            `MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`,
          )),
      (n.length === 0 ? [1] : n)
        .map((a) => {
          const i = e(a)
          return typeof i == 'number' ? `${i}px` : i
        })
        .join(' ')
    )
    return (t.mui = !0), t
  }
  function me(...r) {
    const e = r.reduce(
        (n, o) => (
          o.filterProps.forEach((a) => {
            n[a] = o
          }),
          n
        ),
        {},
      ),
      t = (n) => Object.keys(n).reduce((o, a) => (e[a] ? Jr(o, e[a](n)) : o), {})
    return (
      (t.propTypes =
        process.env.NODE_ENV !== 'production'
          ? r.reduce((n, o) => Object.assign(n, o.propTypes), {})
          : {}),
      (t.filterProps = r.reduce((n, o) => n.concat(o.filterProps), [])),
      t
    )
  }
  function Fr(r) {
    return typeof r != 'number' ? r : `${r}px solid`
  }
  function Sr(r, e) {
    return ar({ prop: r, themeKey: 'borders', transform: e })
  }
  const Bn = Sr('border', Fr),
    _n = Sr('borderTop', Fr),
    $n = Sr('borderRight', Fr),
    Ln = Sr('borderBottom', Fr),
    Nn = Sr('borderLeft', Fr),
    Vn = Sr('borderColor'),
    jn = Sr('borderTopColor'),
    zn = Sr('borderRightColor'),
    Wn = Sr('borderBottomColor'),
    Yn = Sr('borderLeftColor'),
    Un = Sr('outline', Fr),
    Hn = Sr('outlineColor'),
    he = (r) => {
      if (r.borderRadius !== void 0 && r.borderRadius !== null) {
        const e = Qr(r.theme, 'shape.borderRadius', 4, 'borderRadius'),
          t = (n) => ({ borderRadius: Zr(e, n) })
        return Pr(r, r.borderRadius, t)
      }
      return null
    }
  ;(he.propTypes = process.env.NODE_ENV !== 'production' ? { borderRadius: Rr } : {}),
    (he.filterProps = ['borderRadius']),
    me(Bn, _n, $n, Ln, Nn, Vn, jn, zn, Wn, Yn, he, Un, Hn)
  const ge = (r) => {
    if (r.gap !== void 0 && r.gap !== null) {
      const e = Qr(r.theme, 'spacing', 8, 'gap'),
        t = (n) => ({ gap: Zr(e, n) })
      return Pr(r, r.gap, t)
    }
    return null
  }
  ;(ge.propTypes = process.env.NODE_ENV !== 'production' ? { gap: Rr } : {}),
    (ge.filterProps = ['gap'])
  const ye = (r) => {
    if (r.columnGap !== void 0 && r.columnGap !== null) {
      const e = Qr(r.theme, 'spacing', 8, 'columnGap'),
        t = (n) => ({ columnGap: Zr(e, n) })
      return Pr(r, r.columnGap, t)
    }
    return null
  }
  ;(ye.propTypes = process.env.NODE_ENV !== 'production' ? { columnGap: Rr } : {}),
    (ye.filterProps = ['columnGap'])
  const pe = (r) => {
    if (r.rowGap !== void 0 && r.rowGap !== null) {
      const e = Qr(r.theme, 'spacing', 8, 'rowGap'),
        t = (n) => ({ rowGap: Zr(e, n) })
      return Pr(r, r.rowGap, t)
    }
    return null
  }
  ;(pe.propTypes = process.env.NODE_ENV !== 'production' ? { rowGap: Rr } : {}),
    (pe.filterProps = ['rowGap'])
  const Gn = ar({ prop: 'gridColumn' }),
    qn = ar({ prop: 'gridRow' }),
    Kn = ar({ prop: 'gridAutoFlow' }),
    Xn = ar({ prop: 'gridAutoColumns' }),
    Jn = ar({ prop: 'gridAutoRows' }),
    Qn = ar({ prop: 'gridTemplateColumns' }),
    Zn = ar({ prop: 'gridTemplateRows' }),
    ro = ar({ prop: 'gridTemplateAreas' }),
    eo = ar({ prop: 'gridArea' })
  me(ge, ye, pe, Gn, qn, Kn, Xn, Jn, Qn, Zn, ro, eo)
  function Wr(r, e) {
    return e === 'grey' ? e : r
  }
  const to = ar({ prop: 'color', themeKey: 'palette', transform: Wr }),
    no = ar({
      prop: 'bgcolor',
      cssProperty: 'backgroundColor',
      themeKey: 'palette',
      transform: Wr,
    }),
    oo = ar({ prop: 'backgroundColor', themeKey: 'palette', transform: Wr })
  me(to, no, oo)
  function Cr(r) {
    return r <= 1 && r !== 0 ? `${r * 100}%` : r
  }
  const ao = ar({ prop: 'width', transform: Cr }),
    Ie = (r) => {
      if (r.maxWidth !== void 0 && r.maxWidth !== null) {
        const e = (t) => {
          var o, a, i, c, f
          const n =
            ((i =
              (a = (o = r.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) ==
            null
              ? void 0
              : i[t]) || ce[t]
          return n
            ? ((f = (c = r.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.unit) !==
              'px'
              ? { maxWidth: `${n}${r.theme.breakpoints.unit}` }
              : { maxWidth: n }
            : { maxWidth: Cr(t) }
        }
        return Pr(r, r.maxWidth, e)
      }
      return null
    }
  Ie.filterProps = ['maxWidth']
  const io = ar({ prop: 'minWidth', transform: Cr }),
    so = ar({ prop: 'height', transform: Cr }),
    co = ar({ prop: 'maxHeight', transform: Cr }),
    uo = ar({ prop: 'minHeight', transform: Cr })
  ar({ prop: 'size', cssProperty: 'width', transform: Cr }),
    ar({ prop: 'size', cssProperty: 'height', transform: Cr })
  const fo = ar({ prop: 'boxSizing' })
  me(ao, Ie, io, so, co, uo, fo)
  const be = {
    border: { themeKey: 'borders', transform: Fr },
    borderTop: { themeKey: 'borders', transform: Fr },
    borderRight: { themeKey: 'borders', transform: Fr },
    borderBottom: { themeKey: 'borders', transform: Fr },
    borderLeft: { themeKey: 'borders', transform: Fr },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    outline: { themeKey: 'borders', transform: Fr },
    outlineColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: he },
    color: { themeKey: 'palette', transform: Wr },
    bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: Wr },
    backgroundColor: { themeKey: 'palette', transform: Wr },
    p: { style: or },
    pt: { style: or },
    pr: { style: or },
    pb: { style: or },
    pl: { style: or },
    px: { style: or },
    py: { style: or },
    padding: { style: or },
    paddingTop: { style: or },
    paddingRight: { style: or },
    paddingBottom: { style: or },
    paddingLeft: { style: or },
    paddingX: { style: or },
    paddingY: { style: or },
    paddingInline: { style: or },
    paddingInlineStart: { style: or },
    paddingInlineEnd: { style: or },
    paddingBlock: { style: or },
    paddingBlockStart: { style: or },
    paddingBlockEnd: { style: or },
    m: { style: nr },
    mt: { style: nr },
    mr: { style: nr },
    mb: { style: nr },
    ml: { style: nr },
    mx: { style: nr },
    my: { style: nr },
    margin: { style: nr },
    marginTop: { style: nr },
    marginRight: { style: nr },
    marginBottom: { style: nr },
    marginLeft: { style: nr },
    marginX: { style: nr },
    marginY: { style: nr },
    marginInline: { style: nr },
    marginInlineStart: { style: nr },
    marginInlineEnd: { style: nr },
    marginBlock: { style: nr },
    marginBlockStart: { style: nr },
    marginBlockEnd: { style: nr },
    displayPrint: { cssProperty: !1, transform: (r) => ({ '@media print': { display: r } }) },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
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
    gap: { style: ge },
    rowGap: { style: pe },
    columnGap: { style: ye },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: Cr },
    maxWidth: { style: Ie },
    minWidth: { transform: Cr },
    height: { transform: Cr },
    maxHeight: { transform: Cr },
    minHeight: { transform: Cr },
    boxSizing: {},
    font: { themeKey: 'font' },
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' },
  }
  function lo(...r) {
    const e = r.reduce((n, o) => n.concat(Object.keys(o)), []),
      t = new Set(e)
    return r.every((n) => t.size === Object.keys(n).length)
  }
  function mo(r, e) {
    return typeof r == 'function' ? r(e) : r
  }
  function ho() {
    function r(t, n, o, a) {
      const i = { [t]: n, theme: o },
        c = a[t]
      if (!c) return { [t]: n }
      const { cssProperty: f = t, themeKey: l, transform: d, style: m } = c
      if (n == null) return null
      if (l === 'typography' && n === 'inherit') return { [t]: n }
      const h = ue(o, l) || {}
      return m
        ? m(i)
        : Pr(i, n, (b) => {
            let u = fe(h, d, b)
            return (
              b === u &&
                typeof b == 'string' &&
                (u = fe(h, d, `${t}${b === 'default' ? '' : bt(b)}`, b)),
              f === !1 ? u : { [f]: u }
            )
          })
    }
    function e(t) {
      const { sx: n, theme: o = {} } = t || {}
      if (!n) return null
      const a = o.unstable_sxConfig ?? be
      function i(c) {
        let f = c
        if (typeof c == 'function') f = c(o)
        else if (typeof c != 'object') return c
        if (!f) return null
        const l = vn(o.breakpoints),
          d = Object.keys(l)
        let m = l
        return (
          Object.keys(f).forEach((h) => {
            const C = mo(f[h], o)
            if (C != null)
              if (typeof C == 'object')
                if (a[h]) m = Jr(m, r(h, C, o, a))
                else {
                  const b = Pr({ theme: o }, C, (u) => ({ [h]: u }))
                  lo(b, C) ? (m[h] = e({ sx: C, theme: o })) : (m = Jr(m, b))
                }
              else m = Jr(m, r(h, C, o, a))
          }),
          Fn(o, Pn(d, m))
        )
      }
      return Array.isArray(n) ? n.map(i) : i(n)
    }
    return e
  }
  const Ce = ho()
  Ce.filterProps = ['sx']
  function go(r, e) {
    var n
    const t = this
    if (t.vars) {
      if (!((n = t.colorSchemes) != null && n[r]) || typeof t.getColorSchemeSelector != 'function')
        return {}
      let o = t.getColorSchemeSelector(r)
      return o === '&'
        ? e
        : ((o.includes('data-') || o.includes('.')) && (o = `*:where(${o.replace(/\s*&$/, '')}) &`),
          { [o]: e })
    }
    return t.palette.mode === r ? e : {}
  }
  function yo(r = {}, ...e) {
    const { breakpoints: t = {}, palette: n = {}, spacing: o, shape: a = {}, ...i } = r,
      c = Cn(t),
      f = St(o)
    let l = br(
      {
        breakpoints: c,
        direction: 'ltr',
        components: {},
        palette: { mode: 'light', ...n },
        spacing: f,
        shape: { ...xn, ...a },
      },
      i,
    )
    return (
      (l = En(l)),
      (l.applyStyles = go),
      (l = e.reduce((d, m) => br(d, m), l)),
      (l.unstable_sxConfig = { ...be, ...(i == null ? void 0 : i.unstable_sxConfig) }),
      (l.unstable_sx = function (m) {
        return Ce({ sx: m, theme: this })
      }),
      l
    )
  }
  const Tt = (r) => r,
    po = (() => {
      let r = Tt
      return {
        configure(e) {
          r = e
        },
        generate(e) {
          return r(e)
        },
        reset() {
          r = Tt
        },
      }
    })(),
    bo = {
      active: 'active',
      checked: 'checked',
      completed: 'completed',
      disabled: 'disabled',
      error: 'error',
      expanded: 'expanded',
      focused: 'focused',
      focusVisible: 'focusVisible',
      open: 'open',
      readOnly: 'readOnly',
      required: 'required',
      selected: 'selected',
    }
  function Co(r, e, t = 'Mui') {
    const n = bo[e]
    return n ? `${t}-${n}` : `${po.generate(r)}-${e}`
  }
  function Fo(r, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(r, t))
  }
  function Re(r, e = 0, t = 1) {
    return (
      process.env.NODE_ENV !== 'production' &&
        (r < e || r > t) &&
        console.error(`MUI: The value provided ${r} is out of range [${e}, ${t}].`),
      Fo(r, e, t)
    )
  }
  function So(r) {
    r = r.slice(1)
    const e = new RegExp(`.{1,${r.length >= 6 ? 2 : 1}}`, 'g')
    let t = r.match(e)
    return (
      t && t[0].length === 1 && (t = t.map((n) => n + n)),
      process.env.NODE_ENV !== 'production' &&
        r.length !== r.trim().length &&
        console.error(
          `MUI: The color: "${r}" is invalid. Make sure the color input doesn't contain leading/trailing space.`,
        ),
      t
        ? `rgb${t.length === 4 ? 'a' : ''}(${t.map((n, o) => (o < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3)).join(', ')})`
        : ''
    )
  }
  function Br(r) {
    if (r.type) return r
    if (r.charAt(0) === '#') return Br(So(r))
    const e = r.indexOf('('),
      t = r.substring(0, e)
    if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(t))
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? `MUI: Unsupported \`${r}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`
          : Or(9, r),
      )
    let n = r.substring(e + 1, r.length - 1),
      o
    if (t === 'color') {
      if (
        ((n = n.split(' ')),
        (o = n.shift()),
        n.length === 4 && n[3].charAt(0) === '/' && (n[3] = n[3].slice(1)),
        !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(o))
      )
        throw new Error(
          process.env.NODE_ENV !== 'production'
            ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`
            : Or(10, o),
        )
    } else n = n.split(',')
    return (n = n.map((a) => parseFloat(a))), { type: t, values: n, colorSpace: o }
  }
  const To = (r) => {
      const e = Br(r)
      return e.values
        .slice(0, 3)
        .map((t, n) => (e.type.includes('hsl') && n !== 0 ? `${t}%` : t))
        .join(' ')
    },
    re = (r, e) => {
      try {
        return To(r)
      } catch {
        return e && process.env.NODE_ENV !== 'production' && console.warn(e), r
      }
    }
  function Fe(r) {
    const { type: e, colorSpace: t } = r
    let { values: n } = r
    return (
      e.includes('rgb')
        ? (n = n.map((o, a) => (a < 3 ? parseInt(o, 10) : o)))
        : e.includes('hsl') && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
      e.includes('color') ? (n = `${t} ${n.join(' ')}`) : (n = `${n.join(', ')}`),
      `${e}(${n})`
    )
  }
  function Et(r) {
    r = Br(r)
    const { values: e } = r,
      t = e[0],
      n = e[1] / 100,
      o = e[2] / 100,
      a = n * Math.min(o, 1 - o),
      i = (l, d = (l + t / 30) % 12) => o - a * Math.max(Math.min(d - 3, 9 - d, 1), -1)
    let c = 'rgb'
    const f = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)]
    return r.type === 'hsla' && ((c += 'a'), f.push(e[3])), Fe({ type: c, values: f })
  }
  function Be(r) {
    r = Br(r)
    let e = r.type === 'hsl' || r.type === 'hsla' ? Br(Et(r)).values : r.values
    return (
      (e = e.map(
        (t) => (
          r.type !== 'color' && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
        ),
      )),
      Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3))
    )
  }
  function xt(r, e) {
    const t = Be(r),
      n = Be(e)
    return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05)
  }
  function dr(r, e) {
    return (
      (r = Br(r)),
      (e = Re(e)),
      (r.type === 'rgb' || r.type === 'hsl') && (r.type += 'a'),
      r.type === 'color' ? (r.values[3] = `/${e}`) : (r.values[3] = e),
      Fe(r)
    )
  }
  function Se(r, e, t) {
    try {
      return dr(r, e)
    } catch {
      return r
    }
  }
  function _e(r, e) {
    if (((r = Br(r)), (e = Re(e)), r.type.includes('hsl'))) r.values[2] *= 1 - e
    else if (r.type.includes('rgb') || r.type.includes('color'))
      for (let t = 0; t < 3; t += 1) r.values[t] *= 1 - e
    return Fe(r)
  }
  function Z(r, e, t) {
    try {
      return _e(r, e)
    } catch {
      return r
    }
  }
  function $e(r, e) {
    if (((r = Br(r)), (e = Re(e)), r.type.includes('hsl'))) r.values[2] += (100 - r.values[2]) * e
    else if (r.type.includes('rgb'))
      for (let t = 0; t < 3; t += 1) r.values[t] += (255 - r.values[t]) * e
    else if (r.type.includes('color'))
      for (let t = 0; t < 3; t += 1) r.values[t] += (1 - r.values[t]) * e
    return Fe(r)
  }
  function rr(r, e, t) {
    try {
      return $e(r, e)
    } catch {
      return r
    }
  }
  function Eo(r, e = 0.15) {
    return Be(r) > 0.5 ? _e(r, e) : $e(r, e)
  }
  function Te(r, e, t) {
    try {
      return Eo(r, e)
    } catch {
      return r
    }
  }
  function xo(r = '') {
    function e(...n) {
      if (!n.length) return ''
      const o = n[0]
      return typeof o == 'string' &&
        !o.match(
          /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
        )
        ? `, var(--${r ? `${r}-` : ''}${o}${e(...n.slice(1))})`
        : `, ${o}`
    }
    return (n, ...o) => `var(--${r ? `${r}-` : ''}${n}${e(...o)})`
  }
  const kt = (r, e, t, n = []) => {
      let o = r
      e.forEach((a, i) => {
        i === e.length - 1
          ? Array.isArray(o)
            ? (o[Number(a)] = t)
            : o && typeof o == 'object' && (o[a] = t)
          : o && typeof o == 'object' && (o[a] || (o[a] = n.includes(a) ? [] : {}), (o = o[a]))
      })
    },
    ko = (r, e, t) => {
      function n(o, a = [], i = []) {
        Object.entries(o).forEach(([c, f]) => {
          ;(!t || (t && !t([...a, c]))) &&
            f != null &&
            (typeof f == 'object' && Object.keys(f).length > 0
              ? n(f, [...a, c], Array.isArray(f) ? [...i, c] : i)
              : e([...a, c], f, i))
        })
      }
      n(r)
    },
    vo = (r, e) =>
      typeof e == 'number'
        ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((n) => r.includes(n)) ||
          r[r.length - 1].toLowerCase().includes('opacity')
          ? e
          : `${e}px`
        : e
  function Le(r, e) {
    const { prefix: t, shouldSkipGeneratingVar: n } = e || {},
      o = {},
      a = {},
      i = {}
    return (
      ko(
        r,
        (c, f, l) => {
          if ((typeof f == 'string' || typeof f == 'number') && (!n || !n(c, f))) {
            const d = `--${t ? `${t}-` : ''}${c.join('-')}`,
              m = vo(c, f)
            Object.assign(o, { [d]: m }), kt(a, c, `var(${d})`, l), kt(i, c, `var(${d}, ${m})`, l)
          }
        },
        (c) => c[0] === 'vars',
      ),
      { css: o, vars: a, varsWithDefaults: i }
    )
  }
  function Po(r, e = {}) {
    const { getSelector: t = T, disableCssColorScheme: n, colorSchemeSelector: o } = e,
      { colorSchemes: a = {}, components: i, defaultColorScheme: c = 'light', ...f } = r,
      { vars: l, css: d, varsWithDefaults: m } = Le(f, e)
    let h = m
    const C = {},
      { [c]: b, ...u } = a
    if (
      (Object.entries(u || {}).forEach(([S, x]) => {
        const { vars: p, css: V, varsWithDefaults: B } = Le(x, e)
        ;(h = br(h, B)), (C[S] = { css: V, vars: p })
      }),
      b)
    ) {
      const { css: S, vars: x, varsWithDefaults: p } = Le(b, e)
      ;(h = br(h, p)), (C[c] = { css: S, vars: x })
    }
    function T(S, x) {
      var V, B
      let p = o
      if (
        (o === 'class' && (p = '.%s'),
        o === 'data' && (p = '[data-%s]'),
        o != null && o.startsWith('data-') && !o.includes('%s') && (p = `[${o}="%s"]`),
        S)
      ) {
        if (p === 'media')
          return r.defaultColorScheme === S
            ? ':root'
            : {
                [`@media (prefers-color-scheme: ${((B = (V = a[S]) == null ? void 0 : V.palette) == null ? void 0 : B.mode) || S})`]:
                  { ':root': x },
              }
        if (p)
          return r.defaultColorScheme === S
            ? `:root, ${p.replace('%s', String(S))}`
            : p.replace('%s', String(S))
      }
      return ':root'
    }
    return {
      vars: h,
      generateThemeVars: () => {
        let S = { ...l }
        return (
          Object.entries(C).forEach(([, { vars: x }]) => {
            S = br(S, x)
          }),
          S
        )
      },
      generateStyleSheets: () => {
        var G, H
        const S = [],
          x = r.defaultColorScheme || 'light'
        function p(s, v) {
          Object.keys(v).length && S.push(typeof s == 'string' ? { [s]: { ...v } } : s)
        }
        p(t(void 0, { ...d }), d)
        const { [x]: V, ...B } = C
        if (V) {
          const { css: s } = V,
            v = (H = (G = a[x]) == null ? void 0 : G.palette) == null ? void 0 : H.mode,
            O = !n && v ? { colorScheme: v, ...s } : { ...s }
          p(t(x, { ...O }), O)
        }
        return (
          Object.entries(B).forEach(([s, { css: v }]) => {
            var er, gr
            const O = (gr = (er = a[s]) == null ? void 0 : er.palette) == null ? void 0 : gr.mode,
              U = !n && O ? { colorScheme: O, ...v } : { ...v }
            p(t(s, { ...U }), U)
          }),
          S
        )
      },
    }
  }
  function wo(r) {
    return function (t) {
      return r === 'media'
        ? (process.env.NODE_ENV !== 'production' &&
            t !== 'light' &&
            t !== 'dark' &&
            console.error(
              `MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`,
            ),
          `@media (prefers-color-scheme: ${t})`)
        : r
          ? r.startsWith('data-') && !r.includes('%s')
            ? `[${r}="${t}"] &`
            : r === 'class'
              ? `.${t} &`
              : r === 'data'
                ? `[data-${t}] &`
                : `${r.replace('%s', t)} &`
          : '&'
    }
  }
  function vt() {
    return {
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      background: { paper: qr.white, default: qr.white },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08,
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    }
  }
  const Ao = vt()
  function Pt() {
    return {
      text: {
        primary: qr.white,
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)',
      },
      divider: 'rgba(255, 255, 255, 0.12)',
      background: { paper: '#121212', default: '#121212' },
      action: {
        active: qr.white,
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.16)',
        selectedOpacity: 0.16,
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(255, 255, 255, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    }
  }
  const wt = Pt()
  function At(r, e, t, n) {
    const o = n.light || n,
      a = n.dark || n * 1.5
    r[e] ||
      (r.hasOwnProperty(t)
        ? (r[e] = r[t])
        : e === 'light'
          ? (r.light = $e(r.main, o))
          : e === 'dark' && (r.dark = _e(r.main, a)))
  }
  function Mo(r = 'light') {
    return r === 'dark'
      ? { main: Vr[200], light: Vr[50], dark: Vr[400] }
      : { main: Vr[700], light: Vr[400], dark: Vr[800] }
  }
  function Do(r = 'light') {
    return r === 'dark'
      ? { main: Nr[200], light: Nr[50], dark: Nr[400] }
      : { main: Nr[500], light: Nr[300], dark: Nr[700] }
  }
  function Oo(r = 'light') {
    return r === 'dark'
      ? { main: Lr[500], light: Lr[300], dark: Lr[700] }
      : { main: Lr[700], light: Lr[400], dark: Lr[800] }
  }
  function Io(r = 'light') {
    return r === 'dark'
      ? { main: jr[400], light: jr[300], dark: jr[700] }
      : { main: jr[700], light: jr[500], dark: jr[900] }
  }
  function Ro(r = 'light') {
    return r === 'dark'
      ? { main: zr[400], light: zr[300], dark: zr[700] }
      : { main: zr[800], light: zr[500], dark: zr[900] }
  }
  function Bo(r = 'light') {
    return r === 'dark'
      ? { main: Kr[400], light: Kr[300], dark: Kr[700] }
      : { main: '#ed6c02', light: Kr[500], dark: Kr[900] }
  }
  function Ne(r) {
    const { mode: e = 'light', contrastThreshold: t = 3, tonalOffset: n = 0.2, ...o } = r,
      a = r.primary || Mo(e),
      i = r.secondary || Do(e),
      c = r.error || Oo(e),
      f = r.info || Io(e),
      l = r.success || Ro(e),
      d = r.warning || Bo(e)
    function m(u) {
      const T = xt(u, wt.text.primary) >= t ? wt.text.primary : Ao.text.primary
      if (process.env.NODE_ENV !== 'production') {
        const w = xt(u, T)
        w < 3 &&
          console.error(
            [
              `MUI: The contrast ratio of ${w}:1 for ${T} on ${u}`,
              'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.',
              'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
            ].join(`
`),
          )
      }
      return T
    }
    const h = ({
      color: u,
      name: T,
      mainShade: w = 500,
      lightShade: R = 300,
      darkShade: S = 700,
    }) => {
      if (((u = { ...u }), !u.main && u[w] && (u.main = u[w]), !u.hasOwnProperty('main')))
        throw new Error(
          process.env.NODE_ENV !== 'production'
            ? `MUI: The color${T ? ` (${T})` : ''} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.`
            : Or(11, T ? ` (${T})` : '', w),
        )
      if (typeof u.main != 'string')
        throw new Error(
          process.env.NODE_ENV !== 'production'
            ? `MUI: The color${T ? ` (${T})` : ''} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`
            : Or(12, T ? ` (${T})` : '', JSON.stringify(u.main)),
        )
      return (
        At(u, 'light', R, n), At(u, 'dark', S, n), u.contrastText || (u.contrastText = m(u.main)), u
      )
    }
    let C
    return (
      e === 'light' ? (C = vt()) : e === 'dark' && (C = Pt()),
      process.env.NODE_ENV !== 'production' &&
        (C || console.error(`MUI: The palette mode \`${e}\` is not supported.`)),
      br(
        {
          common: { ...qr },
          mode: e,
          primary: h({ color: a, name: 'primary' }),
          secondary: h({
            color: i,
            name: 'secondary',
            mainShade: 'A400',
            lightShade: 'A200',
            darkShade: 'A700',
          }),
          error: h({ color: c, name: 'error' }),
          warning: h({ color: d, name: 'warning' }),
          info: h({ color: f, name: 'info' }),
          success: h({ color: l, name: 'success' }),
          grey: on,
          contrastThreshold: t,
          getContrastText: m,
          augmentColor: h,
          tonalOffset: n,
          ...C,
        },
        o,
      )
    )
  }
  function _o(r) {
    const e = {}
    return (
      Object.entries(r).forEach((n) => {
        const [o, a] = n
        typeof a == 'object' &&
          (e[o] =
            `${a.fontStyle ? `${a.fontStyle} ` : ''}${a.fontVariant ? `${a.fontVariant} ` : ''}${a.fontWeight ? `${a.fontWeight} ` : ''}${a.fontStretch ? `${a.fontStretch} ` : ''}${a.fontSize || ''}${a.lineHeight ? `/${a.lineHeight} ` : ''}${a.fontFamily || ''}`)
      }),
      e
    )
  }
  function $o(r, e) {
    return {
      toolbar: {
        minHeight: 56,
        [r.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [r.up('sm')]: { minHeight: 64 },
      },
      ...e,
    }
  }
  function Lo(r) {
    return Math.round(r * 1e5) / 1e5
  }
  const Mt = { textTransform: 'uppercase' },
    Dt = '"Roboto", "Helvetica", "Arial", sans-serif'
  function No(r, e) {
    const {
      fontFamily: t = Dt,
      fontSize: n = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: i = 500,
      fontWeightBold: c = 700,
      htmlFontSize: f = 16,
      allVariants: l,
      pxToRem: d,
      ...m
    } = typeof e == 'function' ? e(r) : e
    process.env.NODE_ENV !== 'production' &&
      (typeof n != 'number' && console.error('MUI: `fontSize` is required to be a number.'),
      typeof f != 'number' && console.error('MUI: `htmlFontSize` is required to be a number.'))
    const h = n / 14,
      C = d || ((T) => `${(T / f) * h}rem`),
      b = (T, w, R, S, x) => ({
        fontFamily: t,
        fontWeight: T,
        fontSize: C(w),
        lineHeight: R,
        ...(t === Dt ? { letterSpacing: `${Lo(S / w)}em` } : {}),
        ...x,
        ...l,
      }),
      u = {
        h1: b(o, 96, 1.167, -1.5),
        h2: b(o, 60, 1.2, -0.5),
        h3: b(a, 48, 1.167, 0),
        h4: b(a, 34, 1.235, 0.25),
        h5: b(a, 24, 1.334, 0),
        h6: b(i, 20, 1.6, 0.15),
        subtitle1: b(a, 16, 1.75, 0.15),
        subtitle2: b(i, 14, 1.57, 0.1),
        body1: b(a, 16, 1.5, 0.15),
        body2: b(a, 14, 1.43, 0.15),
        button: b(i, 14, 1.75, 0.4, Mt),
        caption: b(a, 12, 1.66, 0.4),
        overline: b(a, 12, 2.66, 1, Mt),
        inherit: {
          fontFamily: 'inherit',
          fontWeight: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
        },
      }
    return br(
      {
        htmlFontSize: f,
        pxToRem: C,
        fontFamily: t,
        fontSize: n,
        fontWeightLight: o,
        fontWeightRegular: a,
        fontWeightMedium: i,
        fontWeightBold: c,
        ...u,
      },
      m,
      { clone: !1 },
    )
  }
  const Vo = 0.2,
    jo = 0.14,
    zo = 0.12
  function tr(...r) {
    return [
      `${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${Vo})`,
      `${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${jo})`,
      `${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${zo})`,
    ].join(',')
  }
  const Wo = [
      'none',
      tr(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      tr(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      tr(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      tr(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      tr(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      tr(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      tr(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      tr(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      tr(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      tr(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      tr(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      tr(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      tr(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      tr(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      tr(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      tr(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      tr(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      tr(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      tr(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      tr(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      tr(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      tr(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      tr(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      tr(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    Yo = {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    Uo = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    }
  function Ot(r) {
    return `${Math.round(r)}ms`
  }
  function Ho(r) {
    if (!r) return 0
    const e = r / 36
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3)
  }
  function Go(r) {
    const e = { ...Yo, ...r.easing },
      t = { ...Uo, ...r.duration }
    return {
      getAutoHeightDuration: Ho,
      create: (o = ['all'], a = {}) => {
        const { duration: i = t.standard, easing: c = e.easeInOut, delay: f = 0, ...l } = a
        if (process.env.NODE_ENV !== 'production') {
          const d = (h) => typeof h == 'string',
            m = (h) => !Number.isNaN(parseFloat(h))
          !d(o) &&
            !Array.isArray(o) &&
            console.error('MUI: Argument "props" must be a string or Array.'),
            !m(i) &&
              !d(i) &&
              console.error(
                `MUI: Argument "duration" must be a number or a string but found ${i}.`,
              ),
            d(c) || console.error('MUI: Argument "easing" must be a string.'),
            !m(f) && !d(f) && console.error('MUI: Argument "delay" must be a number or a string.'),
            typeof a != 'object' &&
              console.error(
                [
                  'MUI: Secong argument of transition.create must be an object.',
                  "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`",
                ].join(`
`),
              ),
            Object.keys(l).length !== 0 &&
              console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(',')}].`)
        }
        return (Array.isArray(o) ? o : [o])
          .map(
            (d) =>
              `${d} ${typeof i == 'string' ? i : Ot(i)} ${c} ${typeof f == 'string' ? f : Ot(f)}`,
          )
          .join(',')
      },
      ...r,
      easing: e,
      duration: t,
    }
  }
  const qo = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  }
  function Ko(r) {
    return (
      Ir(r) ||
      typeof r > 'u' ||
      typeof r == 'string' ||
      typeof r == 'boolean' ||
      typeof r == 'number' ||
      Array.isArray(r)
    )
  }
  function It(r = {}) {
    const e = { ...r }
    function t(n) {
      const o = Object.entries(n)
      for (let a = 0; a < o.length; a++) {
        const [i, c] = o[a]
        !Ko(c) || i.startsWith('unstable_') ? delete n[i] : Ir(c) && ((n[i] = { ...c }), t(n[i]))
      }
    }
    return (
      t(e),
      `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
    )
  }
  function Ve(r = {}, ...e) {
    const {
      breakpoints: t,
      mixins: n = {},
      spacing: o,
      palette: a = {},
      transitions: i = {},
      typography: c = {},
      shape: f,
      ...l
    } = r
    if (r.vars && r.generateThemeVars === void 0)
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? 'MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.'
          : Or(20),
      )
    const d = Ne(a),
      m = yo(r)
    let h = br(m, {
      mixins: $o(m.breakpoints, n),
      palette: d,
      shadows: Wo.slice(),
      typography: No(d, c),
      transitions: Go(i),
      zIndex: { ...qo },
    })
    if (
      ((h = br(h, l)), (h = e.reduce((C, b) => br(C, b), h)), process.env.NODE_ENV !== 'production')
    ) {
      const C = [
          'active',
          'checked',
          'completed',
          'disabled',
          'error',
          'expanded',
          'focused',
          'focusVisible',
          'required',
          'selected',
        ],
        b = (u, T) => {
          let w
          for (w in u) {
            const R = u[w]
            if (C.includes(w) && Object.keys(R).length > 0) {
              if (process.env.NODE_ENV !== 'production') {
                const S = Co('', w)
                console.error(
                  [
                    `MUI: The \`${T}\` component increases the CSS specificity of the \`${w}\` internal state.`,
                    'You can not override it like this: ',
                    JSON.stringify(u, null, 2),
                    '',
                    `Instead, you need to use the '&.${S}' syntax:`,
                    JSON.stringify({ root: { [`&.${S}`]: R } }, null, 2),
                    '',
                    'https://mui.com/r/state-classes-guide',
                  ].join(`
`),
                )
              }
              u[w] = {}
            }
          }
        }
      Object.keys(h.components).forEach((u) => {
        const T = h.components[u].styleOverrides
        T && u.startsWith('Mui') && b(T, u)
      })
    }
    return (
      (h.unstable_sxConfig = { ...be, ...(l == null ? void 0 : l.unstable_sxConfig) }),
      (h.unstable_sx = function (b) {
        return Ce({ sx: b, theme: this })
      }),
      (h.toRuntimeSource = It),
      h
    )
  }
  function Xo(r) {
    let e
    return (
      r < 1 ? (e = 5.11916 * r ** 2) : (e = 4.5 * Math.log(r + 1) + 2), Math.round(e * 10) / 1e3
    )
  }
  const Jo = [...Array(25)].map((r, e) => {
    if (e === 0) return 'none'
    const t = Xo(e)
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`
  })
  function Rt(r) {
    return {
      inputPlaceholder: r === 'dark' ? 0.5 : 0.42,
      inputUnderline: r === 'dark' ? 0.7 : 0.42,
      switchTrackDisabled: r === 'dark' ? 0.2 : 0.12,
      switchTrack: r === 'dark' ? 0.3 : 0.38,
    }
  }
  function Bt(r) {
    return r === 'dark' ? Jo : []
  }
  function Qo(r) {
    const { palette: e = { mode: 'light' }, opacity: t, overlays: n, ...o } = r,
      a = Ne(e)
    return { palette: a, opacity: { ...Rt(a.mode), ...t }, overlays: n || Bt(a.mode), ...o }
  }
  function Zo(r) {
    var e
    return (
      !!r[0].match(
        /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
      ) ||
      !!r[0].match(/sxConfig$/) ||
      (r[0] === 'palette' &&
        !!((e = r[1]) != null && e.match(/(mode|contrastThreshold|tonalOffset)/)))
    )
  }
  const ra = (r) => [
      ...[...Array(25)].map((e, t) => `--${r ? `${r}-` : ''}overlays-${t}`),
      `--${r ? `${r}-` : ''}palette-AppBar-darkBg`,
      `--${r ? `${r}-` : ''}palette-AppBar-darkColor`,
    ],
    ea = (r) => (e, t) => {
      const n = r.rootSelector || ':root',
        o = r.colorSchemeSelector
      let a = o
      if (
        (o === 'class' && (a = '.%s'),
        o === 'data' && (a = '[data-%s]'),
        o != null && o.startsWith('data-') && !o.includes('%s') && (a = `[${o}="%s"]`),
        r.defaultColorScheme === e)
      ) {
        if (e === 'dark') {
          const i = {}
          return (
            ra(r.cssVarPrefix).forEach((c) => {
              ;(i[c] = t[c]), delete t[c]
            }),
            a === 'media'
              ? { [n]: t, '@media (prefers-color-scheme: dark)': { [n]: i } }
              : a
                ? { [a.replace('%s', e)]: i, [`${n}, ${a.replace('%s', e)}`]: t }
                : { [n]: { ...t, ...i } }
          )
        }
        if (a && a !== 'media') return `${n}, ${a.replace('%s', String(e))}`
      } else if (e) {
        if (a === 'media') return { [`@media (prefers-color-scheme: ${String(e)})`]: { [n]: t } }
        if (a) return a.replace('%s', String(e))
      }
      return n
    }
  function ta(r, e) {
    e.forEach((t) => {
      r[t] || (r[t] = {})
    })
  }
  function y(r, e, t) {
    !r[e] && t && (r[e] = t)
  }
  function ee(r) {
    return typeof r != 'string' || !r.startsWith('hsl') ? r : Et(r)
  }
  function wr(r, e) {
    ;`${e}Channel` in r ||
      (r[`${e}Channel`] = re(
        ee(r[e]),
        `MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`,
      ))
  }
  function na(r) {
    return typeof r == 'number'
      ? `${r}px`
      : typeof r == 'string' || typeof r == 'function' || Array.isArray(r)
        ? r
        : '8px'
  }
  const vr = (r) => {
      try {
        return r()
      } catch {}
    },
    oa = (r = 'mui') => xo(r)
  function je(r, e, t, n) {
    if (!e) return
    e = e === !0 ? {} : e
    const o = n === 'dark' ? 'dark' : 'light'
    if (!t) {
      r[n] = Qo({ ...e, palette: { mode: o, ...(e == null ? void 0 : e.palette) } })
      return
    }
    const { palette: a, ...i } = Ve({
      ...t,
      palette: { mode: o, ...(e == null ? void 0 : e.palette) },
    })
    return (
      (r[n] = {
        ...e,
        palette: a,
        opacity: { ...Rt(o), ...(e == null ? void 0 : e.opacity) },
        overlays: (e == null ? void 0 : e.overlays) || Bt(o),
      }),
      i
    )
  }
  function aa(r = {}, ...e) {
    const {
        colorSchemes: t = { light: !0 },
        defaultColorScheme: n,
        disableCssColorScheme: o = !1,
        cssVarPrefix: a = 'mui',
        shouldSkipGeneratingVar: i = Zo,
        colorSchemeSelector: c = t.light && t.dark ? 'media' : void 0,
        rootSelector: f = ':root',
        ...l
      } = r,
      d = Object.keys(t)[0],
      m = n || (t.light && d !== 'light' ? 'light' : d),
      h = oa(a),
      { [m]: C, light: b, dark: u, ...T } = t,
      w = { ...T }
    let R = C
    if ((((m === 'dark' && !('dark' in t)) || (m === 'light' && !('light' in t))) && (R = !0), !R))
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.`
          : Or(21, m),
      )
    const S = je(w, R, l, m)
    b && !w.light && je(w, b, void 0, 'light'), u && !w.dark && je(w, u, void 0, 'dark')
    let x = {
      defaultColorScheme: m,
      ...S,
      cssVarPrefix: a,
      colorSchemeSelector: c,
      rootSelector: f,
      getCssVar: h,
      colorSchemes: w,
      font: { ..._o(S.typography), ...S.font },
      spacing: na(l.spacing),
    }
    Object.keys(x.colorSchemes).forEach((H) => {
      const s = x.colorSchemes[H].palette,
        v = (O) => {
          const U = O.split('-'),
            er = U[1],
            gr = U[2]
          return h(O, s[er][gr])
        }
      if (
        (s.mode === 'light' &&
          (y(s.common, 'background', '#fff'), y(s.common, 'onBackground', '#000')),
        s.mode === 'dark' &&
          (y(s.common, 'background', '#000'), y(s.common, 'onBackground', '#fff')),
        ta(s, [
          'Alert',
          'AppBar',
          'Avatar',
          'Button',
          'Chip',
          'FilledInput',
          'LinearProgress',
          'Skeleton',
          'Slider',
          'SnackbarContent',
          'SpeedDialAction',
          'StepConnector',
          'StepContent',
          'Switch',
          'TableCell',
          'Tooltip',
        ]),
        s.mode === 'light')
      ) {
        y(s.Alert, 'errorColor', Z(s.error.light, 0.6)),
          y(s.Alert, 'infoColor', Z(s.info.light, 0.6)),
          y(s.Alert, 'successColor', Z(s.success.light, 0.6)),
          y(s.Alert, 'warningColor', Z(s.warning.light, 0.6)),
          y(s.Alert, 'errorFilledBg', v('palette-error-main')),
          y(s.Alert, 'infoFilledBg', v('palette-info-main')),
          y(s.Alert, 'successFilledBg', v('palette-success-main')),
          y(s.Alert, 'warningFilledBg', v('palette-warning-main')),
          y(
            s.Alert,
            'errorFilledColor',
            vr(() => s.getContrastText(s.error.main)),
          ),
          y(
            s.Alert,
            'infoFilledColor',
            vr(() => s.getContrastText(s.info.main)),
          ),
          y(
            s.Alert,
            'successFilledColor',
            vr(() => s.getContrastText(s.success.main)),
          ),
          y(
            s.Alert,
            'warningFilledColor',
            vr(() => s.getContrastText(s.warning.main)),
          ),
          y(s.Alert, 'errorStandardBg', rr(s.error.light, 0.9)),
          y(s.Alert, 'infoStandardBg', rr(s.info.light, 0.9)),
          y(s.Alert, 'successStandardBg', rr(s.success.light, 0.9)),
          y(s.Alert, 'warningStandardBg', rr(s.warning.light, 0.9)),
          y(s.Alert, 'errorIconColor', v('palette-error-main')),
          y(s.Alert, 'infoIconColor', v('palette-info-main')),
          y(s.Alert, 'successIconColor', v('palette-success-main')),
          y(s.Alert, 'warningIconColor', v('palette-warning-main')),
          y(s.AppBar, 'defaultBg', v('palette-grey-100')),
          y(s.Avatar, 'defaultBg', v('palette-grey-400')),
          y(s.Button, 'inheritContainedBg', v('palette-grey-300')),
          y(s.Button, 'inheritContainedHoverBg', v('palette-grey-A100')),
          y(s.Chip, 'defaultBorder', v('palette-grey-400')),
          y(s.Chip, 'defaultAvatarColor', v('palette-grey-700')),
          y(s.Chip, 'defaultIconColor', v('palette-grey-700')),
          y(s.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
          y(s.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
          y(s.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
          y(s.LinearProgress, 'primaryBg', rr(s.primary.main, 0.62)),
          y(s.LinearProgress, 'secondaryBg', rr(s.secondary.main, 0.62)),
          y(s.LinearProgress, 'errorBg', rr(s.error.main, 0.62)),
          y(s.LinearProgress, 'infoBg', rr(s.info.main, 0.62)),
          y(s.LinearProgress, 'successBg', rr(s.success.main, 0.62)),
          y(s.LinearProgress, 'warningBg', rr(s.warning.main, 0.62)),
          y(s.Skeleton, 'bg', `rgba(${v('palette-text-primaryChannel')} / 0.11)`),
          y(s.Slider, 'primaryTrack', rr(s.primary.main, 0.62)),
          y(s.Slider, 'secondaryTrack', rr(s.secondary.main, 0.62)),
          y(s.Slider, 'errorTrack', rr(s.error.main, 0.62)),
          y(s.Slider, 'infoTrack', rr(s.info.main, 0.62)),
          y(s.Slider, 'successTrack', rr(s.success.main, 0.62)),
          y(s.Slider, 'warningTrack', rr(s.warning.main, 0.62))
        const O = Te(s.background.default, 0.8)
        y(s.SnackbarContent, 'bg', O),
          y(
            s.SnackbarContent,
            'color',
            vr(() => s.getContrastText(O)),
          ),
          y(s.SpeedDialAction, 'fabHoverBg', Te(s.background.paper, 0.15)),
          y(s.StepConnector, 'border', v('palette-grey-400')),
          y(s.StepContent, 'border', v('palette-grey-400')),
          y(s.Switch, 'defaultColor', v('palette-common-white')),
          y(s.Switch, 'defaultDisabledColor', v('palette-grey-100')),
          y(s.Switch, 'primaryDisabledColor', rr(s.primary.main, 0.62)),
          y(s.Switch, 'secondaryDisabledColor', rr(s.secondary.main, 0.62)),
          y(s.Switch, 'errorDisabledColor', rr(s.error.main, 0.62)),
          y(s.Switch, 'infoDisabledColor', rr(s.info.main, 0.62)),
          y(s.Switch, 'successDisabledColor', rr(s.success.main, 0.62)),
          y(s.Switch, 'warningDisabledColor', rr(s.warning.main, 0.62)),
          y(s.TableCell, 'border', rr(Se(s.divider, 1), 0.88)),
          y(s.Tooltip, 'bg', Se(s.grey[700], 0.92))
      }
      if (s.mode === 'dark') {
        y(s.Alert, 'errorColor', rr(s.error.light, 0.6)),
          y(s.Alert, 'infoColor', rr(s.info.light, 0.6)),
          y(s.Alert, 'successColor', rr(s.success.light, 0.6)),
          y(s.Alert, 'warningColor', rr(s.warning.light, 0.6)),
          y(s.Alert, 'errorFilledBg', v('palette-error-dark')),
          y(s.Alert, 'infoFilledBg', v('palette-info-dark')),
          y(s.Alert, 'successFilledBg', v('palette-success-dark')),
          y(s.Alert, 'warningFilledBg', v('palette-warning-dark')),
          y(
            s.Alert,
            'errorFilledColor',
            vr(() => s.getContrastText(s.error.dark)),
          ),
          y(
            s.Alert,
            'infoFilledColor',
            vr(() => s.getContrastText(s.info.dark)),
          ),
          y(
            s.Alert,
            'successFilledColor',
            vr(() => s.getContrastText(s.success.dark)),
          ),
          y(
            s.Alert,
            'warningFilledColor',
            vr(() => s.getContrastText(s.warning.dark)),
          ),
          y(s.Alert, 'errorStandardBg', Z(s.error.light, 0.9)),
          y(s.Alert, 'infoStandardBg', Z(s.info.light, 0.9)),
          y(s.Alert, 'successStandardBg', Z(s.success.light, 0.9)),
          y(s.Alert, 'warningStandardBg', Z(s.warning.light, 0.9)),
          y(s.Alert, 'errorIconColor', v('palette-error-main')),
          y(s.Alert, 'infoIconColor', v('palette-info-main')),
          y(s.Alert, 'successIconColor', v('palette-success-main')),
          y(s.Alert, 'warningIconColor', v('palette-warning-main')),
          y(s.AppBar, 'defaultBg', v('palette-grey-900')),
          y(s.AppBar, 'darkBg', v('palette-background-paper')),
          y(s.AppBar, 'darkColor', v('palette-text-primary')),
          y(s.Avatar, 'defaultBg', v('palette-grey-600')),
          y(s.Button, 'inheritContainedBg', v('palette-grey-800')),
          y(s.Button, 'inheritContainedHoverBg', v('palette-grey-700')),
          y(s.Chip, 'defaultBorder', v('palette-grey-700')),
          y(s.Chip, 'defaultAvatarColor', v('palette-grey-300')),
          y(s.Chip, 'defaultIconColor', v('palette-grey-300')),
          y(s.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
          y(s.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
          y(s.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
          y(s.LinearProgress, 'primaryBg', Z(s.primary.main, 0.5)),
          y(s.LinearProgress, 'secondaryBg', Z(s.secondary.main, 0.5)),
          y(s.LinearProgress, 'errorBg', Z(s.error.main, 0.5)),
          y(s.LinearProgress, 'infoBg', Z(s.info.main, 0.5)),
          y(s.LinearProgress, 'successBg', Z(s.success.main, 0.5)),
          y(s.LinearProgress, 'warningBg', Z(s.warning.main, 0.5)),
          y(s.Skeleton, 'bg', `rgba(${v('palette-text-primaryChannel')} / 0.13)`),
          y(s.Slider, 'primaryTrack', Z(s.primary.main, 0.5)),
          y(s.Slider, 'secondaryTrack', Z(s.secondary.main, 0.5)),
          y(s.Slider, 'errorTrack', Z(s.error.main, 0.5)),
          y(s.Slider, 'infoTrack', Z(s.info.main, 0.5)),
          y(s.Slider, 'successTrack', Z(s.success.main, 0.5)),
          y(s.Slider, 'warningTrack', Z(s.warning.main, 0.5))
        const O = Te(s.background.default, 0.98)
        y(s.SnackbarContent, 'bg', O),
          y(
            s.SnackbarContent,
            'color',
            vr(() => s.getContrastText(O)),
          ),
          y(s.SpeedDialAction, 'fabHoverBg', Te(s.background.paper, 0.15)),
          y(s.StepConnector, 'border', v('palette-grey-600')),
          y(s.StepContent, 'border', v('palette-grey-600')),
          y(s.Switch, 'defaultColor', v('palette-grey-300')),
          y(s.Switch, 'defaultDisabledColor', v('palette-grey-600')),
          y(s.Switch, 'primaryDisabledColor', Z(s.primary.main, 0.55)),
          y(s.Switch, 'secondaryDisabledColor', Z(s.secondary.main, 0.55)),
          y(s.Switch, 'errorDisabledColor', Z(s.error.main, 0.55)),
          y(s.Switch, 'infoDisabledColor', Z(s.info.main, 0.55)),
          y(s.Switch, 'successDisabledColor', Z(s.success.main, 0.55)),
          y(s.Switch, 'warningDisabledColor', Z(s.warning.main, 0.55)),
          y(s.TableCell, 'border', Z(Se(s.divider, 1), 0.68)),
          y(s.Tooltip, 'bg', Se(s.grey[700], 0.92))
      }
      wr(s.background, 'default'),
        wr(s.background, 'paper'),
        wr(s.common, 'background'),
        wr(s.common, 'onBackground'),
        wr(s, 'divider'),
        Object.keys(s).forEach((O) => {
          const U = s[O]
          O !== 'tonalOffset' &&
            U &&
            typeof U == 'object' &&
            (U.main && y(s[O], 'mainChannel', re(ee(U.main))),
            U.light && y(s[O], 'lightChannel', re(ee(U.light))),
            U.dark && y(s[O], 'darkChannel', re(ee(U.dark))),
            U.contrastText && y(s[O], 'contrastTextChannel', re(ee(U.contrastText))),
            O === 'text' && (wr(s[O], 'primary'), wr(s[O], 'secondary')),
            O === 'action' && (U.active && wr(s[O], 'active'), U.selected && wr(s[O], 'selected')))
        })
    }),
      (x = e.reduce((H, s) => br(H, s), x))
    const p = {
        prefix: a,
        disableCssColorScheme: o,
        shouldSkipGeneratingVar: i,
        getSelector: ea(x),
      },
      { vars: V, generateThemeVars: B, generateStyleSheets: G } = Po(x, p)
    return (
      (x.vars = V),
      Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([H, s]) => {
        x[H] = s
      }),
      (x.generateThemeVars = B),
      (x.generateStyleSheets = G),
      (x.generateSpacing = function () {
        return St(l.spacing, Oe(this))
      }),
      (x.getColorSchemeSelector = wo(c)),
      (x.spacing = x.generateSpacing()),
      (x.shouldSkipGeneratingVar = i),
      (x.unstable_sxConfig = { ...be, ...(l == null ? void 0 : l.unstable_sxConfig) }),
      (x.unstable_sx = function (s) {
        return Ce({ sx: s, theme: this })
      }),
      (x.toRuntimeSource = It),
      x
    )
  }
  function _t(r, e, t) {
    r.colorSchemes &&
      t &&
      (r.colorSchemes[e] = {
        ...(t !== !0 && t),
        palette: Ne({ ...(t === !0 ? {} : t.palette), mode: e }),
      })
  }
  function $t(r = {}, ...e) {
    const {
        palette: t,
        cssVariables: n = !1,
        colorSchemes: o = t ? void 0 : { light: !0 },
        defaultColorScheme: a = t == null ? void 0 : t.mode,
        ...i
      } = r,
      c = a || 'light',
      f = o == null ? void 0 : o[c],
      l = { ...o, ...(t ? { [c]: { ...(typeof f != 'boolean' && f), palette: t } } : void 0) }
    if (n === !1) {
      if (!('colorSchemes' in r)) return Ve(r, ...e)
      let d = t
      'palette' in r ||
        (l[c] && (l[c] !== !0 ? (d = l[c].palette) : c === 'dark' && (d = { mode: 'dark' })))
      const m = Ve({ ...r, palette: d }, ...e)
      return (
        (m.defaultColorScheme = c),
        (m.colorSchemes = l),
        m.palette.mode === 'light' &&
          ((m.colorSchemes.light = { ...(l.light !== !0 && l.light), palette: m.palette }),
          _t(m, 'dark', l.dark)),
        m.palette.mode === 'dark' &&
          ((m.colorSchemes.dark = { ...(l.dark !== !0 && l.dark), palette: m.palette }),
          _t(m, 'light', l.light)),
        m
      )
    }
    return (
      !t && !('light' in l) && c === 'light' && (l.light = !0),
      aa({ ...i, colorSchemes: l, defaultColorScheme: c, ...(typeof n != 'boolean' && n) }, ...e)
    )
  }
  const ia = { info: '#0288d1', success: '#2e7d32', warning: '#ed6c02' },
    Lt = {
      schemes: {
        light: {
          primary: '#3C6090',
          surfaceTint: '#3C6090',
          onPrimary: '#FFFFFF',
          primaryContainer: '#D4E3FF',
          onPrimaryContainer: '#224876',
          secondary: '#7B4E7F',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#FFD6FE',
          onSecondaryContainer: '#613766',
          tertiary: '#6E5D0E',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#F9E287',
          onTertiaryContainer: '#544600',
          error: '#904B40',
          onError: '#FFFFFF',
          errorContainer: '#FFDAD4',
          onErrorContainer: '#73342B',
          background: '#F9F9FF',
          onBackground: '#191C20',
          surface: '#FAF8FF',
          onSurface: '#1A1B21',
          surfaceVariant: '#DEE3EB',
          onSurfaceVariant: '#42474E',
          outline: '#72787F',
          outlineVariant: '#C2C7CF',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#2F3036',
          inverseOnSurface: '#F1F0F7',
          inversePrimary: '#A6C8FF',
          primaryFixed: '#D4E3FF',
          onPrimaryFixed: '#001C3A',
          primaryFixedDim: '#A6C8FF',
          onPrimaryFixedVariant: '#224876',
          secondaryFixed: '#FFD6FE',
          onSecondaryFixed: '#310937',
          secondaryFixedDim: '#EBB5ED',
          onSecondaryFixedVariant: '#613766',
          tertiaryFixed: '#F9E287',
          onTertiaryFixed: '#221B00',
          tertiaryFixedDim: '#DCC66E',
          onTertiaryFixedVariant: '#544600',
          surfaceDim: '#DAD9E0',
          surfaceBright: '#FAF8FF',
          surfaceContainerLowest: '#FFFFFF',
          surfaceContainerLow: '#F4F3FA',
          surfaceContainer: '#EEEDF4',
          surfaceContainerHigh: '#E8E7EF',
          surfaceContainerHighest: '#E3E2E9',
        },
        'light-medium-contrast': {
          primary: '#0B3765',
          surfaceTint: '#3C6090',
          onPrimary: '#FFFFFF',
          primaryContainer: '#4C6E9F',
          onPrimaryContainer: '#FFFFFF',
          secondary: '#4F2654',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#8B5D8F',
          onSecondaryContainer: '#FFFFFF',
          tertiary: '#403500',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#7D6C1E',
          onTertiaryContainer: '#FFFFFF',
          error: '#5E241C',
          onError: '#FFFFFF',
          errorContainer: '#A1594E',
          onErrorContainer: '#FFFFFF',
          background: '#F9F9FF',
          onBackground: '#191C20',
          surface: '#FAF8FF',
          onSurface: '#101116',
          surfaceVariant: '#DEE3EB',
          onSurfaceVariant: '#31373D',
          outline: '#4D535A',
          outlineVariant: '#686E74',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#2F3036',
          inverseOnSurface: '#F1F0F7',
          inversePrimary: '#A6C8FF',
          primaryFixed: '#4C6E9F',
          onPrimaryFixed: '#FFFFFF',
          primaryFixedDim: '#325685',
          onPrimaryFixedVariant: '#FFFFFF',
          secondaryFixed: '#8B5D8F',
          onSecondaryFixed: '#FFFFFF',
          secondaryFixedDim: '#714575',
          onSecondaryFixedVariant: '#FFFFFF',
          tertiaryFixed: '#7D6C1E',
          onTertiaryFixed: '#FFFFFF',
          tertiaryFixedDim: '#645402',
          onTertiaryFixedVariant: '#FFFFFF',
          surfaceDim: '#C6C6CD',
          surfaceBright: '#FAF8FF',
          surfaceContainerLowest: '#FFFFFF',
          surfaceContainerLow: '#F4F3FA',
          surfaceContainer: '#E8E7EF',
          surfaceContainerHigh: '#DDDCE3',
          surfaceContainerHighest: '#D2D1D8',
        },
        'light-high-contrast': {
          primary: '#002C57',
          surfaceTint: '#3C6090',
          onPrimary: '#FFFFFF',
          primaryContainer: '#254A79',
          onPrimaryContainer: '#FFFFFF',
          secondary: '#441C49',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#643969',
          onSecondaryContainer: '#FFFFFF',
          tertiary: '#352C00',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#564800',
          onTertiaryContainer: '#FFFFFF',
          error: '#511A13',
          onError: '#FFFFFF',
          errorContainer: '#76362D',
          onErrorContainer: '#FFFFFF',
          background: '#F9F9FF',
          onBackground: '#191C20',
          surface: '#FAF8FF',
          onSurface: '#000000',
          surfaceVariant: '#DEE3EB',
          onSurfaceVariant: '#000000',
          outline: '#272D33',
          outlineVariant: '#444A50',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#2F3036',
          inverseOnSurface: '#FFFFFF',
          inversePrimary: '#A6C8FF',
          primaryFixed: '#254A79',
          onPrimaryFixed: '#FFFFFF',
          primaryFixedDim: '#043361',
          onPrimaryFixedVariant: '#FFFFFF',
          secondaryFixed: '#643969',
          onSecondaryFixed: '#FFFFFF',
          secondaryFixedDim: '#4B2250',
          onSecondaryFixedVariant: '#FFFFFF',
          tertiaryFixed: '#564800',
          onTertiaryFixed: '#FFFFFF',
          tertiaryFixedDim: '#3C3200',
          onTertiaryFixedVariant: '#FFFFFF',
          surfaceDim: '#B8B8BF',
          surfaceBright: '#FAF8FF',
          surfaceContainerLowest: '#FFFFFF',
          surfaceContainerLow: '#F1F0F7',
          surfaceContainer: '#E3E2E9',
          surfaceContainerHigh: '#D4D4DB',
          surfaceContainerHighest: '#C6C6CD',
        },
        dark: {
          primary: '#A6C8FF',
          surfaceTint: '#A6C8FF',
          onPrimary: '#01315E',
          primaryContainer: '#224876',
          onPrimaryContainer: '#D4E3FF',
          secondary: '#EBB5ED',
          onSecondary: '#49204E',
          secondaryContainer: '#613766',
          onSecondaryContainer: '#FFD6FE',
          tertiary: '#DCC66E',
          onTertiary: '#3A3000',
          tertiaryContainer: '#544600',
          onTertiaryContainer: '#F9E287',
          error: '#FFB4A8',
          onError: '#561E16',
          errorContainer: '#73342B',
          onErrorContainer: '#FFDAD4',
          background: '#111318',
          onBackground: '#E1E2E9',
          surface: '#121318',
          onSurface: '#E3E2E9',
          surfaceVariant: '#42474E',
          onSurfaceVariant: '#C2C7CF',
          outline: '#8C9198',
          outlineVariant: '#42474E',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#E3E2E9',
          inverseOnSurface: '#2F3036',
          inversePrimary: '#3C6090',
          primaryFixed: '#D4E3FF',
          onPrimaryFixed: '#001C3A',
          primaryFixedDim: '#A6C8FF',
          onPrimaryFixedVariant: '#224876',
          secondaryFixed: '#FFD6FE',
          onSecondaryFixed: '#310937',
          secondaryFixedDim: '#EBB5ED',
          onSecondaryFixedVariant: '#613766',
          tertiaryFixed: '#F9E287',
          onTertiaryFixed: '#221B00',
          tertiaryFixedDim: '#DCC66E',
          onTertiaryFixedVariant: '#544600',
          surfaceDim: '#121318',
          surfaceBright: '#38393F',
          surfaceContainerLowest: '#0D0E13',
          surfaceContainerLow: '#1A1B21',
          surfaceContainer: '#1E1F25',
          surfaceContainerHigh: '#292A2F',
          surfaceContainerHighest: '#33343A',
        },
        'dark-medium-contrast': {
          primary: '#CADDFF',
          surfaceTint: '#A6C8FF',
          onPrimary: '#00264C',
          primaryContainer: '#7092C6',
          onPrimaryContainer: '#000000',
          secondary: '#FFCCFF',
          onSecondary: '#3C1542',
          secondaryContainer: '#B280B4',
          onSecondaryContainer: '#000000',
          tertiary: '#F3DC82',
          onTertiary: '#2D2500',
          tertiaryContainer: '#A3903F',
          onTertiaryContainer: '#000000',
          error: '#FFD2CB',
          onError: '#48140D',
          errorContainer: '#CC7B6F',
          onErrorContainer: '#000000',
          background: '#111318',
          onBackground: '#E1E2E9',
          surface: '#121318',
          onSurface: '#FFFFFF',
          surfaceVariant: '#42474E',
          onSurfaceVariant: '#D8DDE5',
          outline: '#ADB2BA',
          outlineVariant: '#8B9198',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#E3E2E9',
          inverseOnSurface: '#292A2F',
          inversePrimary: '#234978',
          primaryFixed: '#D4E3FF',
          onPrimaryFixed: '#001128',
          primaryFixedDim: '#A6C8FF',
          onPrimaryFixedVariant: '#0B3765',
          secondaryFixed: '#FFD6FE',
          onSecondaryFixed: '#24002C',
          secondaryFixedDim: '#EBB5ED',
          onSecondaryFixedVariant: '#4F2654',
          tertiaryFixed: '#F9E287',
          onTertiaryFixed: '#161100',
          tertiaryFixedDim: '#DCC66E',
          onTertiaryFixedVariant: '#403500',
          surfaceDim: '#121318',
          surfaceBright: '#43444A',
          surfaceContainerLowest: '#06070C',
          surfaceContainerLow: '#1C1D23',
          surfaceContainer: '#26282D',
          surfaceContainerHigh: '#313238',
          surfaceContainerHighest: '#3C3D43',
        },
        'dark-high-contrast': {
          primary: '#EAF0FF',
          surfaceTint: '#A6C8FF',
          onPrimary: '#000000',
          primaryContainer: '#A2C4FB',
          onPrimaryContainer: '#000B1E',
          secondary: '#FFEAFB',
          onSecondary: '#000000',
          secondaryContainer: '#E7B1E9',
          onSecondaryContainer: '#1B0021',
          tertiary: '#FFF0BC',
          onTertiary: '#000000',
          tertiaryContainer: '#D8C26B',
          onTertiaryContainer: '#0F0B00',
          error: '#FFECE9',
          onError: '#000000',
          errorContainer: '#FFAEA1',
          onErrorContainer: '#220000',
          background: '#111318',
          onBackground: '#E1E2E9',
          surface: '#121318',
          onSurface: '#FFFFFF',
          surfaceVariant: '#42474E',
          onSurfaceVariant: '#FFFFFF',
          outline: '#EBF0F8',
          outlineVariant: '#BEC3CB',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#E3E2E9',
          inverseOnSurface: '#000000',
          inversePrimary: '#234978',
          primaryFixed: '#D4E3FF',
          onPrimaryFixed: '#000000',
          primaryFixedDim: '#A6C8FF',
          onPrimaryFixedVariant: '#001128',
          secondaryFixed: '#FFD6FE',
          onSecondaryFixed: '#000000',
          secondaryFixedDim: '#EBB5ED',
          onSecondaryFixedVariant: '#24002C',
          tertiaryFixed: '#F9E287',
          onTertiaryFixed: '#000000',
          tertiaryFixedDim: '#DCC66E',
          onTertiaryFixedVariant: '#161100',
          surfaceDim: '#121318',
          surfaceBright: '#4F5056',
          surfaceContainerLowest: '#000000',
          surfaceContainerLow: '#1E1F25',
          surfaceContainer: '#2F3036',
          surfaceContainerHigh: '#3A3B41',
          surfaceContainerHighest: '#46464C',
        },
      },
    },
    sa = ({ palette: r, shadows: e }) => ({
      MuiAccordion: {
        styleOverrides: {
          root: {
            boxShadow: e[1],
            border: `0px solid ${r.outlineVariant.main}`,
            color: r.onBackground.main,
            backgroundColor: r.surfaceBright.main,
            '&:before': { backgroundColor: r.surfaceBright.main, display: 'none' },
            '&.Mui-disabled': {
              backgroundColor: r.inverseOnSurface.main,
              color: r.inverseSurface.main,
              border: `0px solid ${r.outlineVariant.main}`,
            },
            '& .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper ': {
              color: r.onBackground.main,
            },
          },
        },
      },
    }),
    ca = ({ palette: r }) => ({
      MuiAlert: {
        defaultProps: { variant: 'standard' },
        styleOverrides: {
          root: { borderRadius: '20px' },
          standardError: { background: r.errorContainer.main, color: r.onErrorContainer.main },
          standardInfo: { background: r.infoContainer.main, color: r.infoContainer.contrastText },
          standardWarning: {
            background: r.warningContainer.main,
            color: r.onWarningContainer.main,
          },
          standardSuccess: {
            background: r.successContainer.main,
            color: r.onSuccessContainer.main,
          },
          filledError: { background: r.error.main, color: r.onError.main },
          filledInfo: { background: r.info.main, color: r.onInfo.main },
          filledWarning: { background: r.warning.main, color: r.onWarning.main },
          filledSuccess: { background: r.success.main, color: r.onSuccess.main },
          outlinedError: { color: r.error.main },
          outlinedInfo: { color: r.info.main },
          outlinedWarning: { color: r.warning.main },
          outlinedSuccess: { color: r.success.main },
        },
      },
    }),
    ua = ({ palette: r }) => ({
      MuiAppBar: {
        defaultProps: { elevation: 0, color: 'default' },
        styleOverrides: {
          colorDefault: { background: r.surfaceContainer.main, color: r.onSurface.main },
          colorPrimary: { background: r.surface.main, color: r.onSurface.main },
        },
      },
    }),
    fa = ({ palette: r }) => ({
      MuiBadge: {
        defaultProps: { color: 'default' },
        variants: [
          {
            props: { color: 'default' },
            style: { '.MuiBadge-badge': { backgroundColor: r.error.main, color: r.onError.main } },
          },
        ],
      },
    })
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
   */ function yr(r) {
    return r < 0 ? -1 : r === 0 ? 0 : 1
  }
  function te(r, e, t) {
    return (1 - t) * r + t * e
  }
  function la(r, e, t) {
    return t < r ? r : t > e ? e : t
  }
  function Ee(r, e, t) {
    return t < r ? r : t > e ? e : t
  }
  function ze(r) {
    return (r = r % 360), r < 0 && (r = r + 360), r
  }
  function da(r, e) {
    return ze(e - r) <= 180 ? 1 : -1
  }
  function ma(r, e) {
    return 180 - Math.abs(Math.abs(r - e) - 180)
  }
  function We(r, e) {
    const t = r[0] * e[0][0] + r[1] * e[0][1] + r[2] * e[0][2],
      n = r[0] * e[1][0] + r[1] * e[1][1] + r[2] * e[1][2],
      o = r[0] * e[2][0] + r[1] * e[2][1] + r[2] * e[2][2]
    return [t, n, o]
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
   */ const ha = [
      [0.41233895, 0.35762064, 0.18051042],
      [0.2126, 0.7152, 0.0722],
      [0.01932141, 0.11916382, 0.95034478],
    ],
    ga = [
      [3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
      [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
      [0.05562093689691305, -0.20395524564742123, 1.0571799111220335],
    ],
    ya = [95.047, 100, 108.883]
  function Ye(r, e, t) {
    return ((255 << 24) | ((r & 255) << 16) | ((e & 255) << 8) | (t & 255)) >>> 0
  }
  function Nt(r) {
    const e = $r(r[0]),
      t = $r(r[1]),
      n = $r(r[2])
    return Ye(e, t, n)
  }
  function Vt(r) {
    return (r >> 16) & 255
  }
  function jt(r) {
    return (r >> 8) & 255
  }
  function zt(r) {
    return r & 255
  }
  function pa(r, e, t) {
    const n = ga,
      o = n[0][0] * r + n[0][1] * e + n[0][2] * t,
      a = n[1][0] * r + n[1][1] * e + n[1][2] * t,
      i = n[2][0] * r + n[2][1] * e + n[2][2] * t,
      c = $r(o),
      f = $r(a),
      l = $r(i)
    return Ye(c, f, l)
  }
  function ba(r) {
    const e = Yr(Vt(r)),
      t = Yr(jt(r)),
      n = Yr(zt(r))
    return We([e, t, n], ha)
  }
  function Ca(r) {
    const e = _r(r),
      t = $r(e)
    return Ye(t, t, t)
  }
  function Ue(r) {
    const e = ba(r)[1]
    return 116 * Wt(e / 100) - 16
  }
  function _r(r) {
    return 100 * Sa((r + 16) / 116)
  }
  function He(r) {
    return Wt(r / 100) * 116 - 16
  }
  function Yr(r) {
    const e = r / 255
    return e <= 0.040449936 ? (e / 12.92) * 100 : Math.pow((e + 0.055) / 1.055, 2.4) * 100
  }
  function $r(r) {
    const e = r / 100
    let t = 0
    return (
      e <= 0.0031308 ? (t = e * 12.92) : (t = 1.055 * Math.pow(e, 1 / 2.4) - 0.055),
      la(0, 255, Math.round(t * 255))
    )
  }
  function Fa() {
    return ya
  }
  function Wt(r) {
    const e = 0.008856451679035631,
      t = 24389 / 27
    return r > e ? Math.pow(r, 1 / 3) : (t * r + 16) / 116
  }
  function Sa(r) {
    const e = 0.008856451679035631,
      t = 24389 / 27,
      n = r * r * r
    return n > e ? n : (116 * r - 16) / t
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
   */ class xr {
    static make(e = Fa(), t = ((200 / Math.PI) * _r(50)) / 100, n = 50, o = 2, a = !1) {
      const i = e,
        c = i[0] * 0.401288 + i[1] * 0.650173 + i[2] * -0.051461,
        f = i[0] * -0.250268 + i[1] * 1.204414 + i[2] * 0.045854,
        l = i[0] * -0.002079 + i[1] * 0.048952 + i[2] * 0.953127,
        d = 0.8 + o / 10,
        m = d >= 0.9 ? te(0.59, 0.69, (d - 0.9) * 10) : te(0.525, 0.59, (d - 0.8) * 10)
      let h = a ? 1 : d * (1 - (1 / 3.6) * Math.exp((-t - 42) / 92))
      h = h > 1 ? 1 : h < 0 ? 0 : h
      const C = d,
        b = [h * (100 / c) + 1 - h, h * (100 / f) + 1 - h, h * (100 / l) + 1 - h],
        u = 1 / (5 * t + 1),
        T = u * u * u * u,
        w = 1 - T,
        R = T * t + 0.1 * w * w * Math.cbrt(5 * t),
        S = _r(n) / e[1],
        x = 1.48 + Math.sqrt(S),
        p = 0.725 / Math.pow(S, 0.2),
        V = p,
        B = [
          Math.pow((R * b[0] * c) / 100, 0.42),
          Math.pow((R * b[1] * f) / 100, 0.42),
          Math.pow((R * b[2] * l) / 100, 0.42),
        ],
        G = [
          (400 * B[0]) / (B[0] + 27.13),
          (400 * B[1]) / (B[1] + 27.13),
          (400 * B[2]) / (B[2] + 27.13),
        ],
        H = (2 * G[0] + G[1] + 0.05 * G[2]) * p
      return new xr(S, H, p, V, m, C, b, R, Math.pow(R, 0.25), x)
    }
    constructor(e, t, n, o, a, i, c, f, l, d) {
      ;(this.n = e),
        (this.aw = t),
        (this.nbb = n),
        (this.ncb = o),
        (this.c = a),
        (this.nc = i),
        (this.rgbD = c),
        (this.fl = f),
        (this.fLRoot = l),
        (this.z = d)
    }
  }
  xr.DEFAULT = xr.make()
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
   */ class sr {
    constructor(e, t, n, o, a, i, c, f, l) {
      ;(this.hue = e),
        (this.chroma = t),
        (this.j = n),
        (this.q = o),
        (this.m = a),
        (this.s = i),
        (this.jstar = c),
        (this.astar = f),
        (this.bstar = l)
    }
    distance(e) {
      const t = this.jstar - e.jstar,
        n = this.astar - e.astar,
        o = this.bstar - e.bstar,
        a = Math.sqrt(t * t + n * n + o * o)
      return 1.41 * Math.pow(a, 0.63)
    }
    static fromInt(e) {
      return sr.fromIntInViewingConditions(e, xr.DEFAULT)
    }
    static fromIntInViewingConditions(e, t) {
      const n = (e & 16711680) >> 16,
        o = (e & 65280) >> 8,
        a = e & 255,
        i = Yr(n),
        c = Yr(o),
        f = Yr(a),
        l = 0.41233895 * i + 0.35762064 * c + 0.18051042 * f,
        d = 0.2126 * i + 0.7152 * c + 0.0722 * f,
        m = 0.01932141 * i + 0.11916382 * c + 0.95034478 * f,
        h = 0.401288 * l + 0.650173 * d - 0.051461 * m,
        C = -0.250268 * l + 1.204414 * d + 0.045854 * m,
        b = -0.002079 * l + 0.048952 * d + 0.953127 * m,
        u = t.rgbD[0] * h,
        T = t.rgbD[1] * C,
        w = t.rgbD[2] * b,
        R = Math.pow((t.fl * Math.abs(u)) / 100, 0.42),
        S = Math.pow((t.fl * Math.abs(T)) / 100, 0.42),
        x = Math.pow((t.fl * Math.abs(w)) / 100, 0.42),
        p = (yr(u) * 400 * R) / (R + 27.13),
        V = (yr(T) * 400 * S) / (S + 27.13),
        B = (yr(w) * 400 * x) / (x + 27.13),
        G = (11 * p + -12 * V + B) / 11,
        H = (p + V - 2 * B) / 9,
        s = (20 * p + 20 * V + 21 * B) / 20,
        v = (40 * p + 20 * V + B) / 20,
        U = (Math.atan2(H, G) * 180) / Math.PI,
        er = U < 0 ? U + 360 : U >= 360 ? U - 360 : U,
        gr = (er * Math.PI) / 180,
        lr = v * t.nbb,
        fr = 100 * Math.pow(lr / t.aw, t.c * t.z),
        kr = (4 / t.c) * Math.sqrt(fr / 100) * (t.aw + 4) * t.fLRoot,
        Mr = er < 20.14 ? er + 360 : er,
        F = 0.25 * (Math.cos((Mr * Math.PI) / 180 + 2) + 3.8),
        $ = ((5e4 / 13) * F * t.nc * t.ncb * Math.sqrt(G * G + H * H)) / (s + 0.305),
        _ = Math.pow($, 0.9) * Math.pow(1.64 - Math.pow(0.29, t.n), 0.73),
        M = _ * Math.sqrt(fr / 100),
        j = M * t.fLRoot,
        L = 50 * Math.sqrt((_ * t.c) / (t.aw + 4)),
        N = ((1 + 100 * 0.007) * fr) / (1 + 0.007 * fr),
        z = (1 / 0.0228) * Math.log(1 + 0.0228 * j),
        q = z * Math.cos(gr),
        W = z * Math.sin(gr)
      return new sr(er, M, fr, kr, j, L, N, q, W)
    }
    static fromJch(e, t, n) {
      return sr.fromJchInViewingConditions(e, t, n, xr.DEFAULT)
    }
    static fromJchInViewingConditions(e, t, n, o) {
      const a = (4 / o.c) * Math.sqrt(e / 100) * (o.aw + 4) * o.fLRoot,
        i = t * o.fLRoot,
        c = t / Math.sqrt(e / 100),
        f = 50 * Math.sqrt((c * o.c) / (o.aw + 4)),
        l = (n * Math.PI) / 180,
        d = ((1 + 100 * 0.007) * e) / (1 + 0.007 * e),
        m = (1 / 0.0228) * Math.log(1 + 0.0228 * i),
        h = m * Math.cos(l),
        C = m * Math.sin(l)
      return new sr(n, t, e, a, i, f, d, h, C)
    }
    static fromUcs(e, t, n) {
      return sr.fromUcsInViewingConditions(e, t, n, xr.DEFAULT)
    }
    static fromUcsInViewingConditions(e, t, n, o) {
      const a = t,
        i = n,
        c = Math.sqrt(a * a + i * i),
        l = (Math.exp(c * 0.0228) - 1) / 0.0228 / o.fLRoot
      let d = Math.atan2(i, a) * (180 / Math.PI)
      d < 0 && (d += 360)
      const m = e / (1 - (e - 100) * 0.007)
      return sr.fromJchInViewingConditions(m, l, d, o)
    }
    toInt() {
      return this.viewed(xr.DEFAULT)
    }
    viewed(e) {
      const t = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
        n = Math.pow(t / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9),
        o = (this.hue * Math.PI) / 180,
        a = 0.25 * (Math.cos(o + 2) + 3.8),
        i = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z),
        c = a * (5e4 / 13) * e.nc * e.ncb,
        f = i / e.nbb,
        l = Math.sin(o),
        d = Math.cos(o),
        m = (23 * (f + 0.305) * n) / (23 * c + 11 * n * d + 108 * n * l),
        h = m * d,
        C = m * l,
        b = (460 * f + 451 * h + 288 * C) / 1403,
        u = (460 * f - 891 * h - 261 * C) / 1403,
        T = (460 * f - 220 * h - 6300 * C) / 1403,
        w = Math.max(0, (27.13 * Math.abs(b)) / (400 - Math.abs(b))),
        R = yr(b) * (100 / e.fl) * Math.pow(w, 1 / 0.42),
        S = Math.max(0, (27.13 * Math.abs(u)) / (400 - Math.abs(u))),
        x = yr(u) * (100 / e.fl) * Math.pow(S, 1 / 0.42),
        p = Math.max(0, (27.13 * Math.abs(T)) / (400 - Math.abs(T))),
        V = yr(T) * (100 / e.fl) * Math.pow(p, 1 / 0.42),
        B = R / e.rgbD[0],
        G = x / e.rgbD[1],
        H = V / e.rgbD[2],
        s = 1.86206786 * B - 1.01125463 * G + 0.14918677 * H,
        v = 0.38752654 * B + 0.62144744 * G - 0.00897398 * H,
        O = -0.0158415 * B - 0.03412294 * G + 1.04996444 * H
      return pa(s, v, O)
    }
    static fromXyzInViewingConditions(e, t, n, o) {
      const a = 0.401288 * e + 0.650173 * t - 0.051461 * n,
        i = -0.250268 * e + 1.204414 * t + 0.045854 * n,
        c = -0.002079 * e + 0.048952 * t + 0.953127 * n,
        f = o.rgbD[0] * a,
        l = o.rgbD[1] * i,
        d = o.rgbD[2] * c,
        m = Math.pow((o.fl * Math.abs(f)) / 100, 0.42),
        h = Math.pow((o.fl * Math.abs(l)) / 100, 0.42),
        C = Math.pow((o.fl * Math.abs(d)) / 100, 0.42),
        b = (yr(f) * 400 * m) / (m + 27.13),
        u = (yr(l) * 400 * h) / (h + 27.13),
        T = (yr(d) * 400 * C) / (C + 27.13),
        w = (11 * b + -12 * u + T) / 11,
        R = (b + u - 2 * T) / 9,
        S = (20 * b + 20 * u + 21 * T) / 20,
        x = (40 * b + 20 * u + T) / 20,
        V = (Math.atan2(R, w) * 180) / Math.PI,
        B = V < 0 ? V + 360 : V >= 360 ? V - 360 : V,
        G = (B * Math.PI) / 180,
        H = x * o.nbb,
        s = 100 * Math.pow(H / o.aw, o.c * o.z),
        v = (4 / o.c) * Math.sqrt(s / 100) * (o.aw + 4) * o.fLRoot,
        O = B < 20.14 ? B + 360 : B,
        U = (1 / 4) * (Math.cos((O * Math.PI) / 180 + 2) + 3.8),
        gr = ((5e4 / 13) * U * o.nc * o.ncb * Math.sqrt(w * w + R * R)) / (S + 0.305),
        lr = Math.pow(gr, 0.9) * Math.pow(1.64 - Math.pow(0.29, o.n), 0.73),
        fr = lr * Math.sqrt(s / 100),
        kr = fr * o.fLRoot,
        Mr = 50 * Math.sqrt((lr * o.c) / (o.aw + 4)),
        F = ((1 + 100 * 0.007) * s) / (1 + 0.007 * s),
        P = Math.log(1 + 0.0228 * kr) / 0.0228,
        $ = P * Math.cos(G),
        _ = P * Math.sin(G)
      return new sr(B, fr, s, v, kr, Mr, F, $, _)
    }
    xyzInViewingConditions(e) {
      const t = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
        n = Math.pow(t / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9),
        o = (this.hue * Math.PI) / 180,
        a = 0.25 * (Math.cos(o + 2) + 3.8),
        i = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z),
        c = a * (5e4 / 13) * e.nc * e.ncb,
        f = i / e.nbb,
        l = Math.sin(o),
        d = Math.cos(o),
        m = (23 * (f + 0.305) * n) / (23 * c + 11 * n * d + 108 * n * l),
        h = m * d,
        C = m * l,
        b = (460 * f + 451 * h + 288 * C) / 1403,
        u = (460 * f - 891 * h - 261 * C) / 1403,
        T = (460 * f - 220 * h - 6300 * C) / 1403,
        w = Math.max(0, (27.13 * Math.abs(b)) / (400 - Math.abs(b))),
        R = yr(b) * (100 / e.fl) * Math.pow(w, 1 / 0.42),
        S = Math.max(0, (27.13 * Math.abs(u)) / (400 - Math.abs(u))),
        x = yr(u) * (100 / e.fl) * Math.pow(S, 1 / 0.42),
        p = Math.max(0, (27.13 * Math.abs(T)) / (400 - Math.abs(T))),
        V = yr(T) * (100 / e.fl) * Math.pow(p, 1 / 0.42),
        B = R / e.rgbD[0],
        G = x / e.rgbD[1],
        H = V / e.rgbD[2],
        s = 1.86206786 * B - 1.01125463 * G + 0.14918677 * H,
        v = 0.38752654 * B + 0.62144744 * G - 0.00897398 * H,
        O = -0.0158415 * B - 0.03412294 * G + 1.04996444 * H
      return [s, v, O]
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
   */ class A {
    static sanitizeRadians(e) {
      return (e + Math.PI * 8) % (Math.PI * 2)
    }
    static trueDelinearized(e) {
      const t = e / 100
      let n = 0
      return t <= 0.0031308 ? (n = t * 12.92) : (n = 1.055 * Math.pow(t, 1 / 2.4) - 0.055), n * 255
    }
    static chromaticAdaptation(e) {
      const t = Math.pow(Math.abs(e), 0.42)
      return (yr(e) * 400 * t) / (t + 27.13)
    }
    static hueOf(e) {
      const t = We(e, A.SCALED_DISCOUNT_FROM_LINRGB),
        n = A.chromaticAdaptation(t[0]),
        o = A.chromaticAdaptation(t[1]),
        a = A.chromaticAdaptation(t[2]),
        i = (11 * n + -12 * o + a) / 11,
        c = (n + o - 2 * a) / 9
      return Math.atan2(c, i)
    }
    static areInCyclicOrder(e, t, n) {
      const o = A.sanitizeRadians(t - e),
        a = A.sanitizeRadians(n - e)
      return o < a
    }
    static intercept(e, t, n) {
      return (t - e) / (n - e)
    }
    static lerpPoint(e, t, n) {
      return [e[0] + (n[0] - e[0]) * t, e[1] + (n[1] - e[1]) * t, e[2] + (n[2] - e[2]) * t]
    }
    static setCoordinate(e, t, n, o) {
      const a = A.intercept(e[o], t, n[o])
      return A.lerpPoint(e, a, n)
    }
    static isBounded(e) {
      return 0 <= e && e <= 100
    }
    static nthVertex(e, t) {
      const n = A.Y_FROM_LINRGB[0],
        o = A.Y_FROM_LINRGB[1],
        a = A.Y_FROM_LINRGB[2],
        i = t % 4 <= 1 ? 0 : 100,
        c = t % 2 === 0 ? 0 : 100
      if (t < 4) {
        const f = i,
          l = c,
          d = (e - f * o - l * a) / n
        return A.isBounded(d) ? [d, f, l] : [-1, -1, -1]
      } else if (t < 8) {
        const f = i,
          l = c,
          d = (e - l * n - f * a) / o
        return A.isBounded(d) ? [l, d, f] : [-1, -1, -1]
      } else {
        const f = i,
          l = c,
          d = (e - f * n - l * o) / a
        return A.isBounded(d) ? [f, l, d] : [-1, -1, -1]
      }
    }
    static bisectToSegment(e, t) {
      let n = [-1, -1, -1],
        o = n,
        a = 0,
        i = 0,
        c = !1,
        f = !0
      for (let l = 0; l < 12; l++) {
        const d = A.nthVertex(e, l)
        if (d[0] < 0) continue
        const m = A.hueOf(d)
        if (!c) {
          ;(n = d), (o = d), (a = m), (i = m), (c = !0)
          continue
        }
        ;(f || A.areInCyclicOrder(a, m, i)) &&
          ((f = !1), A.areInCyclicOrder(a, t, m) ? ((o = d), (i = m)) : ((n = d), (a = m)))
      }
      return [n, o]
    }
    static midpoint(e, t) {
      return [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2, (e[2] + t[2]) / 2]
    }
    static criticalPlaneBelow(e) {
      return Math.floor(e - 0.5)
    }
    static criticalPlaneAbove(e) {
      return Math.ceil(e - 0.5)
    }
    static bisectToLimit(e, t) {
      const n = A.bisectToSegment(e, t)
      let o = n[0],
        a = A.hueOf(o),
        i = n[1]
      for (let c = 0; c < 3; c++)
        if (o[c] !== i[c]) {
          let f = -1,
            l = 255
          o[c] < i[c]
            ? ((f = A.criticalPlaneBelow(A.trueDelinearized(o[c]))),
              (l = A.criticalPlaneAbove(A.trueDelinearized(i[c]))))
            : ((f = A.criticalPlaneAbove(A.trueDelinearized(o[c]))),
              (l = A.criticalPlaneBelow(A.trueDelinearized(i[c]))))
          for (let d = 0; d < 8 && !(Math.abs(l - f) <= 1); d++) {
            const m = Math.floor((f + l) / 2),
              h = A.CRITICAL_PLANES[m],
              C = A.setCoordinate(o, h, i, c),
              b = A.hueOf(C)
            A.areInCyclicOrder(a, t, b) ? ((i = C), (l = m)) : ((o = C), (a = b), (f = m))
          }
        }
      return A.midpoint(o, i)
    }
    static inverseChromaticAdaptation(e) {
      const t = Math.abs(e),
        n = Math.max(0, (27.13 * t) / (400 - t))
      return yr(e) * Math.pow(n, 1 / 0.42)
    }
    static findResultByJ(e, t, n) {
      let o = Math.sqrt(n) * 11
      const a = xr.DEFAULT,
        i = 1 / Math.pow(1.64 - Math.pow(0.29, a.n), 0.73),
        f = 0.25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * a.nc * a.ncb,
        l = Math.sin(e),
        d = Math.cos(e)
      for (let m = 0; m < 5; m++) {
        const h = o / 100,
          C = t === 0 || o === 0 ? 0 : t / Math.sqrt(h),
          b = Math.pow(C * i, 1 / 0.9),
          T = (a.aw * Math.pow(h, 1 / a.c / a.z)) / a.nbb,
          w = (23 * (T + 0.305) * b) / (23 * f + 11 * b * d + 108 * b * l),
          R = w * d,
          S = w * l,
          x = (460 * T + 451 * R + 288 * S) / 1403,
          p = (460 * T - 891 * R - 261 * S) / 1403,
          V = (460 * T - 220 * R - 6300 * S) / 1403,
          B = A.inverseChromaticAdaptation(x),
          G = A.inverseChromaticAdaptation(p),
          H = A.inverseChromaticAdaptation(V),
          s = We([B, G, H], A.LINRGB_FROM_SCALED_DISCOUNT)
        if (s[0] < 0 || s[1] < 0 || s[2] < 0) return 0
        const v = A.Y_FROM_LINRGB[0],
          O = A.Y_FROM_LINRGB[1],
          U = A.Y_FROM_LINRGB[2],
          er = v * s[0] + O * s[1] + U * s[2]
        if (er <= 0) return 0
        if (m === 4 || Math.abs(er - n) < 0.002)
          return s[0] > 100.01 || s[1] > 100.01 || s[2] > 100.01 ? 0 : Nt(s)
        o = o - ((er - n) * o) / (2 * er)
      }
      return 0
    }
    static solveToInt(e, t, n) {
      if (t < 1e-4 || n < 1e-4 || n > 99.9999) return Ca(n)
      e = ze(e)
      const o = (e / 180) * Math.PI,
        a = _r(n),
        i = A.findResultByJ(o, t, a)
      if (i !== 0) return i
      const c = A.bisectToLimit(a, o)
      return Nt(c)
    }
    static solveToCam(e, t, n) {
      return sr.fromInt(A.solveToInt(e, t, n))
    }
  }
  ;(A.SCALED_DISCOUNT_FROM_LINRGB = [
    [0.001200833568784504, 0.002389694492170889, 0.0002795742885861124],
    [0.0005891086651375999, 0.0029785502573438758, 0.0003270666104008398],
    [0.00010146692491640572, 0.0005364214359186694, 0.0032979401770712076],
  ]),
    (A.LINRGB_FROM_SCALED_DISCOUNT = [
      [1373.2198709594231, -1100.4251190754821, -7.278681089101213],
      [-271.815969077903, 559.6580465940733, -32.46047482791194],
      [1.9622899599665666, -57.173814538844006, 308.7233197812385],
    ]),
    (A.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722]),
    (A.CRITICAL_PLANES = [
      0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313,
      0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281,
      0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123,
      0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023,
      0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623,
      0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498,
      0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297,
      1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447,
      1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105,
      1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551,
      2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007,
      2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997,
      3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087,
      3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158,
      4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746,
      4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375,
      5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082,
      6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045,
      6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665,
      7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165,
      8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839,
      9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024,
      10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008,
      11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247,
      12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372,
      13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856,
      14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891,
      16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053,
      17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332,
      18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692,
      19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977,
      21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328,
      22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016,
      24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138,
      26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353,
      27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422,
      29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627,
      31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592,
      33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264,
      34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349,
      36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785,
      39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629,
      41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224,
      43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209,
      46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468,
      48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984,
      51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392,
      53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934,
      56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621,
      58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585,
      61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914,
      64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258,
      67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107,
      71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733,
      74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167,
      78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999,
      82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302,
      86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655,
      90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902,
      95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366,
      99.55452497210776,
    ])
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
   */ class cr {
    static from(e, t, n) {
      return new cr(A.solveToInt(e, t, n))
    }
    static fromInt(e) {
      return new cr(e)
    }
    toInt() {
      return this.argb
    }
    get hue() {
      return this.internalHue
    }
    set hue(e) {
      this.setInternalState(A.solveToInt(e, this.internalChroma, this.internalTone))
    }
    get chroma() {
      return this.internalChroma
    }
    set chroma(e) {
      this.setInternalState(A.solveToInt(this.internalHue, e, this.internalTone))
    }
    get tone() {
      return this.internalTone
    }
    set tone(e) {
      this.setInternalState(A.solveToInt(this.internalHue, this.internalChroma, e))
    }
    constructor(e) {
      this.argb = e
      const t = sr.fromInt(e)
      ;(this.internalHue = t.hue),
        (this.internalChroma = t.chroma),
        (this.internalTone = Ue(e)),
        (this.argb = e)
    }
    setInternalState(e) {
      const t = sr.fromInt(e)
      ;(this.internalHue = t.hue),
        (this.internalChroma = t.chroma),
        (this.internalTone = Ue(e)),
        (this.argb = e)
    }
    inViewingConditions(e) {
      const n = sr.fromInt(this.toInt()).xyzInViewingConditions(e),
        o = sr.fromXyzInViewingConditions(n[0], n[1], n[2], xr.make())
      return cr.from(o.hue, o.chroma, He(n[1]))
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
   */ class Ge {
    static harmonize(e, t) {
      const n = cr.fromInt(e),
        o = cr.fromInt(t),
        a = ma(n.hue, o.hue),
        i = Math.min(a * 0.5, 15),
        c = ze(n.hue + i * da(n.hue, o.hue))
      return cr.from(c, n.chroma, n.tone).toInt()
    }
    static hctHue(e, t, n) {
      const o = Ge.cam16Ucs(e, t, n),
        a = sr.fromInt(o),
        i = sr.fromInt(e)
      return cr.from(a.hue, i.chroma, Ue(e)).toInt()
    }
    static cam16Ucs(e, t, n) {
      const o = sr.fromInt(e),
        a = sr.fromInt(t),
        i = o.jstar,
        c = o.astar,
        f = o.bstar,
        l = a.jstar,
        d = a.astar,
        m = a.bstar,
        h = i + (l - i) * n,
        C = c + (d - c) * n,
        b = f + (m - f) * n
      return sr.fromUcs(h, C, b).toInt()
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
   */ class ur {
    static ratioOfTones(e, t) {
      return (e = Ee(0, 100, e)), (t = Ee(0, 100, t)), ur.ratioOfYs(_r(e), _r(t))
    }
    static ratioOfYs(e, t) {
      const n = e > t ? e : t,
        o = n === t ? e : t
      return (n + 5) / (o + 5)
    }
    static lighter(e, t) {
      if (e < 0 || e > 100) return -1
      const n = _r(e),
        o = t * (n + 5) - 5,
        a = ur.ratioOfYs(o, n),
        i = Math.abs(a - t)
      if (a < t && i > 0.04) return -1
      const c = He(o) + 0.4
      return c < 0 || c > 100 ? -1 : c
    }
    static darker(e, t) {
      if (e < 0 || e > 100) return -1
      const n = _r(e),
        o = (n + 5) / t - 5,
        a = ur.ratioOfYs(n, o),
        i = Math.abs(a - t)
      if (a < t && i > 0.04) return -1
      const c = He(o) - 0.4
      return c < 0 || c > 100 ? -1 : c
    }
    static lighterUnsafe(e, t) {
      const n = ur.lighter(e, t)
      return n < 0 ? 100 : n
    }
    static darkerUnsafe(e, t) {
      const n = ur.darker(e, t)
      return n < 0 ? 0 : n
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
   */ class qe {
    static isDisliked(e) {
      const t = Math.round(e.hue) >= 90 && Math.round(e.hue) <= 111,
        n = Math.round(e.chroma) > 16,
        o = Math.round(e.tone) < 65
      return t && n && o
    }
    static fixIfDisliked(e) {
      return qe.isDisliked(e) ? cr.from(e.hue, e.chroma, 70) : e
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
   */ class E {
    static fromPalette(e) {
      return new E(
        e.name ?? '',
        e.palette,
        e.tone,
        e.isBackground ?? !1,
        e.background,
        e.secondBackground,
        e.contrastCurve,
        e.toneDeltaPair,
      )
    }
    constructor(e, t, n, o, a, i, c, f) {
      if (
        ((this.name = e),
        (this.palette = t),
        (this.tone = n),
        (this.isBackground = o),
        (this.background = a),
        (this.secondBackground = i),
        (this.contrastCurve = c),
        (this.toneDeltaPair = f),
        (this.hctCache = new Map()),
        !a && i)
      )
        throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`)
      if (!a && c)
        throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`)
      if (a && !c)
        throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)
    }
    getArgb(e) {
      return this.getHct(e).toInt()
    }
    getHct(e) {
      const t = this.hctCache.get(e)
      if (t != null) return t
      const n = this.getTone(e),
        o = this.palette(e).getHct(n)
      return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, o), o
    }
    getTone(e) {
      const t = e.contrastLevel < 0
      if (this.toneDeltaPair) {
        const n = this.toneDeltaPair(e),
          o = n.roleA,
          a = n.roleB,
          i = n.delta,
          c = n.polarity,
          f = n.stayTogether,
          d = this.background(e).getTone(e),
          m = c === 'nearer' || (c === 'lighter' && !e.isDark) || (c === 'darker' && e.isDark),
          h = m ? o : a,
          C = m ? a : o,
          b = this.name === h.name,
          u = e.isDark ? 1 : -1,
          T = h.contrastCurve.getContrast(e.contrastLevel),
          w = C.contrastCurve.getContrast(e.contrastLevel),
          R = h.tone(e)
        let S = ur.ratioOfTones(d, R) >= T ? R : E.foregroundTone(d, T)
        const x = C.tone(e)
        let p = ur.ratioOfTones(d, x) >= w ? x : E.foregroundTone(d, w)
        return (
          t && ((S = E.foregroundTone(d, T)), (p = E.foregroundTone(d, w))),
          (p - S) * u >= i ||
            ((p = Ee(0, 100, S + i * u)), (p - S) * u >= i || (S = Ee(0, 100, p - i * u))),
          50 <= S && S < 60
            ? u > 0
              ? ((S = 60), (p = Math.max(p, S + i * u)))
              : ((S = 49), (p = Math.min(p, S + i * u)))
            : 50 <= p &&
              p < 60 &&
              (f
                ? u > 0
                  ? ((S = 60), (p = Math.max(p, S + i * u)))
                  : ((S = 49), (p = Math.min(p, S + i * u)))
                : u > 0
                  ? (p = 60)
                  : (p = 49)),
          b ? S : p
        )
      } else {
        let n = this.tone(e)
        if (this.background == null) return n
        const o = this.background(e).getTone(e),
          a = this.contrastCurve.getContrast(e.contrastLevel)
        if (
          (ur.ratioOfTones(o, n) >= a || (n = E.foregroundTone(o, a)),
          t && (n = E.foregroundTone(o, a)),
          this.isBackground &&
            50 <= n &&
            n < 60 &&
            (ur.ratioOfTones(49, o) >= a ? (n = 49) : (n = 60)),
          this.secondBackground)
        ) {
          const [i, c] = [this.background, this.secondBackground],
            [f, l] = [i(e).getTone(e), c(e).getTone(e)],
            [d, m] = [Math.max(f, l), Math.min(f, l)]
          if (ur.ratioOfTones(d, n) >= a && ur.ratioOfTones(m, n) >= a) return n
          const h = ur.lighter(d, a),
            C = ur.darker(m, a),
            b = []
          return (
            h !== -1 && b.push(h),
            C !== -1 && b.push(C),
            E.tonePrefersLightForeground(f) || E.tonePrefersLightForeground(l)
              ? h < 0
                ? 100
                : h
              : b.length === 1
                ? b[0]
                : C < 0
                  ? 0
                  : C
          )
        }
        return n
      }
    }
    static foregroundTone(e, t) {
      const n = ur.lighterUnsafe(e, t),
        o = ur.darkerUnsafe(e, t),
        a = ur.ratioOfTones(n, e),
        i = ur.ratioOfTones(o, e)
      if (E.tonePrefersLightForeground(e)) {
        const f = Math.abs(a - i) < 0.1 && a < t && i < t
        return a >= t || a >= i || f ? n : o
      } else return i >= t || i >= a ? o : n
    }
    static tonePrefersLightForeground(e) {
      return Math.round(e) < 60
    }
    static toneAllowsLightForeground(e) {
      return Math.round(e) <= 49
    }
    static enableLightForeground(e) {
      return E.tonePrefersLightForeground(e) && !E.toneAllowsLightForeground(e) ? 49 : e
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
   */ var ne
  ;(function (r) {
    ;(r[(r.MONOCHROME = 0)] = 'MONOCHROME'),
      (r[(r.NEUTRAL = 1)] = 'NEUTRAL'),
      (r[(r.TONAL_SPOT = 2)] = 'TONAL_SPOT'),
      (r[(r.VIBRANT = 3)] = 'VIBRANT'),
      (r[(r.EXPRESSIVE = 4)] = 'EXPRESSIVE'),
      (r[(r.FIDELITY = 5)] = 'FIDELITY'),
      (r[(r.CONTENT = 6)] = 'CONTENT'),
      (r[(r.RAINBOW = 7)] = 'RAINBOW'),
      (r[(r.FRUIT_SALAD = 8)] = 'FRUIT_SALAD')
  })(ne || (ne = {}))
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
   */ class Y {
    constructor(e, t, n, o) {
      ;(this.low = e), (this.normal = t), (this.medium = n), (this.high = o)
    }
    getContrast(e) {
      return e <= -1
        ? this.low
        : e < 0
          ? te(this.low, this.normal, (e - -1) / 1)
          : e < 0.5
            ? te(this.normal, this.medium, (e - 0) / 0.5)
            : e < 1
              ? te(this.medium, this.high, (e - 0.5) / 0.5)
              : this.high
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
   */ class pr {
    constructor(e, t, n, o, a) {
      ;(this.roleA = e),
        (this.roleB = t),
        (this.delta = n),
        (this.polarity = o),
        (this.stayTogether = a)
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
   */ function Ur(r) {
    return r.variant === ne.FIDELITY || r.variant === ne.CONTENT
  }
  function ir(r) {
    return r.variant === ne.MONOCHROME
  }
  function Ta(r, e, t, n) {
    let o = t,
      a = cr.from(r, e, t)
    if (a.chroma < e) {
      let i = a.chroma
      for (; a.chroma < e; ) {
        o += n ? -1 : 1
        const c = cr.from(r, e, o)
        if (i > c.chroma || Math.abs(c.chroma - e) < 0.4) break
        const f = Math.abs(c.chroma - e),
          l = Math.abs(a.chroma - e)
        f < l && (a = c), (i = Math.max(i, c.chroma))
      }
    }
    return o
  }
  function Ea(r) {
    return xr.make(void 0, void 0, r.isDark ? 30 : 80, void 0, void 0)
  }
  function Ke(r, e) {
    const t = r.inViewingConditions(Ea(e))
    return E.tonePrefersLightForeground(r.tone) && !E.toneAllowsLightForeground(t.tone)
      ? E.enableLightForeground(r.tone)
      : E.enableLightForeground(t.tone)
  }
  class g {
    static highestSurface(e) {
      return e.isDark ? g.surfaceBright : g.surfaceDim
    }
  }
  ;(g.contentAccentToneDelta = 15),
    (g.primaryPaletteKeyColor = E.fromPalette({
      name: 'primary_palette_key_color',
      palette: (r) => r.primaryPalette,
      tone: (r) => r.primaryPalette.keyColor.tone,
    })),
    (g.secondaryPaletteKeyColor = E.fromPalette({
      name: 'secondary_palette_key_color',
      palette: (r) => r.secondaryPalette,
      tone: (r) => r.secondaryPalette.keyColor.tone,
    })),
    (g.tertiaryPaletteKeyColor = E.fromPalette({
      name: 'tertiary_palette_key_color',
      palette: (r) => r.tertiaryPalette,
      tone: (r) => r.tertiaryPalette.keyColor.tone,
    })),
    (g.neutralPaletteKeyColor = E.fromPalette({
      name: 'neutral_palette_key_color',
      palette: (r) => r.neutralPalette,
      tone: (r) => r.neutralPalette.keyColor.tone,
    })),
    (g.neutralVariantPaletteKeyColor = E.fromPalette({
      name: 'neutral_variant_palette_key_color',
      palette: (r) => r.neutralVariantPalette,
      tone: (r) => r.neutralVariantPalette.keyColor.tone,
    })),
    (g.background = E.fromPalette({
      name: 'background',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 6 : 98),
      isBackground: !0,
    })),
    (g.onBackground = E.fromPalette({
      name: 'on_background',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 90 : 10),
      background: (r) => g.background,
      contrastCurve: new Y(3, 3, 4.5, 7),
    })),
    (g.surface = E.fromPalette({
      name: 'surface',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 6 : 98),
      isBackground: !0,
    })),
    (g.surfaceDim = E.fromPalette({
      name: 'surface_dim',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 6 : 87),
      isBackground: !0,
    })),
    (g.surfaceBright = E.fromPalette({
      name: 'surface_bright',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 24 : 98),
      isBackground: !0,
    })),
    (g.surfaceContainerLowest = E.fromPalette({
      name: 'surface_container_lowest',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 4 : 100),
      isBackground: !0,
    })),
    (g.surfaceContainerLow = E.fromPalette({
      name: 'surface_container_low',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 10 : 96),
      isBackground: !0,
    })),
    (g.surfaceContainer = E.fromPalette({
      name: 'surface_container',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 12 : 94),
      isBackground: !0,
    })),
    (g.surfaceContainerHigh = E.fromPalette({
      name: 'surface_container_high',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 17 : 92),
      isBackground: !0,
    })),
    (g.surfaceContainerHighest = E.fromPalette({
      name: 'surface_container_highest',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 22 : 90),
      isBackground: !0,
    })),
    (g.onSurface = E.fromPalette({
      name: 'on_surface',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 90 : 10),
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.surfaceVariant = E.fromPalette({
      name: 'surface_variant',
      palette: (r) => r.neutralVariantPalette,
      tone: (r) => (r.isDark ? 30 : 90),
      isBackground: !0,
    })),
    (g.onSurfaceVariant = E.fromPalette({
      name: 'on_surface_variant',
      palette: (r) => r.neutralVariantPalette,
      tone: (r) => (r.isDark ? 80 : 30),
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(3, 4.5, 7, 11),
    })),
    (g.inverseSurface = E.fromPalette({
      name: 'inverse_surface',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 90 : 20),
    })),
    (g.inverseOnSurface = E.fromPalette({
      name: 'inverse_on_surface',
      palette: (r) => r.neutralPalette,
      tone: (r) => (r.isDark ? 20 : 95),
      background: (r) => g.inverseSurface,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.outline = E.fromPalette({
      name: 'outline',
      palette: (r) => r.neutralVariantPalette,
      tone: (r) => (r.isDark ? 60 : 50),
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1.5, 3, 4.5, 7),
    })),
    (g.outlineVariant = E.fromPalette({
      name: 'outline_variant',
      palette: (r) => r.neutralVariantPalette,
      tone: (r) => (r.isDark ? 30 : 80),
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
    })),
    (g.shadow = E.fromPalette({
      name: 'shadow',
      palette: (r) => r.neutralPalette,
      tone: (r) => 0,
    })),
    (g.scrim = E.fromPalette({ name: 'scrim', palette: (r) => r.neutralPalette, tone: (r) => 0 })),
    (g.surfaceTint = E.fromPalette({
      name: 'surface_tint',
      palette: (r) => r.primaryPalette,
      tone: (r) => (r.isDark ? 80 : 40),
      isBackground: !0,
    })),
    (g.primary = E.fromPalette({
      name: 'primary',
      palette: (r) => r.primaryPalette,
      tone: (r) => (ir(r) ? (r.isDark ? 100 : 0) : r.isDark ? 80 : 40),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(3, 4.5, 7, 11),
      toneDeltaPair: (r) => new pr(g.primaryContainer, g.primary, 15, 'nearer', !1),
    })),
    (g.onPrimary = E.fromPalette({
      name: 'on_primary',
      palette: (r) => r.primaryPalette,
      tone: (r) => (ir(r) ? (r.isDark ? 10 : 90) : r.isDark ? 20 : 100),
      background: (r) => g.primary,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.primaryContainer = E.fromPalette({
      name: 'primary_container',
      palette: (r) => r.primaryPalette,
      tone: (r) =>
        Ur(r) ? Ke(r.sourceColorHct, r) : ir(r) ? (r.isDark ? 85 : 25) : r.isDark ? 30 : 90,
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.primaryContainer, g.primary, 15, 'nearer', !1),
    })),
    (g.onPrimaryContainer = E.fromPalette({
      name: 'on_primary_container',
      palette: (r) => r.primaryPalette,
      tone: (r) =>
        Ur(r)
          ? E.foregroundTone(g.primaryContainer.tone(r), 4.5)
          : ir(r)
            ? r.isDark
              ? 0
              : 100
            : r.isDark
              ? 90
              : 10,
      background: (r) => g.primaryContainer,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.inversePrimary = E.fromPalette({
      name: 'inverse_primary',
      palette: (r) => r.primaryPalette,
      tone: (r) => (r.isDark ? 40 : 80),
      background: (r) => g.inverseSurface,
      contrastCurve: new Y(3, 4.5, 7, 11),
    })),
    (g.secondary = E.fromPalette({
      name: 'secondary',
      palette: (r) => r.secondaryPalette,
      tone: (r) => (r.isDark ? 80 : 40),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(3, 4.5, 7, 11),
      toneDeltaPair: (r) => new pr(g.secondaryContainer, g.secondary, 15, 'nearer', !1),
    })),
    (g.onSecondary = E.fromPalette({
      name: 'on_secondary',
      palette: (r) => r.secondaryPalette,
      tone: (r) => (ir(r) ? (r.isDark ? 10 : 100) : r.isDark ? 20 : 100),
      background: (r) => g.secondary,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.secondaryContainer = E.fromPalette({
      name: 'secondary_container',
      palette: (r) => r.secondaryPalette,
      tone: (r) => {
        const e = r.isDark ? 30 : 90
        if (ir(r)) return r.isDark ? 30 : 85
        if (!Ur(r)) return e
        let t = Ta(r.secondaryPalette.hue, r.secondaryPalette.chroma, e, !r.isDark)
        return (t = Ke(r.secondaryPalette.getHct(t), r)), t
      },
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.secondaryContainer, g.secondary, 15, 'nearer', !1),
    })),
    (g.onSecondaryContainer = E.fromPalette({
      name: 'on_secondary_container',
      palette: (r) => r.secondaryPalette,
      tone: (r) =>
        Ur(r) ? E.foregroundTone(g.secondaryContainer.tone(r), 4.5) : r.isDark ? 90 : 10,
      background: (r) => g.secondaryContainer,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.tertiary = E.fromPalette({
      name: 'tertiary',
      palette: (r) => r.tertiaryPalette,
      tone: (r) => (ir(r) ? (r.isDark ? 90 : 25) : r.isDark ? 80 : 40),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(3, 4.5, 7, 11),
      toneDeltaPair: (r) => new pr(g.tertiaryContainer, g.tertiary, 15, 'nearer', !1),
    })),
    (g.onTertiary = E.fromPalette({
      name: 'on_tertiary',
      palette: (r) => r.tertiaryPalette,
      tone: (r) => (ir(r) ? (r.isDark ? 10 : 90) : r.isDark ? 20 : 100),
      background: (r) => g.tertiary,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.tertiaryContainer = E.fromPalette({
      name: 'tertiary_container',
      palette: (r) => r.tertiaryPalette,
      tone: (r) => {
        if (ir(r)) return r.isDark ? 60 : 49
        if (!Ur(r)) return r.isDark ? 30 : 90
        const e = Ke(r.tertiaryPalette.getHct(r.sourceColorHct.tone), r),
          t = r.tertiaryPalette.getHct(e)
        return qe.fixIfDisliked(t).tone
      },
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.tertiaryContainer, g.tertiary, 15, 'nearer', !1),
    })),
    (g.onTertiaryContainer = E.fromPalette({
      name: 'on_tertiary_container',
      palette: (r) => r.tertiaryPalette,
      tone: (r) =>
        ir(r)
          ? r.isDark
            ? 0
            : 100
          : Ur(r)
            ? E.foregroundTone(g.tertiaryContainer.tone(r), 4.5)
            : r.isDark
              ? 90
              : 10,
      background: (r) => g.tertiaryContainer,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.error = E.fromPalette({
      name: 'error',
      palette: (r) => r.errorPalette,
      tone: (r) => (r.isDark ? 80 : 40),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(3, 4.5, 7, 11),
      toneDeltaPair: (r) => new pr(g.errorContainer, g.error, 15, 'nearer', !1),
    })),
    (g.onError = E.fromPalette({
      name: 'on_error',
      palette: (r) => r.errorPalette,
      tone: (r) => (r.isDark ? 20 : 100),
      background: (r) => g.error,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.errorContainer = E.fromPalette({
      name: 'error_container',
      palette: (r) => r.errorPalette,
      tone: (r) => (r.isDark ? 30 : 90),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.errorContainer, g.error, 15, 'nearer', !1),
    })),
    (g.onErrorContainer = E.fromPalette({
      name: 'on_error_container',
      palette: (r) => r.errorPalette,
      tone: (r) => (r.isDark ? 90 : 10),
      background: (r) => g.errorContainer,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.primaryFixed = E.fromPalette({
      name: 'primary_fixed',
      palette: (r) => r.primaryPalette,
      tone: (r) => (ir(r) ? 40 : 90),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.primaryFixed, g.primaryFixedDim, 10, 'lighter', !0),
    })),
    (g.primaryFixedDim = E.fromPalette({
      name: 'primary_fixed_dim',
      palette: (r) => r.primaryPalette,
      tone: (r) => (ir(r) ? 30 : 80),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.primaryFixed, g.primaryFixedDim, 10, 'lighter', !0),
    })),
    (g.onPrimaryFixed = E.fromPalette({
      name: 'on_primary_fixed',
      palette: (r) => r.primaryPalette,
      tone: (r) => (ir(r) ? 100 : 10),
      background: (r) => g.primaryFixedDim,
      secondBackground: (r) => g.primaryFixed,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.onPrimaryFixedVariant = E.fromPalette({
      name: 'on_primary_fixed_variant',
      palette: (r) => r.primaryPalette,
      tone: (r) => (ir(r) ? 90 : 30),
      background: (r) => g.primaryFixedDim,
      secondBackground: (r) => g.primaryFixed,
      contrastCurve: new Y(3, 4.5, 7, 11),
    })),
    (g.secondaryFixed = E.fromPalette({
      name: 'secondary_fixed',
      palette: (r) => r.secondaryPalette,
      tone: (r) => (ir(r) ? 80 : 90),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.secondaryFixed, g.secondaryFixedDim, 10, 'lighter', !0),
    })),
    (g.secondaryFixedDim = E.fromPalette({
      name: 'secondary_fixed_dim',
      palette: (r) => r.secondaryPalette,
      tone: (r) => (ir(r) ? 70 : 80),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.secondaryFixed, g.secondaryFixedDim, 10, 'lighter', !0),
    })),
    (g.onSecondaryFixed = E.fromPalette({
      name: 'on_secondary_fixed',
      palette: (r) => r.secondaryPalette,
      tone: (r) => 10,
      background: (r) => g.secondaryFixedDim,
      secondBackground: (r) => g.secondaryFixed,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.onSecondaryFixedVariant = E.fromPalette({
      name: 'on_secondary_fixed_variant',
      palette: (r) => r.secondaryPalette,
      tone: (r) => (ir(r) ? 25 : 30),
      background: (r) => g.secondaryFixedDim,
      secondBackground: (r) => g.secondaryFixed,
      contrastCurve: new Y(3, 4.5, 7, 11),
    })),
    (g.tertiaryFixed = E.fromPalette({
      name: 'tertiary_fixed',
      palette: (r) => r.tertiaryPalette,
      tone: (r) => (ir(r) ? 40 : 90),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.tertiaryFixed, g.tertiaryFixedDim, 10, 'lighter', !0),
    })),
    (g.tertiaryFixedDim = E.fromPalette({
      name: 'tertiary_fixed_dim',
      palette: (r) => r.tertiaryPalette,
      tone: (r) => (ir(r) ? 30 : 80),
      isBackground: !0,
      background: (r) => g.highestSurface(r),
      contrastCurve: new Y(1, 1, 3, 7),
      toneDeltaPair: (r) => new pr(g.tertiaryFixed, g.tertiaryFixedDim, 10, 'lighter', !0),
    })),
    (g.onTertiaryFixed = E.fromPalette({
      name: 'on_tertiary_fixed',
      palette: (r) => r.tertiaryPalette,
      tone: (r) => (ir(r) ? 100 : 10),
      background: (r) => g.tertiaryFixedDim,
      secondBackground: (r) => g.tertiaryFixed,
      contrastCurve: new Y(4.5, 7, 11, 21),
    })),
    (g.onTertiaryFixedVariant = E.fromPalette({
      name: 'on_tertiary_fixed_variant',
      palette: (r) => r.tertiaryPalette,
      tone: (r) => (ir(r) ? 90 : 30),
      background: (r) => g.tertiaryFixedDim,
      secondBackground: (r) => g.tertiaryFixed,
      contrastCurve: new Y(3, 4.5, 7, 11),
    }))
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
   */ class mr {
    static fromInt(e) {
      const t = cr.fromInt(e)
      return mr.fromHct(t)
    }
    static fromHct(e) {
      return new mr(e.hue, e.chroma, e)
    }
    static fromHueAndChroma(e, t) {
      return new mr(e, t, mr.createKeyColor(e, t))
    }
    constructor(e, t, n) {
      ;(this.hue = e), (this.chroma = t), (this.keyColor = n), (this.cache = new Map())
    }
    static createKeyColor(e, t) {
      let o = cr.from(e, t, 50),
        a = Math.abs(o.chroma - t)
      for (let i = 1; i < 50; i += 1) {
        if (Math.round(t) === Math.round(o.chroma)) return o
        const c = cr.from(e, t, 50 + i),
          f = Math.abs(c.chroma - t)
        f < a && ((a = f), (o = c))
        const l = cr.from(e, t, 50 - i),
          d = Math.abs(l.chroma - t)
        d < a && ((a = d), (o = l))
      }
      return o
    }
    tone(e) {
      let t = this.cache.get(e)
      return (
        t === void 0 && ((t = cr.from(this.hue, this.chroma, e).toInt()), this.cache.set(e, t)), t
      )
    }
    getHct(e) {
      return cr.fromInt(this.tone(e))
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
   */ class Tr {
    static of(e) {
      return new Tr(e, !1)
    }
    static contentOf(e) {
      return new Tr(e, !0)
    }
    static fromColors(e) {
      return Tr.createPaletteFromColors(!1, e)
    }
    static contentFromColors(e) {
      return Tr.createPaletteFromColors(!0, e)
    }
    static createPaletteFromColors(e, t) {
      const n = new Tr(t.primary, e)
      if (t.secondary) {
        const o = new Tr(t.secondary, e)
        n.a2 = o.a1
      }
      if (t.tertiary) {
        const o = new Tr(t.tertiary, e)
        n.a3 = o.a1
      }
      if (t.error) {
        const o = new Tr(t.error, e)
        n.error = o.a1
      }
      if (t.neutral) {
        const o = new Tr(t.neutral, e)
        n.n1 = o.n1
      }
      if (t.neutralVariant) {
        const o = new Tr(t.neutralVariant, e)
        n.n2 = o.n2
      }
      return n
    }
    constructor(e, t) {
      const n = cr.fromInt(e),
        o = n.hue,
        a = n.chroma
      t
        ? ((this.a1 = mr.fromHueAndChroma(o, a)),
          (this.a2 = mr.fromHueAndChroma(o, a / 3)),
          (this.a3 = mr.fromHueAndChroma(o + 60, a / 2)),
          (this.n1 = mr.fromHueAndChroma(o, Math.min(a / 12, 4))),
          (this.n2 = mr.fromHueAndChroma(o, Math.min(a / 6, 8))))
        : ((this.a1 = mr.fromHueAndChroma(o, Math.max(48, a))),
          (this.a2 = mr.fromHueAndChroma(o, 16)),
          (this.a3 = mr.fromHueAndChroma(o + 60, 24)),
          (this.n1 = mr.fromHueAndChroma(o, 4)),
          (this.n2 = mr.fromHueAndChroma(o, 8))),
        (this.error = mr.fromHueAndChroma(25, 84))
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
   */ function Yt(r) {
    const e = Vt(r),
      t = jt(r),
      n = zt(r),
      o = [e.toString(16), t.toString(16), n.toString(16)]
    for (const [a, i] of o.entries()) i.length === 1 && (o[a] = '0' + i)
    return '#' + o.join('')
  }
  function xe(r) {
    r = r.replace('#', '')
    const e = r.length === 3,
      t = r.length === 6,
      n = r.length === 8
    if (!e && !t && !n) throw new Error('unexpected hex ' + r)
    let o = 0,
      a = 0,
      i = 0
    return (
      e
        ? ((o = Ar(r.slice(0, 1).repeat(2))),
          (a = Ar(r.slice(1, 2).repeat(2))),
          (i = Ar(r.slice(2, 3).repeat(2))))
        : t
          ? ((o = Ar(r.slice(0, 2))), (a = Ar(r.slice(2, 4))), (i = Ar(r.slice(4, 6))))
          : n && ((o = Ar(r.slice(2, 4))), (a = Ar(r.slice(4, 6))), (i = Ar(r.slice(6, 8)))),
      ((255 << 24) | ((o & 255) << 16) | ((a & 255) << 8) | (i & 255)) >>> 0
    )
  }
  function Ar(r) {
    return parseInt(r, 16)
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
   */ function xa(r, e) {
    let t = e.value
    const o = Tr.of(t).a1
    return {
      color: e,
      value: t,
      light: {
        color: o.tone(40),
        onColor: o.tone(100),
        colorContainer: o.tone(90),
        onColorContainer: o.tone(10),
      },
      dark: {
        color: o.tone(80),
        onColor: o.tone(20),
        colorContainer: o.tone(30),
        onColorContainer: o.tone(90),
      },
    }
  }
  var D = ((r) => (
    (r[(r.Hover = 0.08)] = 'Hover'),
    (r[(r.Focus = 0.12)] = 'Focus'),
    (r[(r.Press = 0.12)] = 'Press'),
    (r[(r.Drag = 0.16)] = 'Drag'),
    r
  ))(D || {})
  const I = (r, e, t) => Yt(Ge.cam16Ucs(xe(e), xe(t), r)),
    Xe = (r, e, t, n) => ({
      props: { variant: r, color: e },
      style: {
        backgroundColor: t,
        color: n,
        '&:hover': { backgroundColor: I(D.Hover, t, n) },
        '&:focus': { backgroundColor: I(D.Focus, t, n) },
        '&:active': { backgroundColor: I(D.Press, t, n) },
      },
    }),
    ka = (r, e, t, n) => ({
      props: { variant: 'outlined', color: r },
      style: {
        color: e,
        '&:hover': { backgroundColor: I(D.Hover, t, e), borderColor: I(D.Hover, n, e) },
        '&:focus': { backgroundColor: I(D.Focus, t, e), borderColor: I(D.Focus, e, e) },
        '&:active': { backgroundColor: I(D.Press, t, e), borderColor: I(D.Press, n, e) },
      },
    }),
    Je = (r) => [
      {
        props: { variant: r, size: 'small' },
        style: { padding: '4px 10px', fontSize: '0.8125rem', minHeight: '32px' },
      },
      {
        props: { variant: r, size: 'medium' },
        style: { padding: '6px 16px', fontSize: '0.875rem', minHeight: '36px' },
      },
      {
        props: { variant: r, size: 'large' },
        style: { padding: '8px 22px', fontSize: '0.9375rem', minHeight: '40px' },
      },
    ],
    va = (r, e, t) => ({
      props: { variant: 'text', color: r },
      style: {
        color: e,
        '&:hover': { backgroundColor: I(D.Hover, t, e) },
        '&:focus': { backgroundColor: I(D.Focus, t, e) },
        '&:active': { backgroundColor: I(D.Press, t, e) },
      },
    }),
    Pa = ({ palette: r, shadows: e }) => {
      const n = [
          ['primary', r.primary.main, r.onPrimary.main],
          ['secondary', r.secondary.main, r.onSecondary.main],
          ['tertiary', r.tertiary.main, r.onTertiary.main],
          ['error', r.error.main, r.onError.main],
          ['info', r.info.main, r.onInfo.main],
          ['success', r.success.main, r.onSuccess.main],
          ['warning', r.warning.main, r.onWarning.main],
        ].map((u) => Xe('filled', ...u)),
        o = Je('filled'),
        i = [
          ['primary', r.primaryContainer.main, r.onPrimaryContainer.main],
          ['secondary', r.secondaryContainer.main, r.onSecondaryContainer.main],
          ['tertiary', r.tertiaryContainer.main, r.onTertiaryContainer.main],
          ['error', r.errorContainer.main, r.onErrorContainer.main],
          ['info', r.infoContainer.main, r.onInfoContainer.main],
          ['success', r.successContainer.main, r.onSuccessContainer.main],
          ['warning', r.warningContainer.main, r.onWarningContainer.main],
        ].map((u) => Xe('tonal', ...u)),
        c = Je('tonal'),
        l = [
          ['primary', r.primary.main, r.surface.main, r.outline.main],
          ['secondary', r.secondary.main, r.surface.main, r.outline.main],
          ['tertiary', r.tertiary.main, r.surface.main, r.outline.main],
          ['error', r.error.main, r.surface.main, r.outline.main],
          ['info', r.info.main, r.surface.main, r.outline.main],
          ['success', r.success.main, r.surface.main, r.outline.main],
          ['warning', r.warning.main, r.surface.main, r.outline.main],
        ].map((u) => ka(...u)),
        m = [
          ['primary', r.surfaceContainerLow.main, r.primary.main],
          ['secondary', r.surfaceContainerLow.main, r.secondary.main],
          ['tertiary', r.surfaceContainerLow.main, r.tertiary.main],
          ['error', r.surfaceContainerLow.main, r.error.main],
          ['info', r.surfaceContainerLow.main, r.info.main],
          ['success', r.surfaceContainerLow.main, r.success.main],
          ['warning', r.surfaceContainerLow.main, r.warning.main],
        ].map((u) => Xe('elevated', ...u)),
        h = Je('elevated'),
        b = [
          ['primary', r.primary.main, r.surface.main],
          ['secondary', r.secondary.main, r.surface.main],
          ['tertiary', r.tertiary.main, r.surface.main],
          ['error', r.error.main, r.surface.main],
          ['info', r.info.main, r.surface.main],
          ['success', r.success.main, r.surface.main],
          ['warning', r.warning.main, r.surface.main],
        ].map((u) => va(...u))
      return {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '30px',
              textTransform: 'none',
              '&:has(>svg)': {
                padding: '8px',
                borderRadius: '50%',
                minWidth: '1em',
                minHeight: '1em',
              },
            },
          },
          variants: [
            {
              props: { variant: 'filled' },
              style: {
                boxShadow: e[0],
                '&.Mui-disabled': {
                  backgroundColor: dr(r.onSurface.main, 0.12),
                  color: dr(r.onSurface.main, 0.38),
                  boxShadow: e[0],
                },
                '&:hover': { boxShadow: e[1] },
                '&:focus': { boxShadow: e[0] },
                '&:active': { boxShadow: e[0] },
              },
            },
            ...n,
            ...o,
            {
              props: { variant: 'tonal' },
              style: {
                boxShadow: e[0],
                '&.Mui-disabled': {
                  backgroundColor: dr(r.onSurface.main, 0.12),
                  color: dr(r.onSurface.main, 0.38),
                  boxShadow: e[0],
                },
                '&:hover': { boxShadow: e[1] },
                '&:focus': { boxShadow: e[0] },
                '&:active': { boxShadow: e[0] },
              },
            },
            ...i,
            ...c,
            {
              props: { variant: 'outlined' },
              style: {
                borderColor: r.outline.main,
                borderWidth: '1px',
                boxShadow: e[0],
                '&.Mui-disabled': {
                  borderColor: dr(r.onSurface.main, 0.12),
                  color: dr(r.onSurface.main, 0.38),
                },
              },
            },
            ...l,
            {
              props: { variant: 'elevated' },
              style: {
                boxShadow: e[1],
                backgroundColor: r.surfaceContainerLow.main,
                '&.Mui-disabled': {
                  backgroundColor: dr(r.onSurface.main, 0.12),
                  color: dr(r.onSurface.main, 0.38),
                  boxShadow: e[0],
                },
              },
            },
            ...m,
            ...h,
            {
              props: { variant: 'text' },
              style: {
                backgroundColor: 'transparent',
                boxShadow: e[0],
                padding: '5px 15px',
                '&.Mui-disabled': { color: dr(r.onSurface.main, 0.38) },
              },
            },
            ...b,
          ],
        },
      }
    },
    wa = ({ palette: r, shadows: e, transitions: t }) => ({
      MuiCard: {
        styleOverrides: { root: { borderRadius: '20px' } },
        variants: [
          {
            props: { variant: 'elevation' },
            style: {
              boxShadow: e[1],
              backgroundColor: r.surfaceContainerLow.main,
              transition: t.create(['background-color', 'box-shadow', 'border-color', 'color'], {
                duration: t.duration.short,
              }),
              '&:hover': {
                background: I(D.Hover, r.surfaceContainerLow.main, r.primary.main),
                boxShadow: e[2],
              },
              '&:focus': {
                boxShadow: e[1],
                background: I(D.Focus, r.surfaceContainerLow.main, r.primary.main),
              },
              '&:active': {
                boxShadow: e[1],
                background: I(D.Press, r.surfaceContainerLow.main, r.primary.main),
              },
              '&.Mui-disabled': {
                backgroundColor: dr(r.surfaceContainerLow.main, 0.38),
                color: r.surfaceVariant.main,
                boxShadow: e[0],
              },
            },
          },
          {
            props: { variant: 'filled' },
            style: {
              boxShadow: e[0],
              backgroundColor: r.surfaceContainerHighest.main,
              transition: t.create(['background-color', 'box-shadow', 'border-color', 'color'], {
                duration: t.duration.short,
              }),
              '&:hover': {
                background: I(D.Hover, r.surfaceContainerHighest.main, r.primary.main),
                boxShadow: e[1],
              },
              '&:focus': {
                boxShadow: e[0],
                background: I(D.Focus, r.surfaceContainerHighest.main, r.primary.main),
              },
              '&:active': {
                boxShadow: e[1],
                background: I(D.Press, r.surfaceContainerHighest.main, r.primary.main),
              },
              '&.Mui-disabled': {
                backgroundColor: dr(r.surfaceContainerHighest.main, 0.38),
                color: r.surfaceVariant.main,
                boxShadow: e[1],
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              boxShadow: e[0],
              backgroundColor: r.surface.main,
              borderColor: r.outline.main,
              transition: t.create(['background-color', 'box-shadow', 'border-color', 'color'], {
                duration: t.duration.short,
              }),
              '&:hover': {
                background: I(D.Hover, r.surface.main, r.primary.main),
                boxShadow: e[1],
              },
              '&:focus': {
                boxShadow: e[0],
                background: I(D.Focus, r.surface.main, r.primary.main),
              },
              '&:active': {
                boxShadow: e[2],
                background: I(D.Press, r.surfaceContainerHighest.main, r.primary.main),
              },
              '&.Mui-disabled': {
                borderColor: dr(r.surfaceContainerHighest.main, 0.12),
                boxShadow: e[0],
              },
            },
          },
        ],
      },
    }),
    Aa = (r) => ({
      MuiCssBaseline: {
        defaultProps: { enableColorScheme: !0 },
        styleOverrides: { '*::-webkit-scrollbar': { display: 'none' } },
      },
    }),
    Ma = ({ palette: r }) => ({
      MuiDrawer: {
        styleOverrides: {
          paper: {
            border: '0px',
            background: r.surfaceContainer.main,
            color: r.onSurfaceVariant.main,
          },
        },
      },
    }),
    Da = ({ palette: r, shadows: e }) => ({
      MuiFab: {
        defaultProps: { color: 'secondary' },
        styleOverrides: { root: { boxShadow: e[3], borderRadius: '18px' } },
        variants: [
          {
            props: { color: 'primary' },
            style: {
              backgroundColor: r.primaryContainer.main,
              color: r.onPrimaryContainer.main,
              '&:hover': {
                background: I(D.Hover, r.primaryContainer.main, r.onPrimaryContainer.main),
                boxShadow: e[4],
              },
              '&:focus': {
                background: I(D.Focus, r.primaryContainer.main, r.onPrimaryContainer.main),
                boxShadow: e[3],
              },
              '&:active': {
                background: I(D.Press, r.primaryContainer.main, r.onPrimaryContainer.main),
                boxShadow: e[3],
              },
            },
          },
          {
            props: { color: 'secondary' },
            style: {
              backgroundColor: r.secondaryContainer.main,
              color: r.onSecondaryContainer.main,
              '&:hover': {
                background: I(D.Hover, r.secondaryContainer.main, r.onSecondaryContainer.main),
                boxShadow: e[4],
              },
              '&:focus': {
                background: I(D.Focus, r.secondaryContainer.main, r.onSecondaryContainer.main),
                boxShadow: e[3],
              },
              '&:active': {
                background: I(D.Press, r.secondaryContainer.main, r.onSecondaryContainer.main),
                boxShadow: e[3],
              },
            },
          },
          {
            props: { color: 'surface' },
            style: {
              backgroundColor: r.surfaceContainer.main,
              color: r.primary.main,
              '&:hover': {
                background: I(D.Hover, r.surfaceContainer.main, r.primary.main),
                boxShadow: e[4],
              },
              '&:focus': {
                background: I(D.Focus, r.surfaceContainer.main, r.primary.main),
                boxShadow: e[3],
              },
              '&:active': {
                background: I(D.Press, r.surfaceContainer.main, r.primary.main),
                boxShadow: e[3],
              },
            },
          },
          {
            props: { color: 'tertiary' },
            style: {
              backgroundColor: r.tertiaryContainer.main,
              color: r.onTertiaryContainer.main,
              '&:hover': {
                background: I(D.Hover, r.tertiaryContainer.main, r.onTertiaryContainer.main),
                boxShadow: e[4],
              },
              '&:focus': {
                background: I(D.Focus, r.tertiaryContainer.main, r.onTertiaryContainer.main),
                boxShadow: e[3],
              },
              '&:active': {
                background: I(D.Press, r.tertiaryContainer.main, r.onTertiaryContainer.main),
                boxShadow: e[3],
              },
            },
          },
        ],
      },
    }),
    Oa = (r) => ({
      MuiListItem: {
        styleOverrides: {
          root: {
            paddingTop: 1,
            paddingBottom: 1,
            '& .MuiListItemButton-root': { paddingTop: 8, paddingBottom: 8 },
          },
        },
      },
    }),
    Ia = ({ palette: r }) => ({
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 50,
            color: r.onSurfaceVariant.main,
            '&:hover': {
              backgroundColor: I(D.Hover, r.surfaceContainerLow.main, r.onSurface.main),
              color: I(D.Hover, r.onSurfaceVariant.main, r.onSurface.main),
            },
            '&:active': {
              backgroundColor: I(D.Press, r.surfaceContainerLow.main, r.onSecondaryContainer.main),
              color: I(D.Press, r.onSurfaceVariant.main, r.onSurface.main),
            },
            '&.Mui-selected': {
              color: r.onSecondaryContainer.main,
              background: r.secondaryContainer.main,
              '& > .MuiListItemText-root > .MuiTypography-root': { fontWeight: 'bold' },
              '&:hover': {
                backgroundColor: I(D.Hover, r.secondaryContainer.main, r.onSecondaryContainer.main),
                color: I(D.Hover, r.onSecondaryContainer.main, r.secondaryContainer.main),
              },
              '&:active': {
                backgroundColor: I(D.Press, r.secondaryContainer.main, r.onSecondaryContainer.main),
                color: I(D.Press, r.onSecondaryContainer.main, r.secondaryContainer.main),
              },
            },
          },
        },
      },
    }),
    Ra = (r) => ({
      MuiListItemIcon: {
        styleOverrides: {
          root: { color: 'inherit', minWidth: 32, '&.Mui-selected': { fontWeight: 'bold' } },
        },
      },
    }),
    Ba = ({ palette: r, shadows: e }) => ({
      MuiMenu: {
        defaultProps: { color: 'default' },
        styleOverrides: {
          root: {},
          paper: {
            backgroundColor: r.surfaceContainerLow.main,
            boxShadow: e[3],
            color: r.onSurface.main,
          },
        },
      },
    }),
    _a = (r, e, t) => ({
      props: { color: r },
      style: {
        '& .MuiSwitch-switchBase': {
          '&.Mui-checked': {
            '& + .MuiSwitch-track': { backgroundColor: e },
            '& .MuiSwitch-thumb': { color: t },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': { color: e, border: `6px solid ${t}` },
        },
      },
    }),
    $a = ({ palette: r }) => ({
      MuiSwitch: {
        variants: [
          ...[
            ['primary', r.primary.main, r.onPrimary.main],
            ['secondary', r.secondary.main, r.onSecondary.main],
            ['error', r.error.main, r.onError.main],
            ['info', r.info.main, r.onInfo.main],
            ['success', r.success.main, r.onSuccess.main],
            ['warning', r.warning.main, r.onWarning.main],
            ['default', r.primary.main, r.onPrimary.main],
          ].map((n) => _a(...n)),
        ],
        styleOverrides: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
            marginLeft: 12,
            marginRight: 8,
            borderColor: r.outline.main,
            '& .MuiSwitch-switchBase': {
              padding: 0,
              margin: 7,
              transitionDuration: '100ms',
              '&.Mui-checked': {
                transform: 'translateX(16px)',
                margin: 4,
                '& + .MuiSwitch-track': { opacity: 1, border: 0 },
                '& .MuiSwitch-thumb': { width: 18, height: 18 },
                '&.Mui-disabled + .MuiSwitch-track': { backgroundColor: dr(r.onSurface.main, 0.1) },
                '&.Mui-disabled .MuiSwitch-thumb': { color: dr(r.surface.main, 0.8) },
              },
              '&.Mui-disabled .MuiSwitch-thumb': { color: dr(r.onSurface.main, 0.3) },
            },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              color: r.outline.main,
              width: 12,
              height: 12,
              '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              },
            },
            '& .MuiSwitch-track': {
              borderRadius: 20,
              border: `2px solid ${r.outline.main}`,
              backgroundColor: r.surfaceContainerHighest.main,
              opacity: 1,
              transition: 'background .2s',
            },
          },
        },
      },
    }),
    La = ({ palette: r }) => ({
      MuiToggleButton: {
        styleOverrides: {
          root: {
            borderRadius: '50px',
            textTransform: 'none',
            color: r.onSurface.main,
            '&.Mui-selected': {
              color: r.onSecondaryContainer.main,
              backgroundColor: r.secondaryContainer.main,
            },
            '&.MuiToggleButton-primary': { borderColor: 'transparent' },
            '&.MuiToggleButton-primary.Mui-selected': {
              color: r.onPrimary.main,
              backgroundColor: r.primary.main,
            },
          },
        },
      },
    }),
    Na = ({ palette: r }) => ({
      MuiToggleButtonGroup: {
        styleOverrides: {
          grouped: {
            borderRadius: '50px',
            borderColor: r.outline.main,
            '&:not(:first-of-type)': { marginLeft: 0, borderLeft: 0 },
            '&:hover': { background: I(D.Hover, r.surface.main, r.primary.main) },
            '&.Mui-selected:hover': {
              background: I(D.Hover, r.secondaryContainer.main, r.onSecondaryContainer.main),
            },
          },
        },
      },
    }),
    Va = ({ palette: r }) => ({
      MuiTooltip: {
        styleOverrides: {
          tooltip: { background: r.inverseSurface.main, color: r.inverseOnSurface.main },
        },
      },
    }),
    ja = (r) => ({
      ...Aa(),
      ...sa(r),
      ...ca(r),
      ...ua(r),
      ...fa(r),
      ...Pa(r),
      ...wa(r),
      ...Ma(r),
      ...Da(r),
      ...Oa(),
      ...Ia(r),
      ...Ra(),
      ...Ba(r),
      ...$a(r),
      ...La(r),
      ...Na(r),
      ...Va(r),
    }),
    za = (r, e) => {
      const {
        primary: t,
        onPrimary: n,
        primaryContainer: o,
        onPrimaryContainer: a,
        secondary: i,
        onSecondary: c,
        secondaryContainer: f,
        onSecondaryContainer: l,
        tertiary: d,
        onTertiary: m,
        tertiaryContainer: h,
        onTertiaryContainer: C,
        error: b,
        onError: u,
        errorContainer: T,
        onErrorContainer: w,
        background: R,
        onBackground: S,
        surface: x,
        onSurface: p,
        surfaceVariant: V,
        onSurfaceVariant: B,
        outline: G,
        outlineVariant: H,
        shadow: s,
        scrim: v,
        inverseSurface: O,
        inverseOnSurface: U,
        inversePrimary: er,
        primaryFixed: gr,
        onPrimaryFixed: lr,
        primaryFixedDim: fr,
        onPrimaryFixedVariant: kr,
        secondaryFixed: Mr,
        onSecondaryFixed: F,
        secondaryFixedDim: P,
        onSecondaryFixedVariant: $,
        tertiaryFixed: _,
        onTertiaryFixed: M,
        tertiaryFixedDim: j,
        onTertiaryFixedVariant: L,
        surfaceTint: N,
        surfaceDim: z,
        surfaceBright: q,
        surfaceContainerLowest: W,
        surfaceContainerLow: hr,
        surfaceContainer: k,
        surfaceContainerHigh: Er,
        surfaceContainerHighest: Hr,
        info: oe,
        onInfo: Ht,
        infoContainer: Gt,
        onInfoContainer: qt,
        success: Kt,
        onSuccess: Xt,
        successContainer: Jt,
        onSuccessContainer: Qt,
        warning: Zt,
        onWarning: rn,
        warningContainer: en,
        onWarningContainer: tn,
      } = e
      return {
        mode: r,
        primary: { main: t, contrastText: n },
        onPrimary: { main: n, contrastText: t },
        primaryContainer: { main: o, contrastText: a },
        onPrimaryContainer: { main: a, contrastText: o },
        secondary: { main: i, contrastText: c },
        onSecondary: { main: c, contrastText: i },
        secondaryContainer: { main: f, contrastText: l },
        onSecondaryContainer: { main: l, contrastText: f },
        tertiary: { main: d, contrastText: m },
        onTertiary: { main: m, contrastText: d },
        tertiaryContainer: { main: h, contrastText: C },
        onTertiaryContainer: { main: C, contrastText: h },
        error: { main: b, contrastText: u },
        onError: { main: u, contrastText: b },
        errorContainer: { main: T, contrastText: w },
        onErrorContainer: { main: w, contrastText: T },
        primaryFixed: { main: gr },
        primaryFixedDim: { main: fr },
        onPrimaryFixed: { main: lr },
        onPrimaryFixedVariant: { main: kr },
        secondaryFixed: { main: Mr },
        secondaryFixedDim: { main: P },
        onSecondaryFixed: { main: F },
        onSecondaryFixedVariant: { main: $ },
        tertiaryFixed: { main: _ },
        tertiaryFixedDim: { main: j },
        onTertiaryFixed: { main: M },
        onTertiaryFixedVariant: { main: L },
        surface: { main: x, contrastText: p },
        onSurface: { main: p, contrastText: x },
        surfaceDim: { main: z },
        surfaceBright: { main: q },
        surfaceContainerLowest: { main: W },
        surfaceContainerLow: { main: hr },
        surfaceContainer: { main: k },
        surfaceContainerHigh: { main: Er },
        surfaceContainerHighest: { main: Hr },
        surfaceVariant: { main: V, contrastText: B },
        onSurfaceVariant: { main: B, contrastText: V },
        outline: { main: G },
        outlineVariant: { main: H },
        inversePrimary: { main: er },
        inverseSurface: { main: O, contrastText: O },
        inverseOnSurface: { main: U, contrastText: O },
        shadow: { main: s },
        scrim: { main: v },
        surfaceTint: { main: N },
        background: { default: k, paper: x },
        onBackground: { main: p },
        common: { white: R, black: S },
        text: { primary: p, secondary: l },
        info: { main: oe, contrastText: Ht },
        onInfo: { main: Ht, contrastText: oe },
        infoContainer: { main: Gt, contrastText: qt },
        onInfoContainer: { main: qt, contrastText: Gt },
        success: { main: Kt, contrastText: Xt },
        onSuccess: { main: Xt, contrastText: Kt },
        successContainer: { main: Jt, contrastText: Qt },
        onSuccessContainer: { main: Qt, contrastText: Jt },
        warning: { main: Zt, contrastText: rn },
        onWarning: { main: rn, contrastText: Zt },
        warningContainer: { main: en, contrastText: tn },
        onWarningContainer: { main: tn, contrastText: en },
        divider: G,
      }
    },
    Qe = (r, e, t) => {
      const n = { name: e, value: xe(t), blend: !1 },
        o = xa(xe('#000000'), n)[r]
      return Object.entries(o).reduce((i, [c, f]) => ({ ...i, [c]: Yt(f) }), {})
    },
    Wa = (r, e, { info: t, success: n, warning: o } = ia) => {
      const a = Qe(r, 'info', t),
        i = Qe(r, 'success', n),
        c = Qe(r, 'warning', o)
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
        warning: c.color,
        onWarning: c.onColor,
        warningContainer: c.colorContainer,
        onWarningContainer: c.onColorContainer,
      }
    },
    Ut = (r, e = Lt.schemes[r], t, n) => {
      const o = Wa(r, e, n),
        a = za(r, o),
        i = $t({ ...t, palette: a }),
        c = ja(i)
      return $t(i, { components: c })
    },
    Ya = (r, e = Lt.schemes[r], t, n) => Ut(r, e, t, n)
  ;(Dr.createCompatibleTheme = Ya),
    (Dr.createMaterialYouTheme = Ut),
    Object.defineProperty(Dr, Symbol.toStringTag, { value: 'Module' })
})

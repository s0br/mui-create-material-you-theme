import * as Rn from 'react'
const Zr = {
    black: '#000',
    white: '#fff',
  },
  Lr = {
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    700: '#d32f2f',
    800: '#c62828',
  },
  Nr = {
    50: '#f3e5f5',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    700: '#7b1fa2',
  },
  Vr = {
    50: '#e3f2fd',
    200: '#90caf9',
    400: '#42a5f5',
    700: '#1976d2',
    800: '#1565c0',
  },
  jr = {
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    700: '#0288d1',
    900: '#01579b',
  },
  Wr = {
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
  Gr = {
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    700: '#f57c00',
    900: '#e65100',
  },
  et = {
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
function Ir(r, ...e) {
  const n = new URL(`https://mui.com/production-error/?code=${r}`)
  return (
    e.forEach((t) => n.searchParams.append('args[]', t)),
    `Minified MUI error #${r}; visit ${n} for the full message.`
  )
}
function nt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r
}
var te = { exports: {} },
  K = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un
function tt() {
  if (un) return K
  un = 1
  var r = typeof Symbol == 'function' && Symbol.for,
    e = r ? Symbol.for('react.element') : 60103,
    n = r ? Symbol.for('react.portal') : 60106,
    t = r ? Symbol.for('react.fragment') : 60107,
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
    I = r ? Symbol.for('react.scope') : 60119
  function S(p) {
    if (typeof p == 'object' && p !== null) {
      var V = p.$$typeof
      switch (V) {
        case e:
          switch (((p = p.type), p)) {
            case f:
            case l:
            case t:
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
        case n:
          return V
      }
    }
  }
  function E(p) {
    return S(p) === l
  }
  return (
    (K.AsyncMode = f),
    (K.ConcurrentMode = l),
    (K.ContextConsumer = c),
    (K.ContextProvider = i),
    (K.Element = e),
    (K.ForwardRef = d),
    (K.Fragment = t),
    (K.Lazy = b),
    (K.Memo = C),
    (K.Portal = n),
    (K.Profiler = a),
    (K.StrictMode = o),
    (K.Suspense = m),
    (K.isAsyncMode = function (p) {
      return E(p) || S(p) === f
    }),
    (K.isConcurrentMode = E),
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
      return S(p) === t
    }),
    (K.isLazy = function (p) {
      return S(p) === b
    }),
    (K.isMemo = function (p) {
      return S(p) === C
    }),
    (K.isPortal = function (p) {
      return S(p) === n
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
        p === t ||
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
            p.$$typeof === I ||
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
 */
var fn
function ot() {
  return (
    fn ||
      ((fn = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          var r = typeof Symbol == 'function' && Symbol.for,
            e = r ? Symbol.for('react.element') : 60103,
            n = r ? Symbol.for('react.portal') : 60106,
            t = r ? Symbol.for('react.fragment') : 60107,
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
            I = r ? Symbol.for('react.scope') : 60119
          function S(k) {
            return (
              typeof k == 'string' ||
              typeof k == 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
              k === t ||
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
                  k.$$typeof === I ||
                  k.$$typeof === u))
            )
          }
          function E(k) {
            if (typeof k == 'object' && k !== null) {
              var Fr = k.$$typeof
              switch (Fr) {
                case e:
                  var $r = k.type
                  switch ($r) {
                    case f:
                    case l:
                    case t:
                    case a:
                    case o:
                    case m:
                      return $r
                    default:
                      var Hr = $r && $r.$$typeof
                      switch (Hr) {
                        case c:
                        case d:
                        case b:
                        case C:
                        case i:
                          return Hr
                        default:
                          return Fr
                      }
                  }
                case n:
                  return Fr
              }
            }
          }
          var p = f,
            V = l,
            B = c,
            G = i,
            H = e,
            s = d,
            v = t,
            D = b,
            U = C,
            er = n,
            gr = a,
            lr = o,
            sr = m,
            xr = !1
          function Pr(k) {
            return (
              xr ||
                ((xr = !0),
                console.warn(
                  'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.',
                )),
              F(k) || E(k) === f
            )
          }
          function F(k) {
            return E(k) === l
          }
          function P(k) {
            return E(k) === c
          }
          function $(k) {
            return E(k) === i
          }
          function R(k) {
            return typeof k == 'object' && k !== null && k.$$typeof === e
          }
          function M(k) {
            return E(k) === d
          }
          function j(k) {
            return E(k) === t
          }
          function L(k) {
            return E(k) === b
          }
          function N(k) {
            return E(k) === C
          }
          function W(k) {
            return E(k) === n
          }
          function q(k) {
            return E(k) === a
          }
          function z(k) {
            return E(k) === o
          }
          function dr(k) {
            return E(k) === m
          }
          ;(X.AsyncMode = p),
            (X.ConcurrentMode = V),
            (X.ContextConsumer = B),
            (X.ContextProvider = G),
            (X.Element = H),
            (X.ForwardRef = s),
            (X.Fragment = v),
            (X.Lazy = D),
            (X.Memo = U),
            (X.Portal = er),
            (X.Profiler = gr),
            (X.StrictMode = lr),
            (X.Suspense = sr),
            (X.isAsyncMode = Pr),
            (X.isConcurrentMode = F),
            (X.isContextConsumer = P),
            (X.isContextProvider = $),
            (X.isElement = R),
            (X.isForwardRef = M),
            (X.isFragment = j),
            (X.isLazy = L),
            (X.isMemo = N),
            (X.isPortal = W),
            (X.isProfiler = q),
            (X.isStrictMode = z),
            (X.isSuspense = dr),
            (X.isValidElementType = S),
            (X.typeOf = E)
        })()),
    X
  )
}
var ln
function _n() {
  return (
    ln ||
      ((ln = 1), process.env.NODE_ENV === 'production' ? (te.exports = tt()) : (te.exports = ot())),
    te.exports
  )
}
var oe = { exports: {} }
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ee, dn
function at() {
  if (dn) return Ee
  dn = 1
  var r = Object.getOwnPropertySymbols,
    e = Object.prototype.hasOwnProperty,
    n = Object.prototype.propertyIsEnumerable
  function t(a) {
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
    (Ee = o()
      ? Object.assign
      : function (a, i) {
          for (var c, f = t(a), l, d = 1; d < arguments.length; d++) {
            c = Object(arguments[d])
            for (var m in c) e.call(c, m) && (f[m] = c[m])
            if (r) {
              l = r(c)
              for (var h = 0; h < l.length; h++) n.call(c, l[h]) && (f[l[h]] = c[l[h]])
            }
          }
          return f
        }),
    Ee
  )
}
var xe, mn
function Ne() {
  if (mn) return xe
  mn = 1
  var r = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  return (xe = r), xe
}
var ke, hn
function $n() {
  return hn || ((hn = 1), (ke = Function.call.bind(Object.prototype.hasOwnProperty))), ke
}
var ve, gn
function it() {
  if (gn) return ve
  gn = 1
  var r = function () {}
  if (process.env.NODE_ENV !== 'production') {
    var e = /* @__PURE__ */ Ne(),
      n = {},
      t = /* @__PURE__ */ $n()
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
        if (t(a, d)) {
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
            m instanceof Error && !(m.message in n))
          ) {
            n[m.message] = !0
            var C = l ? l() : ''
            r('Failed ' + c + ' type: ' + m.message + (C ?? ''))
          }
        }
    }
  }
  return (
    (o.resetWarningCache = function () {
      process.env.NODE_ENV !== 'production' && (n = {})
    }),
    (ve = o),
    ve
  )
}
var Pe, yn
function st() {
  if (yn) return Pe
  yn = 1
  var r = _n(),
    e = at(),
    n = /* @__PURE__ */ Ne(),
    t = /* @__PURE__ */ $n(),
    o = /* @__PURE__ */ it(),
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
    (Pe = function (c, f) {
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
          any: I(),
          arrayOf: S,
          element: E(),
          elementType: p(),
          instanceOf: V,
          node: s(),
          objectOf: G,
          oneOf: B,
          oneOfType: H,
          shape: D,
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
        function R(j, L, N, W, q, z, dr) {
          if (((W = W || h), (z = z || N), dr !== n)) {
            if (f) {
              var k = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
              )
              throw ((k.name = 'Invariant Violation'), k)
            } else if (process.env.NODE_ENV !== 'production' && typeof console < 'u') {
              var Fr = W + ':' + N
              !P[Fr] && // Avoid spamming the console because they are often not actionable except for lib authors
                $ < 3 &&
                (a(
                  'You are manually calling a React.PropTypes validation function for the `' +
                    z +
                    '` prop on `' +
                    W +
                    '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                ),
                (P[Fr] = !0),
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
                      z +
                      '` is marked as required ' +
                      ('in `' + W + '`, but its value is `null`.'),
                  )
                : new u(
                    'The ' +
                      q +
                      ' `' +
                      z +
                      '` is marked as required in ' +
                      ('`' + W + '`, but its value is `undefined`.'),
                  )
              : null
            : F(L, N, W, q, z)
        }
        var M = R.bind(null, !1)
        return (M.isRequired = R.bind(null, !0)), M
      }
      function w(F) {
        function P($, R, M, j, L, N) {
          var W = $[R],
            q = lr(W)
          if (q !== F) {
            var z = sr(W)
            return new u(
              'Invalid ' +
                j +
                ' `' +
                L +
                '` of type ' +
                ('`' + z + '` supplied to `' + M + '`, expected ') +
                ('`' + F + '`.'),
              { expectedType: F },
            )
          }
          return null
        }
        return T(P)
      }
      function I() {
        return T(i)
      }
      function S(F) {
        function P($, R, M, j, L) {
          if (typeof F != 'function')
            return new u(
              'Property `' +
                L +
                '` of component `' +
                M +
                '` has invalid PropType notation inside arrayOf.',
            )
          var N = $[R]
          if (!Array.isArray(N)) {
            var W = lr(N)
            return new u(
              'Invalid ' +
                j +
                ' `' +
                L +
                '` of type ' +
                ('`' + W + '` supplied to `' + M + '`, expected an array.'),
            )
          }
          for (var q = 0; q < N.length; q++) {
            var z = F(N, q, M, j, L + '[' + q + ']', n)
            if (z instanceof Error) return z
          }
          return null
        }
        return T(P)
      }
      function E() {
        function F(P, $, R, M, j) {
          var L = P[$]
          if (!c(L)) {
            var N = lr(L)
            return new u(
              'Invalid ' +
                M +
                ' `' +
                j +
                '` of type ' +
                ('`' + N + '` supplied to `' + R + '`, expected a single ReactElement.'),
            )
          }
          return null
        }
        return T(F)
      }
      function p() {
        function F(P, $, R, M, j) {
          var L = P[$]
          if (!r.isValidElementType(L)) {
            var N = lr(L)
            return new u(
              'Invalid ' +
                M +
                ' `' +
                j +
                '` of type ' +
                ('`' + N + '` supplied to `' + R + '`, expected a single ReactElement type.'),
            )
          }
          return null
        }
        return T(F)
      }
      function V(F) {
        function P($, R, M, j, L) {
          if (!($[R] instanceof F)) {
            var N = F.name || h,
              W = Pr($[R])
            return new u(
              'Invalid ' +
                j +
                ' `' +
                L +
                '` of type ' +
                ('`' + W + '` supplied to `' + M + '`, expected ') +
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
        function P($, R, M, j, L) {
          for (var N = $[R], W = 0; W < F.length; W++) if (b(N, F[W])) return null
          var q = JSON.stringify(F, function (dr, k) {
            var Fr = sr(k)
            return Fr === 'symbol' ? String(k) : k
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
        function P($, R, M, j, L) {
          if (typeof F != 'function')
            return new u(
              'Property `' +
                L +
                '` of component `' +
                M +
                '` has invalid PropType notation inside objectOf.',
            )
          var N = $[R],
            W = lr(N)
          if (W !== 'object')
            return new u(
              'Invalid ' +
                j +
                ' `' +
                L +
                '` of type ' +
                ('`' + W + '` supplied to `' + M + '`, expected an object.'),
            )
          for (var q in N)
            if (t(N, q)) {
              var z = F(N, q, M, j, L + '.' + q, n)
              if (z instanceof Error) return z
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
                  xr($) +
                  ' at index ' +
                  P +
                  '.',
              ),
              i
            )
        }
        function R(M, j, L, N, W) {
          for (var q = [], z = 0; z < F.length; z++) {
            var dr = F[z],
              k = dr(M, j, L, N, W, n)
            if (k == null) return null
            k.data && t(k.data, 'expectedType') && q.push(k.data.expectedType)
          }
          var Fr = q.length > 0 ? ', expected one of type [' + q.join(', ') + ']' : ''
          return new u('Invalid ' + N + ' `' + W + '` supplied to ' + ('`' + L + '`' + Fr + '.'))
        }
        return T(R)
      }
      function s() {
        function F(P, $, R, M, j) {
          return er(P[$])
            ? null
            : new u(
                'Invalid ' +
                  M +
                  ' `' +
                  j +
                  '` supplied to ' +
                  ('`' + R + '`, expected a ReactNode.'),
              )
        }
        return T(F)
      }
      function v(F, P, $, R, M) {
        return new u(
          (F || 'React class') +
            ': ' +
            P +
            ' type `' +
            $ +
            '.' +
            R +
            '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
            M +
            '`.',
        )
      }
      function D(F) {
        function P($, R, M, j, L) {
          var N = $[R],
            W = lr(N)
          if (W !== 'object')
            return new u(
              'Invalid ' +
                j +
                ' `' +
                L +
                '` of type `' +
                W +
                '` ' +
                ('supplied to `' + M + '`, expected `object`.'),
            )
          for (var q in F) {
            var z = F[q]
            if (typeof z != 'function') return v(M, j, L, q, sr(z))
            var dr = z(N, q, M, j, L + '.' + q, n)
            if (dr) return dr
          }
          return null
        }
        return T(P)
      }
      function U(F) {
        function P($, R, M, j, L) {
          var N = $[R],
            W = lr(N)
          if (W !== 'object')
            return new u(
              'Invalid ' +
                j +
                ' `' +
                L +
                '` of type `' +
                W +
                '` ' +
                ('supplied to `' + M + '`, expected `object`.'),
            )
          var q = e({}, $[R], F)
          for (var z in q) {
            var dr = F[z]
            if (t(F, z) && typeof dr != 'function') return v(M, j, L, z, sr(dr))
            if (!dr)
              return new u(
                'Invalid ' +
                  j +
                  ' `' +
                  L +
                  '` key `' +
                  z +
                  '` supplied to `' +
                  M +
                  '`.\nBad object: ' +
                  JSON.stringify($[R], null, '  ') +
                  `
Valid keys: ` +
                  JSON.stringify(Object.keys(F), null, '  '),
              )
            var k = dr(N, z, M, j, L + '.' + z, n)
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
                R
              if (P !== F.entries) {
                for (; !(R = $.next()).done; ) if (!er(R.value)) return !1
              } else
                for (; !(R = $.next()).done; ) {
                  var M = R.value
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
        return Array.isArray(F) ? 'array' : F instanceof RegExp ? 'object' : gr(P, F) ? 'symbol' : P
      }
      function sr(F) {
        if (typeof F > 'u' || F === null) return '' + F
        var P = lr(F)
        if (P === 'object') {
          if (F instanceof Date) return 'date'
          if (F instanceof RegExp) return 'regexp'
        }
        return P
      }
      function xr(F) {
        var P = sr(F)
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
      function Pr(F) {
        return !F.constructor || !F.constructor.name ? h : F.constructor.name
      }
      return (
        (C.checkPropTypes = o), (C.resetWarningCache = o.resetWarningCache), (C.PropTypes = C), C
      )
    }),
    Pe
  )
}
var we, pn
function ct() {
  if (pn) return we
  pn = 1
  var r = /* @__PURE__ */ Ne()
  function e() {}
  function n() {}
  return (
    (n.resetWarningCache = e),
    (we = function () {
      function t(i, c, f, l, d, m) {
        if (m !== r) {
          var h = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
          )
          throw ((h.name = 'Invariant Violation'), h)
        }
      }
      t.isRequired = t
      function o() {
        return t
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
        resetWarningCache: e,
      }
      return (a.PropTypes = a), a
    }),
    we
  )
}
var bn
function ut() {
  if (bn) return oe.exports
  if (((bn = 1), process.env.NODE_ENV !== 'production')) {
    var r = _n(),
      e = !0
    oe.exports = /* @__PURE__ */ st()(r.isElement, e)
  } else oe.exports = /* @__PURE__ */ ct()()
  return oe.exports
}
var ft = /* @__PURE__ */ ut()
const qr = /* @__PURE__ */ nt(ft)
var ae = { exports: {} },
  J = {}
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn
function lt() {
  if (Cn) return J
  Cn = 1
  var r = Symbol.for('react.transitional.element'),
    e = Symbol.for('react.portal'),
    n = Symbol.for('react.fragment'),
    t = Symbol.for('react.strict_mode'),
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
            case n:
            case o:
            case t:
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
    (J.Fragment = n),
    (J.Lazy = m),
    (J.Memo = d),
    (J.Portal = e),
    (J.Profiler = o),
    (J.StrictMode = t),
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
      return b(u) === n
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
      return b(u) === t
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
        u === n ||
        u === o ||
        u === t ||
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
 */
var Fn
function dt() {
  return (
    Fn ||
      ((Fn = 1),
      process.env.NODE_ENV !== 'production' &&
        (function () {
          function r(u) {
            if (typeof u == 'object' && u !== null) {
              var T = u.$$typeof
              switch (T) {
                case e:
                  switch (((u = u.type), u)) {
                    case t:
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
                case n:
                  return T
              }
            }
          }
          var e = Symbol.for('react.transitional.element'),
            n = Symbol.for('react.portal'),
            t = Symbol.for('react.fragment'),
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
            (Q.Fragment = t),
            (Q.Lazy = h),
            (Q.Memo = m),
            (Q.Portal = n),
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
              return r(u) === t
            }),
            (Q.isLazy = function (u) {
              return r(u) === h
            }),
            (Q.isMemo = function (u) {
              return r(u) === m
            }),
            (Q.isPortal = function (u) {
              return r(u) === n
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
                u === t ||
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
var Sn
function mt() {
  return (
    Sn ||
      ((Sn = 1),
      process.env.NODE_ENV === 'production'
        ? (ae.exports = /* @__PURE__ */ lt())
        : (ae.exports = /* @__PURE__ */ dt())),
    ae.exports
  )
}
var Ln = /* @__PURE__ */ mt()
function Dr(r) {
  if (typeof r != 'object' || r === null) return !1
  const e = Object.getPrototypeOf(r)
  return (
    (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) &&
    !(Symbol.toStringTag in r) &&
    !(Symbol.iterator in r)
  )
}
function Nn(r) {
  if (/* @__PURE__ */ Rn.isValidElement(r) || Ln.isValidElementType(r) || !Dr(r)) return r
  const e = {}
  return (
    Object.keys(r).forEach((n) => {
      e[n] = Nn(r[n])
    }),
    e
  )
}
function Cr(
  r,
  e,
  n = {
    clone: !0,
  },
) {
  const t = n.clone
    ? {
        ...r,
      }
    : r
  return (
    Dr(r) &&
      Dr(e) &&
      Object.keys(e).forEach((o) => {
        /* @__PURE__ */ Rn.isValidElement(e[o]) || Ln.isValidElementType(e[o])
          ? (t[o] = e[o])
          : Dr(e[o]) && // Avoid prototype pollution
              Object.prototype.hasOwnProperty.call(r, o) &&
              Dr(r[o])
            ? (t[o] = Cr(r[o], e[o], n))
            : n.clone
              ? (t[o] = Dr(e[o]) ? Nn(e[o]) : e[o])
              : (t[o] = e[o])
      }),
    t
  )
}
const ht = (r) => {
  const e =
    Object.keys(r).map((n) => ({
      key: n,
      val: r[n],
    })) || []
  return (
    e.sort((n, t) => n.val - t.val),
    e.reduce(
      (n, t) => ({
        ...n,
        [t.key]: t.val,
      }),
      {},
    )
  )
}
function gt(r) {
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
        xl: 1536,
        // large screen
      },
      unit: n = 'px',
      step: t = 5,
      ...o
    } = r,
    a = ht(e),
    i = Object.keys(a)
  function c(h) {
    return `@media (min-width:${typeof e[h] == 'number' ? e[h] : h}${n})`
  }
  function f(h) {
    return `@media (max-width:${(typeof e[h] == 'number' ? e[h] : h) - t / 100}${n})`
  }
  function l(h, C) {
    const b = i.indexOf(C)
    return `@media (min-width:${typeof e[h] == 'number' ? e[h] : h}${n}) and (max-width:${(b !== -1 && typeof e[i[b]] == 'number' ? e[i[b]] : C) - t / 100}${n})`
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
  return {
    keys: i,
    values: a,
    up: c,
    down: f,
    between: l,
    only: d,
    not: m,
    unit: n,
    ...o,
  }
}
function yt(r, e) {
  if (!r.containerQueries) return e
  const n = Object.keys(e)
    .filter((t) => t.startsWith('@container'))
    .sort((t, o) => {
      var i, c
      const a = /min-width:\s*([0-9.]+)/
      return (
        +(((i = t.match(a)) == null ? void 0 : i[1]) || 0) -
        +(((c = o.match(a)) == null ? void 0 : c[1]) || 0)
      )
    })
  return n.length
    ? n.reduce(
        (t, o) => {
          const a = e[o]
          return delete t[o], (t[o] = a), t
        },
        {
          ...e,
        },
      )
    : e
}
function pt(r, e) {
  return (
    e === '@' || (e.startsWith('@') && (r.some((n) => e.startsWith(`@${n}`)) || !!e.match(/^@\d/)))
  )
}
function bt(r, e) {
  const n = e.match(/^@([^/]+)?\/?(.+)?$/)
  if (!n) {
    if (process.env.NODE_ENV !== 'production')
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? `MUI: The provided shorthand ${`(${e})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`
          : Ir(18, `(${e})`),
      )
    return null
  }
  const [, t, o] = n,
    a = Number.isNaN(+t) ? t || 0 : +t
  return r.containerQueries(o).up(a)
}
function Ct(r) {
  const e = (a, i) => a.replace('@media', i ? `@container ${i}` : '@container')
  function n(a, i) {
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
  const t = {},
    o = (a) => (n(t, a), t)
  return (
    n(o),
    {
      ...r,
      containerQueries: o,
    }
  )
}
const Ft = {
    borderRadius: 4,
  },
  Rr =
    process.env.NODE_ENV !== 'production'
      ? qr.oneOfType([qr.number, qr.string, qr.object, qr.array])
      : {}
function Jr(r, e) {
  return e
    ? Cr(r, e, {
        clone: !1,
        // No need to clone deep, it's way faster.
      })
    : r
}
const le = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536,
    // large screen
  },
  Tn = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (r) => `@media (min-width:${le[r]}px)`,
  },
  St = {
    containerQueries: (r) => ({
      up: (e) => {
        let n = typeof e == 'number' ? e : le[e] || e
        return (
          typeof n == 'number' && (n = `${n}px`),
          r ? `@container ${r} (min-width:${n})` : `@container (min-width:${n})`
        )
      },
    }),
  }
function Mr(r, e, n) {
  const t = r.theme || {}
  if (Array.isArray(e)) {
    const a = t.breakpoints || Tn
    return e.reduce((i, c, f) => ((i[a.up(a.keys[f])] = n(e[f])), i), {})
  }
  if (typeof e == 'object') {
    const a = t.breakpoints || Tn
    return Object.keys(e).reduce((i, c) => {
      if (pt(a.keys, c)) {
        const f = bt(t.containerQueries ? t : St, c)
        f && (i[f] = n(e[c], c))
      } else if (Object.keys(a.values || le).includes(c)) {
        const f = a.up(c)
        i[f] = n(e[c], c)
      } else {
        const f = c
        i[f] = e[f]
      }
      return i
    }, {})
  }
  return n(e)
}
function Tt(r = {}) {
  var n
  return (
    ((n = r.keys) == null
      ? void 0
      : n.reduce((t, o) => {
          const a = r.up(o)
          return (t[a] = {}), t
        }, {})) || {}
  )
}
function Et(r, e) {
  return r.reduce((n, t) => {
    const o = n[t]
    return (!o || Object.keys(o).length === 0) && delete n[t], n
  }, e)
}
function Vn(r) {
  if (typeof r != 'string')
    throw new Error(
      process.env.NODE_ENV !== 'production'
        ? 'MUI: `capitalize(string)` expects a string argument.'
        : Ir(7),
    )
  return r.charAt(0).toUpperCase() + r.slice(1)
}
function de(r, e, n = !0) {
  if (!e || typeof e != 'string') return null
  if (r && r.vars && n) {
    const t = `vars.${e}`.split('.').reduce((o, a) => (o && o[a] ? o[a] : null), r)
    if (t != null) return t
  }
  return e.split('.').reduce((t, o) => (t && t[o] != null ? t[o] : null), r)
}
function ce(r, e, n, t = n) {
  let o
  return (
    typeof r == 'function' ? (o = r(n)) : Array.isArray(r) ? (o = r[n] || t) : (o = de(r, n) || t),
    e && (o = e(o, t, r)),
    o
  )
}
function ar(r) {
  const { prop: e, cssProperty: n = r.prop, themeKey: t, transform: o } = r,
    a = (i) => {
      if (i[e] == null) return null
      const c = i[e],
        f = i.theme,
        l = de(f, t) || {}
      return Mr(i, c, (m) => {
        let h = ce(l, o, m)
        return (
          m === h &&
            typeof m == 'string' &&
            (h = ce(l, o, `${e}${m === 'default' ? '' : Vn(m)}`, m)),
          n === !1
            ? h
            : {
                [n]: h,
              }
        )
      })
    }
  return (
    (a.propTypes =
      process.env.NODE_ENV !== 'production'
        ? {
            [e]: Rr,
          }
        : {}),
    (a.filterProps = [e]),
    a
  )
}
function xt(r) {
  const e = {}
  return (n) => (e[n] === void 0 && (e[n] = r(n)), e[n])
}
const kt = {
    m: 'margin',
    p: 'padding',
  },
  vt = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  En = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py',
  },
  Pt = xt((r) => {
    if (r.length > 2)
      if (En[r]) r = En[r]
      else return [r]
    const [e, n] = r.split(''),
      t = kt[e],
      o = vt[n] || ''
    return Array.isArray(o) ? o.map((a) => t + a) : [t + o]
  }),
  me = [
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
  he = [
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
  wt = [...me, ...he]
function ee(r, e, n, t) {
  const o = de(r, e, !0) ?? n
  return typeof o == 'number' || typeof o == 'string'
    ? (a) =>
        typeof a == 'string'
          ? a
          : (process.env.NODE_ENV !== 'production' &&
              typeof a != 'number' &&
              console.error(`MUI: Expected ${t} argument to be a number or a string, got ${a}.`),
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
function Ve(r) {
  return ee(r, 'spacing', 8, 'spacing')
}
function ne(r, e) {
  return typeof e == 'string' || e == null ? e : r(e)
}
function At(r, e) {
  return (n) => r.reduce((t, o) => ((t[o] = ne(e, n)), t), {})
}
function Mt(r, e, n, t) {
  if (!e.includes(n)) return null
  const o = Pt(n),
    a = At(o, t),
    i = r[n]
  return Mr(r, i, a)
}
function jn(r, e) {
  const n = Ve(r.theme)
  return Object.keys(r)
    .map((t) => Mt(r, e, t, n))
    .reduce(Jr, {})
}
function tr(r) {
  return jn(r, me)
}
tr.propTypes =
  process.env.NODE_ENV !== 'production' ? me.reduce((r, e) => ((r[e] = Rr), r), {}) : {}
tr.filterProps = me
function or(r) {
  return jn(r, he)
}
or.propTypes =
  process.env.NODE_ENV !== 'production' ? he.reduce((r, e) => ((r[e] = Rr), r), {}) : {}
or.filterProps = he
process.env.NODE_ENV !== 'production' && wt.reduce((r, e) => ((r[e] = Rr), r), {})
function Wn(
  r = 8,
  e = Ve({
    spacing: r,
  }),
) {
  if (r.mui) return r
  const n = (...t) => (
    process.env.NODE_ENV !== 'production' &&
      (t.length <= 4 ||
        console.error(
          `MUI: Too many arguments provided, expected between 0 and 4, got ${t.length}`,
        )),
    (t.length === 0 ? [1] : t)
      .map((a) => {
        const i = e(a)
        return typeof i == 'number' ? `${i}px` : i
      })
      .join(' ')
  )
  return (n.mui = !0), n
}
function ge(...r) {
  const e = r.reduce(
      (t, o) => (
        o.filterProps.forEach((a) => {
          t[a] = o
        }),
        t
      ),
      {},
    ),
    n = (t) => Object.keys(t).reduce((o, a) => (e[a] ? Jr(o, e[a](t)) : o), {})
  return (
    (n.propTypes =
      process.env.NODE_ENV !== 'production'
        ? r.reduce((t, o) => Object.assign(t, o.propTypes), {})
        : {}),
    (n.filterProps = r.reduce((t, o) => t.concat(o.filterProps), [])),
    n
  )
}
function Tr(r) {
  return typeof r != 'number' ? r : `${r}px solid`
}
function Er(r, e) {
  return ar({
    prop: r,
    themeKey: 'borders',
    transform: e,
  })
}
const Dt = Er('border', Tr),
  Ot = Er('borderTop', Tr),
  It = Er('borderRight', Tr),
  Bt = Er('borderBottom', Tr),
  Rt = Er('borderLeft', Tr),
  _t = Er('borderColor'),
  $t = Er('borderTopColor'),
  Lt = Er('borderRightColor'),
  Nt = Er('borderBottomColor'),
  Vt = Er('borderLeftColor'),
  jt = Er('outline', Tr),
  Wt = Er('outlineColor'),
  ye = (r) => {
    if (r.borderRadius !== void 0 && r.borderRadius !== null) {
      const e = ee(r.theme, 'shape.borderRadius', 4, 'borderRadius'),
        n = (t) => ({
          borderRadius: ne(e, t),
        })
      return Mr(r, r.borderRadius, n)
    }
    return null
  }
ye.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        borderRadius: Rr,
      }
    : {}
ye.filterProps = ['borderRadius']
ge(Dt, Ot, It, Bt, Rt, _t, $t, Lt, Nt, Vt, ye, jt, Wt)
const pe = (r) => {
  if (r.gap !== void 0 && r.gap !== null) {
    const e = ee(r.theme, 'spacing', 8, 'gap'),
      n = (t) => ({
        gap: ne(e, t),
      })
    return Mr(r, r.gap, n)
  }
  return null
}
pe.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        gap: Rr,
      }
    : {}
pe.filterProps = ['gap']
const be = (r) => {
  if (r.columnGap !== void 0 && r.columnGap !== null) {
    const e = ee(r.theme, 'spacing', 8, 'columnGap'),
      n = (t) => ({
        columnGap: ne(e, t),
      })
    return Mr(r, r.columnGap, n)
  }
  return null
}
be.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        columnGap: Rr,
      }
    : {}
be.filterProps = ['columnGap']
const Ce = (r) => {
  if (r.rowGap !== void 0 && r.rowGap !== null) {
    const e = ee(r.theme, 'spacing', 8, 'rowGap'),
      n = (t) => ({
        rowGap: ne(e, t),
      })
    return Mr(r, r.rowGap, n)
  }
  return null
}
Ce.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        rowGap: Rr,
      }
    : {}
Ce.filterProps = ['rowGap']
const zt = ar({
    prop: 'gridColumn',
  }),
  Ut = ar({
    prop: 'gridRow',
  }),
  Yt = ar({
    prop: 'gridAutoFlow',
  }),
  Ht = ar({
    prop: 'gridAutoColumns',
  }),
  Gt = ar({
    prop: 'gridAutoRows',
  }),
  qt = ar({
    prop: 'gridTemplateColumns',
  }),
  Kt = ar({
    prop: 'gridTemplateRows',
  }),
  Xt = ar({
    prop: 'gridTemplateAreas',
  }),
  Jt = ar({
    prop: 'gridArea',
  })
ge(pe, be, Ce, zt, Ut, Yt, Ht, Gt, qt, Kt, Xt, Jt)
function zr(r, e) {
  return e === 'grey' ? e : r
}
const Qt = ar({
    prop: 'color',
    themeKey: 'palette',
    transform: zr,
  }),
  Zt = ar({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: zr,
  }),
  ro = ar({
    prop: 'backgroundColor',
    themeKey: 'palette',
    transform: zr,
  })
ge(Qt, Zt, ro)
function br(r) {
  return r <= 1 && r !== 0 ? `${r * 100}%` : r
}
const eo = ar({
    prop: 'width',
    transform: br,
  }),
  je = (r) => {
    if (r.maxWidth !== void 0 && r.maxWidth !== null) {
      const e = (n) => {
        var o, a, i, c, f
        const t =
          ((i = (a = (o = r.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) ==
          null
            ? void 0
            : i[n]) || le[n]
        return t
          ? ((f = (c = r.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.unit) !==
            'px'
            ? {
                maxWidth: `${t}${r.theme.breakpoints.unit}`,
              }
            : {
                maxWidth: t,
              }
          : {
              maxWidth: br(n),
            }
      }
      return Mr(r, r.maxWidth, e)
    }
    return null
  }
je.filterProps = ['maxWidth']
const no = ar({
    prop: 'minWidth',
    transform: br,
  }),
  to = ar({
    prop: 'height',
    transform: br,
  }),
  oo = ar({
    prop: 'maxHeight',
    transform: br,
  }),
  ao = ar({
    prop: 'minHeight',
    transform: br,
  })
ar({
  prop: 'size',
  cssProperty: 'width',
  transform: br,
})
ar({
  prop: 'size',
  cssProperty: 'height',
  transform: br,
})
const io = ar({
  prop: 'boxSizing',
})
ge(eo, je, no, to, oo, ao, io)
const Fe = {
  // borders
  border: {
    themeKey: 'borders',
    transform: Tr,
  },
  borderTop: {
    themeKey: 'borders',
    transform: Tr,
  },
  borderRight: {
    themeKey: 'borders',
    transform: Tr,
  },
  borderBottom: {
    themeKey: 'borders',
    transform: Tr,
  },
  borderLeft: {
    themeKey: 'borders',
    transform: Tr,
  },
  borderColor: {
    themeKey: 'palette',
  },
  borderTopColor: {
    themeKey: 'palette',
  },
  borderRightColor: {
    themeKey: 'palette',
  },
  borderBottomColor: {
    themeKey: 'palette',
  },
  borderLeftColor: {
    themeKey: 'palette',
  },
  outline: {
    themeKey: 'borders',
    transform: Tr,
  },
  outlineColor: {
    themeKey: 'palette',
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: ye,
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: zr,
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: zr,
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: zr,
  },
  // spacing
  p: {
    style: or,
  },
  pt: {
    style: or,
  },
  pr: {
    style: or,
  },
  pb: {
    style: or,
  },
  pl: {
    style: or,
  },
  px: {
    style: or,
  },
  py: {
    style: or,
  },
  padding: {
    style: or,
  },
  paddingTop: {
    style: or,
  },
  paddingRight: {
    style: or,
  },
  paddingBottom: {
    style: or,
  },
  paddingLeft: {
    style: or,
  },
  paddingX: {
    style: or,
  },
  paddingY: {
    style: or,
  },
  paddingInline: {
    style: or,
  },
  paddingInlineStart: {
    style: or,
  },
  paddingInlineEnd: {
    style: or,
  },
  paddingBlock: {
    style: or,
  },
  paddingBlockStart: {
    style: or,
  },
  paddingBlockEnd: {
    style: or,
  },
  m: {
    style: tr,
  },
  mt: {
    style: tr,
  },
  mr: {
    style: tr,
  },
  mb: {
    style: tr,
  },
  ml: {
    style: tr,
  },
  mx: {
    style: tr,
  },
  my: {
    style: tr,
  },
  margin: {
    style: tr,
  },
  marginTop: {
    style: tr,
  },
  marginRight: {
    style: tr,
  },
  marginBottom: {
    style: tr,
  },
  marginLeft: {
    style: tr,
  },
  marginX: {
    style: tr,
  },
  marginY: {
    style: tr,
  },
  marginInline: {
    style: tr,
  },
  marginInlineStart: {
    style: tr,
  },
  marginInlineEnd: {
    style: tr,
  },
  marginBlock: {
    style: tr,
  },
  marginBlockStart: {
    style: tr,
  },
  marginBlockEnd: {
    style: tr,
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (r) => ({
      '@media print': {
        display: r,
      },
    }),
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
    style: pe,
  },
  rowGap: {
    style: Ce,
  },
  columnGap: {
    style: be,
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
    themeKey: 'zIndex',
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows',
  },
  // sizing
  width: {
    transform: br,
  },
  maxWidth: {
    style: je,
  },
  minWidth: {
    transform: br,
  },
  height: {
    transform: br,
  },
  maxHeight: {
    transform: br,
  },
  minHeight: {
    transform: br,
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: 'font',
  },
  fontFamily: {
    themeKey: 'typography',
  },
  fontSize: {
    themeKey: 'typography',
  },
  fontStyle: {
    themeKey: 'typography',
  },
  fontWeight: {
    themeKey: 'typography',
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: 'typography',
  },
}
function so(...r) {
  const e = r.reduce((t, o) => t.concat(Object.keys(o)), []),
    n = new Set(e)
  return r.every((t) => n.size === Object.keys(t).length)
}
function co(r, e) {
  return typeof r == 'function' ? r(e) : r
}
function uo() {
  function r(n, t, o, a) {
    const i = {
        [n]: t,
        theme: o,
      },
      c = a[n]
    if (!c)
      return {
        [n]: t,
      }
    const { cssProperty: f = n, themeKey: l, transform: d, style: m } = c
    if (t == null) return null
    if (l === 'typography' && t === 'inherit')
      return {
        [n]: t,
      }
    const h = de(o, l) || {}
    return m
      ? m(i)
      : Mr(i, t, (b) => {
          let u = ce(h, d, b)
          return (
            b === u &&
              typeof b == 'string' &&
              (u = ce(h, d, `${n}${b === 'default' ? '' : Vn(b)}`, b)),
            f === !1
              ? u
              : {
                  [f]: u,
                }
          )
        })
  }
  function e(n) {
    const { sx: t, theme: o = {} } = n || {}
    if (!t) return null
    const a = o.unstable_sxConfig ?? Fe
    function i(c) {
      let f = c
      if (typeof c == 'function') f = c(o)
      else if (typeof c != 'object') return c
      if (!f) return null
      const l = Tt(o.breakpoints),
        d = Object.keys(l)
      let m = l
      return (
        Object.keys(f).forEach((h) => {
          const C = co(f[h], o)
          if (C != null)
            if (typeof C == 'object')
              if (a[h]) m = Jr(m, r(h, C, o, a))
              else {
                const b = Mr(
                  {
                    theme: o,
                  },
                  C,
                  (u) => ({
                    [h]: u,
                  }),
                )
                so(b, C)
                  ? (m[h] = e({
                      sx: C,
                      theme: o,
                    }))
                  : (m = Jr(m, b))
              }
            else m = Jr(m, r(h, C, o, a))
        }),
        yt(o, Et(d, m))
      )
    }
    return Array.isArray(t) ? t.map(i) : i(t)
  }
  return e
}
const Se = uo()
Se.filterProps = ['sx']
function fo(r, e) {
  var t
  const n = this
  if (n.vars) {
    if (!((t = n.colorSchemes) != null && t[r]) || typeof n.getColorSchemeSelector != 'function')
      return {}
    let o = n.getColorSchemeSelector(r)
    return o === '&'
      ? e
      : ((o.includes('data-') || o.includes('.')) && (o = `*:where(${o.replace(/\s*&$/, '')}) &`),
        {
          [o]: e,
        })
  }
  return n.palette.mode === r ? e : {}
}
function lo(r = {}, ...e) {
  const { breakpoints: n = {}, palette: t = {}, spacing: o, shape: a = {}, ...i } = r,
    c = gt(n),
    f = Wn(o)
  let l = Cr(
    {
      breakpoints: c,
      direction: 'ltr',
      components: {},
      // Inject component definitions.
      palette: {
        mode: 'light',
        ...t,
      },
      spacing: f,
      shape: {
        ...Ft,
        ...a,
      },
    },
    i,
  )
  return (
    (l = Ct(l)),
    (l.applyStyles = fo),
    (l = e.reduce((d, m) => Cr(d, m), l)),
    (l.unstable_sxConfig = {
      ...Fe,
      ...(i == null ? void 0 : i.unstable_sxConfig),
    }),
    (l.unstable_sx = function (m) {
      return Se({
        sx: m,
        theme: this,
      })
    }),
    l
  )
}
const xn = (r) => r,
  mo = () => {
    let r = xn
    return {
      configure(e) {
        r = e
      },
      generate(e) {
        return r(e)
      },
      reset() {
        r = xn
      },
    }
  },
  ho = mo(),
  go = {
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
function yo(r, e, n = 'Mui') {
  const t = go[e]
  return t ? `${n}-${t}` : `${ho.generate(r)}-${e}`
}
function po(r, e = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(e, Math.min(r, n))
}
function We(r, e = 0, n = 1) {
  return (
    process.env.NODE_ENV !== 'production' &&
      (r < e || r > n) &&
      console.error(`MUI: The value provided ${r} is out of range [${e}, ${n}].`),
    po(r, e, n)
  )
}
function bo(r) {
  r = r.slice(1)
  const e = new RegExp(`.{1,${r.length >= 6 ? 2 : 1}}`, 'g')
  let n = r.match(e)
  return (
    n && n[0].length === 1 && (n = n.map((t) => t + t)),
    process.env.NODE_ENV !== 'production' &&
      r.length !== r.trim().length &&
      console.error(
        `MUI: The color: "${r}" is invalid. Make sure the color input doesn't contain leading/trailing space.`,
      ),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n.map((t, o) => (o < 3 ? parseInt(t, 16) : Math.round((parseInt(t, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  )
}
function Br(r) {
  if (r.type) return r
  if (r.charAt(0) === '#') return Br(bo(r))
  const e = r.indexOf('('),
    n = r.substring(0, e)
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(n))
    throw new Error(
      process.env.NODE_ENV !== 'production'
        ? `MUI: Unsupported \`${r}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`
        : Ir(9, r),
    )
  let t = r.substring(e + 1, r.length - 1),
    o
  if (n === 'color') {
    if (
      ((t = t.split(' ')),
      (o = t.shift()),
      t.length === 4 && t[3].charAt(0) === '/' && (t[3] = t[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(o))
    )
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`
          : Ir(10, o),
      )
  } else t = t.split(',')
  return (
    (t = t.map((a) => parseFloat(a))),
    {
      type: n,
      values: t,
      colorSpace: o,
    }
  )
}
const Co = (r) => {
    const e = Br(r)
    return e.values
      .slice(0, 3)
      .map((n, t) => (e.type.includes('hsl') && t !== 0 ? `${n}%` : n))
      .join(' ')
  },
  Kr = (r, e) => {
    try {
      return Co(r)
    } catch {
      return e && process.env.NODE_ENV !== 'production' && console.warn(e), r
    }
  }
function Te(r) {
  const { type: e, colorSpace: n } = r
  let { values: t } = r
  return (
    e.includes('rgb')
      ? (t = t.map((o, a) => (a < 3 ? parseInt(o, 10) : o)))
      : e.includes('hsl') && ((t[1] = `${t[1]}%`), (t[2] = `${t[2]}%`)),
    e.includes('color') ? (t = `${n} ${t.join(' ')}`) : (t = `${t.join(', ')}`),
    `${e}(${t})`
  )
}
function zn(r) {
  r = Br(r)
  const { values: e } = r,
    n = e[0],
    t = e[1] / 100,
    o = e[2] / 100,
    a = t * Math.min(o, 1 - o),
    i = (l, d = (l + n / 30) % 12) => o - a * Math.max(Math.min(d - 3, 9 - d, 1), -1)
  let c = 'rgb'
  const f = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)]
  return (
    r.type === 'hsla' && ((c += 'a'), f.push(e[3])),
    Te({
      type: c,
      values: f,
    })
  )
}
function Be(r) {
  r = Br(r)
  let e = r.type === 'hsl' || r.type === 'hsla' ? Br(zn(r)).values : r.values
  return (
    (e = e.map(
      (n) => (
        r.type !== 'color' && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      ),
    )),
    Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3))
  )
}
function kn(r, e) {
  const n = Be(r),
    t = Be(e)
  return (Math.max(n, t) + 0.05) / (Math.min(n, t) + 0.05)
}
function hr(r, e) {
  return (
    (r = Br(r)),
    (e = We(e)),
    (r.type === 'rgb' || r.type === 'hsl') && (r.type += 'a'),
    r.type === 'color' ? (r.values[3] = `/${e}`) : (r.values[3] = e),
    Te(r)
  )
}
function ie(r, e, n) {
  try {
    return hr(r, e)
  } catch {
    return r
  }
}
function ze(r, e) {
  if (((r = Br(r)), (e = We(e)), r.type.includes('hsl'))) r.values[2] *= 1 - e
  else if (r.type.includes('rgb') || r.type.includes('color'))
    for (let n = 0; n < 3; n += 1) r.values[n] *= 1 - e
  return Te(r)
}
function Z(r, e, n) {
  try {
    return ze(r, e)
  } catch {
    return r
  }
}
function Ue(r, e) {
  if (((r = Br(r)), (e = We(e)), r.type.includes('hsl'))) r.values[2] += (100 - r.values[2]) * e
  else if (r.type.includes('rgb'))
    for (let n = 0; n < 3; n += 1) r.values[n] += (255 - r.values[n]) * e
  else if (r.type.includes('color'))
    for (let n = 0; n < 3; n += 1) r.values[n] += (1 - r.values[n]) * e
  return Te(r)
}
function rr(r, e, n) {
  try {
    return Ue(r, e)
  } catch {
    return r
  }
}
function Fo(r, e = 0.15) {
  return Be(r) > 0.5 ? ze(r, e) : Ue(r, e)
}
function se(r, e, n) {
  try {
    return Fo(r, e)
  } catch {
    return r
  }
}
function So(r = '') {
  function e(...t) {
    if (!t.length) return ''
    const o = t[0]
    return typeof o == 'string' &&
      !o.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/,
      )
      ? `, var(--${r ? `${r}-` : ''}${o}${e(...t.slice(1))})`
      : `, ${o}`
  }
  return (t, ...o) => `var(--${r ? `${r}-` : ''}${t}${e(...o)})`
}
const vn = (r, e, n, t = []) => {
    let o = r
    e.forEach((a, i) => {
      i === e.length - 1
        ? Array.isArray(o)
          ? (o[Number(a)] = n)
          : o && typeof o == 'object' && (o[a] = n)
        : o && typeof o == 'object' && (o[a] || (o[a] = t.includes(a) ? [] : {}), (o = o[a]))
    })
  },
  To = (r, e, n) => {
    function t(o, a = [], i = []) {
      Object.entries(o).forEach(([c, f]) => {
        ;(!n || (n && !n([...a, c]))) &&
          f != null &&
          (typeof f == 'object' && Object.keys(f).length > 0
            ? t(f, [...a, c], Array.isArray(f) ? [...i, c] : i)
            : e([...a, c], f, i))
      })
    }
    t(r)
  },
  Eo = (r, e) =>
    typeof e == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((t) => r.includes(t)) ||
        r[r.length - 1].toLowerCase().includes('opacity')
        ? e
        : `${e}px`
      : e
function Ae(r, e) {
  const { prefix: n, shouldSkipGeneratingVar: t } = e || {},
    o = {},
    a = {},
    i = {}
  return (
    To(
      r,
      (c, f, l) => {
        if ((typeof f == 'string' || typeof f == 'number') && (!t || !t(c, f))) {
          const d = `--${n ? `${n}-` : ''}${c.join('-')}`,
            m = Eo(c, f)
          Object.assign(o, {
            [d]: m,
          }),
            vn(a, c, `var(${d})`, l),
            vn(i, c, `var(${d}, ${m})`, l)
        }
      },
      (c) => c[0] === 'vars',
      // skip 'vars/*' paths
    ),
    {
      css: o,
      vars: a,
      varsWithDefaults: i,
    }
  )
}
function xo(r, e = {}) {
  const { getSelector: n = T, disableCssColorScheme: t, colorSchemeSelector: o } = e,
    { colorSchemes: a = {}, components: i, defaultColorScheme: c = 'light', ...f } = r,
    { vars: l, css: d, varsWithDefaults: m } = Ae(f, e)
  let h = m
  const C = {},
    { [c]: b, ...u } = a
  if (
    (Object.entries(u || {}).forEach(([S, E]) => {
      const { vars: p, css: V, varsWithDefaults: B } = Ae(E, e)
      ;(h = Cr(h, B)),
        (C[S] = {
          css: V,
          vars: p,
        })
    }),
    b)
  ) {
    const { css: S, vars: E, varsWithDefaults: p } = Ae(b, e)
    ;(h = Cr(h, p)),
      (C[c] = {
        css: S,
        vars: E,
      })
  }
  function T(S, E) {
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
                {
                  ':root': E,
                },
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
      let S = {
        ...l,
      }
      return (
        Object.entries(C).forEach(([, { vars: E }]) => {
          S = Cr(S, E)
        }),
        S
      )
    },
    generateStyleSheets: () => {
      var G, H
      const S = [],
        E = r.defaultColorScheme || 'light'
      function p(s, v) {
        Object.keys(v).length &&
          S.push(
            typeof s == 'string'
              ? {
                  [s]: {
                    ...v,
                  },
                }
              : s,
          )
      }
      p(
        n(void 0, {
          ...d,
        }),
        d,
      )
      const { [E]: V, ...B } = C
      if (V) {
        const { css: s } = V,
          v = (H = (G = a[E]) == null ? void 0 : G.palette) == null ? void 0 : H.mode,
          D =
            !t && v
              ? {
                  colorScheme: v,
                  ...s,
                }
              : {
                  ...s,
                }
        p(
          n(E, {
            ...D,
          }),
          D,
        )
      }
      return (
        Object.entries(B).forEach(([s, { css: v }]) => {
          var er, gr
          const D = (gr = (er = a[s]) == null ? void 0 : er.palette) == null ? void 0 : gr.mode,
            U =
              !t && D
                ? {
                    colorScheme: D,
                    ...v,
                  }
                : {
                    ...v,
                  }
          p(
            n(s, {
              ...U,
            }),
            U,
          )
        }),
        S
      )
    },
  }
}
function ko(r) {
  return function (n) {
    return r === 'media'
      ? (process.env.NODE_ENV !== 'production' &&
          n !== 'light' &&
          n !== 'dark' &&
          console.error(
            `MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`,
          ),
        `@media (prefers-color-scheme: ${n})`)
      : r
        ? r.startsWith('data-') && !r.includes('%s')
          ? `[${r}="${n}"] &`
          : r === 'class'
            ? `.${n} &`
            : r === 'data'
              ? `[data-${n}] &`
              : `${r.replace('%s', n)} &`
        : '&'
  }
}
function Un() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Zr.white,
      default: Zr.white,
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  }
}
const vo = Un()
function Yn() {
  return {
    text: {
      primary: Zr.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      default: '#121212',
    },
    action: {
      active: Zr.white,
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
const Pn = Yn()
function wn(r, e, n, t) {
  const o = t.light || t,
    a = t.dark || t * 1.5
  r[e] ||
    (r.hasOwnProperty(n)
      ? (r[e] = r[n])
      : e === 'light'
        ? (r.light = Ue(r.main, o))
        : e === 'dark' && (r.dark = ze(r.main, a)))
}
function Po(r = 'light') {
  return r === 'dark'
    ? {
        main: Vr[200],
        light: Vr[50],
        dark: Vr[400],
      }
    : {
        main: Vr[700],
        light: Vr[400],
        dark: Vr[800],
      }
}
function wo(r = 'light') {
  return r === 'dark'
    ? {
        main: Nr[200],
        light: Nr[50],
        dark: Nr[400],
      }
    : {
        main: Nr[500],
        light: Nr[300],
        dark: Nr[700],
      }
}
function Ao(r = 'light') {
  return r === 'dark'
    ? {
        main: Lr[500],
        light: Lr[300],
        dark: Lr[700],
      }
    : {
        main: Lr[700],
        light: Lr[400],
        dark: Lr[800],
      }
}
function Mo(r = 'light') {
  return r === 'dark'
    ? {
        main: jr[400],
        light: jr[300],
        dark: jr[700],
      }
    : {
        main: jr[700],
        light: jr[500],
        dark: jr[900],
      }
}
function Do(r = 'light') {
  return r === 'dark'
    ? {
        main: Wr[400],
        light: Wr[300],
        dark: Wr[700],
      }
    : {
        main: Wr[800],
        light: Wr[500],
        dark: Wr[900],
      }
}
function Oo(r = 'light') {
  return r === 'dark'
    ? {
        main: Gr[400],
        light: Gr[300],
        dark: Gr[700],
      }
    : {
        main: '#ed6c02',
        // closest to orange[800] that pass 3:1.
        light: Gr[500],
        dark: Gr[900],
      }
}
function Ye(r) {
  const { mode: e = 'light', contrastThreshold: n = 3, tonalOffset: t = 0.2, ...o } = r,
    a = r.primary || Po(e),
    i = r.secondary || wo(e),
    c = r.error || Ao(e),
    f = r.info || Mo(e),
    l = r.success || Do(e),
    d = r.warning || Oo(e)
  function m(u) {
    const T = kn(u, Pn.text.primary) >= n ? Pn.text.primary : vo.text.primary
    if (process.env.NODE_ENV !== 'production') {
      const w = kn(u, T)
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
    lightShade: I = 300,
    darkShade: S = 700,
  }) => {
    if (
      ((u = {
        ...u,
      }),
      !u.main && u[w] && (u.main = u[w]),
      !u.hasOwnProperty('main'))
    )
      throw new Error(
        process.env.NODE_ENV !== 'production'
          ? `MUI: The color${T ? ` (${T})` : ''} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.`
          : Ir(11, T ? ` (${T})` : '', w),
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
          : Ir(12, T ? ` (${T})` : '', JSON.stringify(u.main)),
      )
    return (
      wn(u, 'light', I, t), wn(u, 'dark', S, t), u.contrastText || (u.contrastText = m(u.main)), u
    )
  }
  let C
  return (
    e === 'light' ? (C = Un()) : e === 'dark' && (C = Yn()),
    process.env.NODE_ENV !== 'production' &&
      (C || console.error(`MUI: The palette mode \`${e}\` is not supported.`)),
    Cr(
      {
        // A collection of common colors.
        common: {
          ...Zr,
        },
        // prevent mutable object.
        // The palette mode, can be light or dark.
        mode: e,
        // The colors used to represent primary interface elements for a user.
        primary: h({
          color: a,
          name: 'primary',
        }),
        // The colors used to represent secondary interface elements for a user.
        secondary: h({
          color: i,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        // The colors used to represent interface elements that the user should be made aware of.
        error: h({
          color: c,
          name: 'error',
        }),
        // The colors used to represent potentially dangerous actions or important messages.
        warning: h({
          color: d,
          name: 'warning',
        }),
        // The colors used to present information to the user that is neutral and not necessarily important.
        info: h({
          color: f,
          name: 'info',
        }),
        // The colors used to indicate the successful completion of an action that user triggered.
        success: h({
          color: l,
          name: 'success',
        }),
        // The grey colors.
        grey: et,
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: n,
        // Takes a background color and returns the text color that maximizes the contrast.
        getContrastText: m,
        // Generate a rich color object.
        augmentColor: h,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: t,
        // The light and dark mode object.
        ...C,
      },
      o,
    )
  )
}
function Io(r) {
  const e = {}
  return (
    Object.entries(r).forEach((t) => {
      const [o, a] = t
      typeof a == 'object' &&
        (e[o] =
          `${a.fontStyle ? `${a.fontStyle} ` : ''}${a.fontVariant ? `${a.fontVariant} ` : ''}${a.fontWeight ? `${a.fontWeight} ` : ''}${a.fontStretch ? `${a.fontStretch} ` : ''}${a.fontSize || ''}${a.lineHeight ? `/${a.lineHeight} ` : ''}${a.fontFamily || ''}`)
    }),
    e
  )
}
function Bo(r, e) {
  return {
    toolbar: {
      minHeight: 56,
      [r.up('xs')]: {
        '@media (orientation: landscape)': {
          minHeight: 48,
        },
      },
      [r.up('sm')]: {
        minHeight: 64,
      },
    },
    ...e,
  }
}
function Ro(r) {
  return Math.round(r * 1e5) / 1e5
}
const An = {
    textTransform: 'uppercase',
  },
  Mn = '"Roboto", "Helvetica", "Arial", sans-serif'
function _o(r, e) {
  const {
    fontFamily: n = Mn,
    // The default font size of the Material Specification.
    fontSize: t = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: i = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: d,
    ...m
  } = typeof e == 'function' ? e(r) : e
  process.env.NODE_ENV !== 'production' &&
    (typeof t != 'number' && console.error('MUI: `fontSize` is required to be a number.'),
    typeof f != 'number' && console.error('MUI: `htmlFontSize` is required to be a number.'))
  const h = t / 14,
    C = d || ((T) => `${(T / f) * h}rem`),
    b = (T, w, I, S, E) => ({
      fontFamily: n,
      fontWeight: T,
      fontSize: C(w),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: I,
      // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
      // across font-families can cause issues with the kerning.
      ...(n === Mn
        ? {
            letterSpacing: `${Ro(S / w)}em`,
          }
        : {}),
      ...E,
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
      button: b(i, 14, 1.75, 0.4, An),
      caption: b(a, 12, 1.66, 0.4),
      overline: b(a, 12, 2.66, 1, An),
      // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    }
  return Cr(
    {
      htmlFontSize: f,
      pxToRem: C,
      fontFamily: n,
      fontSize: t,
      fontWeightLight: o,
      fontWeightRegular: a,
      fontWeightMedium: i,
      fontWeightBold: c,
      ...u,
    },
    m,
    {
      clone: !1,
      // No need to clone deep
    },
  )
}
const $o = 0.2,
  Lo = 0.14,
  No = 0.12
function nr(...r) {
  return [
    `${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${$o})`,
    `${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${Lo})`,
    `${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${No})`,
  ].join(',')
}
const Vo = [
    'none',
    nr(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    nr(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    nr(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    nr(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    nr(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    nr(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    nr(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    nr(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    nr(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    nr(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    nr(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    nr(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    nr(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    nr(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    nr(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    nr(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    nr(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    nr(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    nr(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    nr(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    nr(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    nr(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    nr(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    nr(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  jo = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  Wo = {
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
    leavingScreen: 195,
  }
function Dn(r) {
  return `${Math.round(r)}ms`
}
function zo(r) {
  if (!r) return 0
  const e = r / 36
  return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3)
}
function Uo(r) {
  const e = {
      ...jo,
      ...r.easing,
    },
    n = {
      ...Wo,
      ...r.duration,
    }
  return {
    getAutoHeightDuration: zo,
    create: (o = ['all'], a = {}) => {
      const { duration: i = n.standard, easing: c = e.easeInOut, delay: f = 0, ...l } = a
      if (process.env.NODE_ENV !== 'production') {
        const d = (h) => typeof h == 'string',
          m = (h) => !Number.isNaN(parseFloat(h))
        !d(o) &&
          !Array.isArray(o) &&
          console.error('MUI: Argument "props" must be a string or Array.'),
          !m(i) &&
            !d(i) &&
            console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`),
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
            `${d} ${typeof i == 'string' ? i : Dn(i)} ${c} ${typeof f == 'string' ? f : Dn(f)}`,
        )
        .join(',')
    },
    ...r,
    easing: e,
    duration: n,
  }
}
const Yo = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}
function Ho(r) {
  return (
    Dr(r) ||
    typeof r > 'u' ||
    typeof r == 'string' ||
    typeof r == 'boolean' ||
    typeof r == 'number' ||
    Array.isArray(r)
  )
}
function Hn(r = {}) {
  const e = {
    ...r,
  }
  function n(t) {
    const o = Object.entries(t)
    for (let a = 0; a < o.length; a++) {
      const [i, c] = o[a]
      !Ho(c) || i.startsWith('unstable_')
        ? delete t[i]
        : Dr(c) &&
          ((t[i] = {
            ...c,
          }),
          n(t[i]))
    }
  }
  return (
    n(e),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  )
}
function Re(r = {}, ...e) {
  const {
    breakpoints: n,
    mixins: t = {},
    spacing: o,
    palette: a = {},
    transitions: i = {},
    typography: c = {},
    shape: f,
    ...l
  } = r
  if (
    r.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
    // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
    r.generateThemeVars === void 0
  )
    throw new Error(
      process.env.NODE_ENV !== 'production'
        ? 'MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.'
        : Ir(20),
    )
  const d = Ye(a),
    m = lo(r)
  let h = Cr(m, {
    mixins: Bo(m.breakpoints, t),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Vo.slice(),
    typography: _o(d, c),
    transitions: Uo(i),
    zIndex: {
      ...Yo,
    },
  })
  if (
    ((h = Cr(h, l)), (h = e.reduce((C, b) => Cr(C, b), h)), process.env.NODE_ENV !== 'production')
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
          const I = u[w]
          if (C.includes(w) && Object.keys(I).length > 0) {
            if (process.env.NODE_ENV !== 'production') {
              const S = yo('', w)
              console.error(
                [
                  `MUI: The \`${T}\` component increases the CSS specificity of the \`${w}\` internal state.`,
                  'You can not override it like this: ',
                  JSON.stringify(u, null, 2),
                  '',
                  `Instead, you need to use the '&.${S}' syntax:`,
                  JSON.stringify(
                    {
                      root: {
                        [`&.${S}`]: I,
                      },
                    },
                    null,
                    2,
                  ),
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
    (h.unstable_sxConfig = {
      ...Fe,
      ...(l == null ? void 0 : l.unstable_sxConfig),
    }),
    (h.unstable_sx = function (b) {
      return Se({
        sx: b,
        theme: this,
      })
    }),
    (h.toRuntimeSource = Hn),
    h
  )
}
function Go(r) {
  let e
  return r < 1 ? (e = 5.11916 * r ** 2) : (e = 4.5 * Math.log(r + 1) + 2), Math.round(e * 10) / 1e3
}
const qo = [...Array(25)].map((r, e) => {
  if (e === 0) return 'none'
  const n = Go(e)
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`
})
function Gn(r) {
  return {
    inputPlaceholder: r === 'dark' ? 0.5 : 0.42,
    inputUnderline: r === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: r === 'dark' ? 0.2 : 0.12,
    switchTrack: r === 'dark' ? 0.3 : 0.38,
  }
}
function qn(r) {
  return r === 'dark' ? qo : []
}
function Ko(r) {
  const {
      palette: e = {
        mode: 'light',
      },
      // need to cast to avoid module augmentation test
      opacity: n,
      overlays: t,
      ...o
    } = r,
    a = Ye(e)
  return {
    palette: a,
    opacity: {
      ...Gn(a.mode),
      ...n,
    },
    overlays: t || qn(a.mode),
    ...o,
  }
}
function Xo(r) {
  var e
  return (
    !!r[0].match(
      /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/,
    ) ||
    !!r[0].match(/sxConfig$/) || // ends with sxConfig
    (r[0] === 'palette' &&
      !!((e = r[1]) != null && e.match(/(mode|contrastThreshold|tonalOffset)/)))
  )
}
const Jo = (r) => [
    ...[...Array(25)].map((e, n) => `--${r ? `${r}-` : ''}overlays-${n}`),
    `--${r ? `${r}-` : ''}palette-AppBar-darkBg`,
    `--${r ? `${r}-` : ''}palette-AppBar-darkColor`,
  ],
  Qo = (r) => (e, n) => {
    const t = r.rootSelector || ':root',
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
          Jo(r.cssVarPrefix).forEach((c) => {
            ;(i[c] = n[c]), delete n[c]
          }),
          a === 'media'
            ? {
                [t]: n,
                '@media (prefers-color-scheme: dark)': {
                  [t]: i,
                },
              }
            : a
              ? {
                  [a.replace('%s', e)]: i,
                  [`${t}, ${a.replace('%s', e)}`]: n,
                }
              : {
                  [t]: {
                    ...n,
                    ...i,
                  },
                }
        )
      }
      if (a && a !== 'media') return `${t}, ${a.replace('%s', String(e))}`
    } else if (e) {
      if (a === 'media')
        return {
          [`@media (prefers-color-scheme: ${String(e)})`]: {
            [t]: n,
          },
        }
      if (a) return a.replace('%s', String(e))
    }
    return t
  }
function Zo(r, e) {
  e.forEach((n) => {
    r[n] || (r[n] = {})
  })
}
function y(r, e, n) {
  !r[e] && n && (r[e] = n)
}
function Xr(r) {
  return typeof r != 'string' || !r.startsWith('hsl') ? r : zn(r)
}
function wr(r, e) {
  ;`${e}Channel` in r ||
    (r[`${e}Channel`] = Kr(
      Xr(r[e]),
      `MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`,
    ))
}
function ra(r) {
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
  ea = (r = 'mui') => So(r)
function Me(r, e, n, t) {
  if (!e) return
  e = e === !0 ? {} : e
  const o = t === 'dark' ? 'dark' : 'light'
  if (!n) {
    r[t] = Ko({
      ...e,
      palette: {
        mode: o,
        ...(e == null ? void 0 : e.palette),
      },
    })
    return
  }
  const { palette: a, ...i } = Re({
    ...n,
    palette: {
      mode: o,
      ...(e == null ? void 0 : e.palette),
    },
  })
  return (
    (r[t] = {
      ...e,
      palette: a,
      opacity: {
        ...Gn(o),
        ...(e == null ? void 0 : e.opacity),
      },
      overlays: (e == null ? void 0 : e.overlays) || qn(o),
    }),
    i
  )
}
function na(r = {}, ...e) {
  const {
      colorSchemes: n = {
        light: !0,
      },
      defaultColorScheme: t,
      disableCssColorScheme: o = !1,
      cssVarPrefix: a = 'mui',
      shouldSkipGeneratingVar: i = Xo,
      colorSchemeSelector: c = n.light && n.dark ? 'media' : void 0,
      rootSelector: f = ':root',
      ...l
    } = r,
    d = Object.keys(n)[0],
    m = t || (n.light && d !== 'light' ? 'light' : d),
    h = ea(a),
    { [m]: C, light: b, dark: u, ...T } = n,
    w = {
      ...T,
    }
  let I = C
  if ((((m === 'dark' && !('dark' in n)) || (m === 'light' && !('light' in n))) && (I = !0), !I))
    throw new Error(
      process.env.NODE_ENV !== 'production'
        ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.`
        : Ir(21, m),
    )
  const S = Me(w, I, l, m)
  b && !w.light && Me(w, b, void 0, 'light'), u && !w.dark && Me(w, u, void 0, 'dark')
  let E = {
    defaultColorScheme: m,
    ...S,
    cssVarPrefix: a,
    colorSchemeSelector: c,
    rootSelector: f,
    getCssVar: h,
    colorSchemes: w,
    font: {
      ...Io(S.typography),
      ...S.font,
    },
    spacing: ra(l.spacing),
  }
  Object.keys(E.colorSchemes).forEach((H) => {
    const s = E.colorSchemes[H].palette,
      v = (D) => {
        const U = D.split('-'),
          er = U[1],
          gr = U[2]
        return h(D, s[er][gr])
      }
    if (
      (s.mode === 'light' &&
        (y(s.common, 'background', '#fff'), y(s.common, 'onBackground', '#000')),
      s.mode === 'dark' && (y(s.common, 'background', '#000'), y(s.common, 'onBackground', '#fff')),
      Zo(s, [
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
      const D = se(s.background.default, 0.8)
      y(s.SnackbarContent, 'bg', D),
        y(
          s.SnackbarContent,
          'color',
          vr(() => s.getContrastText(D)),
        ),
        y(s.SpeedDialAction, 'fabHoverBg', se(s.background.paper, 0.15)),
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
        y(s.TableCell, 'border', rr(ie(s.divider, 1), 0.88)),
        y(s.Tooltip, 'bg', ie(s.grey[700], 0.92))
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
      const D = se(s.background.default, 0.98)
      y(s.SnackbarContent, 'bg', D),
        y(
          s.SnackbarContent,
          'color',
          vr(() => s.getContrastText(D)),
        ),
        y(s.SpeedDialAction, 'fabHoverBg', se(s.background.paper, 0.15)),
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
        y(s.TableCell, 'border', Z(ie(s.divider, 1), 0.68)),
        y(s.Tooltip, 'bg', ie(s.grey[700], 0.92))
    }
    wr(s.background, 'default'),
      wr(s.background, 'paper'),
      wr(s.common, 'background'),
      wr(s.common, 'onBackground'),
      wr(s, 'divider'),
      Object.keys(s).forEach((D) => {
        const U = s[D]
        D !== 'tonalOffset' &&
          U &&
          typeof U == 'object' &&
          (U.main && y(s[D], 'mainChannel', Kr(Xr(U.main))),
          U.light && y(s[D], 'lightChannel', Kr(Xr(U.light))),
          U.dark && y(s[D], 'darkChannel', Kr(Xr(U.dark))),
          U.contrastText && y(s[D], 'contrastTextChannel', Kr(Xr(U.contrastText))),
          D === 'text' && (wr(s[D], 'primary'), wr(s[D], 'secondary')),
          D === 'action' && (U.active && wr(s[D], 'active'), U.selected && wr(s[D], 'selected')))
      })
  }),
    (E = e.reduce((H, s) => Cr(H, s), E))
  const p = {
      prefix: a,
      disableCssColorScheme: o,
      shouldSkipGeneratingVar: i,
      getSelector: Qo(E),
    },
    { vars: V, generateThemeVars: B, generateStyleSheets: G } = xo(E, p)
  return (
    (E.vars = V),
    Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([H, s]) => {
      E[H] = s
    }),
    (E.generateThemeVars = B),
    (E.generateStyleSheets = G),
    (E.generateSpacing = function () {
      return Wn(l.spacing, Ve(this))
    }),
    (E.getColorSchemeSelector = ko(c)),
    (E.spacing = E.generateSpacing()),
    (E.shouldSkipGeneratingVar = i),
    (E.unstable_sxConfig = {
      ...Fe,
      ...(l == null ? void 0 : l.unstable_sxConfig),
    }),
    (E.unstable_sx = function (s) {
      return Se({
        sx: s,
        theme: this,
      })
    }),
    (E.toRuntimeSource = Hn),
    E
  )
}
function On(r, e, n) {
  r.colorSchemes &&
    n &&
    (r.colorSchemes[e] = {
      ...(n !== !0 && n),
      palette: Ye({
        ...(n === !0 ? {} : n.palette),
        mode: e,
      }),
      // cast type to skip module augmentation test
    })
}
function In(r = {}, ...e) {
  const {
      palette: n,
      cssVariables: t = !1,
      colorSchemes: o = n
        ? void 0
        : {
            light: !0,
          },
      defaultColorScheme: a = n == null ? void 0 : n.mode,
      ...i
    } = r,
    c = a || 'light',
    f = o == null ? void 0 : o[c],
    l = {
      ...o,
      ...(n
        ? {
            [c]: {
              ...(typeof f != 'boolean' && f),
              palette: n,
            },
          }
        : void 0),
    }
  if (t === !1) {
    if (!('colorSchemes' in r)) return Re(r, ...e)
    let d = n
    'palette' in r ||
      (l[c] &&
        (l[c] !== !0
          ? (d = l[c].palette)
          : c === 'dark' &&
            (d = {
              mode: 'dark',
            })))
    const m = Re(
      {
        ...r,
        palette: d,
      },
      ...e,
    )
    return (
      (m.defaultColorScheme = c),
      (m.colorSchemes = l),
      m.palette.mode === 'light' &&
        ((m.colorSchemes.light = {
          ...(l.light !== !0 && l.light),
          palette: m.palette,
        }),
        On(m, 'dark', l.dark)),
      m.palette.mode === 'dark' &&
        ((m.colorSchemes.dark = {
          ...(l.dark !== !0 && l.dark),
          palette: m.palette,
        }),
        On(m, 'light', l.light)),
      m
    )
  }
  return (
    !n && !('light' in l) && c === 'light' && (l.light = !0),
    na(
      {
        ...i,
        colorSchemes: l,
        defaultColorScheme: c,
        ...(typeof t != 'boolean' && t),
      },
      ...e,
    )
  )
}
const ta = {
    info: '#0288d1',
    success: '#2e7d32',
    warning: '#ed6c02',
  },
  Kn = {
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
  oa = ({ palette: r, shadows: e }) => ({
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: e[1],
          border: `0px solid ${r.outlineVariant.main}`,
          color: r.onBackground.main,
          backgroundColor: r.surfaceBright.main,
          '&:before': {
            backgroundColor: r.surfaceBright.main,
            display: 'none',
          },
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
  aa = ({ palette: r }) => ({
    MuiAlert: {
      defaultProps: {
        variant: 'standard',
      },
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
        standardError: {
          background: r.errorContainer.main,
          color: r.onErrorContainer.main,
        },
        standardInfo: {
          background: r.infoContainer.main,
          color: r.infoContainer.contrastText,
        },
        standardWarning: {
          background: r.warningContainer.main,
          color: r.onWarningContainer.main,
        },
        standardSuccess: {
          background: r.successContainer.main,
          color: r.onSuccessContainer.main,
        },
        filledError: {
          background: r.error.main,
          color: r.onError.main,
        },
        filledInfo: {
          background: r.info.main,
          color: r.onInfo.main,
        },
        filledWarning: {
          background: r.warning.main,
          color: r.onWarning.main,
        },
        filledSuccess: {
          background: r.success.main,
          color: r.onSuccess.main,
        },
        outlinedError: {
          color: r.error.main,
        },
        outlinedInfo: {
          color: r.info.main,
        },
        outlinedWarning: {
          color: r.warning.main,
        },
        outlinedSuccess: {
          color: r.success.main,
        },
      },
    },
  }),
  ia = ({ palette: r }) => ({
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'default',
      },
      styleOverrides: {
        colorDefault: {
          background: r.surfaceContainer.main,
          color: r.onSurface.main,
        },
        colorPrimary: {
          background: r.surface.main,
          color: r.onSurface.main,
        },
      },
    },
  }),
  sa = ({ palette: r }) => ({
    MuiBadge: {
      defaultProps: { color: 'default' },
      variants: [
        {
          props: { color: 'default' },
          style: {
            '.MuiBadge-badge': {
              backgroundColor: r.error.main,
              color: r.onError.main,
            },
          },
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
 */
function yr(r) {
  return r < 0 ? -1 : r === 0 ? 0 : 1
}
function Qr(r, e, n) {
  return (1 - n) * r + n * e
}
function ca(r, e, n) {
  return n < r ? r : n > e ? e : n
}
function ue(r, e, n) {
  return n < r ? r : n > e ? e : n
}
function He(r) {
  return (r = r % 360), r < 0 && (r = r + 360), r
}
function ua(r, e) {
  return He(e - r) <= 180 ? 1 : -1
}
function fa(r, e) {
  return 180 - Math.abs(Math.abs(r - e) - 180)
}
function _e(r, e) {
  const n = r[0] * e[0][0] + r[1] * e[0][1] + r[2] * e[0][2],
    t = r[0] * e[1][0] + r[1] * e[1][1] + r[2] * e[1][2],
    o = r[0] * e[2][0] + r[1] * e[2][1] + r[2] * e[2][2]
  return [n, t, o]
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
const la = [
    [0.41233895, 0.35762064, 0.18051042],
    [0.2126, 0.7152, 0.0722],
    [0.01932141, 0.11916382, 0.95034478],
  ],
  da = [
    [3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
    [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
    [0.05562093689691305, -0.20395524564742123, 1.0571799111220335],
  ],
  ma = [95.047, 100, 108.883]
function Ge(r, e, n) {
  return ((255 << 24) | ((r & 255) << 16) | ((e & 255) << 8) | (n & 255)) >>> 0
}
function Bn(r) {
  const e = _r(r[0]),
    n = _r(r[1]),
    t = _r(r[2])
  return Ge(e, n, t)
}
function Xn(r) {
  return (r >> 16) & 255
}
function Jn(r) {
  return (r >> 8) & 255
}
function Qn(r) {
  return r & 255
}
function ha(r, e, n) {
  const t = da,
    o = t[0][0] * r + t[0][1] * e + t[0][2] * n,
    a = t[1][0] * r + t[1][1] * e + t[1][2] * n,
    i = t[2][0] * r + t[2][1] * e + t[2][2] * n,
    c = _r(o),
    f = _r(a),
    l = _r(i)
  return Ge(c, f, l)
}
function ga(r) {
  const e = Ur(Xn(r)),
    n = Ur(Jn(r)),
    t = Ur(Qn(r))
  return _e([e, n, t], la)
}
function ya(r) {
  const e = Or(r),
    n = _r(e)
  return Ge(n, n, n)
}
function $e(r) {
  const e = ga(r)[1]
  return 116 * Zn(e / 100) - 16
}
function Or(r) {
  return 100 * ba((r + 16) / 116)
}
function Le(r) {
  return Zn(r / 100) * 116 - 16
}
function Ur(r) {
  const e = r / 255
  return e <= 0.040449936 ? (e / 12.92) * 100 : Math.pow((e + 0.055) / 1.055, 2.4) * 100
}
function _r(r) {
  const e = r / 100
  let n = 0
  return (
    e <= 31308e-7 ? (n = e * 12.92) : (n = 1.055 * Math.pow(e, 1 / 2.4) - 0.055),
    ca(0, 255, Math.round(n * 255))
  )
}
function pa() {
  return ma
}
function Zn(r) {
  const e = 0.008856451679035631,
    n = 24389 / 27
  return r > e ? Math.pow(r, 1 / 3) : (n * r + 16) / 116
}
function ba(r) {
  const e = 0.008856451679035631,
    n = 24389 / 27,
    t = r * r * r
  return t > e ? t : (116 * r - 16) / n
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
class kr {
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
  static make(e = pa(), n = ((200 / Math.PI) * Or(50)) / 100, t = 50, o = 2, a = !1) {
    const i = e,
      c = i[0] * 0.401288 + i[1] * 0.650173 + i[2] * -0.051461,
      f = i[0] * -0.250268 + i[1] * 1.204414 + i[2] * 0.045854,
      l = i[0] * -2079e-6 + i[1] * 0.048952 + i[2] * 0.953127,
      d = 0.8 + o / 10,
      m = d >= 0.9 ? Qr(0.59, 0.69, (d - 0.9) * 10) : Qr(0.525, 0.59, (d - 0.8) * 10)
    let h = a ? 1 : d * (1 - (1 / 3.6) * Math.exp((-n - 42) / 92))
    h = h > 1 ? 1 : h < 0 ? 0 : h
    const C = d,
      b = [h * (100 / c) + 1 - h, h * (100 / f) + 1 - h, h * (100 / l) + 1 - h],
      u = 1 / (5 * n + 1),
      T = u * u * u * u,
      w = 1 - T,
      I = T * n + 0.1 * w * w * Math.cbrt(5 * n),
      S = Or(t) / e[1],
      E = 1.48 + Math.sqrt(S),
      p = 0.725 / Math.pow(S, 0.2),
      V = p,
      B = [
        Math.pow((I * b[0] * c) / 100, 0.42),
        Math.pow((I * b[1] * f) / 100, 0.42),
        Math.pow((I * b[2] * l) / 100, 0.42),
      ],
      G = [
        (400 * B[0]) / (B[0] + 27.13),
        (400 * B[1]) / (B[1] + 27.13),
        (400 * B[2]) / (B[2] + 27.13),
      ],
      H = (2 * G[0] + G[1] + 0.05 * G[2]) * p
    return new kr(S, H, p, V, m, C, b, I, Math.pow(I, 0.25), E)
  }
  /**
   * Parameters are intermediate values of the CAM16 conversion process. Their
   * names are shorthand for technical color science terminology, this class
   * would not benefit from documenting them individually. A brief overview
   * is available in the CAM16 specification, and a complete overview requires
   * a color science textbook, such as Fairchild's Color Appearance Models.
   */
  constructor(e, n, t, o, a, i, c, f, l, d) {
    ;(this.n = e),
      (this.aw = n),
      (this.nbb = t),
      (this.ncb = o),
      (this.c = a),
      (this.nc = i),
      (this.rgbD = c),
      (this.fl = f),
      (this.fLRoot = l),
      (this.z = d)
  }
}
kr.DEFAULT = kr.make()
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
class ur {
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
  constructor(e, n, t, o, a, i, c, f, l) {
    ;(this.hue = e),
      (this.chroma = n),
      (this.j = t),
      (this.q = o),
      (this.m = a),
      (this.s = i),
      (this.jstar = c),
      (this.astar = f),
      (this.bstar = l)
  }
  /**
   * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
   * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
   * specification, and is used to measure distances between colors.
   */
  distance(e) {
    const n = this.jstar - e.jstar,
      t = this.astar - e.astar,
      o = this.bstar - e.bstar,
      a = Math.sqrt(n * n + t * t + o * o)
    return 1.41 * Math.pow(a, 0.63)
  }
  /**
   * @param argb ARGB representation of a color.
   * @return CAM16 color, assuming the color was viewed in default viewing
   *     conditions.
   */
  static fromInt(e) {
    return ur.fromIntInViewingConditions(e, kr.DEFAULT)
  }
  /**
   * @param argb ARGB representation of a color.
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   * @return CAM16 color.
   */
  static fromIntInViewingConditions(e, n) {
    const t = (e & 16711680) >> 16,
      o = (e & 65280) >> 8,
      a = e & 255,
      i = Ur(t),
      c = Ur(o),
      f = Ur(a),
      l = 0.41233895 * i + 0.35762064 * c + 0.18051042 * f,
      d = 0.2126 * i + 0.7152 * c + 0.0722 * f,
      m = 0.01932141 * i + 0.11916382 * c + 0.95034478 * f,
      h = 0.401288 * l + 0.650173 * d - 0.051461 * m,
      C = -0.250268 * l + 1.204414 * d + 0.045854 * m,
      b = -2079e-6 * l + 0.048952 * d + 0.953127 * m,
      u = n.rgbD[0] * h,
      T = n.rgbD[1] * C,
      w = n.rgbD[2] * b,
      I = Math.pow((n.fl * Math.abs(u)) / 100, 0.42),
      S = Math.pow((n.fl * Math.abs(T)) / 100, 0.42),
      E = Math.pow((n.fl * Math.abs(w)) / 100, 0.42),
      p = (yr(u) * 400 * I) / (I + 27.13),
      V = (yr(T) * 400 * S) / (S + 27.13),
      B = (yr(w) * 400 * E) / (E + 27.13),
      G = (11 * p + -12 * V + B) / 11,
      H = (p + V - 2 * B) / 9,
      s = (20 * p + 20 * V + 21 * B) / 20,
      v = (40 * p + 20 * V + B) / 20,
      U = (Math.atan2(H, G) * 180) / Math.PI,
      er = U < 0 ? U + 360 : U >= 360 ? U - 360 : U,
      gr = (er * Math.PI) / 180,
      lr = v * n.nbb,
      sr = 100 * Math.pow(lr / n.aw, n.c * n.z),
      xr = (4 / n.c) * Math.sqrt(sr / 100) * (n.aw + 4) * n.fLRoot,
      Pr = er < 20.14 ? er + 360 : er,
      F = 0.25 * (Math.cos((Pr * Math.PI) / 180 + 2) + 3.8),
      $ = ((5e4 / 13) * F * n.nc * n.ncb * Math.sqrt(G * G + H * H)) / (s + 0.305),
      R = Math.pow($, 0.9) * Math.pow(1.64 - Math.pow(0.29, n.n), 0.73),
      M = R * Math.sqrt(sr / 100),
      j = M * n.fLRoot,
      L = 50 * Math.sqrt((R * n.c) / (n.aw + 4)),
      N = ((1 + 100 * 7e-3) * sr) / (1 + 7e-3 * sr),
      W = (1 / 0.0228) * Math.log(1 + 0.0228 * j),
      q = W * Math.cos(gr),
      z = W * Math.sin(gr)
    return new ur(er, M, sr, xr, j, L, N, q, z)
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   */
  static fromJch(e, n, t) {
    return ur.fromJchInViewingConditions(e, n, t, kr.DEFAULT)
  }
  /**
   * @param j CAM16 lightness
   * @param c CAM16 chroma
   * @param h CAM16 hue
   * @param viewingConditions Information about the environment where the color
   *     was observed.
   */
  static fromJchInViewingConditions(e, n, t, o) {
    const a = (4 / o.c) * Math.sqrt(e / 100) * (o.aw + 4) * o.fLRoot,
      i = n * o.fLRoot,
      c = n / Math.sqrt(e / 100),
      f = 50 * Math.sqrt((c * o.c) / (o.aw + 4)),
      l = (t * Math.PI) / 180,
      d = ((1 + 100 * 7e-3) * e) / (1 + 7e-3 * e),
      m = (1 / 0.0228) * Math.log(1 + 0.0228 * i),
      h = m * Math.cos(l),
      C = m * Math.sin(l)
    return new ur(t, n, e, a, i, f, d, h, C)
  }
  /**
   * @param jstar CAM16-UCS lightness.
   * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the Y axis.
   * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
   *     coordinate on the X axis.
   */
  static fromUcs(e, n, t) {
    return ur.fromUcsInViewingConditions(e, n, t, kr.DEFAULT)
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
    const a = n,
      i = t,
      c = Math.sqrt(a * a + i * i),
      l = (Math.exp(c * 0.0228) - 1) / 0.0228 / o.fLRoot
    let d = Math.atan2(i, a) * (180 / Math.PI)
    d < 0 && (d += 360)
    const m = e / (1 - (e - 100) * 7e-3)
    return ur.fromJchInViewingConditions(m, l, d, o)
  }
  /**
   *  @return ARGB representation of color, assuming the color was viewed in
   *     default viewing conditions, which are near-identical to the default
   *     viewing conditions for sRGB.
   */
  toInt() {
    return this.viewed(kr.DEFAULT)
  }
  /**
   * @param viewingConditions Information about the environment where the color
   *     will be viewed.
   * @return ARGB representation of color
   */
  viewed(e) {
    const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
      t = Math.pow(n / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9),
      o = (this.hue * Math.PI) / 180,
      a = 0.25 * (Math.cos(o + 2) + 3.8),
      i = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z),
      c = a * (5e4 / 13) * e.nc * e.ncb,
      f = i / e.nbb,
      l = Math.sin(o),
      d = Math.cos(o),
      m = (23 * (f + 0.305) * t) / (23 * c + 11 * t * d + 108 * t * l),
      h = m * d,
      C = m * l,
      b = (460 * f + 451 * h + 288 * C) / 1403,
      u = (460 * f - 891 * h - 261 * C) / 1403,
      T = (460 * f - 220 * h - 6300 * C) / 1403,
      w = Math.max(0, (27.13 * Math.abs(b)) / (400 - Math.abs(b))),
      I = yr(b) * (100 / e.fl) * Math.pow(w, 1 / 0.42),
      S = Math.max(0, (27.13 * Math.abs(u)) / (400 - Math.abs(u))),
      E = yr(u) * (100 / e.fl) * Math.pow(S, 1 / 0.42),
      p = Math.max(0, (27.13 * Math.abs(T)) / (400 - Math.abs(T))),
      V = yr(T) * (100 / e.fl) * Math.pow(p, 1 / 0.42),
      B = I / e.rgbD[0],
      G = E / e.rgbD[1],
      H = V / e.rgbD[2],
      s = 1.86206786 * B - 1.01125463 * G + 0.14918677 * H,
      v = 0.38752654 * B + 0.62144744 * G - 897398e-8 * H,
      D = -0.0158415 * B - 0.03412294 * G + 1.04996444 * H
    return ha(s, v, D)
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(e, n, t, o) {
    const a = 0.401288 * e + 0.650173 * n - 0.051461 * t,
      i = -0.250268 * e + 1.204414 * n + 0.045854 * t,
      c = -2079e-6 * e + 0.048952 * n + 0.953127 * t,
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
      I = (b + u - 2 * T) / 9,
      S = (20 * b + 20 * u + 21 * T) / 20,
      E = (40 * b + 20 * u + T) / 20,
      V = (Math.atan2(I, w) * 180) / Math.PI,
      B = V < 0 ? V + 360 : V >= 360 ? V - 360 : V,
      G = (B * Math.PI) / 180,
      H = E * o.nbb,
      s = 100 * Math.pow(H / o.aw, o.c * o.z),
      v = (4 / o.c) * Math.sqrt(s / 100) * (o.aw + 4) * o.fLRoot,
      D = B < 20.14 ? B + 360 : B,
      U = (1 / 4) * (Math.cos((D * Math.PI) / 180 + 2) + 3.8),
      gr = ((5e4 / 13) * U * o.nc * o.ncb * Math.sqrt(w * w + I * I)) / (S + 0.305),
      lr = Math.pow(gr, 0.9) * Math.pow(1.64 - Math.pow(0.29, o.n), 0.73),
      sr = lr * Math.sqrt(s / 100),
      xr = sr * o.fLRoot,
      Pr = 50 * Math.sqrt((lr * o.c) / (o.aw + 4)),
      F = ((1 + 100 * 7e-3) * s) / (1 + 7e-3 * s),
      P = Math.log(1 + 0.0228 * xr) / 0.0228,
      $ = P * Math.cos(G),
      R = P * Math.sin(G)
    return new ur(B, sr, s, v, xr, Pr, F, $, R)
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(e) {
    const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
      t = Math.pow(n / Math.pow(1.64 - Math.pow(0.29, e.n), 0.73), 1 / 0.9),
      o = (this.hue * Math.PI) / 180,
      a = 0.25 * (Math.cos(o + 2) + 3.8),
      i = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z),
      c = a * (5e4 / 13) * e.nc * e.ncb,
      f = i / e.nbb,
      l = Math.sin(o),
      d = Math.cos(o),
      m = (23 * (f + 0.305) * t) / (23 * c + 11 * t * d + 108 * t * l),
      h = m * d,
      C = m * l,
      b = (460 * f + 451 * h + 288 * C) / 1403,
      u = (460 * f - 891 * h - 261 * C) / 1403,
      T = (460 * f - 220 * h - 6300 * C) / 1403,
      w = Math.max(0, (27.13 * Math.abs(b)) / (400 - Math.abs(b))),
      I = yr(b) * (100 / e.fl) * Math.pow(w, 1 / 0.42),
      S = Math.max(0, (27.13 * Math.abs(u)) / (400 - Math.abs(u))),
      E = yr(u) * (100 / e.fl) * Math.pow(S, 1 / 0.42),
      p = Math.max(0, (27.13 * Math.abs(T)) / (400 - Math.abs(T))),
      V = yr(T) * (100 / e.fl) * Math.pow(p, 1 / 0.42),
      B = I / e.rgbD[0],
      G = E / e.rgbD[1],
      H = V / e.rgbD[2],
      s = 1.86206786 * B - 1.01125463 * G + 0.14918677 * H,
      v = 0.38752654 * B + 0.62144744 * G - 897398e-8 * H,
      D = -0.0158415 * B - 0.03412294 * G + 1.04996444 * H
    return [s, v, D]
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
class A {
  /**
   * Sanitizes a small enough angle in radians.
   *
   * @param angle An angle in radians; must not deviate too much
   * from 0.
   * @return A coterminal angle between 0 and 2pi.
   */
  static sanitizeRadians(e) {
    return (e + Math.PI * 8) % (Math.PI * 2)
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
    const n = e / 100
    let t = 0
    return n <= 31308e-7 ? (t = n * 12.92) : (t = 1.055 * Math.pow(n, 1 / 2.4) - 0.055), t * 255
  }
  static chromaticAdaptation(e) {
    const n = Math.pow(Math.abs(e), 0.42)
    return (yr(e) * 400 * n) / (n + 27.13)
  }
  /**
   * Returns the hue of a linear RGB color in CAM16.
   *
   * @param linrgb The linear RGB coordinates of a color.
   * @return The hue of the color in CAM16, in radians.
   */
  static hueOf(e) {
    const n = _e(e, A.SCALED_DISCOUNT_FROM_LINRGB),
      t = A.chromaticAdaptation(n[0]),
      o = A.chromaticAdaptation(n[1]),
      a = A.chromaticAdaptation(n[2]),
      i = (11 * t + -12 * o + a) / 11,
      c = (t + o - 2 * a) / 9
    return Math.atan2(c, i)
  }
  static areInCyclicOrder(e, n, t) {
    const o = A.sanitizeRadians(n - e),
      a = A.sanitizeRadians(t - e)
    return o < a
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
    return (n - e) / (t - e)
  }
  static lerpPoint(e, n, t) {
    return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n, e[2] + (t[2] - e[2]) * n]
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
    const a = A.intercept(e[o], n, t[o])
    return A.lerpPoint(e, a, t)
  }
  static isBounded(e) {
    return 0 <= e && e <= 100
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
    const t = A.Y_FROM_LINRGB[0],
      o = A.Y_FROM_LINRGB[1],
      a = A.Y_FROM_LINRGB[2],
      i = n % 4 <= 1 ? 0 : 100,
      c = n % 2 === 0 ? 0 : 100
    if (n < 4) {
      const f = i,
        l = c,
        d = (e - f * o - l * a) / t
      return A.isBounded(d) ? [d, f, l] : [-1, -1, -1]
    } else if (n < 8) {
      const f = i,
        l = c,
        d = (e - l * t - f * a) / o
      return A.isBounded(d) ? [l, d, f] : [-1, -1, -1]
    } else {
      const f = i,
        l = c,
        d = (e - f * t - l * o) / a
      return A.isBounded(d) ? [f, l, d] : [-1, -1, -1]
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
    let t = [-1, -1, -1],
      o = t,
      a = 0,
      i = 0,
      c = !1,
      f = !0
    for (let l = 0; l < 12; l++) {
      const d = A.nthVertex(e, l)
      if (d[0] < 0) continue
      const m = A.hueOf(d)
      if (!c) {
        ;(t = d), (o = d), (a = m), (i = m), (c = !0)
        continue
      }
      ;(f || A.areInCyclicOrder(a, m, i)) &&
        ((f = !1), A.areInCyclicOrder(a, n, m) ? ((o = d), (i = m)) : ((t = d), (a = m)))
    }
    return [t, o]
  }
  static midpoint(e, n) {
    return [(e[0] + n[0]) / 2, (e[1] + n[1]) / 2, (e[2] + n[2]) / 2]
  }
  static criticalPlaneBelow(e) {
    return Math.floor(e - 0.5)
  }
  static criticalPlaneAbove(e) {
    return Math.ceil(e - 0.5)
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
    const t = A.bisectToSegment(e, n)
    let o = t[0],
      a = A.hueOf(o),
      i = t[1]
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
          A.areInCyclicOrder(a, n, b) ? ((i = C), (l = m)) : ((o = C), (a = b), (f = m))
        }
      }
    return A.midpoint(o, i)
  }
  static inverseChromaticAdaptation(e) {
    const n = Math.abs(e),
      t = Math.max(0, (27.13 * n) / (400 - n))
    return yr(e) * Math.pow(t, 1 / 0.42)
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
    let o = Math.sqrt(t) * 11
    const a = kr.DEFAULT,
      i = 1 / Math.pow(1.64 - Math.pow(0.29, a.n), 0.73),
      f = 0.25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * a.nc * a.ncb,
      l = Math.sin(e),
      d = Math.cos(e)
    for (let m = 0; m < 5; m++) {
      const h = o / 100,
        C = n === 0 || o === 0 ? 0 : n / Math.sqrt(h),
        b = Math.pow(C * i, 1 / 0.9),
        T = (a.aw * Math.pow(h, 1 / a.c / a.z)) / a.nbb,
        w = (23 * (T + 0.305) * b) / (23 * f + 11 * b * d + 108 * b * l),
        I = w * d,
        S = w * l,
        E = (460 * T + 451 * I + 288 * S) / 1403,
        p = (460 * T - 891 * I - 261 * S) / 1403,
        V = (460 * T - 220 * I - 6300 * S) / 1403,
        B = A.inverseChromaticAdaptation(E),
        G = A.inverseChromaticAdaptation(p),
        H = A.inverseChromaticAdaptation(V),
        s = _e([B, G, H], A.LINRGB_FROM_SCALED_DISCOUNT)
      if (s[0] < 0 || s[1] < 0 || s[2] < 0) return 0
      const v = A.Y_FROM_LINRGB[0],
        D = A.Y_FROM_LINRGB[1],
        U = A.Y_FROM_LINRGB[2],
        er = v * s[0] + D * s[1] + U * s[2]
      if (er <= 0) return 0
      if (m === 4 || Math.abs(er - t) < 2e-3)
        return s[0] > 100.01 || s[1] > 100.01 || s[2] > 100.01 ? 0 : Bn(s)
      o = o - ((er - t) * o) / (2 * er)
    }
    return 0
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
    if (n < 1e-4 || t < 1e-4 || t > 99.9999) return ya(t)
    e = He(e)
    const o = (e / 180) * Math.PI,
      a = Or(t),
      i = A.findResultByJ(o, n, a)
    if (i !== 0) return i
    const c = A.bisectToLimit(a, o)
    return Bn(c)
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
    return ur.fromInt(A.solveToInt(e, n, t))
  }
}
A.SCALED_DISCOUNT_FROM_LINRGB = [
  [0.001200833568784504, 0.002389694492170889, 2795742885861124e-19],
  [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19],
  [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076],
]
A.LINRGB_FROM_SCALED_DISCOUNT = [
  [1373.2198709594231, -1100.4251190754821, -7.278681089101213],
  [-271.815969077903, 559.6580465940733, -32.46047482791194],
  [1.9622899599665666, -57.173814538844006, 308.7233197812385],
]
A.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722]
A.CRITICAL_PLANES = [
  0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313,
  0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281,
  0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123,
  0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023,
  0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623,
  0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609,
  1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128,
  1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272,
  1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073,
  1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795,
  2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997,
  3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087,
  3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185,
  4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282,
  4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865,
  5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924,
  6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543,
  7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165,
  8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839,
  9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427,
  10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341,
  12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942,
  13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828,
  14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891,
  16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269,
  17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138,
  19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502,
  21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328,
  22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083,
  24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664,
  26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893,
  28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627,
  31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665,
  33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207,
  35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659,
  38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545,
  40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224,
  43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209,
  46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054,
  49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014,
  52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493,
  55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621,
  58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311,
  62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921,
  65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222,
  69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312,
  72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072,
  76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904,
  80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706,
  84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819,
  88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438,
  92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274,
  96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776,
]
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
  static from(e, n, t) {
    return new fr(A.solveToInt(e, n, t))
  }
  /**
   * @param argb ARGB representation of a color.
   * @return HCT representation of a color in default viewing conditions
   */
  static fromInt(e) {
    return new fr(e)
  }
  toInt() {
    return this.argb
  }
  /**
   * A number, in degrees, representing ex. red, orange, yellow, etc.
   * Ranges from 0 <= hue < 360.
   */
  get hue() {
    return this.internalHue
  }
  /**
   * @param newHue 0 <= newHue < 360; invalid values are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set hue(e) {
    this.setInternalState(A.solveToInt(e, this.internalChroma, this.internalTone))
  }
  get chroma() {
    return this.internalChroma
  }
  /**
   * @param newChroma 0 <= newChroma < ?
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set chroma(e) {
    this.setInternalState(A.solveToInt(this.internalHue, e, this.internalTone))
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone
  }
  /**
   * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
   * Chroma may decrease because chroma has a different maximum for any given
   * hue and tone.
   */
  set tone(e) {
    this.setInternalState(A.solveToInt(this.internalHue, this.internalChroma, e))
  }
  constructor(e) {
    this.argb = e
    const n = ur.fromInt(e)
    ;(this.internalHue = n.hue),
      (this.internalChroma = n.chroma),
      (this.internalTone = $e(e)),
      (this.argb = e)
  }
  setInternalState(e) {
    const n = ur.fromInt(e)
    ;(this.internalHue = n.hue),
      (this.internalChroma = n.chroma),
      (this.internalTone = $e(e)),
      (this.argb = e)
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
    const t = ur.fromInt(this.toInt()).xyzInViewingConditions(e),
      o = ur.fromXyzInViewingConditions(t[0], t[1], t[2], kr.make())
    return fr.from(o.hue, o.chroma, Le(t[1]))
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
class qe {
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
    const t = fr.fromInt(e),
      o = fr.fromInt(n),
      a = fa(t.hue, o.hue),
      i = Math.min(a * 0.5, 15),
      c = He(t.hue + i * ua(t.hue, o.hue))
    return fr.from(c, t.chroma, t.tone).toInt()
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
    const o = qe.cam16Ucs(e, n, t),
      a = ur.fromInt(o),
      i = ur.fromInt(e)
    return fr.from(a.hue, i.chroma, $e(e)).toInt()
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
    const o = ur.fromInt(e),
      a = ur.fromInt(n),
      i = o.jstar,
      c = o.astar,
      f = o.bstar,
      l = a.jstar,
      d = a.astar,
      m = a.bstar,
      h = i + (l - i) * t,
      C = c + (d - c) * t,
      b = f + (m - f) * t
    return ur.fromUcs(h, C, b).toInt()
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
class cr {
  /**
   * Returns a contrast ratio, which ranges from 1 to 21.
   *
   * @param toneA Tone between 0 and 100. Values outside will be clamped.
   * @param toneB Tone between 0 and 100. Values outside will be clamped.
   */
  static ratioOfTones(e, n) {
    return (e = ue(0, 100, e)), (n = ue(0, 100, n)), cr.ratioOfYs(Or(e), Or(n))
  }
  static ratioOfYs(e, n) {
    const t = e > n ? e : n,
      o = t === n ? e : n
    return (t + 5) / (o + 5)
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
    if (e < 0 || e > 100) return -1
    const t = Or(e),
      o = n * (t + 5) - 5,
      a = cr.ratioOfYs(o, t),
      i = Math.abs(a - n)
    if (a < n && i > 0.04) return -1
    const c = Le(o) + 0.4
    return c < 0 || c > 100 ? -1 : c
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
    if (e < 0 || e > 100) return -1
    const t = Or(e),
      o = (t + 5) / n - 5,
      a = cr.ratioOfYs(t, o),
      i = Math.abs(a - n)
    if (a < n && i > 0.04) return -1
    const c = Le(o) - 0.4
    return c < 0 || c > 100 ? -1 : c
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
    const t = cr.lighter(e, n)
    return t < 0 ? 100 : t
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
    const t = cr.darker(e, n)
    return t < 0 ? 0 : t
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
class Ke {
  /**
   * Returns true if a color is disliked.
   *
   * @param hct A color to be judged.
   * @return Whether the color is disliked.
   *
   * Disliked is defined as a dark yellow-green that is not neutral.
   */
  static isDisliked(e) {
    const n = Math.round(e.hue) >= 90 && Math.round(e.hue) <= 111,
      t = Math.round(e.chroma) > 16,
      o = Math.round(e.tone) < 65
    return n && t && o
  }
  /**
   * If a color is disliked, lighten it to make it likable.
   *
   * @param hct A color to be judged.
   * @return A new color if the original color is disliked, or the original
   *   color if it is acceptable.
   */
  static fixIfDisliked(e) {
    return Ke.isDisliked(e) ? fr.from(e.hue, e.chroma, 70) : e
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
class x {
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  static fromPalette(e) {
    return new x(
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
  constructor(e, n, t, o, a, i, c, f) {
    if (
      ((this.name = e),
      (this.palette = n),
      (this.tone = t),
      (this.isBackground = o),
      (this.background = a),
      (this.secondBackground = i),
      (this.contrastCurve = c),
      (this.toneDeltaPair = f),
      (this.hctCache = /* @__PURE__ */ new Map()),
      !a && i)
    )
      throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`)
    if (!a && c)
      throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`)
    if (a && !c)
      throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */
  getArgb(e) {
    return this.getHct(e).toInt()
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
    const n = this.hctCache.get(e)
    if (n != null) return n
    const t = this.getTone(e),
      o = this.palette(e).getHct(t)
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e, o), o
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
    const n = e.contrastLevel < 0
    if (this.toneDeltaPair) {
      const t = this.toneDeltaPair(e),
        o = t.roleA,
        a = t.roleB,
        i = t.delta,
        c = t.polarity,
        f = t.stayTogether,
        d = this.background(e).getTone(e),
        m = c === 'nearer' || (c === 'lighter' && !e.isDark) || (c === 'darker' && e.isDark),
        h = m ? o : a,
        C = m ? a : o,
        b = this.name === h.name,
        u = e.isDark ? 1 : -1,
        T = h.contrastCurve.getContrast(e.contrastLevel),
        w = C.contrastCurve.getContrast(e.contrastLevel),
        I = h.tone(e)
      let S = cr.ratioOfTones(d, I) >= T ? I : x.foregroundTone(d, T)
      const E = C.tone(e)
      let p = cr.ratioOfTones(d, E) >= w ? E : x.foregroundTone(d, w)
      return (
        n && ((S = x.foregroundTone(d, T)), (p = x.foregroundTone(d, w))),
        (p - S) * u >= i ||
          ((p = ue(0, 100, S + i * u)), (p - S) * u >= i || (S = ue(0, 100, p - i * u))),
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
      let t = this.tone(e)
      if (this.background == null) return t
      const o = this.background(e).getTone(e),
        a = this.contrastCurve.getContrast(e.contrastLevel)
      if (
        (cr.ratioOfTones(o, t) >= a || (t = x.foregroundTone(o, a)),
        n && (t = x.foregroundTone(o, a)),
        this.isBackground &&
          50 <= t &&
          t < 60 &&
          (cr.ratioOfTones(49, o) >= a ? (t = 49) : (t = 60)),
        this.secondBackground)
      ) {
        const [i, c] = [this.background, this.secondBackground],
          [f, l] = [i(e).getTone(e), c(e).getTone(e)],
          [d, m] = [Math.max(f, l), Math.min(f, l)]
        if (cr.ratioOfTones(d, t) >= a && cr.ratioOfTones(m, t) >= a) return t
        const h = cr.lighter(d, a),
          C = cr.darker(m, a),
          b = []
        return (
          h !== -1 && b.push(h),
          C !== -1 && b.push(C),
          x.tonePrefersLightForeground(f) || x.tonePrefersLightForeground(l)
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
      return t
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
    const t = cr.lighterUnsafe(e, n),
      o = cr.darkerUnsafe(e, n),
      a = cr.ratioOfTones(t, e),
      i = cr.ratioOfTones(o, e)
    if (x.tonePrefersLightForeground(e)) {
      const f = Math.abs(a - i) < 0.1 && a < n && i < n
      return a >= n || a >= i || f ? t : o
    } else return i >= n || i >= a ? o : t
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
    return Math.round(e) < 60
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */
  static toneAllowsLightForeground(e) {
    return Math.round(e) <= 49
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */
  static enableLightForeground(e) {
    return x.tonePrefersLightForeground(e) && !x.toneAllowsLightForeground(e) ? 49 : e
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
var re
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
})(re || (re = {}))
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
class Y {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  constructor(e, n, t, o) {
    ;(this.low = e), (this.normal = n), (this.medium = t), (this.high = o)
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  getContrast(e) {
    return e <= -1
      ? this.low
      : e < 0
        ? Qr(this.low, this.normal, (e - -1) / 1)
        : e < 0.5
          ? Qr(this.normal, this.medium, (e - 0) / 0.5)
          : e < 1
            ? Qr(this.medium, this.high, (e - 0.5) / 0.5)
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
 */
class pr {
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
    ;(this.roleA = e),
      (this.roleB = n),
      (this.delta = t),
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
 */
function Yr(r) {
  return r.variant === re.FIDELITY || r.variant === re.CONTENT
}
function ir(r) {
  return r.variant === re.MONOCHROME
}
function Ca(r, e, n, t) {
  let o = n,
    a = fr.from(r, e, n)
  if (a.chroma < e) {
    let i = a.chroma
    for (; a.chroma < e; ) {
      o += t ? -1 : 1
      const c = fr.from(r, e, o)
      if (i > c.chroma || Math.abs(c.chroma - e) < 0.4) break
      const f = Math.abs(c.chroma - e),
        l = Math.abs(a.chroma - e)
      f < l && (a = c), (i = Math.max(i, c.chroma))
    }
  }
  return o
}
function Fa(r) {
  return kr.make(
    /*whitePoint=*/
    void 0,
    /*adaptingLuminance=*/
    void 0,
    /*backgroundLstar=*/
    r.isDark ? 30 : 80,
    /*surround=*/
    void 0,
    /*discountingIlluminant=*/
    void 0,
  )
}
function Xe(r, e) {
  const n = r.inViewingConditions(Fa(e))
  return x.tonePrefersLightForeground(r.tone) && !x.toneAllowsLightForeground(n.tone)
    ? x.enableLightForeground(r.tone)
    : x.enableLightForeground(n.tone)
}
class g {
  static highestSurface(e) {
    return e.isDark ? g.surfaceBright : g.surfaceDim
  }
}
g.contentAccentToneDelta = 15
g.primaryPaletteKeyColor = x.fromPalette({
  name: 'primary_palette_key_color',
  palette: (r) => r.primaryPalette,
  tone: (r) => r.primaryPalette.keyColor.tone,
})
g.secondaryPaletteKeyColor = x.fromPalette({
  name: 'secondary_palette_key_color',
  palette: (r) => r.secondaryPalette,
  tone: (r) => r.secondaryPalette.keyColor.tone,
})
g.tertiaryPaletteKeyColor = x.fromPalette({
  name: 'tertiary_palette_key_color',
  palette: (r) => r.tertiaryPalette,
  tone: (r) => r.tertiaryPalette.keyColor.tone,
})
g.neutralPaletteKeyColor = x.fromPalette({
  name: 'neutral_palette_key_color',
  palette: (r) => r.neutralPalette,
  tone: (r) => r.neutralPalette.keyColor.tone,
})
g.neutralVariantPaletteKeyColor = x.fromPalette({
  name: 'neutral_variant_palette_key_color',
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => r.neutralVariantPalette.keyColor.tone,
})
g.background = x.fromPalette({
  name: 'background',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 6 : 98),
  isBackground: !0,
})
g.onBackground = x.fromPalette({
  name: 'on_background',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 90 : 10),
  background: (r) => g.background,
  contrastCurve: new Y(3, 3, 4.5, 7),
})
g.surface = x.fromPalette({
  name: 'surface',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 6 : 98),
  isBackground: !0,
})
g.surfaceDim = x.fromPalette({
  name: 'surface_dim',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 6 : 87),
  isBackground: !0,
})
g.surfaceBright = x.fromPalette({
  name: 'surface_bright',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 24 : 98),
  isBackground: !0,
})
g.surfaceContainerLowest = x.fromPalette({
  name: 'surface_container_lowest',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 4 : 100),
  isBackground: !0,
})
g.surfaceContainerLow = x.fromPalette({
  name: 'surface_container_low',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 10 : 96),
  isBackground: !0,
})
g.surfaceContainer = x.fromPalette({
  name: 'surface_container',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 12 : 94),
  isBackground: !0,
})
g.surfaceContainerHigh = x.fromPalette({
  name: 'surface_container_high',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 17 : 92),
  isBackground: !0,
})
g.surfaceContainerHighest = x.fromPalette({
  name: 'surface_container_highest',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 22 : 90),
  isBackground: !0,
})
g.onSurface = x.fromPalette({
  name: 'on_surface',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 90 : 10),
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.surfaceVariant = x.fromPalette({
  name: 'surface_variant',
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => (r.isDark ? 30 : 90),
  isBackground: !0,
})
g.onSurfaceVariant = x.fromPalette({
  name: 'on_surface_variant',
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => (r.isDark ? 80 : 30),
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(3, 4.5, 7, 11),
})
g.inverseSurface = x.fromPalette({
  name: 'inverse_surface',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 90 : 20),
})
g.inverseOnSurface = x.fromPalette({
  name: 'inverse_on_surface',
  palette: (r) => r.neutralPalette,
  tone: (r) => (r.isDark ? 20 : 95),
  background: (r) => g.inverseSurface,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.outline = x.fromPalette({
  name: 'outline',
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => (r.isDark ? 60 : 50),
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1.5, 3, 4.5, 7),
})
g.outlineVariant = x.fromPalette({
  name: 'outline_variant',
  palette: (r) => r.neutralVariantPalette,
  tone: (r) => (r.isDark ? 30 : 80),
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
})
g.shadow = x.fromPalette({
  name: 'shadow',
  palette: (r) => r.neutralPalette,
  tone: (r) => 0,
})
g.scrim = x.fromPalette({
  name: 'scrim',
  palette: (r) => r.neutralPalette,
  tone: (r) => 0,
})
g.surfaceTint = x.fromPalette({
  name: 'surface_tint',
  palette: (r) => r.primaryPalette,
  tone: (r) => (r.isDark ? 80 : 40),
  isBackground: !0,
})
g.primary = x.fromPalette({
  name: 'primary',
  palette: (r) => r.primaryPalette,
  tone: (r) => (ir(r) ? (r.isDark ? 100 : 0) : r.isDark ? 80 : 40),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new pr(g.primaryContainer, g.primary, 15, 'nearer', !1),
})
g.onPrimary = x.fromPalette({
  name: 'on_primary',
  palette: (r) => r.primaryPalette,
  tone: (r) => (ir(r) ? (r.isDark ? 10 : 90) : r.isDark ? 20 : 100),
  background: (r) => g.primary,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.primaryContainer = x.fromPalette({
  name: 'primary_container',
  palette: (r) => r.primaryPalette,
  tone: (r) =>
    Yr(r) ? Xe(r.sourceColorHct, r) : ir(r) ? (r.isDark ? 85 : 25) : r.isDark ? 30 : 90,
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.primaryContainer, g.primary, 15, 'nearer', !1),
})
g.onPrimaryContainer = x.fromPalette({
  name: 'on_primary_container',
  palette: (r) => r.primaryPalette,
  tone: (r) =>
    Yr(r)
      ? x.foregroundTone(g.primaryContainer.tone(r), 4.5)
      : ir(r)
        ? r.isDark
          ? 0
          : 100
        : r.isDark
          ? 90
          : 10,
  background: (r) => g.primaryContainer,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.inversePrimary = x.fromPalette({
  name: 'inverse_primary',
  palette: (r) => r.primaryPalette,
  tone: (r) => (r.isDark ? 40 : 80),
  background: (r) => g.inverseSurface,
  contrastCurve: new Y(3, 4.5, 7, 11),
})
g.secondary = x.fromPalette({
  name: 'secondary',
  palette: (r) => r.secondaryPalette,
  tone: (r) => (r.isDark ? 80 : 40),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new pr(g.secondaryContainer, g.secondary, 15, 'nearer', !1),
})
g.onSecondary = x.fromPalette({
  name: 'on_secondary',
  palette: (r) => r.secondaryPalette,
  tone: (r) => (ir(r) ? (r.isDark ? 10 : 100) : r.isDark ? 20 : 100),
  background: (r) => g.secondary,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.secondaryContainer = x.fromPalette({
  name: 'secondary_container',
  palette: (r) => r.secondaryPalette,
  tone: (r) => {
    const e = r.isDark ? 30 : 90
    if (ir(r)) return r.isDark ? 30 : 85
    if (!Yr(r)) return e
    let n = Ca(r.secondaryPalette.hue, r.secondaryPalette.chroma, e, !r.isDark)
    return (n = Xe(r.secondaryPalette.getHct(n), r)), n
  },
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.secondaryContainer, g.secondary, 15, 'nearer', !1),
})
g.onSecondaryContainer = x.fromPalette({
  name: 'on_secondary_container',
  palette: (r) => r.secondaryPalette,
  tone: (r) => (Yr(r) ? x.foregroundTone(g.secondaryContainer.tone(r), 4.5) : r.isDark ? 90 : 10),
  background: (r) => g.secondaryContainer,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.tertiary = x.fromPalette({
  name: 'tertiary',
  palette: (r) => r.tertiaryPalette,
  tone: (r) => (ir(r) ? (r.isDark ? 90 : 25) : r.isDark ? 80 : 40),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new pr(g.tertiaryContainer, g.tertiary, 15, 'nearer', !1),
})
g.onTertiary = x.fromPalette({
  name: 'on_tertiary',
  palette: (r) => r.tertiaryPalette,
  tone: (r) => (ir(r) ? (r.isDark ? 10 : 90) : r.isDark ? 20 : 100),
  background: (r) => g.tertiary,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.tertiaryContainer = x.fromPalette({
  name: 'tertiary_container',
  palette: (r) => r.tertiaryPalette,
  tone: (r) => {
    if (ir(r)) return r.isDark ? 60 : 49
    if (!Yr(r)) return r.isDark ? 30 : 90
    const e = Xe(r.tertiaryPalette.getHct(r.sourceColorHct.tone), r),
      n = r.tertiaryPalette.getHct(e)
    return Ke.fixIfDisliked(n).tone
  },
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.tertiaryContainer, g.tertiary, 15, 'nearer', !1),
})
g.onTertiaryContainer = x.fromPalette({
  name: 'on_tertiary_container',
  palette: (r) => r.tertiaryPalette,
  tone: (r) =>
    ir(r)
      ? r.isDark
        ? 0
        : 100
      : Yr(r)
        ? x.foregroundTone(g.tertiaryContainer.tone(r), 4.5)
        : r.isDark
          ? 90
          : 10,
  background: (r) => g.tertiaryContainer,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.error = x.fromPalette({
  name: 'error',
  palette: (r) => r.errorPalette,
  tone: (r) => (r.isDark ? 80 : 40),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(3, 4.5, 7, 11),
  toneDeltaPair: (r) => new pr(g.errorContainer, g.error, 15, 'nearer', !1),
})
g.onError = x.fromPalette({
  name: 'on_error',
  palette: (r) => r.errorPalette,
  tone: (r) => (r.isDark ? 20 : 100),
  background: (r) => g.error,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.errorContainer = x.fromPalette({
  name: 'error_container',
  palette: (r) => r.errorPalette,
  tone: (r) => (r.isDark ? 30 : 90),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.errorContainer, g.error, 15, 'nearer', !1),
})
g.onErrorContainer = x.fromPalette({
  name: 'on_error_container',
  palette: (r) => r.errorPalette,
  tone: (r) => (r.isDark ? 90 : 10),
  background: (r) => g.errorContainer,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.primaryFixed = x.fromPalette({
  name: 'primary_fixed',
  palette: (r) => r.primaryPalette,
  tone: (r) => (ir(r) ? 40 : 90),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.primaryFixed, g.primaryFixedDim, 10, 'lighter', !0),
})
g.primaryFixedDim = x.fromPalette({
  name: 'primary_fixed_dim',
  palette: (r) => r.primaryPalette,
  tone: (r) => (ir(r) ? 30 : 80),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.primaryFixed, g.primaryFixedDim, 10, 'lighter', !0),
})
g.onPrimaryFixed = x.fromPalette({
  name: 'on_primary_fixed',
  palette: (r) => r.primaryPalette,
  tone: (r) => (ir(r) ? 100 : 10),
  background: (r) => g.primaryFixedDim,
  secondBackground: (r) => g.primaryFixed,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.onPrimaryFixedVariant = x.fromPalette({
  name: 'on_primary_fixed_variant',
  palette: (r) => r.primaryPalette,
  tone: (r) => (ir(r) ? 90 : 30),
  background: (r) => g.primaryFixedDim,
  secondBackground: (r) => g.primaryFixed,
  contrastCurve: new Y(3, 4.5, 7, 11),
})
g.secondaryFixed = x.fromPalette({
  name: 'secondary_fixed',
  palette: (r) => r.secondaryPalette,
  tone: (r) => (ir(r) ? 80 : 90),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.secondaryFixed, g.secondaryFixedDim, 10, 'lighter', !0),
})
g.secondaryFixedDim = x.fromPalette({
  name: 'secondary_fixed_dim',
  palette: (r) => r.secondaryPalette,
  tone: (r) => (ir(r) ? 70 : 80),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.secondaryFixed, g.secondaryFixedDim, 10, 'lighter', !0),
})
g.onSecondaryFixed = x.fromPalette({
  name: 'on_secondary_fixed',
  palette: (r) => r.secondaryPalette,
  tone: (r) => 10,
  background: (r) => g.secondaryFixedDim,
  secondBackground: (r) => g.secondaryFixed,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.onSecondaryFixedVariant = x.fromPalette({
  name: 'on_secondary_fixed_variant',
  palette: (r) => r.secondaryPalette,
  tone: (r) => (ir(r) ? 25 : 30),
  background: (r) => g.secondaryFixedDim,
  secondBackground: (r) => g.secondaryFixed,
  contrastCurve: new Y(3, 4.5, 7, 11),
})
g.tertiaryFixed = x.fromPalette({
  name: 'tertiary_fixed',
  palette: (r) => r.tertiaryPalette,
  tone: (r) => (ir(r) ? 40 : 90),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.tertiaryFixed, g.tertiaryFixedDim, 10, 'lighter', !0),
})
g.tertiaryFixedDim = x.fromPalette({
  name: 'tertiary_fixed_dim',
  palette: (r) => r.tertiaryPalette,
  tone: (r) => (ir(r) ? 30 : 80),
  isBackground: !0,
  background: (r) => g.highestSurface(r),
  contrastCurve: new Y(1, 1, 3, 7),
  toneDeltaPair: (r) => new pr(g.tertiaryFixed, g.tertiaryFixedDim, 10, 'lighter', !0),
})
g.onTertiaryFixed = x.fromPalette({
  name: 'on_tertiary_fixed',
  palette: (r) => r.tertiaryPalette,
  tone: (r) => (ir(r) ? 100 : 10),
  background: (r) => g.tertiaryFixedDim,
  secondBackground: (r) => g.tertiaryFixed,
  contrastCurve: new Y(4.5, 7, 11, 21),
})
g.onTertiaryFixedVariant = x.fromPalette({
  name: 'on_tertiary_fixed_variant',
  palette: (r) => r.tertiaryPalette,
  tone: (r) => (ir(r) ? 90 : 30),
  background: (r) => g.tertiaryFixedDim,
  secondBackground: (r) => g.tertiaryFixed,
  contrastCurve: new Y(3, 4.5, 7, 11),
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
 */
class mr {
  /**
   * @param argb ARGB representation of a color
   * @return Tones matching that color's hue and chroma.
   */
  static fromInt(e) {
    const n = fr.fromInt(e)
    return mr.fromHct(n)
  }
  /**
   * @param hct Hct
   * @return Tones matching that color's hue and chroma.
   */
  static fromHct(e) {
    return new mr(e.hue, e.chroma, e)
  }
  /**
   * @param hue HCT hue
   * @param chroma HCT chroma
   * @return Tones matching hue and chroma.
   */
  static fromHueAndChroma(e, n) {
    return new mr(e, n, mr.createKeyColor(e, n))
  }
  constructor(e, n, t) {
    ;(this.hue = e),
      (this.chroma = n),
      (this.keyColor = t),
      (this.cache = /* @__PURE__ */ new Map())
  }
  static createKeyColor(e, n) {
    let o = fr.from(e, n, 50),
      a = Math.abs(o.chroma - n)
    for (let i = 1; i < 50; i += 1) {
      if (Math.round(n) === Math.round(o.chroma)) return o
      const c = fr.from(e, n, 50 + i),
        f = Math.abs(c.chroma - n)
      f < a && ((a = f), (o = c))
      const l = fr.from(e, n, 50 - i),
        d = Math.abs(l.chroma - n)
      d < a && ((a = d), (o = l))
    }
    return o
  }
  /**
   * @param tone HCT tone, measured from 0 to 100.
   * @return ARGB representation of a color with that tone.
   */
  tone(e) {
    let n = this.cache.get(e)
    return (
      n === void 0 && ((n = fr.from(this.hue, this.chroma, e).toInt()), this.cache.set(e, n)), n
    )
  }
  /**
   * @param tone HCT tone.
   * @return HCT representation of a color with that tone.
   */
  getHct(e) {
    return fr.fromInt(this.tone(e))
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
class Sr {
  /**
   * @param argb ARGB representation of a color
   */
  static of(e) {
    return new Sr(e, !1)
  }
  /**
   * @param argb ARGB representation of a color
   */
  static contentOf(e) {
    return new Sr(e, !0)
  }
  /**
   * Create a [CorePalette] from a set of colors
   */
  static fromColors(e) {
    return Sr.createPaletteFromColors(!1, e)
  }
  /**
   * Create a content [CorePalette] from a set of colors
   */
  static contentFromColors(e) {
    return Sr.createPaletteFromColors(!0, e)
  }
  static createPaletteFromColors(e, n) {
    const t = new Sr(n.primary, e)
    if (n.secondary) {
      const o = new Sr(n.secondary, e)
      t.a2 = o.a1
    }
    if (n.tertiary) {
      const o = new Sr(n.tertiary, e)
      t.a3 = o.a1
    }
    if (n.error) {
      const o = new Sr(n.error, e)
      t.error = o.a1
    }
    if (n.neutral) {
      const o = new Sr(n.neutral, e)
      t.n1 = o.n1
    }
    if (n.neutralVariant) {
      const o = new Sr(n.neutralVariant, e)
      t.n2 = o.n2
    }
    return t
  }
  constructor(e, n) {
    const t = fr.fromInt(e),
      o = t.hue,
      a = t.chroma
    n
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
 */
function rt(r) {
  const e = Xn(r),
    n = Jn(r),
    t = Qn(r),
    o = [e.toString(16), n.toString(16), t.toString(16)]
  for (const [a, i] of o.entries()) i.length === 1 && (o[a] = '0' + i)
  return '#' + o.join('')
}
function fe(r) {
  r = r.replace('#', '')
  const e = r.length === 3,
    n = r.length === 6,
    t = r.length === 8
  if (!e && !n && !t) throw new Error('unexpected hex ' + r)
  let o = 0,
    a = 0,
    i = 0
  return (
    e
      ? ((o = Ar(r.slice(0, 1).repeat(2))),
        (a = Ar(r.slice(1, 2).repeat(2))),
        (i = Ar(r.slice(2, 3).repeat(2))))
      : n
        ? ((o = Ar(r.slice(0, 2))), (a = Ar(r.slice(2, 4))), (i = Ar(r.slice(4, 6))))
        : t && ((o = Ar(r.slice(2, 4))), (a = Ar(r.slice(4, 6))), (i = Ar(r.slice(6, 8)))),
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
 */
function Sa(r, e) {
  let n = e.value
  const o = Sr.of(n).a1
  return {
    color: e,
    value: n,
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
var O = /* @__PURE__ */ ((r) => (
  (r[(r.Hover = 0.08)] = 'Hover'),
  (r[(r.Focus = 0.12)] = 'Focus'),
  (r[(r.Press = 0.12)] = 'Press'),
  (r[(r.Drag = 0.16)] = 'Drag'),
  r
))(O || {})
const _ = (r, e, n) => rt(qe.cam16Ucs(fe(e), fe(n), r)),
  De = (r, e, n, t) => ({
    props: { variant: r, color: e },
    style: {
      backgroundColor: n,
      color: t,
      '&:hover': {
        backgroundColor: _(O.Hover, n, t),
      },
      '&:focus': {
        backgroundColor: _(O.Focus, n, t),
      },
      '&:active': {
        backgroundColor: _(O.Press, n, t),
      },
    },
  }),
  Ta = (r, e, n, t) => ({
    props: { variant: 'outlined', color: r },
    style: {
      color: e,
      '&:hover': {
        backgroundColor: _(O.Hover, n, e),
        borderColor: _(O.Hover, t, e),
      },
      '&:focus': {
        backgroundColor: _(O.Focus, n, e),
        borderColor: _(O.Focus, e, e),
      },
      '&:active': {
        backgroundColor: _(O.Press, n, e),
        borderColor: _(O.Press, t, e),
      },
    },
  }),
  Oe = (r) => [
    {
      props: { variant: r, size: 'small' },
      style: {
        padding: '4px 10px',
        fontSize: '0.8125rem',
        minHeight: '32px',
      },
    },
    {
      props: { variant: r, size: 'medium' },
      style: {
        padding: '6px 16px',
        fontSize: '0.875rem',
        minHeight: '36px',
      },
    },
    {
      props: { variant: r, size: 'large' },
      style: {
        padding: '8px 22px',
        fontSize: '0.9375rem',
        minHeight: '40px',
      },
    },
  ],
  Ea = (r, e, n) => ({
    props: { variant: 'text', color: r },
    style: {
      color: e,
      '&:hover': {
        backgroundColor: _(O.Hover, n, e),
      },
      '&:focus': {
        backgroundColor: _(O.Focus, n, e),
      },
      '&:active': {
        backgroundColor: _(O.Press, n, e),
      },
    },
  }),
  xa = ({ palette: r, shadows: e }) => {
    const t = [
        ['primary', r.primary.main, r.onPrimary.main],
        ['secondary', r.secondary.main, r.onSecondary.main],
        ['tertiary', r.tertiary.main, r.onTertiary.main],
        ['error', r.error.main, r.onError.main],
        ['info', r.info.main, r.onInfo.main],
        ['success', r.success.main, r.onSuccess.main],
        ['warning', r.warning.main, r.onWarning.main],
      ].map((u) => De('filled', ...u)),
      o = Oe('filled'),
      i = [
        ['primary', r.primaryContainer.main, r.onPrimaryContainer.main],
        ['secondary', r.secondaryContainer.main, r.onSecondaryContainer.main],
        ['tertiary', r.tertiaryContainer.main, r.onTertiaryContainer.main],
        ['error', r.errorContainer.main, r.onErrorContainer.main],
        ['info', r.infoContainer.main, r.onInfoContainer.main],
        ['success', r.successContainer.main, r.onSuccessContainer.main],
        ['warning', r.warningContainer.main, r.onWarningContainer.main],
      ].map((u) => De('tonal', ...u)),
      c = Oe('tonal'),
      l = [
        ['primary', r.primary.main, r.surface.main, r.outline.main],
        ['secondary', r.secondary.main, r.surface.main, r.outline.main],
        ['tertiary', r.tertiary.main, r.surface.main, r.outline.main],
        ['error', r.error.main, r.surface.main, r.outline.main],
        ['info', r.info.main, r.surface.main, r.outline.main],
        ['success', r.success.main, r.surface.main, r.outline.main],
        ['warning', r.warning.main, r.surface.main, r.outline.main],
      ].map((u) => Ta(...u)),
      m = [
        ['primary', r.surfaceContainerLow.main, r.primary.main],
        ['secondary', r.surfaceContainerLow.main, r.secondary.main],
        ['tertiary', r.surfaceContainerLow.main, r.tertiary.main],
        ['error', r.surfaceContainerLow.main, r.error.main],
        ['info', r.surfaceContainerLow.main, r.info.main],
        ['success', r.surfaceContainerLow.main, r.success.main],
        ['warning', r.surfaceContainerLow.main, r.warning.main],
      ].map((u) => De('elevated', ...u)),
      h = Oe('elevated'),
      b = [
        ['primary', r.primary.main, r.surface.main],
        ['secondary', r.secondary.main, r.surface.main],
        ['tertiary', r.tertiary.main, r.surface.main],
        ['error', r.error.main, r.surface.main],
        ['info', r.info.main, r.surface.main],
        ['success', r.success.main, r.surface.main],
        ['warning', r.warning.main, r.surface.main],
      ].map((u) => Ea(...u))
    return {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '30px',
            textTransform: 'none',
            //   fontWeight: 'bold',
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
                backgroundColor: hr(r.onSurface.main, 0.12),
                color: hr(r.onSurface.main, 0.38),
                boxShadow: e[0],
              },
              '&:hover': {
                boxShadow: e[1],
              },
              '&:focus': {
                boxShadow: e[0],
              },
              '&:active': {
                boxShadow: e[0],
              },
            },
          },
          ...t,
          ...o,
          {
            props: { variant: 'tonal' },
            style: {
              boxShadow: e[0],
              '&.Mui-disabled': {
                backgroundColor: hr(r.onSurface.main, 0.12),
                color: hr(r.onSurface.main, 0.38),
                boxShadow: e[0],
              },
              '&:hover': {
                boxShadow: e[1],
              },
              '&:focus': {
                boxShadow: e[0],
              },
              '&:active': {
                boxShadow: e[0],
              },
            },
          },
          ...i,
          ...c,
          {
            props: { variant: 'outlined' },
            style: {
              //backgroundColor: palette.surface.main,
              borderColor: r.outline.main,
              borderWidth: '1px',
              boxShadow: e[0],
              '&.Mui-disabled': {
                borderColor: hr(r.onSurface.main, 0.12),
                color: hr(r.onSurface.main, 0.38),
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
                backgroundColor: hr(r.onSurface.main, 0.12),
                color: hr(r.onSurface.main, 0.38),
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
              '&.Mui-disabled': {
                color: hr(r.onSurface.main, 0.38),
              },
            },
          },
          ...b,
        ],
      },
    }
  },
  ka = ({ palette: r, shadows: e, transitions: n }) => ({
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
      variants: [
        {
          props: { variant: 'elevation' },
          style: {
            boxShadow: e[1],
            backgroundColor: r.surfaceContainerLow.main,
            transition: n.create(['background-color', 'box-shadow', 'border-color', 'color'], {
              duration: n.duration.short,
            }),
            '&:hover': {
              background: _(O.Hover, r.surfaceContainerLow.main, r.primary.main),
              boxShadow: e[2],
            },
            '&:focus': {
              boxShadow: e[1],
              background: _(O.Focus, r.surfaceContainerLow.main, r.primary.main),
            },
            '&:active': {
              boxShadow: e[1],
              background: _(O.Press, r.surfaceContainerLow.main, r.primary.main),
            },
            '&.Mui-disabled': {
              backgroundColor: hr(r.surfaceContainerLow.main, 0.38),
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
            transition: n.create(['background-color', 'box-shadow', 'border-color', 'color'], {
              duration: n.duration.short,
            }),
            '&:hover': {
              background: _(O.Hover, r.surfaceContainerHighest.main, r.primary.main),
              boxShadow: e[1],
            },
            '&:focus': {
              boxShadow: e[0],
              background: _(O.Focus, r.surfaceContainerHighest.main, r.primary.main),
            },
            '&:active': {
              boxShadow: e[1],
              background: _(O.Press, r.surfaceContainerHighest.main, r.primary.main),
            },
            '&.Mui-disabled': {
              backgroundColor: hr(r.surfaceContainerHighest.main, 0.38),
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
            transition: n.create(['background-color', 'box-shadow', 'border-color', 'color'], {
              duration: n.duration.short,
            }),
            '&:hover': {
              background: _(O.Hover, r.surface.main, r.primary.main),
              boxShadow: e[1],
            },
            '&:focus': {
              boxShadow: e[0],
              background: _(O.Focus, r.surface.main, r.primary.main),
            },
            '&:active': {
              boxShadow: e[2],
              background: _(O.Press, r.surfaceContainerHighest.main, r.primary.main),
            },
            '&.Mui-disabled': {
              borderColor: hr(r.surfaceContainerHighest.main, 0.12),
              boxShadow: e[0],
            },
          },
        },
      ],
    },
  }),
  va = (r) => ({
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: !0,
      },
      styleOverrides: {
        '*::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  }),
  Pa = ({ palette: r }) => ({
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
  wa = ({ palette: r, shadows: e }) => ({
    MuiFab: {
      defaultProps: { color: 'secondary' },
      styleOverrides: {
        root: {
          boxShadow: e[3],
          borderRadius: '18px',
        },
      },
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: r.primaryContainer.main,
            color: r.onPrimaryContainer.main,
            '&:hover': {
              background: _(O.Hover, r.primaryContainer.main, r.onPrimaryContainer.main),
              boxShadow: e[4],
            },
            '&:focus': {
              background: _(O.Focus, r.primaryContainer.main, r.onPrimaryContainer.main),
              boxShadow: e[3],
            },
            '&:active': {
              background: _(O.Press, r.primaryContainer.main, r.onPrimaryContainer.main),
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
              background: _(O.Hover, r.secondaryContainer.main, r.onSecondaryContainer.main),
              boxShadow: e[4],
            },
            '&:focus': {
              background: _(O.Focus, r.secondaryContainer.main, r.onSecondaryContainer.main),
              boxShadow: e[3],
            },
            '&:active': {
              background: _(O.Press, r.secondaryContainer.main, r.onSecondaryContainer.main),
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
              background: _(O.Hover, r.surfaceContainer.main, r.primary.main),
              boxShadow: e[4],
            },
            '&:focus': {
              background: _(O.Focus, r.surfaceContainer.main, r.primary.main),
              boxShadow: e[3],
            },
            '&:active': {
              background: _(O.Press, r.surfaceContainer.main, r.primary.main),
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
              background: _(O.Hover, r.tertiaryContainer.main, r.onTertiaryContainer.main),
              boxShadow: e[4],
            },
            '&:focus': {
              background: _(O.Focus, r.tertiaryContainer.main, r.onTertiaryContainer.main),
              boxShadow: e[3],
            },
            '&:active': {
              background: _(O.Press, r.tertiaryContainer.main, r.onTertiaryContainer.main),
              boxShadow: e[3],
            },
          },
        },
      ],
    },
  }),
  Aa = (r) => ({
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 1,
          paddingBottom: 1,
          '& .MuiListItemButton-root': {
            paddingTop: 8,
            paddingBottom: 8,
          },
        },
      },
    },
  }),
  Ma = ({ palette: r }) => ({
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          color: r.onSurfaceVariant.main,
          '&:hover': {
            backgroundColor: _(O.Hover, r.surfaceContainerLow.main, r.onSurface.main),
            color: _(O.Hover, r.onSurfaceVariant.main, r.onSurface.main),
          },
          '&:active': {
            backgroundColor: _(O.Press, r.surfaceContainerLow.main, r.onSecondaryContainer.main),
            color: _(O.Press, r.onSurfaceVariant.main, r.onSurface.main),
          },
          '&.Mui-selected': {
            color: r.onSecondaryContainer.main,
            background: r.secondaryContainer.main,
            '& > .MuiListItemText-root > .MuiTypography-root': {
              fontWeight: 'bold',
            },
            '&:hover': {
              backgroundColor: _(O.Hover, r.secondaryContainer.main, r.onSecondaryContainer.main),
              color: _(O.Hover, r.onSecondaryContainer.main, r.secondaryContainer.main),
            },
            '&:active': {
              backgroundColor: _(O.Press, r.secondaryContainer.main, r.onSecondaryContainer.main),
              color: _(O.Press, r.onSecondaryContainer.main, r.secondaryContainer.main),
            },
          },
        },
      },
    },
  }),
  Da = (r) => ({
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 32,
          '&.Mui-selected': {
            fontWeight: 'bold',
          },
        },
      },
    },
  }),
  Oa = ({ palette: r, shadows: e }) => ({
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
  Ia = (r, e, n) => ({
    props: { color: r },
    style: {
      '& .MuiSwitch-switchBase': {
        '&.Mui-checked': {
          '& + .MuiSwitch-track': {
            backgroundColor: e,
          },
          '& .MuiSwitch-thumb': {
            color: n,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: e,
          border: `6px solid ${n}`,
        },
      },
    },
  }),
  Ba = ({ palette: r }) => ({
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
        ].map((t) => Ia(...t)),
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
              '& + .MuiSwitch-track': {
                opacity: 1,
                border: 0,
              },
              '& .MuiSwitch-thumb': {
                width: 18,
                height: 18,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                backgroundColor: hr(r.onSurface.main, 0.1),
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                color: hr(r.surface.main, 0.8),
              },
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
              color: hr(r.onSurface.main, 0.3),
            },
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
  Ra = ({ palette: r }) => ({
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
          '&.MuiToggleButton-primary': {
            borderColor: 'transparent',
          },
          '&.MuiToggleButton-primary.Mui-selected': {
            color: r.onPrimary.main,
            backgroundColor: r.primary.main,
          },
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
        },
      },
    },
  }),
  _a = ({ palette: r }) => ({
    MuiToggleButtonGroup: {
      styleOverrides: {
        grouped: {
          borderRadius: '50px',
          borderColor: r.outline.main,
          '&:not(:first-of-type)': {
            marginLeft: 0,
            borderLeft: 0,
          },
          '&:hover': {
            background: _(O.Hover, r.surface.main, r.primary.main),
          },
          '&.Mui-selected:hover': {
            background: _(O.Hover, r.secondaryContainer.main, r.onSecondaryContainer.main),
          },
        },
      },
    },
  }),
  $a = ({ palette: r }) => ({
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: r.inverseSurface.main,
          color: r.inverseOnSurface.main,
        },
      },
    },
  }),
  La = (r) => ({
    ...va(),
    ...oa(r),
    ...aa(r),
    ...ia(r),
    ...sa(r),
    ...xa(r),
    ...ka(r),
    ...Pa(r),
    ...wa(r),
    ...Aa(),
    ...Ma(r),
    ...Da(),
    ...Oa(r),
    ...Ba(r),
    ...Ra(r),
    ..._a(r),
    ...$a(r),
  }),
  Na = (r, e) => {
    const {
      primary: n,
      onPrimary: t,
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
      background: I,
      onBackground: S,
      surface: E,
      onSurface: p,
      surfaceVariant: V,
      onSurfaceVariant: B,
      outline: G,
      outlineVariant: H,
      shadow: s,
      scrim: v,
      inverseSurface: D,
      inverseOnSurface: U,
      inversePrimary: er,
      primaryFixed: gr,
      onPrimaryFixed: lr,
      primaryFixedDim: sr,
      onPrimaryFixedVariant: xr,
      secondaryFixed: Pr,
      onSecondaryFixed: F,
      secondaryFixedDim: P,
      onSecondaryFixedVariant: $,
      tertiaryFixed: R,
      onTertiaryFixed: M,
      tertiaryFixedDim: j,
      onTertiaryFixedVariant: L,
      surfaceTint: N,
      surfaceDim: W,
      surfaceBright: q,
      surfaceContainerLowest: z,
      surfaceContainerLow: dr,
      surfaceContainer: k,
      surfaceContainerHigh: Fr,
      surfaceContainerHighest: $r,
      info: Hr,
      onInfo: Je,
      infoContainer: Qe,
      onInfoContainer: Ze,
      success: rn,
      onSuccess: en,
      successContainer: nn,
      onSuccessContainer: tn,
      warning: on,
      onWarning: an,
      warningContainer: sn,
      onWarningContainer: cn,
    } = e
    return {
      mode: r,
      primary: {
        main: n,
        contrastText: t,
      },
      onPrimary: {
        main: t,
        contrastText: n,
      },
      primaryContainer: {
        main: o,
        contrastText: a,
      },
      onPrimaryContainer: {
        main: a,
        contrastText: o,
      },
      secondary: {
        main: i,
        contrastText: c,
      },
      onSecondary: {
        main: c,
        contrastText: i,
      },
      secondaryContainer: {
        main: f,
        contrastText: l,
      },
      onSecondaryContainer: {
        main: l,
        contrastText: f,
      },
      tertiary: {
        main: d,
        contrastText: m,
      },
      onTertiary: {
        main: m,
        contrastText: d,
      },
      tertiaryContainer: {
        main: h,
        contrastText: C,
      },
      onTertiaryContainer: {
        main: C,
        contrastText: h,
      },
      error: {
        main: b,
        contrastText: u,
      },
      onError: {
        main: u,
        contrastText: b,
      },
      errorContainer: {
        main: T,
        contrastText: w,
      },
      onErrorContainer: {
        main: w,
        contrastText: T,
      },
      primaryFixed: {
        main: gr,
      },
      primaryFixedDim: {
        main: sr,
      },
      onPrimaryFixed: {
        main: lr,
      },
      onPrimaryFixedVariant: {
        main: xr,
      },
      secondaryFixed: {
        main: Pr,
      },
      secondaryFixedDim: {
        main: P,
      },
      onSecondaryFixed: {
        main: F,
      },
      onSecondaryFixedVariant: {
        main: $,
      },
      tertiaryFixed: {
        main: R,
      },
      tertiaryFixedDim: {
        main: j,
      },
      onTertiaryFixed: {
        main: M,
      },
      onTertiaryFixedVariant: {
        main: L,
      },
      surface: {
        main: E,
        contrastText: p,
      },
      onSurface: {
        main: p,
        contrastText: E,
      },
      surfaceDim: {
        main: W,
      },
      surfaceBright: {
        main: q,
      },
      surfaceContainerLowest: {
        main: z,
      },
      surfaceContainerLow: {
        main: dr,
      },
      surfaceContainer: {
        main: k,
      },
      surfaceContainerHigh: {
        main: Fr,
      },
      surfaceContainerHighest: {
        main: $r,
      },
      surfaceVariant: {
        main: V,
        contrastText: B,
      },
      onSurfaceVariant: {
        main: B,
        contrastText: V,
      },
      outline: {
        main: G,
      },
      outlineVariant: {
        main: H,
      },
      inversePrimary: {
        main: er,
      },
      inverseSurface: {
        main: D,
        contrastText: D,
      },
      inverseOnSurface: {
        main: U,
        contrastText: D,
      },
      shadow: {
        main: s,
      },
      scrim: {
        main: v,
      },
      surfaceTint: {
        main: N,
      },
      background: {
        default: k,
        paper: E,
      },
      onBackground: {
        main: p,
      },
      common: {
        white: I,
        black: S,
      },
      text: {
        primary: p,
        secondary: l,
      },
      info: {
        main: Hr,
        contrastText: Je,
      },
      onInfo: {
        main: Je,
        contrastText: Hr,
      },
      infoContainer: {
        main: Qe,
        contrastText: Ze,
      },
      onInfoContainer: {
        main: Ze,
        contrastText: Qe,
      },
      success: {
        main: rn,
        contrastText: en,
      },
      onSuccess: {
        main: en,
        contrastText: rn,
      },
      successContainer: {
        main: nn,
        contrastText: tn,
      },
      onSuccessContainer: {
        main: tn,
        contrastText: nn,
      },
      warning: {
        main: on,
        contrastText: an,
      },
      onWarning: {
        main: an,
        contrastText: on,
      },
      warningContainer: {
        main: sn,
        contrastText: cn,
      },
      onWarningContainer: {
        main: cn,
        contrastText: sn,
      },
      divider: G,
    }
  },
  Ie = (r, e, n) => {
    const t = {
        name: e,
        value: fe(n),
        blend: !1,
      },
      o = Sa(fe('#000000'), t)[r]
    return Object.entries(o).reduce((i, [c, f]) => ({ ...i, [c]: rt(f) }), {})
  },
  Va = (r, e, { info: n, success: t, warning: o } = ta) => {
    const a = Ie(r, 'info', n),
      i = Ie(r, 'success', t),
      c = Ie(r, 'warning', o)
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
  ja = (r, e = Kn.schemes[r], n, t) => {
    const o = Va(r, e, t),
      a = Na(r, o),
      i = In({ ...n, palette: a }),
      c = La(i)
    return In(i, { components: c })
  },
  Wa = (r, e = Kn.schemes[r], n, t) => ja(r, e, n, t)
export { Wa as createCompatibleTheme, ja as createMaterialYouTheme }

(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i),
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = 'https://yun-static.cdn.bcebos.com/playground/'),
    n((n.s = '5QBA'));
})({
  '33yf': function (e, t, n) {
    (function (e) {
      function n(e, t) {
        for (var n = 0, r = e.length - 1; r >= 0; r--) {
          var i = e[r];
          '.' === i
            ? e.splice(r, 1)
            : '..' === i
            ? (e.splice(r, 1), n++)
            : n && (e.splice(r, 1), n--);
        }
        if (t) for (; n--; n) e.unshift('..');
        return e;
      }
      function r(e) {
        'string' !== typeof e && (e += '');
        var t,
          n = 0,
          r = -1,
          i = !0;
        for (t = e.length - 1; t >= 0; --t)
          if (47 === e.charCodeAt(t)) {
            if (!i) {
              n = t + 1;
              break;
            }
          } else -1 === r && ((i = !1), (r = t + 1));
        return -1 === r ? '' : e.slice(n, r);
      }
      function i(e, t) {
        if (e.filter) return e.filter(t);
        for (var n = [], r = 0; r < e.length; r++)
          t(e[r], r, e) && n.push(e[r]);
        return n;
      }
      (t.resolve = function () {
        for (var t = '', r = !1, a = arguments.length - 1; a >= -1 && !r; a--) {
          var o = a >= 0 ? arguments[a] : e.cwd();
          if ('string' !== typeof o)
            throw new TypeError('Arguments to path.resolve must be strings');
          o && ((t = o + '/' + t), (r = '/' === o.charAt(0)));
        }
        return (
          (t = n(
            i(t.split('/'), function (e) {
              return !!e;
            }),
            !r,
          ).join('/')),
          (r ? '/' : '') + t || '.'
        );
      }),
        (t.normalize = function (e) {
          var r = t.isAbsolute(e),
            o = '/' === a(e, -1);
          return (
            (e = n(
              i(e.split('/'), function (e) {
                return !!e;
              }),
              !r,
            ).join('/')),
            e || r || (e = '.'),
            e && o && (e += '/'),
            (r ? '/' : '') + e
          );
        }),
        (t.isAbsolute = function (e) {
          return '/' === e.charAt(0);
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            i(e, function (e, t) {
              if ('string' !== typeof e)
                throw new TypeError('Arguments to path.join must be strings');
              return e;
            }).join('/'),
          );
        }),
        (t.relative = function (e, n) {
          function r(e) {
            for (var t = 0; t < e.length; t++) if ('' !== e[t]) break;
            for (var n = e.length - 1; n >= 0; n--) if ('' !== e[n]) break;
            return t > n ? [] : e.slice(t, n - t + 1);
          }
          (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
          for (
            var i = r(e.split('/')),
              a = r(n.split('/')),
              o = Math.min(i.length, a.length),
              s = o,
              u = 0;
            u < o;
            u++
          )
            if (i[u] !== a[u]) {
              s = u;
              break;
            }
          var l = [];
          for (u = s; u < i.length; u++) l.push('..');
          return (l = l.concat(a.slice(s))), l.join('/');
        }),
        (t.sep = '/'),
        (t.delimiter = ':'),
        (t.dirname = function (e) {
          if (('string' !== typeof e && (e += ''), 0 === e.length)) return '.';
          for (
            var t = e.charCodeAt(0),
              n = 47 === t,
              r = -1,
              i = !0,
              a = e.length - 1;
            a >= 1;
            --a
          )
            if (((t = e.charCodeAt(a)), 47 === t)) {
              if (!i) {
                r = a;
                break;
              }
            } else i = !1;
          return -1 === r
            ? n
              ? '/'
              : '.'
            : n && 1 === r
            ? '/'
            : e.slice(0, r);
        }),
        (t.basename = function (e, t) {
          var n = r(e);
          return (
            t &&
              n.substr(-1 * t.length) === t &&
              (n = n.substr(0, n.length - t.length)),
            n
          );
        }),
        (t.extname = function (e) {
          'string' !== typeof e && (e += '');
          for (
            var t = -1, n = 0, r = -1, i = !0, a = 0, o = e.length - 1;
            o >= 0;
            --o
          ) {
            var s = e.charCodeAt(o);
            if (47 !== s)
              -1 === r && ((i = !1), (r = o + 1)),
                46 === s
                  ? -1 === t
                    ? (t = o)
                    : 1 !== a && (a = 1)
                  : -1 !== t && (a = -1);
            else if (!i) {
              n = o + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === r ||
            0 === a ||
            (1 === a && t === r - 1 && t === n + 1)
            ? ''
            : e.slice(t, r);
        });
      var a =
        'b' === 'ab'.substr(-1)
          ? function (e, t, n) {
              return e.substr(t, n);
            }
          : function (e, t, n) {
              return t < 0 && (t = e.length + t), e.substr(t, n);
            };
    }.call(this, n('Q2Ig')));
  },
  '5QBA': function (e, t, n) {
    'use strict';
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function i(e, t) {
      if (e) {
        if ('string' === typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(e)
            : 'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? r(e, t)
            : void 0
        );
      }
    }
    function a(e, t) {
      var n =
        ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
        e['@@iterator'];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = i(e)) ||
          (t && e && 'number' === typeof e.length)
        ) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
            },
            e: function (e) {
              throw e;
            },
            f: a,
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      var o,
        s = !0,
        u = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (s = e.done), e;
        },
        e: function (e) {
          (u = !0), (o = e);
        },
        f: function () {
          try {
            s || null == n['return'] || n['return']();
          } finally {
            if (u) throw o;
          }
        },
      };
    }
    function o(e, t) {
      return (
        (o = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        o(e, t)
      );
    }
    function s(e, t) {
      if ('function' !== typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function',
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        t && o(e, t);
    }
    function u(e) {
      return (
        (u = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        u(e)
      );
    }
    function l() {
      if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function c(e) {
      return (
        (c =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              }),
        c(e)
      );
    }
    function h(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    function f(e, t) {
      if (t && ('object' === c(t) || 'function' === typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          'Derived constructors may only return object or undefined',
        );
      return h(e);
    }
    function d(e) {
      var t = l();
      return function () {
        var n,
          r = u(e);
        if (t) {
          var i = u(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return f(this, n);
      };
    }
    function m(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function g(e, t, n) {
      return (
        t && m(e.prototype, t),
        n && m(e, n),
        Object.defineProperty(e, 'prototype', { writable: !1 }),
        e
      );
    }
    function v(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function p(e) {
      return -1 !== Function.toString.call(e).indexOf('[native code]');
    }
    function b(e, t, n) {
      return (
        (b = l()
          ? Reflect.construct.bind()
          : function (e, t, n) {
              var r = [null];
              r.push.apply(r, t);
              var i = Function.bind.apply(e, r),
                a = new i();
              return n && o(a, n.prototype), a;
            }),
        b.apply(null, arguments)
      );
    }
    function y(e) {
      var t = 'function' === typeof Map ? new Map() : void 0;
      return (
        (y = function (e) {
          if (null === e || !p(e)) return e;
          if ('function' !== typeof e)
            throw new TypeError(
              'Super expression must either be null or a function',
            );
          if ('undefined' !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return b(e, arguments, u(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            o(n, e)
          );
        }),
        y(e)
      );
    }
    n.r(t),
      n.d(t, 'initialize', function () {
        return di;
      });
    var C = (function () {
        function e() {
          v(this, e),
            (this.listeners = []),
            (this.unexpectedErrorHandler = function (e) {
              setTimeout(function () {
                if (e.stack) throw new Error(e.message + '\n\n' + e.stack);
                throw e;
              }, 0);
            });
        }
        return (
          g(e, [
            {
              key: 'emit',
              value: function (e) {
                this.listeners.forEach(function (t) {
                  t(e);
                });
              },
            },
            {
              key: 'onUnexpectedError',
              value: function (e) {
                this.unexpectedErrorHandler(e), this.emit(e);
              },
            },
            {
              key: 'onUnexpectedExternalError',
              value: function (e) {
                this.unexpectedErrorHandler(e);
              },
            },
          ]),
          e
        );
      })(),
      w = new C();
    function _(e) {
      L(e) || w.onUnexpectedError(e);
    }
    function k(e) {
      if (e instanceof Error) {
        var t = e.name,
          n = e.message,
          r = e.stacktrace || e.stack;
        return { $isError: !0, name: t, message: n, stack: r };
      }
      return e;
    }
    var S = 'Canceled';
    function L(e) {
      return (
        e instanceof N ||
        (e instanceof Error && e.name === S && e.message === S)
      );
    }
    var N = (function (e) {
      s(n, e);
      var t = d(n);
      function n() {
        var e;
        return v(this, n), (e = t.call(this, S)), (e.name = e.message), e;
      }
      return g(n);
    })(y(Error));
    var E;
    Error;
    function A(e, t) {
      while (!Object.prototype.hasOwnProperty.call(e, t))
        if (((e = u(e)), null === e)) break;
      return e;
    }
    function x() {
      return (
        (x =
          'undefined' !== typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, n) {
                var r = A(e, t);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, t);
                  return i.get
                    ? i.get.call(arguments.length < 3 ? e : n)
                    : i.value;
                }
              }),
        x.apply(this, arguments)
      );
    }
    function O(e) {
      if (Array.isArray(e)) return e;
    }
    function M(e, t) {
      var n =
        null == e
          ? null
          : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator'];
      if (null != n) {
        var r,
          i,
          a = [],
          o = !0,
          s = !1;
        try {
          for (n = n.call(e); !(o = (r = n.next()).done); o = !0)
            if ((a.push(r.value), t && a.length === t)) break;
        } catch (u) {
          (s = !0), (i = u);
        } finally {
          try {
            o || null == n['return'] || n['return']();
          } finally {
            if (s) throw i;
          }
        }
        return a;
      }
    }
    function R() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
    function P(e, t) {
      return O(e) || M(e, t) || i(e, t) || R();
    }
    function T(e) {
      if (Array.isArray(e)) return r(e);
    }
    function I(e) {
      if (
        ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
        null != e['@@iterator']
      )
        return Array.from(e);
    }
    function K() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
    function D(e) {
      return T(e) || I(e) || i(e) || K();
    }
    function V(e) {
      var t,
        n = this,
        r = !1;
      return function () {
        return r || ((r = !0), (t = e.apply(n, arguments))), t;
      };
    }
    function F(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function B() {
      B = function () {
        return e;
      };
      var e = {},
        t = Object.prototype,
        n = t.hasOwnProperty,
        r = 'function' == typeof Symbol ? Symbol : {},
        i = r.iterator || '@@iterator',
        a = r.asyncIterator || '@@asyncIterator',
        o = r.toStringTag || '@@toStringTag';
      function s(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        s({}, '');
      } catch (E) {
        s = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function u(e, t, n, r) {
        var i = t && t.prototype instanceof f ? t : f,
          a = Object.create(i.prototype),
          o = new S(r || []);
        return (
          (a._invoke = (function (e, t, n) {
            var r = 'suspendedStart';
            return function (i, a) {
              if ('executing' === r)
                throw new Error('Generator is already running');
              if ('completed' === r) {
                if ('throw' === i) throw a;
                return N();
              }
              for (n.method = i, n.arg = a; ; ) {
                var o = n.delegate;
                if (o) {
                  var s = w(o, n);
                  if (s) {
                    if (s === h) continue;
                    return s;
                  }
                }
                if ('next' === n.method) n.sent = n._sent = n.arg;
                else if ('throw' === n.method) {
                  if ('suspendedStart' === r) throw ((r = 'completed'), n.arg);
                  n.dispatchException(n.arg);
                } else 'return' === n.method && n.abrupt('return', n.arg);
                r = 'executing';
                var u = l(e, t, n);
                if ('normal' === u.type) {
                  if (
                    ((r = n.done ? 'completed' : 'suspendedYield'), u.arg === h)
                  )
                    continue;
                  return { value: u.arg, done: n.done };
                }
                'throw' === u.type &&
                  ((r = 'completed'), (n.method = 'throw'), (n.arg = u.arg));
              }
            };
          })(e, n, o)),
          a
        );
      }
      function l(e, t, n) {
        try {
          return { type: 'normal', arg: e.call(t, n) };
        } catch (E) {
          return { type: 'throw', arg: E };
        }
      }
      e.wrap = u;
      var h = {};
      function f() {}
      function d() {}
      function m() {}
      var g = {};
      s(g, i, function () {
        return this;
      });
      var v = Object.getPrototypeOf,
        p = v && v(v(L([])));
      p && p !== t && n.call(p, i) && (g = p);
      var b = (m.prototype = f.prototype = Object.create(g));
      function y(e) {
        ['next', 'throw', 'return'].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function C(e, t) {
        function r(i, a, o, s) {
          var u = l(e[i], e, a);
          if ('throw' !== u.type) {
            var h = u.arg,
              f = h.value;
            return f && 'object' == c(f) && n.call(f, '__await')
              ? t.resolve(f.__await).then(
                  function (e) {
                    r('next', e, o, s);
                  },
                  function (e) {
                    r('throw', e, o, s);
                  },
                )
              : t.resolve(f).then(
                  function (e) {
                    (h.value = e), o(h);
                  },
                  function (e) {
                    return r('throw', e, o, s);
                  },
                );
          }
          s(u.arg);
        }
        var i;
        this._invoke = function (e, n) {
          function a() {
            return new t(function (t, i) {
              r(e, n, t, i);
            });
          }
          return (i = i ? i.then(a, a) : a());
        };
      }
      function w(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), 'throw' === t.method)) {
            if (
              e.iterator['return'] &&
              ((t.method = 'return'),
              (t.arg = void 0),
              w(e, t),
              'throw' === t.method)
            )
              return h;
            (t.method = 'throw'),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method",
              ));
          }
          return h;
        }
        var r = l(n, e.iterator, t.arg);
        if ('throw' === r.type)
          return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), h;
        var i = r.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
              (t.delegate = null),
              h)
            : i
          : ((t.method = 'throw'),
            (t.arg = new TypeError('iterator result is not an object')),
            (t.delegate = null),
            h);
      }
      function _(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function k(e) {
        var t = e.completion || {};
        (t.type = 'normal'), delete t.arg, (e.completion = t);
      }
      function S(e) {
        (this.tryEntries = [{ tryLoc: 'root' }]),
          e.forEach(_, this),
          this.reset(!0);
      }
      function L(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ('function' == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              a = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (a.next = a);
          }
        }
        return { next: N };
      }
      function N() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = m),
        s(b, 'constructor', m),
        s(m, 'constructor', d),
        (d.displayName = s(m, o, 'GeneratorFunction')),
        (e.isGeneratorFunction = function (e) {
          var t = 'function' == typeof e && e.constructor;
          return (
            !!t &&
            (t === d || 'GeneratorFunction' === (t.displayName || t.name))
          );
        }),
        (e.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, m)
              : ((e.__proto__ = m), s(e, o, 'GeneratorFunction')),
            (e.prototype = Object.create(b)),
            e
          );
        }),
        (e.awrap = function (e) {
          return { __await: e };
        }),
        y(C.prototype),
        s(C.prototype, a, function () {
          return this;
        }),
        (e.AsyncIterator = C),
        (e.async = function (t, n, r, i, a) {
          void 0 === a && (a = Promise);
          var o = new C(u(t, n, r, i), a);
          return e.isGeneratorFunction(n)
            ? o
            : o.next().then(function (e) {
                return e.done ? e.value : o.next();
              });
        }),
        y(b),
        s(b, o, 'Generator'),
        s(b, i, function () {
          return this;
        }),
        s(b, 'toString', function () {
          return '[object Generator]';
        }),
        (e.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = L),
        (S.prototype = {
          constructor: S,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(k),
              !e)
            )
              for (var t in this)
                't' === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ('throw' === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (o.type = 'throw'),
                (o.arg = e),
                (t.next = n),
                r && ((t.method = 'next'), (t.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                o = a.completion;
              if ('root' === a.tryLoc) return r('end');
              if (a.tryLoc <= this.prev) {
                var s = n.call(a, 'catchLoc'),
                  u = n.call(a, 'finallyLoc');
                if (s && u) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                } else if (s) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error('try statement without catch or finally');
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, 'finallyLoc') &&
                this.prev < i.finallyLoc
              ) {
                var a = i;
                break;
              }
            }
            a &&
              ('break' === e || 'continue' === e) &&
              a.tryLoc <= t &&
              t <= a.finallyLoc &&
              (a = null);
            var o = a ? a.completion : {};
            return (
              (o.type = e),
              (o.arg = t),
              a
                ? ((this.method = 'next'), (this.next = a.finallyLoc), h)
                : this.complete(o)
            );
          },
          complete: function (e, t) {
            if ('throw' === e.type) throw e.arg;
            return (
              'break' === e.type || 'continue' === e.type
                ? (this.next = e.arg)
                : 'return' === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === e.type && t && (this.next = t),
              h
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), k(n), h;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ('throw' === r.type) {
                  var i = r.arg;
                  k(n);
                }
                return i;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: L(e), resultName: t, nextLoc: n }),
              'next' === this.method && (this.arg = void 0),
              h
            );
          },
        }),
        e
      );
    }
    (function (e) {
      var t = B().mark(h),
        n = B().mark(p),
        r = B().mark(b),
        i = B().mark(y),
        o = B().mark(C),
        s = B().mark(_);
      function u(e) {
        return (
          e && 'object' === typeof e && 'function' === typeof e[Symbol.iterator]
        );
      }
      e.is = u;
      var l = Object.freeze([]);
      function c() {
        return l;
      }
      function h(e) {
        return B().wrap(function (t) {
          while (1)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), e;
              case 2:
              case 'end':
                return t.stop();
            }
        }, t);
      }
      function f(e) {
        return e || l;
      }
      function d(e) {
        return !e || !0 === e[Symbol.iterator]().next().done;
      }
      function m(e) {
        return e[Symbol.iterator]().next().value;
      }
      function g(e, t) {
        var n,
          r = a(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (t(i)) return !0;
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
        return !1;
      }
      function v(e, t) {
        var n,
          r = a(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            if (t(i)) return i;
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
      }
      function p(e, t) {
        var r, i, o;
        return B().wrap(
          function (n) {
            while (1)
              switch ((n.prev = n.next)) {
                case 0:
                  (r = a(e)), (n.prev = 1), r.s();
                case 3:
                  if ((i = r.n()).done) {
                    n.next = 10;
                    break;
                  }
                  if (((o = i.value), !t(o))) {
                    n.next = 8;
                    break;
                  }
                  return (n.next = 8), o;
                case 8:
                  n.next = 3;
                  break;
                case 10:
                  n.next = 15;
                  break;
                case 12:
                  (n.prev = 12), (n.t0 = n['catch'](1)), r.e(n.t0);
                case 15:
                  return (n.prev = 15), r.f(), n.finish(15);
                case 18:
                case 'end':
                  return n.stop();
              }
          },
          n,
          null,
          [[1, 12, 15, 18]],
        );
      }
      function b(e, t) {
        var n, i, o, s;
        return B().wrap(
          function (r) {
            while (1)
              switch ((r.prev = r.next)) {
                case 0:
                  (n = 0), (i = a(e)), (r.prev = 2), i.s();
                case 4:
                  if ((o = i.n()).done) {
                    r.next = 10;
                    break;
                  }
                  return (s = o.value), (r.next = 8), t(s, n++);
                case 8:
                  r.next = 4;
                  break;
                case 10:
                  r.next = 15;
                  break;
                case 12:
                  (r.prev = 12), (r.t0 = r['catch'](2)), i.e(r.t0);
                case 15:
                  return (r.prev = 15), i.f(), r.finish(15);
                case 18:
                case 'end':
                  return r.stop();
              }
          },
          r,
          null,
          [[2, 12, 15, 18]],
        );
      }
      function y() {
        var e,
          t,
          n,
          r,
          o,
          s,
          u,
          l,
          c,
          h = arguments;
        return B().wrap(
          function (i) {
            while (1)
              switch ((i.prev = i.next)) {
                case 0:
                  for (e = h.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = h[n];
                  (r = 0), (o = t);
                case 2:
                  if (!(r < o.length)) {
                    i.next = 24;
                    break;
                  }
                  (s = o[r]), (u = a(s)), (i.prev = 5), u.s();
                case 7:
                  if ((l = u.n()).done) {
                    i.next = 13;
                    break;
                  }
                  return (c = l.value), (i.next = 11), c;
                case 11:
                  i.next = 7;
                  break;
                case 13:
                  i.next = 18;
                  break;
                case 15:
                  (i.prev = 15), (i.t0 = i['catch'](5)), u.e(i.t0);
                case 18:
                  return (i.prev = 18), u.f(), i.finish(18);
                case 21:
                  r++, (i.next = 2);
                  break;
                case 24:
                case 'end':
                  return i.stop();
              }
          },
          i,
          null,
          [[5, 15, 18, 21]],
        );
      }
      function C(e) {
        var t, n, r, i, s, u;
        return B().wrap(
          function (o) {
            while (1)
              switch ((o.prev = o.next)) {
                case 0:
                  (t = a(e)), (o.prev = 1), t.s();
                case 3:
                  if ((n = t.n()).done) {
                    o.next = 24;
                    break;
                  }
                  (r = n.value), (i = a(r)), (o.prev = 6), i.s();
                case 8:
                  if ((s = i.n()).done) {
                    o.next = 14;
                    break;
                  }
                  return (u = s.value), (o.next = 12), u;
                case 12:
                  o.next = 8;
                  break;
                case 14:
                  o.next = 19;
                  break;
                case 16:
                  (o.prev = 16), (o.t0 = o['catch'](6)), i.e(o.t0);
                case 19:
                  return (o.prev = 19), i.f(), o.finish(19);
                case 22:
                  o.next = 3;
                  break;
                case 24:
                  o.next = 29;
                  break;
                case 26:
                  (o.prev = 26), (o.t1 = o['catch'](1)), t.e(o.t1);
                case 29:
                  return (o.prev = 29), t.f(), o.finish(29);
                case 32:
                case 'end':
                  return o.stop();
              }
          },
          o,
          null,
          [
            [1, 26, 29, 32],
            [6, 16, 19, 22],
          ],
        );
      }
      function w(e, t, n) {
        var r,
          i = n,
          o = a(e);
        try {
          for (o.s(); !(r = o.n()).done; ) {
            var s = r.value;
            i = t(i, s);
          }
        } catch (u) {
          o.e(u);
        } finally {
          o.f();
        }
        return i;
      }
      function _(e, t) {
        var n,
          r = arguments;
        return B().wrap(function (i) {
          while (1)
            switch ((i.prev = i.next)) {
              case 0:
                (n = r.length > 2 && void 0 !== r[2] ? r[2] : e.length),
                  t < 0 && (t += e.length),
                  n < 0 ? (n += e.length) : n > e.length && (n = e.length);
              case 3:
                if (!(t < n)) {
                  i.next = 9;
                  break;
                }
                return (i.next = 6), e[t];
              case 6:
                t++, (i.next = 3);
                break;
              case 9:
              case 'end':
                return i.stop();
            }
        }, s);
      }
      function k(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Number.POSITIVE_INFINITY,
          r = [];
        if (0 === n) return [r, t];
        for (var i = t[Symbol.iterator](), a = 0; a < n; a++) {
          var o = i.next();
          if (o.done) return [r, e.empty()];
          r.push(o.value);
        }
        return [
          r,
          F({}, Symbol.iterator, function () {
            return i;
          }),
        ];
      }
      function S(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function (e, t) {
                  return e === t;
                },
          r = e[Symbol.iterator](),
          i = t[Symbol.iterator]();
        while (1) {
          var a = r.next(),
            o = i.next();
          if (a.done !== o.done) return !1;
          if (a.done) return !0;
          if (!n(a.value, o.value)) return !1;
        }
      }
      (e.empty = c),
        (e.single = h),
        (e.from = f),
        (e.isEmpty = d),
        (e.first = m),
        (e.some = g),
        (e.find = v),
        (e.filter = p),
        (e.map = b),
        (e.concat = y),
        (e.concatNested = C),
        (e.reduce = w),
        (e.slice = _),
        (e.consume = k),
        (e.equals = S);
    })(E || (E = {}));
    var U = !1,
      q = null;
    function H(e) {
      q = e;
    }
    if (U) {
      var W = '__is_disposable_tracked__';
      H(
        new ((function () {
          function e() {
            v(this, e);
          }
          return (
            g(e, [
              {
                key: 'trackDisposable',
                value: function (e) {
                  var t = new Error('Potentially leaked disposable').stack;
                  setTimeout(function () {
                    e[W] || console.log(t);
                  }, 3e3);
                },
              },
              {
                key: 'setParent',
                value: function (e, t) {
                  if (e && e !== ee.None)
                    try {
                      e[W] = !0;
                    } catch (n) {}
                },
              },
              {
                key: 'markAsDisposed',
                value: function (e) {
                  if (e && e !== ee.None)
                    try {
                      e[W] = !0;
                    } catch (t) {}
                },
              },
              { key: 'markAsSingleton', value: function (e) {} },
            ]),
            e
          );
        })())(),
      );
    }
    function j(e) {
      return null === q || void 0 === q || q.trackDisposable(e), e;
    }
    function z(e) {
      null === q || void 0 === q || q.markAsDisposed(e);
    }
    function G(e, t) {
      null === q || void 0 === q || q.setParent(e, t);
    }
    function Y(e, t) {
      if (q) {
        var n,
          r = a(e);
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var i = n.value;
            q.setParent(i, t);
          }
        } catch (o) {
          r.e(o);
        } finally {
          r.f();
        }
      }
    }
    var Q = (function (e) {
      s(n, e);
      var t = d(n);
      function n(e) {
        var r;
        return (
          v(this, n),
          (r = t.call(
            this,
            'Encountered errors while disposing of store. Errors: ['.concat(
              e.join(', '),
              ']',
            ),
          )),
          (r.errors = e),
          r
        );
      }
      return g(n);
    })(y(Error));
    function J(e) {
      if (E.is(e)) {
        var t,
          n = [],
          r = a(e);
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var i = t.value;
            if (i)
              try {
                i.dispose();
              } catch (o) {
                n.push(o);
              }
          }
        } catch (s) {
          r.e(s);
        } finally {
          r.f();
        }
        if (1 === n.length) throw n[0];
        if (n.length > 1) throw new Q(n);
        return Array.isArray(e) ? [] : e;
      }
      if (e) return e.dispose(), e;
    }
    function Z() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = X(function () {
        return J(t);
      });
      return Y(t, r), r;
    }
    function X(e) {
      var t = j({
        dispose: V(function () {
          z(t), e();
        }),
      });
      return t;
    }
    var $ = (function () {
      function e() {
        v(this, e),
          (this._toDispose = new Set()),
          (this._isDisposed = !1),
          j(this);
      }
      return (
        g(e, [
          {
            key: 'dispose',
            value: function () {
              this._isDisposed ||
                (z(this), (this._isDisposed = !0), this.clear());
            },
          },
          {
            key: 'isDisposed',
            get: function () {
              return this._isDisposed;
            },
          },
          {
            key: 'clear',
            value: function () {
              try {
                J(this._toDispose.values());
              } finally {
                this._toDispose.clear();
              }
            },
          },
          {
            key: 'add',
            value: function (t) {
              if (!t) return t;
              if (t === this)
                throw new Error('Cannot register a disposable on itself!');
              return (
                G(t, this),
                this._isDisposed
                  ? e.DISABLE_DISPOSED_WARNING ||
                    console.warn(
                      new Error(
                        'Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!',
                      ).stack,
                    )
                  : this._toDispose.add(t),
                t
              );
            },
          },
        ]),
        e
      );
    })();
    $.DISABLE_DISPOSED_WARNING = !1;
    var ee = (function () {
      function e() {
        v(this, e), (this._store = new $()), j(this), G(this._store, this);
      }
      return (
        g(e, [
          {
            key: 'dispose',
            value: function () {
              z(this), this._store.dispose();
            },
          },
          {
            key: '_register',
            value: function (e) {
              if (e === this)
                throw new Error('Cannot register a disposable on itself!');
              return this._store.add(e);
            },
          },
        ]),
        e
      );
    })();
    ee.None = Object.freeze({ dispose: function () {} });
    var te = (function () {
        function e() {
          v(this, e),
            (this.dispose = function () {}),
            (this.unset = function () {}),
            (this.isset = function () {
              return !1;
            }),
            j(this);
        }
        return (
          g(e, [
            {
              key: 'set',
              value: function (e) {
                var t = this,
                  n = e;
                return (
                  (this.unset = function () {
                    return (n = void 0);
                  }),
                  (this.isset = function () {
                    return void 0 !== n;
                  }),
                  (this.dispose = function () {
                    n && (n(), (n = void 0), z(t));
                  }),
                  this
                );
              },
            },
          ]),
          e
        );
      })(),
      ne = g(function e(t) {
        v(this, e),
          (this.element = t),
          (this.next = e.Undefined),
          (this.prev = e.Undefined);
      });
    ne.Undefined = new ne(void 0);
    var re,
      ie = (function (e) {
        function t() {
          v(this, t),
            (this._first = ne.Undefined),
            (this._last = ne.Undefined),
            (this._size = 0);
        }
        return (
          g(t, [
            {
              key: 'size',
              get: function () {
                return this._size;
              },
            },
            {
              key: 'isEmpty',
              value: function () {
                return this._first === ne.Undefined;
              },
            },
            {
              key: 'clear',
              value: function () {
                var e = this._first;
                while (e !== ne.Undefined) {
                  var t = e.next;
                  (e.prev = ne.Undefined), (e.next = ne.Undefined), (e = t);
                }
                (this._first = ne.Undefined),
                  (this._last = ne.Undefined),
                  (this._size = 0);
              },
            },
            {
              key: 'unshift',
              value: function (e) {
                return this._insert(e, !1);
              },
            },
            {
              key: 'push',
              value: function (e) {
                return this._insert(e, !0);
              },
            },
            {
              key: '_insert',
              value: function (e, t) {
                var n = this,
                  r = new ne(e);
                if (this._first === ne.Undefined)
                  (this._first = r), (this._last = r);
                else if (t) {
                  var i = this._last;
                  (this._last = r), (r.prev = i), (i.next = r);
                } else {
                  var a = this._first;
                  (this._first = r), (r.next = a), (a.prev = r);
                }
                this._size += 1;
                var o = !1;
                return function () {
                  o || ((o = !0), n._remove(r));
                };
              },
            },
            {
              key: 'shift',
              value: function () {
                if (this._first !== ne.Undefined) {
                  var e = this._first.element;
                  return this._remove(this._first), e;
                }
              },
            },
            {
              key: 'pop',
              value: function () {
                if (this._last !== ne.Undefined) {
                  var e = this._last.element;
                  return this._remove(this._last), e;
                }
              },
            },
            {
              key: '_remove',
              value: function (e) {
                if (e.prev !== ne.Undefined && e.next !== ne.Undefined) {
                  var t = e.prev;
                  (t.next = e.next), (e.next.prev = t);
                } else
                  e.prev === ne.Undefined && e.next === ne.Undefined
                    ? ((this._first = ne.Undefined),
                      (this._last = ne.Undefined))
                    : e.next === ne.Undefined
                    ? ((this._last = this._last.prev),
                      (this._last.next = ne.Undefined))
                    : e.prev === ne.Undefined &&
                      ((this._first = this._first.next),
                      (this._first.prev = ne.Undefined));
                this._size -= 1;
              },
            },
            {
              key: e,
              value: B().mark(function e() {
                var t;
                return B().wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t = this._first;
                        case 1:
                          if (t === ne.Undefined) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 4), t.element;
                        case 4:
                          (t = t.next), (e.next = 1);
                          break;
                        case 7:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this,
                );
              }),
            },
          ]),
          t
        );
      })(Symbol.iterator),
      ae = n('MNsG'),
      oe = ae['a'].performance && 'function' === typeof ae['a'].performance.now,
      se = (function () {
        function e(t) {
          v(this, e),
            (this._highResolution = oe && t),
            (this._startTime = this._now()),
            (this._stopTime = -1);
        }
        return (
          g(
            e,
            [
              {
                key: 'stop',
                value: function () {
                  this._stopTime = this._now();
                },
              },
              {
                key: 'elapsed',
                value: function () {
                  return -1 !== this._stopTime
                    ? this._stopTime - this._startTime
                    : this._now() - this._startTime;
                },
              },
              {
                key: '_now',
                value: function () {
                  return this._highResolution
                    ? ae['a'].performance.now()
                    : Date.now();
                },
              },
            ],
            [
              {
                key: 'create',
                value: function () {
                  var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  return new e(t);
                },
              },
            ],
          ),
          e
        );
      })(),
      ue = !1,
      le = !1;
    (function (e) {
      function t(e) {
        if (le) {
          var t = e.onListenerDidAdd,
            n = de.create(),
            r = 0;
          e.onListenerDidAdd = function () {
            2 === ++r &&
              (console.warn(
                'snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here',
              ),
              n.print()),
              null === t || void 0 === t || t();
          };
        }
      }
      function n(e) {
        return function (t) {
          var n,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = !1;
          return (
            (n = e(
              function (e) {
                if (!a) return n ? n.dispose() : (a = !0), t.call(r, e);
              },
              null,
              i,
            )),
            a && n.dispose(),
            n
          );
        };
      }
      function r(e, t, n) {
        return l(function (n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function (e) {
              return n.call(r, t(e));
            },
            null,
            i,
          );
        }, n);
      }
      function i(e, t, n) {
        return l(function (n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function (e) {
              t(e), n.call(r, e);
            },
            null,
            i,
          );
        }, n);
      }
      function a(e, t, n) {
        return l(function (n) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0;
          return e(
            function (e) {
              return t(e) && n.call(r, e);
            },
            null,
            i,
          );
        }, n);
      }
      function o(e) {
        return e;
      }
      function s() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            r = arguments.length > 2 ? arguments[2] : void 0;
          return Z.apply(
            void 0,
            D(
              t.map(function (t) {
                return t(
                  function (t) {
                    return e.call(n, t);
                  },
                  null,
                  r,
                );
              }),
            ),
          );
        };
      }
      function u(e, t, n, i) {
        var a = n;
        return r(
          e,
          function (e) {
            return (a = t(a, e)), a;
          },
          i,
        );
      }
      function l(e, n) {
        var r,
          i = {
            onFirstListenerAdd: function () {
              r = e(a.fire, a);
            },
            onLastListenerRemove: function () {
              r.dispose();
            },
          };
        n || t(i);
        var a = new ge(i);
        return n && n.add(a), a.event;
      }
      function c(e, n) {
        var r,
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 100,
          a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          o = arguments.length > 4 ? arguments[4] : void 0,
          s = arguments.length > 5 ? arguments[5] : void 0,
          u = void 0,
          l = void 0,
          c = 0,
          h = {
            leakWarningThreshold: o,
            onFirstListenerAdd: function () {
              r = e(function (e) {
                c++,
                  (u = n(u, e)),
                  a && !l && (f.fire(u), (u = void 0)),
                  clearTimeout(l),
                  (l = setTimeout(function () {
                    var e = u;
                    (u = void 0),
                      (l = void 0),
                      (!a || c > 1) && f.fire(e),
                      (c = 0);
                  }, i));
              });
            },
            onLastListenerRemove: function () {
              r.dispose();
            },
          };
        s || t(h);
        var f = new ge(h);
        return s && s.add(f), f.event;
      }
      function h(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function (e, t) {
                  return e === t;
                },
          r = arguments.length > 2 ? arguments[2] : void 0,
          i = !0;
        return a(
          e,
          function (e) {
            var r = i || !n(e, t);
            return (i = !1), (t = e), r;
          },
          r,
        );
      }
      function f(t, n, r) {
        return [
          e.filter(t, n, r),
          e.filter(
            t,
            function (e) {
              return !n(e);
            },
            r,
          ),
        ];
      }
      function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = n.slice(),
          i = e(function (e) {
            r ? r.push(e) : o.fire(e);
          }),
          a = function () {
            r &&
              r.forEach(function (e) {
                return o.fire(e);
              }),
              (r = null);
          },
          o = new ge({
            onFirstListenerAdd: function () {
              i ||
                (i = e(function (e) {
                  return o.fire(e);
                }));
            },
            onFirstListenerDidAdd: function () {
              r && (t ? setTimeout(a) : a());
            },
            onLastListenerRemove: function () {
              i && i.dispose(), (i = null);
            },
          });
        return o.event;
      }
      (e.None = function () {
        return ee.None;
      }),
        (e.once = n),
        (e.map = r),
        (e.forEach = i),
        (e.filter = a),
        (e.signal = o),
        (e.any = s),
        (e.reduce = u),
        (e.debounce = c),
        (e.latch = h),
        (e.split = f),
        (e.buffer = d);
      var m = (function () {
        function e(t) {
          v(this, e), (this.event = t);
        }
        return (
          g(e, [
            {
              key: 'map',
              value: function (t) {
                return new e(r(this.event, t));
              },
            },
            {
              key: 'forEach',
              value: function (t) {
                return new e(i(this.event, t));
              },
            },
            {
              key: 'filter',
              value: function (t) {
                return new e(a(this.event, t));
              },
            },
            {
              key: 'reduce',
              value: function (t, n) {
                return new e(u(this.event, t, n));
              },
            },
            {
              key: 'latch',
              value: function () {
                return new e(h(this.event));
              },
            },
            {
              key: 'debounce',
              value: function (t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 100,
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i = arguments.length > 3 ? arguments[3] : void 0;
                return new e(c(this.event, t, n, r, i));
              },
            },
            {
              key: 'on',
              value: function (e, t, n) {
                return this.event(e, t, n);
              },
            },
            {
              key: 'once',
              value: function (e, t, r) {
                return n(this.event)(e, t, r);
              },
            },
          ]),
          e
        );
      })();
      function p(e) {
        return new m(e);
      }
      function b(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function (e) {
                  return e;
                },
          r = function () {
            return o.fire(n.apply(void 0, arguments));
          },
          i = function () {
            return e.on(t, r);
          },
          a = function () {
            return e.removeListener(t, r);
          },
          o = new ge({ onFirstListenerAdd: i, onLastListenerRemove: a });
        return o.event;
      }
      function y(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : function (e) {
                  return e;
                },
          r = function () {
            return o.fire(n.apply(void 0, arguments));
          },
          i = function () {
            return e.addEventListener(t, r);
          },
          a = function () {
            return e.removeEventListener(t, r);
          },
          o = new ge({ onFirstListenerAdd: i, onLastListenerRemove: a });
        return o.event;
      }
      function C(e) {
        return new Promise(function (t) {
          return n(e)(t);
        });
      }
      function w(e, t) {
        return (
          t(void 0),
          e(function (e) {
            return t(e);
          })
        );
      }
      function _(e, t) {
        var n = null;
        function r(e) {
          null === n || void 0 === n || n.dispose(), (n = new $()), t(e, n);
        }
        r(void 0);
        var i = e(function (e) {
          return r(e);
        });
        return X(function () {
          i.dispose(), null === n || void 0 === n || n.dispose();
        });
      }
      (e.chain = p),
        (e.fromNodeEventEmitter = b),
        (e.fromDOMEventEmitter = y),
        (e.toPromise = C),
        (e.runAndSubscribe = w),
        (e.runAndSubscribeWithStore = _);
    })(re || (re = {}));
    var ce = (function () {
      function e(t) {
        v(this, e),
          (this._listenerCount = 0),
          (this._invocationCount = 0),
          (this._elapsedOverall = 0),
          (this._name = ''.concat(t, '_').concat(e._idPool++));
      }
      return (
        g(e, [
          {
            key: 'start',
            value: function (e) {
              (this._stopWatch = new se(!0)), (this._listenerCount = e);
            },
          },
          {
            key: 'stop',
            value: function () {
              if (this._stopWatch) {
                var e = this._stopWatch.elapsed();
                (this._elapsedOverall += e),
                  (this._invocationCount += 1),
                  console.info(
                    'did FIRE '
                      .concat(this._name, ': elapsed_ms: ')
                      .concat(e.toFixed(5), ', listener: ')
                      .concat(this._listenerCount, ' (elapsed_overall: ')
                      .concat(
                        this._elapsedOverall.toFixed(2),
                        ', invocations: ',
                      )
                      .concat(this._invocationCount, ')'),
                  ),
                  (this._stopWatch = void 0);
              }
            },
          },
        ]),
        e
      );
    })();
    ce._idPool = 0;
    var he = -1,
      fe = (function () {
        function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Math.random().toString(18).slice(2, 5);
          v(this, e),
            (this.customThreshold = t),
            (this.name = n),
            (this._warnCountdown = 0);
        }
        return (
          g(e, [
            {
              key: 'dispose',
              value: function () {
                this._stacks && this._stacks.clear();
              },
            },
            {
              key: 'check',
              value: function (e, t) {
                var n = this,
                  r = he;
                if (
                  ('number' === typeof this.customThreshold &&
                    (r = this.customThreshold),
                  !(r <= 0 || t < r))
                ) {
                  this._stacks || (this._stacks = new Map());
                  var i = this._stacks.get(e.value) || 0;
                  if (
                    (this._stacks.set(e.value, i + 1),
                    (this._warnCountdown -= 1),
                    this._warnCountdown <= 0)
                  ) {
                    var o;
                    this._warnCountdown = 0.5 * r;
                    var s,
                      u = 0,
                      l = a(this._stacks);
                    try {
                      for (l.s(); !(s = l.n()).done; ) {
                        var c = s.value,
                          h = P(c, 2),
                          f = h[0],
                          d = h[1];
                        (!o || u < d) && ((o = f), (u = d));
                      }
                    } catch (m) {
                      l.e(m);
                    } finally {
                      l.f();
                    }
                    console.warn(
                      '['
                        .concat(
                          this.name,
                          '] potential listener LEAK detected, having ',
                        )
                        .concat(
                          t,
                          ' listeners already. MOST frequent listener (',
                        )
                        .concat(u, '):'),
                    ),
                      console.warn(o);
                  }
                  return function () {
                    var t = n._stacks.get(e.value) || 0;
                    n._stacks.set(e.value, t - 1);
                  };
                }
              },
            },
          ]),
          e
        );
      })(),
      de = (function () {
        function e(t) {
          v(this, e), (this.value = t);
        }
        return (
          g(
            e,
            [
              {
                key: 'print',
                value: function () {
                  console.warn(this.value.split('\n').slice(2).join('\n'));
                },
              },
            ],
            [
              {
                key: 'create',
                value: function () {
                  var t;
                  return new e(
                    null !== (t = new Error().stack) && void 0 !== t ? t : '',
                  );
                },
              },
            ],
          ),
          e
        );
      })(),
      me = (function () {
        function e(t, n, r) {
          v(this, e),
            (this.callback = t),
            (this.callbackThis = n),
            (this.stack = r),
            (this.subscription = new te());
        }
        return (
          g(e, [
            {
              key: 'invoke',
              value: function (e) {
                this.callback.call(this.callbackThis, e);
              },
            },
          ]),
          e
        );
      })(),
      ge = (function () {
        function e(t) {
          var n;
          v(this, e),
            (this._disposed = !1),
            (this._options = t),
            (this._leakageMon =
              he > 0
                ? new fe(this._options && this._options.leakWarningThreshold)
                : void 0),
            (this._perfMon = (
              null === (n = this._options) || void 0 === n
                ? void 0
                : n._profName
            )
              ? new ce(this._options._profName)
              : void 0);
        }
        return (
          g(e, [
            {
              key: 'dispose',
              value: function () {
                var e, t, n, r;
                if (!this._disposed) {
                  if (((this._disposed = !0), this._listeners)) {
                    if (ue) {
                      var i = Array.from(this._listeners);
                      queueMicrotask(function () {
                        var e,
                          t,
                          n = a(i);
                        try {
                          for (n.s(); !(t = n.n()).done; ) {
                            var r = t.value;
                            r.subscription.isset() &&
                              (r.subscription.unset(),
                              null === (e = r.stack) ||
                                void 0 === e ||
                                e.print());
                          }
                        } catch (o) {
                          n.e(o);
                        } finally {
                          n.f();
                        }
                      });
                    }
                    this._listeners.clear();
                  }
                  null === (e = this._deliveryQueue) ||
                    void 0 === e ||
                    e.clear(),
                    null ===
                      (n =
                        null === (t = this._options) || void 0 === t
                          ? void 0
                          : t.onLastListenerRemove) ||
                      void 0 === n ||
                      n.call(t),
                    null === (r = this._leakageMon) ||
                      void 0 === r ||
                      r.dispose();
                }
              },
            },
            {
              key: 'event',
              get: function () {
                var e = this;
                return (
                  this._event ||
                    (this._event = function (t, n, r) {
                      var i, a, o;
                      e._listeners || (e._listeners = new ie());
                      var s,
                        u,
                        l = e._listeners.isEmpty();
                      l &&
                        (null === (i = e._options) || void 0 === i
                          ? void 0
                          : i.onFirstListenerAdd) &&
                        e._options.onFirstListenerAdd(e),
                        e._leakageMon &&
                          e._listeners.size >= 30 &&
                          ((u = de.create()),
                          (s = e._leakageMon.check(u, e._listeners.size + 1))),
                        ue &&
                          (u = null !== u && void 0 !== u ? u : de.create());
                      var c = new me(t, n, u),
                        h = e._listeners.push(c);
                      l &&
                        (null === (a = e._options) || void 0 === a
                          ? void 0
                          : a.onFirstListenerDidAdd) &&
                        e._options.onFirstListenerDidAdd(e),
                        (null === (o = e._options) || void 0 === o
                          ? void 0
                          : o.onListenerDidAdd) &&
                          e._options.onListenerDidAdd(e, t, n);
                      var f = c.subscription.set(function () {
                        if (
                          (s && s(),
                          !e._disposed &&
                            (h(),
                            e._options && e._options.onLastListenerRemove))
                        ) {
                          var t = e._listeners && !e._listeners.isEmpty();
                          t || e._options.onLastListenerRemove(e);
                        }
                      });
                      return (
                        r instanceof $
                          ? r.add(f)
                          : Array.isArray(r) && r.push(f),
                        f
                      );
                    }),
                  this._event
                );
              },
            },
            {
              key: 'fire',
              value: function (e) {
                var t, n;
                if (this._listeners) {
                  this._deliveryQueue || (this._deliveryQueue = new ie());
                  var r,
                    i = a(this._listeners);
                  try {
                    for (i.s(); !(r = i.n()).done; ) {
                      var o = r.value;
                      this._deliveryQueue.push([o, e]);
                    }
                  } catch (h) {
                    i.e(h);
                  } finally {
                    i.f();
                  }
                  null === (t = this._perfMon) ||
                    void 0 === t ||
                    t.start(this._deliveryQueue.size);
                  while (this._deliveryQueue.size > 0) {
                    var s = this._deliveryQueue.shift(),
                      u = P(s, 2),
                      l = u[0],
                      c = u[1];
                    try {
                      l.invoke(c);
                    } catch (f) {
                      _(f);
                    }
                  }
                  null === (n = this._perfMon) || void 0 === n || n.stop();
                }
              },
            },
          ]),
          e
        );
      })();
    function ve(e) {
      var t = [],
        n = Object.getPrototypeOf(e);
      while (Object.prototype !== n)
        (t = t.concat(Object.getOwnPropertyNames(n))),
          (n = Object.getPrototypeOf(n));
      return t;
    }
    function pe(e) {
      var t,
        n = [],
        r = a(ve(e));
      try {
        for (r.s(); !(t = r.n()).done; ) {
          var i = t.value;
          'function' === typeof e[i] && n.push(i);
        }
      } catch (o) {
        r.e(o);
      } finally {
        r.f();
      }
      return n;
    }
    function be(e, t) {
      var n,
        r = function (e) {
          return function () {
            var n = Array.prototype.slice.call(arguments, 0);
            return t(e, n);
          };
        },
        i = {},
        o = a(e);
      try {
        for (o.s(); !(n = o.n()).done; ) {
          var s = n.value;
          i[s] = r(s);
        }
      } catch (u) {
        o.e(u);
      } finally {
        o.f();
      }
      return i;
    }
    function ye(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : 'Unreachable';
      throw new Error(t);
    }
    var Ce,
      we = (function () {
        function e(t) {
          v(this, e),
            (this.computeFn = t),
            (this.lastCache = void 0),
            (this.lastArgKey = void 0);
        }
        return (
          g(e, [
            {
              key: 'get',
              value: function (e) {
                var t = JSON.stringify(e);
                return (
                  this.lastArgKey !== t &&
                    ((this.lastArgKey = t),
                    (this.lastCache = this.computeFn(e))),
                  this.lastCache
                );
              },
            },
          ]),
          e
        );
      })(),
      _e = (function () {
        function e(t) {
          v(this, e), (this.executor = t), (this._didRun = !1);
        }
        return (
          g(e, [
            {
              key: 'getValue',
              value: function () {
                if (!this._didRun)
                  try {
                    this._value = this.executor();
                  } catch (e) {
                    this._error = e;
                  } finally {
                    this._didRun = !0;
                  }
                if (this._error) throw this._error;
                return this._value;
              },
            },
            {
              key: 'rawValue',
              get: function () {
                return this._value;
              },
            },
          ]),
          e
        );
      })();
    function ke(e) {
      return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, '\\$&');
    }
    function Se(e) {
      return e.split(/\r\n|\r|\n/);
    }
    function Le(e) {
      for (var t = 0, n = e.length; t < n; t++) {
        var r = e.charCodeAt(t);
        if (32 !== r && 9 !== r) return t;
      }
      return -1;
    }
    function Ne(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : e.length - 1,
          n = t;
        n >= 0;
        n--
      ) {
        var r = e.charCodeAt(n);
        if (32 !== r && 9 !== r) return n;
      }
      return -1;
    }
    function Ee(e) {
      return e >= 65 && e <= 90;
    }
    function Ae(e) {
      return 55296 <= e && e <= 56319;
    }
    function xe(e) {
      return 56320 <= e && e <= 57343;
    }
    function Oe(e, t) {
      return t - 56320 + ((e - 55296) << 10) + 65536;
    }
    function Me(e, t, n) {
      var r = e.charCodeAt(n);
      if (Ae(r) && n + 1 < t) {
        var i = e.charCodeAt(n + 1);
        if (xe(i)) return Oe(r, i);
      }
      return r;
    }
    var Re = /^[\t\n\r\x20-\x7E]*$/;
    function Pe(e) {
      return Re.test(e);
    }
    String.fromCharCode(65279);
    var Te = (function () {
      function e() {
        v(this, e), (this._data = Ie());
      }
      return (
        g(
          e,
          [
            {
              key: 'getGraphemeBreakType',
              value: function (e) {
                if (e < 32) return 10 === e ? 3 : 13 === e ? 2 : 4;
                if (e < 127) return 0;
                var t = this._data,
                  n = t.length / 3,
                  r = 1;
                while (r <= n)
                  if (e < t[3 * r]) r *= 2;
                  else {
                    if (!(e > t[3 * r + 1])) return t[3 * r + 2];
                    r = 2 * r + 1;
                  }
                return 0;
              },
            },
          ],
          [
            {
              key: 'getInstance',
              value: function () {
                return e._INSTANCE || (e._INSTANCE = new e()), e._INSTANCE;
              },
            },
          ],
        ),
        e
      );
    })();
    function Ie() {
      return JSON.parse(
        '[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]',
      );
    }
    Te._INSTANCE = null;
    var Ke = (function () {
      function e(t) {
        v(this, e), (this.confusableDictionary = t);
      }
      return (
        g(
          e,
          [
            {
              key: 'isAmbiguous',
              value: function (e) {
                return this.confusableDictionary.has(e);
              },
            },
            {
              key: 'getPrimaryConfusable',
              value: function (e) {
                return this.confusableDictionary.get(e);
              },
            },
            {
              key: 'getConfusableCodePoints',
              value: function () {
                return new Set(this.confusableDictionary.keys());
              },
            },
          ],
          [
            {
              key: 'getInstance',
              value: function (t) {
                return e.cache.get(Array.from(t));
              },
            },
            {
              key: 'getLocales',
              value: function () {
                return e._locales.getValue();
              },
            },
          ],
        ),
        e
      );
    })();
    (Ce = Ke),
      (Ke.ambiguousCharacterData = new _e(function () {
        return JSON.parse(
          '{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,8218,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,8242,96,1370,96,1523,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71922,67,71913,67,65315,67,8557,67,8450,67,8493,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71919,87,71910,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,66293,90,71909,90,65338,90,8484,90,8488,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65297,49,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125],"_default":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"cs":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"es":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"fr":[65374,126,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"it":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ja":[8211,45,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65292,44,65307,59],"ko":[8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"pt-BR":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"ru":[65374,126,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65288,40,65289,41,65292,44,65307,59,65311,63],"zh-hans":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41],"zh-hant":[8211,45,65374,126,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65283,35,65307,59]}',
        );
      })),
      (Ke.cache = new we(function (e) {
        function t(e) {
          for (var t = new Map(), n = 0; n < e.length; n += 2)
            t.set(e[n], e[n + 1]);
          return t;
        }
        function n(e, t) {
          var n,
            r = new Map(e),
            i = a(t);
          try {
            for (i.s(); !(n = i.n()).done; ) {
              var o = n.value,
                s = P(o, 2),
                u = s[0],
                l = s[1];
              r.set(u, l);
            }
          } catch (c) {
            i.e(c);
          } finally {
            i.f();
          }
          return r;
        }
        function r(e, t) {
          if (!e) return t;
          var n,
            r = new Map(),
            i = a(e);
          try {
            for (i.s(); !(n = i.n()).done; ) {
              var o = n.value,
                s = P(o, 2),
                u = s[0],
                l = s[1];
              t.has(u) && r.set(u, l);
            }
          } catch (c) {
            i.e(c);
          } finally {
            i.f();
          }
          return r;
        }
        var i = Ce.ambiguousCharacterData.getValue(),
          o = e.filter(function (e) {
            return !e.startsWith('_') && e in i;
          });
        0 === o.length && (o = ['_default']);
        var s,
          u = void 0,
          l = a(o);
        try {
          for (l.s(); !(s = l.n()).done; ) {
            var c = s.value,
              h = t(i[c]);
            u = r(u, h);
          }
        } catch (m) {
          l.e(m);
        } finally {
          l.f();
        }
        var f = t(i['_common']),
          d = n(f, u);
        return new Ke(d);
      })),
      (Ke._locales = new _e(function () {
        return Object.keys(Ke.ambiguousCharacterData.getValue()).filter(
          function (e) {
            return !e.startsWith('_');
          },
        );
      }));
    var De = (function () {
      function e() {
        v(this, e);
      }
      return (
        g(e, null, [
          {
            key: 'getRawData',
            value: function () {
              return JSON.parse(
                '[9,10,11,12,13,32,127,160,173,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8203,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12288,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999]',
              );
            },
          },
          {
            key: 'getData',
            value: function () {
              return (
                this._data || (this._data = new Set(e.getRawData())), this._data
              );
            },
          },
          {
            key: 'isInvisibleCharacter',
            value: function (t) {
              return e.getData().has(t);
            },
          },
          {
            key: 'codePoints',
            get: function () {
              return e.getData();
            },
          },
        ]),
        e
      );
    })();
    De._data = void 0;
    var Ve = '$initialize';
    var Fe = g(function e(t, n, r, i) {
        v(this, e),
          (this.vsWorker = t),
          (this.req = n),
          (this.method = r),
          (this.args = i),
          (this.type = 0);
      }),
      Be = g(function e(t, n, r, i) {
        v(this, e),
          (this.vsWorker = t),
          (this.seq = n),
          (this.res = r),
          (this.err = i),
          (this.type = 1);
      }),
      Ue = g(function e(t, n, r, i) {
        v(this, e),
          (this.vsWorker = t),
          (this.req = n),
          (this.eventName = r),
          (this.arg = i),
          (this.type = 2);
      }),
      qe = g(function e(t, n, r) {
        v(this, e),
          (this.vsWorker = t),
          (this.req = n),
          (this.event = r),
          (this.type = 3);
      }),
      He = g(function e(t, n) {
        v(this, e), (this.vsWorker = t), (this.req = n), (this.type = 4);
      }),
      We = (function () {
        function e(t) {
          v(this, e),
            (this._workerId = -1),
            (this._handler = t),
            (this._lastSentReq = 0),
            (this._pendingReplies = Object.create(null)),
            (this._pendingEmitters = new Map()),
            (this._pendingEvents = new Map());
        }
        return (
          g(e, [
            {
              key: 'setWorkerId',
              value: function (e) {
                this._workerId = e;
              },
            },
            {
              key: 'sendMessage',
              value: function (e, t) {
                var n = this,
                  r = String(++this._lastSentReq);
                return new Promise(function (i, a) {
                  (n._pendingReplies[r] = { resolve: i, reject: a }),
                    n._send(new Fe(n._workerId, r, e, t));
                });
              },
            },
            {
              key: 'listen',
              value: function (e, t) {
                var n = this,
                  r = null,
                  i = new ge({
                    onFirstListenerAdd: function () {
                      (r = String(++n._lastSentReq)),
                        n._pendingEmitters.set(r, i),
                        n._send(new Ue(n._workerId, r, e, t));
                    },
                    onLastListenerRemove: function () {
                      n._pendingEmitters['delete'](r),
                        n._send(new He(n._workerId, r)),
                        (r = null);
                    },
                  });
                return i.event;
              },
            },
            {
              key: 'handleMessage',
              value: function (e) {
                e &&
                  e.vsWorker &&
                  ((-1 !== this._workerId && e.vsWorker !== this._workerId) ||
                    this._handleMessage(e));
              },
            },
            {
              key: '_handleMessage',
              value: function (e) {
                switch (e.type) {
                  case 1:
                    return this._handleReplyMessage(e);
                  case 0:
                    return this._handleRequestMessage(e);
                  case 2:
                    return this._handleSubscribeEventMessage(e);
                  case 3:
                    return this._handleEventMessage(e);
                  case 4:
                    return this._handleUnsubscribeEventMessage(e);
                }
              },
            },
            {
              key: '_handleReplyMessage',
              value: function (e) {
                if (this._pendingReplies[e.seq]) {
                  var t = this._pendingReplies[e.seq];
                  if ((delete this._pendingReplies[e.seq], e.err)) {
                    var n = e.err;
                    return (
                      e.err.$isError &&
                        ((n = new Error()),
                        (n.name = e.err.name),
                        (n.message = e.err.message),
                        (n.stack = e.err.stack)),
                      void t.reject(n)
                    );
                  }
                  t.resolve(e.res);
                } else console.warn('Got reply to unknown seq');
              },
            },
            {
              key: '_handleRequestMessage',
              value: function (e) {
                var t = this,
                  n = e.req,
                  r = this._handler.handleMessage(e.method, e.args);
                r.then(
                  function (e) {
                    t._send(new Be(t._workerId, n, e, void 0));
                  },
                  function (e) {
                    e.detail instanceof Error && (e.detail = k(e.detail)),
                      t._send(new Be(t._workerId, n, void 0, k(e)));
                  },
                );
              },
            },
            {
              key: '_handleSubscribeEventMessage',
              value: function (e) {
                var t = this,
                  n = e.req,
                  r = this._handler.handleEvent(
                    e.eventName,
                    e.arg,
                  )(function (e) {
                    t._send(new qe(t._workerId, n, e));
                  });
                this._pendingEvents.set(n, r);
              },
            },
            {
              key: '_handleEventMessage',
              value: function (e) {
                this._pendingEmitters.has(e.req)
                  ? this._pendingEmitters.get(e.req).fire(e.event)
                  : console.warn('Got event for unknown req');
              },
            },
            {
              key: '_handleUnsubscribeEventMessage',
              value: function (e) {
                this._pendingEvents.has(e.req)
                  ? (this._pendingEvents.get(e.req).dispose(),
                    this._pendingEvents['delete'](e.req))
                  : console.warn('Got unsubscribe for unknown req');
              },
            },
            {
              key: '_send',
              value: function (e) {
                var t = [];
                if (0 === e.type)
                  for (var n = 0; n < e.args.length; n++)
                    e.args[n] instanceof ArrayBuffer && t.push(e.args[n]);
                else
                  1 === e.type && e.res instanceof ArrayBuffer && t.push(e.res);
                this._handler.sendMessage(e, t);
              },
            },
          ]),
          e
        );
      })();
    function je(e) {
      return 'o' === e[0] && 'n' === e[1] && Ee(e.charCodeAt(2));
    }
    function ze(e) {
      return /^onDynamic/.test(e) && Ee(e.charCodeAt(9));
    }
    function Ge(e, t, n) {
      var r,
        i = function (e) {
          return function () {
            var n = Array.prototype.slice.call(arguments, 0);
            return t(e, n);
          };
        },
        o = function (e) {
          return function (t) {
            return n(e, t);
          };
        },
        s = {},
        u = a(e);
      try {
        for (u.s(); !(r = u.n()).done; ) {
          var l = r.value;
          ze(l) ? (s[l] = o(l)) : je(l) ? (s[l] = n(l, void 0)) : (s[l] = i(l));
        }
      } catch (c) {
        u.e(c);
      } finally {
        u.f();
      }
      return s;
    }
    var Ye = (function () {
      function e(t, n) {
        var r = this;
        v(this, e),
          (this._requestHandlerFactory = n),
          (this._requestHandler = null),
          (this._protocol = new We({
            sendMessage: function (e, n) {
              t(e, n);
            },
            handleMessage: function (e, t) {
              return r._handleMessage(e, t);
            },
            handleEvent: function (e, t) {
              return r._handleEvent(e, t);
            },
          }));
      }
      return (
        g(e, [
          {
            key: 'onmessage',
            value: function (e) {
              this._protocol.handleMessage(e);
            },
          },
          {
            key: '_handleMessage',
            value: function (e, t) {
              if (e === Ve) return this.initialize(t[0], t[1], t[2], t[3]);
              if (
                !this._requestHandler ||
                'function' !== typeof this._requestHandler[e]
              )
                return Promise.reject(
                  new Error('Missing requestHandler or method: ' + e),
                );
              try {
                return Promise.resolve(
                  this._requestHandler[e].apply(this._requestHandler, t),
                );
              } catch (n) {
                return Promise.reject(n);
              }
            },
          },
          {
            key: '_handleEvent',
            value: function (e, t) {
              if (!this._requestHandler)
                throw new Error('Missing requestHandler');
              if (ze(e)) {
                var n = this._requestHandler[e].call(this._requestHandler, t);
                if ('function' !== typeof n)
                  throw new Error(
                    'Missing dynamic event '.concat(e, ' on request handler.'),
                  );
                return n;
              }
              if (je(e)) {
                var r = this._requestHandler[e];
                if ('function' !== typeof r)
                  throw new Error(
                    'Missing event '.concat(e, ' on request handler.'),
                  );
                return r;
              }
              throw new Error('Malformed event name '.concat(e));
            },
          },
          {
            key: 'initialize',
            value: function (e, t, n, r) {
              var i = this;
              this._protocol.setWorkerId(e);
              var a = function (e, t) {
                  return i._protocol.sendMessage(e, t);
                },
                o = function (e, t) {
                  return i._protocol.listen(e, t);
                },
                s = Ge(r, a, o);
              return this._requestHandlerFactory
                ? ((this._requestHandler = this._requestHandlerFactory(s)),
                  Promise.resolve(pe(this._requestHandler)))
                : (t &&
                    ('undefined' !== typeof t.baseUrl && delete t['baseUrl'],
                    'undefined' !== typeof t.paths &&
                      'undefined' !== typeof t.paths.vs &&
                      delete t.paths['vs'],
                    void 0 !== typeof t.trustedTypesPolicy &&
                      delete t['trustedTypesPolicy'],
                    (t.catchError = !0),
                    ae['a'].require.config(t)),
                  new Promise(function (e, t) {
                    var r = ae['a'].require;
                    r(
                      [n],
                      function (n) {
                        (i._requestHandler = n.create(s)),
                          i._requestHandler
                            ? e(pe(i._requestHandler))
                            : t(new Error('No RequestHandler!'));
                      },
                      t,
                    );
                  }));
            },
          },
        ]),
        e
      );
    })();
    var Qe = (function () {
      function e(t, n, r, i) {
        v(this, e),
          (this.originalStart = t),
          (this.originalLength = n),
          (this.modifiedStart = r),
          (this.modifiedLength = i);
      }
      return (
        g(e, [
          {
            key: 'getOriginalEnd',
            value: function () {
              return this.originalStart + this.originalLength;
            },
          },
          {
            key: 'getModifiedEnd',
            value: function () {
              return this.modifiedStart + this.modifiedLength;
            },
          },
        ]),
        e
      );
    })();
    function Je(e, t) {
      return ((t << 5) - t + e) | 0;
    }
    function Ze(e, t) {
      t = Je(149417, t);
      for (var n = 0, r = e.length; n < r; n++) t = Je(e.charCodeAt(n), t);
      return t;
    }
    function Xe(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 32,
        r = n - t,
        i = ~((1 << r) - 1);
      return ((e << t) | ((i & e) >>> r)) >>> 0;
    }
    function $e(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : e.byteLength,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          i = 0;
        i < n;
        i++
      )
        e[t + i] = r;
    }
    function et(e, t) {
      var n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '0';
      while (e.length < t) e = n + e;
      return e;
    }
    function tt(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
      return e instanceof ArrayBuffer
        ? Array.from(new Uint8Array(e))
            .map(function (e) {
              return e.toString(16).padStart(2, '0');
            })
            .join('')
        : et((e >>> 0).toString(16), t / 4);
    }
    var nt = (function () {
      function e() {
        v(this, e),
          (this._h0 = 1732584193),
          (this._h1 = 4023233417),
          (this._h2 = 2562383102),
          (this._h3 = 271733878),
          (this._h4 = 3285377520),
          (this._buff = new Uint8Array(67)),
          (this._buffDV = new DataView(this._buff.buffer)),
          (this._buffLen = 0),
          (this._totalLen = 0),
          (this._leftoverHighSurrogate = 0),
          (this._finished = !1);
      }
      return (
        g(e, [
          {
            key: 'update',
            value: function (e) {
              var t = e.length;
              if (0 !== t) {
                var n,
                  r,
                  i = this._buff,
                  a = this._buffLen,
                  o = this._leftoverHighSurrogate;
                0 !== o
                  ? ((n = o), (r = -1), (o = 0))
                  : ((n = e.charCodeAt(0)), (r = 0));
                while (1) {
                  var s = n;
                  if (Ae(n)) {
                    if (!(r + 1 < t)) {
                      o = n;
                      break;
                    }
                    var u = e.charCodeAt(r + 1);
                    xe(u) ? (r++, (s = Oe(n, u))) : (s = 65533);
                  } else xe(n) && (s = 65533);
                  if (((a = this._push(i, a, s)), r++, !(r < t))) break;
                  n = e.charCodeAt(r);
                }
                (this._buffLen = a), (this._leftoverHighSurrogate = o);
              }
            },
          },
          {
            key: '_push',
            value: function (e, t, n) {
              return (
                n < 128
                  ? (e[t++] = n)
                  : n < 2048
                  ? ((e[t++] = 192 | ((1984 & n) >>> 6)),
                    (e[t++] = 128 | ((63 & n) >>> 0)))
                  : n < 65536
                  ? ((e[t++] = 224 | ((61440 & n) >>> 12)),
                    (e[t++] = 128 | ((4032 & n) >>> 6)),
                    (e[t++] = 128 | ((63 & n) >>> 0)))
                  : ((e[t++] = 240 | ((1835008 & n) >>> 18)),
                    (e[t++] = 128 | ((258048 & n) >>> 12)),
                    (e[t++] = 128 | ((4032 & n) >>> 6)),
                    (e[t++] = 128 | ((63 & n) >>> 0))),
                t >= 64 &&
                  (this._step(),
                  (t -= 64),
                  (this._totalLen += 64),
                  (e[0] = e[64]),
                  (e[1] = e[65]),
                  (e[2] = e[66])),
                t
              );
            },
          },
          {
            key: 'digest',
            value: function () {
              return (
                this._finished ||
                  ((this._finished = !0),
                  this._leftoverHighSurrogate &&
                    ((this._leftoverHighSurrogate = 0),
                    (this._buffLen = this._push(
                      this._buff,
                      this._buffLen,
                      65533,
                    ))),
                  (this._totalLen += this._buffLen),
                  this._wrapUp()),
                tt(this._h0) +
                  tt(this._h1) +
                  tt(this._h2) +
                  tt(this._h3) +
                  tt(this._h4)
              );
            },
          },
          {
            key: '_wrapUp',
            value: function () {
              (this._buff[this._buffLen++] = 128),
                $e(this._buff, this._buffLen),
                this._buffLen > 56 && (this._step(), $e(this._buff));
              var e = 8 * this._totalLen;
              this._buffDV.setUint32(56, Math.floor(e / 4294967296), !1),
                this._buffDV.setUint32(60, e % 4294967296, !1),
                this._step();
            },
          },
          {
            key: '_step',
            value: function () {
              for (
                var t = e._bigBlock32, n = this._buffDV, r = 0;
                r < 64;
                r += 4
              )
                t.setUint32(r, n.getUint32(r, !1), !1);
              for (var i = 64; i < 320; i += 4)
                t.setUint32(
                  i,
                  Xe(
                    t.getUint32(i - 12, !1) ^
                      t.getUint32(i - 32, !1) ^
                      t.getUint32(i - 56, !1) ^
                      t.getUint32(i - 64, !1),
                    1,
                  ),
                  !1,
                );
              for (
                var a,
                  o,
                  s,
                  u = this._h0,
                  l = this._h1,
                  c = this._h2,
                  h = this._h3,
                  f = this._h4,
                  d = 0;
                d < 80;
                d++
              )
                d < 20
                  ? ((a = (l & c) | (~l & h)), (o = 1518500249))
                  : d < 40
                  ? ((a = l ^ c ^ h), (o = 1859775393))
                  : d < 60
                  ? ((a = (l & c) | (l & h) | (c & h)), (o = 2400959708))
                  : ((a = l ^ c ^ h), (o = 3395469782)),
                  (s =
                    (Xe(u, 5) + a + f + o + t.getUint32(4 * d, !1)) &
                    4294967295),
                  (f = h),
                  (h = c),
                  (c = Xe(l, 30)),
                  (l = u),
                  (u = s);
              (this._h0 = (this._h0 + u) & 4294967295),
                (this._h1 = (this._h1 + l) & 4294967295),
                (this._h2 = (this._h2 + c) & 4294967295),
                (this._h3 = (this._h3 + h) & 4294967295),
                (this._h4 = (this._h4 + f) & 4294967295);
            },
          },
        ]),
        e
      );
    })();
    nt._bigBlock32 = new DataView(new ArrayBuffer(320));
    var rt = (function () {
      function e(t) {
        v(this, e), (this.source = t);
      }
      return (
        g(e, [
          {
            key: 'getElements',
            value: function () {
              for (
                var e = this.source,
                  t = new Int32Array(e.length),
                  n = 0,
                  r = e.length;
                n < r;
                n++
              )
                t[n] = e.charCodeAt(n);
              return t;
            },
          },
        ]),
        e
      );
    })();
    function it(e, t, n) {
      return new ut(new rt(e), new rt(t)).ComputeDiff(n).changes;
    }
    var at = (function () {
        function e() {
          v(this, e);
        }
        return (
          g(e, null, [
            {
              key: 'Assert',
              value: function (e, t) {
                if (!e) throw new Error(t);
              },
            },
          ]),
          e
        );
      })(),
      ot = (function () {
        function e() {
          v(this, e);
        }
        return (
          g(e, null, [
            {
              key: 'Copy',
              value: function (e, t, n, r, i) {
                for (var a = 0; a < i; a++) n[r + a] = e[t + a];
              },
            },
            {
              key: 'Copy2',
              value: function (e, t, n, r, i) {
                for (var a = 0; a < i; a++) n[r + a] = e[t + a];
              },
            },
          ]),
          e
        );
      })(),
      st = (function () {
        function e() {
          v(this, e),
            (this.m_changes = []),
            (this.m_originalStart = 1073741824),
            (this.m_modifiedStart = 1073741824),
            (this.m_originalCount = 0),
            (this.m_modifiedCount = 0);
        }
        return (
          g(e, [
            {
              key: 'MarkNextChange',
              value: function () {
                (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                  this.m_changes.push(
                    new Qe(
                      this.m_originalStart,
                      this.m_originalCount,
                      this.m_modifiedStart,
                      this.m_modifiedCount,
                    ),
                  ),
                  (this.m_originalCount = 0),
                  (this.m_modifiedCount = 0),
                  (this.m_originalStart = 1073741824),
                  (this.m_modifiedStart = 1073741824);
              },
            },
            {
              key: 'AddOriginalElement',
              value: function (e, t) {
                (this.m_originalStart = Math.min(this.m_originalStart, e)),
                  (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                  this.m_originalCount++;
              },
            },
            {
              key: 'AddModifiedElement',
              value: function (e, t) {
                (this.m_originalStart = Math.min(this.m_originalStart, e)),
                  (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)),
                  this.m_modifiedCount++;
              },
            },
            {
              key: 'getChanges',
              value: function () {
                return (
                  (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                    this.MarkNextChange(),
                  this.m_changes
                );
              },
            },
            {
              key: 'getReverseChanges',
              value: function () {
                return (
                  (this.m_originalCount > 0 || this.m_modifiedCount > 0) &&
                    this.MarkNextChange(),
                  this.m_changes.reverse(),
                  this.m_changes
                );
              },
            },
          ]),
          e
        );
      })(),
      ut = (function () {
        function e(t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          v(this, e),
            (this.ContinueProcessingPredicate = r),
            (this._originalSequence = t),
            (this._modifiedSequence = n);
          var i = e._getElements(t),
            a = P(i, 3),
            o = a[0],
            s = a[1],
            u = a[2],
            l = e._getElements(n),
            c = P(l, 3),
            h = c[0],
            f = c[1],
            d = c[2];
          (this._hasStrings = u && d),
            (this._originalStringElements = o),
            (this._originalElementsOrHash = s),
            (this._modifiedStringElements = h),
            (this._modifiedElementsOrHash = f),
            (this.m_forwardHistory = []),
            (this.m_reverseHistory = []);
        }
        return (
          g(
            e,
            [
              {
                key: 'ElementsAreEqual',
                value: function (e, t) {
                  return (
                    this._originalElementsOrHash[e] ===
                      this._modifiedElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._originalStringElements[e] ===
                        this._modifiedStringElements[t])
                  );
                },
              },
              {
                key: 'ElementsAreStrictEqual',
                value: function (t, n) {
                  if (!this.ElementsAreEqual(t, n)) return !1;
                  var r = e._getStrictElement(this._originalSequence, t),
                    i = e._getStrictElement(this._modifiedSequence, n);
                  return r === i;
                },
              },
              {
                key: 'OriginalElementsAreEqual',
                value: function (e, t) {
                  return (
                    this._originalElementsOrHash[e] ===
                      this._originalElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._originalStringElements[e] ===
                        this._originalStringElements[t])
                  );
                },
              },
              {
                key: 'ModifiedElementsAreEqual',
                value: function (e, t) {
                  return (
                    this._modifiedElementsOrHash[e] ===
                      this._modifiedElementsOrHash[t] &&
                    (!this._hasStrings ||
                      this._modifiedStringElements[e] ===
                        this._modifiedStringElements[t])
                  );
                },
              },
              {
                key: 'ComputeDiff',
                value: function (e) {
                  return this._ComputeDiff(
                    0,
                    this._originalElementsOrHash.length - 1,
                    0,
                    this._modifiedElementsOrHash.length - 1,
                    e,
                  );
                },
              },
              {
                key: '_ComputeDiff',
                value: function (e, t, n, r, i) {
                  var a = [!1],
                    o = this.ComputeDiffRecursive(e, t, n, r, a);
                  return (
                    i && (o = this.PrettifyChanges(o)),
                    { quitEarly: a[0], changes: o }
                  );
                },
              },
              {
                key: 'ComputeDiffRecursive',
                value: function (e, t, n, r, i) {
                  i[0] = !1;
                  while (e <= t && n <= r && this.ElementsAreEqual(e, n))
                    e++, n++;
                  while (t >= e && r >= n && this.ElementsAreEqual(t, r))
                    t--, r--;
                  var a;
                  if (e > t || n > r)
                    return (
                      n <= r
                        ? (at.Assert(
                            e === t + 1,
                            'originalStart should only be one more than originalEnd',
                          ),
                          (a = [new Qe(e, 0, n, r - n + 1)]))
                        : e <= t
                        ? (at.Assert(
                            n === r + 1,
                            'modifiedStart should only be one more than modifiedEnd',
                          ),
                          (a = [new Qe(e, t - e + 1, n, 0)]))
                        : (at.Assert(
                            e === t + 1,
                            'originalStart should only be one more than originalEnd',
                          ),
                          at.Assert(
                            n === r + 1,
                            'modifiedStart should only be one more than modifiedEnd',
                          ),
                          (a = [])),
                      a
                    );
                  var o = [0],
                    s = [0],
                    u = this.ComputeRecursionPoint(e, t, n, r, o, s, i),
                    l = o[0],
                    c = s[0];
                  if (null !== u) return u;
                  if (!i[0]) {
                    var h = this.ComputeDiffRecursive(e, l, n, c, i),
                      f = [];
                    return (
                      (f = i[0]
                        ? [
                            new Qe(
                              l + 1,
                              t - (l + 1) + 1,
                              c + 1,
                              r - (c + 1) + 1,
                            ),
                          ]
                        : this.ComputeDiffRecursive(l + 1, t, c + 1, r, i)),
                      this.ConcatenateChanges(h, f)
                    );
                  }
                  return [new Qe(e, t - e + 1, n, r - n + 1)];
                },
              },
              {
                key: 'WALKTRACE',
                value: function (
                  e,
                  t,
                  n,
                  r,
                  i,
                  a,
                  o,
                  s,
                  u,
                  l,
                  c,
                  h,
                  f,
                  d,
                  m,
                  g,
                  v,
                  p,
                ) {
                  var b = null,
                    y = null,
                    C = new st(),
                    w = t,
                    _ = n,
                    k = f[0] - g[0] - r,
                    S = -1073741824,
                    L = this.m_forwardHistory.length - 1;
                  do {
                    var N = k + e;
                    N === w || (N < _ && u[N - 1] < u[N + 1])
                      ? ((c = u[N + 1]),
                        (d = c - k - r),
                        c < S && C.MarkNextChange(),
                        (S = c),
                        C.AddModifiedElement(c + 1, d),
                        (k = N + 1 - e))
                      : ((c = u[N - 1] + 1),
                        (d = c - k - r),
                        c < S && C.MarkNextChange(),
                        (S = c - 1),
                        C.AddOriginalElement(c, d + 1),
                        (k = N - 1 - e)),
                      L >= 0 &&
                        ((u = this.m_forwardHistory[L]),
                        (e = u[0]),
                        (w = 1),
                        (_ = u.length - 1));
                  } while (--L >= -1);
                  if (((b = C.getReverseChanges()), p[0])) {
                    var E = f[0] + 1,
                      A = g[0] + 1;
                    if (null !== b && b.length > 0) {
                      var x = b[b.length - 1];
                      (E = Math.max(E, x.getOriginalEnd())),
                        (A = Math.max(A, x.getModifiedEnd()));
                    }
                    y = [new Qe(E, h - E + 1, A, m - A + 1)];
                  } else {
                    (C = new st()),
                      (w = a),
                      (_ = o),
                      (k = f[0] - g[0] - s),
                      (S = 1073741824),
                      (L = v
                        ? this.m_reverseHistory.length - 1
                        : this.m_reverseHistory.length - 2);
                    do {
                      var O = k + i;
                      O === w || (O < _ && l[O - 1] >= l[O + 1])
                        ? ((c = l[O + 1] - 1),
                          (d = c - k - s),
                          c > S && C.MarkNextChange(),
                          (S = c + 1),
                          C.AddOriginalElement(c + 1, d + 1),
                          (k = O + 1 - i))
                        : ((c = l[O - 1]),
                          (d = c - k - s),
                          c > S && C.MarkNextChange(),
                          (S = c),
                          C.AddModifiedElement(c + 1, d + 1),
                          (k = O - 1 - i)),
                        L >= 0 &&
                          ((l = this.m_reverseHistory[L]),
                          (i = l[0]),
                          (w = 1),
                          (_ = l.length - 1));
                    } while (--L >= -1);
                    y = C.getChanges();
                  }
                  return this.ConcatenateChanges(b, y);
                },
              },
              {
                key: 'ComputeRecursionPoint',
                value: function (e, t, n, r, i, a, o) {
                  var s = 0,
                    u = 0,
                    l = 0,
                    c = 0,
                    h = 0,
                    f = 0;
                  e--,
                    n--,
                    (i[0] = 0),
                    (a[0] = 0),
                    (this.m_forwardHistory = []),
                    (this.m_reverseHistory = []);
                  var d = t - e + (r - n),
                    m = d + 1,
                    g = new Int32Array(m),
                    v = new Int32Array(m),
                    p = r - n,
                    b = t - e,
                    y = e - n,
                    C = t - r,
                    w = b - p,
                    _ = w % 2 === 0;
                  (g[p] = e), (v[b] = t), (o[0] = !1);
                  for (var k = 1; k <= d / 2 + 1; k++) {
                    var S = 0,
                      L = 0;
                    (l = this.ClipDiagonalBound(p - k, k, p, m)),
                      (c = this.ClipDiagonalBound(p + k, k, p, m));
                    for (var N = l; N <= c; N += 2) {
                      (s =
                        N === l || (N < c && g[N - 1] < g[N + 1])
                          ? g[N + 1]
                          : g[N - 1] + 1),
                        (u = s - (N - p) - y);
                      var E = s;
                      while (
                        s < t &&
                        u < r &&
                        this.ElementsAreEqual(s + 1, u + 1)
                      )
                        s++, u++;
                      if (
                        ((g[N] = s),
                        s + u > S + L && ((S = s), (L = u)),
                        !_ && Math.abs(N - b) <= k - 1 && s >= v[N])
                      )
                        return (
                          (i[0] = s),
                          (a[0] = u),
                          E <= v[N] && k <= 1448
                            ? this.WALKTRACE(
                                p,
                                l,
                                c,
                                y,
                                b,
                                h,
                                f,
                                C,
                                g,
                                v,
                                s,
                                t,
                                i,
                                u,
                                r,
                                a,
                                _,
                                o,
                              )
                            : null
                        );
                    }
                    var A = (S - e + (L - n) - k) / 2;
                    if (
                      null !== this.ContinueProcessingPredicate &&
                      !this.ContinueProcessingPredicate(S, A)
                    )
                      return (
                        (o[0] = !0),
                        (i[0] = S),
                        (a[0] = L),
                        A > 0 && k <= 1448
                          ? this.WALKTRACE(
                              p,
                              l,
                              c,
                              y,
                              b,
                              h,
                              f,
                              C,
                              g,
                              v,
                              s,
                              t,
                              i,
                              u,
                              r,
                              a,
                              _,
                              o,
                            )
                          : (e++, n++, [new Qe(e, t - e + 1, n, r - n + 1)])
                      );
                    (h = this.ClipDiagonalBound(b - k, k, b, m)),
                      (f = this.ClipDiagonalBound(b + k, k, b, m));
                    for (var x = h; x <= f; x += 2) {
                      (s =
                        x === h || (x < f && v[x - 1] >= v[x + 1])
                          ? v[x + 1] - 1
                          : v[x - 1]),
                        (u = s - (x - b) - C);
                      var O = s;
                      while (s > e && u > n && this.ElementsAreEqual(s, u))
                        s--, u--;
                      if (((v[x] = s), _ && Math.abs(x - p) <= k && s <= g[x]))
                        return (
                          (i[0] = s),
                          (a[0] = u),
                          O >= g[x] && k <= 1448
                            ? this.WALKTRACE(
                                p,
                                l,
                                c,
                                y,
                                b,
                                h,
                                f,
                                C,
                                g,
                                v,
                                s,
                                t,
                                i,
                                u,
                                r,
                                a,
                                _,
                                o,
                              )
                            : null
                        );
                    }
                    if (k <= 1447) {
                      var M = new Int32Array(c - l + 2);
                      (M[0] = p - l + 1),
                        ot.Copy2(g, l, M, 1, c - l + 1),
                        this.m_forwardHistory.push(M),
                        (M = new Int32Array(f - h + 2)),
                        (M[0] = b - h + 1),
                        ot.Copy2(v, h, M, 1, f - h + 1),
                        this.m_reverseHistory.push(M);
                    }
                  }
                  return this.WALKTRACE(
                    p,
                    l,
                    c,
                    y,
                    b,
                    h,
                    f,
                    C,
                    g,
                    v,
                    s,
                    t,
                    i,
                    u,
                    r,
                    a,
                    _,
                    o,
                  );
                },
              },
              {
                key: 'PrettifyChanges',
                value: function (e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                      r =
                        t < e.length - 1
                          ? e[t + 1].originalStart
                          : this._originalElementsOrHash.length,
                      i =
                        t < e.length - 1
                          ? e[t + 1].modifiedStart
                          : this._modifiedElementsOrHash.length,
                      a = n.originalLength > 0,
                      o = n.modifiedLength > 0;
                    while (
                      n.originalStart + n.originalLength < r &&
                      n.modifiedStart + n.modifiedLength < i &&
                      (!a ||
                        this.OriginalElementsAreEqual(
                          n.originalStart,
                          n.originalStart + n.originalLength,
                        )) &&
                      (!o ||
                        this.ModifiedElementsAreEqual(
                          n.modifiedStart,
                          n.modifiedStart + n.modifiedLength,
                        ))
                    ) {
                      var s = this.ElementsAreStrictEqual(
                          n.originalStart,
                          n.modifiedStart,
                        ),
                        u = this.ElementsAreStrictEqual(
                          n.originalStart + n.originalLength,
                          n.modifiedStart + n.modifiedLength,
                        );
                      if (u && !s) break;
                      n.originalStart++, n.modifiedStart++;
                    }
                    var l = [null];
                    t < e.length - 1 &&
                      this.ChangesOverlap(e[t], e[t + 1], l) &&
                      ((e[t] = l[0]), e.splice(t + 1, 1), t--);
                  }
                  for (var c = e.length - 1; c >= 0; c--) {
                    var h = e[c],
                      f = 0,
                      d = 0;
                    if (c > 0) {
                      var m = e[c - 1];
                      (f = m.originalStart + m.originalLength),
                        (d = m.modifiedStart + m.modifiedLength);
                    }
                    for (
                      var g = h.originalLength > 0,
                        v = h.modifiedLength > 0,
                        p = 0,
                        b = this._boundaryScore(
                          h.originalStart,
                          h.originalLength,
                          h.modifiedStart,
                          h.modifiedLength,
                        ),
                        y = 1;
                      ;
                      y++
                    ) {
                      var C = h.originalStart - y,
                        w = h.modifiedStart - y;
                      if (C < f || w < d) break;
                      if (
                        g &&
                        !this.OriginalElementsAreEqual(C, C + h.originalLength)
                      )
                        break;
                      if (
                        v &&
                        !this.ModifiedElementsAreEqual(w, w + h.modifiedLength)
                      )
                        break;
                      var _ = C === f && w === d,
                        k =
                          (_ ? 5 : 0) +
                          this._boundaryScore(
                            C,
                            h.originalLength,
                            w,
                            h.modifiedLength,
                          );
                      k > b && ((b = k), (p = y));
                    }
                    (h.originalStart -= p), (h.modifiedStart -= p);
                    var S = [null];
                    c > 0 &&
                      this.ChangesOverlap(e[c - 1], e[c], S) &&
                      ((e[c - 1] = S[0]), e.splice(c, 1), c++);
                  }
                  if (this._hasStrings)
                    for (var L = 1, N = e.length; L < N; L++) {
                      var E = e[L - 1],
                        A = e[L],
                        x =
                          A.originalStart - E.originalStart - E.originalLength,
                        O = E.originalStart,
                        M = A.originalStart + A.originalLength,
                        R = M - O,
                        T = E.modifiedStart,
                        I = A.modifiedStart + A.modifiedLength,
                        K = I - T;
                      if (x < 5 && R < 20 && K < 20) {
                        var D = this._findBetterContiguousSequence(
                          O,
                          R,
                          T,
                          K,
                          x,
                        );
                        if (D) {
                          var V = P(D, 2),
                            F = V[0],
                            B = V[1];
                          (F === E.originalStart + E.originalLength &&
                            B === E.modifiedStart + E.modifiedLength) ||
                            ((E.originalLength = F - E.originalStart),
                            (E.modifiedLength = B - E.modifiedStart),
                            (A.originalStart = F + x),
                            (A.modifiedStart = B + x),
                            (A.originalLength = M - A.originalStart),
                            (A.modifiedLength = I - A.modifiedStart));
                        }
                      }
                    }
                  return e;
                },
              },
              {
                key: '_findBetterContiguousSequence',
                value: function (e, t, n, r, i) {
                  if (t < i || r < i) return null;
                  for (
                    var a = e + t - i + 1,
                      o = n + r - i + 1,
                      s = 0,
                      u = 0,
                      l = 0,
                      c = e;
                    c < a;
                    c++
                  )
                    for (var h = n; h < o; h++) {
                      var f = this._contiguousSequenceScore(c, h, i);
                      f > 0 && f > s && ((s = f), (u = c), (l = h));
                    }
                  return s > 0 ? [u, l] : null;
                },
              },
              {
                key: '_contiguousSequenceScore',
                value: function (e, t, n) {
                  for (var r = 0, i = 0; i < n; i++) {
                    if (!this.ElementsAreEqual(e + i, t + i)) return 0;
                    r += this._originalStringElements[e + i].length;
                  }
                  return r;
                },
              },
              {
                key: '_OriginalIsBoundary',
                value: function (e) {
                  return (
                    e <= 0 ||
                    e >= this._originalElementsOrHash.length - 1 ||
                    (this._hasStrings &&
                      /^\s*$/.test(this._originalStringElements[e]))
                  );
                },
              },
              {
                key: '_OriginalRegionIsBoundary',
                value: function (e, t) {
                  if (
                    this._OriginalIsBoundary(e) ||
                    this._OriginalIsBoundary(e - 1)
                  )
                    return !0;
                  if (t > 0) {
                    var n = e + t;
                    if (
                      this._OriginalIsBoundary(n - 1) ||
                      this._OriginalIsBoundary(n)
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: '_ModifiedIsBoundary',
                value: function (e) {
                  return (
                    e <= 0 ||
                    e >= this._modifiedElementsOrHash.length - 1 ||
                    (this._hasStrings &&
                      /^\s*$/.test(this._modifiedStringElements[e]))
                  );
                },
              },
              {
                key: '_ModifiedRegionIsBoundary',
                value: function (e, t) {
                  if (
                    this._ModifiedIsBoundary(e) ||
                    this._ModifiedIsBoundary(e - 1)
                  )
                    return !0;
                  if (t > 0) {
                    var n = e + t;
                    if (
                      this._ModifiedIsBoundary(n - 1) ||
                      this._ModifiedIsBoundary(n)
                    )
                      return !0;
                  }
                  return !1;
                },
              },
              {
                key: '_boundaryScore',
                value: function (e, t, n, r) {
                  var i = this._OriginalRegionIsBoundary(e, t) ? 1 : 0,
                    a = this._ModifiedRegionIsBoundary(n, r) ? 1 : 0;
                  return i + a;
                },
              },
              {
                key: 'ConcatenateChanges',
                value: function (e, t) {
                  var n = [];
                  if (0 === e.length || 0 === t.length)
                    return t.length > 0 ? t : e;
                  if (this.ChangesOverlap(e[e.length - 1], t[0], n)) {
                    var r = new Array(e.length + t.length - 1);
                    return (
                      ot.Copy(e, 0, r, 0, e.length - 1),
                      (r[e.length - 1] = n[0]),
                      ot.Copy(t, 1, r, e.length, t.length - 1),
                      r
                    );
                  }
                  var i = new Array(e.length + t.length);
                  return (
                    ot.Copy(e, 0, i, 0, e.length),
                    ot.Copy(t, 0, i, e.length, t.length),
                    i
                  );
                },
              },
              {
                key: 'ChangesOverlap',
                value: function (e, t, n) {
                  if (
                    (at.Assert(
                      e.originalStart <= t.originalStart,
                      'Left change is not less than or equal to right change',
                    ),
                    at.Assert(
                      e.modifiedStart <= t.modifiedStart,
                      'Left change is not less than or equal to right change',
                    ),
                    e.originalStart + e.originalLength >= t.originalStart ||
                      e.modifiedStart + e.modifiedLength >= t.modifiedStart)
                  ) {
                    var r = e.originalStart,
                      i = e.originalLength,
                      a = e.modifiedStart,
                      o = e.modifiedLength;
                    return (
                      e.originalStart + e.originalLength >= t.originalStart &&
                        (i =
                          t.originalStart + t.originalLength - e.originalStart),
                      e.modifiedStart + e.modifiedLength >= t.modifiedStart &&
                        (o =
                          t.modifiedStart + t.modifiedLength - e.modifiedStart),
                      (n[0] = new Qe(r, i, a, o)),
                      !0
                    );
                  }
                  return (n[0] = null), !1;
                },
              },
              {
                key: 'ClipDiagonalBound',
                value: function (e, t, n, r) {
                  if (e >= 0 && e < r) return e;
                  var i = n,
                    a = r - n - 1,
                    o = t % 2 === 0;
                  if (e < 0) {
                    var s = i % 2 === 0;
                    return o === s ? 0 : 1;
                  }
                  var u = a % 2 === 0;
                  return o === u ? r - 1 : r - 2;
                },
              },
            ],
            [
              {
                key: '_isStringArray',
                value: function (e) {
                  return e.length > 0 && 'string' === typeof e[0];
                },
              },
              {
                key: '_getElements',
                value: function (t) {
                  var n = t.getElements();
                  if (e._isStringArray(n)) {
                    for (
                      var r = new Int32Array(n.length), i = 0, a = n.length;
                      i < a;
                      i++
                    )
                      r[i] = Ze(n[i], 0);
                    return [n, r, !0];
                  }
                  return n instanceof Int32Array
                    ? [[], n, !1]
                    : [[], new Int32Array(n), !1];
                },
              },
              {
                key: '_getStrictElement',
                value: function (e, t) {
                  return 'function' === typeof e.getStrictElement
                    ? e.getStrictElement(t)
                    : null;
                },
              },
            ],
          ),
          e
        );
      })(),
      lt = n('wxcJ'),
      ct = 65,
      ht = 97,
      ft = 90,
      dt = 122,
      mt = 46,
      gt = 47,
      vt = 92,
      pt = 58,
      bt = 63,
      yt = (function (e) {
        s(n, e);
        var t = d(n);
        function n(e, r, i) {
          var a, o;
          v(this, n),
            'string' === typeof r && 0 === r.indexOf('not ')
              ? ((o = 'must not be'), (r = r.replace(/^not /, '')))
              : (o = 'must be');
          var s = -1 !== e.indexOf('.') ? 'property' : 'argument',
            u = 'The "'
              .concat(e, '" ')
              .concat(s, ' ')
              .concat(o, ' of type ')
              .concat(r);
          return (
            (u += '. Received type '.concat(typeof i)),
            (a = t.call(this, u)),
            (a.code = 'ERR_INVALID_ARG_TYPE'),
            a
          );
        }
        return g(n);
      })(y(Error));
    function Ct(e, t) {
      if ('string' !== typeof e) throw new yt(t, 'string', e);
    }
    function wt(e) {
      return e === gt || e === vt;
    }
    function _t(e) {
      return e === gt;
    }
    function kt(e) {
      return (e >= ct && e <= ft) || (e >= ht && e <= dt);
    }
    function St(e, t, n, r) {
      for (var i = '', a = 0, o = -1, s = 0, u = 0, l = 0; l <= e.length; ++l) {
        if (l < e.length) u = e.charCodeAt(l);
        else {
          if (r(u)) break;
          u = gt;
        }
        if (r(u)) {
          if (o === l - 1 || 1 === s);
          else if (2 === s) {
            if (
              i.length < 2 ||
              2 !== a ||
              i.charCodeAt(i.length - 1) !== mt ||
              i.charCodeAt(i.length - 2) !== mt
            ) {
              if (i.length > 2) {
                var c = i.lastIndexOf(n);
                -1 === c
                  ? ((i = ''), (a = 0))
                  : ((i = i.slice(0, c)),
                    (a = i.length - 1 - i.lastIndexOf(n))),
                  (o = l),
                  (s = 0);
                continue;
              }
              if (0 !== i.length) {
                (i = ''), (a = 0), (o = l), (s = 0);
                continue;
              }
            }
            t && ((i += i.length > 0 ? ''.concat(n, '..') : '..'), (a = 2));
          } else
            i.length > 0
              ? (i += ''.concat(n).concat(e.slice(o + 1, l)))
              : (i = e.slice(o + 1, l)),
              (a = l - o - 1);
          (o = l), (s = 0);
        } else u === mt && -1 !== s ? ++s : (s = -1);
      }
      return i;
    }
    function Lt(e, t) {
      if (null === t || 'object' !== typeof t)
        throw new yt('pathObject', 'Object', t);
      var n = t.dir || t.root,
        r = t.base || ''.concat(t.name || '').concat(t.ext || '');
      return n
        ? n === t.root
          ? ''.concat(n).concat(r)
          : ''.concat(n).concat(e).concat(r)
        : r;
    }
    var Nt = {
        resolve: function () {
          for (
            var e = '', t = '', n = !1, r = arguments.length - 1;
            r >= -1;
            r--
          ) {
            var i = void 0;
            if (r >= 0) {
              if (
                ((i = r < 0 || arguments.length <= r ? void 0 : arguments[r]),
                Ct(i, 'path'),
                0 === i.length)
              )
                continue;
            } else
              0 === e.length
                ? (i = lt['a']())
                : ((i = lt['b']['='.concat(e)] || lt['a']()),
                  (void 0 === i ||
                    (i.slice(0, 2).toLowerCase() !== e.toLowerCase() &&
                      i.charCodeAt(2) === vt)) &&
                    (i = ''.concat(e, '\\')));
            var a = i.length,
              o = 0,
              s = '',
              u = !1,
              l = i.charCodeAt(0);
            if (1 === a) wt(l) && ((o = 1), (u = !0));
            else if (wt(l))
              if (((u = !0), wt(i.charCodeAt(1)))) {
                var c = 2,
                  h = c;
                while (c < a && !wt(i.charCodeAt(c))) c++;
                if (c < a && c !== h) {
                  var f = i.slice(h, c);
                  h = c;
                  while (c < a && wt(i.charCodeAt(c))) c++;
                  if (c < a && c !== h) {
                    h = c;
                    while (c < a && !wt(i.charCodeAt(c))) c++;
                    (c !== a && c === h) ||
                      ((s = '\\\\'.concat(f, '\\').concat(i.slice(h, c))),
                      (o = c));
                  }
                }
              } else o = 1;
            else
              kt(l) &&
                i.charCodeAt(1) === pt &&
                ((s = i.slice(0, 2)),
                (o = 2),
                a > 2 && wt(i.charCodeAt(2)) && ((u = !0), (o = 3)));
            if (s.length > 0)
              if (e.length > 0) {
                if (s.toLowerCase() !== e.toLowerCase()) continue;
              } else e = s;
            if (n) {
              if (e.length > 0) break;
            } else if (
              ((t = ''.concat(i.slice(o), '\\').concat(t)),
              (n = u),
              u && e.length > 0)
            )
              break;
          }
          return (
            (t = St(t, !n, '\\', wt)),
            n ? ''.concat(e, '\\').concat(t) : ''.concat(e).concat(t) || '.'
          );
        },
        normalize: function (e) {
          Ct(e, 'path');
          var t = e.length;
          if (0 === t) return '.';
          var n,
            r = 0,
            i = !1,
            a = e.charCodeAt(0);
          if (1 === t) return _t(a) ? '\\' : e;
          if (wt(a))
            if (((i = !0), wt(e.charCodeAt(1)))) {
              var o = 2,
                s = o;
              while (o < t && !wt(e.charCodeAt(o))) o++;
              if (o < t && o !== s) {
                var u = e.slice(s, o);
                s = o;
                while (o < t && wt(e.charCodeAt(o))) o++;
                if (o < t && o !== s) {
                  s = o;
                  while (o < t && !wt(e.charCodeAt(o))) o++;
                  if (o === t)
                    return '\\\\'.concat(u, '\\').concat(e.slice(s), '\\');
                  o !== s &&
                    ((n = '\\\\'.concat(u, '\\').concat(e.slice(s, o))),
                    (r = o));
                }
              }
            } else r = 1;
          else
            kt(a) &&
              e.charCodeAt(1) === pt &&
              ((n = e.slice(0, 2)),
              (r = 2),
              t > 2 && wt(e.charCodeAt(2)) && ((i = !0), (r = 3)));
          var l = r < t ? St(e.slice(r), !i, '\\', wt) : '';
          return (
            0 !== l.length || i || (l = '.'),
            l.length > 0 && wt(e.charCodeAt(t - 1)) && (l += '\\'),
            void 0 === n
              ? i
                ? '\\'.concat(l)
                : l
              : i
              ? ''.concat(n, '\\').concat(l)
              : ''.concat(n).concat(l)
          );
        },
        isAbsolute: function (e) {
          Ct(e, 'path');
          var t = e.length;
          if (0 === t) return !1;
          var n = e.charCodeAt(0);
          return (
            wt(n) ||
            (t > 2 && kt(n) && e.charCodeAt(1) === pt && wt(e.charCodeAt(2)))
          );
        },
        join: function () {
          if (0 === arguments.length) return '.';
          for (var e, t, n = 0; n < arguments.length; ++n) {
            var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            Ct(r, 'path'),
              r.length > 0 &&
                (void 0 === e ? (e = t = r) : (e += '\\'.concat(r)));
          }
          if (void 0 === e) return '.';
          var i = !0,
            a = 0;
          if ('string' === typeof t && wt(t.charCodeAt(0))) {
            ++a;
            var o = t.length;
            o > 1 &&
              wt(t.charCodeAt(1)) &&
              (++a, o > 2 && (wt(t.charCodeAt(2)) ? ++a : (i = !1)));
          }
          if (i) {
            while (a < e.length && wt(e.charCodeAt(a))) a++;
            a >= 2 && (e = '\\'.concat(e.slice(a)));
          }
          return Nt.normalize(e);
        },
        relative: function (e, t) {
          if ((Ct(e, 'from'), Ct(t, 'to'), e === t)) return '';
          var n = Nt.resolve(e),
            r = Nt.resolve(t);
          if (n === r) return '';
          if (((e = n.toLowerCase()), (t = r.toLowerCase()), e === t))
            return '';
          var i = 0;
          while (i < e.length && e.charCodeAt(i) === vt) i++;
          var a = e.length;
          while (a - 1 > i && e.charCodeAt(a - 1) === vt) a--;
          var o = a - i,
            s = 0;
          while (s < t.length && t.charCodeAt(s) === vt) s++;
          var u = t.length;
          while (u - 1 > s && t.charCodeAt(u - 1) === vt) u--;
          for (var l = u - s, c = o < l ? o : l, h = -1, f = 0; f < c; f++) {
            var d = e.charCodeAt(i + f);
            if (d !== t.charCodeAt(s + f)) break;
            d === vt && (h = f);
          }
          if (f !== c) {
            if (-1 === h) return r;
          } else {
            if (l > c) {
              if (t.charCodeAt(s + f) === vt) return r.slice(s + f + 1);
              if (2 === f) return r.slice(s + f);
            }
            o > c &&
              (e.charCodeAt(i + f) === vt ? (h = f) : 2 === f && (h = 3)),
              -1 === h && (h = 0);
          }
          var m = '';
          for (f = i + h + 1; f <= a; ++f)
            (f !== a && e.charCodeAt(f) !== vt) ||
              (m += 0 === m.length ? '..' : '\\..');
          return (
            (s += h),
            m.length > 0
              ? ''.concat(m).concat(r.slice(s, u))
              : (r.charCodeAt(s) === vt && ++s, r.slice(s, u))
          );
        },
        toNamespacedPath: function (e) {
          if ('string' !== typeof e) return e;
          if (0 === e.length) return '';
          var t = Nt.resolve(e);
          if (t.length <= 2) return e;
          if (t.charCodeAt(0) === vt) {
            if (t.charCodeAt(1) === vt) {
              var n = t.charCodeAt(2);
              if (n !== bt && n !== mt)
                return '\\\\?\\UNC\\'.concat(t.slice(2));
            }
          } else if (
            kt(t.charCodeAt(0)) &&
            t.charCodeAt(1) === pt &&
            t.charCodeAt(2) === vt
          )
            return '\\\\?\\'.concat(t);
          return e;
        },
        dirname: function (e) {
          Ct(e, 'path');
          var t = e.length;
          if (0 === t) return '.';
          var n = -1,
            r = 0,
            i = e.charCodeAt(0);
          if (1 === t) return wt(i) ? e : '.';
          if (wt(i)) {
            if (((n = r = 1), wt(e.charCodeAt(1)))) {
              var a = 2,
                o = a;
              while (a < t && !wt(e.charCodeAt(a))) a++;
              if (a < t && a !== o) {
                o = a;
                while (a < t && wt(e.charCodeAt(a))) a++;
                if (a < t && a !== o) {
                  o = a;
                  while (a < t && !wt(e.charCodeAt(a))) a++;
                  if (a === t) return e;
                  a !== o && (n = r = a + 1);
                }
              }
            }
          } else
            kt(i) &&
              e.charCodeAt(1) === pt &&
              ((n = t > 2 && wt(e.charCodeAt(2)) ? 3 : 2), (r = n));
          for (var s = -1, u = !0, l = t - 1; l >= r; --l)
            if (wt(e.charCodeAt(l))) {
              if (!u) {
                s = l;
                break;
              }
            } else u = !1;
          if (-1 === s) {
            if (-1 === n) return '.';
            s = n;
          }
          return e.slice(0, s);
        },
        basename: function (e, t) {
          void 0 !== t && Ct(t, 'ext'), Ct(e, 'path');
          var n,
            r = 0,
            i = -1,
            a = !0;
          if (
            (e.length >= 2 &&
              kt(e.charCodeAt(0)) &&
              e.charCodeAt(1) === pt &&
              (r = 2),
            void 0 !== t && t.length > 0 && t.length <= e.length)
          ) {
            if (t === e) return '';
            var o = t.length - 1,
              s = -1;
            for (n = e.length - 1; n >= r; --n) {
              var u = e.charCodeAt(n);
              if (wt(u)) {
                if (!a) {
                  r = n + 1;
                  break;
                }
              } else
                -1 === s && ((a = !1), (s = n + 1)),
                  o >= 0 &&
                    (u === t.charCodeAt(o)
                      ? -1 === --o && (i = n)
                      : ((o = -1), (i = s)));
            }
            return (
              r === i ? (i = s) : -1 === i && (i = e.length), e.slice(r, i)
            );
          }
          for (n = e.length - 1; n >= r; --n)
            if (wt(e.charCodeAt(n))) {
              if (!a) {
                r = n + 1;
                break;
              }
            } else -1 === i && ((a = !1), (i = n + 1));
          return -1 === i ? '' : e.slice(r, i);
        },
        extname: function (e) {
          Ct(e, 'path');
          var t = 0,
            n = -1,
            r = 0,
            i = -1,
            a = !0,
            o = 0;
          e.length >= 2 &&
            e.charCodeAt(1) === pt &&
            kt(e.charCodeAt(0)) &&
            (t = r = 2);
          for (var s = e.length - 1; s >= t; --s) {
            var u = e.charCodeAt(s);
            if (wt(u)) {
              if (!a) {
                r = s + 1;
                break;
              }
            } else
              -1 === i && ((a = !1), (i = s + 1)),
                u === mt
                  ? -1 === n
                    ? (n = s)
                    : 1 !== o && (o = 1)
                  : -1 !== n && (o = -1);
          }
          return -1 === n ||
            -1 === i ||
            0 === o ||
            (1 === o && n === i - 1 && n === r + 1)
            ? ''
            : e.slice(n, i);
        },
        format: Lt.bind(null, '\\'),
        parse: function (e) {
          Ct(e, 'path');
          var t = { root: '', dir: '', base: '', ext: '', name: '' };
          if (0 === e.length) return t;
          var n = e.length,
            r = 0,
            i = e.charCodeAt(0);
          if (1 === n)
            return wt(i)
              ? ((t.root = t.dir = e), t)
              : ((t.base = t.name = e), t);
          if (wt(i)) {
            if (((r = 1), wt(e.charCodeAt(1)))) {
              var a = 2,
                o = a;
              while (a < n && !wt(e.charCodeAt(a))) a++;
              if (a < n && a !== o) {
                o = a;
                while (a < n && wt(e.charCodeAt(a))) a++;
                if (a < n && a !== o) {
                  o = a;
                  while (a < n && !wt(e.charCodeAt(a))) a++;
                  a === n ? (r = a) : a !== o && (r = a + 1);
                }
              }
            }
          } else if (kt(i) && e.charCodeAt(1) === pt) {
            if (n <= 2) return (t.root = t.dir = e), t;
            if (((r = 2), wt(e.charCodeAt(2)))) {
              if (3 === n) return (t.root = t.dir = e), t;
              r = 3;
            }
          }
          r > 0 && (t.root = e.slice(0, r));
          for (
            var s = -1, u = r, l = -1, c = !0, h = e.length - 1, f = 0;
            h >= r;
            --h
          )
            if (((i = e.charCodeAt(h)), wt(i))) {
              if (!c) {
                u = h + 1;
                break;
              }
            } else
              -1 === l && ((c = !1), (l = h + 1)),
                i === mt
                  ? -1 === s
                    ? (s = h)
                    : 1 !== f && (f = 1)
                  : -1 !== s && (f = -1);
          return (
            -1 !== l &&
              (-1 === s || 0 === f || (1 === f && s === l - 1 && s === u + 1)
                ? (t.base = t.name = e.slice(u, l))
                : ((t.name = e.slice(u, s)),
                  (t.base = e.slice(u, l)),
                  (t.ext = e.slice(s, l)))),
            (t.dir = u > 0 && u !== r ? e.slice(0, u - 1) : t.root),
            t
          );
        },
        sep: '\\',
        delimiter: ';',
        win32: null,
        posix: null,
      },
      Et = {
        resolve: function () {
          for (
            var e = '', t = !1, n = arguments.length - 1;
            n >= -1 && !t;
            n--
          ) {
            var r =
              n >= 0
                ? n < 0 || arguments.length <= n
                  ? void 0
                  : arguments[n]
                : lt['a']();
            Ct(r, 'path'),
              0 !== r.length &&
                ((e = ''.concat(r, '/').concat(e)),
                (t = r.charCodeAt(0) === gt));
          }
          return (
            (e = St(e, !t, '/', _t)), t ? '/'.concat(e) : e.length > 0 ? e : '.'
          );
        },
        normalize: function (e) {
          if ((Ct(e, 'path'), 0 === e.length)) return '.';
          var t = e.charCodeAt(0) === gt,
            n = e.charCodeAt(e.length - 1) === gt;
          return (
            (e = St(e, !t, '/', _t)),
            0 === e.length
              ? t
                ? '/'
                : n
                ? './'
                : '.'
              : (n && (e += '/'), t ? '/'.concat(e) : e)
          );
        },
        isAbsolute: function (e) {
          return Ct(e, 'path'), e.length > 0 && e.charCodeAt(0) === gt;
        },
        join: function () {
          if (0 === arguments.length) return '.';
          for (var e, t = 0; t < arguments.length; ++t) {
            var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            Ct(n, 'path'),
              n.length > 0 && (void 0 === e ? (e = n) : (e += '/'.concat(n)));
          }
          return void 0 === e ? '.' : Et.normalize(e);
        },
        relative: function (e, t) {
          if ((Ct(e, 'from'), Ct(t, 'to'), e === t)) return '';
          if (((e = Et.resolve(e)), (t = Et.resolve(t)), e === t)) return '';
          for (
            var n = 1,
              r = e.length,
              i = r - n,
              a = 1,
              o = t.length - a,
              s = i < o ? i : o,
              u = -1,
              l = 0;
            l < s;
            l++
          ) {
            var c = e.charCodeAt(n + l);
            if (c !== t.charCodeAt(a + l)) break;
            c === gt && (u = l);
          }
          if (l === s)
            if (o > s) {
              if (t.charCodeAt(a + l) === gt) return t.slice(a + l + 1);
              if (0 === l) return t.slice(a + l);
            } else
              i > s &&
                (e.charCodeAt(n + l) === gt ? (u = l) : 0 === l && (u = 0));
          var h = '';
          for (l = n + u + 1; l <= r; ++l)
            (l !== r && e.charCodeAt(l) !== gt) ||
              (h += 0 === h.length ? '..' : '/..');
          return ''.concat(h).concat(t.slice(a + u));
        },
        toNamespacedPath: function (e) {
          return e;
        },
        dirname: function (e) {
          if ((Ct(e, 'path'), 0 === e.length)) return '.';
          for (
            var t = e.charCodeAt(0) === gt, n = -1, r = !0, i = e.length - 1;
            i >= 1;
            --i
          )
            if (e.charCodeAt(i) === gt) {
              if (!r) {
                n = i;
                break;
              }
            } else r = !1;
          return -1 === n
            ? t
              ? '/'
              : '.'
            : t && 1 === n
            ? '//'
            : e.slice(0, n);
        },
        basename: function (e, t) {
          void 0 !== t && Ct(t, 'ext'), Ct(e, 'path');
          var n,
            r = 0,
            i = -1,
            a = !0;
          if (void 0 !== t && t.length > 0 && t.length <= e.length) {
            if (t === e) return '';
            var o = t.length - 1,
              s = -1;
            for (n = e.length - 1; n >= 0; --n) {
              var u = e.charCodeAt(n);
              if (u === gt) {
                if (!a) {
                  r = n + 1;
                  break;
                }
              } else
                -1 === s && ((a = !1), (s = n + 1)),
                  o >= 0 &&
                    (u === t.charCodeAt(o)
                      ? -1 === --o && (i = n)
                      : ((o = -1), (i = s)));
            }
            return (
              r === i ? (i = s) : -1 === i && (i = e.length), e.slice(r, i)
            );
          }
          for (n = e.length - 1; n >= 0; --n)
            if (e.charCodeAt(n) === gt) {
              if (!a) {
                r = n + 1;
                break;
              }
            } else -1 === i && ((a = !1), (i = n + 1));
          return -1 === i ? '' : e.slice(r, i);
        },
        extname: function (e) {
          Ct(e, 'path');
          for (
            var t = -1, n = 0, r = -1, i = !0, a = 0, o = e.length - 1;
            o >= 0;
            --o
          ) {
            var s = e.charCodeAt(o);
            if (s !== gt)
              -1 === r && ((i = !1), (r = o + 1)),
                s === mt
                  ? -1 === t
                    ? (t = o)
                    : 1 !== a && (a = 1)
                  : -1 !== t && (a = -1);
            else if (!i) {
              n = o + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === r ||
            0 === a ||
            (1 === a && t === r - 1 && t === n + 1)
            ? ''
            : e.slice(t, r);
        },
        format: Lt.bind(null, '/'),
        parse: function (e) {
          Ct(e, 'path');
          var t = { root: '', dir: '', base: '', ext: '', name: '' };
          if (0 === e.length) return t;
          var n,
            r = e.charCodeAt(0) === gt;
          r ? ((t.root = '/'), (n = 1)) : (n = 0);
          for (
            var i = -1, a = 0, o = -1, s = !0, u = e.length - 1, l = 0;
            u >= n;
            --u
          ) {
            var c = e.charCodeAt(u);
            if (c !== gt)
              -1 === o && ((s = !1), (o = u + 1)),
                c === mt
                  ? -1 === i
                    ? (i = u)
                    : 1 !== l && (l = 1)
                  : -1 !== i && (l = -1);
            else if (!s) {
              a = u + 1;
              break;
            }
          }
          if (-1 !== o) {
            var h = 0 === a && r ? 1 : a;
            -1 === i || 0 === l || (1 === l && i === o - 1 && i === a + 1)
              ? (t.base = t.name = e.slice(h, o))
              : ((t.name = e.slice(h, i)),
                (t.base = e.slice(h, o)),
                (t.ext = e.slice(i, o)));
          }
          return a > 0 ? (t.dir = e.slice(0, a - 1)) : r && (t.dir = '/'), t;
        },
        sep: '/',
        delimiter: ':',
        win32: null,
        posix: null,
      };
    (Et.win32 = Nt.win32 = Nt), (Et.posix = Nt.posix = Et);
    'win32' === lt['c'] ? Nt.normalize : Et.normalize,
      'win32' === lt['c'] ? Nt.resolve : Et.resolve,
      'win32' === lt['c'] ? Nt.relative : Et.relative,
      'win32' === lt['c'] ? Nt.dirname : Et.dirname,
      'win32' === lt['c'] ? Nt.basename : Et.basename,
      'win32' === lt['c'] ? Nt.extname : Et.extname,
      'win32' === lt['c'] ? Nt.sep : Et.sep;
    var At,
      xt = /^\w[\w\d+.-]*$/,
      Ot = /^\//,
      Mt = /^\/\//;
    function Rt(e, t) {
      if (!e.scheme && t)
        throw new Error(
          '[UriError]: Scheme is missing: {scheme: "", authority: "'
            .concat(e.authority, '", path: "')
            .concat(e.path, '", query: "')
            .concat(e.query, '", fragment: "')
            .concat(e.fragment, '"}'),
        );
      if (e.scheme && !xt.test(e.scheme))
        throw new Error('[UriError]: Scheme contains illegal characters.');
      if (e.path)
        if (e.authority) {
          if (!Ot.test(e.path))
            throw new Error(
              '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
            );
        } else if (Mt.test(e.path))
          throw new Error(
            '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
          );
    }
    function Pt(e, t) {
      return e || t ? e : 'file';
    }
    function Tt(e, t) {
      switch (e) {
        case 'https':
        case 'http':
        case 'file':
          t ? t[0] !== Kt && (t = Kt + t) : (t = Kt);
          break;
      }
      return t;
    }
    var It = '',
      Kt = '/',
      Dt = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
      Vt = (function () {
        function e(t, n, r, i, a) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
          v(this, e),
            'object' === typeof t
              ? ((this.scheme = t.scheme || It),
                (this.authority = t.authority || It),
                (this.path = t.path || It),
                (this.query = t.query || It),
                (this.fragment = t.fragment || It))
              : ((this.scheme = Pt(t, o)),
                (this.authority = n || It),
                (this.path = Tt(this.scheme, r || It)),
                (this.query = i || It),
                (this.fragment = a || It),
                Rt(this, o));
        }
        return (
          g(
            e,
            [
              {
                key: 'fsPath',
                get: function () {
                  return Wt(this, !1);
                },
              },
              {
                key: 'with',
                value: function (e) {
                  if (!e) return this;
                  var t = e.scheme,
                    n = e.authority,
                    r = e.path,
                    i = e.query,
                    a = e.fragment;
                  return (
                    void 0 === t ? (t = this.scheme) : null === t && (t = It),
                    void 0 === n
                      ? (n = this.authority)
                      : null === n && (n = It),
                    void 0 === r ? (r = this.path) : null === r && (r = It),
                    void 0 === i ? (i = this.query) : null === i && (i = It),
                    void 0 === a ? (a = this.fragment) : null === a && (a = It),
                    t === this.scheme &&
                    n === this.authority &&
                    r === this.path &&
                    i === this.query &&
                    a === this.fragment
                      ? this
                      : new Bt(t, n, r, i, a)
                  );
                },
              },
              {
                key: 'toString',
                value: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  return jt(this, e);
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this;
                },
              },
            ],
            [
              {
                key: 'isUri',
                value: function (t) {
                  return (
                    t instanceof e ||
                    (!!t &&
                      'string' === typeof t.authority &&
                      'string' === typeof t.fragment &&
                      'string' === typeof t.path &&
                      'string' === typeof t.query &&
                      'string' === typeof t.scheme &&
                      'string' === typeof t.fsPath &&
                      'function' === typeof t['with'] &&
                      'function' === typeof t.toString)
                  );
                },
              },
              {
                key: 'parse',
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = Dt.exec(e);
                  return n
                    ? new Bt(
                        n[2] || It,
                        Yt(n[4] || It),
                        Yt(n[5] || It),
                        Yt(n[7] || It),
                        Yt(n[9] || It),
                        t,
                      )
                    : new Bt(It, It, It, It, It);
                },
              },
              {
                key: 'file',
                value: function (e) {
                  var t = It;
                  if (
                    (ae['d'] && (e = e.replace(/\\/g, Kt)),
                    e[0] === Kt && e[1] === Kt)
                  ) {
                    var n = e.indexOf(Kt, 2);
                    -1 === n
                      ? ((t = e.substring(2)), (e = Kt))
                      : ((t = e.substring(2, n)), (e = e.substring(n) || Kt));
                  }
                  return new Bt('file', t, e, It, It);
                },
              },
              {
                key: 'from',
                value: function (e) {
                  var t = new Bt(
                    e.scheme,
                    e.authority,
                    e.path,
                    e.query,
                    e.fragment,
                  );
                  return Rt(t, !0), t;
                },
              },
              {
                key: 'joinPath',
                value: function (t) {
                  if (!t.path)
                    throw new Error(
                      '[UriError]: cannot call joinPath on URI without path',
                    );
                  for (
                    var n,
                      r,
                      i,
                      a = arguments.length,
                      o = new Array(a > 1 ? a - 1 : 0),
                      s = 1;
                    s < a;
                    s++
                  )
                    o[s - 1] = arguments[s];
                  ae['d'] && 'file' === t.scheme
                    ? (n = e.file(
                        (r = Nt).join.apply(r, [Wt(t, !0)].concat(o)),
                      ).path)
                    : (n = (i = Et).join.apply(i, [t.path].concat(o)));
                  return t['with']({ path: n });
                },
              },
              {
                key: 'revive',
                value: function (t) {
                  if (t) {
                    if (t instanceof e) return t;
                    var n = new Bt(t);
                    return (
                      (n._formatted = t.external),
                      (n._fsPath = t._sep === Ft ? t.fsPath : null),
                      n
                    );
                  }
                  return t;
                },
              },
            ],
          ),
          e
        );
      })(),
      Ft = ae['d'] ? 1 : void 0,
      Bt = (function (e) {
        s(n, e);
        var t = d(n);
        function n() {
          var e;
          return (
            v(this, n),
            (e = t.apply(this, arguments)),
            (e._formatted = null),
            (e._fsPath = null),
            e
          );
        }
        return (
          g(n, [
            {
              key: 'fsPath',
              get: function () {
                return (
                  this._fsPath || (this._fsPath = Wt(this, !1)), this._fsPath
                );
              },
            },
            {
              key: 'toString',
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return e
                  ? jt(this, !0)
                  : (this._formatted || (this._formatted = jt(this, !1)),
                    this._formatted);
              },
            },
            {
              key: 'toJSON',
              value: function () {
                var e = { $mid: 1 };
                return (
                  this._fsPath && ((e.fsPath = this._fsPath), (e._sep = Ft)),
                  this._formatted && (e.external = this._formatted),
                  this.path && (e.path = this.path),
                  this.scheme && (e.scheme = this.scheme),
                  this.authority && (e.authority = this.authority),
                  this.query && (e.query = this.query),
                  this.fragment && (e.fragment = this.fragment),
                  e
                );
              },
            },
          ]),
          n
        );
      })(Vt),
      Ut =
        ((At = {}),
        F(At, 58, '%3A'),
        F(At, 47, '%2F'),
        F(At, 63, '%3F'),
        F(At, 35, '%23'),
        F(At, 91, '%5B'),
        F(At, 93, '%5D'),
        F(At, 64, '%40'),
        F(At, 33, '%21'),
        F(At, 36, '%24'),
        F(At, 38, '%26'),
        F(At, 39, '%27'),
        F(At, 40, '%28'),
        F(At, 41, '%29'),
        F(At, 42, '%2A'),
        F(At, 43, '%2B'),
        F(At, 44, '%2C'),
        F(At, 59, '%3B'),
        F(At, 61, '%3D'),
        F(At, 32, '%20'),
        At);
    function qt(e, t) {
      for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
        var a = e.charCodeAt(i);
        if (
          (a >= 97 && a <= 122) ||
          (a >= 65 && a <= 90) ||
          (a >= 48 && a <= 57) ||
          45 === a ||
          46 === a ||
          95 === a ||
          126 === a ||
          (t && 47 === a)
        )
          -1 !== r && ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
            void 0 !== n && (n += e.charAt(i));
        else {
          void 0 === n && (n = e.substr(0, i));
          var o = Ut[a];
          void 0 !== o
            ? (-1 !== r &&
                ((n += encodeURIComponent(e.substring(r, i))), (r = -1)),
              (n += o))
            : -1 === r && (r = i);
        }
      }
      return (
        -1 !== r && (n += encodeURIComponent(e.substring(r))),
        void 0 !== n ? n : e
      );
    }
    function Ht(e) {
      for (var t = void 0, n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        35 === r || 63 === r
          ? (void 0 === t && (t = e.substr(0, n)), (t += Ut[r]))
          : void 0 !== t && (t += e[n]);
      }
      return void 0 !== t ? t : e;
    }
    function Wt(e, t) {
      var n;
      return (
        (n =
          e.authority && e.path.length > 1 && 'file' === e.scheme
            ? '//'.concat(e.authority).concat(e.path)
            : 47 === e.path.charCodeAt(0) &&
              ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
                (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
              58 === e.path.charCodeAt(2)
            ? t
              ? e.path.substr(1)
              : e.path[1].toLowerCase() + e.path.substr(2)
            : e.path),
        ae['d'] && (n = n.replace(/\//g, '\\')),
        n
      );
    }
    function jt(e, t) {
      var n = t ? Ht : qt,
        r = '',
        i = e.scheme,
        a = e.authority,
        o = e.path,
        s = e.query,
        u = e.fragment;
      if (
        (i && ((r += i), (r += ':')),
        (a || 'file' === i) && ((r += Kt), (r += Kt)),
        a)
      ) {
        var l = a.indexOf('@');
        if (-1 !== l) {
          var c = a.substr(0, l);
          (a = a.substr(l + 1)),
            (l = c.indexOf(':')),
            -1 === l
              ? (r += n(c, !1))
              : ((r += n(c.substr(0, l), !1)),
                (r += ':'),
                (r += n(c.substr(l + 1), !1))),
            (r += '@');
        }
        (a = a.toLowerCase()),
          (l = a.indexOf(':')),
          -1 === l
            ? (r += n(a, !1))
            : ((r += n(a.substr(0, l), !1)), (r += a.substr(l)));
      }
      if (o) {
        if (o.length >= 3 && 47 === o.charCodeAt(0) && 58 === o.charCodeAt(2)) {
          var h = o.charCodeAt(1);
          h >= 65 &&
            h <= 90 &&
            (o = '/'
              .concat(String.fromCharCode(h + 32), ':')
              .concat(o.substr(3)));
        } else if (o.length >= 2 && 58 === o.charCodeAt(1)) {
          var f = o.charCodeAt(0);
          f >= 65 &&
            f <= 90 &&
            (o = ''
              .concat(String.fromCharCode(f + 32), ':')
              .concat(o.substr(2)));
        }
        r += n(o, !0);
      }
      return (
        s && ((r += '?'), (r += n(s, !1))),
        u && ((r += '#'), (r += t ? u : qt(u, !1))),
        r
      );
    }
    function zt(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e.length > 3 ? e.substr(0, 3) + zt(e.substr(3)) : e;
      }
    }
    var Gt = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function Yt(e) {
      return e.match(Gt)
        ? e.replace(Gt, function (e) {
            return zt(e);
          })
        : e;
    }
    var Qt = (function () {
        function e(t, n) {
          v(this, e), (this.lineNumber = t), (this.column = n);
        }
        return (
          g(
            e,
            [
              {
                key: 'with',
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.lineNumber,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.column;
                  return t === this.lineNumber && n === this.column
                    ? this
                    : new e(t, n);
                },
              },
              {
                key: 'delta',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                  return this['with'](this.lineNumber + e, this.column + t);
                },
              },
              {
                key: 'equals',
                value: function (t) {
                  return e.equals(this, t);
                },
              },
              {
                key: 'isBefore',
                value: function (t) {
                  return e.isBefore(this, t);
                },
              },
              {
                key: 'isBeforeOrEqual',
                value: function (t) {
                  return e.isBeforeOrEqual(this, t);
                },
              },
              {
                key: 'clone',
                value: function () {
                  return new e(this.lineNumber, this.column);
                },
              },
              {
                key: 'toString',
                value: function () {
                  return '(' + this.lineNumber + ',' + this.column + ')';
                },
              },
            ],
            [
              {
                key: 'equals',
                value: function (e, t) {
                  return (
                    (!e && !t) ||
                    (!!e &&
                      !!t &&
                      e.lineNumber === t.lineNumber &&
                      e.column === t.column)
                  );
                },
              },
              {
                key: 'isBefore',
                value: function (e, t) {
                  return (
                    e.lineNumber < t.lineNumber ||
                    (!(t.lineNumber < e.lineNumber) && e.column < t.column)
                  );
                },
              },
              {
                key: 'isBeforeOrEqual',
                value: function (e, t) {
                  return (
                    e.lineNumber < t.lineNumber ||
                    (!(t.lineNumber < e.lineNumber) && e.column <= t.column)
                  );
                },
              },
              {
                key: 'compare',
                value: function (e, t) {
                  var n = 0 | e.lineNumber,
                    r = 0 | t.lineNumber;
                  if (n === r) {
                    var i = 0 | e.column,
                      a = 0 | t.column;
                    return i - a;
                  }
                  return n - r;
                },
              },
              {
                key: 'lift',
                value: function (t) {
                  return new e(t.lineNumber, t.column);
                },
              },
              {
                key: 'isIPosition',
                value: function (e) {
                  return (
                    e &&
                    'number' === typeof e.lineNumber &&
                    'number' === typeof e.column
                  );
                },
              },
            ],
          ),
          e
        );
      })(),
      Jt = (function () {
        function e(t, n, r, i) {
          v(this, e),
            t > r || (t === r && n > i)
              ? ((this.startLineNumber = r),
                (this.startColumn = i),
                (this.endLineNumber = t),
                (this.endColumn = n))
              : ((this.startLineNumber = t),
                (this.startColumn = n),
                (this.endLineNumber = r),
                (this.endColumn = i));
        }
        return (
          g(
            e,
            [
              {
                key: 'isEmpty',
                value: function () {
                  return e.isEmpty(this);
                },
              },
              {
                key: 'containsPosition',
                value: function (t) {
                  return e.containsPosition(this, t);
                },
              },
              {
                key: 'containsRange',
                value: function (t) {
                  return e.containsRange(this, t);
                },
              },
              {
                key: 'strictContainsRange',
                value: function (t) {
                  return e.strictContainsRange(this, t);
                },
              },
              {
                key: 'plusRange',
                value: function (t) {
                  return e.plusRange(this, t);
                },
              },
              {
                key: 'intersectRanges',
                value: function (t) {
                  return e.intersectRanges(this, t);
                },
              },
              {
                key: 'equalsRange',
                value: function (t) {
                  return e.equalsRange(this, t);
                },
              },
              {
                key: 'getEndPosition',
                value: function () {
                  return e.getEndPosition(this);
                },
              },
              {
                key: 'getStartPosition',
                value: function () {
                  return e.getStartPosition(this);
                },
              },
              {
                key: 'toString',
                value: function () {
                  return (
                    '[' +
                    this.startLineNumber +
                    ',' +
                    this.startColumn +
                    ' -> ' +
                    this.endLineNumber +
                    ',' +
                    this.endColumn +
                    ']'
                  );
                },
              },
              {
                key: 'setEndPosition',
                value: function (t, n) {
                  return new e(this.startLineNumber, this.startColumn, t, n);
                },
              },
              {
                key: 'setStartPosition',
                value: function (t, n) {
                  return new e(t, n, this.endLineNumber, this.endColumn);
                },
              },
              {
                key: 'collapseToStart',
                value: function () {
                  return e.collapseToStart(this);
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return this;
                },
              },
            ],
            [
              {
                key: 'isEmpty',
                value: function (e) {
                  return (
                    e.startLineNumber === e.endLineNumber &&
                    e.startColumn === e.endColumn
                  );
                },
              },
              {
                key: 'containsPosition',
                value: function (e, t) {
                  return (
                    !(
                      t.lineNumber < e.startLineNumber ||
                      t.lineNumber > e.endLineNumber
                    ) &&
                    !(
                      t.lineNumber === e.startLineNumber &&
                      t.column < e.startColumn
                    ) &&
                    !(
                      t.lineNumber === e.endLineNumber && t.column > e.endColumn
                    )
                  );
                },
              },
              {
                key: 'strictContainsPosition',
                value: function (e, t) {
                  return (
                    !(
                      t.lineNumber < e.startLineNumber ||
                      t.lineNumber > e.endLineNumber
                    ) &&
                    !(
                      t.lineNumber === e.startLineNumber &&
                      t.column <= e.startColumn
                    ) &&
                    !(
                      t.lineNumber === e.endLineNumber &&
                      t.column >= e.endColumn
                    )
                  );
                },
              },
              {
                key: 'containsRange',
                value: function (e, t) {
                  return (
                    !(
                      t.startLineNumber < e.startLineNumber ||
                      t.endLineNumber < e.startLineNumber
                    ) &&
                    !(
                      t.startLineNumber > e.endLineNumber ||
                      t.endLineNumber > e.endLineNumber
                    ) &&
                    !(
                      t.startLineNumber === e.startLineNumber &&
                      t.startColumn < e.startColumn
                    ) &&
                    !(
                      t.endLineNumber === e.endLineNumber &&
                      t.endColumn > e.endColumn
                    )
                  );
                },
              },
              {
                key: 'strictContainsRange',
                value: function (e, t) {
                  return (
                    !(
                      t.startLineNumber < e.startLineNumber ||
                      t.endLineNumber < e.startLineNumber
                    ) &&
                    !(
                      t.startLineNumber > e.endLineNumber ||
                      t.endLineNumber > e.endLineNumber
                    ) &&
                    !(
                      t.startLineNumber === e.startLineNumber &&
                      t.startColumn <= e.startColumn
                    ) &&
                    !(
                      t.endLineNumber === e.endLineNumber &&
                      t.endColumn >= e.endColumn
                    )
                  );
                },
              },
              {
                key: 'plusRange',
                value: function (t, n) {
                  var r, i, a, o;
                  return (
                    n.startLineNumber < t.startLineNumber
                      ? ((r = n.startLineNumber), (i = n.startColumn))
                      : n.startLineNumber === t.startLineNumber
                      ? ((r = n.startLineNumber),
                        (i = Math.min(n.startColumn, t.startColumn)))
                      : ((r = t.startLineNumber), (i = t.startColumn)),
                    n.endLineNumber > t.endLineNumber
                      ? ((a = n.endLineNumber), (o = n.endColumn))
                      : n.endLineNumber === t.endLineNumber
                      ? ((a = n.endLineNumber),
                        (o = Math.max(n.endColumn, t.endColumn)))
                      : ((a = t.endLineNumber), (o = t.endColumn)),
                    new e(r, i, a, o)
                  );
                },
              },
              {
                key: 'intersectRanges',
                value: function (t, n) {
                  var r = t.startLineNumber,
                    i = t.startColumn,
                    a = t.endLineNumber,
                    o = t.endColumn,
                    s = n.startLineNumber,
                    u = n.startColumn,
                    l = n.endLineNumber,
                    c = n.endColumn;
                  return (
                    r < s
                      ? ((r = s), (i = u))
                      : r === s && (i = Math.max(i, u)),
                    a > l
                      ? ((a = l), (o = c))
                      : a === l && (o = Math.min(o, c)),
                    r > a || (r === a && i > o) ? null : new e(r, i, a, o)
                  );
                },
              },
              {
                key: 'equalsRange',
                value: function (e, t) {
                  return (
                    !!e &&
                    !!t &&
                    e.startLineNumber === t.startLineNumber &&
                    e.startColumn === t.startColumn &&
                    e.endLineNumber === t.endLineNumber &&
                    e.endColumn === t.endColumn
                  );
                },
              },
              {
                key: 'getEndPosition',
                value: function (e) {
                  return new Qt(e.endLineNumber, e.endColumn);
                },
              },
              {
                key: 'getStartPosition',
                value: function (e) {
                  return new Qt(e.startLineNumber, e.startColumn);
                },
              },
              {
                key: 'collapseToStart',
                value: function (t) {
                  return new e(
                    t.startLineNumber,
                    t.startColumn,
                    t.startLineNumber,
                    t.startColumn,
                  );
                },
              },
              {
                key: 'fromPositions',
                value: function (t) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : t;
                  return new e(t.lineNumber, t.column, n.lineNumber, n.column);
                },
              },
              {
                key: 'lift',
                value: function (t) {
                  return t
                    ? new e(
                        t.startLineNumber,
                        t.startColumn,
                        t.endLineNumber,
                        t.endColumn,
                      )
                    : null;
                },
              },
              {
                key: 'isIRange',
                value: function (e) {
                  return (
                    e &&
                    'number' === typeof e.startLineNumber &&
                    'number' === typeof e.startColumn &&
                    'number' === typeof e.endLineNumber &&
                    'number' === typeof e.endColumn
                  );
                },
              },
              {
                key: 'areIntersectingOrTouching',
                value: function (e, t) {
                  return (
                    !(
                      e.endLineNumber < t.startLineNumber ||
                      (e.endLineNumber === t.startLineNumber &&
                        e.endColumn < t.startColumn)
                    ) &&
                    !(
                      t.endLineNumber < e.startLineNumber ||
                      (t.endLineNumber === e.startLineNumber &&
                        t.endColumn < e.startColumn)
                    )
                  );
                },
              },
              {
                key: 'areIntersecting',
                value: function (e, t) {
                  return (
                    !(
                      e.endLineNumber < t.startLineNumber ||
                      (e.endLineNumber === t.startLineNumber &&
                        e.endColumn <= t.startColumn)
                    ) &&
                    !(
                      t.endLineNumber < e.startLineNumber ||
                      (t.endLineNumber === e.startLineNumber &&
                        t.endColumn <= e.startColumn)
                    )
                  );
                },
              },
              {
                key: 'compareRangesUsingStarts',
                value: function (e, t) {
                  if (e && t) {
                    var n = 0 | e.startLineNumber,
                      r = 0 | t.startLineNumber;
                    if (n === r) {
                      var i = 0 | e.startColumn,
                        a = 0 | t.startColumn;
                      if (i === a) {
                        var o = 0 | e.endLineNumber,
                          s = 0 | t.endLineNumber;
                        if (o === s) {
                          var u = 0 | e.endColumn,
                            l = 0 | t.endColumn;
                          return u - l;
                        }
                        return o - s;
                      }
                      return i - a;
                    }
                    return n - r;
                  }
                  var c = e ? 1 : 0,
                    h = t ? 1 : 0;
                  return c - h;
                },
              },
              {
                key: 'compareRangesUsingEnds',
                value: function (e, t) {
                  return e.endLineNumber === t.endLineNumber
                    ? e.endColumn === t.endColumn
                      ? e.startLineNumber === t.startLineNumber
                        ? e.startColumn - t.startColumn
                        : e.startLineNumber - t.startLineNumber
                      : e.endColumn - t.endColumn
                    : e.endLineNumber - t.endLineNumber;
                },
              },
              {
                key: 'spansMultipleLines',
                value: function (e) {
                  return e.endLineNumber > e.startLineNumber;
                },
              },
            ],
          ),
          e
        );
      })(),
      Zt = 3;
    function Xt(e, t, n, r) {
      var i = new ut(e, t, n);
      return i.ComputeDiff(r);
    }
    var $t = (function () {
        function e(t) {
          v(this, e);
          for (var n = [], r = [], i = 0, a = t.length; i < a; i++)
            (n[i] = on(t[i], 1)), (r[i] = sn(t[i], 1));
          (this.lines = t), (this._startColumns = n), (this._endColumns = r);
        }
        return (
          g(e, [
            {
              key: 'getElements',
              value: function () {
                for (var e = [], t = 0, n = this.lines.length; t < n; t++)
                  e[t] = this.lines[t].substring(
                    this._startColumns[t] - 1,
                    this._endColumns[t] - 1,
                  );
                return e;
              },
            },
            {
              key: 'getStrictElement',
              value: function (e) {
                return this.lines[e];
              },
            },
            {
              key: 'getStartLineNumber',
              value: function (e) {
                return e + 1;
              },
            },
            {
              key: 'getEndLineNumber',
              value: function (e) {
                return e + 1;
              },
            },
            {
              key: 'createCharSequence',
              value: function (e, t, n) {
                for (var r = [], i = [], a = [], o = 0, s = t; s <= n; s++)
                  for (
                    var u = this.lines[s],
                      l = e ? this._startColumns[s] : 1,
                      c = e ? this._endColumns[s] : u.length + 1,
                      h = l;
                    h < c;
                    h++
                  )
                    (r[o] = u.charCodeAt(h - 1)),
                      (i[o] = s + 1),
                      (a[o] = h),
                      o++;
                return new en(r, i, a);
              },
            },
          ]),
          e
        );
      })(),
      en = (function () {
        function e(t, n, r) {
          v(this, e),
            (this._charCodes = t),
            (this._lineNumbers = n),
            (this._columns = r);
        }
        return (
          g(e, [
            {
              key: 'getElements',
              value: function () {
                return this._charCodes;
              },
            },
            {
              key: 'getStartLineNumber',
              value: function (e) {
                return this._lineNumbers[e];
              },
            },
            {
              key: 'getStartColumn',
              value: function (e) {
                return this._columns[e];
              },
            },
            {
              key: 'getEndLineNumber',
              value: function (e) {
                return this._lineNumbers[e];
              },
            },
            {
              key: 'getEndColumn',
              value: function (e) {
                return this._columns[e] + 1;
              },
            },
          ]),
          e
        );
      })(),
      tn = (function () {
        function e(t, n, r, i, a, o, s, u) {
          v(this, e),
            (this.originalStartLineNumber = t),
            (this.originalStartColumn = n),
            (this.originalEndLineNumber = r),
            (this.originalEndColumn = i),
            (this.modifiedStartLineNumber = a),
            (this.modifiedStartColumn = o),
            (this.modifiedEndLineNumber = s),
            (this.modifiedEndColumn = u);
        }
        return (
          g(e, null, [
            {
              key: 'createFromDiffChange',
              value: function (t, n, r) {
                var i, a, o, s, u, l, c, h;
                return (
                  0 === t.originalLength
                    ? ((i = 0), (a = 0), (o = 0), (s = 0))
                    : ((i = n.getStartLineNumber(t.originalStart)),
                      (a = n.getStartColumn(t.originalStart)),
                      (o = n.getEndLineNumber(
                        t.originalStart + t.originalLength - 1,
                      )),
                      (s = n.getEndColumn(
                        t.originalStart + t.originalLength - 1,
                      ))),
                  0 === t.modifiedLength
                    ? ((u = 0), (l = 0), (c = 0), (h = 0))
                    : ((u = r.getStartLineNumber(t.modifiedStart)),
                      (l = r.getStartColumn(t.modifiedStart)),
                      (c = r.getEndLineNumber(
                        t.modifiedStart + t.modifiedLength - 1,
                      )),
                      (h = r.getEndColumn(
                        t.modifiedStart + t.modifiedLength - 1,
                      ))),
                  new e(i, a, o, s, u, l, c, h)
                );
              },
            },
          ]),
          e
        );
      })();
    function nn(e) {
      if (e.length <= 1) return e;
      for (var t = [e[0]], n = t[0], r = 1, i = e.length; r < i; r++) {
        var a = e[r],
          o = a.originalStart - (n.originalStart + n.originalLength),
          s = a.modifiedStart - (n.modifiedStart + n.modifiedLength),
          u = Math.min(o, s);
        u < Zt
          ? ((n.originalLength =
              a.originalStart + a.originalLength - n.originalStart),
            (n.modifiedLength =
              a.modifiedStart + a.modifiedLength - n.modifiedStart))
          : (t.push(a), (n = a));
      }
      return t;
    }
    var rn = (function () {
        function e(t, n, r, i, a) {
          v(this, e),
            (this.originalStartLineNumber = t),
            (this.originalEndLineNumber = n),
            (this.modifiedStartLineNumber = r),
            (this.modifiedEndLineNumber = i),
            (this.charChanges = a);
        }
        return (
          g(e, null, [
            {
              key: 'createFromDiffResult',
              value: function (t, n, r, i, a, o, s) {
                var u,
                  l,
                  c,
                  h,
                  f = void 0;
                if (
                  (0 === n.originalLength
                    ? ((u = r.getStartLineNumber(n.originalStart) - 1), (l = 0))
                    : ((u = r.getStartLineNumber(n.originalStart)),
                      (l = r.getEndLineNumber(
                        n.originalStart + n.originalLength - 1,
                      ))),
                  0 === n.modifiedLength
                    ? ((c = i.getStartLineNumber(n.modifiedStart) - 1), (h = 0))
                    : ((c = i.getStartLineNumber(n.modifiedStart)),
                      (h = i.getEndLineNumber(
                        n.modifiedStart + n.modifiedLength - 1,
                      ))),
                  o &&
                    n.originalLength > 0 &&
                    n.originalLength < 20 &&
                    n.modifiedLength > 0 &&
                    n.modifiedLength < 20 &&
                    a())
                ) {
                  var d = r.createCharSequence(
                      t,
                      n.originalStart,
                      n.originalStart + n.originalLength - 1,
                    ),
                    m = i.createCharSequence(
                      t,
                      n.modifiedStart,
                      n.modifiedStart + n.modifiedLength - 1,
                    ),
                    g = Xt(d, m, a, !0).changes;
                  s && (g = nn(g)), (f = []);
                  for (var v = 0, p = g.length; v < p; v++)
                    f.push(tn.createFromDiffChange(g[v], d, m));
                }
                return new e(u, l, c, h, f);
              },
            },
          ]),
          e
        );
      })(),
      an = (function () {
        function e(t, n, r) {
          v(this, e),
            (this.shouldComputeCharChanges = r.shouldComputeCharChanges),
            (this.shouldPostProcessCharChanges =
              r.shouldPostProcessCharChanges),
            (this.shouldIgnoreTrimWhitespace = r.shouldIgnoreTrimWhitespace),
            (this.shouldMakePrettyDiff = r.shouldMakePrettyDiff),
            (this.originalLines = t),
            (this.modifiedLines = n),
            (this.original = new $t(t)),
            (this.modified = new $t(n)),
            (this.continueLineDiff = un(r.maxComputationTime)),
            (this.continueCharDiff = un(
              0 === r.maxComputationTime
                ? 0
                : Math.min(r.maxComputationTime, 5e3),
            ));
        }
        return (
          g(e, [
            {
              key: 'computeDiff',
              value: function () {
                if (
                  1 === this.original.lines.length &&
                  0 === this.original.lines[0].length
                )
                  return 1 === this.modified.lines.length &&
                    0 === this.modified.lines[0].length
                    ? { quitEarly: !1, changes: [] }
                    : {
                        quitEarly: !1,
                        changes: [
                          {
                            originalStartLineNumber: 1,
                            originalEndLineNumber: 1,
                            modifiedStartLineNumber: 1,
                            modifiedEndLineNumber: this.modified.lines.length,
                            charChanges: [
                              {
                                modifiedEndColumn: 0,
                                modifiedEndLineNumber: 0,
                                modifiedStartColumn: 0,
                                modifiedStartLineNumber: 0,
                                originalEndColumn: 0,
                                originalEndLineNumber: 0,
                                originalStartColumn: 0,
                                originalStartLineNumber: 0,
                              },
                            ],
                          },
                        ],
                      };
                if (
                  1 === this.modified.lines.length &&
                  0 === this.modified.lines[0].length
                )
                  return {
                    quitEarly: !1,
                    changes: [
                      {
                        originalStartLineNumber: 1,
                        originalEndLineNumber: this.original.lines.length,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: 1,
                        charChanges: [
                          {
                            modifiedEndColumn: 0,
                            modifiedEndLineNumber: 0,
                            modifiedStartColumn: 0,
                            modifiedStartLineNumber: 0,
                            originalEndColumn: 0,
                            originalEndLineNumber: 0,
                            originalStartColumn: 0,
                            originalStartLineNumber: 0,
                          },
                        ],
                      },
                    ],
                  };
                var e = Xt(
                    this.original,
                    this.modified,
                    this.continueLineDiff,
                    this.shouldMakePrettyDiff,
                  ),
                  t = e.changes,
                  n = e.quitEarly;
                if (this.shouldIgnoreTrimWhitespace) {
                  for (var r = [], i = 0, a = t.length; i < a; i++)
                    r.push(
                      rn.createFromDiffResult(
                        this.shouldIgnoreTrimWhitespace,
                        t[i],
                        this.original,
                        this.modified,
                        this.continueCharDiff,
                        this.shouldComputeCharChanges,
                        this.shouldPostProcessCharChanges,
                      ),
                    );
                  return { quitEarly: n, changes: r };
                }
                for (
                  var o = [], s = 0, u = 0, l = -1, c = t.length;
                  l < c;
                  l++
                ) {
                  var h = l + 1 < c ? t[l + 1] : null,
                    f = h ? h.originalStart : this.originalLines.length,
                    d = h ? h.modifiedStart : this.modifiedLines.length;
                  while (s < f && u < d) {
                    var m = this.originalLines[s],
                      g = this.modifiedLines[u];
                    if (m !== g) {
                      var v = on(m, 1),
                        p = on(g, 1);
                      while (v > 1 && p > 1) {
                        var b = m.charCodeAt(v - 2),
                          y = g.charCodeAt(p - 2);
                        if (b !== y) break;
                        v--, p--;
                      }
                      (v > 1 || p > 1) &&
                        this._pushTrimWhitespaceCharChange(
                          o,
                          s + 1,
                          1,
                          v,
                          u + 1,
                          1,
                          p,
                        );
                      var C = sn(m, 1),
                        w = sn(g, 1),
                        _ = m.length + 1,
                        k = g.length + 1;
                      while (C < _ && w < k) {
                        var S = m.charCodeAt(C - 1),
                          L = m.charCodeAt(w - 1);
                        if (S !== L) break;
                        C++, w++;
                      }
                      (C < _ || w < k) &&
                        this._pushTrimWhitespaceCharChange(
                          o,
                          s + 1,
                          C,
                          _,
                          u + 1,
                          w,
                          k,
                        );
                    }
                    s++, u++;
                  }
                  h &&
                    (o.push(
                      rn.createFromDiffResult(
                        this.shouldIgnoreTrimWhitespace,
                        h,
                        this.original,
                        this.modified,
                        this.continueCharDiff,
                        this.shouldComputeCharChanges,
                        this.shouldPostProcessCharChanges,
                      ),
                    ),
                    (s += h.originalLength),
                    (u += h.modifiedLength));
                }
                return { quitEarly: n, changes: o };
              },
            },
            {
              key: '_pushTrimWhitespaceCharChange',
              value: function (e, t, n, r, i, a, o) {
                if (!this._mergeTrimWhitespaceCharChange(e, t, n, r, i, a, o)) {
                  var s = void 0;
                  this.shouldComputeCharChanges &&
                    (s = [new tn(t, n, t, r, i, a, i, o)]),
                    e.push(new rn(t, t, i, i, s));
                }
              },
            },
            {
              key: '_mergeTrimWhitespaceCharChange',
              value: function (e, t, n, r, i, a, o) {
                var s = e.length;
                if (0 === s) return !1;
                var u = e[s - 1];
                return (
                  0 !== u.originalEndLineNumber &&
                  0 !== u.modifiedEndLineNumber &&
                  u.originalEndLineNumber + 1 === t &&
                  u.modifiedEndLineNumber + 1 === i &&
                  ((u.originalEndLineNumber = t),
                  (u.modifiedEndLineNumber = i),
                  this.shouldComputeCharChanges &&
                    u.charChanges &&
                    u.charChanges.push(new tn(t, n, t, r, i, a, i, o)),
                  !0)
                );
              },
            },
          ]),
          e
        );
      })();
    function on(e, t) {
      var n = Le(e);
      return -1 === n ? t : n + 1;
    }
    function sn(e, t) {
      var n = Ne(e);
      return -1 === n ? t : n + 2;
    }
    function un(e) {
      if (0 === e)
        return function () {
          return !0;
        };
      var t = Date.now();
      return function () {
        return Date.now() - t < e;
      };
    }
    function ln(e) {
      return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
    }
    function cn(e) {
      return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
    }
    var hn = (function () {
        function e(t) {
          v(this, e),
            (this.values = t),
            (this.prefixSum = new Uint32Array(t.length)),
            (this.prefixSumValidIndex = new Int32Array(1)),
            (this.prefixSumValidIndex[0] = -1);
        }
        return (
          g(e, [
            {
              key: 'insertValues',
              value: function (e, t) {
                e = cn(e);
                var n = this.values,
                  r = this.prefixSum,
                  i = t.length;
                return (
                  0 !== i &&
                  ((this.values = new Uint32Array(n.length + i)),
                  this.values.set(n.subarray(0, e), 0),
                  this.values.set(n.subarray(e), e + i),
                  this.values.set(t, e),
                  e - 1 < this.prefixSumValidIndex[0] &&
                    (this.prefixSumValidIndex[0] = e - 1),
                  (this.prefixSum = new Uint32Array(this.values.length)),
                  this.prefixSumValidIndex[0] >= 0 &&
                    this.prefixSum.set(
                      r.subarray(0, this.prefixSumValidIndex[0] + 1),
                    ),
                  !0)
                );
              },
            },
            {
              key: 'setValue',
              value: function (e, t) {
                return (
                  (e = cn(e)),
                  (t = cn(t)),
                  this.values[e] !== t &&
                    ((this.values[e] = t),
                    e - 1 < this.prefixSumValidIndex[0] &&
                      (this.prefixSumValidIndex[0] = e - 1),
                    !0)
                );
              },
            },
            {
              key: 'removeValues',
              value: function (e, t) {
                (e = cn(e)), (t = cn(t));
                var n = this.values,
                  r = this.prefixSum;
                if (e >= n.length) return !1;
                var i = n.length - e;
                return (
                  t >= i && (t = i),
                  0 !== t &&
                    ((this.values = new Uint32Array(n.length - t)),
                    this.values.set(n.subarray(0, e), 0),
                    this.values.set(n.subarray(e + t), e),
                    (this.prefixSum = new Uint32Array(this.values.length)),
                    e - 1 < this.prefixSumValidIndex[0] &&
                      (this.prefixSumValidIndex[0] = e - 1),
                    this.prefixSumValidIndex[0] >= 0 &&
                      this.prefixSum.set(
                        r.subarray(0, this.prefixSumValidIndex[0] + 1),
                      ),
                    !0)
                );
              },
            },
            {
              key: 'getTotalSum',
              value: function () {
                return 0 === this.values.length
                  ? 0
                  : this._getPrefixSum(this.values.length - 1);
              },
            },
            {
              key: 'getPrefixSum',
              value: function (e) {
                return e < 0 ? 0 : ((e = cn(e)), this._getPrefixSum(e));
              },
            },
            {
              key: '_getPrefixSum',
              value: function (e) {
                if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
                var t = this.prefixSumValidIndex[0] + 1;
                0 === t && ((this.prefixSum[0] = this.values[0]), t++),
                  e >= this.values.length && (e = this.values.length - 1);
                for (var n = t; n <= e; n++)
                  this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
                return (
                  (this.prefixSumValidIndex[0] = Math.max(
                    this.prefixSumValidIndex[0],
                    e,
                  )),
                  this.prefixSum[e]
                );
              },
            },
            {
              key: 'getIndexOf',
              value: function (e) {
                (e = Math.floor(e)), this.getTotalSum();
                var t = 0,
                  n = this.values.length - 1,
                  r = 0,
                  i = 0,
                  a = 0;
                while (t <= n)
                  if (
                    ((r = (t + (n - t) / 2) | 0),
                    (i = this.prefixSum[r]),
                    (a = i - this.values[r]),
                    e < a)
                  )
                    n = r - 1;
                  else {
                    if (!(e >= i)) break;
                    t = r + 1;
                  }
                return new fn(r, e - a);
              },
            },
          ]),
          e
        );
      })(),
      fn = g(function e(t, n) {
        v(this, e),
          (this.index = t),
          (this.remainder = n),
          (this._prefixSumIndexOfResultBrand = void 0),
          (this.index = t),
          (this.remainder = n);
      }),
      dn = (function () {
        function e(t, n, r, i) {
          v(this, e),
            (this._uri = t),
            (this._lines = n),
            (this._eol = r),
            (this._versionId = i),
            (this._lineStarts = null),
            (this._cachedTextValue = null);
        }
        return (
          g(e, [
            {
              key: 'dispose',
              value: function () {
                this._lines.length = 0;
              },
            },
            {
              key: 'version',
              get: function () {
                return this._versionId;
              },
            },
            {
              key: 'getText',
              value: function () {
                return (
                  null === this._cachedTextValue &&
                    (this._cachedTextValue = this._lines.join(this._eol)),
                  this._cachedTextValue
                );
              },
            },
            {
              key: 'onEvents',
              value: function (e) {
                e.eol &&
                  e.eol !== this._eol &&
                  ((this._eol = e.eol), (this._lineStarts = null));
                var t,
                  n = e.changes,
                  r = a(n);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var i = t.value;
                    this._acceptDeleteRange(i.range),
                      this._acceptInsertText(
                        new Qt(i.range.startLineNumber, i.range.startColumn),
                        i.text,
                      );
                  }
                } catch (o) {
                  r.e(o);
                } finally {
                  r.f();
                }
                (this._versionId = e.versionId), (this._cachedTextValue = null);
              },
            },
            {
              key: '_ensureLineStarts',
              value: function () {
                if (!this._lineStarts) {
                  for (
                    var e = this._eol.length,
                      t = this._lines.length,
                      n = new Uint32Array(t),
                      r = 0;
                    r < t;
                    r++
                  )
                    n[r] = this._lines[r].length + e;
                  this._lineStarts = new hn(n);
                }
              },
            },
            {
              key: '_setLineText',
              value: function (e, t) {
                (this._lines[e] = t),
                  this._lineStarts &&
                    this._lineStarts.setValue(
                      e,
                      this._lines[e].length + this._eol.length,
                    );
              },
            },
            {
              key: '_acceptDeleteRange',
              value: function (e) {
                if (e.startLineNumber !== e.endLineNumber)
                  this._setLineText(
                    e.startLineNumber - 1,
                    this._lines[e.startLineNumber - 1].substring(
                      0,
                      e.startColumn - 1,
                    ) +
                      this._lines[e.endLineNumber - 1].substring(
                        e.endColumn - 1,
                      ),
                  ),
                    this._lines.splice(
                      e.startLineNumber,
                      e.endLineNumber - e.startLineNumber,
                    ),
                    this._lineStarts &&
                      this._lineStarts.removeValues(
                        e.startLineNumber,
                        e.endLineNumber - e.startLineNumber,
                      );
                else {
                  if (e.startColumn === e.endColumn) return;
                  this._setLineText(
                    e.startLineNumber - 1,
                    this._lines[e.startLineNumber - 1].substring(
                      0,
                      e.startColumn - 1,
                    ) +
                      this._lines[e.startLineNumber - 1].substring(
                        e.endColumn - 1,
                      ),
                  );
                }
              },
            },
            {
              key: '_acceptInsertText',
              value: function (e, t) {
                if (0 !== t.length) {
                  var n = Se(t);
                  if (1 !== n.length) {
                    (n[n.length - 1] += this._lines[e.lineNumber - 1].substring(
                      e.column - 1,
                    )),
                      this._setLineText(
                        e.lineNumber - 1,
                        this._lines[e.lineNumber - 1].substring(
                          0,
                          e.column - 1,
                        ) + n[0],
                      );
                    for (
                      var r = new Uint32Array(n.length - 1), i = 1;
                      i < n.length;
                      i++
                    )
                      this._lines.splice(e.lineNumber + i - 1, 0, n[i]),
                        (r[i - 1] = n[i].length + this._eol.length);
                    this._lineStarts &&
                      this._lineStarts.insertValues(e.lineNumber, r);
                  } else
                    this._setLineText(
                      e.lineNumber - 1,
                      this._lines[e.lineNumber - 1].substring(0, e.column - 1) +
                        n[0] +
                        this._lines[e.lineNumber - 1].substring(e.column - 1),
                    );
                }
              },
            },
          ]),
          e
        );
      })(),
      mn = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
    function gn() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
        n = '(-?\\d*\\.\\d\\w*)|([^',
        r = a(mn);
      try {
        for (r.s(); !(e = r.n()).done; ) {
          var i = e.value;
          t.indexOf(i) >= 0 || (n += '\\' + i);
        }
      } catch (o) {
        r.e(o);
      } finally {
        r.f();
      }
      return (n += '\\s]+)'), new RegExp(n, 'g');
    }
    var vn = gn();
    function pn(e) {
      var t = vn;
      if (e && e instanceof RegExp)
        if (e.global) t = e;
        else {
          var n = 'g';
          e.ignoreCase && (n += 'i'),
            e.multiline && (n += 'm'),
            e.unicode && (n += 'u'),
            (t = new RegExp(e.source, n));
        }
      return (t.lastIndex = 0), t;
    }
    var bn = { maxLen: 1e3, windowSize: 15, timeBudget: 150 };
    function yn(e, t, n, r) {
      var i =
        arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bn;
      if (n.length > i.maxLen) {
        var a = e - i.maxLen / 2;
        return (
          a < 0 ? (a = 0) : (r += a),
          (n = n.substring(a, e + i.maxLen / 2)),
          yn(e, t, n, r, i)
        );
      }
      for (var o = Date.now(), s = e - 1 - r, u = -1, l = null, c = 1; ; c++) {
        if (Date.now() - o >= i.timeBudget) break;
        var h = s - i.windowSize * c;
        t.lastIndex = Math.max(0, h);
        var f = Cn(t, n, s, u);
        if (!f && l) break;
        if (((l = f), h <= 0)) break;
        u = h;
      }
      if (l) {
        var d = {
          word: l[0],
          startColumn: r + 1 + l.index,
          endColumn: r + 1 + l.index + l[0].length,
        };
        return (t.lastIndex = 0), d;
      }
      return null;
    }
    function Cn(e, t, n, r) {
      var i;
      while ((i = e.exec(t))) {
        var a = i.index || 0;
        if (a <= n && e.lastIndex >= n) return i;
        if (r > 0 && a > r) return null;
      }
      return null;
    }
    var wn = (function () {
        function e(t) {
          v(this, e);
          var n = ln(t);
          (this._defaultValue = n),
            (this._asciiMap = e._createAsciiMap(n)),
            (this._map = new Map());
        }
        return (
          g(
            e,
            [
              {
                key: 'set',
                value: function (e, t) {
                  var n = ln(t);
                  e >= 0 && e < 256
                    ? (this._asciiMap[e] = n)
                    : this._map.set(e, n);
                },
              },
              {
                key: 'get',
                value: function (e) {
                  return e >= 0 && e < 256
                    ? this._asciiMap[e]
                    : this._map.get(e) || this._defaultValue;
                },
              },
            ],
            [
              {
                key: '_createAsciiMap',
                value: function (e) {
                  for (var t = new Uint8Array(256), n = 0; n < 256; n++)
                    t[n] = e;
                  return t;
                },
              },
            ],
          ),
          e
        );
      })(),
      _n = (function () {
        function e(t, n, r) {
          v(this, e);
          for (var i = new Uint8Array(t * n), a = 0, o = t * n; a < o; a++)
            i[a] = r;
          (this._data = i), (this.rows = t), (this.cols = n);
        }
        return (
          g(e, [
            {
              key: 'get',
              value: function (e, t) {
                return this._data[e * this.cols + t];
              },
            },
            {
              key: 'set',
              value: function (e, t, n) {
                this._data[e * this.cols + t] = n;
              },
            },
          ]),
          e
        );
      })(),
      kn = (function () {
        function e(t) {
          v(this, e);
          for (var n = 0, r = 0, i = 0, a = t.length; i < a; i++) {
            var o = P(t[i], 3),
              s = o[0],
              u = o[1],
              l = o[2];
            u > n && (n = u), s > r && (r = s), l > r && (r = l);
          }
          n++, r++;
          for (var c = new _n(r, n, 0), h = 0, f = t.length; h < f; h++) {
            var d = P(t[h], 3),
              m = d[0],
              g = d[1],
              p = d[2];
            c.set(m, g, p);
          }
          (this._states = c), (this._maxCharCode = n);
        }
        return (
          g(e, [
            {
              key: 'nextState',
              value: function (e, t) {
                return t < 0 || t >= this._maxCharCode
                  ? 0
                  : this._states.get(e, t);
              },
            },
          ]),
          e
        );
      })(),
      Sn = null;
    function Ln() {
      return (
        null === Sn &&
          (Sn = new kn([
            [1, 104, 2],
            [1, 72, 2],
            [1, 102, 6],
            [1, 70, 6],
            [2, 116, 3],
            [2, 84, 3],
            [3, 116, 4],
            [3, 84, 4],
            [4, 112, 5],
            [4, 80, 5],
            [5, 115, 9],
            [5, 83, 9],
            [5, 58, 10],
            [6, 105, 7],
            [6, 73, 7],
            [7, 108, 8],
            [7, 76, 8],
            [8, 101, 9],
            [8, 69, 9],
            [9, 58, 10],
            [10, 47, 11],
            [11, 47, 12],
          ])),
        Sn
      );
    }
    var Nn = null;
    function En() {
      if (null === Nn) {
        Nn = new wn(0);
        for (
          var e =
              ' \t<>\'"\u3001\u3002\uff61\uff64\uff0c\uff0e\uff1a\uff1b\u2018\u3008\u300c\u300e\u3014\uff08\uff3b\uff5b\uff62\uff63\uff5d\uff3d\uff09\u3015\u300f\u300d\u3009\u2019\uff40\uff5e\u2026',
            t = 0;
          t < e.length;
          t++
        )
          Nn.set(e.charCodeAt(t), 1);
        for (var n = '.,;', r = 0; r < n.length; r++)
          Nn.set(n.charCodeAt(r), 2);
      }
      return Nn;
    }
    var An = (function () {
      function e() {
        v(this, e);
      }
      return (
        g(e, null, [
          {
            key: '_createLink',
            value: function (e, t, n, r, i) {
              var a = i - 1;
              do {
                var o = t.charCodeAt(a),
                  s = e.get(o);
                if (2 !== s) break;
                a--;
              } while (a > r);
              if (r > 0) {
                var u = t.charCodeAt(r - 1),
                  l = t.charCodeAt(a);
                ((40 === u && 41 === l) ||
                  (91 === u && 93 === l) ||
                  (123 === u && 125 === l)) &&
                  a--;
              }
              return {
                range: {
                  startLineNumber: n,
                  startColumn: r + 1,
                  endLineNumber: n,
                  endColumn: a + 2,
                },
                url: t.substring(r, a + 1),
              };
            },
          },
          {
            key: 'computeLinks',
            value: function (t) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : Ln(),
                  r = En(),
                  i = [],
                  a = 1,
                  o = t.getLineCount();
                a <= o;
                a++
              ) {
                var s = t.getLineContent(a),
                  u = s.length,
                  l = 0,
                  c = 0,
                  h = 0,
                  f = 1,
                  d = !1,
                  m = !1,
                  g = !1,
                  v = !1;
                while (l < u) {
                  var p = !1,
                    b = s.charCodeAt(l);
                  if (13 === f) {
                    var y = void 0;
                    switch (b) {
                      case 40:
                        (d = !0), (y = 0);
                        break;
                      case 41:
                        y = d ? 0 : 1;
                        break;
                      case 91:
                        (g = !0), (m = !0), (y = 0);
                        break;
                      case 93:
                        (g = !1), (y = m ? 0 : 1);
                        break;
                      case 123:
                        (v = !0), (y = 0);
                        break;
                      case 125:
                        y = v ? 0 : 1;
                        break;
                      case 39:
                        y = 34 === h || 96 === h ? 0 : 1;
                        break;
                      case 34:
                        y = 39 === h || 96 === h ? 0 : 1;
                        break;
                      case 96:
                        y = 39 === h || 34 === h ? 0 : 1;
                        break;
                      case 42:
                        y = 42 === h ? 1 : 0;
                        break;
                      case 124:
                        y = 124 === h ? 1 : 0;
                        break;
                      case 32:
                        y = g ? 0 : 1;
                        break;
                      default:
                        y = r.get(b);
                    }
                    1 === y && (i.push(e._createLink(r, s, a, c, l)), (p = !0));
                  } else if (12 === f) {
                    var C = void 0;
                    91 === b ? ((m = !0), (C = 0)) : (C = r.get(b)),
                      1 === C ? (p = !0) : (f = 13);
                  } else (f = n.nextState(f, b)), 0 === f && (p = !0);
                  p &&
                    ((f = 1),
                    (d = !1),
                    (m = !1),
                    (v = !1),
                    (c = l + 1),
                    (h = b)),
                    l++;
                }
                13 === f && i.push(e._createLink(r, s, a, c, u));
              }
              return i;
            },
          },
        ]),
        e
      );
    })();
    function xn(e) {
      return e &&
        'function' === typeof e.getLineCount &&
        'function' === typeof e.getLineContent
        ? An.computeLinks(e)
        : [];
    }
    var On = (function () {
      function e() {
        v(this, e),
          (this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            [
              'Private',
              'Public',
              'Friend',
              'ReadOnly',
              'Partial',
              'Protected',
              'WriteOnly',
            ],
            ['public', 'protected', 'private'],
          ]);
      }
      return (
        g(e, [
          {
            key: 'navigateValueSet',
            value: function (e, t, n, r, i) {
              if (e && t) {
                var a = this.doNavigateValueSet(t, i);
                if (a) return { range: e, value: a };
              }
              if (n && r) {
                var o = this.doNavigateValueSet(r, i);
                if (o) return { range: n, value: o };
              }
              return null;
            },
          },
          {
            key: 'doNavigateValueSet',
            value: function (e, t) {
              var n = this.numberReplace(e, t);
              return null !== n ? n : this.textReplace(e, t);
            },
          },
          {
            key: 'numberReplace',
            value: function (e, t) {
              var n = Math.pow(10, e.length - (e.lastIndexOf('.') + 1)),
                r = Number(e),
                i = parseFloat(e);
              return isNaN(r) || isNaN(i) || r !== i
                ? null
                : 0 !== r || t
                ? ((r = Math.floor(r * n)), (r += t ? n : -n), String(r / n))
                : null;
            },
          },
          {
            key: 'textReplace',
            value: function (e, t) {
              return this.valueSetsReplace(this._defaultValueSet, e, t);
            },
          },
          {
            key: 'valueSetsReplace',
            value: function (e, t, n) {
              for (var r = null, i = 0, a = e.length; null === r && i < a; i++)
                r = this.valueSetReplace(e[i], t, n);
              return r;
            },
          },
          {
            key: 'valueSetReplace',
            value: function (e, t, n) {
              var r = e.indexOf(t);
              return r >= 0
                ? ((r += n ? 1 : -1),
                  r < 0 ? (r = e.length - 1) : (r %= e.length),
                  e[r])
                : null;
            },
          },
        ]),
        e
      );
    })();
    On.INSTANCE = new On();
    var Mn,
      Rn = Object.freeze(function (e, t) {
        var n = setTimeout(e.bind(t), 0);
        return {
          dispose: function () {
            clearTimeout(n);
          },
        };
      });
    (function (e) {
      function t(t) {
        return (
          t === e.None ||
          t === e.Cancelled ||
          t instanceof Tn ||
          (!(!t || 'object' !== typeof t) &&
            'boolean' === typeof t.isCancellationRequested &&
            'function' === typeof t.onCancellationRequested)
        );
      }
      (e.isCancellationToken = t),
        (e.None = Object.freeze({
          isCancellationRequested: !1,
          onCancellationRequested: re.None,
        })),
        (e.Cancelled = Object.freeze({
          isCancellationRequested: !0,
          onCancellationRequested: Rn,
        }));
    })(Mn || (Mn = {}));
    for (
      var Pn,
        Tn = (function () {
          function e() {
            v(this, e), (this._isCancelled = !1), (this._emitter = null);
          }
          return (
            g(e, [
              {
                key: 'cancel',
                value: function () {
                  this._isCancelled ||
                    ((this._isCancelled = !0),
                    this._emitter &&
                      (this._emitter.fire(void 0), this.dispose()));
                },
              },
              {
                key: 'isCancellationRequested',
                get: function () {
                  return this._isCancelled;
                },
              },
              {
                key: 'onCancellationRequested',
                get: function () {
                  return this._isCancelled
                    ? Rn
                    : (this._emitter || (this._emitter = new ge()),
                      this._emitter.event);
                },
              },
              {
                key: 'dispose',
                value: function () {
                  this._emitter &&
                    (this._emitter.dispose(), (this._emitter = null));
                },
              },
            ]),
            e
          );
        })(),
        In = (function () {
          function e(t) {
            v(this, e),
              (this._token = void 0),
              (this._parentListener = void 0),
              (this._parentListener =
                t && t.onCancellationRequested(this.cancel, this));
          }
          return (
            g(e, [
              {
                key: 'token',
                get: function () {
                  return this._token || (this._token = new Tn()), this._token;
                },
              },
              {
                key: 'cancel',
                value: function () {
                  this._token
                    ? this._token instanceof Tn && this._token.cancel()
                    : (this._token = Mn.Cancelled);
                },
              },
              {
                key: 'dispose',
                value: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  e && this.cancel(),
                    this._parentListener && this._parentListener.dispose(),
                    this._token
                      ? this._token instanceof Tn && this._token.dispose()
                      : (this._token = Mn.None);
                },
              },
            ]),
            e
          );
        })(),
        Kn = (function () {
          function e() {
            v(this, e),
              (this._keyCodeToStr = []),
              (this._strToKeyCode = Object.create(null));
          }
          return (
            g(e, [
              {
                key: 'define',
                value: function (e, t) {
                  (this._keyCodeToStr[e] = t),
                    (this._strToKeyCode[t.toLowerCase()] = e);
                },
              },
              {
                key: 'keyCodeToStr',
                value: function (e) {
                  return this._keyCodeToStr[e];
                },
              },
              {
                key: 'strToKeyCode',
                value: function (e) {
                  return this._strToKeyCode[e.toLowerCase()] || 0;
                },
              },
            ]),
            e
          );
        })(),
        Dn = new Kn(),
        Vn = new Kn(),
        Fn = new Kn(),
        Bn = new Array(230),
        Un = {},
        qn = [],
        Hn = Object.create(null),
        Wn = Object.create(null),
        jn = [],
        zn = [],
        Gn = 0;
      Gn <= 193;
      Gn++
    )
      jn[Gn] = -1;
    for (var Yn = 0; Yn <= 127; Yn++) zn[Yn] = -1;
    function Qn(e, t) {
      var n = ((65535 & t) << 16) >>> 0;
      return (e | n) >>> 0;
    }
    (function () {
      for (
        var e = '',
          t = [
            [0, 1, 0, 'None', 0, 'unknown', 0, 'VK_UNKNOWN', e, e],
            [0, 1, 1, 'Hyper', 0, e, 0, e, e, e],
            [0, 1, 2, 'Super', 0, e, 0, e, e, e],
            [0, 1, 3, 'Fn', 0, e, 0, e, e, e],
            [0, 1, 4, 'FnLock', 0, e, 0, e, e, e],
            [0, 1, 5, 'Suspend', 0, e, 0, e, e, e],
            [0, 1, 6, 'Resume', 0, e, 0, e, e, e],
            [0, 1, 7, 'Turbo', 0, e, 0, e, e, e],
            [0, 1, 8, 'Sleep', 0, e, 0, 'VK_SLEEP', e, e],
            [0, 1, 9, 'WakeUp', 0, e, 0, e, e, e],
            [31, 0, 10, 'KeyA', 31, 'A', 65, 'VK_A', e, e],
            [32, 0, 11, 'KeyB', 32, 'B', 66, 'VK_B', e, e],
            [33, 0, 12, 'KeyC', 33, 'C', 67, 'VK_C', e, e],
            [34, 0, 13, 'KeyD', 34, 'D', 68, 'VK_D', e, e],
            [35, 0, 14, 'KeyE', 35, 'E', 69, 'VK_E', e, e],
            [36, 0, 15, 'KeyF', 36, 'F', 70, 'VK_F', e, e],
            [37, 0, 16, 'KeyG', 37, 'G', 71, 'VK_G', e, e],
            [38, 0, 17, 'KeyH', 38, 'H', 72, 'VK_H', e, e],
            [39, 0, 18, 'KeyI', 39, 'I', 73, 'VK_I', e, e],
            [40, 0, 19, 'KeyJ', 40, 'J', 74, 'VK_J', e, e],
            [41, 0, 20, 'KeyK', 41, 'K', 75, 'VK_K', e, e],
            [42, 0, 21, 'KeyL', 42, 'L', 76, 'VK_L', e, e],
            [43, 0, 22, 'KeyM', 43, 'M', 77, 'VK_M', e, e],
            [44, 0, 23, 'KeyN', 44, 'N', 78, 'VK_N', e, e],
            [45, 0, 24, 'KeyO', 45, 'O', 79, 'VK_O', e, e],
            [46, 0, 25, 'KeyP', 46, 'P', 80, 'VK_P', e, e],
            [47, 0, 26, 'KeyQ', 47, 'Q', 81, 'VK_Q', e, e],
            [48, 0, 27, 'KeyR', 48, 'R', 82, 'VK_R', e, e],
            [49, 0, 28, 'KeyS', 49, 'S', 83, 'VK_S', e, e],
            [50, 0, 29, 'KeyT', 50, 'T', 84, 'VK_T', e, e],
            [51, 0, 30, 'KeyU', 51, 'U', 85, 'VK_U', e, e],
            [52, 0, 31, 'KeyV', 52, 'V', 86, 'VK_V', e, e],
            [53, 0, 32, 'KeyW', 53, 'W', 87, 'VK_W', e, e],
            [54, 0, 33, 'KeyX', 54, 'X', 88, 'VK_X', e, e],
            [55, 0, 34, 'KeyY', 55, 'Y', 89, 'VK_Y', e, e],
            [56, 0, 35, 'KeyZ', 56, 'Z', 90, 'VK_Z', e, e],
            [22, 0, 36, 'Digit1', 22, '1', 49, 'VK_1', e, e],
            [23, 0, 37, 'Digit2', 23, '2', 50, 'VK_2', e, e],
            [24, 0, 38, 'Digit3', 24, '3', 51, 'VK_3', e, e],
            [25, 0, 39, 'Digit4', 25, '4', 52, 'VK_4', e, e],
            [26, 0, 40, 'Digit5', 26, '5', 53, 'VK_5', e, e],
            [27, 0, 41, 'Digit6', 27, '6', 54, 'VK_6', e, e],
            [28, 0, 42, 'Digit7', 28, '7', 55, 'VK_7', e, e],
            [29, 0, 43, 'Digit8', 29, '8', 56, 'VK_8', e, e],
            [30, 0, 44, 'Digit9', 30, '9', 57, 'VK_9', e, e],
            [21, 0, 45, 'Digit0', 21, '0', 48, 'VK_0', e, e],
            [3, 1, 46, 'Enter', 3, 'Enter', 13, 'VK_RETURN', e, e],
            [9, 1, 47, 'Escape', 9, 'Escape', 27, 'VK_ESCAPE', e, e],
            [1, 1, 48, 'Backspace', 1, 'Backspace', 8, 'VK_BACK', e, e],
            [2, 1, 49, 'Tab', 2, 'Tab', 9, 'VK_TAB', e, e],
            [10, 1, 50, 'Space', 10, 'Space', 32, 'VK_SPACE', e, e],
            [
              83,
              0,
              51,
              'Minus',
              83,
              '-',
              189,
              'VK_OEM_MINUS',
              '-',
              'OEM_MINUS',
            ],
            [81, 0, 52, 'Equal', 81, '=', 187, 'VK_OEM_PLUS', '=', 'OEM_PLUS'],
            [87, 0, 53, 'BracketLeft', 87, '[', 219, 'VK_OEM_4', '[', 'OEM_4'],
            [89, 0, 54, 'BracketRight', 89, ']', 221, 'VK_OEM_6', ']', 'OEM_6'],
            [88, 0, 55, 'Backslash', 88, '\\', 220, 'VK_OEM_5', '\\', 'OEM_5'],
            [0, 0, 56, 'IntlHash', 0, e, 0, e, e, e],
            [80, 0, 57, 'Semicolon', 80, ';', 186, 'VK_OEM_1', ';', 'OEM_1'],
            [90, 0, 58, 'Quote', 90, "'", 222, 'VK_OEM_7', "'", 'OEM_7'],
            [86, 0, 59, 'Backquote', 86, '`', 192, 'VK_OEM_3', '`', 'OEM_3'],
            [
              82,
              0,
              60,
              'Comma',
              82,
              ',',
              188,
              'VK_OEM_COMMA',
              ',',
              'OEM_COMMA',
            ],
            [
              84,
              0,
              61,
              'Period',
              84,
              '.',
              190,
              'VK_OEM_PERIOD',
              '.',
              'OEM_PERIOD',
            ],
            [85, 0, 62, 'Slash', 85, '/', 191, 'VK_OEM_2', '/', 'OEM_2'],
            [8, 1, 63, 'CapsLock', 8, 'CapsLock', 20, 'VK_CAPITAL', e, e],
            [59, 1, 64, 'F1', 59, 'F1', 112, 'VK_F1', e, e],
            [60, 1, 65, 'F2', 60, 'F2', 113, 'VK_F2', e, e],
            [61, 1, 66, 'F3', 61, 'F3', 114, 'VK_F3', e, e],
            [62, 1, 67, 'F4', 62, 'F4', 115, 'VK_F4', e, e],
            [63, 1, 68, 'F5', 63, 'F5', 116, 'VK_F5', e, e],
            [64, 1, 69, 'F6', 64, 'F6', 117, 'VK_F6', e, e],
            [65, 1, 70, 'F7', 65, 'F7', 118, 'VK_F7', e, e],
            [66, 1, 71, 'F8', 66, 'F8', 119, 'VK_F8', e, e],
            [67, 1, 72, 'F9', 67, 'F9', 120, 'VK_F9', e, e],
            [68, 1, 73, 'F10', 68, 'F10', 121, 'VK_F10', e, e],
            [69, 1, 74, 'F11', 69, 'F11', 122, 'VK_F11', e, e],
            [70, 1, 75, 'F12', 70, 'F12', 123, 'VK_F12', e, e],
            [0, 1, 76, 'PrintScreen', 0, e, 0, e, e, e],
            [79, 1, 77, 'ScrollLock', 79, 'ScrollLock', 145, 'VK_SCROLL', e, e],
            [7, 1, 78, 'Pause', 7, 'PauseBreak', 19, 'VK_PAUSE', e, e],
            [19, 1, 79, 'Insert', 19, 'Insert', 45, 'VK_INSERT', e, e],
            [14, 1, 80, 'Home', 14, 'Home', 36, 'VK_HOME', e, e],
            [11, 1, 81, 'PageUp', 11, 'PageUp', 33, 'VK_PRIOR', e, e],
            [20, 1, 82, 'Delete', 20, 'Delete', 46, 'VK_DELETE', e, e],
            [13, 1, 83, 'End', 13, 'End', 35, 'VK_END', e, e],
            [12, 1, 84, 'PageDown', 12, 'PageDown', 34, 'VK_NEXT', e, e],
            [
              17,
              1,
              85,
              'ArrowRight',
              17,
              'RightArrow',
              39,
              'VK_RIGHT',
              'Right',
              e,
            ],
            [15, 1, 86, 'ArrowLeft', 15, 'LeftArrow', 37, 'VK_LEFT', 'Left', e],
            [18, 1, 87, 'ArrowDown', 18, 'DownArrow', 40, 'VK_DOWN', 'Down', e],
            [16, 1, 88, 'ArrowUp', 16, 'UpArrow', 38, 'VK_UP', 'Up', e],
            [78, 1, 89, 'NumLock', 78, 'NumLock', 144, 'VK_NUMLOCK', e, e],
            [
              108,
              1,
              90,
              'NumpadDivide',
              108,
              'NumPad_Divide',
              111,
              'VK_DIVIDE',
              e,
              e,
            ],
            [
              103,
              1,
              91,
              'NumpadMultiply',
              103,
              'NumPad_Multiply',
              106,
              'VK_MULTIPLY',
              e,
              e,
            ],
            [
              106,
              1,
              92,
              'NumpadSubtract',
              106,
              'NumPad_Subtract',
              109,
              'VK_SUBTRACT',
              e,
              e,
            ],
            [104, 1, 93, 'NumpadAdd', 104, 'NumPad_Add', 107, 'VK_ADD', e, e],
            [3, 1, 94, 'NumpadEnter', 3, e, 0, e, e, e],
            [94, 1, 95, 'Numpad1', 94, 'NumPad1', 97, 'VK_NUMPAD1', e, e],
            [95, 1, 96, 'Numpad2', 95, 'NumPad2', 98, 'VK_NUMPAD2', e, e],
            [96, 1, 97, 'Numpad3', 96, 'NumPad3', 99, 'VK_NUMPAD3', e, e],
            [97, 1, 98, 'Numpad4', 97, 'NumPad4', 100, 'VK_NUMPAD4', e, e],
            [98, 1, 99, 'Numpad5', 98, 'NumPad5', 101, 'VK_NUMPAD5', e, e],
            [99, 1, 100, 'Numpad6', 99, 'NumPad6', 102, 'VK_NUMPAD6', e, e],
            [100, 1, 101, 'Numpad7', 100, 'NumPad7', 103, 'VK_NUMPAD7', e, e],
            [101, 1, 102, 'Numpad8', 101, 'NumPad8', 104, 'VK_NUMPAD8', e, e],
            [102, 1, 103, 'Numpad9', 102, 'NumPad9', 105, 'VK_NUMPAD9', e, e],
            [93, 1, 104, 'Numpad0', 93, 'NumPad0', 96, 'VK_NUMPAD0', e, e],
            [
              107,
              1,
              105,
              'NumpadDecimal',
              107,
              'NumPad_Decimal',
              110,
              'VK_DECIMAL',
              e,
              e,
            ],
            [
              92,
              0,
              106,
              'IntlBackslash',
              92,
              'OEM_102',
              226,
              'VK_OEM_102',
              e,
              e,
            ],
            [58, 1, 107, 'ContextMenu', 58, 'ContextMenu', 93, e, e, e],
            [0, 1, 108, 'Power', 0, e, 0, e, e, e],
            [0, 1, 109, 'NumpadEqual', 0, e, 0, e, e, e],
            [71, 1, 110, 'F13', 71, 'F13', 124, 'VK_F13', e, e],
            [72, 1, 111, 'F14', 72, 'F14', 125, 'VK_F14', e, e],
            [73, 1, 112, 'F15', 73, 'F15', 126, 'VK_F15', e, e],
            [74, 1, 113, 'F16', 74, 'F16', 127, 'VK_F16', e, e],
            [75, 1, 114, 'F17', 75, 'F17', 128, 'VK_F17', e, e],
            [76, 1, 115, 'F18', 76, 'F18', 129, 'VK_F18', e, e],
            [77, 1, 116, 'F19', 77, 'F19', 130, 'VK_F19', e, e],
            [0, 1, 117, 'F20', 0, e, 0, 'VK_F20', e, e],
            [0, 1, 118, 'F21', 0, e, 0, 'VK_F21', e, e],
            [0, 1, 119, 'F22', 0, e, 0, 'VK_F22', e, e],
            [0, 1, 120, 'F23', 0, e, 0, 'VK_F23', e, e],
            [0, 1, 121, 'F24', 0, e, 0, 'VK_F24', e, e],
            [0, 1, 122, 'Open', 0, e, 0, e, e, e],
            [0, 1, 123, 'Help', 0, e, 0, e, e, e],
            [0, 1, 124, 'Select', 0, e, 0, e, e, e],
            [0, 1, 125, 'Again', 0, e, 0, e, e, e],
            [0, 1, 126, 'Undo', 0, e, 0, e, e, e],
            [0, 1, 127, 'Cut', 0, e, 0, e, e, e],
            [0, 1, 128, 'Copy', 0, e, 0, e, e, e],
            [0, 1, 129, 'Paste', 0, e, 0, e, e, e],
            [0, 1, 130, 'Find', 0, e, 0, e, e, e],
            [
              0,
              1,
              131,
              'AudioVolumeMute',
              112,
              'AudioVolumeMute',
              173,
              'VK_VOLUME_MUTE',
              e,
              e,
            ],
            [
              0,
              1,
              132,
              'AudioVolumeUp',
              113,
              'AudioVolumeUp',
              175,
              'VK_VOLUME_UP',
              e,
              e,
            ],
            [
              0,
              1,
              133,
              'AudioVolumeDown',
              114,
              'AudioVolumeDown',
              174,
              'VK_VOLUME_DOWN',
              e,
              e,
            ],
            [
              105,
              1,
              134,
              'NumpadComma',
              105,
              'NumPad_Separator',
              108,
              'VK_SEPARATOR',
              e,
              e,
            ],
            [110, 0, 135, 'IntlRo', 110, 'ABNT_C1', 193, 'VK_ABNT_C1', e, e],
            [0, 1, 136, 'KanaMode', 0, e, 0, e, e, e],
            [0, 0, 137, 'IntlYen', 0, e, 0, e, e, e],
            [0, 1, 138, 'Convert', 0, e, 0, e, e, e],
            [0, 1, 139, 'NonConvert', 0, e, 0, e, e, e],
            [0, 1, 140, 'Lang1', 0, e, 0, e, e, e],
            [0, 1, 141, 'Lang2', 0, e, 0, e, e, e],
            [0, 1, 142, 'Lang3', 0, e, 0, e, e, e],
            [0, 1, 143, 'Lang4', 0, e, 0, e, e, e],
            [0, 1, 144, 'Lang5', 0, e, 0, e, e, e],
            [0, 1, 145, 'Abort', 0, e, 0, e, e, e],
            [0, 1, 146, 'Props', 0, e, 0, e, e, e],
            [0, 1, 147, 'NumpadParenLeft', 0, e, 0, e, e, e],
            [0, 1, 148, 'NumpadParenRight', 0, e, 0, e, e, e],
            [0, 1, 149, 'NumpadBackspace', 0, e, 0, e, e, e],
            [0, 1, 150, 'NumpadMemoryStore', 0, e, 0, e, e, e],
            [0, 1, 151, 'NumpadMemoryRecall', 0, e, 0, e, e, e],
            [0, 1, 152, 'NumpadMemoryClear', 0, e, 0, e, e, e],
            [0, 1, 153, 'NumpadMemoryAdd', 0, e, 0, e, e, e],
            [0, 1, 154, 'NumpadMemorySubtract', 0, e, 0, e, e, e],
            [0, 1, 155, 'NumpadClear', 126, 'Clear', 12, 'VK_CLEAR', e, e],
            [0, 1, 156, 'NumpadClearEntry', 0, e, 0, e, e, e],
            [5, 1, 0, e, 5, 'Ctrl', 17, 'VK_CONTROL', e, e],
            [4, 1, 0, e, 4, 'Shift', 16, 'VK_SHIFT', e, e],
            [6, 1, 0, e, 6, 'Alt', 18, 'VK_MENU', e, e],
            [57, 1, 0, e, 57, 'Meta', 0, 'VK_COMMAND', e, e],
            [5, 1, 157, 'ControlLeft', 5, e, 0, 'VK_LCONTROL', e, e],
            [4, 1, 158, 'ShiftLeft', 4, e, 0, 'VK_LSHIFT', e, e],
            [6, 1, 159, 'AltLeft', 6, e, 0, 'VK_LMENU', e, e],
            [57, 1, 160, 'MetaLeft', 57, e, 0, 'VK_LWIN', e, e],
            [5, 1, 161, 'ControlRight', 5, e, 0, 'VK_RCONTROL', e, e],
            [4, 1, 162, 'ShiftRight', 4, e, 0, 'VK_RSHIFT', e, e],
            [6, 1, 163, 'AltRight', 6, e, 0, 'VK_RMENU', e, e],
            [57, 1, 164, 'MetaRight', 57, e, 0, 'VK_RWIN', e, e],
            [0, 1, 165, 'BrightnessUp', 0, e, 0, e, e, e],
            [0, 1, 166, 'BrightnessDown', 0, e, 0, e, e, e],
            [0, 1, 167, 'MediaPlay', 0, e, 0, e, e, e],
            [0, 1, 168, 'MediaRecord', 0, e, 0, e, e, e],
            [0, 1, 169, 'MediaFastForward', 0, e, 0, e, e, e],
            [0, 1, 170, 'MediaRewind', 0, e, 0, e, e, e],
            [
              114,
              1,
              171,
              'MediaTrackNext',
              119,
              'MediaTrackNext',
              176,
              'VK_MEDIA_NEXT_TRACK',
              e,
              e,
            ],
            [
              115,
              1,
              172,
              'MediaTrackPrevious',
              120,
              'MediaTrackPrevious',
              177,
              'VK_MEDIA_PREV_TRACK',
              e,
              e,
            ],
            [
              116,
              1,
              173,
              'MediaStop',
              121,
              'MediaStop',
              178,
              'VK_MEDIA_STOP',
              e,
              e,
            ],
            [0, 1, 174, 'Eject', 0, e, 0, e, e, e],
            [
              117,
              1,
              175,
              'MediaPlayPause',
              122,
              'MediaPlayPause',
              179,
              'VK_MEDIA_PLAY_PAUSE',
              e,
              e,
            ],
            [
              0,
              1,
              176,
              'MediaSelect',
              123,
              'LaunchMediaPlayer',
              181,
              'VK_MEDIA_LAUNCH_MEDIA_SELECT',
              e,
              e,
            ],
            [
              0,
              1,
              177,
              'LaunchMail',
              124,
              'LaunchMail',
              180,
              'VK_MEDIA_LAUNCH_MAIL',
              e,
              e,
            ],
            [
              0,
              1,
              178,
              'LaunchApp2',
              125,
              'LaunchApp2',
              183,
              'VK_MEDIA_LAUNCH_APP2',
              e,
              e,
            ],
            [0, 1, 179, 'LaunchApp1', 0, e, 0, 'VK_MEDIA_LAUNCH_APP1', e, e],
            [0, 1, 180, 'SelectTask', 0, e, 0, e, e, e],
            [0, 1, 181, 'LaunchScreenSaver', 0, e, 0, e, e, e],
            [
              0,
              1,
              182,
              'BrowserSearch',
              115,
              'BrowserSearch',
              170,
              'VK_BROWSER_SEARCH',
              e,
              e,
            ],
            [
              0,
              1,
              183,
              'BrowserHome',
              116,
              'BrowserHome',
              172,
              'VK_BROWSER_HOME',
              e,
              e,
            ],
            [
              112,
              1,
              184,
              'BrowserBack',
              117,
              'BrowserBack',
              166,
              'VK_BROWSER_BACK',
              e,
              e,
            ],
            [
              113,
              1,
              185,
              'BrowserForward',
              118,
              'BrowserForward',
              167,
              'VK_BROWSER_FORWARD',
              e,
              e,
            ],
            [0, 1, 186, 'BrowserStop', 0, e, 0, 'VK_BROWSER_STOP', e, e],
            [0, 1, 187, 'BrowserRefresh', 0, e, 0, 'VK_BROWSER_REFRESH', e, e],
            [
              0,
              1,
              188,
              'BrowserFavorites',
              0,
              e,
              0,
              'VK_BROWSER_FAVORITES',
              e,
              e,
            ],
            [0, 1, 189, 'ZoomToggle', 0, e, 0, e, e, e],
            [0, 1, 190, 'MailReply', 0, e, 0, e, e, e],
            [0, 1, 191, 'MailForward', 0, e, 0, e, e, e],
            [0, 1, 192, 'MailSend', 0, e, 0, e, e, e],
            [109, 1, 0, e, 109, 'KeyInComposition', 229, e, e, e],
            [111, 1, 0, e, 111, 'ABNT_C2', 194, 'VK_ABNT_C2', e, e],
            [91, 1, 0, e, 91, 'OEM_8', 223, 'VK_OEM_8', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_KANA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HANGUL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_JUNJA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_FINAL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HANJA', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_KANJI', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_CONVERT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_NONCONVERT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ACCEPT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_MODECHANGE', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_SELECT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PRINT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EXECUTE', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_SNAPSHOT', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_HELP', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_APPS', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PROCESSKEY', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PACKET', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_DBE_SBCSCHAR', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_DBE_DBCSCHAR', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ATTN', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_CRSEL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EXSEL', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_EREOF', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PLAY', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_ZOOM', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_NONAME', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_PA1', e, e],
            [0, 1, 0, e, 0, e, 0, 'VK_OEM_CLEAR', e, e],
          ],
          n = [],
          r = [],
          i = 0,
          a = t;
        i < a.length;
        i++
      ) {
        var o = a[i],
          s = P(o, 10),
          u = (s[0], s[1]),
          l = s[2],
          c = s[3],
          h = s[4],
          f = s[5],
          d = s[6],
          m = s[7],
          g = s[8],
          v = s[9];
        if (
          (r[l] ||
            ((r[l] = !0),
            (qn[l] = c),
            (Hn[c] = l),
            (Wn[c.toLowerCase()] = l),
            u &&
              ((jn[l] = h),
              0 !== h &&
                3 !== h &&
                5 !== h &&
                4 !== h &&
                6 !== h &&
                57 !== h &&
                (zn[h] = l))),
          !n[h])
        ) {
          if (((n[h] = !0), !f))
            throw new Error(
              'String representation missing for key code '
                .concat(h, ' around scan code ')
                .concat(c),
            );
          Dn.define(h, f), Vn.define(h, g || f), Fn.define(h, v || g || f);
        }
        d && (Bn[d] = h), m && (Un[m] = h);
      }
      zn[3] = 46;
    })(),
      (function (e) {
        function t(e) {
          return Dn.keyCodeToStr(e);
        }
        function n(e) {
          return Dn.strToKeyCode(e);
        }
        function r(e) {
          return Vn.keyCodeToStr(e);
        }
        function i(e) {
          return Fn.keyCodeToStr(e);
        }
        function a(e) {
          return Vn.strToKeyCode(e) || Fn.strToKeyCode(e);
        }
        function o(e) {
          if (e >= 93 && e <= 108) return null;
          switch (e) {
            case 16:
              return 'Up';
            case 18:
              return 'Down';
            case 15:
              return 'Left';
            case 17:
              return 'Right';
          }
          return Dn.keyCodeToStr(e);
        }
        (e.toString = t),
          (e.fromString = n),
          (e.toUserSettingsUS = r),
          (e.toUserSettingsGeneral = i),
          (e.fromUserSettings = a),
          (e.toElectronAccelerator = o);
      })(Pn || (Pn = {}));
    var Jn = (function (e) {
        s(n, e);
        var t = d(n);
        function n(e, r, i, a) {
          var o;
          return (
            v(this, n),
            (o = t.call(this, e, r, i, a)),
            (o.selectionStartLineNumber = e),
            (o.selectionStartColumn = r),
            (o.positionLineNumber = i),
            (o.positionColumn = a),
            o
          );
        }
        return (
          g(
            n,
            [
              {
                key: 'toString',
                value: function () {
                  return (
                    '[' +
                    this.selectionStartLineNumber +
                    ',' +
                    this.selectionStartColumn +
                    ' -> ' +
                    this.positionLineNumber +
                    ',' +
                    this.positionColumn +
                    ']'
                  );
                },
              },
              {
                key: 'equalsSelection',
                value: function (e) {
                  return n.selectionsEqual(this, e);
                },
              },
              {
                key: 'getDirection',
                value: function () {
                  return this.selectionStartLineNumber ===
                    this.startLineNumber &&
                    this.selectionStartColumn === this.startColumn
                    ? 0
                    : 1;
                },
              },
              {
                key: 'setEndPosition',
                value: function (e, t) {
                  return 0 === this.getDirection()
                    ? new n(this.startLineNumber, this.startColumn, e, t)
                    : new n(e, t, this.startLineNumber, this.startColumn);
                },
              },
              {
                key: 'getPosition',
                value: function () {
                  return new Qt(this.positionLineNumber, this.positionColumn);
                },
              },
              {
                key: 'getSelectionStart',
                value: function () {
                  return new Qt(
                    this.selectionStartLineNumber,
                    this.selectionStartColumn,
                  );
                },
              },
              {
                key: 'setStartPosition',
                value: function (e, t) {
                  return 0 === this.getDirection()
                    ? new n(e, t, this.endLineNumber, this.endColumn)
                    : new n(this.endLineNumber, this.endColumn, e, t);
                },
              },
            ],
            [
              {
                key: 'selectionsEqual',
                value: function (e, t) {
                  return (
                    e.selectionStartLineNumber === t.selectionStartLineNumber &&
                    e.selectionStartColumn === t.selectionStartColumn &&
                    e.positionLineNumber === t.positionLineNumber &&
                    e.positionColumn === t.positionColumn
                  );
                },
              },
              {
                key: 'fromPositions',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e;
                  return new n(e.lineNumber, e.column, t.lineNumber, t.column);
                },
              },
              {
                key: 'fromRange',
                value: function (e, t) {
                  return 0 === t
                    ? new n(
                        e.startLineNumber,
                        e.startColumn,
                        e.endLineNumber,
                        e.endColumn,
                      )
                    : new n(
                        e.endLineNumber,
                        e.endColumn,
                        e.startLineNumber,
                        e.startColumn,
                      );
                },
              },
              {
                key: 'liftSelection',
                value: function (e) {
                  return new n(
                    e.selectionStartLineNumber,
                    e.selectionStartColumn,
                    e.positionLineNumber,
                    e.positionColumn,
                  );
                },
              },
              {
                key: 'selectionsArrEqual',
                value: function (e, t) {
                  if ((e && !t) || (!e && t)) return !1;
                  if (!e && !t) return !0;
                  if (e.length !== t.length) return !1;
                  for (var n = 0, r = e.length; n < r; n++)
                    if (!this.selectionsEqual(e[n], t[n])) return !1;
                  return !0;
                },
              },
              {
                key: 'isISelection',
                value: function (e) {
                  return (
                    e &&
                    'number' === typeof e.selectionStartLineNumber &&
                    'number' === typeof e.selectionStartColumn &&
                    'number' === typeof e.positionLineNumber &&
                    'number' === typeof e.positionColumn
                  );
                },
              },
              {
                key: 'createWithDirection',
                value: function (e, t, r, i, a) {
                  return 0 === a ? new n(e, t, r, i) : new n(r, i, e, t);
                },
              },
            ],
          ),
          n
        );
      })(Jt),
      Zn = function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n || (n = Promise))(function (n, a) {
          function o(e) {
            try {
              u(r.next(e));
            } catch (t) {
              a(t);
            }
          }
          function s(e) {
            try {
              u(r['throw'](e));
            } catch (t) {
              a(t);
            }
          }
          function u(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      Xn = (function () {
        function e() {
          v(this, e),
            (this._map = new Map()),
            (this._factories = new Map()),
            (this._onDidChange = new ge()),
            (this.onDidChange = this._onDidChange.event),
            (this._colorMap = null);
        }
        return (
          g(e, [
            {
              key: 'fire',
              value: function (e) {
                this._onDidChange.fire({
                  changedLanguages: e,
                  changedColorMap: !1,
                });
              },
            },
            {
              key: 'register',
              value: function (e, t) {
                var n = this;
                return (
                  this._map.set(e, t),
                  this.fire([e]),
                  X(function () {
                    n._map.get(e) === t && (n._map['delete'](e), n.fire([e]));
                  })
                );
              },
            },
            {
              key: 'registerFactory',
              value: function (e, t) {
                var n,
                  r = this;
                null === (n = this._factories.get(e)) ||
                  void 0 === n ||
                  n.dispose();
                var i = new $n(this, e, t);
                return (
                  this._factories.set(e, i),
                  X(function () {
                    var t = r._factories.get(e);
                    t && t === i && (r._factories['delete'](e), t.dispose());
                  })
                );
              },
            },
            {
              key: 'getOrCreate',
              value: function (e) {
                return Zn(
                  this,
                  void 0,
                  void 0,
                  B().mark(function t() {
                    var n, r;
                    return B().wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((n = this.get(e)), !n)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return', n);
                            case 3:
                              if (
                                ((r = this._factories.get(e)),
                                r && !r.isResolved)
                              ) {
                                t.next = 6;
                                break;
                              }
                              return t.abrupt('return', null);
                            case 6:
                              return (t.next = 8), r.resolve();
                            case 8:
                              return t.abrupt('return', this.get(e));
                            case 9:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: 'get',
              value: function (e) {
                return this._map.get(e) || null;
              },
            },
            {
              key: 'isResolved',
              value: function (e) {
                var t = this.get(e);
                if (t) return !0;
                var n = this._factories.get(e);
                return !(n && !n.isResolved);
              },
            },
            {
              key: 'setColorMap',
              value: function (e) {
                (this._colorMap = e),
                  this._onDidChange.fire({
                    changedLanguages: Array.from(this._map.keys()),
                    changedColorMap: !0,
                  });
              },
            },
            {
              key: 'getColorMap',
              value: function () {
                return this._colorMap;
              },
            },
            {
              key: 'getDefaultBackground',
              value: function () {
                return this._colorMap && this._colorMap.length > 2
                  ? this._colorMap[2]
                  : null;
              },
            },
          ]),
          e
        );
      })(),
      $n = (function (e) {
        s(n, e);
        var t = d(n);
        function n(e, r, i) {
          var a;
          return (
            v(this, n),
            (a = t.call(this)),
            (a._registry = e),
            (a._languageId = r),
            (a._factory = i),
            (a._isDisposed = !1),
            (a._resolvePromise = null),
            (a._isResolved = !1),
            a
          );
        }
        return (
          g(n, [
            {
              key: 'isResolved',
              get: function () {
                return this._isResolved;
              },
            },
            {
              key: 'dispose',
              value: function () {
                (this._isDisposed = !0),
                  x(u(n.prototype), 'dispose', this).call(this);
              },
            },
            {
              key: 'resolve',
              value: function () {
                return Zn(
                  this,
                  void 0,
                  void 0,
                  B().mark(function e() {
                    return B().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this._resolvePromise ||
                                  (this._resolvePromise = this._create()),
                                e.abrupt('return', this._resolvePromise)
                              );
                            case 2:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: '_create',
              value: function () {
                return Zn(
                  this,
                  void 0,
                  void 0,
                  B().mark(function e() {
                    var t;
                    return B().wrap(
                      function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.resolve(
                                  this._factory.createTokenizationSupport(),
                                )
                              );
                            case 2:
                              (t = e.sent),
                                (this._isResolved = !0),
                                t &&
                                  !this._isDisposed &&
                                  this._register(
                                    this._registry.register(
                                      this._languageId,
                                      t,
                                    ),
                                  );
                            case 5:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
              },
            },
          ]),
          n
        );
      })(ee);
    var er,
      tr = (function () {
        function e(t, n, r) {
          v(this, e),
            (this.id = t),
            (this.definition = n),
            (this.description = r),
            e._allCodicons.push(this);
        }
        return (
          g(
            e,
            [
              {
                key: 'classNames',
                get: function () {
                  return 'codicon codicon-' + this.id;
                },
              },
              {
                key: 'classNamesArray',
                get: function () {
                  return ['codicon', 'codicon-' + this.id];
                },
              },
              {
                key: 'cssSelector',
                get: function () {
                  return '.codicon.codicon-' + this.id;
                },
              },
            ],
            [
              {
                key: 'getAll',
                value: function () {
                  return e._allCodicons;
                },
              },
            ],
          ),
          e
        );
      })();
    (tr._allCodicons = []),
      (tr.add = new tr('add', { fontCharacter: '\\ea60' })),
      (tr.plus = new tr('plus', tr.add.definition)),
      (tr.gistNew = new tr('gist-new', tr.add.definition)),
      (tr.repoCreate = new tr('repo-create', tr.add.definition)),
      (tr.lightbulb = new tr('lightbulb', { fontCharacter: '\\ea61' })),
      (tr.lightBulb = new tr('light-bulb', { fontCharacter: '\\ea61' })),
      (tr.repo = new tr('repo', { fontCharacter: '\\ea62' })),
      (tr.repoDelete = new tr('repo-delete', { fontCharacter: '\\ea62' })),
      (tr.gistFork = new tr('gist-fork', { fontCharacter: '\\ea63' })),
      (tr.repoForked = new tr('repo-forked', { fontCharacter: '\\ea63' })),
      (tr.gitPullRequest = new tr('git-pull-request', {
        fontCharacter: '\\ea64',
      })),
      (tr.gitPullRequestAbandoned = new tr('git-pull-request-abandoned', {
        fontCharacter: '\\ea64',
      })),
      (tr.recordKeys = new tr('record-keys', { fontCharacter: '\\ea65' })),
      (tr.keyboard = new tr('keyboard', { fontCharacter: '\\ea65' })),
      (tr.tag = new tr('tag', { fontCharacter: '\\ea66' })),
      (tr.tagAdd = new tr('tag-add', { fontCharacter: '\\ea66' })),
      (tr.tagRemove = new tr('tag-remove', { fontCharacter: '\\ea66' })),
      (tr.person = new tr('person', { fontCharacter: '\\ea67' })),
      (tr.personFollow = new tr('person-follow', { fontCharacter: '\\ea67' })),
      (tr.personOutline = new tr('person-outline', {
        fontCharacter: '\\ea67',
      })),
      (tr.personFilled = new tr('person-filled', { fontCharacter: '\\ea67' })),
      (tr.gitBranch = new tr('git-branch', { fontCharacter: '\\ea68' })),
      (tr.gitBranchCreate = new tr('git-branch-create', {
        fontCharacter: '\\ea68',
      })),
      (tr.gitBranchDelete = new tr('git-branch-delete', {
        fontCharacter: '\\ea68',
      })),
      (tr.sourceControl = new tr('source-control', {
        fontCharacter: '\\ea68',
      })),
      (tr.mirror = new tr('mirror', { fontCharacter: '\\ea69' })),
      (tr.mirrorPublic = new tr('mirror-public', { fontCharacter: '\\ea69' })),
      (tr.star = new tr('star', { fontCharacter: '\\ea6a' })),
      (tr.starAdd = new tr('star-add', { fontCharacter: '\\ea6a' })),
      (tr.starDelete = new tr('star-delete', { fontCharacter: '\\ea6a' })),
      (tr.starEmpty = new tr('star-empty', { fontCharacter: '\\ea6a' })),
      (tr.comment = new tr('comment', { fontCharacter: '\\ea6b' })),
      (tr.commentAdd = new tr('comment-add', { fontCharacter: '\\ea6b' })),
      (tr.alert = new tr('alert', { fontCharacter: '\\ea6c' })),
      (tr.warning = new tr('warning', { fontCharacter: '\\ea6c' })),
      (tr.search = new tr('search', { fontCharacter: '\\ea6d' })),
      (tr.searchSave = new tr('search-save', { fontCharacter: '\\ea6d' })),
      (tr.logOut = new tr('log-out', { fontCharacter: '\\ea6e' })),
      (tr.signOut = new tr('sign-out', { fontCharacter: '\\ea6e' })),
      (tr.logIn = new tr('log-in', { fontCharacter: '\\ea6f' })),
      (tr.signIn = new tr('sign-in', { fontCharacter: '\\ea6f' })),
      (tr.eye = new tr('eye', { fontCharacter: '\\ea70' })),
      (tr.eyeUnwatch = new tr('eye-unwatch', { fontCharacter: '\\ea70' })),
      (tr.eyeWatch = new tr('eye-watch', { fontCharacter: '\\ea70' })),
      (tr.circleFilled = new tr('circle-filled', { fontCharacter: '\\ea71' })),
      (tr.primitiveDot = new tr('primitive-dot', { fontCharacter: '\\ea71' })),
      (tr.closeDirty = new tr('close-dirty', { fontCharacter: '\\ea71' })),
      (tr.debugBreakpoint = new tr('debug-breakpoint', {
        fontCharacter: '\\ea71',
      })),
      (tr.debugBreakpointDisabled = new tr('debug-breakpoint-disabled', {
        fontCharacter: '\\ea71',
      })),
      (tr.debugHint = new tr('debug-hint', { fontCharacter: '\\ea71' })),
      (tr.primitiveSquare = new tr('primitive-square', {
        fontCharacter: '\\ea72',
      })),
      (tr.edit = new tr('edit', { fontCharacter: '\\ea73' })),
      (tr.pencil = new tr('pencil', { fontCharacter: '\\ea73' })),
      (tr.info = new tr('info', { fontCharacter: '\\ea74' })),
      (tr.issueOpened = new tr('issue-opened', { fontCharacter: '\\ea74' })),
      (tr.gistPrivate = new tr('gist-private', { fontCharacter: '\\ea75' })),
      (tr.gitForkPrivate = new tr('git-fork-private', {
        fontCharacter: '\\ea75',
      })),
      (tr.lock = new tr('lock', { fontCharacter: '\\ea75' })),
      (tr.mirrorPrivate = new tr('mirror-private', {
        fontCharacter: '\\ea75',
      })),
      (tr.close = new tr('close', { fontCharacter: '\\ea76' })),
      (tr.removeClose = new tr('remove-close', { fontCharacter: '\\ea76' })),
      (tr.x = new tr('x', { fontCharacter: '\\ea76' })),
      (tr.repoSync = new tr('repo-sync', { fontCharacter: '\\ea77' })),
      (tr.sync = new tr('sync', { fontCharacter: '\\ea77' })),
      (tr.clone = new tr('clone', { fontCharacter: '\\ea78' })),
      (tr.desktopDownload = new tr('desktop-download', {
        fontCharacter: '\\ea78',
      })),
      (tr.beaker = new tr('beaker', { fontCharacter: '\\ea79' })),
      (tr.microscope = new tr('microscope', { fontCharacter: '\\ea79' })),
      (tr.vm = new tr('vm', { fontCharacter: '\\ea7a' })),
      (tr.deviceDesktop = new tr('device-desktop', {
        fontCharacter: '\\ea7a',
      })),
      (tr.file = new tr('file', { fontCharacter: '\\ea7b' })),
      (tr.fileText = new tr('file-text', { fontCharacter: '\\ea7b' })),
      (tr.more = new tr('more', { fontCharacter: '\\ea7c' })),
      (tr.ellipsis = new tr('ellipsis', { fontCharacter: '\\ea7c' })),
      (tr.kebabHorizontal = new tr('kebab-horizontal', {
        fontCharacter: '\\ea7c',
      })),
      (tr.mailReply = new tr('mail-reply', { fontCharacter: '\\ea7d' })),
      (tr.reply = new tr('reply', { fontCharacter: '\\ea7d' })),
      (tr.organization = new tr('organization', { fontCharacter: '\\ea7e' })),
      (tr.organizationFilled = new tr('organization-filled', {
        fontCharacter: '\\ea7e',
      })),
      (tr.organizationOutline = new tr('organization-outline', {
        fontCharacter: '\\ea7e',
      })),
      (tr.newFile = new tr('new-file', { fontCharacter: '\\ea7f' })),
      (tr.fileAdd = new tr('file-add', { fontCharacter: '\\ea7f' })),
      (tr.newFolder = new tr('new-folder', { fontCharacter: '\\ea80' })),
      (tr.fileDirectoryCreate = new tr('file-directory-create', {
        fontCharacter: '\\ea80',
      })),
      (tr.trash = new tr('trash', { fontCharacter: '\\ea81' })),
      (tr.trashcan = new tr('trashcan', { fontCharacter: '\\ea81' })),
      (tr.history = new tr('history', { fontCharacter: '\\ea82' })),
      (tr.clock = new tr('clock', { fontCharacter: '\\ea82' })),
      (tr.folder = new tr('folder', { fontCharacter: '\\ea83' })),
      (tr.fileDirectory = new tr('file-directory', {
        fontCharacter: '\\ea83',
      })),
      (tr.symbolFolder = new tr('symbol-folder', { fontCharacter: '\\ea83' })),
      (tr.logoGithub = new tr('logo-github', { fontCharacter: '\\ea84' })),
      (tr.markGithub = new tr('mark-github', { fontCharacter: '\\ea84' })),
      (tr.github = new tr('github', { fontCharacter: '\\ea84' })),
      (tr.terminal = new tr('terminal', { fontCharacter: '\\ea85' })),
      (tr.console = new tr('console', { fontCharacter: '\\ea85' })),
      (tr.repl = new tr('repl', { fontCharacter: '\\ea85' })),
      (tr.zap = new tr('zap', { fontCharacter: '\\ea86' })),
      (tr.symbolEvent = new tr('symbol-event', { fontCharacter: '\\ea86' })),
      (tr.error = new tr('error', { fontCharacter: '\\ea87' })),
      (tr.stop = new tr('stop', { fontCharacter: '\\ea87' })),
      (tr.variable = new tr('variable', { fontCharacter: '\\ea88' })),
      (tr.symbolVariable = new tr('symbol-variable', {
        fontCharacter: '\\ea88',
      })),
      (tr.array = new tr('array', { fontCharacter: '\\ea8a' })),
      (tr.symbolArray = new tr('symbol-array', { fontCharacter: '\\ea8a' })),
      (tr.symbolModule = new tr('symbol-module', { fontCharacter: '\\ea8b' })),
      (tr.symbolPackage = new tr('symbol-package', {
        fontCharacter: '\\ea8b',
      })),
      (tr.symbolNamespace = new tr('symbol-namespace', {
        fontCharacter: '\\ea8b',
      })),
      (tr.symbolObject = new tr('symbol-object', { fontCharacter: '\\ea8b' })),
      (tr.symbolMethod = new tr('symbol-method', { fontCharacter: '\\ea8c' })),
      (tr.symbolFunction = new tr('symbol-function', {
        fontCharacter: '\\ea8c',
      })),
      (tr.symbolConstructor = new tr('symbol-constructor', {
        fontCharacter: '\\ea8c',
      })),
      (tr.symbolBoolean = new tr('symbol-boolean', {
        fontCharacter: '\\ea8f',
      })),
      (tr.symbolNull = new tr('symbol-null', { fontCharacter: '\\ea8f' })),
      (tr.symbolNumeric = new tr('symbol-numeric', {
        fontCharacter: '\\ea90',
      })),
      (tr.symbolNumber = new tr('symbol-number', { fontCharacter: '\\ea90' })),
      (tr.symbolStructure = new tr('symbol-structure', {
        fontCharacter: '\\ea91',
      })),
      (tr.symbolStruct = new tr('symbol-struct', { fontCharacter: '\\ea91' })),
      (tr.symbolParameter = new tr('symbol-parameter', {
        fontCharacter: '\\ea92',
      })),
      (tr.symbolTypeParameter = new tr('symbol-type-parameter', {
        fontCharacter: '\\ea92',
      })),
      (tr.symbolKey = new tr('symbol-key', { fontCharacter: '\\ea93' })),
      (tr.symbolText = new tr('symbol-text', { fontCharacter: '\\ea93' })),
      (tr.symbolReference = new tr('symbol-reference', {
        fontCharacter: '\\ea94',
      })),
      (tr.goToFile = new tr('go-to-file', { fontCharacter: '\\ea94' })),
      (tr.symbolEnum = new tr('symbol-enum', { fontCharacter: '\\ea95' })),
      (tr.symbolValue = new tr('symbol-value', { fontCharacter: '\\ea95' })),
      (tr.symbolRuler = new tr('symbol-ruler', { fontCharacter: '\\ea96' })),
      (tr.symbolUnit = new tr('symbol-unit', { fontCharacter: '\\ea96' })),
      (tr.activateBreakpoints = new tr('activate-breakpoints', {
        fontCharacter: '\\ea97',
      })),
      (tr.archive = new tr('archive', { fontCharacter: '\\ea98' })),
      (tr.arrowBoth = new tr('arrow-both', { fontCharacter: '\\ea99' })),
      (tr.arrowDown = new tr('arrow-down', { fontCharacter: '\\ea9a' })),
      (tr.arrowLeft = new tr('arrow-left', { fontCharacter: '\\ea9b' })),
      (tr.arrowRight = new tr('arrow-right', { fontCharacter: '\\ea9c' })),
      (tr.arrowSmallDown = new tr('arrow-small-down', {
        fontCharacter: '\\ea9d',
      })),
      (tr.arrowSmallLeft = new tr('arrow-small-left', {
        fontCharacter: '\\ea9e',
      })),
      (tr.arrowSmallRight = new tr('arrow-small-right', {
        fontCharacter: '\\ea9f',
      })),
      (tr.arrowSmallUp = new tr('arrow-small-up', { fontCharacter: '\\eaa0' })),
      (tr.arrowUp = new tr('arrow-up', { fontCharacter: '\\eaa1' })),
      (tr.bell = new tr('bell', { fontCharacter: '\\eaa2' })),
      (tr.bold = new tr('bold', { fontCharacter: '\\eaa3' })),
      (tr.book = new tr('book', { fontCharacter: '\\eaa4' })),
      (tr.bookmark = new tr('bookmark', { fontCharacter: '\\eaa5' })),
      (tr.debugBreakpointConditionalUnverified = new tr(
        'debug-breakpoint-conditional-unverified',
        { fontCharacter: '\\eaa6' },
      )),
      (tr.debugBreakpointConditional = new tr('debug-breakpoint-conditional', {
        fontCharacter: '\\eaa7',
      })),
      (tr.debugBreakpointConditionalDisabled = new tr(
        'debug-breakpoint-conditional-disabled',
        { fontCharacter: '\\eaa7' },
      )),
      (tr.debugBreakpointDataUnverified = new tr(
        'debug-breakpoint-data-unverified',
        { fontCharacter: '\\eaa8' },
      )),
      (tr.debugBreakpointData = new tr('debug-breakpoint-data', {
        fontCharacter: '\\eaa9',
      })),
      (tr.debugBreakpointDataDisabled = new tr(
        'debug-breakpoint-data-disabled',
        { fontCharacter: '\\eaa9' },
      )),
      (tr.debugBreakpointLogUnverified = new tr(
        'debug-breakpoint-log-unverified',
        { fontCharacter: '\\eaaa' },
      )),
      (tr.debugBreakpointLog = new tr('debug-breakpoint-log', {
        fontCharacter: '\\eaab',
      })),
      (tr.debugBreakpointLogDisabled = new tr('debug-breakpoint-log-disabled', {
        fontCharacter: '\\eaab',
      })),
      (tr.briefcase = new tr('briefcase', { fontCharacter: '\\eaac' })),
      (tr.broadcast = new tr('broadcast', { fontCharacter: '\\eaad' })),
      (tr.browser = new tr('browser', { fontCharacter: '\\eaae' })),
      (tr.bug = new tr('bug', { fontCharacter: '\\eaaf' })),
      (tr.calendar = new tr('calendar', { fontCharacter: '\\eab0' })),
      (tr.caseSensitive = new tr('case-sensitive', {
        fontCharacter: '\\eab1',
      })),
      (tr.check = new tr('check', { fontCharacter: '\\eab2' })),
      (tr.checklist = new tr('checklist', { fontCharacter: '\\eab3' })),
      (tr.chevronDown = new tr('chevron-down', { fontCharacter: '\\eab4' })),
      (tr.dropDownButton = new tr(
        'drop-down-button',
        tr.chevronDown.definition,
      )),
      (tr.chevronLeft = new tr('chevron-left', { fontCharacter: '\\eab5' })),
      (tr.chevronRight = new tr('chevron-right', { fontCharacter: '\\eab6' })),
      (tr.chevronUp = new tr('chevron-up', { fontCharacter: '\\eab7' })),
      (tr.chromeClose = new tr('chrome-close', { fontCharacter: '\\eab8' })),
      (tr.chromeMaximize = new tr('chrome-maximize', {
        fontCharacter: '\\eab9',
      })),
      (tr.chromeMinimize = new tr('chrome-minimize', {
        fontCharacter: '\\eaba',
      })),
      (tr.chromeRestore = new tr('chrome-restore', {
        fontCharacter: '\\eabb',
      })),
      (tr.circleOutline = new tr('circle-outline', {
        fontCharacter: '\\eabc',
      })),
      (tr.debugBreakpointUnverified = new tr('debug-breakpoint-unverified', {
        fontCharacter: '\\eabc',
      })),
      (tr.circleSlash = new tr('circle-slash', { fontCharacter: '\\eabd' })),
      (tr.circuitBoard = new tr('circuit-board', { fontCharacter: '\\eabe' })),
      (tr.clearAll = new tr('clear-all', { fontCharacter: '\\eabf' })),
      (tr.clippy = new tr('clippy', { fontCharacter: '\\eac0' })),
      (tr.closeAll = new tr('close-all', { fontCharacter: '\\eac1' })),
      (tr.cloudDownload = new tr('cloud-download', {
        fontCharacter: '\\eac2',
      })),
      (tr.cloudUpload = new tr('cloud-upload', { fontCharacter: '\\eac3' })),
      (tr.code = new tr('code', { fontCharacter: '\\eac4' })),
      (tr.collapseAll = new tr('collapse-all', { fontCharacter: '\\eac5' })),
      (tr.colorMode = new tr('color-mode', { fontCharacter: '\\eac6' })),
      (tr.commentDiscussion = new tr('comment-discussion', {
        fontCharacter: '\\eac7',
      })),
      (tr.compareChanges = new tr('compare-changes', {
        fontCharacter: '\\eafd',
      })),
      (tr.creditCard = new tr('credit-card', { fontCharacter: '\\eac9' })),
      (tr.dash = new tr('dash', { fontCharacter: '\\eacc' })),
      (tr.dashboard = new tr('dashboard', { fontCharacter: '\\eacd' })),
      (tr.database = new tr('database', { fontCharacter: '\\eace' })),
      (tr.debugContinue = new tr('debug-continue', {
        fontCharacter: '\\eacf',
      })),
      (tr.debugDisconnect = new tr('debug-disconnect', {
        fontCharacter: '\\ead0',
      })),
      (tr.debugPause = new tr('debug-pause', { fontCharacter: '\\ead1' })),
      (tr.debugRestart = new tr('debug-restart', { fontCharacter: '\\ead2' })),
      (tr.debugStart = new tr('debug-start', { fontCharacter: '\\ead3' })),
      (tr.debugStepInto = new tr('debug-step-into', {
        fontCharacter: '\\ead4',
      })),
      (tr.debugStepOut = new tr('debug-step-out', { fontCharacter: '\\ead5' })),
      (tr.debugStepOver = new tr('debug-step-over', {
        fontCharacter: '\\ead6',
      })),
      (tr.debugStop = new tr('debug-stop', { fontCharacter: '\\ead7' })),
      (tr.debug = new tr('debug', { fontCharacter: '\\ead8' })),
      (tr.deviceCameraVideo = new tr('device-camera-video', {
        fontCharacter: '\\ead9',
      })),
      (tr.deviceCamera = new tr('device-camera', { fontCharacter: '\\eada' })),
      (tr.deviceMobile = new tr('device-mobile', { fontCharacter: '\\eadb' })),
      (tr.diffAdded = new tr('diff-added', { fontCharacter: '\\eadc' })),
      (tr.diffIgnored = new tr('diff-ignored', { fontCharacter: '\\eadd' })),
      (tr.diffModified = new tr('diff-modified', { fontCharacter: '\\eade' })),
      (tr.diffRemoved = new tr('diff-removed', { fontCharacter: '\\eadf' })),
      (tr.diffRenamed = new tr('diff-renamed', { fontCharacter: '\\eae0' })),
      (tr.diff = new tr('diff', { fontCharacter: '\\eae1' })),
      (tr.discard = new tr('discard', { fontCharacter: '\\eae2' })),
      (tr.editorLayout = new tr('editor-layout', { fontCharacter: '\\eae3' })),
      (tr.emptyWindow = new tr('empty-window', { fontCharacter: '\\eae4' })),
      (tr.exclude = new tr('exclude', { fontCharacter: '\\eae5' })),
      (tr.extensions = new tr('extensions', { fontCharacter: '\\eae6' })),
      (tr.eyeClosed = new tr('eye-closed', { fontCharacter: '\\eae7' })),
      (tr.fileBinary = new tr('file-binary', { fontCharacter: '\\eae8' })),
      (tr.fileCode = new tr('file-code', { fontCharacter: '\\eae9' })),
      (tr.fileMedia = new tr('file-media', { fontCharacter: '\\eaea' })),
      (tr.filePdf = new tr('file-pdf', { fontCharacter: '\\eaeb' })),
      (tr.fileSubmodule = new tr('file-submodule', {
        fontCharacter: '\\eaec',
      })),
      (tr.fileSymlinkDirectory = new tr('file-symlink-directory', {
        fontCharacter: '\\eaed',
      })),
      (tr.fileSymlinkFile = new tr('file-symlink-file', {
        fontCharacter: '\\eaee',
      })),
      (tr.fileZip = new tr('file-zip', { fontCharacter: '\\eaef' })),
      (tr.files = new tr('files', { fontCharacter: '\\eaf0' })),
      (tr.filter = new tr('filter', { fontCharacter: '\\eaf1' })),
      (tr.flame = new tr('flame', { fontCharacter: '\\eaf2' })),
      (tr.foldDown = new tr('fold-down', { fontCharacter: '\\eaf3' })),
      (tr.foldUp = new tr('fold-up', { fontCharacter: '\\eaf4' })),
      (tr.fold = new tr('fold', { fontCharacter: '\\eaf5' })),
      (tr.folderActive = new tr('folder-active', { fontCharacter: '\\eaf6' })),
      (tr.folderOpened = new tr('folder-opened', { fontCharacter: '\\eaf7' })),
      (tr.gear = new tr('gear', { fontCharacter: '\\eaf8' })),
      (tr.gift = new tr('gift', { fontCharacter: '\\eaf9' })),
      (tr.gistSecret = new tr('gist-secret', { fontCharacter: '\\eafa' })),
      (tr.gist = new tr('gist', { fontCharacter: '\\eafb' })),
      (tr.gitCommit = new tr('git-commit', { fontCharacter: '\\eafc' })),
      (tr.gitCompare = new tr('git-compare', { fontCharacter: '\\eafd' })),
      (tr.gitMerge = new tr('git-merge', { fontCharacter: '\\eafe' })),
      (tr.githubAction = new tr('github-action', { fontCharacter: '\\eaff' })),
      (tr.githubAlt = new tr('github-alt', { fontCharacter: '\\eb00' })),
      (tr.globe = new tr('globe', { fontCharacter: '\\eb01' })),
      (tr.grabber = new tr('grabber', { fontCharacter: '\\eb02' })),
      (tr.graph = new tr('graph', { fontCharacter: '\\eb03' })),
      (tr.gripper = new tr('gripper', { fontCharacter: '\\eb04' })),
      (tr.heart = new tr('heart', { fontCharacter: '\\eb05' })),
      (tr.home = new tr('home', { fontCharacter: '\\eb06' })),
      (tr.horizontalRule = new tr('horizontal-rule', {
        fontCharacter: '\\eb07',
      })),
      (tr.hubot = new tr('hubot', { fontCharacter: '\\eb08' })),
      (tr.inbox = new tr('inbox', { fontCharacter: '\\eb09' })),
      (tr.issueClosed = new tr('issue-closed', { fontCharacter: '\\eba4' })),
      (tr.issueReopened = new tr('issue-reopened', {
        fontCharacter: '\\eb0b',
      })),
      (tr.issues = new tr('issues', { fontCharacter: '\\eb0c' })),
      (tr.italic = new tr('italic', { fontCharacter: '\\eb0d' })),
      (tr.jersey = new tr('jersey', { fontCharacter: '\\eb0e' })),
      (tr.json = new tr('json', { fontCharacter: '\\eb0f' })),
      (tr.kebabVertical = new tr('kebab-vertical', {
        fontCharacter: '\\eb10',
      })),
      (tr.key = new tr('key', { fontCharacter: '\\eb11' })),
      (tr.law = new tr('law', { fontCharacter: '\\eb12' })),
      (tr.lightbulbAutofix = new tr('lightbulb-autofix', {
        fontCharacter: '\\eb13',
      })),
      (tr.linkExternal = new tr('link-external', { fontCharacter: '\\eb14' })),
      (tr.link = new tr('link', { fontCharacter: '\\eb15' })),
      (tr.listOrdered = new tr('list-ordered', { fontCharacter: '\\eb16' })),
      (tr.listUnordered = new tr('list-unordered', {
        fontCharacter: '\\eb17',
      })),
      (tr.liveShare = new tr('live-share', { fontCharacter: '\\eb18' })),
      (tr.loading = new tr('loading', { fontCharacter: '\\eb19' })),
      (tr.location = new tr('location', { fontCharacter: '\\eb1a' })),
      (tr.mailRead = new tr('mail-read', { fontCharacter: '\\eb1b' })),
      (tr.mail = new tr('mail', { fontCharacter: '\\eb1c' })),
      (tr.markdown = new tr('markdown', { fontCharacter: '\\eb1d' })),
      (tr.megaphone = new tr('megaphone', { fontCharacter: '\\eb1e' })),
      (tr.mention = new tr('mention', { fontCharacter: '\\eb1f' })),
      (tr.milestone = new tr('milestone', { fontCharacter: '\\eb20' })),
      (tr.mortarBoard = new tr('mortar-board', { fontCharacter: '\\eb21' })),
      (tr.move = new tr('move', { fontCharacter: '\\eb22' })),
      (tr.multipleWindows = new tr('multiple-windows', {
        fontCharacter: '\\eb23',
      })),
      (tr.mute = new tr('mute', { fontCharacter: '\\eb24' })),
      (tr.noNewline = new tr('no-newline', { fontCharacter: '\\eb25' })),
      (tr.note = new tr('note', { fontCharacter: '\\eb26' })),
      (tr.octoface = new tr('octoface', { fontCharacter: '\\eb27' })),
      (tr.openPreview = new tr('open-preview', { fontCharacter: '\\eb28' })),
      (tr.package_ = new tr('package', { fontCharacter: '\\eb29' })),
      (tr.paintcan = new tr('paintcan', { fontCharacter: '\\eb2a' })),
      (tr.pin = new tr('pin', { fontCharacter: '\\eb2b' })),
      (tr.play = new tr('play', { fontCharacter: '\\eb2c' })),
      (tr.run = new tr('run', { fontCharacter: '\\eb2c' })),
      (tr.plug = new tr('plug', { fontCharacter: '\\eb2d' })),
      (tr.preserveCase = new tr('preserve-case', { fontCharacter: '\\eb2e' })),
      (tr.preview = new tr('preview', { fontCharacter: '\\eb2f' })),
      (tr.project = new tr('project', { fontCharacter: '\\eb30' })),
      (tr.pulse = new tr('pulse', { fontCharacter: '\\eb31' })),
      (tr.question = new tr('question', { fontCharacter: '\\eb32' })),
      (tr.quote = new tr('quote', { fontCharacter: '\\eb33' })),
      (tr.radioTower = new tr('radio-tower', { fontCharacter: '\\eb34' })),
      (tr.reactions = new tr('reactions', { fontCharacter: '\\eb35' })),
      (tr.references = new tr('references', { fontCharacter: '\\eb36' })),
      (tr.refresh = new tr('refresh', { fontCharacter: '\\eb37' })),
      (tr.regex = new tr('regex', { fontCharacter: '\\eb38' })),
      (tr.remoteExplorer = new tr('remote-explorer', {
        fontCharacter: '\\eb39',
      })),
      (tr.remote = new tr('remote', { fontCharacter: '\\eb3a' })),
      (tr.remove = new tr('remove', { fontCharacter: '\\eb3b' })),
      (tr.replaceAll = new tr('replace-all', { fontCharacter: '\\eb3c' })),
      (tr.replace = new tr('replace', { fontCharacter: '\\eb3d' })),
      (tr.repoClone = new tr('repo-clone', { fontCharacter: '\\eb3e' })),
      (tr.repoForcePush = new tr('repo-force-push', {
        fontCharacter: '\\eb3f',
      })),
      (tr.repoPull = new tr('repo-pull', { fontCharacter: '\\eb40' })),
      (tr.repoPush = new tr('repo-push', { fontCharacter: '\\eb41' })),
      (tr.report = new tr('report', { fontCharacter: '\\eb42' })),
      (tr.requestChanges = new tr('request-changes', {
        fontCharacter: '\\eb43',
      })),
      (tr.rocket = new tr('rocket', { fontCharacter: '\\eb44' })),
      (tr.rootFolderOpened = new tr('root-folder-opened', {
        fontCharacter: '\\eb45',
      })),
      (tr.rootFolder = new tr('root-folder', { fontCharacter: '\\eb46' })),
      (tr.rss = new tr('rss', { fontCharacter: '\\eb47' })),
      (tr.ruby = new tr('ruby', { fontCharacter: '\\eb48' })),
      (tr.saveAll = new tr('save-all', { fontCharacter: '\\eb49' })),
      (tr.saveAs = new tr('save-as', { fontCharacter: '\\eb4a' })),
      (tr.save = new tr('save', { fontCharacter: '\\eb4b' })),
      (tr.screenFull = new tr('screen-full', { fontCharacter: '\\eb4c' })),
      (tr.screenNormal = new tr('screen-normal', { fontCharacter: '\\eb4d' })),
      (tr.searchStop = new tr('search-stop', { fontCharacter: '\\eb4e' })),
      (tr.server = new tr('server', { fontCharacter: '\\eb50' })),
      (tr.settingsGear = new tr('settings-gear', { fontCharacter: '\\eb51' })),
      (tr.settings = new tr('settings', { fontCharacter: '\\eb52' })),
      (tr.shield = new tr('shield', { fontCharacter: '\\eb53' })),
      (tr.smiley = new tr('smiley', { fontCharacter: '\\eb54' })),
      (tr.sortPrecedence = new tr('sort-precedence', {
        fontCharacter: '\\eb55',
      })),
      (tr.splitHorizontal = new tr('split-horizontal', {
        fontCharacter: '\\eb56',
      })),
      (tr.splitVertical = new tr('split-vertical', {
        fontCharacter: '\\eb57',
      })),
      (tr.squirrel = new tr('squirrel', { fontCharacter: '\\eb58' })),
      (tr.starFull = new tr('star-full', { fontCharacter: '\\eb59' })),
      (tr.starHalf = new tr('star-half', { fontCharacter: '\\eb5a' })),
      (tr.symbolClass = new tr('symbol-class', { fontCharacter: '\\eb5b' })),
      (tr.symbolColor = new tr('symbol-color', { fontCharacter: '\\eb5c' })),
      (tr.symbolCustomColor = new tr('symbol-customcolor', {
        fontCharacter: '\\eb5c',
      })),
      (tr.symbolConstant = new tr('symbol-constant', {
        fontCharacter: '\\eb5d',
      })),
      (tr.symbolEnumMember = new tr('symbol-enum-member', {
        fontCharacter: '\\eb5e',
      })),
      (tr.symbolField = new tr('symbol-field', { fontCharacter: '\\eb5f' })),
      (tr.symbolFile = new tr('symbol-file', { fontCharacter: '\\eb60' })),
      (tr.symbolInterface = new tr('symbol-interface', {
        fontCharacter: '\\eb61',
      })),
      (tr.symbolKeyword = new tr('symbol-keyword', {
        fontCharacter: '\\eb62',
      })),
      (tr.symbolMisc = new tr('symbol-misc', { fontCharacter: '\\eb63' })),
      (tr.symbolOperator = new tr('symbol-operator', {
        fontCharacter: '\\eb64',
      })),
      (tr.symbolProperty = new tr('symbol-property', {
        fontCharacter: '\\eb65',
      })),
      (tr.wrench = new tr('wrench', { fontCharacter: '\\eb65' })),
      (tr.wrenchSubaction = new tr('wrench-subaction', {
        fontCharacter: '\\eb65',
      })),
      (tr.symbolSnippet = new tr('symbol-snippet', {
        fontCharacter: '\\eb66',
      })),
      (tr.tasklist = new tr('tasklist', { fontCharacter: '\\eb67' })),
      (tr.telescope = new tr('telescope', { fontCharacter: '\\eb68' })),
      (tr.textSize = new tr('text-size', { fontCharacter: '\\eb69' })),
      (tr.threeBars = new tr('three-bars', { fontCharacter: '\\eb6a' })),
      (tr.thumbsdown = new tr('thumbsdown', { fontCharacter: '\\eb6b' })),
      (tr.thumbsup = new tr('thumbsup', { fontCharacter: '\\eb6c' })),
      (tr.tools = new tr('tools', { fontCharacter: '\\eb6d' })),
      (tr.triangleDown = new tr('triangle-down', { fontCharacter: '\\eb6e' })),
      (tr.triangleLeft = new tr('triangle-left', { fontCharacter: '\\eb6f' })),
      (tr.triangleRight = new tr('triangle-right', {
        fontCharacter: '\\eb70',
      })),
      (tr.triangleUp = new tr('triangle-up', { fontCharacter: '\\eb71' })),
      (tr.twitter = new tr('twitter', { fontCharacter: '\\eb72' })),
      (tr.unfold = new tr('unfold', { fontCharacter: '\\eb73' })),
      (tr.unlock = new tr('unlock', { fontCharacter: '\\eb74' })),
      (tr.unmute = new tr('unmute', { fontCharacter: '\\eb75' })),
      (tr.unverified = new tr('unverified', { fontCharacter: '\\eb76' })),
      (tr.verified = new tr('verified', { fontCharacter: '\\eb77' })),
      (tr.versions = new tr('versions', { fontCharacter: '\\eb78' })),
      (tr.vmActive = new tr('vm-active', { fontCharacter: '\\eb79' })),
      (tr.vmOutline = new tr('vm-outline', { fontCharacter: '\\eb7a' })),
      (tr.vmRunning = new tr('vm-running', { fontCharacter: '\\eb7b' })),
      (tr.watch = new tr('watch', { fontCharacter: '\\eb7c' })),
      (tr.whitespace = new tr('whitespace', { fontCharacter: '\\eb7d' })),
      (tr.wholeWord = new tr('whole-word', { fontCharacter: '\\eb7e' })),
      (tr.window = new tr('window', { fontCharacter: '\\eb7f' })),
      (tr.wordWrap = new tr('word-wrap', { fontCharacter: '\\eb80' })),
      (tr.zoomIn = new tr('zoom-in', { fontCharacter: '\\eb81' })),
      (tr.zoomOut = new tr('zoom-out', { fontCharacter: '\\eb82' })),
      (tr.listFilter = new tr('list-filter', { fontCharacter: '\\eb83' })),
      (tr.listFlat = new tr('list-flat', { fontCharacter: '\\eb84' })),
      (tr.listSelection = new tr('list-selection', {
        fontCharacter: '\\eb85',
      })),
      (tr.selection = new tr('selection', { fontCharacter: '\\eb85' })),
      (tr.listTree = new tr('list-tree', { fontCharacter: '\\eb86' })),
      (tr.debugBreakpointFunctionUnverified = new tr(
        'debug-breakpoint-function-unverified',
        { fontCharacter: '\\eb87' },
      )),
      (tr.debugBreakpointFunction = new tr('debug-breakpoint-function', {
        fontCharacter: '\\eb88',
      })),
      (tr.debugBreakpointFunctionDisabled = new tr(
        'debug-breakpoint-function-disabled',
        { fontCharacter: '\\eb88' },
      )),
      (tr.debugStackframeActive = new tr('debug-stackframe-active', {
        fontCharacter: '\\eb89',
      })),
      (tr.debugStackframeDot = new tr('debug-stackframe-dot', {
        fontCharacter: '\\eb8a',
      })),
      (tr.debugStackframe = new tr('debug-stackframe', {
        fontCharacter: '\\eb8b',
      })),
      (tr.debugStackframeFocused = new tr('debug-stackframe-focused', {
        fontCharacter: '\\eb8b',
      })),
      (tr.debugBreakpointUnsupported = new tr('debug-breakpoint-unsupported', {
        fontCharacter: '\\eb8c',
      })),
      (tr.symbolString = new tr('symbol-string', { fontCharacter: '\\eb8d' })),
      (tr.debugReverseContinue = new tr('debug-reverse-continue', {
        fontCharacter: '\\eb8e',
      })),
      (tr.debugStepBack = new tr('debug-step-back', {
        fontCharacter: '\\eb8f',
      })),
      (tr.debugRestartFrame = new tr('debug-restart-frame', {
        fontCharacter: '\\eb90',
      })),
      (tr.callIncoming = new tr('call-incoming', { fontCharacter: '\\eb92' })),
      (tr.callOutgoing = new tr('call-outgoing', { fontCharacter: '\\eb93' })),
      (tr.menu = new tr('menu', { fontCharacter: '\\eb94' })),
      (tr.expandAll = new tr('expand-all', { fontCharacter: '\\eb95' })),
      (tr.feedback = new tr('feedback', { fontCharacter: '\\eb96' })),
      (tr.groupByRefType = new tr('group-by-ref-type', {
        fontCharacter: '\\eb97',
      })),
      (tr.ungroupByRefType = new tr('ungroup-by-ref-type', {
        fontCharacter: '\\eb98',
      })),
      (tr.account = new tr('account', { fontCharacter: '\\eb99' })),
      (tr.bellDot = new tr('bell-dot', { fontCharacter: '\\eb9a' })),
      (tr.debugConsole = new tr('debug-console', { fontCharacter: '\\eb9b' })),
      (tr.library = new tr('library', { fontCharacter: '\\eb9c' })),
      (tr.output = new tr('output', { fontCharacter: '\\eb9d' })),
      (tr.runAll = new tr('run-all', { fontCharacter: '\\eb9e' })),
      (tr.syncIgnored = new tr('sync-ignored', { fontCharacter: '\\eb9f' })),
      (tr.pinned = new tr('pinned', { fontCharacter: '\\eba0' })),
      (tr.githubInverted = new tr('github-inverted', {
        fontCharacter: '\\eba1',
      })),
      (tr.debugAlt = new tr('debug-alt', { fontCharacter: '\\eb91' })),
      (tr.serverProcess = new tr('server-process', {
        fontCharacter: '\\eba2',
      })),
      (tr.serverEnvironment = new tr('server-environment', {
        fontCharacter: '\\eba3',
      })),
      (tr.pass = new tr('pass', { fontCharacter: '\\eba4' })),
      (tr.stopCircle = new tr('stop-circle', { fontCharacter: '\\eba5' })),
      (tr.playCircle = new tr('play-circle', { fontCharacter: '\\eba6' })),
      (tr.record = new tr('record', { fontCharacter: '\\eba7' })),
      (tr.debugAltSmall = new tr('debug-alt-small', {
        fontCharacter: '\\eba8',
      })),
      (tr.vmConnect = new tr('vm-connect', { fontCharacter: '\\eba9' })),
      (tr.cloud = new tr('cloud', { fontCharacter: '\\ebaa' })),
      (tr.merge = new tr('merge', { fontCharacter: '\\ebab' })),
      (tr.exportIcon = new tr('export', { fontCharacter: '\\ebac' })),
      (tr.graphLeft = new tr('graph-left', { fontCharacter: '\\ebad' })),
      (tr.magnet = new tr('magnet', { fontCharacter: '\\ebae' })),
      (tr.notebook = new tr('notebook', { fontCharacter: '\\ebaf' })),
      (tr.redo = new tr('redo', { fontCharacter: '\\ebb0' })),
      (tr.checkAll = new tr('check-all', { fontCharacter: '\\ebb1' })),
      (tr.pinnedDirty = new tr('pinned-dirty', { fontCharacter: '\\ebb2' })),
      (tr.passFilled = new tr('pass-filled', { fontCharacter: '\\ebb3' })),
      (tr.circleLargeFilled = new tr('circle-large-filled', {
        fontCharacter: '\\ebb4',
      })),
      (tr.circleLargeOutline = new tr('circle-large-outline', {
        fontCharacter: '\\ebb5',
      })),
      (tr.combine = new tr('combine', { fontCharacter: '\\ebb6' })),
      (tr.gather = new tr('gather', { fontCharacter: '\\ebb6' })),
      (tr.table = new tr('table', { fontCharacter: '\\ebb7' })),
      (tr.variableGroup = new tr('variable-group', {
        fontCharacter: '\\ebb8',
      })),
      (tr.typeHierarchy = new tr('type-hierarchy', {
        fontCharacter: '\\ebb9',
      })),
      (tr.typeHierarchySub = new tr('type-hierarchy-sub', {
        fontCharacter: '\\ebba',
      })),
      (tr.typeHierarchySuper = new tr('type-hierarchy-super', {
        fontCharacter: '\\ebbb',
      })),
      (tr.gitPullRequestCreate = new tr('git-pull-request-create', {
        fontCharacter: '\\ebbc',
      })),
      (tr.runAbove = new tr('run-above', { fontCharacter: '\\ebbd' })),
      (tr.runBelow = new tr('run-below', { fontCharacter: '\\ebbe' })),
      (tr.notebookTemplate = new tr('notebook-template', {
        fontCharacter: '\\ebbf',
      })),
      (tr.debugRerun = new tr('debug-rerun', { fontCharacter: '\\ebc0' })),
      (tr.workspaceTrusted = new tr('workspace-trusted', {
        fontCharacter: '\\ebc1',
      })),
      (tr.workspaceUntrusted = new tr('workspace-untrusted', {
        fontCharacter: '\\ebc2',
      })),
      (tr.workspaceUnspecified = new tr('workspace-unspecified', {
        fontCharacter: '\\ebc3',
      })),
      (tr.terminalCmd = new tr('terminal-cmd', { fontCharacter: '\\ebc4' })),
      (tr.terminalDebian = new tr('terminal-debian', {
        fontCharacter: '\\ebc5',
      })),
      (tr.terminalLinux = new tr('terminal-linux', {
        fontCharacter: '\\ebc6',
      })),
      (tr.terminalPowershell = new tr('terminal-powershell', {
        fontCharacter: '\\ebc7',
      })),
      (tr.terminalTmux = new tr('terminal-tmux', { fontCharacter: '\\ebc8' })),
      (tr.terminalUbuntu = new tr('terminal-ubuntu', {
        fontCharacter: '\\ebc9',
      })),
      (tr.terminalBash = new tr('terminal-bash', { fontCharacter: '\\ebca' })),
      (tr.arrowSwap = new tr('arrow-swap', { fontCharacter: '\\ebcb' })),
      (tr.copy = new tr('copy', { fontCharacter: '\\ebcc' })),
      (tr.personAdd = new tr('person-add', { fontCharacter: '\\ebcd' })),
      (tr.filterFilled = new tr('filter-filled', { fontCharacter: '\\ebce' })),
      (tr.wand = new tr('wand', { fontCharacter: '\\ebcf' })),
      (tr.debugLineByLine = new tr('debug-line-by-line', {
        fontCharacter: '\\ebd0',
      })),
      (tr.inspect = new tr('inspect', { fontCharacter: '\\ebd1' })),
      (tr.layers = new tr('layers', { fontCharacter: '\\ebd2' })),
      (tr.layersDot = new tr('layers-dot', { fontCharacter: '\\ebd3' })),
      (tr.layersActive = new tr('layers-active', { fontCharacter: '\\ebd4' })),
      (tr.compass = new tr('compass', { fontCharacter: '\\ebd5' })),
      (tr.compassDot = new tr('compass-dot', { fontCharacter: '\\ebd6' })),
      (tr.compassActive = new tr('compass-active', {
        fontCharacter: '\\ebd7',
      })),
      (tr.azure = new tr('azure', { fontCharacter: '\\ebd8' })),
      (tr.issueDraft = new tr('issue-draft', { fontCharacter: '\\ebd9' })),
      (tr.gitPullRequestClosed = new tr('git-pull-request-closed', {
        fontCharacter: '\\ebda',
      })),
      (tr.gitPullRequestDraft = new tr('git-pull-request-draft', {
        fontCharacter: '\\ebdb',
      })),
      (tr.debugAll = new tr('debug-all', { fontCharacter: '\\ebdc' })),
      (tr.debugCoverage = new tr('debug-coverage', {
        fontCharacter: '\\ebdd',
      })),
      (tr.runErrors = new tr('run-errors', { fontCharacter: '\\ebde' })),
      (tr.folderLibrary = new tr('folder-library', {
        fontCharacter: '\\ebdf',
      })),
      (tr.debugContinueSmall = new tr('debug-continue-small', {
        fontCharacter: '\\ebe0',
      })),
      (tr.beakerStop = new tr('beaker-stop', { fontCharacter: '\\ebe1' })),
      (tr.graphLine = new tr('graph-line', { fontCharacter: '\\ebe2' })),
      (tr.graphScatter = new tr('graph-scatter', { fontCharacter: '\\ebe3' })),
      (tr.pieChart = new tr('pie-chart', { fontCharacter: '\\ebe4' })),
      (tr.bracket = new tr('bracket', tr.json.definition)),
      (tr.bracketDot = new tr('bracket-dot', { fontCharacter: '\\ebe5' })),
      (tr.bracketError = new tr('bracket-error', { fontCharacter: '\\ebe6' })),
      (tr.lockSmall = new tr('lock-small', { fontCharacter: '\\ebe7' })),
      (tr.azureDevops = new tr('azure-devops', { fontCharacter: '\\ebe8' })),
      (tr.verifiedFilled = new tr('verified-filled', {
        fontCharacter: '\\ebe9',
      })),
      (tr.newLine = new tr('newline', { fontCharacter: '\\ebea' })),
      (tr.layout = new tr('layout', { fontCharacter: '\\ebeb' })),
      (tr.layoutActivitybarLeft = new tr('layout-activitybar-left', {
        fontCharacter: '\\ebec',
      })),
      (tr.layoutActivitybarRight = new tr('layout-activitybar-right', {
        fontCharacter: '\\ebed',
      })),
      (tr.layoutPanelLeft = new tr('layout-panel-left', {
        fontCharacter: '\\ebee',
      })),
      (tr.layoutPanelCenter = new tr('layout-panel-center', {
        fontCharacter: '\\ebef',
      })),
      (tr.layoutPanelJustify = new tr('layout-panel-justify', {
        fontCharacter: '\\ebf0',
      })),
      (tr.layoutPanelRight = new tr('layout-panel-right', {
        fontCharacter: '\\ebf1',
      })),
      (tr.layoutPanel = new tr('layout-panel', { fontCharacter: '\\ebf2' })),
      (tr.layoutSidebarLeft = new tr('layout-sidebar-left', {
        fontCharacter: '\\ebf3',
      })),
      (tr.layoutSidebarRight = new tr('layout-sidebar-right', {
        fontCharacter: '\\ebf4',
      })),
      (tr.layoutStatusbar = new tr('layout-statusbar', {
        fontCharacter: '\\ebf5',
      })),
      (tr.layoutMenubar = new tr('layout-menubar', {
        fontCharacter: '\\ebf6',
      })),
      (tr.layoutCentered = new tr('layout-centered', {
        fontCharacter: '\\ebf7',
      })),
      (tr.target = new tr('target', { fontCharacter: '\\ebf8' })),
      (tr.indent = new tr('indent', { fontCharacter: '\\ebf9' })),
      (tr.recordSmall = new tr('record-small', { fontCharacter: '\\ebfa' })),
      (tr.errorSmall = new tr('error-small', { fontCharacter: '\\ebfb' })),
      (tr.arrowCircleDown = new tr('arrow-circle-down', {
        fontCharacter: '\\ebfc',
      })),
      (tr.arrowCircleLeft = new tr('arrow-circle-left', {
        fontCharacter: '\\ebfd',
      })),
      (tr.arrowCircleRight = new tr('arrow-circle-right', {
        fontCharacter: '\\ebfe',
      })),
      (tr.arrowCircleUp = new tr('arrow-circle-up', {
        fontCharacter: '\\ebff',
      })),
      (tr.dialogError = new tr('dialog-error', tr.error.definition)),
      (tr.dialogWarning = new tr('dialog-warning', tr.warning.definition)),
      (tr.dialogInfo = new tr('dialog-info', tr.info.definition)),
      (tr.dialogClose = new tr('dialog-close', tr.close.definition)),
      (tr.treeItemExpanded = new tr(
        'tree-item-expanded',
        tr.chevronDown.definition,
      )),
      (tr.treeFilterOnTypeOn = new tr(
        'tree-filter-on-type-on',
        tr.listFilter.definition,
      )),
      (tr.treeFilterOnTypeOff = new tr(
        'tree-filter-on-type-off',
        tr.listSelection.definition,
      )),
      (tr.treeFilterClear = new tr('tree-filter-clear', tr.close.definition)),
      (tr.treeItemLoading = new tr('tree-item-loading', tr.loading.definition)),
      (tr.menuSelection = new tr('menu-selection', tr.check.definition)),
      (tr.menuSubmenu = new tr('menu-submenu', tr.chevronRight.definition)),
      (tr.menuBarMore = new tr('menubar-more', tr.more.definition)),
      (tr.scrollbarButtonLeft = new tr(
        'scrollbar-button-left',
        tr.triangleLeft.definition,
      )),
      (tr.scrollbarButtonRight = new tr(
        'scrollbar-button-right',
        tr.triangleRight.definition,
      )),
      (tr.scrollbarButtonUp = new tr(
        'scrollbar-button-up',
        tr.triangleUp.definition,
      )),
      (tr.scrollbarButtonDown = new tr(
        'scrollbar-button-down',
        tr.triangleDown.definition,
      )),
      (tr.toolBarMore = new tr('toolbar-more', tr.more.definition)),
      (tr.quickInputBack = new tr('quick-input-back', tr.arrowLeft.definition)),
      (function (e) {
        (e.iconNameSegment = '[A-Za-z0-9]+'),
          (e.iconNameExpression = '[A-Za-z0-9-]+'),
          (e.iconModifierExpression = '~[A-Za-z]+'),
          (e.iconNameCharacter = '[A-Za-z0-9~-]');
        var t = new RegExp(
          '^('
            .concat(e.iconNameExpression, ')(')
            .concat(e.iconModifierExpression, ')?$'),
        );
        function n(e) {
          if (e instanceof tr) return ['codicon', 'codicon-' + e.id];
          var r = t.exec(e.id);
          if (!r) return n(tr.error);
          var i = P(r, 3),
            a = i[1],
            o = i[2],
            s = ['codicon', 'codicon-' + a];
          return o && s.push('codicon-modifier-' + o.substr(1)), s;
        }
        function r(e) {
          return n(e).join(' ');
        }
        function i(e) {
          return '.' + n(e).join('.');
        }
        (e.asClassNameArray = n), (e.asClassName = r), (e.asCSSSelector = i);
      })(er || (er = {}));
    var nr,
      rr,
      ir,
      ar,
      or,
      sr = (function () {
        function e(t, n, r) {
          v(this, e),
            (this._tokenBrand = void 0),
            (this.offset = t),
            (this.type = n),
            (this.language = r);
        }
        return (
          g(e, [
            {
              key: 'toString',
              value: function () {
                return '(' + this.offset + ', ' + this.type + ')';
              },
            },
          ]),
          e
        );
      })();
    (function (e) {
      var t = new Map();
      function n(e) {
        var n = t.get(e);
        return (
          n ||
            (console.info('No codicon found for CompletionItemKind ' + e),
            (n = tr.symbolProperty)),
          n
        );
      }
      t.set(0, tr.symbolMethod),
        t.set(1, tr.symbolFunction),
        t.set(2, tr.symbolConstructor),
        t.set(3, tr.symbolField),
        t.set(4, tr.symbolVariable),
        t.set(5, tr.symbolClass),
        t.set(6, tr.symbolStruct),
        t.set(7, tr.symbolInterface),
        t.set(8, tr.symbolModule),
        t.set(9, tr.symbolProperty),
        t.set(10, tr.symbolEvent),
        t.set(11, tr.symbolOperator),
        t.set(12, tr.symbolUnit),
        t.set(13, tr.symbolValue),
        t.set(15, tr.symbolEnum),
        t.set(14, tr.symbolConstant),
        t.set(15, tr.symbolEnum),
        t.set(16, tr.symbolEnumMember),
        t.set(17, tr.symbolKeyword),
        t.set(27, tr.symbolSnippet),
        t.set(18, tr.symbolText),
        t.set(19, tr.symbolColor),
        t.set(20, tr.symbolFile),
        t.set(21, tr.symbolReference),
        t.set(22, tr.symbolCustomColor),
        t.set(23, tr.symbolFolder),
        t.set(24, tr.symbolTypeParameter),
        t.set(25, tr.account),
        t.set(26, tr.issues),
        (e.toIcon = n);
      var r = new Map();
      function i(e, t) {
        var n = r.get(e);
        return 'undefined' !== typeof n || t || (n = 9), n;
      }
      r.set('method', 0),
        r.set('function', 1),
        r.set('constructor', 2),
        r.set('field', 3),
        r.set('variable', 4),
        r.set('class', 5),
        r.set('struct', 6),
        r.set('interface', 7),
        r.set('module', 8),
        r.set('property', 9),
        r.set('event', 10),
        r.set('operator', 11),
        r.set('unit', 12),
        r.set('value', 13),
        r.set('constant', 14),
        r.set('enum', 15),
        r.set('enum-member', 16),
        r.set('enumMember', 16),
        r.set('keyword', 17),
        r.set('snippet', 27),
        r.set('text', 18),
        r.set('color', 19),
        r.set('file', 20),
        r.set('reference', 21),
        r.set('customcolor', 22),
        r.set('folder', 23),
        r.set('type-parameter', 24),
        r.set('typeParameter', 24),
        r.set('account', 25),
        r.set('issue', 26),
        (e.fromString = i);
    })(nr || (nr = {})),
      (function (e) {
        (e[(e['Automatic'] = 0)] = 'Automatic'),
          (e[(e['Explicit'] = 1)] = 'Explicit');
      })(rr || (rr = {})),
      (function (e) {
        (e[(e['Invoke'] = 1)] = 'Invoke'),
          (e[(e['TriggerCharacter'] = 2)] = 'TriggerCharacter'),
          (e[(e['ContentChange'] = 3)] = 'ContentChange');
      })(ir || (ir = {})),
      (function (e) {
        (e[(e['Text'] = 0)] = 'Text'),
          (e[(e['Read'] = 1)] = 'Read'),
          (e[(e['Write'] = 2)] = 'Write');
      })(ar || (ar = {})),
      (function (e) {
        var t = new Map();
        function n(e) {
          var n = t.get(e);
          return (
            n ||
              (console.info('No codicon found for SymbolKind ' + e),
              (n = tr.symbolProperty)),
            n
          );
        }
        t.set(0, tr.symbolFile),
          t.set(1, tr.symbolModule),
          t.set(2, tr.symbolNamespace),
          t.set(3, tr.symbolPackage),
          t.set(4, tr.symbolClass),
          t.set(5, tr.symbolMethod),
          t.set(6, tr.symbolProperty),
          t.set(7, tr.symbolField),
          t.set(8, tr.symbolConstructor),
          t.set(9, tr.symbolEnum),
          t.set(10, tr.symbolInterface),
          t.set(11, tr.symbolFunction),
          t.set(12, tr.symbolVariable),
          t.set(13, tr.symbolConstant),
          t.set(14, tr.symbolString),
          t.set(15, tr.symbolNumber),
          t.set(16, tr.symbolBoolean),
          t.set(17, tr.symbolArray),
          t.set(18, tr.symbolObject),
          t.set(19, tr.symbolKey),
          t.set(20, tr.symbolNull),
          t.set(21, tr.symbolEnumMember),
          t.set(22, tr.symbolStruct),
          t.set(23, tr.symbolEvent),
          t.set(24, tr.symbolOperator),
          t.set(25, tr.symbolTypeParameter),
          (e.toIcon = n);
      })(or || (or = {}));
    var ur,
      lr,
      cr = g(function e(t) {
        v(this, e), (this.value = t);
      });
    (cr.Comment = new cr('comment')),
      (cr.Imports = new cr('imports')),
      (cr.Region = new cr('region')),
      (function (e) {
        function t(e) {
          return (
            !(!e || 'object' !== typeof e) &&
            'string' === typeof e.id &&
            'string' === typeof e.title
          );
        }
        e.is = t;
      })(ur || (ur = {})),
      (function (e) {
        (e[(e['Type'] = 1)] = 'Type'), (e[(e['Parameter'] = 2)] = 'Parameter');
      })(lr || (lr = {}));
    var hr,
      fr,
      dr,
      mr,
      gr,
      vr,
      pr,
      br,
      yr,
      Cr,
      wr,
      _r,
      kr,
      Sr,
      Lr,
      Nr,
      Er,
      Ar,
      xr,
      Or,
      Mr,
      Rr,
      Pr,
      Tr,
      Ir,
      Kr,
      Dr,
      Vr,
      Fr,
      Br,
      Ur,
      qr,
      Hr,
      Wr,
      jr,
      zr,
      Gr;
    new Xn();
    (function (e) {
      (e[(e['Unknown'] = 0)] = 'Unknown'),
        (e[(e['Disabled'] = 1)] = 'Disabled'),
        (e[(e['Enabled'] = 2)] = 'Enabled');
    })(hr || (hr = {})),
      (function (e) {
        (e[(e['KeepWhitespace'] = 1)] = 'KeepWhitespace'),
          (e[(e['InsertAsSnippet'] = 4)] = 'InsertAsSnippet');
      })(fr || (fr = {})),
      (function (e) {
        (e[(e['Method'] = 0)] = 'Method'),
          (e[(e['Function'] = 1)] = 'Function'),
          (e[(e['Constructor'] = 2)] = 'Constructor'),
          (e[(e['Field'] = 3)] = 'Field'),
          (e[(e['Variable'] = 4)] = 'Variable'),
          (e[(e['Class'] = 5)] = 'Class'),
          (e[(e['Struct'] = 6)] = 'Struct'),
          (e[(e['Interface'] = 7)] = 'Interface'),
          (e[(e['Module'] = 8)] = 'Module'),
          (e[(e['Property'] = 9)] = 'Property'),
          (e[(e['Event'] = 10)] = 'Event'),
          (e[(e['Operator'] = 11)] = 'Operator'),
          (e[(e['Unit'] = 12)] = 'Unit'),
          (e[(e['Value'] = 13)] = 'Value'),
          (e[(e['Constant'] = 14)] = 'Constant'),
          (e[(e['Enum'] = 15)] = 'Enum'),
          (e[(e['EnumMember'] = 16)] = 'EnumMember'),
          (e[(e['Keyword'] = 17)] = 'Keyword'),
          (e[(e['Text'] = 18)] = 'Text'),
          (e[(e['Color'] = 19)] = 'Color'),
          (e[(e['File'] = 20)] = 'File'),
          (e[(e['Reference'] = 21)] = 'Reference'),
          (e[(e['Customcolor'] = 22)] = 'Customcolor'),
          (e[(e['Folder'] = 23)] = 'Folder'),
          (e[(e['TypeParameter'] = 24)] = 'TypeParameter'),
          (e[(e['User'] = 25)] = 'User'),
          (e[(e['Issue'] = 26)] = 'Issue'),
          (e[(e['Snippet'] = 27)] = 'Snippet');
      })(dr || (dr = {})),
      (function (e) {
        e[(e['Deprecated'] = 1)] = 'Deprecated';
      })(mr || (mr = {})),
      (function (e) {
        (e[(e['Invoke'] = 0)] = 'Invoke'),
          (e[(e['TriggerCharacter'] = 1)] = 'TriggerCharacter'),
          (e[(e['TriggerForIncompleteCompletions'] = 2)] =
            'TriggerForIncompleteCompletions');
      })(gr || (gr = {})),
      (function (e) {
        (e[(e['EXACT'] = 0)] = 'EXACT'),
          (e[(e['ABOVE'] = 1)] = 'ABOVE'),
          (e[(e['BELOW'] = 2)] = 'BELOW');
      })(vr || (vr = {})),
      (function (e) {
        (e[(e['NotSet'] = 0)] = 'NotSet'),
          (e[(e['ContentFlush'] = 1)] = 'ContentFlush'),
          (e[(e['RecoverFromMarkers'] = 2)] = 'RecoverFromMarkers'),
          (e[(e['Explicit'] = 3)] = 'Explicit'),
          (e[(e['Paste'] = 4)] = 'Paste'),
          (e[(e['Undo'] = 5)] = 'Undo'),
          (e[(e['Redo'] = 6)] = 'Redo');
      })(pr || (pr = {})),
      (function (e) {
        (e[(e['LF'] = 1)] = 'LF'), (e[(e['CRLF'] = 2)] = 'CRLF');
      })(br || (br = {})),
      (function (e) {
        (e[(e['Text'] = 0)] = 'Text'),
          (e[(e['Read'] = 1)] = 'Read'),
          (e[(e['Write'] = 2)] = 'Write');
      })(yr || (yr = {})),
      (function (e) {
        (e[(e['None'] = 0)] = 'None'),
          (e[(e['Keep'] = 1)] = 'Keep'),
          (e[(e['Brackets'] = 2)] = 'Brackets'),
          (e[(e['Advanced'] = 3)] = 'Advanced'),
          (e[(e['Full'] = 4)] = 'Full');
      })(Cr || (Cr = {})),
      (function (e) {
        (e[(e['acceptSuggestionOnCommitCharacter'] = 0)] =
          'acceptSuggestionOnCommitCharacter'),
          (e[(e['acceptSuggestionOnEnter'] = 1)] = 'acceptSuggestionOnEnter'),
          (e[(e['accessibilitySupport'] = 2)] = 'accessibilitySupport'),
          (e[(e['accessibilityPageSize'] = 3)] = 'accessibilityPageSize'),
          (e[(e['ariaLabel'] = 4)] = 'ariaLabel'),
          (e[(e['autoClosingBrackets'] = 5)] = 'autoClosingBrackets'),
          (e[(e['autoClosingDelete'] = 6)] = 'autoClosingDelete'),
          (e[(e['autoClosingOvertype'] = 7)] = 'autoClosingOvertype'),
          (e[(e['autoClosingQuotes'] = 8)] = 'autoClosingQuotes'),
          (e[(e['autoIndent'] = 9)] = 'autoIndent'),
          (e[(e['automaticLayout'] = 10)] = 'automaticLayout'),
          (e[(e['autoSurround'] = 11)] = 'autoSurround'),
          (e[(e['bracketPairColorization'] = 12)] = 'bracketPairColorization'),
          (e[(e['guides'] = 13)] = 'guides'),
          (e[(e['codeLens'] = 14)] = 'codeLens'),
          (e[(e['codeLensFontFamily'] = 15)] = 'codeLensFontFamily'),
          (e[(e['codeLensFontSize'] = 16)] = 'codeLensFontSize'),
          (e[(e['colorDecorators'] = 17)] = 'colorDecorators'),
          (e[(e['columnSelection'] = 18)] = 'columnSelection'),
          (e[(e['comments'] = 19)] = 'comments'),
          (e[(e['contextmenu'] = 20)] = 'contextmenu'),
          (e[(e['copyWithSyntaxHighlighting'] = 21)] =
            'copyWithSyntaxHighlighting'),
          (e[(e['cursorBlinking'] = 22)] = 'cursorBlinking'),
          (e[(e['cursorSmoothCaretAnimation'] = 23)] =
            'cursorSmoothCaretAnimation'),
          (e[(e['cursorStyle'] = 24)] = 'cursorStyle'),
          (e[(e['cursorSurroundingLines'] = 25)] = 'cursorSurroundingLines'),
          (e[(e['cursorSurroundingLinesStyle'] = 26)] =
            'cursorSurroundingLinesStyle'),
          (e[(e['cursorWidth'] = 27)] = 'cursorWidth'),
          (e[(e['disableLayerHinting'] = 28)] = 'disableLayerHinting'),
          (e[(e['disableMonospaceOptimizations'] = 29)] =
            'disableMonospaceOptimizations'),
          (e[(e['domReadOnly'] = 30)] = 'domReadOnly'),
          (e[(e['dragAndDrop'] = 31)] = 'dragAndDrop'),
          (e[(e['emptySelectionClipboard'] = 32)] = 'emptySelectionClipboard'),
          (e[(e['extraEditorClassName'] = 33)] = 'extraEditorClassName'),
          (e[(e['fastScrollSensitivity'] = 34)] = 'fastScrollSensitivity'),
          (e[(e['find'] = 35)] = 'find'),
          (e[(e['fixedOverflowWidgets'] = 36)] = 'fixedOverflowWidgets'),
          (e[(e['folding'] = 37)] = 'folding'),
          (e[(e['foldingStrategy'] = 38)] = 'foldingStrategy'),
          (e[(e['foldingHighlight'] = 39)] = 'foldingHighlight'),
          (e[(e['foldingImportsByDefault'] = 40)] = 'foldingImportsByDefault'),
          (e[(e['foldingMaximumRegions'] = 41)] = 'foldingMaximumRegions'),
          (e[(e['unfoldOnClickAfterEndOfLine'] = 42)] =
            'unfoldOnClickAfterEndOfLine'),
          (e[(e['fontFamily'] = 43)] = 'fontFamily'),
          (e[(e['fontInfo'] = 44)] = 'fontInfo'),
          (e[(e['fontLigatures'] = 45)] = 'fontLigatures'),
          (e[(e['fontSize'] = 46)] = 'fontSize'),
          (e[(e['fontWeight'] = 47)] = 'fontWeight'),
          (e[(e['formatOnPaste'] = 48)] = 'formatOnPaste'),
          (e[(e['formatOnType'] = 49)] = 'formatOnType'),
          (e[(e['glyphMargin'] = 50)] = 'glyphMargin'),
          (e[(e['gotoLocation'] = 51)] = 'gotoLocation'),
          (e[(e['hideCursorInOverviewRuler'] = 52)] =
            'hideCursorInOverviewRuler'),
          (e[(e['hover'] = 53)] = 'hover'),
          (e[(e['inDiffEditor'] = 54)] = 'inDiffEditor'),
          (e[(e['inlineSuggest'] = 55)] = 'inlineSuggest'),
          (e[(e['letterSpacing'] = 56)] = 'letterSpacing'),
          (e[(e['lightbulb'] = 57)] = 'lightbulb'),
          (e[(e['lineDecorationsWidth'] = 58)] = 'lineDecorationsWidth'),
          (e[(e['lineHeight'] = 59)] = 'lineHeight'),
          (e[(e['lineNumbers'] = 60)] = 'lineNumbers'),
          (e[(e['lineNumbersMinChars'] = 61)] = 'lineNumbersMinChars'),
          (e[(e['linkedEditing'] = 62)] = 'linkedEditing'),
          (e[(e['links'] = 63)] = 'links'),
          (e[(e['matchBrackets'] = 64)] = 'matchBrackets'),
          (e[(e['minimap'] = 65)] = 'minimap'),
          (e[(e['mouseStyle'] = 66)] = 'mouseStyle'),
          (e[(e['mouseWheelScrollSensitivity'] = 67)] =
            'mouseWheelScrollSensitivity'),
          (e[(e['mouseWheelZoom'] = 68)] = 'mouseWheelZoom'),
          (e[(e['multiCursorMergeOverlapping'] = 69)] =
            'multiCursorMergeOverlapping'),
          (e[(e['multiCursorModifier'] = 70)] = 'multiCursorModifier'),
          (e[(e['multiCursorPaste'] = 71)] = 'multiCursorPaste'),
          (e[(e['occurrencesHighlight'] = 72)] = 'occurrencesHighlight'),
          (e[(e['overviewRulerBorder'] = 73)] = 'overviewRulerBorder'),
          (e[(e['overviewRulerLanes'] = 74)] = 'overviewRulerLanes'),
          (e[(e['padding'] = 75)] = 'padding'),
          (e[(e['parameterHints'] = 76)] = 'parameterHints'),
          (e[(e['peekWidgetDefaultFocus'] = 77)] = 'peekWidgetDefaultFocus'),
          (e[(e['definitionLinkOpensInPeek'] = 78)] =
            'definitionLinkOpensInPeek'),
          (e[(e['quickSuggestions'] = 79)] = 'quickSuggestions'),
          (e[(e['quickSuggestionsDelay'] = 80)] = 'quickSuggestionsDelay'),
          (e[(e['readOnly'] = 81)] = 'readOnly'),
          (e[(e['renameOnType'] = 82)] = 'renameOnType'),
          (e[(e['renderControlCharacters'] = 83)] = 'renderControlCharacters'),
          (e[(e['renderFinalNewline'] = 84)] = 'renderFinalNewline'),
          (e[(e['renderLineHighlight'] = 85)] = 'renderLineHighlight'),
          (e[(e['renderLineHighlightOnlyWhenFocus'] = 86)] =
            'renderLineHighlightOnlyWhenFocus'),
          (e[(e['renderValidationDecorations'] = 87)] =
            'renderValidationDecorations'),
          (e[(e['renderWhitespace'] = 88)] = 'renderWhitespace'),
          (e[(e['revealHorizontalRightPadding'] = 89)] =
            'revealHorizontalRightPadding'),
          (e[(e['roundedSelection'] = 90)] = 'roundedSelection'),
          (e[(e['rulers'] = 91)] = 'rulers'),
          (e[(e['scrollbar'] = 92)] = 'scrollbar'),
          (e[(e['scrollBeyondLastColumn'] = 93)] = 'scrollBeyondLastColumn'),
          (e[(e['scrollBeyondLastLine'] = 94)] = 'scrollBeyondLastLine'),
          (e[(e['scrollPredominantAxis'] = 95)] = 'scrollPredominantAxis'),
          (e[(e['selectionClipboard'] = 96)] = 'selectionClipboard'),
          (e[(e['selectionHighlight'] = 97)] = 'selectionHighlight'),
          (e[(e['selectOnLineNumbers'] = 98)] = 'selectOnLineNumbers'),
          (e[(e['showFoldingControls'] = 99)] = 'showFoldingControls'),
          (e[(e['showUnused'] = 100)] = 'showUnused'),
          (e[(e['snippetSuggestions'] = 101)] = 'snippetSuggestions'),
          (e[(e['smartSelect'] = 102)] = 'smartSelect'),
          (e[(e['smoothScrolling'] = 103)] = 'smoothScrolling'),
          (e[(e['stickyTabStops'] = 104)] = 'stickyTabStops'),
          (e[(e['stopRenderingLineAfter'] = 105)] = 'stopRenderingLineAfter'),
          (e[(e['suggest'] = 106)] = 'suggest'),
          (e[(e['suggestFontSize'] = 107)] = 'suggestFontSize'),
          (e[(e['suggestLineHeight'] = 108)] = 'suggestLineHeight'),
          (e[(e['suggestOnTriggerCharacters'] = 109)] =
            'suggestOnTriggerCharacters'),
          (e[(e['suggestSelection'] = 110)] = 'suggestSelection'),
          (e[(e['tabCompletion'] = 111)] = 'tabCompletion'),
          (e[(e['tabIndex'] = 112)] = 'tabIndex'),
          (e[(e['unicodeHighlighting'] = 113)] = 'unicodeHighlighting'),
          (e[(e['unusualLineTerminators'] = 114)] = 'unusualLineTerminators'),
          (e[(e['useShadowDOM'] = 115)] = 'useShadowDOM'),
          (e[(e['useTabStops'] = 116)] = 'useTabStops'),
          (e[(e['wordSeparators'] = 117)] = 'wordSeparators'),
          (e[(e['wordWrap'] = 118)] = 'wordWrap'),
          (e[(e['wordWrapBreakAfterCharacters'] = 119)] =
            'wordWrapBreakAfterCharacters'),
          (e[(e['wordWrapBreakBeforeCharacters'] = 120)] =
            'wordWrapBreakBeforeCharacters'),
          (e[(e['wordWrapColumn'] = 121)] = 'wordWrapColumn'),
          (e[(e['wordWrapOverride1'] = 122)] = 'wordWrapOverride1'),
          (e[(e['wordWrapOverride2'] = 123)] = 'wordWrapOverride2'),
          (e[(e['wrappingIndent'] = 124)] = 'wrappingIndent'),
          (e[(e['wrappingStrategy'] = 125)] = 'wrappingStrategy'),
          (e[(e['showDeprecated'] = 126)] = 'showDeprecated'),
          (e[(e['inlayHints'] = 127)] = 'inlayHints'),
          (e[(e['editorClassName'] = 128)] = 'editorClassName'),
          (e[(e['pixelRatio'] = 129)] = 'pixelRatio'),
          (e[(e['tabFocusMode'] = 130)] = 'tabFocusMode'),
          (e[(e['layoutInfo'] = 131)] = 'layoutInfo'),
          (e[(e['wrappingInfo'] = 132)] = 'wrappingInfo');
      })(wr || (wr = {})),
      (function (e) {
        (e[(e['TextDefined'] = 0)] = 'TextDefined'),
          (e[(e['LF'] = 1)] = 'LF'),
          (e[(e['CRLF'] = 2)] = 'CRLF');
      })(_r || (_r = {})),
      (function (e) {
        (e[(e['LF'] = 0)] = 'LF'), (e[(e['CRLF'] = 1)] = 'CRLF');
      })(kr || (kr = {})),
      (function (e) {
        (e[(e['None'] = 0)] = 'None'),
          (e[(e['Indent'] = 1)] = 'Indent'),
          (e[(e['IndentOutdent'] = 2)] = 'IndentOutdent'),
          (e[(e['Outdent'] = 3)] = 'Outdent');
      })(Sr || (Sr = {})),
      (function (e) {
        (e[(e['Both'] = 0)] = 'Both'),
          (e[(e['Right'] = 1)] = 'Right'),
          (e[(e['Left'] = 2)] = 'Left'),
          (e[(e['None'] = 3)] = 'None');
      })(Lr || (Lr = {})),
      (function (e) {
        (e[(e['Type'] = 1)] = 'Type'), (e[(e['Parameter'] = 2)] = 'Parameter');
      })(Nr || (Nr = {})),
      (function (e) {
        (e[(e['Automatic'] = 0)] = 'Automatic'),
          (e[(e['Explicit'] = 1)] = 'Explicit');
      })(Er || (Er = {})),
      (function (e) {
        (e[(e['DependsOnKbLayout'] = -1)] = 'DependsOnKbLayout'),
          (e[(e['Unknown'] = 0)] = 'Unknown'),
          (e[(e['Backspace'] = 1)] = 'Backspace'),
          (e[(e['Tab'] = 2)] = 'Tab'),
          (e[(e['Enter'] = 3)] = 'Enter'),
          (e[(e['Shift'] = 4)] = 'Shift'),
          (e[(e['Ctrl'] = 5)] = 'Ctrl'),
          (e[(e['Alt'] = 6)] = 'Alt'),
          (e[(e['PauseBreak'] = 7)] = 'PauseBreak'),
          (e[(e['CapsLock'] = 8)] = 'CapsLock'),
          (e[(e['Escape'] = 9)] = 'Escape'),
          (e[(e['Space'] = 10)] = 'Space'),
          (e[(e['PageUp'] = 11)] = 'PageUp'),
          (e[(e['PageDown'] = 12)] = 'PageDown'),
          (e[(e['End'] = 13)] = 'End'),
          (e[(e['Home'] = 14)] = 'Home'),
          (e[(e['LeftArrow'] = 15)] = 'LeftArrow'),
          (e[(e['UpArrow'] = 16)] = 'UpArrow'),
          (e[(e['RightArrow'] = 17)] = 'RightArrow'),
          (e[(e['DownArrow'] = 18)] = 'DownArrow'),
          (e[(e['Insert'] = 19)] = 'Insert'),
          (e[(e['Delete'] = 20)] = 'Delete'),
          (e[(e['Digit0'] = 21)] = 'Digit0'),
          (e[(e['Digit1'] = 22)] = 'Digit1'),
          (e[(e['Digit2'] = 23)] = 'Digit2'),
          (e[(e['Digit3'] = 24)] = 'Digit3'),
          (e[(e['Digit4'] = 25)] = 'Digit4'),
          (e[(e['Digit5'] = 26)] = 'Digit5'),
          (e[(e['Digit6'] = 27)] = 'Digit6'),
          (e[(e['Digit7'] = 28)] = 'Digit7'),
          (e[(e['Digit8'] = 29)] = 'Digit8'),
          (e[(e['Digit9'] = 30)] = 'Digit9'),
          (e[(e['KeyA'] = 31)] = 'KeyA'),
          (e[(e['KeyB'] = 32)] = 'KeyB'),
          (e[(e['KeyC'] = 33)] = 'KeyC'),
          (e[(e['KeyD'] = 34)] = 'KeyD'),
          (e[(e['KeyE'] = 35)] = 'KeyE'),
          (e[(e['KeyF'] = 36)] = 'KeyF'),
          (e[(e['KeyG'] = 37)] = 'KeyG'),
          (e[(e['KeyH'] = 38)] = 'KeyH'),
          (e[(e['KeyI'] = 39)] = 'KeyI'),
          (e[(e['KeyJ'] = 40)] = 'KeyJ'),
          (e[(e['KeyK'] = 41)] = 'KeyK'),
          (e[(e['KeyL'] = 42)] = 'KeyL'),
          (e[(e['KeyM'] = 43)] = 'KeyM'),
          (e[(e['KeyN'] = 44)] = 'KeyN'),
          (e[(e['KeyO'] = 45)] = 'KeyO'),
          (e[(e['KeyP'] = 46)] = 'KeyP'),
          (e[(e['KeyQ'] = 47)] = 'KeyQ'),
          (e[(e['KeyR'] = 48)] = 'KeyR'),
          (e[(e['KeyS'] = 49)] = 'KeyS'),
          (e[(e['KeyT'] = 50)] = 'KeyT'),
          (e[(e['KeyU'] = 51)] = 'KeyU'),
          (e[(e['KeyV'] = 52)] = 'KeyV'),
          (e[(e['KeyW'] = 53)] = 'KeyW'),
          (e[(e['KeyX'] = 54)] = 'KeyX'),
          (e[(e['KeyY'] = 55)] = 'KeyY'),
          (e[(e['KeyZ'] = 56)] = 'KeyZ'),
          (e[(e['Meta'] = 57)] = 'Meta'),
          (e[(e['ContextMenu'] = 58)] = 'ContextMenu'),
          (e[(e['F1'] = 59)] = 'F1'),
          (e[(e['F2'] = 60)] = 'F2'),
          (e[(e['F3'] = 61)] = 'F3'),
          (e[(e['F4'] = 62)] = 'F4'),
          (e[(e['F5'] = 63)] = 'F5'),
          (e[(e['F6'] = 64)] = 'F6'),
          (e[(e['F7'] = 65)] = 'F7'),
          (e[(e['F8'] = 66)] = 'F8'),
          (e[(e['F9'] = 67)] = 'F9'),
          (e[(e['F10'] = 68)] = 'F10'),
          (e[(e['F11'] = 69)] = 'F11'),
          (e[(e['F12'] = 70)] = 'F12'),
          (e[(e['F13'] = 71)] = 'F13'),
          (e[(e['F14'] = 72)] = 'F14'),
          (e[(e['F15'] = 73)] = 'F15'),
          (e[(e['F16'] = 74)] = 'F16'),
          (e[(e['F17'] = 75)] = 'F17'),
          (e[(e['F18'] = 76)] = 'F18'),
          (e[(e['F19'] = 77)] = 'F19'),
          (e[(e['NumLock'] = 78)] = 'NumLock'),
          (e[(e['ScrollLock'] = 79)] = 'ScrollLock'),
          (e[(e['Semicolon'] = 80)] = 'Semicolon'),
          (e[(e['Equal'] = 81)] = 'Equal'),
          (e[(e['Comma'] = 82)] = 'Comma'),
          (e[(e['Minus'] = 83)] = 'Minus'),
          (e[(e['Period'] = 84)] = 'Period'),
          (e[(e['Slash'] = 85)] = 'Slash'),
          (e[(e['Backquote'] = 86)] = 'Backquote'),
          (e[(e['BracketLeft'] = 87)] = 'BracketLeft'),
          (e[(e['Backslash'] = 88)] = 'Backslash'),
          (e[(e['BracketRight'] = 89)] = 'BracketRight'),
          (e[(e['Quote'] = 90)] = 'Quote'),
          (e[(e['OEM_8'] = 91)] = 'OEM_8'),
          (e[(e['IntlBackslash'] = 92)] = 'IntlBackslash'),
          (e[(e['Numpad0'] = 93)] = 'Numpad0'),
          (e[(e['Numpad1'] = 94)] = 'Numpad1'),
          (e[(e['Numpad2'] = 95)] = 'Numpad2'),
          (e[(e['Numpad3'] = 96)] = 'Numpad3'),
          (e[(e['Numpad4'] = 97)] = 'Numpad4'),
          (e[(e['Numpad5'] = 98)] = 'Numpad5'),
          (e[(e['Numpad6'] = 99)] = 'Numpad6'),
          (e[(e['Numpad7'] = 100)] = 'Numpad7'),
          (e[(e['Numpad8'] = 101)] = 'Numpad8'),
          (e[(e['Numpad9'] = 102)] = 'Numpad9'),
          (e[(e['NumpadMultiply'] = 103)] = 'NumpadMultiply'),
          (e[(e['NumpadAdd'] = 104)] = 'NumpadAdd'),
          (e[(e['NUMPAD_SEPARATOR'] = 105)] = 'NUMPAD_SEPARATOR'),
          (e[(e['NumpadSubtract'] = 106)] = 'NumpadSubtract'),
          (e[(e['NumpadDecimal'] = 107)] = 'NumpadDecimal'),
          (e[(e['NumpadDivide'] = 108)] = 'NumpadDivide'),
          (e[(e['KEY_IN_COMPOSITION'] = 109)] = 'KEY_IN_COMPOSITION'),
          (e[(e['ABNT_C1'] = 110)] = 'ABNT_C1'),
          (e[(e['ABNT_C2'] = 111)] = 'ABNT_C2'),
          (e[(e['AudioVolumeMute'] = 112)] = 'AudioVolumeMute'),
          (e[(e['AudioVolumeUp'] = 113)] = 'AudioVolumeUp'),
          (e[(e['AudioVolumeDown'] = 114)] = 'AudioVolumeDown'),
          (e[(e['BrowserSearch'] = 115)] = 'BrowserSearch'),
          (e[(e['BrowserHome'] = 116)] = 'BrowserHome'),
          (e[(e['BrowserBack'] = 117)] = 'BrowserBack'),
          (e[(e['BrowserForward'] = 118)] = 'BrowserForward'),
          (e[(e['MediaTrackNext'] = 119)] = 'MediaTrackNext'),
          (e[(e['MediaTrackPrevious'] = 120)] = 'MediaTrackPrevious'),
          (e[(e['MediaStop'] = 121)] = 'MediaStop'),
          (e[(e['MediaPlayPause'] = 122)] = 'MediaPlayPause'),
          (e[(e['LaunchMediaPlayer'] = 123)] = 'LaunchMediaPlayer'),
          (e[(e['LaunchMail'] = 124)] = 'LaunchMail'),
          (e[(e['LaunchApp2'] = 125)] = 'LaunchApp2'),
          (e[(e['Clear'] = 126)] = 'Clear'),
          (e[(e['MAX_VALUE'] = 127)] = 'MAX_VALUE');
      })(Ar || (Ar = {})),
      (function (e) {
        (e[(e['Hint'] = 1)] = 'Hint'),
          (e[(e['Info'] = 2)] = 'Info'),
          (e[(e['Warning'] = 4)] = 'Warning'),
          (e[(e['Error'] = 8)] = 'Error');
      })(xr || (xr = {})),
      (function (e) {
        (e[(e['Unnecessary'] = 1)] = 'Unnecessary'),
          (e[(e['Deprecated'] = 2)] = 'Deprecated');
      })(Or || (Or = {})),
      (function (e) {
        (e[(e['Inline'] = 1)] = 'Inline'), (e[(e['Gutter'] = 2)] = 'Gutter');
      })(Mr || (Mr = {})),
      (function (e) {
        (e[(e['UNKNOWN'] = 0)] = 'UNKNOWN'),
          (e[(e['TEXTAREA'] = 1)] = 'TEXTAREA'),
          (e[(e['GUTTER_GLYPH_MARGIN'] = 2)] = 'GUTTER_GLYPH_MARGIN'),
          (e[(e['GUTTER_LINE_NUMBERS'] = 3)] = 'GUTTER_LINE_NUMBERS'),
          (e[(e['GUTTER_LINE_DECORATIONS'] = 4)] = 'GUTTER_LINE_DECORATIONS'),
          (e[(e['GUTTER_VIEW_ZONE'] = 5)] = 'GUTTER_VIEW_ZONE'),
          (e[(e['CONTENT_TEXT'] = 6)] = 'CONTENT_TEXT'),
          (e[(e['CONTENT_EMPTY'] = 7)] = 'CONTENT_EMPTY'),
          (e[(e['CONTENT_VIEW_ZONE'] = 8)] = 'CONTENT_VIEW_ZONE'),
          (e[(e['CONTENT_WIDGET'] = 9)] = 'CONTENT_WIDGET'),
          (e[(e['OVERVIEW_RULER'] = 10)] = 'OVERVIEW_RULER'),
          (e[(e['SCROLLBAR'] = 11)] = 'SCROLLBAR'),
          (e[(e['OVERLAY_WIDGET'] = 12)] = 'OVERLAY_WIDGET'),
          (e[(e['OUTSIDE_EDITOR'] = 13)] = 'OUTSIDE_EDITOR');
      })(Rr || (Rr = {})),
      (function (e) {
        (e[(e['TOP_RIGHT_CORNER'] = 0)] = 'TOP_RIGHT_CORNER'),
          (e[(e['BOTTOM_RIGHT_CORNER'] = 1)] = 'BOTTOM_RIGHT_CORNER'),
          (e[(e['TOP_CENTER'] = 2)] = 'TOP_CENTER');
      })(Pr || (Pr = {})),
      (function (e) {
        (e[(e['Left'] = 1)] = 'Left'),
          (e[(e['Center'] = 2)] = 'Center'),
          (e[(e['Right'] = 4)] = 'Right'),
          (e[(e['Full'] = 7)] = 'Full');
      })(Tr || (Tr = {})),
      (function (e) {
        (e[(e['Left'] = 0)] = 'Left'),
          (e[(e['Right'] = 1)] = 'Right'),
          (e[(e['None'] = 2)] = 'None');
      })(Ir || (Ir = {})),
      (function (e) {
        (e[(e['Off'] = 0)] = 'Off'),
          (e[(e['On'] = 1)] = 'On'),
          (e[(e['Relative'] = 2)] = 'Relative'),
          (e[(e['Interval'] = 3)] = 'Interval'),
          (e[(e['Custom'] = 4)] = 'Custom');
      })(Kr || (Kr = {})),
      (function (e) {
        (e[(e['None'] = 0)] = 'None'),
          (e[(e['Text'] = 1)] = 'Text'),
          (e[(e['Blocks'] = 2)] = 'Blocks');
      })(Dr || (Dr = {})),
      (function (e) {
        (e[(e['Smooth'] = 0)] = 'Smooth'),
          (e[(e['Immediate'] = 1)] = 'Immediate');
      })(Vr || (Vr = {})),
      (function (e) {
        (e[(e['Auto'] = 1)] = 'Auto'),
          (e[(e['Hidden'] = 2)] = 'Hidden'),
          (e[(e['Visible'] = 3)] = 'Visible');
      })(Fr || (Fr = {})),
      (function (e) {
        (e[(e['LTR'] = 0)] = 'LTR'), (e[(e['RTL'] = 1)] = 'RTL');
      })(Br || (Br = {})),
      (function (e) {
        (e[(e['Invoke'] = 1)] = 'Invoke'),
          (e[(e['TriggerCharacter'] = 2)] = 'TriggerCharacter'),
          (e[(e['ContentChange'] = 3)] = 'ContentChange');
      })(Ur || (Ur = {})),
      (function (e) {
        (e[(e['File'] = 0)] = 'File'),
          (e[(e['Module'] = 1)] = 'Module'),
          (e[(e['Namespace'] = 2)] = 'Namespace'),
          (e[(e['Package'] = 3)] = 'Package'),
          (e[(e['Class'] = 4)] = 'Class'),
          (e[(e['Method'] = 5)] = 'Method'),
          (e[(e['Property'] = 6)] = 'Property'),
          (e[(e['Field'] = 7)] = 'Field'),
          (e[(e['Constructor'] = 8)] = 'Constructor'),
          (e[(e['Enum'] = 9)] = 'Enum'),
          (e[(e['Interface'] = 10)] = 'Interface'),
          (e[(e['Function'] = 11)] = 'Function'),
          (e[(e['Variable'] = 12)] = 'Variable'),
          (e[(e['Constant'] = 13)] = 'Constant'),
          (e[(e['String'] = 14)] = 'String'),
          (e[(e['Number'] = 15)] = 'Number'),
          (e[(e['Boolean'] = 16)] = 'Boolean'),
          (e[(e['Array'] = 17)] = 'Array'),
          (e[(e['Object'] = 18)] = 'Object'),
          (e[(e['Key'] = 19)] = 'Key'),
          (e[(e['Null'] = 20)] = 'Null'),
          (e[(e['EnumMember'] = 21)] = 'EnumMember'),
          (e[(e['Struct'] = 22)] = 'Struct'),
          (e[(e['Event'] = 23)] = 'Event'),
          (e[(e['Operator'] = 24)] = 'Operator'),
          (e[(e['TypeParameter'] = 25)] = 'TypeParameter');
      })(qr || (qr = {})),
      (function (e) {
        e[(e['Deprecated'] = 1)] = 'Deprecated';
      })(Hr || (Hr = {})),
      (function (e) {
        (e[(e['Hidden'] = 0)] = 'Hidden'),
          (e[(e['Blink'] = 1)] = 'Blink'),
          (e[(e['Smooth'] = 2)] = 'Smooth'),
          (e[(e['Phase'] = 3)] = 'Phase'),
          (e[(e['Expand'] = 4)] = 'Expand'),
          (e[(e['Solid'] = 5)] = 'Solid');
      })(Wr || (Wr = {})),
      (function (e) {
        (e[(e['Line'] = 1)] = 'Line'),
          (e[(e['Block'] = 2)] = 'Block'),
          (e[(e['Underline'] = 3)] = 'Underline'),
          (e[(e['LineThin'] = 4)] = 'LineThin'),
          (e[(e['BlockOutline'] = 5)] = 'BlockOutline'),
          (e[(e['UnderlineThin'] = 6)] = 'UnderlineThin');
      })(jr || (jr = {})),
      (function (e) {
        (e[(e['AlwaysGrowsWhenTypingAtEdges'] = 0)] =
          'AlwaysGrowsWhenTypingAtEdges'),
          (e[(e['NeverGrowsWhenTypingAtEdges'] = 1)] =
            'NeverGrowsWhenTypingAtEdges'),
          (e[(e['GrowsOnlyWhenTypingBefore'] = 2)] =
            'GrowsOnlyWhenTypingBefore'),
          (e[(e['GrowsOnlyWhenTypingAfter'] = 3)] = 'GrowsOnlyWhenTypingAfter');
      })(zr || (zr = {})),
      (function (e) {
        (e[(e['None'] = 0)] = 'None'),
          (e[(e['Same'] = 1)] = 'Same'),
          (e[(e['Indent'] = 2)] = 'Indent'),
          (e[(e['DeepIndent'] = 3)] = 'DeepIndent');
      })(Gr || (Gr = {}));
    var Yr = (function () {
      function e() {
        v(this, e);
      }
      return (
        g(e, null, [
          {
            key: 'chord',
            value: function (e, t) {
              return Qn(e, t);
            },
          },
        ]),
        e
      );
    })();
    function Qr() {
      return {
        editor: void 0,
        languages: void 0,
        CancellationTokenSource: In,
        Emitter: ge,
        KeyCode: Ar,
        KeyMod: Yr,
        Position: Qt,
        Range: Jt,
        Selection: Jn,
        SelectionDirection: Br,
        MarkerSeverity: xr,
        MarkerTag: Or,
        Uri: Vt,
        Token: sr,
      };
    }
    (Yr.CtrlCmd = 2048), (Yr.Shift = 1024), (Yr.Alt = 512), (Yr.WinCtrl = 256);
    var Jr = (function (e) {
      s(n, e);
      var t = d(n);
      function n(e) {
        var r;
        v(this, n), (r = t.call(this, 0));
        for (var i = 0, a = e.length; i < a; i++) r.set(e.charCodeAt(i), 2);
        return r.set(32, 1), r.set(9, 1), r;
      }
      return g(n);
    })(wn);
    function Zr(e) {
      var t = {};
      return function (n) {
        return t.hasOwnProperty(n) || (t[n] = e(n)), t[n];
      };
    }
    Zr(function (e) {
      return new Jr(e);
    });
    var Xr, $r, ei;
    Object.prototype.hasOwnProperty;
    (function (e) {
      (e[(e['Left'] = 1)] = 'Left'),
        (e[(e['Center'] = 2)] = 'Center'),
        (e[(e['Right'] = 4)] = 'Right'),
        (e[(e['Full'] = 7)] = 'Full');
    })(Xr || (Xr = {})),
      (function (e) {
        (e[(e['Inline'] = 1)] = 'Inline'), (e[(e['Gutter'] = 2)] = 'Gutter');
      })($r || ($r = {})),
      (function (e) {
        (e[(e['Both'] = 0)] = 'Both'),
          (e[(e['Right'] = 1)] = 'Right'),
          (e[(e['Left'] = 2)] = 'Left'),
          (e[(e['None'] = 3)] = 'None');
      })(ei || (ei = {}));
    function ti(e, t, n, r, i) {
      if (0 === r) return !0;
      var a = t.charCodeAt(r - 1);
      if (0 !== e.get(a)) return !0;
      if (13 === a || 10 === a) return !0;
      if (i > 0) {
        var o = t.charCodeAt(r);
        if (0 !== e.get(o)) return !0;
      }
      return !1;
    }
    function ni(e, t, n, r, i) {
      if (r + i === n) return !0;
      var a = t.charCodeAt(r + i);
      if (0 !== e.get(a)) return !0;
      if (13 === a || 10 === a) return !0;
      if (i > 0) {
        var o = t.charCodeAt(r + i - 1);
        if (0 !== e.get(o)) return !0;
      }
      return !1;
    }
    function ri(e, t, n, r, i) {
      return ti(e, t, n, r, i) && ni(e, t, n, r, i);
    }
    var ii = (function () {
        function e(t, n) {
          v(this, e),
            (this._wordSeparators = t),
            (this._searchRegex = n),
            (this._prevMatchStartIndex = -1),
            (this._prevMatchLength = 0);
        }
        return (
          g(e, [
            {
              key: 'reset',
              value: function (e) {
                (this._searchRegex.lastIndex = e),
                  (this._prevMatchStartIndex = -1),
                  (this._prevMatchLength = 0);
              },
            },
            {
              key: 'next',
              value: function (e) {
                var t,
                  n = e.length;
                do {
                  if (this._prevMatchStartIndex + this._prevMatchLength === n)
                    return null;
                  if (((t = this._searchRegex.exec(e)), !t)) return null;
                  var r = t.index,
                    i = t[0].length;
                  if (
                    r === this._prevMatchStartIndex &&
                    i === this._prevMatchLength
                  ) {
                    if (0 === i) {
                      Me(e, n, this._searchRegex.lastIndex) > 65535
                        ? (this._searchRegex.lastIndex += 2)
                        : (this._searchRegex.lastIndex += 1);
                      continue;
                    }
                    return null;
                  }
                  if (
                    ((this._prevMatchStartIndex = r),
                    (this._prevMatchLength = i),
                    !this._wordSeparators ||
                      ri(this._wordSeparators, e, n, r, i))
                  )
                    return t;
                } while (t);
                return null;
              },
            },
          ]),
          e
        );
      })(),
      ai = (function () {
        function e() {
          v(this, e);
        }
        return (
          g(e, null, [
            {
              key: 'computeUnicodeHighlights',
              value: function (e, t, n) {
                var r,
                  i = n ? n.startLineNumber : 1,
                  a = n ? n.endLineNumber : e.getLineCount(),
                  o = new si(t),
                  s = o.getCandidateCodePoints();
                r =
                  'allNonBasicAscii' === s
                    ? new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g')
                    : new RegExp(''.concat(oi(Array.from(s))), 'g');
                var u,
                  l = new ii(null, r),
                  c = [],
                  h = !1,
                  f = 0,
                  d = 0,
                  m = 0;
                e: for (var g = i, v = a; g <= v; g++) {
                  var p = e.getLineContent(g),
                    b = p.length;
                  l.reset(0);
                  do {
                    if (((u = l.next(p)), u)) {
                      var y = u.index,
                        C = u.index + u[0].length;
                      if (y > 0) {
                        var w = p.charCodeAt(y - 1);
                        Ae(w) && y--;
                      }
                      if (C + 1 < b) {
                        var _ = p.charCodeAt(C - 1);
                        Ae(_) && C++;
                      }
                      var k = p.substring(y, C),
                        S = yn(y + 1, vn, p, 0),
                        L = o.shouldHighlightNonBasicASCII(
                          k,
                          S ? S.word : null,
                        );
                      if (0 !== L) {
                        3 === L ? f++ : 2 === L ? d++ : 1 === L ? m++ : ye(L);
                        var N = 1e3;
                        if (c.length >= N) {
                          h = !0;
                          break e;
                        }
                        c.push(new Jt(g, y + 1, g, C + 1));
                      }
                    }
                  } while (u);
                }
                return {
                  ranges: c,
                  hasMore: h,
                  ambiguousCharacterCount: f,
                  invisibleCharacterCount: d,
                  nonBasicAsciiCharacterCount: m,
                };
              },
            },
            {
              key: 'computeUnicodeHighlightReason',
              value: function (e, t) {
                var n = new si(t),
                  r = n.shouldHighlightNonBasicASCII(e, null);
                switch (r) {
                  case 0:
                    return null;
                  case 2:
                    return { kind: 1 };
                  case 3:
                    var i = e.codePointAt(0),
                      a = n.ambiguousCharacters.getPrimaryConfusable(i),
                      o = Ke.getLocales().filter(function (e) {
                        return !Ke.getInstance(
                          new Set([].concat(D(t.allowedLocales), [e])),
                        ).isAmbiguous(i);
                      });
                    return {
                      kind: 0,
                      confusableWith: String.fromCodePoint(a),
                      notAmbiguousInLocales: o,
                    };
                  case 1:
                    return { kind: 2 };
                }
              },
            },
          ]),
          e
        );
      })();
    function oi(e, t) {
      var n = '['.concat(
        ke(
          e
            .map(function (e) {
              return String.fromCodePoint(e);
            })
            .join(''),
        ),
        ']',
      );
      return n;
    }
    var si = (function () {
      function e(t) {
        v(this, e),
          (this.options = t),
          (this.allowedCodePoints = new Set(t.allowedCodePoints)),
          (this.ambiguousCharacters = Ke.getInstance(
            new Set(t.allowedLocales),
          ));
      }
      return (
        g(e, [
          {
            key: 'getCandidateCodePoints',
            value: function () {
              if (this.options.nonBasicASCII) return 'allNonBasicAscii';
              var e = new Set();
              if (this.options.invisibleCharacters) {
                var t,
                  n = a(De.codePoints);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value;
                    ui(String.fromCodePoint(r)) || e.add(r);
                  }
                } catch (h) {
                  n.e(h);
                } finally {
                  n.f();
                }
              }
              if (this.options.ambiguousCharacters) {
                var i,
                  o = a(this.ambiguousCharacters.getConfusableCodePoints());
                try {
                  for (o.s(); !(i = o.n()).done; ) {
                    var s = i.value;
                    e.add(s);
                  }
                } catch (h) {
                  o.e(h);
                } finally {
                  o.f();
                }
              }
              var u,
                l = a(this.allowedCodePoints);
              try {
                for (l.s(); !(u = l.n()).done; ) {
                  var c = u.value;
                  e['delete'](c);
                }
              } catch (h) {
                l.e(h);
              } finally {
                l.f();
              }
              return e;
            },
          },
          {
            key: 'shouldHighlightNonBasicASCII',
            value: function (e, t) {
              var n = e.codePointAt(0);
              if (this.allowedCodePoints.has(n)) return 0;
              if (this.options.nonBasicASCII) return 1;
              var r = !1,
                i = !1;
              if (t) {
                var o,
                  s = a(t);
                try {
                  for (s.s(); !(o = s.n()).done; ) {
                    var u = o.value,
                      l = u.codePointAt(0),
                      c = Pe(u);
                    (r = r || c),
                      c ||
                        this.ambiguousCharacters.isAmbiguous(l) ||
                        De.isInvisibleCharacter(l) ||
                        (i = !0);
                  }
                } catch (h) {
                  s.e(h);
                } finally {
                  s.f();
                }
              }
              return !r && i
                ? 0
                : this.options.invisibleCharacters &&
                  !ui(e) &&
                  De.isInvisibleCharacter(n)
                ? 2
                : this.options.ambiguousCharacters &&
                  this.ambiguousCharacters.isAmbiguous(n)
                ? 3
                : 0;
            },
          },
        ]),
        e
      );
    })();
    function ui(e) {
      return ' ' === e || '\n' === e || '\t' === e;
    }
    var li = function (e, t, n, r) {
        function i(e) {
          return e instanceof n
            ? e
            : new n(function (t) {
                t(e);
              });
        }
        return new (n || (n = Promise))(function (n, a) {
          function o(e) {
            try {
              u(r.next(e));
            } catch (t) {
              a(t);
            }
          }
          function s(e) {
            try {
              u(r['throw'](e));
            } catch (t) {
              a(t);
            }
          }
          function u(e) {
            e.done ? n(e.value) : i(e.value).then(o, s);
          }
          u((r = r.apply(e, t || [])).next());
        });
      },
      ci = (function (e) {
        s(n, e);
        var t = d(n);
        function n() {
          return v(this, n), t.apply(this, arguments);
        }
        return (
          g(n, [
            {
              key: 'uri',
              get: function () {
                return this._uri;
              },
            },
            {
              key: 'eol',
              get: function () {
                return this._eol;
              },
            },
            {
              key: 'getValue',
              value: function () {
                return this.getText();
              },
            },
            {
              key: 'getLinesContent',
              value: function () {
                return this._lines.slice(0);
              },
            },
            {
              key: 'getLineCount',
              value: function () {
                return this._lines.length;
              },
            },
            {
              key: 'getLineContent',
              value: function (e) {
                return this._lines[e - 1];
              },
            },
            {
              key: 'getWordAtPosition',
              value: function (e, t) {
                var n = yn(e.column, pn(t), this._lines[e.lineNumber - 1], 0);
                return n
                  ? new Jt(
                      e.lineNumber,
                      n.startColumn,
                      e.lineNumber,
                      n.endColumn,
                    )
                  : null;
              },
            },
            {
              key: 'words',
              value: function (e) {
                var t = this._lines,
                  n = this._wordenize.bind(this),
                  r = 0,
                  i = '',
                  a = 0,
                  o = [];
                return F(
                  {},
                  Symbol.iterator,
                  B().mark(function s() {
                    var u;
                    return B().wrap(function (s) {
                      while (1)
                        switch ((s.prev = s.next)) {
                          case 0:
                            if (!(a < o.length)) {
                              s.next = 8;
                              break;
                            }
                            return (
                              (u = i.substring(o[a].start, o[a].end)),
                              (a += 1),
                              (s.next = 6),
                              u
                            );
                          case 6:
                            s.next = 16;
                            break;
                          case 8:
                            if (!(r < t.length)) {
                              s.next = 15;
                              break;
                            }
                            (i = t[r]),
                              (o = n(i, e)),
                              (a = 0),
                              (r += 1),
                              (s.next = 16);
                            break;
                          case 15:
                            return s.abrupt('break', 18);
                          case 16:
                            s.next = 0;
                            break;
                          case 18:
                          case 'end':
                            return s.stop();
                        }
                    }, s);
                  }),
                );
              },
            },
            {
              key: 'getLineWords',
              value: function (e, t) {
                var n,
                  r = this._lines[e - 1],
                  i = this._wordenize(r, t),
                  o = [],
                  s = a(i);
                try {
                  for (s.s(); !(n = s.n()).done; ) {
                    var u = n.value;
                    o.push({
                      word: r.substring(u.start, u.end),
                      startColumn: u.start + 1,
                      endColumn: u.end + 1,
                    });
                  }
                } catch (l) {
                  s.e(l);
                } finally {
                  s.f();
                }
                return o;
              },
            },
            {
              key: '_wordenize',
              value: function (e, t) {
                var n,
                  r = [];
                t.lastIndex = 0;
                while ((n = t.exec(e))) {
                  if (0 === n[0].length) break;
                  r.push({ start: n.index, end: n.index + n[0].length });
                }
                return r;
              },
            },
            {
              key: 'getValueInRange',
              value: function (e) {
                if (
                  ((e = this._validateRange(e)),
                  e.startLineNumber === e.endLineNumber)
                )
                  return this._lines[e.startLineNumber - 1].substring(
                    e.startColumn - 1,
                    e.endColumn - 1,
                  );
                var t = this._eol,
                  n = e.startLineNumber - 1,
                  r = e.endLineNumber - 1,
                  i = [];
                i.push(this._lines[n].substring(e.startColumn - 1));
                for (var a = n + 1; a < r; a++) i.push(this._lines[a]);
                return (
                  i.push(this._lines[r].substring(0, e.endColumn - 1)),
                  i.join(t)
                );
              },
            },
            {
              key: 'offsetAt',
              value: function (e) {
                return (
                  (e = this._validatePosition(e)),
                  this._ensureLineStarts(),
                  this._lineStarts.getPrefixSum(e.lineNumber - 2) +
                    (e.column - 1)
                );
              },
            },
            {
              key: 'positionAt',
              value: function (e) {
                (e = Math.floor(e)),
                  (e = Math.max(0, e)),
                  this._ensureLineStarts();
                var t = this._lineStarts.getIndexOf(e),
                  n = this._lines[t.index].length;
                return {
                  lineNumber: 1 + t.index,
                  column: 1 + Math.min(t.remainder, n),
                };
              },
            },
            {
              key: '_validateRange',
              value: function (e) {
                var t = this._validatePosition({
                    lineNumber: e.startLineNumber,
                    column: e.startColumn,
                  }),
                  n = this._validatePosition({
                    lineNumber: e.endLineNumber,
                    column: e.endColumn,
                  });
                return t.lineNumber !== e.startLineNumber ||
                  t.column !== e.startColumn ||
                  n.lineNumber !== e.endLineNumber ||
                  n.column !== e.endColumn
                  ? {
                      startLineNumber: t.lineNumber,
                      startColumn: t.column,
                      endLineNumber: n.lineNumber,
                      endColumn: n.column,
                    }
                  : e;
              },
            },
            {
              key: '_validatePosition',
              value: function (e) {
                if (!Qt.isIPosition(e)) throw new Error('bad position');
                var t = e.lineNumber,
                  n = e.column,
                  r = !1;
                if (t < 1) (t = 1), (n = 1), (r = !0);
                else if (t > this._lines.length)
                  (t = this._lines.length),
                    (n = this._lines[t - 1].length + 1),
                    (r = !0);
                else {
                  var i = this._lines[t - 1].length + 1;
                  n < 1 ? ((n = 1), (r = !0)) : n > i && ((n = i), (r = !0));
                }
                return r ? { lineNumber: t, column: n } : e;
              },
            },
          ]),
          n
        );
      })(dn),
      hi = (function () {
        function e(t, n) {
          v(this, e),
            (this._host = t),
            (this._models = Object.create(null)),
            (this._foreignModuleFactory = n),
            (this._foreignModule = null);
        }
        return (
          g(e, [
            {
              key: 'dispose',
              value: function () {
                this._models = Object.create(null);
              },
            },
            {
              key: '_getModel',
              value: function (e) {
                return this._models[e];
              },
            },
            {
              key: '_getModels',
              value: function () {
                var e = this,
                  t = [];
                return (
                  Object.keys(this._models).forEach(function (n) {
                    return t.push(e._models[n]);
                  }),
                  t
                );
              },
            },
            {
              key: 'acceptNewModel',
              value: function (e) {
                this._models[e.url] = new ci(
                  Vt.parse(e.url),
                  e.lines,
                  e.EOL,
                  e.versionId,
                );
              },
            },
            {
              key: 'acceptModelChanged',
              value: function (e, t) {
                if (this._models[e]) {
                  var n = this._models[e];
                  n.onEvents(t);
                }
              },
            },
            {
              key: 'acceptRemovedModel',
              value: function (e) {
                this._models[e] && delete this._models[e];
              },
            },
            {
              key: 'computeUnicodeHighlights',
              value: function (e, t, n) {
                return li(
                  this,
                  void 0,
                  void 0,
                  B().mark(function r() {
                    var i;
                    return B().wrap(
                      function (r) {
                        while (1)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (((i = this._getModel(e)), i)) {
                                r.next = 3;
                                break;
                              }
                              return r.abrupt('return', {
                                ranges: [],
                                hasMore: !1,
                                ambiguousCharacterCount: 0,
                                invisibleCharacterCount: 0,
                                nonBasicAsciiCharacterCount: 0,
                              });
                            case 3:
                              return r.abrupt(
                                'return',
                                ai.computeUnicodeHighlights(i, t, n),
                              );
                            case 4:
                            case 'end':
                              return r.stop();
                          }
                      },
                      r,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: 'computeDiff',
              value: function (e, t, n, r) {
                return li(
                  this,
                  void 0,
                  void 0,
                  B().mark(function i() {
                    var a, o, s, u, l, c, h;
                    return B().wrap(
                      function (i) {
                        while (1)
                          switch ((i.prev = i.next)) {
                            case 0:
                              if (
                                ((a = this._getModel(e)),
                                (o = this._getModel(t)),
                                a && o)
                              ) {
                                i.next = 4;
                                break;
                              }
                              return i.abrupt('return', null);
                            case 4:
                              return (
                                (s = a.getLinesContent()),
                                (u = o.getLinesContent()),
                                (l = new an(s, u, {
                                  shouldComputeCharChanges: !0,
                                  shouldPostProcessCharChanges: !0,
                                  shouldIgnoreTrimWhitespace: n,
                                  shouldMakePrettyDiff: !0,
                                  maxComputationTime: r,
                                })),
                                (c = l.computeDiff()),
                                (h =
                                  !(c.changes.length > 0) &&
                                  this._modelsAreIdentical(a, o)),
                                i.abrupt('return', {
                                  quitEarly: c.quitEarly,
                                  identical: h,
                                  changes: c.changes,
                                })
                              );
                            case 10:
                            case 'end':
                              return i.stop();
                          }
                      },
                      i,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: '_modelsAreIdentical',
              value: function (e, t) {
                var n = e.getLineCount(),
                  r = t.getLineCount();
                if (n !== r) return !1;
                for (var i = 1; i <= n; i++) {
                  var a = e.getLineContent(i),
                    o = t.getLineContent(i);
                  if (a !== o) return !1;
                }
                return !0;
              },
            },
            {
              key: 'computeMoreMinimalEdits',
              value: function (t, n) {
                return li(
                  this,
                  void 0,
                  void 0,
                  B().mark(function r() {
                    var i, o, s, u, l, c, h, f, d, m, g, v, p, b, y, C, w, _;
                    return B().wrap(
                      function (r) {
                        while (1)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (((i = this._getModel(t)), i)) {
                                r.next = 3;
                                break;
                              }
                              return r.abrupt('return', n);
                            case 3:
                              (o = []),
                                (s = void 0),
                                (n = n.slice(0).sort(function (e, t) {
                                  if (e.range && t.range)
                                    return Jt.compareRangesUsingStarts(
                                      e.range,
                                      t.range,
                                    );
                                  var n = e.range ? 0 : 1,
                                    r = t.range ? 0 : 1;
                                  return n - r;
                                })),
                                (u = a(n)),
                                (r.prev = 7),
                                u.s();
                            case 9:
                              if ((l = u.n()).done) {
                                r.next = 30;
                                break;
                              }
                              if (
                                ((c = l.value),
                                (h = c.range),
                                (f = c.text),
                                (d = c.eol),
                                'number' === typeof d && (s = d),
                                !Jt.isEmpty(h) || f)
                              ) {
                                r.next = 17;
                                break;
                              }
                              return r.abrupt('continue', 28);
                            case 17:
                              if (
                                ((m = i.getValueInRange(h)),
                                (f = f.replace(/\r\n|\n|\r/g, i.eol)),
                                m !== f)
                              ) {
                                r.next = 21;
                                break;
                              }
                              return r.abrupt('continue', 28);
                            case 21:
                              if (
                                !(Math.max(f.length, m.length) > e._diffLimit)
                              ) {
                                r.next = 24;
                                break;
                              }
                              return (
                                o.push({ range: h, text: f }),
                                r.abrupt('continue', 28)
                              );
                            case 24:
                              (g = it(m, f, !1)),
                                (v = i.offsetAt(Jt.lift(h).getStartPosition())),
                                (p = a(g));
                              try {
                                for (p.s(); !(b = p.n()).done; )
                                  (y = b.value),
                                    (C = i.positionAt(v + y.originalStart)),
                                    (w = i.positionAt(
                                      v + y.originalStart + y.originalLength,
                                    )),
                                    (_ = {
                                      text: f.substr(
                                        y.modifiedStart,
                                        y.modifiedLength,
                                      ),
                                      range: {
                                        startLineNumber: C.lineNumber,
                                        startColumn: C.column,
                                        endLineNumber: w.lineNumber,
                                        endColumn: w.column,
                                      },
                                    }),
                                    i.getValueInRange(_.range) !== _.text &&
                                      o.push(_);
                              } catch (k) {
                                p.e(k);
                              } finally {
                                p.f();
                              }
                            case 28:
                              r.next = 9;
                              break;
                            case 30:
                              r.next = 35;
                              break;
                            case 32:
                              (r.prev = 32), (r.t0 = r['catch'](7)), u.e(r.t0);
                            case 35:
                              return (r.prev = 35), u.f(), r.finish(35);
                            case 38:
                              return (
                                'number' === typeof s &&
                                  o.push({
                                    eol: s,
                                    text: '',
                                    range: {
                                      startLineNumber: 0,
                                      startColumn: 0,
                                      endLineNumber: 0,
                                      endColumn: 0,
                                    },
                                  }),
                                r.abrupt('return', o)
                              );
                            case 40:
                            case 'end':
                              return r.stop();
                          }
                      },
                      r,
                      this,
                      [[7, 32, 35, 38]],
                    );
                  }),
                );
              },
            },
            {
              key: 'computeLinks',
              value: function (e) {
                return li(
                  this,
                  void 0,
                  void 0,
                  B().mark(function t() {
                    var n;
                    return B().wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((n = this._getModel(e)), n)) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt('return', null);
                            case 3:
                              return t.abrupt('return', xn(n));
                            case 4:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: 'textualSuggest',
              value: function (t, n, r, i) {
                return li(
                  this,
                  void 0,
                  void 0,
                  B().mark(function o() {
                    var s, u, l, c, h, f, d, m, g, v;
                    return B().wrap(
                      function (o) {
                        while (1)
                          switch ((o.prev = o.next)) {
                            case 0:
                              (s = new se(!0)),
                                (u = new RegExp(r, i)),
                                (l = new Set()),
                                (c = a(t)),
                                (o.prev = 4),
                                c.s();
                            case 6:
                              if ((h = c.n()).done) {
                                o.next = 33;
                                break;
                              }
                              if (((f = h.value), (d = this._getModel(f)), d)) {
                                o.next = 11;
                                break;
                              }
                              return o.abrupt('continue', 31);
                            case 11:
                              (m = a(d.words(u))), (o.prev = 12), m.s();
                            case 14:
                              if ((g = m.n()).done) {
                                o.next = 23;
                                break;
                              }
                              if (
                                ((v = g.value), v !== n && isNaN(Number(v)))
                              ) {
                                o.next = 18;
                                break;
                              }
                              return o.abrupt('continue', 21);
                            case 18:
                              if ((l.add(v), !(l.size > e._suggestionsLimit))) {
                                o.next = 21;
                                break;
                              }
                              return o.abrupt('break', 33);
                            case 21:
                              o.next = 14;
                              break;
                            case 23:
                              o.next = 28;
                              break;
                            case 25:
                              (o.prev = 25), (o.t0 = o['catch'](12)), m.e(o.t0);
                            case 28:
                              return (o.prev = 28), m.f(), o.finish(28);
                            case 31:
                              o.next = 6;
                              break;
                            case 33:
                              o.next = 38;
                              break;
                            case 35:
                              (o.prev = 35), (o.t1 = o['catch'](4)), c.e(o.t1);
                            case 38:
                              return (o.prev = 38), c.f(), o.finish(38);
                            case 41:
                              return o.abrupt('return', {
                                words: Array.from(l),
                                duration: s.elapsed(),
                              });
                            case 42:
                            case 'end':
                              return o.stop();
                          }
                      },
                      o,
                      this,
                      [
                        [4, 35, 38, 41],
                        [12, 25, 28, 31],
                      ],
                    );
                  }),
                );
              },
            },
            {
              key: 'computeWordRanges',
              value: function (e, t, n, r) {
                return li(
                  this,
                  void 0,
                  void 0,
                  B().mark(function i() {
                    var o, s, u, l, c, h, f, d, m;
                    return B().wrap(
                      function (i) {
                        while (1)
                          switch ((i.prev = i.next)) {
                            case 0:
                              if (((o = this._getModel(e)), o)) {
                                i.next = 3;
                                break;
                              }
                              return i.abrupt('return', Object.create(null));
                            case 3:
                              (s = new RegExp(n, r)),
                                (u = Object.create(null)),
                                (l = t.startLineNumber);
                            case 6:
                              if (!(l < t.endLineNumber)) {
                                i.next = 31;
                                break;
                              }
                              (c = o.getLineWords(l, s)),
                                (h = a(c)),
                                (i.prev = 9),
                                h.s();
                            case 11:
                              if ((f = h.n()).done) {
                                i.next = 20;
                                break;
                              }
                              if (((d = f.value), isNaN(Number(d.word)))) {
                                i.next = 15;
                                break;
                              }
                              return i.abrupt('continue', 18);
                            case 15:
                              (m = u[d.word]),
                                m || ((m = []), (u[d.word] = m)),
                                m.push({
                                  startLineNumber: l,
                                  startColumn: d.startColumn,
                                  endLineNumber: l,
                                  endColumn: d.endColumn,
                                });
                            case 18:
                              i.next = 11;
                              break;
                            case 20:
                              i.next = 25;
                              break;
                            case 22:
                              (i.prev = 22), (i.t0 = i['catch'](9)), h.e(i.t0);
                            case 25:
                              return (i.prev = 25), h.f(), i.finish(25);
                            case 28:
                              l++, (i.next = 6);
                              break;
                            case 31:
                              return i.abrupt('return', u);
                            case 32:
                            case 'end':
                              return i.stop();
                          }
                      },
                      i,
                      this,
                      [[9, 22, 25, 28]],
                    );
                  }),
                );
              },
            },
            {
              key: 'navigateValueSet',
              value: function (e, t, n, r, i) {
                return li(
                  this,
                  void 0,
                  void 0,
                  B().mark(function a() {
                    var o, s, u, l, c, h;
                    return B().wrap(
                      function (a) {
                        while (1)
                          switch ((a.prev = a.next)) {
                            case 0:
                              if (((o = this._getModel(e)), o)) {
                                a.next = 3;
                                break;
                              }
                              return a.abrupt('return', null);
                            case 3:
                              if (
                                ((s = new RegExp(r, i)),
                                t.startColumn === t.endColumn &&
                                  (t = {
                                    startLineNumber: t.startLineNumber,
                                    startColumn: t.startColumn,
                                    endLineNumber: t.endLineNumber,
                                    endColumn: t.endColumn + 1,
                                  }),
                                (u = o.getValueInRange(t)),
                                (l = o.getWordAtPosition(
                                  {
                                    lineNumber: t.startLineNumber,
                                    column: t.startColumn,
                                  },
                                  s,
                                )),
                                l)
                              ) {
                                a.next = 9;
                                break;
                              }
                              return a.abrupt('return', null);
                            case 9:
                              return (
                                (c = o.getValueInRange(l)),
                                (h = On.INSTANCE.navigateValueSet(
                                  t,
                                  u,
                                  l,
                                  c,
                                  n,
                                )),
                                a.abrupt('return', h)
                              );
                            case 12:
                            case 'end':
                              return a.stop();
                          }
                      },
                      a,
                      this,
                    );
                  }),
                );
              },
            },
            {
              key: 'loadForeignModule',
              value: function (e, t, n) {
                var r = this,
                  i = function (e, t) {
                    return r._host.fhr(e, t);
                  },
                  a = be(n, i),
                  o = {
                    host: a,
                    getMirrorModels: function () {
                      return r._getModels();
                    },
                  };
                return this._foreignModuleFactory
                  ? ((this._foreignModule = this._foreignModuleFactory(o, t)),
                    Promise.resolve(pe(this._foreignModule)))
                  : Promise.reject(new Error('Unexpected usage'));
              },
            },
            {
              key: 'fmr',
              value: function (e, t) {
                if (
                  !this._foreignModule ||
                  'function' !== typeof this._foreignModule[e]
                )
                  return Promise.reject(
                    new Error('Missing requestHandler or method: ' + e),
                  );
                try {
                  return Promise.resolve(
                    this._foreignModule[e].apply(this._foreignModule, t),
                  );
                } catch (n) {
                  return Promise.reject(n);
                }
              },
            },
          ]),
          e
        );
      })();
    (hi._diffLimit = 1e5),
      (hi._suggestionsLimit = 1e4),
      'function' === typeof importScripts && (ae['a'].monaco = Qr());
    var fi = !1;
    function di(e) {
      if (!fi) {
        fi = !0;
        var t = new Ye(
          function (e) {
            self.postMessage(e);
          },
          function (t) {
            return new hi(t, e);
          },
        );
        self.onmessage = function (e) {
          t.onmessage(e.data);
        };
      }
    }
    self.onmessage = function (e) {
      fi || di(null);
    };
  },
  IyRk: function (e, t) {
    (function (t) {
      e.exports = (function () {
        var e = {
            873: function (e) {
              var t;
              t = (function () {
                return this;
              })();
              try {
                t = t || new Function('return this')();
              } catch (n) {
                'object' === typeof window && (t = window);
              }
              e.exports = t;
            },
          },
          n = {};
        function r(t) {
          if (n[t]) return n[t].exports;
          var i = (n[t] = { exports: {} }),
            a = !0;
          try {
            e[t](i, i.exports, r), (a = !1);
          } finally {
            a && delete n[t];
          }
          return i.exports;
        }
        return (r.ab = t + '/'), r(873);
      })();
    }.call(this, '/'));
  },
  MNsG: function (e, t, n) {
    'use strict';
    (function (e, r) {
      var i;
      n.d(t, 'a', function () {
        return f;
      }),
        n.d(t, 'd', function () {
          return y;
        }),
        n.d(t, 'b', function () {
          return C;
        }),
        n.d(t, 'c', function () {
          return w;
        });
      var a = 'en',
        o = !1,
        s = !1,
        u = !1,
        l = !1,
        c = void 0,
        h = void 0,
        f = 'object' === typeof self ? self : 'object' === typeof e ? e : {},
        d = void 0;
      'undefined' !== typeof f.vscode && 'undefined' !== typeof f.vscode.process
        ? (d = f.vscode.process)
        : 'undefined' !== typeof r && (d = r);
      var m =
          'string' ===
          typeof (null ===
            (i = null === d || void 0 === d ? void 0 : d.versions) ||
          void 0 === i
            ? void 0
            : i.electron),
        g = m && 'renderer' === (null === d || void 0 === d ? void 0 : d.type);
      if ('object' !== typeof navigator || g)
        if ('object' === typeof d) {
          (o = 'win32' === d.platform),
            (s = 'darwin' === d.platform),
            (u = 'linux' === d.platform),
            u && !!d.env['SNAP'] && !!d.env['SNAP_REVISION'],
            m,
            !!d.env['CI'] || !!d.env['BUILD_ARTIFACTSTAGINGDIRECTORY'],
            (c = a),
            a;
          var v = d.env['VSCODE_NLS_CONFIG'];
          if (v)
            try {
              var p = JSON.parse(v),
                b = p.availableLanguages['*'];
              (c = p.locale), b || a, p._translationsConfigFile;
            } catch (S) {}
          !0;
        } else console.error('Unable to resolve platform.');
      else
        (h = navigator.userAgent),
          (o = h.indexOf('Windows') >= 0),
          (s = h.indexOf('Macintosh') >= 0),
          (h.indexOf('Macintosh') >= 0 ||
            h.indexOf('iPad') >= 0 ||
            h.indexOf('iPhone') >= 0) &&
            !!navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 0,
          (u = h.indexOf('Linux') >= 0),
          (l = !0),
          (c = navigator.language),
          c;
      var y = o,
        C = s,
        w = l,
        _ = (l && f.importScripts, h);
      (function () {
        if ('function' === typeof f.postMessage && !f.importScripts) {
          var e = [];
          f.addEventListener('message', function (t) {
            if (t.data && t.data.vscodeScheduleAsyncWork)
              for (var n = 0, r = e.length; n < r; n++) {
                var i = e[n];
                if (i.id === t.data.vscodeScheduleAsyncWork)
                  return e.splice(n, 1), void i.callback();
              }
          });
          var t = 0;
          return function (n) {
            var r = ++t;
            e.push({ id: r, callback: n }),
              f.postMessage({ vscodeScheduleAsyncWork: r }, '*');
          };
        }
      })();
      var k = !!(_ && _.indexOf('Chrome') >= 0);
      _ && _.indexOf('Firefox'),
        !k && _ && _.indexOf('Safari'),
        _ && _.indexOf('Edg/'),
        _ && _.indexOf('Android');
    }.call(this, n('IyRk'), n('Q2Ig')));
  },
  Q2Ig: function (e, t, n) {
    (t.nextTick = function (e) {
      var t = Array.prototype.slice.call(arguments);
      t.shift(),
        setTimeout(function () {
          e.apply(null, t);
        }, 0);
    }),
      (t.platform = t.arch = t.execPath = t.title = 'browser'),
      (t.pid = 1),
      (t.browser = !0),
      (t.env = {}),
      (t.argv = []),
      (t.binding = function (e) {
        throw new Error('No such module. (Possibly not yet loaded)');
      }),
      (function () {
        var e,
          r = '/';
        (t.cwd = function () {
          return r;
        }),
          (t.chdir = function (t) {
            e || (e = n('33yf')), (r = e.resolve(t, r));
          });
      })(),
      (t.exit =
        t.kill =
        t.umask =
        t.dlopen =
        t.uptime =
        t.memoryUsage =
        t.uvCounters =
          function () {}),
      (t.features = {});
  },
  wxcJ: function (e, t, n) {
    'use strict';
    (function (e) {
      n.d(t, 'a', function () {
        return o;
      }),
        n.d(t, 'b', function () {
          return s;
        }),
        n.d(t, 'c', function () {
          return u;
        });
      var r,
        i = n('MNsG');
      if (
        'undefined' !== typeof i['a'].vscode &&
        'undefined' !== typeof i['a'].vscode.process
      ) {
        var a = i['a'].vscode.process;
        r = {
          get platform() {
            return a.platform;
          },
          get arch() {
            return a.arch;
          },
          get env() {
            return a.env;
          },
          cwd: function () {
            return a.cwd();
          },
        };
      } else
        r =
          'undefined' !== typeof e
            ? {
                get platform() {
                  return e.platform;
                },
                get arch() {
                  return e.arch;
                },
                get env() {
                  return Object({ NODE_ENV: 'production' });
                },
                cwd: function () {
                  return (
                    Object({ NODE_ENV: 'production' })['VSCODE_CWD'] || e.cwd()
                  );
                },
              }
            : {
                get platform() {
                  return i['d'] ? 'win32' : i['b'] ? 'darwin' : 'linux';
                },
                get arch() {},
                get env() {
                  return {};
                },
                cwd: function () {
                  return '/';
                },
              };
      var o = r.cwd,
        s = r.env,
        u = r.platform;
    }.call(this, n('Q2Ig')));
  },
});

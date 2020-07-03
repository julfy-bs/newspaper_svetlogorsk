!(function (e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var c = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(c.exports, c, c.exports, r), (c.l = !0), c.exports
  }
  ;(r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (r.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var c in e)
          r.d(
            n,
            c,
            function (t) {
              return e[t]
            }.bind(null, c),
          )
      return n
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = './'),
    r((r.s = 5))
})([
  function (e, t, r) {},
  function (e, t) {
    var r = document.querySelector('#hamburger-menu-link'),
      n = document.querySelector('#hamburger-menu'),
      c = document.querySelector('#close-nav-button'),
      u = n.querySelectorAll('.menu__link')
    r.addEventListener('click', function (e) {
      e.preventDefault(),
        n.classList.add('hamburger-menu--active'),
        document.body.classList.add('restrictedScroll')
    }),
      c.addEventListener('click', function (e) {
        e.preventDefault(),
          n.classList.remove('hamburger-menu--active'),
          document.body.classList.remove('restrictedScroll')
      })
    for (var o = 0; o < u.length; o++)
      u[o].addEventListener('click', function () {
        n.classList.remove('hamburger-menu--active'),
          document.body.classList.remove('restrictedScroll')
      })
  },
  function (e, t) {
    var r = document.querySelector('.slider__left'),
      n = document.querySelector('.slider__right'),
      c = document.querySelector('.slider__main')
    document.querySelector('.slider__item')
    function u(e, t) {
      t.preventDefault(),
        'right' === e
          ? c.appendChild(c.firstElementChild)
          : c.insertBefore(c.lastElementChild, c.firstElementChild)
    }
    n.addEventListener('click', function (e) {
      u('right', e)
    }),
      r.addEventListener('click', function (e) {
        u('left', e)
      })
  },
  function (e, t) {
    var r = document.querySelector('.header__links'),
      n = document.querySelector('.search__input')
    n.addEventListener('focus', function (e) {
      e.preventDefault(), r.classList.add('focus__search--active')
    }),
      n.addEventListener('blur', function (e) {
        e.preventDefault(), r.classList.remove('focus__search--active')
      })
  },
  function (e, t, r) {
    'use strict'
    r.r(t)
    r(0), r(1), r(2), r(3)
  },
])

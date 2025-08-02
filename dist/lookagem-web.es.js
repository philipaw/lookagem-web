import Ue, { createContext as Be, useContext as qe, useState as O, useEffect as Z, useRef as Cr } from "react";
import { Navigate as fe, useNavigate as Q, BrowserRouter as Ge, Routes as Pr, Route as Y } from "react-router-dom";
import Tr from "react-dom";
var de = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Sr() {
  if (Ve) return M;
  Ve = 1;
  var i = Ue, o = Symbol.for("react.element"), d = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, N = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(j, s, T) {
    var v, E = {}, m = null, A = null;
    T !== void 0 && (m = "" + T), s.key !== void 0 && (m = "" + s.key), s.ref !== void 0 && (A = s.ref);
    for (v in s) b.call(s, v) && !h.hasOwnProperty(v) && (E[v] = s[v]);
    if (j && j.defaultProps) for (v in s = j.defaultProps, s) E[v] === void 0 && (E[v] = s[v]);
    return { $$typeof: o, type: j, key: m, ref: A, props: E, _owner: N.current };
  }
  return M.Fragment = d, M.jsx = C, M.jsxs = C, M;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function kr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Ue, o = Symbol.for("react.element"), d = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), j = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), q = Symbol.iterator, ee = "@@iterator";
    function re(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = q && e[q] || e[ee];
      return typeof t == "function" ? t : null;
    }
    var k = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        p("error", e, n);
      }
    }
    function p(e, t, n) {
      {
        var a = k.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (t += "%s", n = n.concat([u]));
        var f = n.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var x = !1, _ = !1, G = !1, te = !1, Xe = !1, ve;
    ve = Symbol.for("react.module.reference");
    function Ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === h || Xe || e === N || e === T || e === v || te || e === A || x || _ || G || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === E || e.$$typeof === C || e.$$typeof === j || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ve || e.getModuleId !== void 0));
    }
    function Qe(e, t, n) {
      var a = e.displayName;
      if (a)
        return a;
      var u = t.displayName || t.name || "";
      return u !== "" ? n + "(" + u + ")" : n;
    }
    function me(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case d:
          return "Portal";
        case h:
          return "Profiler";
        case N:
          return "StrictMode";
        case T:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var t = e;
            return me(t) + ".Consumer";
          case C:
            var n = e;
            return me(n._context) + ".Provider";
          case s:
            return Qe(e, e.render, "ForwardRef");
          case E:
            var a = e.displayName || null;
            return a !== null ? a : D(e.type) || "Memo";
          case m: {
            var u = e, f = u._payload, l = u._init;
            try {
              return D(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, V = 0, pe, ge, be, xe, ye, je, Ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function er() {
      {
        if (V === 0) {
          pe = console.log, ge = console.info, be = console.warn, xe = console.error, ye = console.group, je = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function rr() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: pe
            }),
            info: $({}, e, {
              value: ge
            }),
            warn: $({}, e, {
              value: be
            }),
            error: $({}, e, {
              value: xe
            }),
            group: $({}, e, {
              value: ye
            }),
            groupCollapsed: $({}, e, {
              value: je
            }),
            groupEnd: $({}, e, {
              value: Ee
            })
          });
        }
        V < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = k.ReactCurrentDispatcher, ae;
    function K(e, t, n) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            ae = a && a[1] || "";
          }
        return `
` + ae + e;
      }
    }
    var oe = !1, J;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      J = new tr();
    }
    function _e(e, t) {
      if (!e || oe)
        return "";
      {
        var n = J.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      oe = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = ne.current, ne.current = null, er();
      try {
        if (t) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (P) {
              a = P;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (P) {
              a = P;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            a = P;
          }
          e();
        }
      } catch (P) {
        if (P && a && typeof P.stack == "string") {
          for (var c = P.stack.split(`
`), w = a.stack.split(`
`), g = c.length - 1, y = w.length - 1; g >= 1 && y >= 0 && c[g] !== w[y]; )
            y--;
          for (; g >= 1 && y >= 0; g--, y--)
            if (c[g] !== w[y]) {
              if (g !== 1 || y !== 1)
                do
                  if (g--, y--, y < 0 || c[g] !== w[y]) {
                    var S = `
` + c[g].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, S), S;
                  }
                while (g >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        oe = !1, ne.current = f, rr(), Error.prepareStackTrace = u;
      }
      var L = e ? e.displayName || e.name : "", F = L ? K(L) : "";
      return typeof e == "function" && J.set(e, F), F;
    }
    function nr(e, t, n) {
      return _e(e, !1);
    }
    function ar(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function H(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, ar(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case T:
          return K("Suspense");
        case v:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return nr(e.render);
          case E:
            return H(e.type, t, n);
          case m: {
            var a = e, u = a._payload, f = a._init;
            try {
              return H(f(u), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, Ne = {}, we = k.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var t = e._owner, n = H(e.type, e._source, t ? t.type : null);
        we.setExtraStackFrame(n);
      } else
        we.setExtraStackFrame(null);
    }
    function or(e, t, n, a, u) {
      {
        var f = Function.call.bind(W);
        for (var l in e)
          if (f(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var w = Error((a || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              c = e[l](t, l, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              c = g;
            }
            c && !(c instanceof Error) && (z(u), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, l, typeof c), z(null)), c instanceof Error && !(c.message in Ne) && (Ne[c.message] = !0, z(u), R("Failed %s type: %s", n, c.message), z(null));
          }
      }
    }
    var ir = Array.isArray;
    function ie(e) {
      return ir(e);
    }
    function sr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function cr(e) {
      try {
        return Ce(e), !1;
      } catch {
        return !0;
      }
    }
    function Ce(e) {
      return "" + e;
    }
    function Pe(e) {
      if (cr(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), Ce(e);
    }
    var Te = k.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, ke;
    function ur(e) {
      if (W.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function fr(e) {
      if (W.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function dr(e, t) {
      typeof e.ref == "string" && Te.current;
    }
    function hr(e, t) {
      {
        var n = function() {
          Se || (Se = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function vr(e, t) {
      {
        var n = function() {
          ke || (ke = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var mr = function(e, t, n, a, u, f, l) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function pr(e, t, n, a, u) {
      {
        var f, l = {}, c = null, w = null;
        n !== void 0 && (Pe(n), c = "" + n), fr(t) && (Pe(t.key), c = "" + t.key), ur(t) && (w = t.ref, dr(t, u));
        for (f in t)
          W.call(t, f) && !lr.hasOwnProperty(f) && (l[f] = t[f]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (f in g)
            l[f] === void 0 && (l[f] = g[f]);
        }
        if (c || w) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && hr(l, y), w && vr(l, y);
        }
        return mr(e, c, w, u, a, Te.current, l);
      }
    }
    var se = k.ReactCurrentOwner, Oe = k.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var t = e._owner, n = H(e.type, e._source, t ? t.type : null);
        Oe.setExtraStackFrame(n);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function De() {
      {
        if (se.current) {
          var e = D(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gr(e) {
      return "";
    }
    var Ae = {};
    function br(e) {
      {
        var t = De();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function $e(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = br(t);
        if (Ae[n])
          return;
        Ae[n] = !0;
        var a = "";
        e && e._owner && e._owner !== se.current && (a = " It was passed a child from " + D(e._owner.type) + "."), I(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), I(null);
      }
    }
    function Fe(e, t) {
      {
        if (typeof e != "object")
          return;
        if (ie(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            le(a) && $e(a, t);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = re(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), l; !(l = f.next()).done; )
              le(l.value) && $e(l.value, t);
        }
      }
    }
    function xr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === E))
          n = t.propTypes;
        else
          return;
        if (n) {
          var a = D(t);
          or(n, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !ce) {
          ce = !0;
          var u = D(t);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var a = t[n];
          if (a !== "children" && a !== "key") {
            I(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Ie = {};
    function Le(e, t, n, a, u, f) {
      {
        var l = Ze(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = gr();
          w ? c += w : c += De();
          var g;
          e === null ? g = "null" : ie(e) ? g = "array" : e !== void 0 && e.$$typeof === o ? (g = "<" + (D(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, c);
        }
        var y = pr(e, t, n, u, f);
        if (y == null)
          return y;
        if (l) {
          var S = t.children;
          if (S !== void 0)
            if (a)
              if (ie(S)) {
                for (var L = 0; L < S.length; L++)
                  Fe(S[L], e);
                Object.freeze && Object.freeze(S);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(S, e);
        }
        if (W.call(t, "key")) {
          var F = D(e), P = Object.keys(t).filter(function(wr) {
            return wr !== "key";
          }), ue = P.length > 0 ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[F + ue]) {
            var Nr = P.length > 0 ? "{" + P.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, F, Nr, F), Ie[F + ue] = !0;
          }
        }
        return e === b ? yr(y) : xr(y), y;
      }
    }
    function jr(e, t, n) {
      return Le(e, t, n, !0);
    }
    function Er(e, t, n) {
      return Le(e, t, n, !1);
    }
    var Rr = Er, _r = jr;
    U.Fragment = b, U.jsx = Rr, U.jsxs = _r;
  }()), U;
}
process.env.NODE_ENV === "production" ? de.exports = Sr() : de.exports = kr();
var r = de.exports;
const Ke = Be(void 0), Or = () => {
  const i = qe(Ke);
  if (i === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return i;
}, Je = ({ children: i }) => {
  const [o, d] = O(() => typeof window < "u" && localStorage.getItem("theme") || "light");
  Z(() => {
    window.document.documentElement.setAttribute("data-theme", o), localStorage.setItem("theme", o);
  }, [o]);
  const N = {
    theme: o,
    toggleTheme: () => {
      d((h) => h === "light" ? "dark" : "light");
    }
  };
  return /* @__PURE__ */ r.jsx(Ke.Provider, { value: N, children: i });
}, He = Be(void 0), B = () => {
  const i = qe(He);
  if (i === void 0)
    throw new Error("useAuth must be used within an AuthProvider");
  return i;
}, ze = ({ children: i }) => {
  const [o, d] = O({
    phoneNumber: "",
    isVerified: !1
  }), b = async (j) => {
    console.log("Sending verification code to:", j), await new Promise((s) => setTimeout(s, 1e3)), d((s) => ({ ...s, phoneNumber: j }));
  }, N = async (j) => {
    if (console.log("Verifying code:", j, "for phone:", o.phoneNumber), await new Promise((s) => setTimeout(s, 1e3)), j.length === 6)
      d((s) => ({ ...s, isVerified: !0 }));
    else
      throw new Error("Invalid verification code");
  }, h = () => {
    d({ phoneNumber: "", isVerified: !1 });
  }, C = {
    userData: o,
    isAuthenticated: o.isVerified,
    sendVerificationCode: b,
    verifyCode: N,
    logout: h
  };
  return /* @__PURE__ */ r.jsx(He.Provider, { value: C, children: i });
};
function Dr() {
  const { theme: i, toggleTheme: o } = Or();
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      onClick: o,
      className: "theme-toggle",
      "aria-label": `Switch to ${i === "light" ? "dark" : "light"} mode`,
      title: `Switch to ${i === "light" ? "dark" : "light"} mode`,
      children: i === "light" ? "🌙" : "☀️"
    }
  );
}
function Ye({ children: i }) {
  const { isAuthenticated: o, userData: d } = B();
  return d.phoneNumber ? o ? /* @__PURE__ */ r.jsx(r.Fragment, { children: i }) : /* @__PURE__ */ r.jsx(fe, { to: "/verify", replace: !0 }) : /* @__PURE__ */ r.jsx(fe, { to: "/", replace: !0 });
}
function Ar() {
  const [i, o] = O(""), [d, b] = O(!1), [N, h] = O(""), C = Q(), { sendVerificationCode: j } = B(), s = (E) => {
    const m = E.replace(/\D/g, "");
    return m.length >= 6 ? `(${m.slice(0, 3)}) ${m.slice(3, 6)}-${m.slice(
      6,
      10
    )}` : m.length >= 3 ? `(${m.slice(0, 3)}) ${m.slice(3)}` : m;
  }, T = (E) => {
    const m = s(E.target.value);
    o(m), h("");
  }, v = async (E) => {
    E.preventDefault();
    const m = i.replace(/\D/g, "");
    if (m.length !== 10) {
      h("Please enter a valid 10-digit phone number");
      return;
    }
    b(!0), h("");
    try {
      await j(m), C("/verify");
    } catch {
      h("Failed to send verification code. Please try again.");
    } finally {
      b(!1);
    }
  };
  return /* @__PURE__ */ r.jsx("div", { className: "auth-container", children: /* @__PURE__ */ r.jsxs("div", { className: "auth-card fade-in", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "auth-header", children: [
      /* @__PURE__ */ r.jsx("div", { className: "auth-brand", children: "GEM 💎" }),
      /* @__PURE__ */ r.jsx("p", { className: "auth-subtitle", children: "Make stuff" })
    ] }),
    /* @__PURE__ */ r.jsxs("form", { onSubmit: v, className: "space-y-8", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ r.jsx("label", { htmlFor: "phone", className: "form-label", children: "Phone Number" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            id: "phone",
            type: "tel",
            required: !0,
            value: i,
            onChange: T,
            placeholder: "(555) 123-4567",
            className: "form-input",
            maxLength: 14
          }
        )
      ] }),
      N && /* @__PURE__ */ r.jsx("div", { className: "form-error text-center", children: N }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          type: "submit",
          disabled: d || i.replace(/\D/g, "").length !== 10,
          className: "btn btn-primary w-full",
          children: d ? /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-center space-x-3", children: [
            /* @__PURE__ */ r.jsx("div", { className: "loading-spinner w-5 h-5" }),
            /* @__PURE__ */ r.jsx("span", { children: "Sending..." })
          ] }) : i.replace(/\D/g, "").length > 0 ? "Continue" : "Get Started"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ r.jsx("p", { className: "body-sm", children: "We'll send you a verification code via SMS" }) })
  ] }) });
}
function $r() {
  const [i, o] = O(["", "", "", "", "", ""]), [d, b] = O(!1), [N, h] = O(""), [C, j] = O(30), s = Cr([]), T = Q(), { userData: v, verifyCode: E, sendVerificationCode: m } = B();
  Z(() => {
    v.phoneNumber || T("/");
  }, [v.phoneNumber, T]);
  const A = v.phoneNumber ? `(${v.phoneNumber.slice(0, 3)}) ${v.phoneNumber.slice(
    3,
    6
  )}-${v.phoneNumber.slice(6)}` : "";
  Z(() => {
    const p = setInterval(() => {
      j((x) => x > 0 ? x - 1 : 0);
    }, 1e3);
    return () => clearInterval(p);
  }, []), Z(() => {
    s.current[0] && s.current[0].focus();
  }, []);
  const q = (p, x) => {
    var G;
    if (!/^\d*$/.test(x)) return;
    const _ = [...i];
    _[p] = x, o(_), h(""), x && p < 5 && s.current[p + 1] && ((G = s.current[p + 1]) == null || G.focus()), _.every((te) => te !== "") && p === 5 && k(_.join(""));
  }, ee = (p, x) => {
    var _;
    x.key === "Backspace" && !i[p] && p > 0 && ((_ = s.current[p - 1]) == null || _.focus());
  }, re = (p) => {
    p.preventDefault();
    const x = p.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (x.length === 6) {
      const _ = x.split("");
      o(_), h(""), k(x);
    }
  }, k = async (p) => {
    b(!0), h("");
    try {
      await E(p), T("/home");
    } catch {
      h("Invalid verification code. Please try again."), o(["", "", "", "", "", ""]), s.current[0] && s.current[0].focus();
    } finally {
      b(!1);
    }
  }, R = async () => {
    if (!(C > 0))
      try {
        await m(v.phoneNumber), j(30), h(""), o(["", "", "", "", "", ""]), s.current[0] && s.current[0].focus();
      } catch {
        h("Failed to resend code. Please try again.");
      }
  };
  return /* @__PURE__ */ r.jsx("div", { className: "auth-container", children: /* @__PURE__ */ r.jsxs("div", { className: "auth-card fade-in", children: [
    /* @__PURE__ */ r.jsx("div", { className: "mb-6", children: /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: () => T("/"),
        className: "btn btn-ghost text-left p-0 mb-6",
        children: "← Back"
      }
    ) }),
    /* @__PURE__ */ r.jsxs("div", { className: "auth-header", children: [
      /* @__PURE__ */ r.jsx("div", { className: "auth-brand", children: "Verification" }),
      /* @__PURE__ */ r.jsx("p", { className: "auth-subtitle", children: "Enter the code we sent" }),
      /* @__PURE__ */ r.jsxs("p", { className: "body-md mt-4", children: [
        "Code sent to: ",
        /* @__PURE__ */ r.jsx("strong", { children: A })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ r.jsx("label", { className: "form-label text-center block", children: "Verification Code" }),
        /* @__PURE__ */ r.jsx("div", { className: "code-input-grid", children: i.map((p, x) => /* @__PURE__ */ r.jsx(
          "input",
          {
            ref: (_) => s.current[x] = _,
            type: "text",
            inputMode: "numeric",
            maxLength: 1,
            value: p,
            onChange: (_) => q(x, _.target.value),
            onKeyDown: (_) => ee(x, _),
            onPaste: re,
            className: "code-input",
            disabled: d
          },
          x
        )) })
      ] }),
      N && /* @__PURE__ */ r.jsx("div", { className: "form-error text-center", children: N }),
      d && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg", children: [
        /* @__PURE__ */ r.jsx("div", { className: "loading-spinner w-5 h-5" }),
        /* @__PURE__ */ r.jsx("span", { className: "body-md", children: "Verifying..." })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ r.jsx("p", { className: "body-sm", children: "Didn't receive the code?" }),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: R,
            disabled: C > 0,
            className: "btn btn-ghost",
            children: C > 0 ? `Resend in ${C}s` : "Resend Code"
          }
        )
      ] })
    ] })
  ] }) });
}
function Fr() {
  const { logout: i } = B(), o = Q(), d = () => {
    i(), o("/");
  }, b = () => {
    o("/account");
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "studio-layout", children: [
    /* @__PURE__ */ r.jsxs("nav", { className: "nav container", children: [
      /* @__PURE__ */ r.jsx("div", { className: "nav-brand", children: "GEM" }),
      /* @__PURE__ */ r.jsxs("div", { className: "nav-links", children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: b,
            className: "btn btn-ghost",
            title: "Account",
            children: /* @__PURE__ */ r.jsxs(
              "svg",
              {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ r.jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
                  /* @__PURE__ */ r.jsx("circle", { cx: "12", cy: "7", r: "4" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx("button", { onClick: d, className: "btn btn-ghost", children: "Logout" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("main", { className: "container section-lg", children: /* @__PURE__ */ r.jsx("div", { className: "text-center", children: /* @__PURE__ */ r.jsx("p", { className: "body-md opacity-50", children: "Welcome to your workspace" }) }) })
  ] });
}
function Ir() {
  const { logout: i, userData: o } = B(), d = Q(), b = () => {
    i(), d("/");
  }, N = () => {
    d("/home");
  }, h = o.phoneNumber ? `(${o.phoneNumber.slice(0, 3)}) ${o.phoneNumber.slice(
    3,
    6
  )}-${o.phoneNumber.slice(6)}` : "";
  return /* @__PURE__ */ r.jsxs("div", { className: "studio-layout", children: [
    /* @__PURE__ */ r.jsxs("nav", { className: "nav container", children: [
      /* @__PURE__ */ r.jsx("div", { className: "nav-brand", children: "GEM" }),
      /* @__PURE__ */ r.jsxs("div", { className: "nav-links", children: [
        /* @__PURE__ */ r.jsx("button", { onClick: N, className: "btn btn-ghost", children: "← Back to Home" }),
        /* @__PURE__ */ r.jsx("button", { onClick: b, className: "btn btn-ghost", children: "Logout" })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("main", { className: "container section-lg", children: /* @__PURE__ */ r.jsxs("div", { className: "auth-card mx-auto fade-in", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "auth-header", children: [
        /* @__PURE__ */ r.jsx("div", { className: "auth-brand", children: "Account" }),
        /* @__PURE__ */ r.jsx("p", { className: "auth-subtitle", children: "Your Profile Information" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ r.jsx("label", { className: "form-label", children: "Phone Number" }),
          /* @__PURE__ */ r.jsx("div", { className: "form-input bg-gray-50 opacity-75", children: h || "Not provided" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ r.jsx("label", { className: "form-label", children: "Account Status" }),
          /* @__PURE__ */ r.jsx("div", { className: "form-input bg-gray-50 opacity-75", children: "Verified" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ r.jsx("label", { className: "form-label", children: "Member Since" }),
          /* @__PURE__ */ r.jsx("div", { className: "form-input bg-gray-50 opacity-75", children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ r.jsx("button", { onClick: b, className: "btn btn-secondary w-full", children: "Sign Out" }) })
    ] }) })
  ] });
}
function Lr() {
  return /* @__PURE__ */ r.jsx(ze, { children: /* @__PURE__ */ r.jsx(Je, { children: /* @__PURE__ */ r.jsx(Ge, { children: /* @__PURE__ */ r.jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ r.jsx(Dr, {}),
    /* @__PURE__ */ r.jsxs(Pr, { children: [
      /* @__PURE__ */ r.jsx(Y, { path: "/", element: /* @__PURE__ */ r.jsx(Ar, {}) }),
      /* @__PURE__ */ r.jsx(Y, { path: "/verify", element: /* @__PURE__ */ r.jsx($r, {}) }),
      /* @__PURE__ */ r.jsx(
        Y,
        {
          path: "/home",
          element: /* @__PURE__ */ r.jsx(Ye, { children: /* @__PURE__ */ r.jsx(Fr, {}) })
        }
      ),
      /* @__PURE__ */ r.jsx(
        Y,
        {
          path: "/account",
          element: /* @__PURE__ */ r.jsx(Ye, { children: /* @__PURE__ */ r.jsx(Ir, {}) })
        }
      ),
      /* @__PURE__ */ r.jsx(Y, { path: "*", element: /* @__PURE__ */ r.jsx(fe, { to: "/", replace: !0 }) })
    ] })
  ] }) }) }) });
}
var he, X = Tr;
if (process.env.NODE_ENV === "production")
  he = X.createRoot, X.hydrateRoot;
else {
  var Me = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  he = function(i, o) {
    Me.usingClientEntryPoint = !0;
    try {
      return X.createRoot(i, o);
    } finally {
      Me.usingClientEntryPoint = !1;
    }
  };
}
function Ur(i, o) {
  he(i).render(/* @__PURE__ */ r.jsx(Vr, { ...o }));
}
const Vr = ({
  basename: i = "/",
  className: o
}) => /* @__PURE__ */ r.jsx("div", { className: o, children: /* @__PURE__ */ r.jsx(ze, { children: /* @__PURE__ */ r.jsx(Je, { children: /* @__PURE__ */ r.jsx(Ge, { basename: i, children: /* @__PURE__ */ r.jsx(Lr, {}) }) }) }) });
export {
  Ir as AccountPage,
  ze as AuthProvider,
  Ar as EntrancePage,
  Fr as HomePage,
  Lr as LookagemApp,
  Vr as LookagemWeb,
  Ye as ProtectedRoute,
  Je as ThemeProvider,
  Dr as ThemeToggle,
  $r as VerificationPage,
  Ur as mountLookagemWeb,
  B as useAuth,
  Or as useTheme
};

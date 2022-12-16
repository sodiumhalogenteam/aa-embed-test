var G = { exports: {} }, S = {}, D = { exports: {} }, r = {};
var z;
function ee() {
  if (z)
    return r;
  z = 1;
  var a = Symbol.for("react.element"), b = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), E = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function h(e) {
    return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var R = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, N = Object.assign, U = {};
  function m(e, t, n) {
    this.props = e, this.context = t, this.refs = U, this.updater = n || R;
  }
  m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  }, m.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function L() {
  }
  L.prototype = m.prototype;
  function P(e, t, n) {
    this.props = e, this.context = t, this.refs = U, this.updater = n || R;
  }
  var g = P.prototype = new L();
  g.constructor = P, N(g, m.prototype), g.isPureReactComponent = !0;
  var V = Array.isArray, F = Object.prototype.hasOwnProperty, q = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(e, t, n) {
    var u, o = {}, c = null, f = null;
    if (t != null)
      for (u in t.ref !== void 0 && (f = t.ref), t.key !== void 0 && (c = "" + t.key), t)
        F.call(t, u) && !M.hasOwnProperty(u) && (o[u] = t[u]);
    var s = arguments.length - 2;
    if (s === 1)
      o.children = n;
    else if (1 < s) {
      for (var i = Array(s), d = 0; d < s; d++)
        i[d] = arguments[d + 2];
      o.children = i;
    }
    if (e && e.defaultProps)
      for (u in s = e.defaultProps, s)
        o[u] === void 0 && (o[u] = s[u]);
    return { $$typeof: a, type: e, key: c, ref: f, props: o, _owner: q.current };
  }
  function K(e, t) {
    return { $$typeof: a, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function A(e) {
    return typeof e == "object" && e !== null && e.$$typeof === a;
  }
  function Q(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var J = /\/+/g;
  function T(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Q("" + e.key) : t.toString(36);
  }
  function x(e, t, n, u, o) {
    var c = typeof e;
    (c === "undefined" || c === "boolean") && (e = null);
    var f = !1;
    if (e === null)
      f = !0;
    else
      switch (c) {
        case "string":
        case "number":
          f = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case a:
            case b:
              f = !0;
          }
      }
    if (f)
      return f = e, o = o(f), e = u === "" ? "." + T(f, 0) : u, V(o) ? (n = "", e != null && (n = e.replace(J, "$&/") + "/"), x(o, t, n, "", function(d) {
        return d;
      })) : o != null && (A(o) && (o = K(o, n + (!o.key || f && f.key === o.key ? "" : ("" + o.key).replace(J, "$&/") + "/") + e)), t.push(o)), 1;
    if (f = 0, u = u === "" ? "." : u + ":", V(e))
      for (var s = 0; s < e.length; s++) {
        c = e[s];
        var i = u + T(c, s);
        f += x(c, t, n, i, o);
      }
    else if (i = h(e), typeof i == "function")
      for (e = i.call(e), s = 0; !(c = e.next()).done; )
        c = c.value, i = u + T(c, s++), f += x(c, t, n, i, o);
    else if (c === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return f;
  }
  function w(e, t, n) {
    if (e == null)
      return e;
    var u = [], o = 0;
    return x(e, u, "", "", function(c) {
      return t.call(n, c, o++);
    }), u;
  }
  function X(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1)
      return e._result.default;
    throw e._result;
  }
  var l = { current: null }, $ = { transition: null }, Z = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: $, ReactCurrentOwner: q };
  return r.Children = { map: w, forEach: function(e, t, n) {
    w(e, function() {
      t.apply(this, arguments);
    }, n);
  }, count: function(e) {
    var t = 0;
    return w(e, function() {
      t++;
    }), t;
  }, toArray: function(e) {
    return w(e, function(t) {
      return t;
    }) || [];
  }, only: function(e) {
    if (!A(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  } }, r.Component = m, r.Fragment = O, r.Profiler = C, r.PureComponent = P, r.StrictMode = j, r.Suspense = p, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, r.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var u = N({}, e.props), o = e.key, c = e.ref, f = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (c = t.ref, f = q.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var s = e.type.defaultProps;
      for (i in t)
        F.call(t, i) && !M.hasOwnProperty(i) && (u[i] = t[i] === void 0 && s !== void 0 ? s[i] : t[i]);
    }
    var i = arguments.length - 2;
    if (i === 1)
      u.children = n;
    else if (1 < i) {
      s = Array(i);
      for (var d = 0; d < i; d++)
        s[d] = arguments[d + 2];
      u.children = s;
    }
    return { $$typeof: a, type: e.type, key: o, ref: c, props: u, _owner: f };
  }, r.createContext = function(e) {
    return e = { $$typeof: E, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: I, _context: e }, e.Consumer = e;
  }, r.createElement = B, r.createFactory = function(e) {
    var t = B.bind(null, e);
    return t.type = e, t;
  }, r.createRef = function() {
    return { current: null };
  }, r.forwardRef = function(e) {
    return { $$typeof: v, render: e };
  }, r.isValidElement = A, r.lazy = function(e) {
    return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: X };
  }, r.memo = function(e, t) {
    return { $$typeof: k, type: e, compare: t === void 0 ? null : t };
  }, r.startTransition = function(e) {
    var t = $.transition;
    $.transition = {};
    try {
      e();
    } finally {
      $.transition = t;
    }
  }, r.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, r.useCallback = function(e, t) {
    return l.current.useCallback(e, t);
  }, r.useContext = function(e) {
    return l.current.useContext(e);
  }, r.useDebugValue = function() {
  }, r.useDeferredValue = function(e) {
    return l.current.useDeferredValue(e);
  }, r.useEffect = function(e, t) {
    return l.current.useEffect(e, t);
  }, r.useId = function() {
    return l.current.useId();
  }, r.useImperativeHandle = function(e, t, n) {
    return l.current.useImperativeHandle(e, t, n);
  }, r.useInsertionEffect = function(e, t) {
    return l.current.useInsertionEffect(e, t);
  }, r.useLayoutEffect = function(e, t) {
    return l.current.useLayoutEffect(e, t);
  }, r.useMemo = function(e, t) {
    return l.current.useMemo(e, t);
  }, r.useReducer = function(e, t, n) {
    return l.current.useReducer(e, t, n);
  }, r.useRef = function(e) {
    return l.current.useRef(e);
  }, r.useState = function(e) {
    return l.current.useState(e);
  }, r.useSyncExternalStore = function(e, t, n) {
    return l.current.useSyncExternalStore(e, t, n);
  }, r.useTransition = function() {
    return l.current.useTransition();
  }, r.version = "18.2.0", r;
}
var H;
function te() {
  return H || (H = 1, function(a) {
    a.exports = ee();
  }(D)), D.exports;
}
var W;
function re() {
  if (W)
    return S;
  W = 1;
  var a = te(), b = Symbol.for("react.element"), O = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, C = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(v, p, k) {
    var y, _ = {}, h = null, R = null;
    k !== void 0 && (h = "" + k), p.key !== void 0 && (h = "" + p.key), p.ref !== void 0 && (R = p.ref);
    for (y in p)
      j.call(p, y) && !I.hasOwnProperty(y) && (_[y] = p[y]);
    if (v && v.defaultProps)
      for (y in p = v.defaultProps, p)
        _[y] === void 0 && (_[y] = p[y]);
    return { $$typeof: b, type: v, key: h, ref: R, props: _, _owner: C.current };
  }
  return S.Fragment = O, S.jsx = E, S.jsxs = E, S;
}
(function(a) {
  a.exports = re();
})(G);
const Y = G.exports.jsxs;
const ne = "0.0.1";
function oe(a) {
  return /* @__PURE__ */ Y("div", { className: "App", children: [
    "Inner app: USER_ID 👉 ",
    a.user.userId,
    /* @__PURE__ */ Y("div", { children: [
      "v",
      ne
    ] })
  ] });
}
export {
  oe as default
};

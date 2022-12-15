var Y = { exports: {} }, S = {}, D = { exports: {} }, r = {};
var z;
function Z() {
  if (z)
    return r;
  z = 1;
  var p = Symbol.for("react.element"), b = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), E = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function h(e) {
    return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var R = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, N = {};
  function v(e, t, n) {
    this.props = e, this.context = t, this.refs = N, this.updater = n || R;
  }
  v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  }, v.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function U() {
  }
  U.prototype = v.prototype;
  function I(e, t, n) {
    this.props = e, this.context = t, this.refs = N, this.updater = n || R;
  }
  var g = I.prototype = new U();
  g.constructor = I, L(g, v.prototype), g.isPureReactComponent = !0;
  var F = Array.isArray, V = Object.prototype.hasOwnProperty, q = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(e, t, n) {
    var u, o = {}, c = null, s = null;
    if (t != null)
      for (u in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (c = "" + t.key), t)
        V.call(t, u) && !M.hasOwnProperty(u) && (o[u] = t[u]);
    var f = arguments.length - 2;
    if (f === 1)
      o.children = n;
    else if (1 < f) {
      for (var i = Array(f), d = 0; d < f; d++)
        i[d] = arguments[d + 2];
      o.children = i;
    }
    if (e && e.defaultProps)
      for (u in f = e.defaultProps, f)
        o[u] === void 0 && (o[u] = f[u]);
    return { $$typeof: p, type: e, key: c, ref: s, props: o, _owner: q.current };
  }
  function G(e, t) {
    return { $$typeof: p, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
  }
  function A(e) {
    return typeof e == "object" && e !== null && e.$$typeof === p;
  }
  function K(e) {
    var t = { "=": "=0", ":": "=2" };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var J = /\/+/g;
  function T(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? K("" + e.key) : t.toString(36);
  }
  function x(e, t, n, u, o) {
    var c = typeof e;
    (c === "undefined" || c === "boolean") && (e = null);
    var s = !1;
    if (e === null)
      s = !0;
    else
      switch (c) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case p:
            case b:
              s = !0;
          }
      }
    if (s)
      return s = e, o = o(s), e = u === "" ? "." + T(s, 0) : u, F(o) ? (n = "", e != null && (n = e.replace(J, "$&/") + "/"), x(o, t, n, "", function(d) {
        return d;
      })) : o != null && (A(o) && (o = G(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(J, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, u = u === "" ? "." : u + ":", F(e))
      for (var f = 0; f < e.length; f++) {
        c = e[f];
        var i = u + T(c, f);
        s += x(c, t, n, i, o);
      }
    else if (i = h(e), typeof i == "function")
      for (e = i.call(e), f = 0; !(c = e.next()).done; )
        c = c.value, i = u + T(c, f++), s += x(c, t, n, i, o);
    else if (c === "object")
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s;
  }
  function w(e, t, n) {
    if (e == null)
      return e;
    var u = [], o = 0;
    return x(e, u, "", "", function(c) {
      return t.call(n, c, o++);
    }), u;
  }
  function Q(e) {
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
  var l = { current: null }, $ = { transition: null }, X = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: $, ReactCurrentOwner: q };
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
  } }, r.Component = v, r.Fragment = j, r.Profiler = O, r.PureComponent = I, r.StrictMode = C, r.Suspense = a, r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, r.cloneElement = function(e, t, n) {
    if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var u = L({}, e.props), o = e.key, c = e.ref, s = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (c = t.ref, s = q.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
        var f = e.type.defaultProps;
      for (i in t)
        V.call(t, i) && !M.hasOwnProperty(i) && (u[i] = t[i] === void 0 && f !== void 0 ? f[i] : t[i]);
    }
    var i = arguments.length - 2;
    if (i === 1)
      u.children = n;
    else if (1 < i) {
      f = Array(i);
      for (var d = 0; d < i; d++)
        f[d] = arguments[d + 2];
      u.children = f;
    }
    return { $$typeof: p, type: e.type, key: o, ref: c, props: u, _owner: s };
  }, r.createContext = function(e) {
    return e = { $$typeof: E, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: P, _context: e }, e.Consumer = e;
  }, r.createElement = B, r.createFactory = function(e) {
    var t = B.bind(null, e);
    return t.type = e, t;
  }, r.createRef = function() {
    return { current: null };
  }, r.forwardRef = function(e) {
    return { $$typeof: m, render: e };
  }, r.isValidElement = A, r.lazy = function(e) {
    return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: Q };
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
function ee() {
  return H || (H = 1, function(p) {
    p.exports = Z();
  }(D)), D.exports;
}
var W;
function te() {
  if (W)
    return S;
  W = 1;
  var p = ee(), b = Symbol.for("react.element"), j = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, O = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(m, a, k) {
    var y, _ = {}, h = null, R = null;
    k !== void 0 && (h = "" + k), a.key !== void 0 && (h = "" + a.key), a.ref !== void 0 && (R = a.ref);
    for (y in a)
      C.call(a, y) && !P.hasOwnProperty(y) && (_[y] = a[y]);
    if (m && m.defaultProps)
      for (y in a = m.defaultProps, a)
        _[y] === void 0 && (_[y] = a[y]);
    return { $$typeof: b, type: m, key: h, ref: R, props: _, _owner: O.current };
  }
  return S.Fragment = j, S.jsx = E, S.jsxs = E, S;
}
(function(p) {
  p.exports = te();
})(Y);
const re = Y.exports.jsx;
function ne() {
  return /* @__PURE__ */ re("div", { className: "App", children: "Inner app here" });
}
export {
  ne as default
};

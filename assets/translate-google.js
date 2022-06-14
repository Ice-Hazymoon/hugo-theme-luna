(function () {
    var gtConstEvalStartTime = new Date();
    var h = this || self,
        l = /^[\w+/_-]+[=]{0,2}$/,
        m = null;
    function n(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) &&
            l.test(a) ? a : ""
    }
    function p(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.i = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.h = function (g, f, k) {
            for (var e = Array(arguments.length - 2), d = 2; d < arguments.length; d++) e[d - 2] = arguments[d];
            return b.prototype[f].apply(g, e)
        }
    }
    function q(a) {
        return a
    };
    function r(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, r);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    p(r, Error);
    r.prototype.name = "CustomError";
    function u(a, b) {
        a = a.split("%s");
        for (var c = "", g = a.length - 1, f = 0; f < g; f++) c += a[f] + (f < b.length ? b[f] : "%s");
        r.call(this, c + a[g])
    }
    p(u, r);
    u.prototype.name = "AssertionError";
    function v(a, b) {
        throw new u("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    };
    var w;
    function x(a, b) {
        this.g = b === y ? a : ""
    }
    x.prototype.toString = function () {
        return this.g + ""
    };
    var y = {};
    function z(a) {
        var b = document.getElementsByTagName("head")[0];
        b || (b = document.body.parentNode.appendChild(document.createElement("head")));
        b.appendChild(a)
    }
    function _loadJs(a) {
        var b = document;
        var c = "SCRIPT";
        "application/xhtml+xml" === b.contentType && (c = c.toLowerCase());
        c = b.createElement(c);
        c.type = "text/javascript";
        c.charset = "UTF-8";
        if (void 0 === w) {
            b = null;
            var g = h.trustedTypes;
            if (g && g.createPolicy) {
                try {
                    b = g.createPolicy("goog#html", {
                        createHTML: q,
                        createScript: q,
                        createScriptURL: q
                    })
                } catch (t) {
                    h.console && h.console.error(t.message)
                }
                w = b
            } else w = b
        }
        a = (b = w) ? b.createScriptURL(a) : a;
        a = new x(a, y);
        a: {
            try {
                var f = c && c.ownerDocument,
                    k = f && (f.defaultView || f.parentWindow);
                k = k || h;
                if (k.Element && k.Location) {
                    var e = k;
                    break a
                }
            } catch (t) {}
            e = null
        }
        if (e && "undefined" != typeof e.HTMLScriptElement && (!c || !(c instanceof e.HTMLScriptElement) && (c instanceof e
                .Location || c instanceof e.Element))) {
            e = typeof c;
            if ("object" == e && null != c || "function" == e) try {
                var d = c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c)
            } catch (t) {
                d = "<object could not be stringified>"
            } else d = void 0 === c ? "undefined" : null === c ? "null" : typeof c;
            v("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                "HTMLScriptElement", d)
        }
        a instanceof x && a.constructor === x ? d = a.g : (d = typeof a, v(
            "expected object of type TrustedResourceUrl, got '" + a + "' of type " + ("object" != d ? d : a ?
                Array.isArray(a) ? "array" : d : "null")), d = "type_error:TrustedResourceUrl");
        c.src = d;
        (d = c.ownerDocument && c.ownerDocument.defaultView) && d != h ? d = n(d.document) : (null === m && (m = n(
            h.document)), d = m);
        d && c.setAttribute("nonce", d);
        z(c)
    }
    function _loadCss(a) {
        var b = document.createElement("link");
        b.type = "text/css";
        b.rel = "stylesheet";
        b.charset = "UTF-8";
        b.href = a;
        z(b)
    }
    function _isNS(a) {
        a = a.split(".");
        for (var b = window, c = 0; c < a.length; ++c)
            if (!(b = b[a[c]])) return !1;
        return !0
    }
    function _setupNS(a) {
        a = a.split(".");
        for (var b = window, c = 0; c < a.length; ++c) b.hasOwnProperty ? b.hasOwnProperty(a[c]) ? b = b[a[c]] : b =
            b[a[c]] = {} : b = b[a[c]] || (b[a[c]] = {});
        return b
    }
    window.addEventListener && "undefined" == typeof document.readyState && window.addEventListener(
        "DOMContentLoaded",
        function () {
            document.readyState = "complete"
        }, !1);
    if (_isNS('google.translate.Element')) {
        return
    }(function () {
        var c = _setupNS('google.translate._const');
        c._cest = gtConstEvalStartTime;
        gtConstEvalStartTime = undefined;
        c._cl = navigator.language || navigator.userLanguage;
        c._cuc = 'googleTranslateElementInit';
        c._cac = '';
        c._cam = '';
        c._ctkk = '449649.3822363247';
        var h = 'translate.googleapis.com';
        var s = (true ? 'https' : window.location.protocol == 'https:' ? 'https' : 'http') + '://';
        var b = s + h;
        c._pah = h;
        c._pas = s;
        // c._pbi = b + '/translate_static/img/te_bk.gif';
        c._pbi = '';
        c._pci = b + '/translate_static/img/te_ctrl3.gif';
        c._pli = b + '/translate_static/img/loading.gif';
        c._plla = h + '/translate_a/l';
        c._pmi = b + '/translate_static/img/mini_google.png';
        c._ps = window.translateelement_styles;
        c._puh = 'translate.google.cn';
        _loadCss(c._ps);
        _loadJs(b + `/translate_static/js/element/main.js`);
    })();
})();
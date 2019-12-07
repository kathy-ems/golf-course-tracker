(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    41: function(e) {
      e.exports = {
        development: {
          ui_port: 3001,
          api_port: 4001,
          api_url: "http://localhost:4001"
        },
        staging: {
          ui_port: 3002,
          api_port: 4001,
          api_url: "http://localhost:4001"
        },
        production: {
          ui_port: 3003,
          api_port: 4001,
          api_url: "http://localhost:4001"
        }
      };
    },
    42: function(e, t, n) {},
    44: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(20),
        r = n.n(a),
        l = n(22),
        o = n(43),
        c = n(0),
        p = n.n(c),
        u = n(23),
        i = n.n(u),
        s = n(41),
        f = (n(42), s.production.api_url);
      t.default = function() {
        var e = Object(c.useState)("Loading..."),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1];
        function u() {
          return (u = Object(l.a)(
            r.a.mark(function e(t) {
              var n;
              return r.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), i()(t);
                    case 2:
                      (n = e.sent), a(n.data.message);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          Object(c.useEffect)(function() {
            !(function(e) {
              u.apply(this, arguments);
            })(f);
          }, []),
          p.a.createElement(
            "div",
            { className: "environment" },
            p.a.createElement(
              "ul",
              null,
              p.a.createElement(
                "li",
                null,
                "Environment: ",
                p.a.createElement("pre", null, "production")
              ),
              p.a.createElement(
                "li",
                null,
                "API url:",
                " ",
                p.a.createElement(
                  "span",
                  null,
                  p.a.createElement(
                    "a",
                    { href: f, target: "_blank", rel: "noopener noreferrer" },
                    f
                  )
                )
              ),
              p.a.createElement(
                "li",
                null,
                "Data Fetched:",
                " ",
                p.a.createElement(
                  "span",
                  null,
                  p.a.createElement(
                    "a",
                    { href: f, target: "_blank", rel: "noopener noreferrer" },
                    n
                  )
                )
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=4.0ebff9c4.chunk.js.map

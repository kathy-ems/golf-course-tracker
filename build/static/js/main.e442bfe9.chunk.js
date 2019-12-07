(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    function(e, t, n) {
      e.exports = n(10);
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0),
        a = n.n(o),
        r = n(2),
        l = n.n(r),
        c =
          (n(8),
          n(9),
          Object(o.lazy)(function() {
            return Promise.all([n.e(2), n.e(4)]).then(n.bind(null, 44));
          })),
        i = function() {
          return a.a.createElement(
            "div",
            null,
            a.a.createElement(
              "div",
              { className: "welcome" },
              a.a.createElement(
                "p",
                null,
                "Welcome to Ozone World for ",
                a.a.createElement(
                  "span",
                  { style: { color: "#61dafb" } },
                  " New react hooks!"
                ),
                a.a.createElement("br", null),
                "Clean Code for Rapid Development"
              ),
              a.a.createElement(
                "div",
                { className: "content" },
                "Built in ",
                a.a.createElement("div", { id: "heart" }),
                " with React"
              ),
              a.a.createElement(
                "div",
                null,
                "To get started, edit: ",
                a.a.createElement("pre", null, "src/App.js")
              ),
              a.a.createElement(
                "div",
                null,
                a.a.createElement(
                  o.Suspense,
                  { fallback: a.a.createElement("div", null, "Loading...") },
                  a.a.createElement(c, null)
                )
              )
            ),
            a.a.createElement(
              "div",
              { className: "footer" },
              "Orchestrated by:",
              " ",
              a.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://www.linkedin.com/in/hansiemithun/"
                },
                "Mithun"
              ),
              " ",
              a.a.createElement(
                "a",
                {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://www.npmjs.com/package/generator-ozone-ui"
                },
                "\xa9 Copyright 2018 - ",
                new Date().getFullYear()
              )
            )
          );
        };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(a.a.createElement(i, null), document.getElementById("root")),
        console.log(
          "OFFLINE_MODE => ",
          typeof Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            REACT_APP_ENVIRONMENT: "production"
          }).REACT_APP_OFFLINE
        ),
        console.log(
          "OFFLINE_MODE2 => ",
          typeof Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            REACT_APP_ENVIRONMENT: "production"
          }).REACT_APP_OFFLINE
        ),
        console.log(
          "OFFLINE_MODE3 => ",
          typeof Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            REACT_APP_ENVIRONMENT: "production"
          }).REACT_APP_OFFLINE
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[3, 1, 3]]
]);
//# sourceMappingURL=main.e442bfe9.chunk.js.map

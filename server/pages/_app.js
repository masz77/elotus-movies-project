(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(722);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(725);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/NavBar.jsx



const { Header  } = external_antd_.Layout;
function NavBar() {
    const router = (0,router_namespaceObject.useRouter)();
    function onNavBarClick({ key  }) {
        key == "now-playing" && router.push("/");
        key == "top-rated" && router.push("/top-rated");
    }
    const menuItems = [
        {
            key: `now-playing`,
            label: `Now Playing`
        },
        {
            key: "top-rated",
            label: "Top Rated"
        }, 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Menu, {
                theme: "dark",
                mode: "horizontal",
                defaultSelectedKeys: [
                    "now-playing"
                ],
                onClick: onNavBarClick,
                items: menuItems
            })
        })
    });
}

;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_nextjs_progressbar_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            ";"
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 722:
/***/ (() => {



/***/ }),

/***/ 725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(769));
module.exports = __webpack_exports__;

})();
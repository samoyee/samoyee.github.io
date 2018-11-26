webpackJsonp([3],{

/***/ 1523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(108);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(109);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(110);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(111);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(112);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1532);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(88);

var _avatar = __webpack_require__(1527);

var _avatar2 = _interopRequireDefault(_avatar);

var _nav = __webpack_require__(1529);

var _nav2 = __webpack_require__(1531);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _actions = __webpack_require__(248);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home(props) {
        (0, _classCallCheck3.default)(this, Home);
        return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));
    }

    (0, _createClass3.default)(Home, [{
        key: 'onAvatarClick',
        value: function onAvatarClick() {
            this.props.bgToggle();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                browser = _props.browser,
                bg = _props.bg;
            var width = browser.width,
                height = browser.height;

            return _react2.default.createElement(
                'div',
                { className: 'home-page', style: { width: width, height: height } },
                _react2.default.createElement(
                    'div',
                    { className: 'main-wrapper', style: { paddingTop: (height - 200) / 2 } },
                    _react2.default.createElement(
                        'div',
                        { className: 'avatar-wrapper' },
                        _react2.default.createElement(_avatar2.default, { onClick: this.onAvatarClick.bind(this), active: bg.show })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'nav-wrapper' },
                        _react2.default.createElement(_nav.HomeNav, { data: _nav2.home_nav })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'copyright' },
                    '\xA9 ',
                    (0, _moment2.default)().format("YYYY"),
                    ' Designed By Ao'
                )
            );
        }
    }]);
    return Home;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return { browser: state.browser, bg: state.bg };
}, function (dispatch) {
    return { bgToggle: function bgToggle() {
            return dispatch((0, _actions.bgToggle)());
        } };
})(Home);

/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(108);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(109);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(110);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(111);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(112);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1528);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = function (_React$Component) {
    (0, _inherits3.default)(Avatar, _React$Component);

    function Avatar() {
        (0, _classCallCheck3.default)(this, Avatar);
        return (0, _possibleConstructorReturn3.default)(this, (Avatar.__proto__ || (0, _getPrototypeOf2.default)(Avatar)).apply(this, arguments));
    }

    (0, _createClass3.default)(Avatar, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                active = _props.active,
                className = _props.className,
                length = _props.length;

            length = length || 100;
            var width = length || 100,
                height = length || 100;

            var fontSize = length >= 100 ? 22 : 16;
            var borderWidth = length >= 100 ? 1.5 : 1;
            return _react2.default.createElement(
                "a",
                { onClick: this.props.onClick, className: "avatar" + (active ? " active" : "") + " " + (className || ""), style: { width: width, height: height, borderWidth: borderWidth } },
                _react2.default.createElement(
                    "span",
                    { style: { fontSize: fontSize, width: length - 3, height: length - 3, lineHeight: length - 3 + "px" } },
                    "\u9A9C"
                )
            );
        }
    }]);
    return Avatar;
}(_react2.default.Component);

exports.default = Avatar;

/***/ }),

/***/ 1528:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AboutNav = exports.HomeNav = exports.CircleNav = exports.CircleNavConnect = undefined;

var _extends2 = __webpack_require__(71);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(108);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(109);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(110);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(111);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(112);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1530);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(88);

var _reactRouter = __webpack_require__(247);

var _avatar = __webpack_require__(1527);

var _avatar2 = _interopRequireDefault(_avatar);

var _actions = __webpack_require__(248);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavItemLink = function (_React$Component) {
    (0, _inherits3.default)(NavItemLink, _React$Component);

    function NavItemLink() {
        (0, _classCallCheck3.default)(this, NavItemLink);
        return (0, _possibleConstructorReturn3.default)(this, (NavItemLink.__proto__ || (0, _getPrototypeOf2.default)(NavItemLink)).apply(this, arguments));
    }

    (0, _createClass3.default)(NavItemLink, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                to = _props.to,
                icon = _props.icon,
                title = _props.title,
                className = _props.className;

            return _react2.default.createElement(
                _reactRouter.Link,
                { to: to, className: className },
                _react2.default.createElement("i", { className: "icon " + icon }),
                _react2.default.createElement(
                    "text",
                    null,
                    title
                )
            );
        }
    }]);
    return NavItemLink;
}(_react2.default.Component);

var NavItemA = function (_React$Component2) {
    (0, _inherits3.default)(NavItemA, _React$Component2);

    function NavItemA() {
        (0, _classCallCheck3.default)(this, NavItemA);
        return (0, _possibleConstructorReturn3.default)(this, (NavItemA.__proto__ || (0, _getPrototypeOf2.default)(NavItemA)).apply(this, arguments));
    }

    (0, _createClass3.default)(NavItemA, [{
        key: "render",
        value: function render() {
            var _props2 = this.props,
                to = _props2.to,
                icon = _props2.icon,
                title = _props2.title,
                className = _props2.className;

            return _react2.default.createElement(
                "a",
                { href: to, target: "_blank", className: className },
                _react2.default.createElement("i", { className: "icon " + icon }),
                _react2.default.createElement(
                    "text",
                    null,
                    title
                )
            );
        }
    }]);
    return NavItemA;
}(_react2.default.Component);

var CircleNavConnect = exports.CircleNavConnect = function (_React$Component3) {
    (0, _inherits3.default)(CircleNavConnect, _React$Component3);

    function CircleNavConnect(props) {
        (0, _classCallCheck3.default)(this, CircleNavConnect);

        var _this3 = (0, _possibleConstructorReturn3.default)(this, (CircleNavConnect.__proto__ || (0, _getPrototypeOf2.default)(CircleNavConnect)).call(this, props));

        _this3.state = {
            open: false
        };
        return _this3;
    }

    (0, _createClass3.default)(CircleNavConnect, [{
        key: "onNavToggle",
        value: function onNavToggle() {
            this.setState(function (prev) {
                return {
                    open: !prev.open
                };
            });
        }
    }, {
        key: "onBgToggle",
        value: function onBgToggle() {
            this.props.bgToggle();
        }
    }, {
        key: "render",
        value: function render() {
            var open = this.state.open;
            var _props3 = this.props,
                data = _props3.data,
                bg = _props3.bg;

            return _react2.default.createElement(
                "div",
                { className: "circle-nav" + (open ? " open" : "") },
                _react2.default.createElement(
                    "a",
                    { className: "nav-toggle", onClick: this.onNavToggle.bind(this) },
                    _react2.default.createElement("span", { className: "nav-bars" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "nav-menu" },
                    data && data.map(function (item, index) {
                        if (item.tag == 'a') {
                            return _react2.default.createElement(NavItemA, (0, _extends3.default)({}, item, { className: "menu-" + (index + 1), key: index }));
                        } else if (item.tag == 'link') {
                            return _react2.default.createElement(NavItemLink, (0, _extends3.default)({}, item, { className: "menu-" + (index + 1), key: index }));
                        } else {
                            return null;
                        }
                    }),
                    _react2.default.createElement(_avatar2.default, { length: 34, active: bg.show, onClick: this.onBgToggle.bind(this), className: "menu-" + ((data && data.length || 0) + 1) })
                )
            );
        }
    }]);
    return CircleNavConnect;
}(_react2.default.Component);

var CircleNav = exports.CircleNav = (0, _reactRedux.connect)(function (state) {
    return { bg: state.bg };
}, function (dispatch) {
    return { bgToggle: function bgToggle() {
            return dispatch((0, _actions.bgToggle)());
        } };
})(CircleNavConnect);

var HomeNav = exports.HomeNav = function (_React$Component4) {
    (0, _inherits3.default)(HomeNav, _React$Component4);

    function HomeNav() {
        (0, _classCallCheck3.default)(this, HomeNav);
        return (0, _possibleConstructorReturn3.default)(this, (HomeNav.__proto__ || (0, _getPrototypeOf2.default)(HomeNav)).apply(this, arguments));
    }

    (0, _createClass3.default)(HomeNav, [{
        key: "render",
        value: function render() {
            var data = this.props.data;

            return _react2.default.createElement(
                "div",
                { className: "home-nav" },
                data && data.map(function (item, index) {
                    if (item.tag == 'a') {
                        return _react2.default.createElement(NavItemA, (0, _extends3.default)({}, item, { key: index }));
                    } else if (item.tag == 'link') {
                        return _react2.default.createElement(NavItemLink, (0, _extends3.default)({}, item, { key: index }));
                    } else {
                        return null;
                    }
                })
            );
        }
    }]);
    return HomeNav;
}(_react2.default.Component);

var AboutNav = exports.AboutNav = function (_React$Component5) {
    (0, _inherits3.default)(AboutNav, _React$Component5);

    function AboutNav() {
        (0, _classCallCheck3.default)(this, AboutNav);
        return (0, _possibleConstructorReturn3.default)(this, (AboutNav.__proto__ || (0, _getPrototypeOf2.default)(AboutNav)).apply(this, arguments));
    }

    (0, _createClass3.default)(AboutNav, [{
        key: "render",
        value: function render() {
            var data = this.props.data;

            return _react2.default.createElement(
                "div",
                { className: "about-nav" },
                data && data.map(function (item, index) {
                    if (item.tag == "link") {
                        return _react2.default.createElement(NavItemLink, (0, _extends3.default)({}, item, { key: index }));
                    } else if (item.tag == "a") {
                        return _react2.default.createElement(NavItemA, (0, _extends3.default)({}, item, { key: index }));
                    }
                })
            );
        }
    }]);
    return AboutNav;
}(_react2.default.Component);

/***/ }),

/***/ 1530:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1531:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    home_nav: [{
        tag: "link",
        title: "归档",
        icon: "code",
        to: "/issues"
    }, {
        tag: "link",
        title: "关于",
        icon: "user",
        to: "/about"
    }, {
        tag: "a",
        title: "github",
        icon: "github",
        to: "https://github.com/agreatao"
    }],
    issues_nav: [{
        tag: "link",
        title: "返回",
        icon: "back",
        to: "/home"
    }, {
        tag: "link",
        title: "主页",
        icon: "home",
        to: "/home"
    }, {
        tag: "link",
        title: "关于",
        icon: "user",
        to: "/about"
    }],
    issue_nav: [{
        tag: "link",
        title: "返回",
        icon: "back",
        to: "/issues"
    }, {
        tag: "link",
        title: "主页",
        icon: "home",
        to: "/home"
    }, {
        tag: "link",
        title: "关于",
        icon: "user",
        to: "/about"
    }],
    about_nav: [{
        tag: "link",
        title: "主页",
        icon: "home",
        to: "/home"
    }, {
        tag: "link",
        title: "归档",
        icon: "code",
        to: "/issues"
    }]
};

/***/ }),

/***/ 1532:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=3.js.map
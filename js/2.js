webpackJsonp([2],{

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(98);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(99);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(100);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(101);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1533);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(237);

var _reactRedux = __webpack_require__(82);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _nav = __webpack_require__(1529);

var _nav2 = __webpack_require__(1531);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Issues = function (_React$Component) {
    (0, _inherits3.default)(Issues, _React$Component);

    function Issues(props) {
        (0, _classCallCheck3.default)(this, Issues);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Issues.__proto__ || (0, _getPrototypeOf2.default)(Issues)).call(this, props));

        _this.state = {
            data: null
        };
        return _this;
    }

    (0, _createClass3.default)(Issues, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var data = this.props.issues.data;

            var result = [];
            var each = { year: data && data[0] && (0, _moment2.default)(data[0].created_at).format("YYYY"), list: [] };
            data && data.forEach(function (item, index) {
                var issue = {
                    title: item.title,
                    createTime: (0, _moment2.default)(item.created_at),
                    updateTime: (0, _moment2.default)(item.updated_at),
                    label: item.labels[0].name,
                    comments: item.comments,
                    id: index
                };
                if (each.year != issue.createTime.format("YYYY")) {
                    result.push(each);
                    each = { year: issue.createTime.format("YYYY"), list: [issue] };
                } else {
                    each.list.push(issue);
                    if (index == data.length - 1) {
                        result.push(each);
                    }
                }
            });
            this.setState({ data: result });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                browser = _props.browser,
                issues = _props.issues;
            var width = browser.width,
                height = browser.height;
            var error = issues.error;
            var data = this.state.data;

            return _react2.default.createElement(
                'div',
                { className: 'issues-page' },
                _react2.default.createElement(_nav.CircleNav, { data: _nav2.issues_nav }),
                _react2.default.createElement(
                    'div',
                    { className: 'issues-wrapper' },
                    data && !error ? data.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'year-list', key: index },
                            _react2.default.createElement(
                                'div',
                                { className: 'year' },
                                item.year
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'year-issue-wrapper' },
                                item.list.map(function (issue, issueIndex) {
                                    return _react2.default.createElement(
                                        'div',
                                        { className: 'year-issue-list', key: issueIndex },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'create-time' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'date' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'day' },
                                                    issue.createTime.format("DD")
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'month' },
                                                    issue.createTime.format("MMM")
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'time' },
                                                issue.createTime.format("HH:mm:ss")
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'issue-info' },
                                            _react2.default.createElement(
                                                _reactRouter.Link,
                                                { to: '/issue/' + issue.id, title: issue.title, className: 'title' },
                                                issue.title
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'issue-other' },
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'fl' },
                                                    _react2.default.createElement(
                                                        'i',
                                                        { className: 'comments' },
                                                        issue.comments
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'span',
                                                    { className: 'fr' },
                                                    _react2.default.createElement(
                                                        'i',
                                                        { className: 'label' },
                                                        issue.label
                                                    )
                                                )
                                            )
                                        )
                                    );
                                })
                            )
                        );
                    }) : _react2.default.createElement(
                        'div',
                        { className: 'issues-empty' },
                        _react2.default.createElement(
                            'p',
                            null,
                            error
                        )
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
    return Issues;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return { browser: state.browser, issues: state.issues };
})(Issues);

/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(98);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(99);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(100);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(101);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1528);

var _react = __webpack_require__(16);

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

var _extends2 = __webpack_require__(102);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(97);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(98);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(99);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(100);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(101);

var _inherits3 = _interopRequireDefault(_inherits2);

__webpack_require__(1530);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(82);

var _reactRouter = __webpack_require__(237);

var _avatar = __webpack_require__(1527);

var _avatar2 = _interopRequireDefault(_avatar);

var _actions = __webpack_require__(238);

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

/***/ 1533:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=2.js.map
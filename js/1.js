webpackJsonp([1],{

/***/ 1526:
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

__webpack_require__(1728);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(82);

var _reactRouter = __webpack_require__(237);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _addDomEventListener = __webpack_require__(154);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _video = __webpack_require__(1729);

var _video2 = _interopRequireDefault(_video);

var _nav = __webpack_require__(1529);

var _nav2 = __webpack_require__(1531);

var _utils = __webpack_require__(550);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function (_React$Component) {
    (0, _inherits3.default)(About, _React$Component);

    function About(props) {
        (0, _classCallCheck3.default)(this, About);

        var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

        _this.state = {
            play: true,
            detailOpen: false
        };
        return _this;
    }

    (0, _createClass3.default)(About, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            (0, _addDomEventListener2.default)(this.refs.detail, 'scroll', function () {
                var scrollTop = _this2.refs.detail.scrollY || _this2.refs.detail.scrollTop;
                if (scrollTop > 0) {
                    _this2.setState({
                        detailOpen: true
                    });
                } else {
                    _this2.setState({
                        detailOpen: false
                    });
                }
            });
        }
    }, {
        key: 'handleVideoToggle',
        value: function handleVideoToggle() {
            this.setState(function (prev) {
                return {
                    play: !prev.play
                };
            });
        }
    }, {
        key: 'onPlayEnd',
        value: function onPlayEnd() {
            this.setState({
                play: false
            });
        }
    }, {
        key: 'handleViewMore',
        value: function handleViewMore() {
            (0, _utils.scroll)({
                targetPositionY: 30
            }, this.refs.detail);
        }
    }, {
        key: 'render',
        value: function render() {
            var browser = this.props.browser;
            var width = browser.width,
                height = browser.height;
            var _state = this.state,
                play = _state.play,
                detailOpen = _state.detailOpen;

            return _react2.default.createElement(
                'div',
                { className: 'about-page', style: { width: width, height: height } },
                _react2.default.createElement(_video2.default, { play: play, onPlayEnd: this.onPlayEnd.bind(this) }),
                _react2.default.createElement(
                    'div',
                    { className: 'about-wrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: "about-box" + (!detailOpen ? " open" : ""), style: { height: height, paddingTop: (height - 160) / 2 } },
                        _react2.default.createElement(
                            'h4',
                            null,
                            'AO XU'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'I\'m ',
                            _react2.default.createElement(
                                'span',
                                null,
                                'Web'
                            ),
                            ' Developer'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'btns' },
                            _react2.default.createElement(_reactRouter.Link, { className: 'home-btn', to: '/home' }),
                            _react2.default.createElement('a', { onClick: this.handleVideoToggle.bind(this), className: "video-play-btn" + (play ? " pause" : " play") })
                        ),
                        height < 1050 && _react2.default.createElement(
                            'a',
                            { className: 'view-more', onClick: this.handleViewMore.bind(this) },
                            _react2.default.createElement('i', { className: 'icon-arrow-down' }),
                            _react2.default.createElement(
                                'span',
                                null,
                                'view more'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { ref: 'detail', className: "about-detail-wrapper" + (detailOpen || height >= 1050 ? " open" : ""), style: { height: height } },
                        _react2.default.createElement(
                            'div',
                            { className: 'about-detail' },
                            _react2.default.createElement(
                                'div',
                                { className: 'detail' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    'AO XU'
                                ),
                                _react2.default.createElement(
                                    'h4',
                                    null,
                                    '\u8BB8 \u9A9C'
                                ),
                                _react2.default.createElement('div', { className: 'avatar-lg' }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'intro' },
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '\u559C\u7231',
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '\u732B\u72D7'
                                        ),
                                        '\uFF0C\u559C\u6B22\u73A9\u73A9\u6E38\u620F\uFF0C\u559C\u6B22',
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '\u65C5\u6E38'
                                        ),
                                        '\uFF0C\u5076\u5C14\u60F3\u5C1D\u8BD5\u641E\u641E\u8BBE\u8BA1'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '\u76EE\u524D\u8EAB\u5728',
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            '\u676D\u5DDE'
                                        ),
                                        '\uFF0C\u4ECE\u4E8B\u4E8EIT\u884C\u4E1A'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        '\u70ED\u8877\u4E8Eweb\u524D\u7AEF\u5F00\u53D1'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'footer-text' },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u5728wo\u773C\u91CC\u6CA1\u4EC0\u4E48'
                                    ),
                                    '\u4E0D\u53EF\u4EE5'
                                ),
                                _react2.default.createElement(_nav.AboutNav, { data: _nav2.about_nav }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'copyright' },
                                    '\xA9 ',
                                    (0, _moment2.default)().format("YYYY"),
                                    ' Designed By Ao'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);
    return About;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return { browser: state.browser };
})(About);

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

/***/ 1728:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1729:
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

__webpack_require__(1730);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(82);

var _addDomEventListener = __webpack_require__(154);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _play = __webpack_require__(1731);

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function (_React$Component) {
    (0, _inherits3.default)(Video, _React$Component);

    function Video(props) {
        (0, _classCallCheck3.default)(this, Video);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call(this, props));

        _this.state = {
            isPlay: true
        };
        return _this;
    }

    (0, _createClass3.default)(Video, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            (0, _addDomEventListener2.default)(this.refs.play, 'ended', function (e) {
                _this2.setState({ isPlay: false });
                _this2.props.onPlayEnd && _this2.props.onPlayEnd();
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var play = nextProps.play;

            if (play != this.props.play && play) {
                this.setState({ isPlay: true });
                this.refs.play.play();
            } else if (play != this.props.play && !play) {
                this.refs.play.pause();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var browser = this.props.browser;
            var width = browser.width,
                height = browser.height;
            var isPlay = this.state.isPlay;

            var scale = Math.max(width / 1920, height / 1080);
            return _react2.default.createElement(
                "div",
                { className: "video" + (isPlay ? " play" : "") },
                _react2.default.createElement(
                    "video",
                    {
                        className: "video-tag",
                        ref: "play",
                        autoPlay: true,
                        muted: true,
                        style: { width: 1920 * scale, height: 1080 * scale }
                    },
                    _react2.default.createElement("source", { src: _play2.default, type: "video/mp4", style: { width: width, height: height } })
                ),
                _react2.default.createElement("div", {
                    className: "video-bg",
                    style: { width: width, height: height }
                }),
                _react2.default.createElement("div", { className: "video-mask" })
            );
        }
    }]);
    return Video;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return { browser: state.browser };
})(Video);

/***/ }),

/***/ 1730:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1731:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "videos/play.mp4";

/***/ })

});
//# sourceMappingURL=1.js.map
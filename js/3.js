webpackJsonp([3],{1363:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(73),u=n(l),o=a(74),i=n(o),r=a(75),c=n(r),s=a(76),f=n(s),d=a(77),p=n(d);a(1373);var m=a(12),h=n(m),v=a(58),g=a(1367),_=n(g),k=a(1369),N=a(1371),b=a(1),y=n(b),E=a(476),C=function(e){function t(e){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"onAvatarClick",value:function(){this.props.bgToggle()}},{key:"render",value:function(){var e=this.props,t=e.browser,a=e.app,n=t.width,l=t.height;return h.default.createElement("div",{className:"home-page",style:{width:n,height:l}},h.default.createElement("div",{className:"main-wrapper",style:{paddingTop:(l-200)/2}},h.default.createElement("div",{className:"avatar-wrapper"},h.default.createElement(_.default,{onClick:this.onAvatarClick.bind(this),active:a.appBgShow})),h.default.createElement("div",{className:"nav-wrapper"},h.default.createElement(k.HomeNav,{data:N.home_nav}))),h.default.createElement("div",{className:"copyright"},"© ",(0,y.default)().format("YYYY")," Designed By Ao"))}}]),t}(h.default.Component);t.default=(0,v.connect)(function(e){return{browser:e.browser,app:e.app}},function(e){return{bgToggle:function(){return e((0,E.bgToggle)())}}})(C)},1367:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(73),u=n(l),o=a(74),i=n(o),r=a(75),c=n(r),s=a(76),f=n(s),d=a(77),p=n(d);a(1368);var m=a(12),h=n(m),v=function(e){function t(){return(0,i.default)(this,t),(0,f.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.className,n=e.length;n=n||100;var l=n||100,u=n||100,o=n>=100?22:14,i=n>=100?1.5:1;return h.default.createElement("a",{onClick:this.props.onClick,className:"avatar"+(t?" active":"")+" "+(a||""),style:{width:l,height:u,borderWidth:i}},h.default.createElement("span",{style:{fontSize:o,width:n-3,height:n-3,lineHeight:n-3+"px"}},"骜"))}}]),t}(h.default.Component);t.default=v},1368:function(e,t){},1369:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.AboutNav=t.HomeNav=t.CircleNav=t.CircleNavConnect=void 0;var l=a(59),u=n(l),o=a(73),i=n(o),r=a(74),c=n(r),s=a(75),f=n(s),d=a(76),p=n(d),m=a(77),h=n(m);a(1370);var v=a(12),g=n(v),_=a(113),k=n(_),N=a(58),b=a(203),y=a(1367),E=n(y),C=a(476),w=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.to,a=e.icon,n=e.title,l=e.className;return g.default.createElement(b.Link,{to:t,className:l},g.default.createElement("i",{className:"icon "+a}),g.default.createElement("div",{className:"text"},n))}}]),t}(g.default.Component),T=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.to,a=e.icon,n=e.title,l=e.className;return g.default.createElement("a",{href:t,target:"_blank",className:l},g.default.createElement("i",{className:"icon "+a}),g.default.createElement("div",{className:"text"},n))}}]),t}(g.default.Component),B=t.CircleNavConnect=function(e){function t(e){(0,c.default)(this,t);var a=(0,p.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.state={open:!1},a}return(0,h.default)(t,e),(0,f.default)(t,[{key:"onNavToggle",value:function(){this.setState(function(e){return{open:!e.open}})}},{key:"onBgToggle",value:function(){this.props.bgToggle()}},{key:"render",value:function(){var e=this.state.open,t=this.props,a=t.data,n=t.app;return k.default.createPortal(g.default.createElement("div",{className:"circle-nav"+(e?" open":"")+(n.appBgShow?" show-bg":"")},g.default.createElement("a",{className:"nav-toggle",onClick:this.onNavToggle.bind(this)},g.default.createElement("span",{className:"nav-bars"})),g.default.createElement("div",{className:"nav-menu"},a&&a.map(function(e,t){return"a"==e.tag?g.default.createElement(T,(0,u.default)({},e,{className:"menu-"+(t+1),key:t})):"link"==e.tag?g.default.createElement(w,(0,u.default)({},e,{className:"menu-"+(t+1),key:t})):null}),g.default.createElement(E.default,{length:34,active:n.appBgShow,onClick:this.onBgToggle.bind(this),className:"menu-"+((a&&a.length||0)+1)}))),document.body)}}]),t}(g.default.Component),M=(t.CircleNav=(0,N.connect)(function(e){return{app:e.app}},function(e){return{bgToggle:function(){return e((0,C.bgToggle)())}}})(B),function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.app;return g.default.createElement("div",{className:"home-nav"+(a.appBgShow?" show-bg":"")},t&&t.map(function(e,t){return"a"==e.tag?g.default.createElement(T,(0,u.default)({},e,{key:t})):"link"==e.tag?g.default.createElement(w,(0,u.default)({},e,{key:t})):null}))}}]),t}(g.default.Component));t.HomeNav=(0,N.connect)(function(e){return{app:e.app}})(M),t.AboutNav=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props.data;return g.default.createElement("div",{className:"about-nav"},e&&e.map(function(e,t){return"link"==e.tag?g.default.createElement(w,(0,u.default)({},e,{key:t})):"a"==e.tag?g.default.createElement(T,(0,u.default)({},e,{key:t})):void 0}))}}]),t}(g.default.Component)},1370:function(e,t){},1371:function(e,t,a){"use strict";e.exports={home_nav:[{tag:"link",title:"归档",icon:"code",to:"/issues"},{tag:"link",title:"关于",icon:"user",to:"/about"},{tag:"a",title:"github",icon:"github",to:"https://github.com/agreatao"}],issues_nav:[{tag:"link",title:"返回",icon:"back",to:"/home"},{tag:"link",title:"主页",icon:"home",to:"/home"},{tag:"link",title:"关于",icon:"user",to:"/about"}],issue_nav:[{tag:"link",title:"返回",icon:"back",to:"/issues"},{tag:"link",title:"主页",icon:"home",to:"/home"},{tag:"link",title:"关于",icon:"user",to:"/about"}],about_nav:[{tag:"link",title:"主页",icon:"home",to:"/home"},{tag:"link",title:"归档",icon:"code",to:"/issues"}]}},1373:function(e,t){}});
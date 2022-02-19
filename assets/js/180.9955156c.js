(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{399:function(e,t,r){"use strict";r.r(t);var n=r(0),_=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("平时被问到最多的问题还是关于跨域的，其实跨域问题真的不是一个很难解决的问题。这里我来简单总结一下我推荐的几种跨域解决方案。")]),e._v(" "),r("p",[e._v("我最推荐的也是我工作中在使用的方式就是： "),r("code",[e._v("cors")]),e._v(" 全称为 Cross Origin Resource Sharing（跨域资源共享）。这种方案对于前端来说没有什么工作量，和正常发送请求写法上没有任何区别，工作量基本都在后端这里。每一次请求，浏览器必须先以 "),r("code",[e._v("OPTIONS")]),e._v(" 请求方式发送一个预请求（也不是所有请求都会发送 options，展开介绍 "),r("a",{attrs:{href:"https://panjiachen.github.io/awesome-bookmarks/blog/cs.html#cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("点我"),r("OutboundLink")],1),e._v("），通过预检请求从而获知服务器端对跨源请求支持的 "),r("code",[e._v("HTTP")]),e._v(" 方法。在确认服务器允许该跨源请求的情况下，再以实际的 "),r("code",[e._v("HTTP")]),e._v(" 请求方法发送那个真正的请求。推荐的原因是：只要第一次配好了，之后不管有多少接口和项目复用就可以了，一劳永逸的解决了跨域问题，而且不管是开发环境还是正式环境都能方便的使用。详细 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN 文档"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("但总有后端觉得麻烦不想这么搞，那纯前端也是有解决方案的。")]),e._v(" "),r("p",[e._v("在 "),r("code",[e._v("dev")]),e._v(" 开发模式下可以下使用 webpack 的 "),r("code",[e._v("proxy")]),e._v(" 使用也是很方便，参照 "),r("a",{attrs:{href:"https://www.webpackjs.com/configuration/dev-server/#devserver-proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),r("OutboundLink")],1),e._v(" 就会使用了，楼主一些个人项目使用的该方法。但这种方法在生产环境是不能使用的。在生产环境中需要使用 "),r("code",[e._v("nginx")]),e._v(" 进行反向代理。不管是 "),r("code",[e._v("proxy")]),e._v(" 和 "),r("code",[e._v("nginx")]),e._v(" 的原理都是一样的，通过搭建一个中转服务器来转发请求规避跨域的问题。")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("这里我只推荐这两种方式跨域，其它的跨域方式都还有很多但都不推荐，真心主流的也就这两种方式。")])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"跨域问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨域问题"}},[this._v("#")]),this._v(" 跨域问题")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[e._v("开发环境")]),e._v(" "),r("th",[e._v("生产环境")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("cors")]),e._v(" "),r("td",[e._v("cors")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[e._v("proxy")]),e._v(" "),r("td",[e._v("nginx")])])])])}],!1,null,null,null);t.default=_.exports}}]);
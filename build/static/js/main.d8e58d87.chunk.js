(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),l=(n(9),n(1));var i=function(e){var t=e.hendelTempeture,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1];return o.a.createElement("div",{className:"header"},o.a.createElement("p",{className:"town"},"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u0433\u043e\u0440\u043e\u0434!"),o.a.createElement("div",{className:"input-town"},o.a.createElement("form",null,o.a.createElement("input",{className:"input-city",value:r,onChange:function(e){i(e.target.value)}}),o.a.createElement("button",{className:"search-buttons",onClick:function(e){e.preventDefault(),console.log(r),fetch("http://localhost:4000/getWeather",{method:"POST",body:JSON.stringify({city:r}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e);var n=e.temp.toString();t(n,r)}))}},o.a.createElement("span",{"aria-label":"search",role:"img"},"\ud83d\udd0d")))))};var s=function(e){var t=e.temp,n=e.city,a=["\u2600\ufe0f","\ud83c\udf25\ufe0f","\ud83e\uddca"];return o.a.createElement("div",{className:"weather"},o.a.createElement("h1",null,t?"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432 ".concat(n," = ")+t+"".concat(t>20?a[0]:t>10?a[1]:a[2]):"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0433\u043e\u0440\u043e\u0434"))};var u=function(){var e=o.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=o.a.useState(""),r=Object(l.a)(c,2),u=r[0],m=r[1];return o.a.createElement("div",{className:"App"},o.a.createElement(i,{hendelTempeture:function(e,t){a(e),m(t)}}),o.a.createElement(s,{temp:n,city:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.d8e58d87.chunk.js.map
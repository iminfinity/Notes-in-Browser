(this["webpackJsonpslate-react"]=this["webpackJsonpslate-react"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(5),i=n.n(a),c=(n(12),n(1)),l=(n(13),n(6)),u="add",s="delete",f=function(e,t){switch(t.type){case u:return[].concat(Object(l.a)(e),[t.payload]);case s:return e.filter((function(n){return e.indexOf(n)!==t.payload}));default:return e}},d=(n(14),function(e){var t=e.index,n=e.note,a=e.deleteThis,i=Object(r.useState)("initial"),l=Object(c.a)(i,2),u=l[0],s=l[1],f=Object(r.useState)("initial"),d=Object(c.a)(f,2),g=d[0],m=d[1],h=Object(r.useRef)();return Object(r.useEffect)((function(){var e=h.current.getBoundingClientRect().height,t=h.current.getBoundingClientRect().width;s(e),m(t)}),[]),o.a.createElement("div",{ref:h,className:"note",style:{height:u,width:g}},n,o.a.createElement("button",{onClick:function(){return a(t)}},"\u2716"))}),g=(n(15),function(e){var t=e.notes,n=e.removeNote,r=function(e){n(e)};return o.a.createElement("div",{className:"notes"},t?t.map((function(e,t){return o.a.createElement(d,{key:t,index:t,note:e,deleteThis:r})})):null)}),m=(n(16),function(e){var t=e.addNewNote,n=Object(r.useState)(""),a=Object(c.a)(n,2),i=a[0],l=a[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i),l("")},className:"add-notes"},o.a.createElement("textarea",{value:i,onChange:function(e){return l(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Add"))});n(17);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createElement("path",{d:"M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"}),b=function(e){var t=e.svgRef,n=e.title,r=v(e,["svgRef","title"]);return o.a.createElement("svg",h({width:64,height:64,shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 640 640",ref:t},r),n?o.a.createElement("title",null,n):null,p)},w=o.a.forwardRef((function(e,t){return o.a.createElement(b,h({svgRef:t},e))})),y=(n.p,function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"Notes"),o.a.createElement("a",{href:"https://github.com/iminfinity/Notes-in-Browser"},o.a.createElement(w,null)))});var E=function(){var e=Object(r.useReducer)(f,localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")):[]),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("notes",e)}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null),o.a.createElement("div",{className:"App"},o.a.createElement(g,{notes:n,removeNote:function(e){a({type:s,payload:e})}}),o.a.createElement(m,{addNewNote:function(e){a({type:u,payload:e})}})))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.2e0da23f.chunk.js.map
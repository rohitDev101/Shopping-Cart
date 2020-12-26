(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(1),s=n.n(c),i=n(8),r=n.n(i),a=(n(15),n(16),n(9)),u=n(3),d=n(4),l=n(2),h=n(6),j=n(5);n(17);var p=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(o.jsxs)(c.Fragment,{children:[this.props.showModal&&Object(o.jsx)("div",{className:"Backdrop"}),Object(o.jsx)("div",{className:"Modal",style:{transform:this.props.showModal?"translateY(0)":"translateY(100vh)",opacity:this.props.showModal?"1":"0"},children:this.props.children})]})}}]),n}(c.Component),f=(n(18),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).setCountProduct=function(e){var n=e.products.map((function(t){return{id:t.id,count:0,price:t.price}}));console.log("count data",n),t.setState({countProduct:n})},t.updateCounts=function(e,n){var o=Object(a.a)(t.state.countProduct),c=t.state.totalCount,s=t.state.totalPrice,i=o.findIndex((function(t){return t.id===e}));"add"===n?(o[i].count+=1,c+=1,s+=o[i].price):"remove"===n&&o[i].count>0?(o[i].count-=1,c-=1,s-=o[i].price,console.log(t.state.countProduct)):"addToCart"===n&&0===o[i].count&&(o[i].count+=1,c+=1,s+=o[i].price),s>=0&&c>=0&&o[i].count>=0&&(console.log("state updated"),t.setState({countProduct:o,totalCount:c,totalPrice:s})),console.log(o,t.state.countProduct,o[i].count)},t.getProductCount=function(e){var n=t.state.countProduct.findIndex((function(t){return t.id===e}));return t.state.countProduct[n].count},t.updateCheckout=function(){t.setState({ischeckout:!t.state.ischeckout})},t.showProducts=function(){return t.state.products.map((function(e){return Object(o.jsxs)("div",{className:"gridContainer",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:e.imageUrl,alt:"Product"}),Object(o.jsx)("p",{style:{fontSize:"larger",fontFamily:"sans-serif",fontStyle:"italic"},children:e.offerText})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"Brand",children:e.brandName}),Object(o.jsx)("p",{style:{fontStyle:"italic"},children:e.productName}),Object(o.jsx)("p",{children:e.quantity}),Object(o.jsxs)("p",{children:["MRP \u20b9",e.mrp]}),Object(o.jsxs)("p",{style:{fontWeight:"bold"},children:["\u20b9",e.price]}),Object(o.jsxs)("div",{className:"addCart",children:[Object(o.jsx)("button",{className:"checkoutbtn",onClick:function(){t.updateCounts(e.id,"addToCart")},children:"Add To Cart"}),Object(o.jsx)("span",{onClick:function(){return t.updateCounts(e.id,"add")},className:"itemIcon",children:"+"}),Object(o.jsx)("span",{children:t.getProductCount(e.id)}),Object(o.jsx)("span",{onClick:function(){return t.updateCounts(e.id,"remove")},className:"itemIcon",children:"-"})]})]}),Object(o.jsx)("hr",{})]})}))},t.state={products:[],countProduct:[],totalCount:0,totalPrice:0,ischeckout:!1},t.showProducts=t.showProducts.bind(Object(l.a)(t)),t.setCountProduct=t.setCountProduct.bind(Object(l.a)(t)),t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("production"),fetch("products.json",{headers:{CrossDomain:!0,"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log("Success:",e),t.setCountProduct(e),t.setState({products:e.products})})).catch((function(t){console.error("Error:",t)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("h1",{children:"Shopping Cart"}),this.showProducts()]}),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("div",{className:"align",children:[Object(o.jsxs)("p",{children:["Qty: ",this.state.totalCount]}),Object(o.jsxs)("p",{children:["Total: \u20b9 ",this.state.totalPrice.toFixed(2)]})]}),Object(o.jsx)("div",{className:"buttonDiv",children:Object(o.jsx)("button",{className:"checkoutbtn",onClick:this.updateCheckout,children:"Checkout"})})]}),Object(o.jsxs)(p,{showModal:this.state.ischeckout,children:[Object(o.jsx)("p",{className:"close",onClick:this.updateCheckout,children:"X"}),Object(o.jsx)("p",{className:"infoText",children:"Transaction Successful !"}),Object(o.jsxs)("p",{className:"valueText",children:["Total Price: \u20b9",this.state.totalPrice]})]})]})}}]),n}(c.Component));var b=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(f,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),s(t),i(t)}))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),v(),function(t){if("serviceWorker"in navigator){if(new URL("/Shopping-Cart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Shopping-Cart","/serviceWorker.js");O?(!function(t,e){fetch(t).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):g(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(e,t)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.a6f805d2.chunk.js.map
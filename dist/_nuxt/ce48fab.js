(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{275:function(t,e,r){t.exports=r.p+"img/loading.6882c13.gif"},276:function(t,e,r){"use strict";r.r(e);var n=r(32),c=(r(76),{data:function(){return{products:"",loading:!0}},mounted:function(){this.ambilData()},methods:{ambilData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("tb_produk").select();case 2:r=e.sent,data=r.data,n=r.error,data&&(t.products=data),t.loading=!1,n&&console.log(n);case 8:case"end":return e.stop()}}),e)})))()}}}),o=r(63),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",[n("div",[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[t.loading?n("div",{staticClass:"text-center"},[n("img",{attrs:{src:r(275),alt:""}})]):t._e()]),t._v(" "),t._l(t.products,(function(e){return n("div",{key:e.id,staticClass:"col-md-4"},[n("div",{staticClass:"card mb-3"},[n("div",{staticClass:"card-header"},[n("img",{attrs:{src:e.foto,width:"100%"}})]),t._v(" "),n("div",{staticClass:"card-body"},[n("h4",[t._v(t._s(e.nama))]),t._v(" "),n("h4",[t._v("Rp"+t._s(e.harga))]),t._v(" "),n("a",{staticClass:"btn btn-success btn-block",attrs:{href:"produk.link_eksternal"}},[t._v("beli di WA")])])])])}))],2)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"jumbotron"},[r("h2",[t._v("product")])])}],!1,null,null,null);e.default=component.exports}}]);
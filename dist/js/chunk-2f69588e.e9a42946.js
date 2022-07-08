(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f69588e"],{"5e61":function(t,s,r){"use strict";r.r(s);var e=function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),r("div",{staticClass:"container my-5"},[r("div",{staticClass:"row pb-5 mb-5"},[r("div",{staticClass:"col-md-7"},[r("img",{staticClass:"img-fluid rounded",attrs:{src:t.product.image}})]),t.product.title?r("div",{staticClass:"col-md-5 card-body"},[r("h2",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),r("hr"),r("blockquote",{staticClass:"blockquote mt-3"},[r("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),r("footer",{staticClass:"blockquote-footer text-right"},[t._v("產品規格："+t._s(t.product.description))])]),r("hr"),r("div",{staticClass:"text-right mb-3"},[t.product.origin_price!=t.product.price?r("del",{staticClass:"text-secondary h6 pr-3"},[t._v("原價 "+t._s(t._f("currency")(t.product.origin_price)))]):t._e(),t.product.origin_price!=t.product.price?r("span",{staticClass:"h5"},[t._v("優惠價")]):t._e(),t.product.origin_price===t.product.price?r("span",{staticClass:"h5"},[t._v("售價")]):t._e(),r("span",{staticClass:"text-danger h4"},[t._v(" "+t._s(t._f("currency")(t.product.price)))])]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control",on:{change:function(s){var r=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.product,"num",s.target.multiple?r:r[0])}}},t._l(10,(function(s){return r("option",{key:s,domProps:{value:s}},[t._v(t._s(s)+" "+t._s(t.product.unit))])})),0),r("div",{staticClass:"mt-3 text-right"},[r("span",{staticClass:"text-secondary h6 mr-3"},[t._v("小計 "+t._s(t._f("currency")(t.product.price*t.product.num)))]),r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.addToCart(s)}}},[r("i",{staticClass:"fas fa-cart-plus"}),t._v(" 加到購物車 ")])])]):t._e()]),r("hr"),r("div",{staticClass:"d-flex justify-content-between align-items-baseline mb-3"},[r("div",{staticClass:"h4"},[t._v("您可能會喜歡的")]),r("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:"/products"}},[r("i",{staticClass:"fas fa-arrow-left"}),t._v(" 回商品列表 ")])],1),r("div",{staticClass:"row",class:{"d-none":0===t.filterProduct.length,"single-product":1===t.filterProduct.length,"multiple-product":t.filterProduct.length>1&&t.filterProduct.length<=4,"more-product":t.filterProduct.length>4}},t._l(t.filterProduct,(function(s){return r("div",{key:s.id,staticClass:"col-sm-6 col-md-3 mb-4"},[r("a",{staticClass:"card shadow-sm card-round",on:{click:function(r){return t.getProduct(s.id)}}},[r("div",{staticClass:"pic"},[r("div",{staticClass:"pic-enlarge",style:{backgroundImage:"url("+s.image+")"}})]),r("div",{staticClass:"card-body"},[r("span",{staticClass:"badge badge-secondary mb-2"},[t._v(t._s(s.category))]),r("h5",{staticClass:"card-title"},[t._v(t._s(s.title))])])])])})),0),r("div",{staticClass:"product-wrap mx-auto",class:{"d-none":0===t.filterProduct.length,"multiple-swiper":t.filterProduct.length>1&&t.filterProduct.length<=4,"single-swiper":1===t.filterProduct.length}},[r("swiper",{attrs:{options:t.swiperOption}},t._l(t.filterProduct,(function(s){return r("swiper-slide",{key:s.id,staticClass:"p-2"},[r("a",{staticClass:"card shadow-sm card-round",on:{click:function(r){return t.getProduct(s.id)}}},[r("div",{staticClass:"pic"},[r("div",{staticClass:"pic-enlarge",style:{backgroundImage:"url("+s.image+")"}})]),r("div",{staticClass:"card-body"},[r("span",{staticClass:"badge badge-secondary mb-2"},[t._v(t._s(s.category))]),r("h5",{staticClass:"card-title"},[t._v(t._s(s.title))])])])])})),1),r("div",{staticClass:"swiper-button swiper-button-left fas fa-chevron-circle-left fa-2x text-primary"}),r("div",{staticClass:"swiper-button swiper-button-right fas fa-chevron-circle-right fa-2x text-primary"})],1)])],1)},i=[],a=(r("a7a3"),{data(){return{swiperOption:{observer:!0,loop:!0,observeParents:!0,slidesPerView:1,breakpoints:{540:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}},navigation:{nextEl:".swiper-button-right",prevEl:".swiper-button-left"}},productId:"",product:{}}},methods:{getProductId(t){const s=this;this.$store.dispatch("updataLoading",!0);const r="https://vue-course-api.hexschool.io/api/jasonlee2357/product/"+t;s.$http.get(r).then(t=>{s.product=t.data.product,s.product.num=1,this.$store.dispatch("updataLoading",!1)})},addToCart(){this.$store.dispatch("addToCart",{id:this.productId,qty:this.product.num})},getProducts(){this.$store.dispatch("getProducts")},getProduct(t){const s=this;s.$router.push("/product/"+t),s.productId=t,s.getProductId(t)}},computed:{filterProduct(){const t=this;return t.products.filter(s=>{if(s.id!==t.product.id)return s.category===t.product.category})},isLoading(){return this.$store.state.isLoading},products(){return this.$store.state.products}},created(){const t=this;t.productId=t.$route.params.productId,t.getProductId(t.productId),t.getProducts()}}),c=a,o=r("2877"),d=Object(o["a"])(c,e,i,!1,null,null,null);s["default"]=d.exports},a7a3:function(t,s,r){}}]);
//# sourceMappingURL=chunk-2f69588e.e9a42946.js.map
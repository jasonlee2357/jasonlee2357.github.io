(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c7b"],{"8b72":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),s("div",{staticClass:"container my-5"},[t._m(0),t.products.length?s("div",[t.filterProducts.length?t._e():s("div",{staticClass:"text-center d-flex justify-content-center align-items-center"},[s("div",[s("div",{staticClass:"h3 mb-3"},[t._v("目前沒有關注的商品哦")]),s("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"/products"}},[t._v("趕快去看看吧")])],1)])]):t._e(),s("div",{staticClass:"row"},t._l(t.filterProducts,(function(e){return s("div",{key:e.id,staticClass:"col-md-6 col-lg-4 mb-4",attrs:{"data-aos":"fade-up"}},[s("div",{staticClass:"card shadow-sm card-round"},[s("router-link",{staticClass:"pic",attrs:{to:{path:"/product/"+e.id}}},[s("div",{staticClass:"pic-enlarge",style:{backgroundImage:"url("+e.imageUrl+")"}})]),s("router-link",{staticClass:"card-body text-decoration-none",attrs:{to:{path:"/product/"+e.id}}},[s("h5",{staticClass:"card-title text-dark"},[t._v(t._s(e.title))]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price===e.origin_price?s("div",{staticClass:"h4 text-dark"},[t._v(t._s(t._f("currency")(e.origin_price)))]):t._e(),e.price!=e.origin_price?s("del",{staticClass:"h6 text-secondary"},[t._v(t._s(t._f("currency")(e.origin_price)))]):t._e(),e.price!=e.origin_price?s("div",{staticClass:"h4 text-danger"},[t._v(t._s(t._f("currency")(e.price)))]):t._e()]),s("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[s("a",{staticClass:"text-primary",attrs:{title:"加入最愛"},on:{click:function(s){return s.preventDefault(),t.addMyFavorite(e.id)}}},[s("i",{staticClass:"far fa-heart fa-lg",class:{"fas fa-heart fa-lg":e.isLike}})]),s("a",{staticClass:"text-primary",attrs:{title:"加入購物車"},on:{click:function(s){return s.preventDefault(),t.addToCart(e.id)}}},[s("i",{staticClass:"fas fa-cart-plus fa-2x"})])])])],1)])})),0)])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h2 text-center pb-5"},[s("span",{staticClass:"page-title"},[t._v("我的願望清單")])])}],r={data(){return{}},methods:{getProducts(){this.$store.dispatch("getProducts")},addToCart(t,e=1){this.$store.dispatch("addToCart",{id:t,qty:e})},addMyFavorite(t){this.$store.dispatch("addMyFavorite",t)}},computed:{filterProducts(){const t=this;return t.products.filter((function(e){return t.myFavorite.indexOf(e.id)>-1}))},isLoading(){return this.$store.state.isLoading},products(){return this.$store.state.products},myFavorite(){return this.$store.state.myFavorite}},created(){const t=this;t.getProducts()}},c=r,n=s("2877"),d=Object(n["a"])(c,i,a,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e8c7b.0f738adc.js.map
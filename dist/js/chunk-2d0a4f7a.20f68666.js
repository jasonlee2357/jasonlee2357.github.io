(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4f7a"],{"0961":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"container my-5"},[t.cart.final_total?a("div",[a("div",{staticClass:"row justify-content-center"},[t._m(0),a("div",{staticClass:"col-md-9 mt-5"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.cart.carts,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.delCart(e)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),a("td",{staticClass:"d-none d-md-table-cell"},[a("router-link",{attrs:{to:{path:"/product/"+e.product.id}}},[a("img",{attrs:{height:"50",src:e.product.imageUrl,alt:""}})])],1),a("td",{staticClass:" align-middle"},[a("router-link",{staticClass:"text-dark",attrs:{to:{path:"/product/"+e.product.id}}},[t._v(t._s(e.product.title))]),e.coupon?a("div",{staticClass:"text-success"},[t._v("已套用優惠券")]):t._e()],1),a("td",{staticClass:" align-middle"},[a("select",{domProps:{value:e.qty},on:{change:function(a){return t.changeCartNum(e.id,e.product_id,a)}}},t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0),t._v(" /"+t._s(e.product.unit)+" ")]),a("td",{staticClass:" align-middle"},[t._v(t._s(t._f("currency")(e.product.price)))]),a("td",{staticClass:" align-middle"},[t._v(t._s(t._f("currency")(e.product.price*e.qty)))])])})),0),a("tfoot",[t.cart.final_total===t.cart.total?a("tr",[a("td",{attrs:{colspan:"3"}},[a("div",{staticClass:"input-group input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupons.code,expression:"coupons.code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupons.code},on:{input:function(e){e.target.composing||t.$set(t.coupons,"code",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.useCoupons(e)}}},[t._v("套用優惠碼")])])])]),a("td",{staticClass:"text-right align-middle ",attrs:{colspan:"3"}},[t._v(" 總計： "),a("span",[t._v(t._s(t._f("currency")(t.cart.total)))])])]):t._e(),t.cart.final_total!==t.cart.total?a("tr",[a("td",{staticClass:"align-middle",attrs:{colspan:"3"}},[a("div",{staticClass:"input-group input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupons.code,expression:"coupons.code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupons.code},on:{input:function(e){e.target.composing||t.$set(t.coupons,"code",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.useCoupons(e)}}},[t._v("套用優惠碼")])])])]),a("td",{staticClass:"text-right text-secondary align-middle ",attrs:{colspan:"3"}},[t._v(" 折扣前總計： "),a("span",[t._v(t._s(t._f("currency")(t.cart.total)))])])]):t._e(),t.cart.final_total!==t.cart.total?a("tr",[a("td",{staticClass:"h5 text-right",attrs:{colspan:"6"}},[t._v(" 折扣後總計： "),a("span",{staticClass:"h4 text-danger"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])])]):t._e()])])])]),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.creatOrder(e)}}},[a("div",{staticClass:"form-group"},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"userEmail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v("必須輸入Email")]):t._e()]),a("div",{staticClass:"form-group"},[t._m(3),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("必須輸入姓名")]):t._e()]),a("div",{staticClass:"form-group"},[t._m(4),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|digits:10",expression:"'required|digits:10'"},{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",id:"usertel",name:"tel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("tel")?a("span",{staticClass:"text-danger"},[t._v("必須輸入10位數電話號碼")]):t._e()]),a("div",{staticClass:"form-group"},[t._m(5),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._m(6)])])]):t._e(),0===t.cart.final_total?a("div",[a("div",{staticClass:"cart-none text-center d-flex justify-content-center align-items-center"},[a("div",[a("div",{staticClass:"h3 mb-3"},[t._v("您的購物車內還沒有任何商品")]),a("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return e.preventDefault(),t.goShop(e)}}},[a("i",{staticClass:"fas fa-cart-plus"}),t._v(" 點擊此處去購物 ")])])])]):t._e()])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-around"},[a("div",{staticClass:"col-md-3 p-2 rounded-pill alert-primary border border-primary text-primary text-center"},[t._v("1.填寫訂購資料")]),a("div",{staticClass:"col-md-3 p-2 rounded-pill border border-primary text-primary text-center my-3 my-md-0"},[t._v("2.金流付款")]),a("div",{staticClass:"col-md-3 p-2 rounded-pill border border-primary text-primary text-center"},[t._v("3.訂單完成")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th"),a("th",{staticClass:"d-none d-md-table-cell",attrs:{width:"75"}}),a("th",{},[t._v("品名")]),a("th",{},[t._v("數量")]),a("th",{},[t._v("單價")]),a("th",{},[t._v("總價格")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"userEmail"}},[t._v(" Email "),a("span",{staticClass:"text-danger"},[t._v("*必填")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"username"}},[t._v(" 收件人姓名 "),a("span",{staticClass:"text-danger"},[t._v("*必填")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"usertel"}},[t._v(" 收件人電話 "),a("span",{staticClass:"text-danger"},[t._v("*必填")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"useraddress"}},[t._v(" 收件人地址 "),a("span",{staticClass:"text-danger"},[t._v("*必填")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])}],o={data(){return{coupons:{code:""},form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){this.$store.dispatch("getCart")},delCart(t){this.$store.dispatch("delCart",t)},changeCartNum(t,e,a){const s=this;s.$store.dispatch("updataLoading",!0);const r="https://vue-course-api.hexschool.io/api/jasonlee2357/cart/"+t,o="https://vue-course-api.hexschool.io/api/jasonlee2357/cart",i={product_id:e,qty:parseInt(a.target.value)};s.$http.delete(r).then(t=>{s.$http.post(o,{data:i}).then(t=>{s.getCart(),s.$store.dispatch("updataLoading",!1),s.$store.dispatch("updateMessage",{message:"變更商品成功",status:"success"})})})},useCoupons(){const t=this,e="https://vue-course-api.hexschool.io/api/jasonlee2357/coupon";t.$http.post(e,{data:t.coupons}).then(e=>{e.data.success?(t.getCart(),t.$store.dispatch("updateMessage",{message:e.data.message,status:"success"})):(t.$store.dispatch("updateMessage",{message:e.data.message,status:"danger"}),t.coupons.code="")})},creatOrder(){const t=this,e="https://vue-course-api.hexschool.io/api/jasonlee2357/order";t.$validator.validate().then(a=>{a?t.$http.post(e,{data:t.form}).then(e=>{t.$store.dispatch("getCart"),t.$router.push("/checkout/"+e.data.orderId)}):t.$store.dispatch("updateMessage",{message:"欄位不得為空",status:"danger"})})},goShop(){const t=this;t.$router.push("/products")}},created(){const t=this;t.getCart()},computed:{isLoading(){return this.$store.state.isLoading},cart(){return this.$store.state.cart}}},i=o,n=a("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0a4f7a.20f68666.js.map
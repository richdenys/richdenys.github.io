(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{237:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d}));var o=r(355),n=r(0),c=Object(n.g)("v-card__actions"),l=Object(n.g)("v-card__subtitle"),d=Object(n.g)("v-card__text"),h=Object(n.g)("v-card__title");o.a},391:function(t,e,r){t.exports=r.p+"img/ser.e0f5918.png"},398:function(t,e,r){var content=r(425);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("1b7833da",content,!0,{sourceMap:!1})},421:function(t,e,r){t.exports=r.p+"img/hero.0d4d838.jpg"},422:function(t,e,r){t.exports=r.p+"img/solutions.882e8cc.svg"},423:function(t,e,r){t.exports=r.p+"img/testimonio.076689c.svg"},424:function(t,e,r){"use strict";r(398)},425:function(t,e,r){(e=r(7)(!1)).push([t.i,".noticias{padding-top:93px;padding-bottom:60px;background:#f9f9f9}.testimonio{padding-top:49px;padding-bottom:49px;background:#f5f5f5}.slider{overflow:hidden;position:relative;background:#edf3f5}[dir=ltr] p{margin-left:0}[dir=ltr] p,[dir=rtl] p{margin-right:0}[dir=rtl] p{margin-left:0}p{display:block;margin-top:1em;margin-bottom:1em}.solucion{padding-top:64px;background:#edf3f5;position:relative;z-index:2}.service{background:#f9f9f9;height:750px;display:flex;align-items:center;position:relative}.circle{position:absolute;top:46%;left:50%;transform:translate(-50%,-50%);width:100%;height:550px;border-radius:100%;z-index:1;background:#edf3f5}",""]),t.exports=e},426:function(t,e,r){var content=r(427);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("2d62e390",content,!0,{sourceMap:!1})},427:function(t,e,r){(e=r(7)(!1)).push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=e},430:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{colors:["green","secondary","yellow darken-4","red lighten-2","orange darken-1"],cycle:!0,model:null,slides:[{src:"/_nuxt/assets/pbank.svg"},{src:"~/assets/pbank.svg"},{src:"../assets/pbank.svg"}]}}},n=(r(424),r(53)),c=r(64),l=r.n(c),d=r(176),h=r(355),v=r(237),m=(r(14),r(32),r(2)),f=(r(426),r(390)),y=r(354),_=r(111),w=r(230),x=r(112),O=x.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return x.a.options.computed.classes.call(this)}},methods:{genData:x.a.options.methods.genData}}),j=r(0),k=r(6);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D=f.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return S(S({},f.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(k.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:f.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,r=[],i=0;i<e;i++){var o=this.$createElement(y.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(_.a,{props:{size:18}},this.delimiterIcon)]);r.push(o)}return this.$createElement(O,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},r)},genProgress:function(){return this.$createElement(w.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=f.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(j.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),V=r(386),P=r(236),T=r(4),$=r(47);function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object(T.a)(V.a,$.a).extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(P.a,{staticClass:"v-carousel__item",props:I(I({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(j.k)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}}),z=r(365),B=r(374),L=r(162),G=r(368),R=r(30),H=r(399),N=r(110),J=r(1).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(m.a)({},this.activeClass,this.isActive)}),element):(Object(k.c)("v-item should only contain a single element",this),element)):(Object(k.c)("v-item is missing a default scopedSlot",this),null);var element}}),M=(Object(T.a)(J,Object(N.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(T.a)(J,Object(N.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticClass:"slider"},[o("v-card",{staticClass:"imagen",attrs:{elevation:"0"}},[o("img",{staticStyle:{width:"100%"},attrs:{src:r(421),alt:""}})])],1),t._v(" "),o("section",{staticClass:"solucion"},[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-card",{staticStyle:{background:"#edf3f5"},attrs:{elevation:"0"}},[o("img",{staticStyle:{width:"100%"},attrs:{src:r(422),alt:""}})])],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-card",{staticStyle:{background:"#edf3f5"},attrs:{elevation:"0"}},[o("div",{staticClass:"mt-12"},[o("span",{staticClass:"font-weight-regular display-1 text--secondary"},[t._v("La solución definitiva:")]),t._v(" "),o("h2",{staticStyle:{color:"#1487c9","font-size":"35px"}},[t._v("CigePerú ERP")]),t._v(" "),o("p",{staticStyle:{"text-align":"left","font-size":"16px","font-family":"'nunito_sansregular',sans-serif",color:"#4b4b4b"}},[t._v("Es un software de gestión empresarial (ERP) diseñado para medianas y grandes empresas. Integra todas las funciones principales de un negocio en un solo sistema: finanzas, contabilidad, ventas, marketing, inventarios, producción, servicio al cliente y mucho más.")])]),t._v(" "),o("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo",href:"/products"}},[t._v("\n     Ver mas...\n         "),o("v-icon",{attrs:{right:"",dark:""}},[t._v("\n        mdi-chevron-right\n      ")])],1)],1)],1)],1)],1),t._v(" "),o("section",{staticClass:"service "},[o("div",{staticClass:"circle"},[o("v-card-text",{staticClass:"text-center",attrs:{width:"400"}},[o("p",{staticStyle:{color:"#1487c9","font-size":"35px","font-family":"'nunito_sansregular',sans-serif"},attrs:{float:""}},[t._v(" Nuestros Servicio")])]),t._v(" "),o("v-container",{attrs:{"grid-list-sm":""}},[o("v-card",{staticClass:"mx-auto mt-8",attrs:{elevation:"0",width:"700"}},[o("v-carousel",{attrs:{continuous:!1,cycle:t.cycle,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":"mdi-circle",height:"300"}},t._l(t.slides,(function(e,i){return o("v-carousel-item",{key:i},[o("v-sheet",{attrs:{height:"80%",tile:""}},[o("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[o("v-col",[o("v-card",[o("img",{attrs:{src:e.src,alt:""}}),t._v(" "),o("v-card-text",[t._v("\n                  csdcsdcknj\n                ")])],1)],1)],1)],1)],1)})),1)],1)],1)],1)]),t._v(" "),o("section",{staticClass:"testimonio"},[o("p",{staticStyle:{color:"#1487c9","font-size":"35px","font-family":"'nunito_sansregular',sans-serif"},attrs:{float:""}},[t._v("Testimonios de clientes")]),t._v(" "),o("v-container",{attrs:{"grid-list-md":""}},[o("v-row",[o("v-col",{staticClass:"mt-10",attrs:{cols:"12",sm:"6"}},[o("v-card",[o("v-card",{staticClass:"mx-auto mt-10",attrs:{elevation:"0"}},[o("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"0","max-width":"700"}},[o("v-slide-group",{staticClass:"pa-4",staticStyle:{background:"#f5f5f5"},attrs:{"active-class":"success","show-arrows":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(15,(function(e){return o("v-slide-item",{key:e,attrs:{circle:""},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.active,n=t.toggle;return[o("v-card",{staticClass:"ma-4",attrs:{color:e?void 0:"grey lighten-1",height:"200",width:"300",elevation:"0"},on:{click:n}},[o("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:r(391),alt:""}})])]}}],null,!0)})})),1)],1)],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"6"}},[o("v-card",{staticStyle:{background:"#f5f5f5"},attrs:{elevation:"0"}},[o("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:r(423),alt:""}})])],1)],1)],1)],1),t._v(" "),o("section",{staticClass:"noticias"},[o("v-card",{staticStyle:{background:"#f9f9f9"},attrs:{elevation:"0"}},[o("v-card-text",{staticClass:"text-center"},[o("p",{staticStyle:{color:"#1487c9","font-size":"35px","font-family":"'nunito_sansregular',sans-serif"},attrs:{float:""}},[t._v("Entérate de las "),o("br"),t._v(" "),o("br"),t._v("\núltimas noticias")])])],1),t._v(" "),o("v-row",[o("v-col",[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[o("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),t._v(" "),o("v-card-subtitle",[t._v("\n     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus reprehenderit perspiciatis atque nemo autem quod ab similique voluptatibus error illum.\n    ")])],1)],1),t._v(" "),o("v-col",[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[o("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),t._v(" "),o("v-card-subtitle",[t._v("\n     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure illum, commodi sapiente ipsa illo quod molestias voluptatem a dolores magni?\n    ")])],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardSubtitle:v.a,VCardText:v.b,VCarousel:D,VCarouselItem:A,VCol:z.a,VContainer:B.a,VIcon:L.a,VImg:P.a,VRow:G.a,VSheet:R.a,VSlideGroup:H.b,VSlideItem:M})}}]);
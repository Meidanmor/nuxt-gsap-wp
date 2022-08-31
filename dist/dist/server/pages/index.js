exports.ids = [3];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("31336f81", content, true, context)
};

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2e107364", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMasthead_vue_vue_type_style_index_0_id_039f23eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMasthead_vue_vue_type_style_index_0_id_039f23eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMasthead_vue_vue_type_style_index_0_id_039f23eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMasthead_vue_vue_type_style_index_0_id_039f23eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppMasthead_vue_vue_type_style_index_0_id_039f23eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face{font-family:\"Rubik Dirt\";font-style:normal;font-weight:400;font-display:swap;src:url(/rubik-dirt-v1-latin_hebrew/rubik-dirt-v1-latin_hebrew-regular.eot);src:local(\"\"),url(/rubik-dirt-v1-latin_hebrew/rubik-dirt-v1-latin_hebrew-regular.eot?#iefix) format(\"embedded-opentype\"),url(/rubik-dirt-v1-latin_hebrew/rubik-dirt-v1-latin_hebrew-regular.woff2) format(\"woff2\"),url(/rubik-dirt-v1-latin_hebrew/rubik-dirt-v1-latin_hebrew-regular.woff) format(\"woff\"),url(/rubik-dirt-v1-latin_hebrew/rubik-dirt-v1-latin_hebrew-regular.ttf) format(\"truetype\"),url(/rubik-dirt-v1-latin_hebrew/rubik-dirt-v1-latin_hebrew-regular.svg#RubikDirt) format(\"svg\")}@font-face{font-family:\"Clash Display\";font-style:normal;font-weight:400;font-display:swap;src:url(/clash-display/ClashDisplay-Regular.eot);src:local(\"\"),url(/clash-display/ClashDisplay-Regular.eot?#iefix) format(\"embedded-opentype\"),url(/clash-display/ClashDisplay-Regular.woff2) format(\"woff2\"),url(/clash-display/ClashDisplay-Regular.woff) format(\"woff\"),url(/clash-display/ClashDisplay-Regular.ttf) format(\"truetype\")}body[data-v-039f23eb]{direction:rtl;background:#222;width:100%}.page-enter-active[data-v-039f23eb],.page-leave-active[data-v-039f23eb]{transition-duration:1s;z-index:999}.page-enter-active[data-v-039f23eb]:after,.page-enter-active[data-v-039f23eb]:before,.page-leave-active[data-v-039f23eb]:after,.page-leave-active[data-v-039f23eb]:before{content:\"\";position:fixed;top:0;left:0;z-index:9;display:block;width:100%;height:50%;transition-property:opacity,transform;transition-timing-function:ease-in-out}.page-enter-active[data-v-039f23eb]:before,.page-leave-active[data-v-039f23eb]:before{background-color:#3e3e3e}.page-enter-active[data-v-039f23eb]:after,.page-leave-active[data-v-039f23eb]:after{top:50%;background-color:#3e3e3e}.page-leave[data-v-039f23eb]:after,.page-leave[data-v-039f23eb]:before{transform:scaleX(0)}.page-leave-active[data-v-039f23eb]:before{transition-duration:.5s}.page-leave-active[data-v-039f23eb]:after{transition-duration:.3s;transition-delay:.2s}.page-leave-to[data-v-039f23eb]:after,.page-leave-to[data-v-039f23eb]:before{transform:scale(1);transform-origin:left}.page-enter[data-v-039f23eb]:after,.page-enter[data-v-039f23eb]:before{transform:scaleX(1)}.page-enter-active[data-v-039f23eb]:before{transition-duration:.5s}.page-enter-active[data-v-039f23eb]:after{transition-duration:.3s;transition-delay:.2s}.page-enter-to[data-v-039f23eb]:after,.page-enter-to[data-v-039f23eb]:before{transform:scaleX(0);transform-origin:right}.max-width[data-v-039f23eb]{width:100%}section.hero .max-width[data-v-039f23eb]{max-width:1400px;height:inherit;flex-direction:column;padding:0 20px}section.hero .max-width[data-v-039f23eb],section.hero .stars[data-v-039f23eb]{display:flex;align-items:center;justify-content:center}section.hero .stars[data-v-039f23eb]{position:absolute;width:100%;height:100%;top:0;left:0}section.hero .stars .star[data-v-039f23eb]{color:#fff}section.hero h2[data-v-039f23eb]{font-family:\"Rubik Dirt\";font-weight:400;margin:0 0 40px;letter-spacing:0;font-size:35px;max-width:700px;color:#fff}section.hero .heroBTNS[data-v-039f23eb]{margin-top:20px;display:flex;justify-content:space-between;flex-wrap:wrap}section.hero a[data-v-039f23eb]{text-decoration:none;height:64px;font-size:18px;width:200px;max-width:49%;font-family:\"ClashDisplay-Medium\"}section.hero a[data-v-039f23eb],section.masthead[data-v-039f23eb]{display:flex;align-items:center;justify-content:center}section.masthead[data-v-039f23eb]{width:100%;text-align:center;position:relative}section.masthead h1[data-v-039f23eb]{color:#fff;font-size:30px}@media (min-width:320px){section.masthead h1[data-v-039f23eb]{font-size:calc(19.29254px + 3.34608vw)}}@media (min-width:1366px){section.masthead h1[data-v-039f23eb]{font-size:65px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[data-scrollbar]{height:100vh}section{min-height:100vh}section.PROJECTS .max-width{display:flex;flex-direction:column;align-items:center}section.PROJECTS ul.theProjects{padding:0;list-style:none;display:flex;flex-direction:column;align-items:flex-end;width:100%;margin:80px 0 0;overflow:hidden}section.PROJECTS ul.theProjects li{position:relative;width:100%;padding-right:25%;margin-bottom:230px;counter-increment:section;height:600px}section.PROJECTS .postImgWrap{position:relative;align-items:flex-end;height:95%;display:flex;flex-direction:column;justify-content:space-between}section.PROJECTS span.text{-webkit-text-stroke:1px #fff;font-size:110px;font-size:35px;left:-40px;background:transparent;position:absolute;top:0;left:0;color:transparent;font-weight:700;padding:10px;display:inline-block;width:-webkit-fill-available}section.PROJECTS span.text.front{z-index:2}section.PROJECTS span.text.back{z-index:0;color:#fff}section.PROJECTS .theImage{width:100%;height:100%;position:relative;transition:1s ease;transform-origin:right;transform-style:preserve-3d}section.PROJECTS .theImage.active:before{opacity:.5}section.PROJECTS .theImage.active:before,section.PROJECTS .theImage.active img{transform:scaleX(1)}section.PROJECTS .theImage:before{content:\"\";position:absolute;width:100%;height:100%;z-index:1;background:rgba(0,0,0,.58039);transition:.7s ease;transform:scaleX(0);transform-origin:right}section.PROJECTS .Open{position:absolute;z-index:9;bottom:50px;right:-75px;font-size:25px;display:flex;align-items:center;justify-content:center;width:150px;height:150px;border:2px solid #fff;-webkit-animation:rotation 4.5s linear infinite;animation:rotation 4.5s linear infinite;text-align:center;text-decoration:none;line-height:1;background:transparent;border-radius:50%;padding:15px}section.PROJECTS .Open span{width:-webkit-max-content;width:-moz-max-content;width:max-content;display:flex;position:absolute;font-size:18px;color:#fff;letter-spacing:5px;font-family:\"Rubik Dirt\";transition:.5s ease}section.PROJECTS .hideOverflow{height:inherit;overflow:hidden}section.PROJECTS img{width:100%;background:#000;z-index:1;height:100%;-o-object-fit:cover;object-fit:cover;transform-origin:right}a,a:active,a:visited{text-decoration:none;color:#000}@-webkit-keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=399dd77a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"theNuxt"},[_c('app-masthead'),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"PROJECTS\">","</section>",[_vm._ssrNode("<div class=\"max-width\">","</div>",[_vm._ssrNode("<h2> PORTFOLIO </h2> "),_vm._ssrNode("<ul class=\"theProjects\">","</ul>",_vm._l((_vm.posts),function(post){return _vm._ssrNode("<li class=\"post\">","</li>",[_vm._ssrNode("<div class=\"postImgWrap\">","</div>",[_vm._ssrNode("<span class=\"text front\">"+_vm._ssrEscape(_vm._s(post.title.rendered))+"</span> <span class=\"text back\">"+_vm._ssrEscape(_vm._s(post.title.rendered))+"</span> "),_vm._ssrNode("<div class=\"magnetic theImage\">","</div>",[_c('nuxt-link',{staticClass:"Open",attrs:{"to":("blog/" + (post.slug))}},[_c('span',[_vm._v("\n          צפייה בפרויקט\n")])]),_vm._ssrNode(" <div class=\"hideOverflow\"><img"+(_vm._ssrAttr("src",post.images.large))+" width=\"500\" height=\"500\"></div>")],2)],2)])}),0)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=399dd77a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AppMasthead.vue?vue&type=template&id=039f23eb&scoped=true&
var AppMastheadvue_type_template_id_039f23eb_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"masthead hero"},[_vm._ssrNode("<div class=\"stars\" data-v-039f23eb><span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span> <span class=\"star\" data-v-039f23eb>★</span></div> <div class=\"max-width\" data-v-039f23eb><h2 data-v-039f23eb>"+_vm._ssrEscape(" \n"+_vm._s(_vm.tagline)+"\n")+"</h2> <div class=\"heroBTNS\" data-v-039f23eb><a href=\"javascript:void(0)\" class=\"magnetic showProjects\" data-v-039f23eb> PORTFOLIO </a> <a href=\"javascript:void(0)\" class=\"magnetic startProject\" data-v-039f23eb> START NOW </a></div></div>")])}
var AppMastheadvue_type_template_id_039f23eb_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/AppMasthead.vue?vue&type=template&id=039f23eb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppMasthead.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppMastheadvue_type_script_lang_js_ = ({
  data() {
    return {
      tagline: "אנחנו לא בונים אתרים, אנחנו מגשימים חלומות!"
    };
  }

});
// CONCATENATED MODULE: ./components/AppMasthead.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppMastheadvue_type_script_lang_js_ = (AppMastheadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppMasthead.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppMastheadvue_type_script_lang_js_,
  AppMastheadvue_type_template_id_039f23eb_scoped_true_render,
  AppMastheadvue_type_template_id_039f23eb_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "039f23eb",
  "2355f59c"
  
)

/* harmony default export */ var AppMasthead = (component.exports);
// EXTERNAL MODULE: external "gsap/dist/gsap"
var gsap_ = __webpack_require__(7);

// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(11);

// EXTERNAL MODULE: external "gsap/dist/ScrollToPlugin"
var ScrollToPlugin_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  beforeDestroy() {
    console.log('vcds');
    ScrollTrigger_["ScrollTrigger"].getAll().forEach(trigg => {
      console.log(trigg);
      trigg.kill();
      gsap_["gsap"].killTweensOf(window);
    });
  },

  transition(to, from) {
    console.log('changed');
  },

  components: {
    AppMasthead: AppMasthead
  },

  mounted() {
    gsap_["gsap"].registerPlugin(ScrollTrigger_["ScrollTrigger"], ScrollToPlugin_["ScrollToPlugin"]);
    this.startAnim();
  },

  data() {
    return {
      selectedTag: null,
      activeClass: "active"
    };
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    }

  },

  created() {
    this.$store.dispatch("getPosts");
  },

  methods: {
    startAnim() {
      if (document.querySelector('a.showProjects')) {
        document.querySelector('a.showProjects').addEventListener('click', function (e) {
          var heroHeight = document.querySelector('.hero').clientHeight;
          gsap_["gsap"].to(document.documentElement, {
            scrollTo: heroHeight,
            duration: .5,
            ease: 'back.out(1)'
          });
        });
      }

      ;
      let hrefStartAnim = document.querySelector('.heroBTNS a.startProject');
      let hrefShowAnim = document.querySelector('.heroBTNS a.showProjects');
      let elementRevealA = document.querySelector(".hero h2");
      let targets = gsap_["gsap"].utils.toArray(".heroBTNS a");

      if (hrefStartAnim) {
        gsap_["gsap"].fromTo(hrefStartAnim, {
          autoAlpha: 0,
          y: 100,
          x: -100,
          ease: 'back.out(1.5)'
        }, {
          autoAlpha: 1,
          y: 0,
          x: 0,
          onComplete: () => {
            hrefStartAnim.classList.add('afterAnim');
          }
        });
      }

      if (hrefShowAnim) {
        gsap_["gsap"].fromTo(hrefShowAnim, {
          autoAlpha: 0,
          y: 100,
          x: 100,
          ease: 'back.out(1.5)'
        }, {
          autoAlpha: 1,
          y: 0,
          x: 0,
          onComplete: () => {
            setTimeout(function () {
              hrefShowAnim.classList.add('afterAnim');
            }, 500);
          }
        });
      }

      function afterCompleteA() {
        gsap_["gsap"].to(elementRevealA, {
          scrollTrigger: {
            trigger: 'body',
            scrub: 1.5,
            start: "top -10%",
            end: "+=1%"
          },
          autoAlpha: 0,
          y: -200,
          skewX: 20,
          rotate: 5,
          ease: "back.in(1.5)"
        });
      }

      if (scrollY === 0 && elementRevealA) {
        gsap_["gsap"].from(elementRevealA, {
          duration: 0.9,
          y: 100,
          skewX: -10,
          rotate: -5,
          opacity: 0,
          ease: "back.out(2)",
          onComplete: afterCompleteA
        });
      }

      let observerOptions = {
        rootMargin: '0px',
        threshold: 0.5
      };
      const observerStars = new IntersectionObserver(observerCallbackStars, observerOptions);

      function observerCallbackStars(entries, observer) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            /*gsap.to('.scrollToTop', {
            x: 0,
            autoAlpha: 1,
            duration: .5,
            });*/
            gsap_["gsap"].utils.toArray(".star").forEach((el, i) => {
              gsap_["gsap"].to(el, {
                duration: .5,
                x: gsap_["gsap"].utils.random(-400, 400),
                y: gsap_["gsap"].utils.random(-300, 700),
                z: gsap_["gsap"].utils.random(-400, 400),
                rotation: gsap_["gsap"].utils.random(-250, 25),
                scale: gsap_["gsap"].utils.random(0.5, 3),
                autoAlpha: 1
              });
            });
          } else {
            /*gsap.to('.scrollToTop', {
            x: -100,
            autoAlpha: 0,
            duration: .5,
            });*/
            gsap_["gsap"].utils.toArray(".star").forEach((el, i) => {
              gsap_["gsap"].to(el, {
                duration: .5,
                x: 0,
                y: 0,
                z: 0,
                rotation: 360,
                autoAlpha: 0
              });
            });
          }
        });
      }

      ;
      let targetingStars = '.hero h2';
      document.querySelectorAll(targetingStars).forEach(i => {
        if (i) {
          observerStars.observe(i);
        }
      });
      const observerBefore = new IntersectionObserver(observerCallbackBefore, observerOptions);

      function observerCallbackBefore(entries, observer) {
        entries.forEach(entry => {
          const spans = entry.target.querySelectorAll('span.text');
          const spanFront = entry.target.querySelector('span.text.front');
          const image = entry.target.querySelector('.theImage');
          let section = entry.target.querySelector('.theImage .hideOverflow');

          if (entry.isIntersecting) {
            gsap_["gsap"].utils.toArray(spans).forEach(function (span) {
              ScrollTrigger_["ScrollTrigger"].matchMedia({
                // desktop
                "(min-width: 800px)": function () {
                  gsap_["gsap"].to(span, {
                    x: 50,
                    y: -100,
                    rotate: 0,
                    autoAlpha: 1,
                    onComplete: () => {
                      gsap_["gsap"].fromTo(span, {
                        duration: 1,
                        x: 50,
                        ease: "linear"
                      }, {
                        scrollTrigger: {
                          scrub: 1,
                          trigger: section,
                          start: "top +50%",
                          end: "+=100%"
                        },
                        duration: 1,
                        x: -80
                      });
                    }
                  });
                },
                // mobile
                "(max-width: 799px)": function () {
                  gsap_["gsap"].fromTo(span, {
                    x: 0,
                    y: 300,
                    rotate: -90,
                    opacity: 0
                  }, {
                    ease: "power3.out",
                    duration: 1.5,
                    x: 0,
                    y: 50,
                    rotate: -90,
                    autoAlpha: 1,
                    opacity: 1,
                    onComplete: () => {
                      gsap_["gsap"].fromTo(span, {
                        x: 0,
                        y: 50,
                        rotate: -90,
                        autoAlpha: 1,
                        opacity: 1,
                        ease: "linear"
                      }, {
                        scrollTrigger: {
                          scrub: 1,
                          trigger: section,
                          start: "top +50%",
                          end: "+=100%"
                        },
                        y: 0
                      });
                    }
                  });
                }
              });
            });
            gsap_["gsap"].fromTo(section, {
              autoAlpha: 0,
              scaleX: 0
            }, {
              transformOrigin: "right",
              duration: .3,
              autoAlpha: 1,
              scaleX: 1,
              ease: "ease",
              onStart: () => {
                image.classList.add('active');
              },
              onComplete: () => {
                setTimeout(function () {
                  gsap_["gsap"].fromTo(section.querySelector('img'), {
                    scale: 1
                  }, {
                    scrollTrigger: {
                      scrub: 1.5,
                      trigger: section,
                      start: "top +70%",
                      end: "+=80%"
                    },
                    ease: "linear",
                    x: 20,
                    scale: 1.1
                  });
                }, 350);
              }
            });
            observer.unobserve(entry.target);
          } else {}
        });
      }

      ;
      let targetingBefore = '.postImgWrap';
      document.querySelectorAll(targetingBefore).forEach(i => {
        if (i) {
          observerBefore.observe(i);
        }
      });
      var magnets = document.querySelectorAll('.magnetic');
      var strength = 80;
      magnets.forEach(magnet => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function (event) {
          gsap_["gsap"].to(event.currentTarget, 1, {
            x: 0,
            y: 0,
            ease: gsap_["Power4"].easeOut
          });
        });
      });

      function moveMagnet(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect(); //console.log(magnetButton, bounding)

        gsap_["gsap"].to(magnetButton, 1, {
          x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * strength,
          y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * strength,
          ease: gsap_["Power4"].easeOut
        }); //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  null,
  "325d2d7e"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
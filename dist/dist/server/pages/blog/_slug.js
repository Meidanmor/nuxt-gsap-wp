exports.ids = [2];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5aa61750", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0724c76f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0724c76f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0724c76f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0724c76f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_0724c76f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "div.wrapper[data-v-0724c76f]{padding-top:0}main.post[data-v-0724c76f]{justify-content:center;align-content:center;height:100%}.mainWrapper[data-v-0724c76f],main.post[data-v-0724c76f]{background:#f0f8ff;display:flex;flex-direction:column;flex-wrap:wrap;align-items:center}.mainWrapper[data-v-0724c76f]{height:100vh;justify-content:flex-end;width:100%}.mainWrapper img[data-v-0724c76f]{position:absolute;top:0;opacity:.7;left:0;height:100%;-o-object-fit:contain;object-fit:contain;max-height:100vh}section[data-v-0724c76f]{color:#444}.date[data-v-0724c76f]{position:absolute;left:10px;bottom:5px}section.postContents[data-v-0724c76f]{padding:30px;background-image:linear-gradient(0,#fff 98%,transparent);width:100%;position:absolute;top:85%;color:#000}section.postContents h1[data-v-0724c76f]{font-size:40px;margin-bottom:0;width:100%;padding:0 0 30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=0724c76f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"theNuxt"},[_vm._ssrNode("<main class=\"post individual\" data-v-0724c76f><div class=\"mainWrapper\" data-v-0724c76f><img"+(_vm._ssrAttr("src",_vm.post.images.large))+" width=\"500\" height=\"500\" data-v-0724c76f> <small class=\"date\" data-v-0724c76f>"+_vm._ssrEscape(_vm._s(_vm._f("dateformat")(_vm.post.date)))+"</small></div> <section class=\"postContents\" data-v-0724c76f><h1 data-v-0724c76f>"+_vm._ssrEscape(_vm._s(_vm.post.title.rendered))+"</h1> <div data-v-0724c76f>"+(_vm._s(_vm.post.content.rendered))+"</div></section></main>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=0724c76f&scoped=true&

// EXTERNAL MODULE: external "gsap/dist/gsap"
var gsap_ = __webpack_require__(7);

// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(11);

// EXTERNAL MODULE: external "gsap/dist/ScrollToPlugin"
var ScrollToPlugin_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js&
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



/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  computed: {
    posts() {
      return this.$store.state.posts;
    },

    post() {
      return this.posts.find(el => el.slug === this.slug);
    }

  },

  mounted() {
    this.animatePostContents();
  },

  data() {
    return {
      slug: this.$route.params.slug
    };
  },

  head() {
    return {
      title: this.post.title.rendered,
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }]
    };
  },

  methods: {
    animatePostContents() {
      this.$gsap.to('section.postContents', {
        scrollTrigger: {
          trigger: '.mainWrapper',
          pin: true,
          pinSpacing: false,
          start: 'top',
          end: '+=100',
          scrub: true
        },
        y: -50,
        color: "#fff",
        backgroundImage: "linear-gradient(0, #000 100%, transparent)",
        borderTopLeftRadius: "50px",
        borderTopRightRadius: "50px"
      });
    }

  },

  created() {
    this.$store.dispatch("getPosts");
  }

});
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0724c76f",
  "e8d91258"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map
exports.ids = [1];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6cea32c7", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5c158ab3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5c158ab3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5c158ab3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5c158ab3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_5c158ab3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about-enter-active[data-v-5c158ab3],.about-leave-active[data-v-5c158ab3]{transition-duration:1.6s}.about-enter-active[data-v-5c158ab3]:after,.about-enter-active[data-v-5c158ab3]:before,.about-leave-active[data-v-5c158ab3]:after,.about-leave-active[data-v-5c158ab3]:before{content:\"\";position:fixed;top:0;left:0;z-index:2;display:block;width:100%;height:50%;transition-property:opacity,transform;transition-timing-function:ease-in-out}.about-enter-active[data-v-5c158ab3]:before,.about-leave-active[data-v-5c158ab3]:before{background-color:#2e2e2e}.about-enter-active[data-v-5c158ab3]:after,.about-leave-active[data-v-5c158ab3]:after{top:50%;background-color:#2e2e2e}.about-leave[data-v-5c158ab3]:after,.about-leave[data-v-5c158ab3]:before{transform:scaleX(0)}.about-leave-active[data-v-5c158ab3]:before{transition-duration:.8s}.about-leave-active[data-v-5c158ab3]:after{transition-duration:.5s;transition-delay:.3s}.about-leave-to[data-v-5c158ab3]:after,.about-leave-to[data-v-5c158ab3]:before{transform:scale(1);transform-origin:left}.about-enter[data-v-5c158ab3]:after,.about-enter[data-v-5c158ab3]:before{transform:scaleX(1)}.about-enter-active[data-v-5c158ab3]:before{transition-duration:.8s}.about-enter-active[data-v-5c158ab3]:after{transition-duration:.5s;transition-delay:.3s}.about-enter-to[data-v-5c158ab3]:after,.about-enter-to[data-v-5c158ab3]:before{transform:scaleX(0);transform-origin:right}.about[data-v-5c158ab3]{margin:30px auto 50px;max-width:800px;padding:50px 50px 70px;background:#fff}p[data-v-5c158ab3]{margin:15px 0 20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=5c158ab3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about wrapper"},[_vm._ssrNode("<h1 data-v-5c158ab3>About</h1> <p data-v-5c158ab3>We don't really know where this goes - and I'm not sure we really care. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. If you do too much it's going to lose its effectiveness.</p> <p data-v-5c158ab3>You create the dream - then you bring it into your world. We don't need any guidelines or formats. All we need to do is just let it flow right out of us. Poor old tree. Maybe there's a little something happening right here.</p> <p data-v-5c158ab3>I like to beat the brush. You want your tree to have some character. Make it special. We don't have to be committed. We are just playing here. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. But they're very easily killed. Clouds are delicate.</p> <p data-v-5c158ab3>A fan brush can be your best friend. We don't have to be concerned about it. We just have to let it fall where it will. Now, we're going to fluff this cloud. In your world you can create anything you desire. You're meant to have fun in life.</p> <p data-v-5c158ab3>I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. All you need is a dream in your heart, and an almighty knife. Clouds are free they come and go as they please. Even trees need a friend. We all need friends. Talent is a pursued interest. That is to say, anything you practice you can do.</p> <p data-v-5c158ab3>We touch the canvas, the canvas takes what it wants. Just a happy little shadow that lives in there. I thought today we would make a happy little stream that's just running through the woods here. We must be quiet, soft and gentle. Zip. That easy.</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=5c158ab3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
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
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c158ab3",
  "12a552b9"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map
<template>
  <div>
    <app-nav />
    <div class="page-leave"></div>
    <div class="SCrollbar">
    <nuxt/>
    </div>

  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";
import { gsap, Power4 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Scrollbar from 'smooth-scrollbar';
export default {

  components: {
    AppNav
  },
  mounted(){
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  window.addEventListener("load", this.addSmoothScrollBar, true);

  },

  methods:{
   addSmoothScrollBar(){
// Setup

const scroller = document.querySelector('.SCrollbar');

const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, alwaysShowTracks: false });
window.onbeforeunload = function(e){
  sessionStorage.setItem('bodyScrollBar', bodyScrollBar.offset.y);
};
ScrollTrigger.scrollerProxy('.SCrollbar', {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});

bodyScrollBar.addListener(ScrollTrigger.update);
  console.log(bodyScrollBar);

ScrollTrigger.defaults({ scroller: scroller });
/*window.addEventListener("scroll", (event) => {
if (bodyScrollBar.scrollTop > 10){
gsap.to('.scrollToTop', {
x: 0,
autoAlpha: 1,
duration: 0,
});
} else{
gsap.to('.scrollToTop', {
x: -100,
autoAlpha: 0,
duration: .5,
});
};
});*/
 /* if(document.querySelector('.scrollToTop')){
document.querySelector('.scrollToTop').addEventListener('click', function(){
if(document.getElementById('modal-1').classList.contains('is-open') ){
  gsap.to('.scroller',{ scrollTo: 0 });
   } else{
  gsap.to(bodyScrollBar,{ scrollTo: 0 });
   }
});
};*/


if(document.querySelector('.logo svg')){
document.querySelector('.logo svg').addEventListener('click', function(e){
if(location.href == "https://spite.meidanm.com/" || location.href == "https://spite.meidanm.com/#project"){
} else{
location.href = "https://spite.meidanm.com/";
return false;
}

gsap.to(bodyScrollBar,{
scrollTo: 0,
duration: .5,
ease: 'back.out(1)',
});
});
};

if( sessionStorage.getItem('bodyScrollBar') && sessionStorage.getItem('bodyScrollBar') !== "0" ){
  gsap.to(bodyScrollBar, {
  scrollTo: sessionStorage.getItem('bodyScrollBar'),
  duration: 0.5,
  });
}

if(document.querySelector('a.showProjects')){
document.querySelector('a.showProjects').addEventListener('click', function(e){
var heroHeight = document.querySelector('.hero').clientHeight;
  console.log(bodyScrollBar+"Hi");

gsap.to(bodyScrollBar,{
scrollTo: heroHeight ,
duration: .5,
ease: 'back.out(1)',
});
});
};

}
  }
};
</script>

<style>

html {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


h1,
h2,
h3 {
  font-family: "Alata", serif;
  font-weight: normal;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.individual h3 {
  margin: 2em 0 25px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
}
</style>

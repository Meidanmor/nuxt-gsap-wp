<template>
  <div class="theNuxt">
    <app-masthead></app-masthead>
    
<section class="PROJECTS">
<div class="max-width">
<h2> PORTFOLIO </h2>
    <ul class="theProjects">
    
        <li class="post" v-for="post in posts" :key="post.id">
        <div class="postImgWrap">
         <span class="text front">{{ post.title.rendered }}</span>
         <span class="text back">{{ post.title.rendered }}</span>
         <div class="magnetic theImage">
       <nuxt-link :to="`blog/${post.slug}`" class="Open">
       <span>
          צפייה בפרויקט
</span>
</nuxt-link>
<div class="hideOverflow">
          <img :src="post.images.large" width="500" height="500"/>
          </div>
          </div>
        </div>

</li>

    </ul>
  </div>
  </section>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";
import { gsap, Power4 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Scrollbar from 'smooth-scrollbar';

export default {

transition(to, from){
console.log('changed');
},
  components: {
    AppMasthead
  },
  mounted(){
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
this.addSmoothScrollBar();
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
    },
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
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

},


startAnim(){
/*if(document.querySelector('a.showProjects')){
document.querySelector('a.showProjects').addEventListener('click', function(e){
var heroHeight = document.querySelector('.hero').clientHeight;

gsap.to(document.documentElement,{
scrollTo: heroHeight ,
duration: .5,
ease: 'back.out(1)',
});
});
};*/


let hrefStartAnim = document.querySelector('.heroBTNS a.startProject');
let hrefShowAnim = document.querySelector('.heroBTNS a.showProjects');
let elementRevealA = document.querySelector(".hero h2");
let targets = gsap.utils.toArray(".heroBTNS a"); 
if(hrefStartAnim){
gsap.fromTo(hrefStartAnim ,{
autoAlpha: 0,
y: 100,
x: -100,
ease: 'back.out(1.5)',
},
{
autoAlpha: 1,
y: 0,
x: 0,
onComplete: () => { hrefStartAnim.classList.add('afterAnim')},
});
}
if(hrefShowAnim){
gsap.fromTo(hrefShowAnim,{
autoAlpha: 0,
y: 100,
x: 100,
ease: 'back.out(1.5)',
},
{
autoAlpha: 1,
y: 0,
x: 0,
onComplete: () => {setTimeout(function(){hrefShowAnim.classList.add('afterAnim')}, 500)},
});
}

function afterCompleteA(){
gsap.to(elementRevealA,{
  scrollTrigger: {
    trigger: 'body',
scrub: 1.5,
    start: "top -10%",
    end: "+=1%",
  },
  autoAlpha: 0,
  y: -200,
  skewX: 20,
  rotate: 5,
ease: "back.in(1.5)",
  });
}

if( scrollY === 0 && elementRevealA){
gsap.from(elementRevealA,{
duration: 0.9,
    y: 100,
skewX: -10,
rotate: -5,
    opacity: 0,
ease: "back.out(2)",
onComplete: afterCompleteA,
  });
}
  

let observerOptions = {
    rootMargin: '0px',
    threshold: 0.5
}

const observerStars = new IntersectionObserver(observerCallbackStars, observerOptions);

function observerCallbackStars(entries, observer) {
    entries.forEach(entry => {
        if(! entry.isIntersecting) {
/*gsap.to('.scrollToTop', {
x: 0,
autoAlpha: 1,
duration: .5,
});*/
gsap.utils.toArray(".star").forEach((el, i) => {
    gsap.to(el, {
duration: .5,
        x: gsap.utils.random(-400, 400), 
        y: gsap.utils.random(-300, 700),
        z: gsap.utils.random(-400, 400),
        rotation: gsap.utils.random(-250, 25),
        scale: gsap.utils.random(0.5, 3),
autoAlpha: 1,
    });
});
        }
    else{
/*gsap.to('.scrollToTop', {
x: -100,
autoAlpha: 0,
duration: .5,
});*/
gsap.utils.toArray(".star").forEach((el, i) => {
    gsap.to(el, {
duration: .5,
x:0,
y:0,
z:0,
rotation: 360,
autoAlpha: 0,
    });
});
    }
    });
};

let targetingStars = '.hero h2';
document.querySelectorAll(targetingStars ).forEach((i) => {
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

        if(entry.isIntersecting) {

gsap.utils.toArray(spans).forEach(function(span){
ScrollTrigger.matchMedia({
  // desktop
  "(min-width: 800px)": function() {
gsap.to(span ,{
x: 50,
y: -100,
rotate: 0,
autoAlpha: 1,
onComplete: () => { 
gsap.fromTo(span , {
duration: 1,
x: 50,
ease: "linear",
},
{
scrollTrigger: {
scrub: 1,
trigger: section,
start: "top +50%",
end: "+=100%",
},
duration: 1,
x: -80,
});
},
});
  },

  // mobile
"(max-width: 799px)": function() {
gsap.fromTo(span ,{
x: 0,
y: 300,
rotate: -90,
opacity: 0,
},
{
ease: "power3.out",
duration: 1.5,
x: 0,
y: 50,
rotate: -90,
autoAlpha: 1,
opacity: 1,
onComplete: () => { 
gsap.fromTo(span , {
x: 0,
y: 50,
rotate: -90,
autoAlpha: 1,
opacity: 1,
ease: "linear",
},
{
scrollTrigger: {
scrub: 1,
trigger: section,
start: "top +50%",
end: "+=100%",
},
y: 0,
});
},
});
  },
})

});

gsap.fromTo(section,{
autoAlpha: 0,
scaleX: 0,
},
{
transformOrigin: "right",
duration: .3,
autoAlpha: 1,
scaleX: 1,
ease: "ease",
onStart: () => {
image.classList.add('active');
},
onComplete: () => { 
setTimeout(function(){
gsap.fromTo(section.querySelector('img'), {
scale: 1,
},
{
scrollTrigger: {
scrub: 1.5,
trigger: section,
start: "top +70%",
end: "+=80%",
},
ease: "linear",
x: 20,
scale: 1.1,
});
}, 350);
}
});
      observer.unobserve(entry.target);
        }
    else{

    }
    });
};

let targetingBefore = '.postImgWrap';
document.querySelectorAll(targetingBefore).forEach((i) => {
    if (i) {
       observerBefore.observe(i);
    }
});

var magnets = document.querySelectorAll('.magnetic')
var strength = 80

magnets.forEach( (magnet) => {
  magnet.addEventListener('mousemove', moveMagnet );
  magnet.addEventListener('mouseout', function(event) {
    gsap.to( event.currentTarget, 1, {x: 0, y: 0, ease: Power4.easeOut})
  } );
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget
  var bounding = magnetButton.getBoundingClientRect()

  //console.log(magnetButton, bounding)

  gsap.to( magnetButton, 1, {
    x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * strength,
    y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * strength,
    ease: Power4.easeOut
  })

  //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
}
  }
}
};
</script>

<style lang="scss">

[data-scrollbar]{
  height: 100vh;
}
section{
min-height: 100vh;
}
section.PROJECTS{
.max-width{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h2{
    font-family: 'ClashDisplay-light';
    font-size: 130px;
    line-height: 1;
    letter-spacing: -2.8px;
    max-width: 90vw;
    width: 100%;
    color: #404040;
 }
ul.theProjects {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-top: 80px;
}
ul.theProjects li {
    position: relative;
    width: 100%;
    padding-right: 25%;
    margin-bottom: 230px;
    counter-increment: section;
    height: 600px;
}
ul.theProjects li:before {
    opacity: .5;
    content: "0"counter(section);
    position: absolute;
    line-height: 1;
    display: block;
    -webkit-text-stroke: 1px #fff;
    color: transparent;
    font-weight: bold;
    right: 0;
    top: 25%;
    z-index: 9;
    font-size: 200px;
    transform: rotate(90deg);
}
.postImgWrap {
    position: relative;
    align-items: flex-end;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
span.text {
    -webkit-text-stroke: 1px #fff;
    font-size: 110px;
    font-size: 35px;
    left: -40px;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    font-weight: bold;
    padding: 10px;
    display: inline-block;
    width: -webkit-fill-available;
    visibility: hidden;
    opacity: 0;
}
span.text.front {
    z-index: 2;
}
span.text.back {
    z-index: 0;
color: #fff;
}
.theImage {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 1s ease;
    transform-origin: right;
    transform-style: preserve-3d;
}
.theImage.active:before {
    opacity: .5;
}

.theImage.active img, .theImage.active:before {
    transform: scaleX(1);
}
.theImage:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #00000094;
    transition: .7s ease;
    transform: scaleX(0);
    transform-origin: right;
}
.theImage img {
    transition: .7s ease;
    transform: scaleX(0);
    transform-origin: right;
}
.Open{
position: absolute;
    z-index: 9;
    bottom: 50px;
    right: -75px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    border: 2px solid #fff;
    animation: 4.5s linear rotation infinite;
text-align: center;
    text-decoration: none;
    line-height: 1;
    background: transparent;
    border-radius: 50%;
    padding: 15px;
}
.Open span {
    width: max-content;
    display: flex;
    position: absolute;
    font-size: 18px;
    color: #fff;
    letter-spacing: 5px;
    font-family: 'Rubik Dirt';
    transition: .5s ease;
}
.hideOverflow {
    height: inherit;
    overflow: hidden;
}
img {
    width: 100%;
    background: #000;
    z-index: 1;
    height: 100%;
    object-fit: cover;
      transform-origin: right;
}
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}


@keyframes rotation{
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}

@media (max-width: 768px){
section.PROJECTS{
 h2{
    font-size: 35px;
  }
ul.theProjects li {
    max-height: 400px;
 }
ul.theProjects li:before {
    top: -50px;
    font-size: 80px;
    transform: rotate(0);
    right: 60px;
    z-index: 0;
 }
 }
}

</style>

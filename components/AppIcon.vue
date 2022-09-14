<template>
<div class="magnetic logo">
<svg width="98" height="66" viewBox="0 0 98 66" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_606_3)">
<path d="M14.802 31.8187V31.6526H19.9489V32.2283C19.9489 33.4719 20.3863 33.804 23.8359 33.804C26.9576 33.804 27.2854 33.558 27.2854 32.7253C27.2854 32.0622 26.9296 31.7867 25.4248 31.5923L19.6747 30.8186C16.2532 30.3487 14.5278 28.4974 14.5278 25.512C14.5278 22.5598 16.8003 19.46 23.4228 19.46C29.2545 19.46 32.0473 22.0296 32.0473 26.1763V26.3411H26.9077V25.9265C26.9077 24.6005 26.3325 24.1577 22.8867 24.1577C20.2584 24.1577 19.6833 24.5169 19.6833 25.3189C19.6833 25.8995 20.0122 26.1799 20.998 26.314L26.7468 27.1751C31.237 27.8393 32.4408 30.1605 32.4408 32.5371C32.4408 35.7156 30.0319 38.535 23.8444 38.535C18.2235 38.535 14.802 36.5176 14.802 31.8187Z" fill="white"></path>
<path d="M43.8202 19.7407H33.6628V38.256H38.8097V33.5817H43.8202C48.1726 33.5817 50.9105 31.0391 50.9105 26.644C50.9105 22.2489 48.1726 19.7407 43.8202 19.7407ZM43.245 28.9172H38.8097V24.4114H43.245C45.0521 24.4114 45.7917 24.7706 45.7917 26.6501C45.7941 28.558 45.0521 28.9172 43.245 28.9172Z" fill="white"></path>
<path d="M57.1518 19.7407H52.0049V38.2585H57.1518V19.7407Z" fill="white"></path>
<path d="M64.872 38.2583V24.4124H58.3835V19.7417H76.4805V24.4124H70.0189V38.2583H64.872Z" fill="white"></path>
<path d="M77.7112 38.2583V19.7417H93.9999V24.4124H82.8581V26.6228H93.5893V31.2664H82.8581V33.5876H93.9999V38.2583H77.7112Z" fill="white"></path>
<path d="M32.7259 53.2691C19.4711 53.2691 8.68631 42.3815 8.68631 28.9994C8.68631 15.6172 19.4748 4.73093 32.7259 4.73093C36.3104 4.73014 39.8497 5.53982 43.0838 7.10051C46.3178 8.6612 49.1646 10.9333 51.415 13.75H57.1517C52.0816 5.50343 43.0282 0 32.7259 0C16.8867 0 4 13.0094 4 28.9994C4 44.9893 16.8867 58 32.7259 58C43.0282 58 52.0816 52.4966 57.1517 44.25H51.415C49.1646 47.0667 46.3178 49.3388 43.0838 50.8995C39.8497 52.4602 36.3104 53.2699 32.7259 53.2691Z" fill="white"></path>
</g>
<defs>
<filter id="filter0_d_606_3" x="0" y="0" width="98" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
<feOffset dy="4"></feOffset>
<feGaussianBlur stdDeviation="2"></feGaussianBlur>
<feComposite in2="hardAlpha" operator="out"></feComposite>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_606_3"></feBlend>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_606_3" result="shape"></feBlend>
</filter>
</defs>
</svg>
</div>
</template>

<script>
import { gsap, Power4 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
//import Scrollbar from 'smooth-scrollbar';

export default {
  props: {
    height: {
      type: Number,
      default: 40
    },
    width: {
      type: Number,
      default: 40
    },
    fill: {
      type: String,
      default: "#fff"
    }
  },
 /* mounted(){
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  window.addEventListener("load", this.addSmoothScrollBar, true);
  },*/

methods:{
}
};
</script>

<style lang="scss" scoped>

svg {
  vertical-align: middle;
  margin-right: 10px;
}
</style>

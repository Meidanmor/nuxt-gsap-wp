<template>
  <div class="theNuxt">
  <main class="post individual">
  <div class="modalPostImage"> <img :src="post.images.large" width="500" height="500"/></div>
  
  <div class="modal__container" role="dialog" aria-modal="true">{{ post.title.rendered }} <div v-html="post.content.rendered"></div><div class="didYouLike"><h3> אהבת את הפרויקט? </h3> <div class="contain"><div class="yes"><a href="javascript:void(0)"> כן! </a> </div><div class="no"> <a href="javascript:void(0)"> לא ממש </a> </div> </div> </div> </div>
  
  </main>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar';
import { gsap, Power4 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  mounted() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
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
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    },
  methods: {
   
       animatePostContents() {
const scroller = document.querySelector('.theNuxt');

const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, alwaysShowTracks: false });
window.onbeforeunload = function(e){
  sessionStorage.setItem('bodyScrollBar', bodyScrollBar.offset.y);
};
ScrollTrigger.scrollerProxy('.theNuxt', {
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

console.log('post page');
gsap.to('section.postContents', {
 scrollTrigger: {
 trigger: '.mainWrapper',
 pin: true,
 pinSpacing: false,
          start: 'top',
          end: '+=100',
          scrub: true,
},
  y: -50,
  color: "#fff",
  backgroundImage: "linear-gradient(0, #000 100%, transparent)",
  borderTopLeftRadius: "50px",
  borderTopRightRadius: "50px",
})



}

  },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style lang="scss" scoped>
div.wrapper{
  padding-top: 0;
}
main.post {
    background: aliceblue;
display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
}

.mainWrapper {
    height: 100vh;
    background: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

}
.mainWrapper img {
    position: absolute;
    top: 0;
    opacity: .7;
    left: 0;
    height: 100%;
    object-fit: contain;
    max-height: 100vh;
}

section {
  color: #444;
}

.date {
  position: absolute;
    left: 10px;
    bottom: 5px;
}
section.postContents{
    padding: 30px;
    background-image: linear-gradient(0, #fff 98%, transparent);
    width: 100%;
    position: absolute;
    top:85%;
    color: black;


  h1{
    font-size: 40px;
    margin-bottom: 0;
    width: 100%;
    padding: 0 0 30px;
  }
}
</style>

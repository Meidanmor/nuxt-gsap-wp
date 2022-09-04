<template>
  <div class="theNuxt">
  <main class="post individual">
  <div class="mainWrapper">
    <img :src="post.images.large" width="500" height="500"/>
    <small class="date">{{ post.date | dateformat }}</small>
    </div>

    <section class="postContents">
    <h1>{{ post.title.rendered }}</h1>
<div v-html="post.content.rendered"></div>
    </section>
  </main>
  </div>
</template>

<script>
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

 this.$gsap.to('section.postContents', {
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

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

var height = document.querySelector('.modal__container').clientHeight;
document.querySelector('.modal__container').style.height = height + 'px';
document.querySelector('.no a').addEventListener('click', function(e){
	e.preventDefault();
 gsap.to(bodyScrollBar, {  delay:.2, ease: "back.in(0.5)" ,duration: 1,scrollTo: height});
});
gsap.to('.modalPostImage img', {
	scrollTrigger: {
		scroller: '.scroller',
		trigger: '.modal__container',
		scrub: true,
		start: 'top top',
		end: 'bottom bottom' ,
	},
	rotate: 8,
	scale: 0.8,
	ease: "Power.bounce",
});	
gsap.to('.modalPostImage', {
	scrollTrigger: {
		scroller: '.scroller',
		trigger: '.prevNextLinks',
		scrub: 2,
		start: 'top top',
		end: 'top top' ,
	},
	opacity: 0,
	ease: "Power.bounce",
});
gsap.fromTo('.prevNextLinks a.theNext', {
autoAlpha: 0	
},
	{
	scrollTrigger: {
		scroller: '.scroller',
		trigger: '.prevNextLinks',
		scrub: 1,
		start: 'top top',
		end: 'top top' ,
		onEnter: () => {
			document.querySelector('.prevNextLinks a.theNext span.front').classList.add('active');
			document.querySelector('.prevNextLinks a.theNext span.back').classList.add('active');
			document.querySelector('.prevNextLinks a.theNext span.upNext').classList.add('active');
		} ,
        onLeaveBack: () => {
		    document.querySelector('.prevNextLinks a.theNext span.front').classList.remove('active');
			document.querySelector('.prevNextLinks a.theNext span.back').classList.remove('active');
			document.querySelector('.prevNextLinks a.theNext span.upNext').classList.remove('active');
	},
	},
	autoAlpha: 1,
	ease: "Power.bounce",
});	

gsap.fromTo('.didYouLike h3', {
	rotate: 0,
	opacity:0,
    scale: 1,
	y: -100,
},
{
	scrollTrigger: {
		trigger: '.didYouLike',
		scrub: 1.5,
		start: 'top +50%',
		end: 'top top' ,
	},
	rotate: 8,
	scale: 0.8,
	opacity:1,
	y: 0,
	ease: "Power.bounce",
});
gsap.fromTo('.contain .no', {
	opacity:0,
    scale: .8,
	x: 100,
	y: 50,
},
{
	scrollTrigger: {
		trigger: '.didYouLike',
		scrub: 1.5,
		start: 'top +50%',
		end: 'top top' ,
	},
	rotate: 8,
	scale:1,
	opacity:1,
	x: 0,
    y: 0,
	ease: "Power.bounce",
});
gsap.fromTo('.contain .yes', {
	opacity:0,
    scale: .8,
	x: -100,
	y: 50,
},
{
	scrollTrigger: {
		trigger: '.didYouLike',
		scrub: 1.5,
		start: 'top +50%',
		end: 'top top' ,
	},
	rotate: 8,
	scale:1,
	opacity:1,
	x: 0,
	y: 0,
	ease: "Power.bounce",
});	
gsap.to('.modal h2', {
	scrollTrigger: {
		trigger: '.modal__container',
		scrub: 1,
		start: 'top top',
		end: '+=50%'
	},
	x: -100,
	opacity: 0,
	scale: 0.8,
	ease: "Power4.ease",
});
if( document.querySelector(".modal .theVideo") ){
gsap.to('.theVideo>figure', {
	scrollTrigger: {
		trigger: '.theVidContainer',
		pin: '.theVidContainer',
		scrub: 1,
		pinSpacing: true,
		start: 'top top',
		end: '+=50%',
	},
	scale: 1.5,
});
document.querySelector(".modal video").playbackRate = 1.5;
}
	
document.querySelector('.scroller').addEventListener('scroll',function(e) {
if(e.target.scrollTop > 50 ){
document.querySelector('.scrollToTop').style.zIndex = "99";
} else {
document.querySelector('.scrollToTop').style.zIndex = "9";	
}
});


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

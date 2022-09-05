<template>
  <div class="theNuxt">
  <main class="post individual">
  <div class="modalPostImage"> <img :src="post.images.large" width="500" height="500"/></div>
  <div class="scroller">
  <div class="modal__container" role="dialog" aria-modal="true"><h1>{{ post.title.rendered }}</h1> <div class="content" v-html="post.content.rendered"></div><div class="didYouLike"><h3> אהבת את הפרויקט? </h3> <div class="contain"><div class="yes"><a href="javascript:void(0)"> כן! </a> </div><div class="no"> <a href="javascript:void(0)"> לא ממש </a> </div> </div> </div> </div>
  <div>
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
  this.animatePostContents
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
const scroller = document.querySelector('.scroller');

const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.1, alwaysShowTracks: false });
window.onbeforeunload = function(e){
  sessionStorage.setItem('bodyScrollBar', bodyScrollBar.offset.y);
};
ScrollTrigger.scrollerProxy('.scroller', {
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
	     scroller: '.scroller',
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
		scroller: '.scroller',
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
		scroller: '.scroller',
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
gsap.to('h1', {
	scrollTrigger: {
                scroller: '.scroller',
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
if( document.querySelector(".theVideo") ){
gsap.to('.theVideo>figure', {
	scrollTrigger: {
		scroller: '.scroller',
		trigger: '.theVidContainer',
		pin: '.theVidContainer',
		scrub: 1,
		pinSpacing: true,
		start: 'top top',
		end: '+=50%',
	},
	scale: 1.5,
});
document.querySelector("video").playbackRate = 1.5;
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
.content >>> figure.wp-block-video {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
}
.content >>> img{
max-height: 200px;
}
.post >>> .pin-spacer{
pointer-events: none;
}
[data-scrollbar]{
height: 100vh;
}
.discreption {
    background: #fff;
    color: #000;
    padding: 20px;
    margin-left: 50px;
	font-size: 18px;
}
.modal__container {
    width: 100%;
/*    background: linear-gradient(45deg, transparent -10% , black 76%);*/
    padding: 0px;
    overflow: visible;
    overflow-x: hidden;
	    position: relative;
}
h1 {
	font-family: 'clashdisplay-semibold';
    font-size: 35px;
	line-height: 1;
	margin: 0 0 45vh;
	padding-top: 25vh;
	-webkit-text-stroke: 1px #fff;
	color: transparent;
	text-align: center;

}
 .contents {
    width: 100%;
    font-size: 22px;
    color: white;
}
.modalPostImage {
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: -webkit-center;
    background: #222;
}

.modalPostImage img{
filter: drop-shadow(5px 5px 5px black);
}
.theVideo{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

}
 .pin-spacer{
		pointer-events: none
}
 figure.wp-block-video {
position: fixed;	
width: fit-content;
}

 figure.wp-block-video:before {
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    z-index: 9999;
    content: '';
    top: 0;
    left: 0;
    background: url(https://spite.meidanm.com/wp-content/uploads/2022/08/apple-iphone-13-2021-medium.png);
    background-size: 94%;
    background-repeat: no-repeat;
    background-position: center;
}
 video {
    max-height: 400px;
    object-fit: contain;
    background: transparent;
    width: fit-content;
    max-width: 700px;
    height: 40vh;
    border-radius: 28px;
    opacity: 1;
	margin-top: 5px;
    padding: 5px 8px 0;
}

 img {
    max-height: 300px;
    max-width: 200px;
    background: transparent;
    height: 100%;
}

figure.thePostGallery{
	max-width: 100%;
}
 figure{
	margin: 0;
}

</style>

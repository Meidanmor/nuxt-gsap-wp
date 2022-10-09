<template>
  <div class="about wrapper">
    <h1>About</h1>
    <p>We don't really know where this goes - and I'm not sure we really care. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. If you do too much it's going to lose its effectiveness.</p>
    <p>You create the dream - then you bring it into your world. We don't need any guidelines or formats. All we need to do is just let it flow right out of us. Poor old tree. Maybe there's a little something happening right here.</p>
    <p>I like to beat the brush. You want your tree to have some character. Make it special. We don't have to be committed. We are just playing here. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. But they're very easily killed. Clouds are delicate.</p>
    <p>A fan brush can be your best friend. We don't have to be concerned about it. We just have to let it fall where it will. Now, we're going to fluff this cloud. In your world you can create anything you desire. You're meant to have fun in life.</p>
    <p>I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. All you need is a dream in your heart, and an almighty knife. Clouds are free they come and go as they please. Even trees need a friend. We all need friends. Talent is a pursued interest. That is to say, anything you practice you can do.</p>
    <p>We touch the canvas, the canvas takes what it wants. Just a happy little shadow that lives in there. I thought today we would make a happy little stream that's just running through the woods here. We must be quiet, soft and gentle. Zip. That easy.</p>
  </div>
<carousel/>  
 
</template>

<script>
import carousel from "@/components/carousel.vue";

export default {
  components: { 
carousel
   },
};
</script>

<style lang="scss" scoped>
$t-duration: 800ms;
$t-delay: 300ms;

.about-enter-active,
.about-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #2e2e2e;
  }

  &::after {
    top: 50%;
    background-color: #2e2e2e;
  }
}

.about-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.about-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.about-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.about-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.about-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.about-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
.about {
  margin: 30px auto 50px;
  max-width: 800px;
  padding: 50px 50px 70px;
  background: white;
}

p {
  margin: 15px 0 20px;
}
</style>

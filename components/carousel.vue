<template>
 <no-ssr placeholder="Loading...">
<carousel-3d>
  <slide :index="0">
    Slide 1 Content
  </slide>
  <slide :index="1">
    Slide 2 Content
  </slide>
    <slide :index="2">
    Slide 3 Content
  </slide>
</carousel-3d>
    </no-ssr>

</template>

<script>
import { Carousel3d, Slide } from 'vue3-carousel-3d';
//import "vue3-carousel-3d/dist/index.css";
export default {
  components: { 
Carousel3d, Slide
   },
};
</script>

<template>
<section class="masthead hero">
<div class="stars">
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
<span class="star">★</span>
</div>

<div class="max-width">
<h2> 
{{tagline}}
</h2>

<div class="heroBTNS">
<a href="javascript:void(0)" class="magnetic showProjects"> PORTFOLIO </a>
<a href="javascript:void(0)" class="magnetic startProject"> START NOW </a>
</div>

</div>
</section>
</template>

<script>
export default {
  data() {
    return {
      tagline: "אנחנו לא בונים אתרים, אנחנו מגשימים חלומות!"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
.max-width {
 width: 100%;

}
section.hero {
.max-width {
 max-width: 1400px;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
}
.stars {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  
   .star{
    color: #fff;

     }
}
h2{
    font-family: 'Rubik Dirt';
    font-weight: 400;
    margin: 0 0 40px;
    letter-spacing: 0px;
    font-size: 35px;
    max-width: 700px;
    color: #fff;
}
.heroBTNS {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
a{
    text-decoration: none;
    height: 64px;
    font-size: 18px;
    width: 200px;
    display: flex;
    max-width: 49%;
    font-family: 'ClashDisplay-Medium';
    align-items: center;
    justify-content: center;
}
}
section.masthead {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
   position: relative;
  align-items: center;
 
  h1 {
    color: white;
    @include fluid-type(font-size, 320px, 1366px, 30px, 65px);
  }
}
</style>

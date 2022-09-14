<script>
export default {
mounted(){
this.addSmoothScrollBar();
console.log('mnted');
},
 methods: {
 addSmoothScrollBar(){
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
 }
 },
};

</script>

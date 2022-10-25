<template>
  <div class="home">
    <modalPod5/>
    <modalPod2/>
    <modalPod/>
    <modalPod3/>
    <modalPod4/>
    <HeaderHead/>
  <LifeLenta/>
  <AllInfo/>
  <sliderS/>
  <tovarS/>
  <helP/>
  <footeR/>
  </div>
</template>

<script>
import HeaderHead from '../components/HeaderHead.vue'
import sliderS from '../components/slider.vue'
import AllInfo from '../components/AllInfo.vue'
import LifeLenta from '../components/LifeLenta.vue'
import tovarS from '../components/tovars.vue'
import helP from '../components/helP.vue'
import footeR from '../components/footer.vue'
import modalPod from '../components/modalPod.vue'
import modalPod2 from '../components/modalPod2.vue'
import modalPod3 from '../components/modalPod3.vue'
import modalPod4 from '../components/modalPod4.vue'
import modalPod5 from '../components/modalPod5.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
      tovarS,
    sliderS,
    HeaderHead,
    AllInfo,
    LifeLenta,
    helP,
    footeR,
    modalPod,
    modalPod2,
    modalPod3,
    modalPod4,
    modalPod5
  
  },
   mounted: function(){
      window.$('.navig').click(function() {
        window.$('.navig').removeClass("active");         
        window.$(this).toggleClass("active");
      })
    }
}
</script>

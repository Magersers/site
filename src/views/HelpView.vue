<template>
    <div class="home">
      <HeaderNoAut/>
    <LifeLenta/>
    <AllInfo/>
    <helpBlock/>
    <FAQ/>
    <helP/>
    <footeR/>
    </div>
  </template>
  
  <script>
  import AllInfo from '../components/AllInfo.vue'
  import LifeLenta from '../components/LifeLenta.vue'
  import footeR from '../components/footer.vue'
  import HeaderNoAut from '../components/headerNoAut.vue'
  import helP from '../components/helP.vue'
  import helpBlock from '../components/helpBlock.vue'
  import FAQ from '../components/FAQ.vue'

  // @ is an alias to /src
  


  export default {
    name: 'HomeView',
    components: {
      AllInfo,
      LifeLenta,
      footeR,
      HeaderNoAut,
      helP,
      helpBlock,
      FAQ

    
    },
    mounted: function(){
      window.$('.help__spisok li').click(function(){
        window.$(this).find('.plus').toggleClass('alt__activ'); 
        window.$(this).find('p').toggleClass('none'); 
	});
    }
  }
  </script>
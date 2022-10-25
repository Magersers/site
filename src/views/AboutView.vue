<template>
  <div class="home">
    <HeaderNoAut/>
  <LifeLenta/>
  <AllInfo/>
  <profiL/>
  <pokupkI/>
  <footeR/>
  </div>
</template>

<script>
import AllInfo from '../components/AllInfo.vue'
import LifeLenta from '../components/LifeLenta.vue'
import footeR from '../components/footer.vue'
import HeaderNoAut from '../components/headerNoAut.vue'
import profiL from '../components/profil.vue'
import pokupkI from '../components/pokupki.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    AllInfo,
    LifeLenta,
    footeR,
    HeaderNoAut,
    profiL,
    pokupkI
  
  }
}
</script>
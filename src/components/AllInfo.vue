<template>
 <section class="allinfo">
  <div class="container">
    <div class="allinfo__inner">
      <div>
      <ul>
       <img src="@/assets/img/i1.svg" alt=""> <li> <p>Онлайн <br><span> {{store.stats.users_online}}</span></p></li>
        <img src="@/assets/img/i2.svg" alt=""><li><p>Кол-во пользователей <br> <span> {{store.stats.total_users}}</span></p></li>
        <img src="@/assets/img/i3.svg" alt=""><li><p>Общее кол-во покупок <br> <span> {{store.stats.total_transactions}}</span></p></li>
      </ul></div>
      <div>
      <ul class="social">
        <li>Мы в соц. сетях:</li>
        <li class="anime"> <a href=""><img src="@/assets/img/vk.svg" alt=""></a></li>
        <li class="anime"><a href=""><img src="@/assets/img/tg.svg" alt=""></a></li>
        <li class="anime"><a href=""><img src="@/assets/img/tik.svg" alt=""></a></li>
        <li class="anime"><a href=""><img src="@/assets/img/yt.svg" alt=""></a></li>
      </ul>
      </div>
    </div>
  </div>
 </section>
</template>

<script>
import { useStore } from '@/store';

export default {
  name: 'AllInfo',
  setup() {
    const store = useStore();
    return {
      store
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
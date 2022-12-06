<template>
  <section class="pokupki">
    <div class="container">
        <div class="pokupki__inner">
            <div class="spisok__pokupki">
              <div> <img src="@/assets/img/all.svg" alt=""> Ваши покупки</div>
            </div>
            <div class="pokupki__flex">

                <div 
                  class="pokupka block__pokupka1" 
                  v-for="trans in transactionsBuyGold"
                  :key="String(trans.id)"
                >
                  <div>Номер покупки:<br> <span>№{{trans.id}}</span></div>
                  <div>Сумма: <br> <span>{{trans.gold}} <i class="G">G</i></span> </div>
                </div>
              </div>
              <div class="button__pokaz anime" @click="switchShowMore" v-if="showMore"> 
                <img src="@/assets/img/down.button.svg" alt="" > Показать ещё
              </div>
        </div>
    </div>
  </section>
</template>

<script>
import { useStore } from '@/store';
import { ref } from 'vue';

export default {
  name: 'pokupkI',
  setup() {
    const store = useStore();
    return {
      store,
      showMore: ref(true),
    }

  },
  methods: {
    switchShowMore() {
      this.showMore = false;
    },
  },
  computed: {
    transactionsBuyGold() {
      if (Object.entries(this.store.user).length > 0) {
        return this.store.user.transactions.filter(
          trans => !(trans.money < 0 && trans.gold > 0)
        );
      } else {
        return [];
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>

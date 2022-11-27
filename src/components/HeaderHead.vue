<template>
  
<section class="bg">
  </section>
  <header class="header__A">
            <div class="header__addapt">
              <div class="logo__logo"></div>
              <div>
                <div class="but__adapt1"></div>
                <div class="but__adapt2"></div>
            </div>
            </div>
      </header>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo"></div>
        <nav class="header__nav">
          <ul>
            <li><a href="" class="activ_nav"><i> <img src="@/assets/img/hom.svg"/></i> Главная</a></li>
            <li><a href=""><i><img src="@/assets/img/vopros.svg" alt=""></i> Faq</a></li>
            <li><a href=""><i><img src="@/assets/img/Frame.svg" alt=""></i> Покупка голды</a></li>
        </ul>
        </nav>
        <div class="button__header anime" v-if="!store.user.premium"> 
          <a href=""><i><img src="@/assets/img/arrow_left.svg" alt=""></i> </a> <div class="pass"></div>
        </div>
        
        <!-- <div class="oplataa" v-if="userIsDefined">
          <ul class="oplata">
            <li class="button__1 anime"><a href=""> <i> <img src="@/assets/img/plata1.svg" alt=""></i> Пополнить</a></li>
            <li class="button__2 anime"><a href=""> <i><img src="@/assets/img/plata2.svg" alt=""></i> Пополнить</a></li>
          </ul>
        </div>
        
        <div class="profil" v-if="userIsDefined">
          <div class="icons__profil" style=""><i></i></div>
          <ul class="profil__name">
            <li>{{handleUserName}}</li>
            <li><span class="balans__rub">{{store.user.money}} <i class="rub">₽</i></span>    <span class="balans__gold">{{store.user.gold}} <i class="G">G</i></span></li>
          </ul>
          <img src="@/assets/img/arrow__button.svg" alt="" class="arrow">
        </div> -->

        <div class="profil"  v-if="!userIsDefined">
            <ul class="aut">
          
                <li class="button__aut1 anime" @click="login()"> <i> <img src="@/assets/img/Google.svg" alt=""></i> Google</li>
                <li class="button__aut2 anime"> <a :href="vkUrl"><i><img src="@/assets/img/vk__orange.svg" alt=""></i> Вконтакте</a></li>
            </ul>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import {useStore} from '@/store';
import {
  useTokenClient,
} from "vue3-google-signin";


export default {
  name: 'HeaderHead',
  setup() {
    const store = useStore();
    const handleOnSuccess = response => {
      console.log("Access Token: ", response.access_token);
    };

    const handleOnError = errorResponse => {
      console.log("Error: ", errorResponse);
    };
    
    const { isReady, login } = useTokenClient({
      onSuccess: handleOnSuccess,
      onError: handleOnError,
      // 
    });

    return {
      store,
      isReady, 
      login,
      handleOnSuccess,
      handleOnError,
      vkUrl: 'https://oauth.vk.com/authorize?client_id=51487791&display=page&redirect_uri=http://localhost:8080&scope=notify,photos,wall,email,stats,offline&response_type=token&v=5.74'
      // clientId: "452442277466-lv8ch0a7gookt6acak1ksk28fg69rmn9.apps.googleusercontent.com",
      
    }
  },
  methods: {
  },
  computed: {
    userIsDefined() {
      return Object.entries(this.store.user).length === 0;
    },
    handleUserName() {
      const name = this.store.user.username
      if (name == '') {
        return 'О г у р ч и к'
      } else {
        let newName = Array.from(name.replace(' ', '')).join(' ')
        if (newName.length >= 20) {
          return newName.slice(0, 20) + '...'
        } else {
          return newName
        }
      }
    }
  }
}
</script>

<style>
  .google-signin-button {
    color: white;
    background-color: red;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    padding: 10px 20px 25px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>

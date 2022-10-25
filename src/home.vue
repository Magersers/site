<template style='overflow-x:hidden;'>
 <router-link to="/" class="router">Главная страница</router-link> |
    <router-link to="/about" class="router">Личный кабинет</router-link>
    <router-link to="/help" class="router"> Помощь </router-link>
    <router-link to="/" class="router" onclick = "window.$('.modalka1').show()"> Окно 1</router-link> 
    <router-link to="/" class="router" onclick = "window.$('.modalka2').show()">/ Окно 2</router-link> 
    <router-link to="/" class="router" onclick = "window.$('.modalka3').show()">/ Окно 3</router-link> 
    <router-link to="/" class="router" onclick = "window.$('.modalka4').show()">/ Окно 4</router-link> 
    <router-link to="/" class="router" onclick = "window.$('.modalka5').show()">/ Окно 5</router-link> 
    <router-view/>
    <helpAll/>
    <section class="adapt__menu">
      <div class="menu__menu">
        <ul>
          <li> <img src="@/assets/img/vasdasd.svg" alt=""> F.a.q</li>
          <li> <img src="@/assets/img/exit.svg" alt=""> Выйти</li>
        </ul>
        <div class="seti"><h1> Мы в соц. сетях</h1><a href=""><img src="/img/vk.f3811945.svg" alt=""></a><a href=""><img src="/img/tg.ad241edf.svg" alt=""></a><a href=""><img src="/img/tik.b7dc7dd8.svg" alt=""></a><a href=""><img src="/img/yt.fa7880df.svg" alt=""></a></div>
      </div>
      <div class="adapt__menu__inner">
          <ul>
            <li> <img src="@/assets/img/mesage.svg" alt=""><br> Отзывы</li>
            <li> <div class="bgger">1 900 ₽</div></li>
            <li><img src="@/assets/img/mennn.svg" alt=""> <br> Профиль</li>
            <li><img src="@/assets/img/burger.svg" alt="" onclick="window.$('.menu__menu').show()"> <br> Меню</li>
          </ul>
      </div>
    </section>
</template>

<script>
import './assets/css/style.css';
import './assets/fonts/stylesheet.css';
import helpAll from './components/helpAll.vue'

export default {
  name: 'App',
  components: {
    helpAll
  },
}
</script>

<style>
 .router{
  color: white;
 }
</style>

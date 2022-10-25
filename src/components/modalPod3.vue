<template>
    <section class="modalka3">
        <div class="modalka3__inner">
            <div class="krestt" onclick = "window.$('.modalka3').hide()"></div>
            <h1>Сколько хотите вывести голды?</h1>
            <div class="vivod">
                <div class="summa"> Введите сумму: <input type="text" placeholder="100"> <i>G</i></div>
                <div class="dostupno">Доступно на вывод: <h3>200  <i>G</i></h3> </div>
                <div class="dalee">Далее</div>
            </div>
        </div>
    </section>
</template>
    
    <script>
    export default {
      name: 'modalPod3',
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style >
    
    </style>
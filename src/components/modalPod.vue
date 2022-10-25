<template>
    <section class="modalka1">
        <div class="modalka1__inner">
            <div class="krestt" onclick = "window.$('.modalka1').hide()"></div>
            <div class="modal__text">   
            </div>
            <div class="formaa">
                <div class="formaa__head">
                    <h1>Подключение подписки StandoffPass</h1>
                    <div>
                        Стоимость: <br> <span> 119 <i>₽</i> </span>
                    </div>
                </div>
                <div class="vvod">
                    <span class="texxtt">Адрес эл. почты</span>
                    <span class="texxtt2">У меня нет эл. почты</span>
                    <span class="imggg"></span>
                <input type="text" class="mailll">
                <span class="ssl">  <img src="@/assets/img/zamok.svg" alt=""> Соединение защищено протоколом SSL и TSL</span>
                </div>
                <div class="button__vvod">
                    <div class="buttonn1 anime">Перейти к оплате - 119 ₽</div>
                    <div class="buttonn2 anime">Отменить подписку</div>
                </div>
                <div class="check__box">
                   <div><div class="chek1"></div> <p> Согласен с политикой обработки персональных данных, правилами предоставления услуг по подписке, офертой рекуррентных платежей, договором-офертой и условиями использования.</p></div> 
                   <div><div class="chek1"></div> <p>Согласен с правилами предоставления доступа к сервису по подписке с использованием автоплатежа и уведомлен о подключении платной подписки стоимостью 119 руб. за каждые 7 дней использования.</p></div>
                </div>
            </div>
        </div> 
    </section>
</template>
    
    <script>
    export default {
      name: 'modalPod',
    }
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style >
    
    </style>
    
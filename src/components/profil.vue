<template>
  <section class="profill">
        <div class="container">
            <div class="profill__inner">
                <div class="profill__info">
                    <div>
                        <ul>
                                <li><div class="icons__profil"><img :src="store.user.avatar" alt="ava"/></div></li>
                            <li>{{store.user.username}} <br> <span style="color:#0094FF;">{{store.user.money}} ₽</span> <span style="color:#FF922B;">{{store.user.gold}} G</span></li>
                        </ul>
                    </div>
                    <div class="oplataa">
                        <ul class="oplata">
                            <li class="button__1 anime"><a href=""> <i> <img src="@/assets/img/plata1.svg" alt=""></i> Пополнить</a></li>
                            <li class="button__2 anime"><a href=""> <i><img src="@/assets/img/plata2.svg" alt=""></i> Вывести</a></li>
                        </ul>
                    </div>

                    <div class="profill__avatar">
                        <div class="download__avatar">
                        </div>
                        <div class="download__info">
                            <h1>Ваша аватарка в Standoff 2</h1>
                            <p>Для вывода скина, необходимо установить аватарку как в вашем аккаунте Standoff 2</p>
                        </div>
                        <input type="file" :value="uploadedPhoto" @change='handleAvatarChange' id="avatar_input"/>
                        <div class="download__button anime" @click="handleUploadButtonPress">
                            <i></i> Загрузить
                        </div>
                    </div>
                </div>
                <div class="valuta">
                        <div class="block1"><h1>Всего <br> куплено:</h1> <span> {{store.user.total_gold}} <i class="G"> G</i></span></div>
                        <div class="block2"><h1>Всего <br> пополнено:</h1> <span> {{store.user.total_money}} <i> ₽</i></span></div>
                </div>
            </div>
        </div>
  </section>
</template>

<script>
import { useStore } from '@/store';
import { ref } from 'vue'; 


export default {
  name: 'profiL',
  setup() {
    const store = useStore();

    return {
        store,
        uploadedPhoto: ref(null)
    }
  },
  methods: {
    handleAvatarChange(event) {
        const photos = event.target.files

        if (photos.length > 0) {
            this.uploadedPhoto = photos[0]
            this.store.updateUser({avatar: this.uploadedPhoto})
        }
    },
    handleUploadButtonPress() {
        document.getElementById('avatar_input').click()
    }
  },
}
</script>

import { defineStore } from 'pinia';
import { useTokenService } from './tokenService';
import axiosInstance from '@/axiosRelated/axiosInstance';


export const useStore = defineStore('Store', {
    state: () => ({
        user: {},
        tokenService: useTokenService(),
        stats: {}
    }),
    actions: {
        async initStore()  {
            const googleToken = localStorage.getItem("google_access_token");
            if (googleToken) {
                await this.tokenService.authByGoogle({access_token: googleToken});
            }
            await this.getMe();
            await this.getStats();
            this.countTransactionTotals();
        },

        async getMe() {
            const response = await axiosInstance.get('users/me/', {});
            this.user = response.data;
            console.log(this.user);
            if (this.user.avatar === "http://localhost:8000/media/default_avatar.svg") {
                this.user.avatar = '@/assets/img/men.svg';
            }
            return response.data;

        },

        async updateUser(newValues) {
            const r = await axiosInstance.put(`users/${this.user.id}`, newValues);
            console.log(r);
        },
        async getStats() {
            const response = await axiosInstance.get('stats/', {});
            this.stats = response.data;
            console.log(this.stats);
            return response.data;
        },

        countTransactionTotals() {
            let money = 0;
            let gold = 0;
            let array = this.user ? this.user.transactions : [];

            for (let i of array) {
                if (i.money > 0 && i.gold === 0) {
                    money += i.money;
                } else if (i.gold > 0 && i.money < 0) {
                    gold += i.gold;
                }
            }

            this.user.total_money = money;
            this.user.total_gold = gold;

        }
    },

});
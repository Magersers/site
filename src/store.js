import { defineStore } from 'pinia';
import { useTokenService } from './tokenService';
import axiosInstance from '@/axiosRelated/axiosInstance';


export const useStore = defineStore('Store', {
    state: () => ({
        user: {},
        transactions: [],
        tokenService: useTokenService(),
        stats: {}
    }),
    actions: {
        async initStore()  {
            await this.tokenService.doCreate({email: 'tabalex2005@gmail.com', password: 'tabalex13'});
            await this.getMe();
            await this.getStats();
            await this.getTransactions();
          },
        async getMe() {
            const response = await axiosInstance.get('users/me/', {});
            this.user = response.data;
            console.log(this.user);
            return response.data;

        },

        async getStats() {
            const response = await axiosInstance.get('stats/', {});
            this.stats = response.data;
            console.log(this.stats);
            return response.data;
        },

        async getTransactions() {
            const response = await axiosInstance.get(`stats/users/${this.user.id}/transactions/`, {});
            this.transactions = response.data;
            console.log(this.transactions);
            this.countTransactionTotals();
            return response.data;
        },

        countTransactionTotals() {
            let money = 0;
            let gold = 0;

            for (let i of this.transactions.results) {
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
    getters: {
    
    },
});
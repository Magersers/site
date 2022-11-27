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
        }
    },
    getters: {
    
    },
});
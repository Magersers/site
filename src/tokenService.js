import { defineStore } from 'pinia';
import instance from '@/axiosRelated/axiosInstance';
import axios from 'axios';


export const useTokenService = defineStore('tokenService', {
    state: () => ({
        access: '',
        refresh: ''
    }),
    actions: {
        async authByGoogle(credentials) {
            try {
                const response = await axios.post(
                    'dj-rest-auth/google/',
                    credentials,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );
                const { access_token, refresh_token } = response.data;
                this.access = access_token;
                this.refresh = refresh_token;

                return response.data;
            
            } catch (e) {
                console.log(e);
                return {};
            }
            
            
        },

        async doCreate(credentials) {
            try {
                const response = await instance.post(
                    'auth/jwt/create/',
                    credentials,
                );
                const { access, refresh } = response.data;
                this.access = access;
                this.refresh = refresh;

                return response.data;
            
            } catch (e) {
                console.log(e);
                return null;
            }
            
            
        },

        async doRefresh() {
            try {
                const response = await instance.post(
                    'auth/jwt/refresh/',
                    {
                        refresh: this.refresh
                    },
                );
                const {access} = response.data;
                this.access = access;
                // localStorage.setItem('access', this.access);

    
                return access;
            } catch (e) {
                console.log(e);
                return null;
            }
           
        },

        async doVerify(token) {
            const r = await instance.post(
                'auth/jwt/verify/',
                {token},
            );
            return r.data;
        },
    },
});
import { defineStore } from 'pinia';
import instance from '@/axiosRelated/axiosInstance';


export const useTokenService = defineStore('tokenService', {
    state: () => ({
        access: '',
        refresh: ''
    }),
    actions: {
        async doCreate(credentials) {
            try {
                // if (this.access === '') {
                //     const local_token = localStorage.getItem('access');
                //     if (local_token !== null) {
                //         const local_is_valid = await this.doVerify(local_token);
                //         if (Object.entries(local_is_valid).length === 0) {
                //             this.access = local_token;
                //             this.refresh = localStorage.getItem('refresh');
                //             return {
                //                 access: this.access,
                //                 refresh: this.refresh
                //             };
                //         }
                //     }
                // }
                const response = await instance.post(
                    'auth/jwt/create/',
                    credentials,
                );
                const { access, refresh } = response.data;
                this.access = access;
                this.refresh = refresh;
                // localStorage.setItem('access', this.access);
                // localStorage.setItem('refresh', this.refresh);
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
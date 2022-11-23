import axiosInstance from '@/axiosRelated/axiosInstance';

const REQUEST = axiosInstance.interceptors.request;
const RESPONSE = axiosInstance.interceptors.response;

export const setInterceptors = async tokenService => {
    REQUEST.use(
        async config => {
            const access = tokenService.access;
            if (access === '' &&  config.url !== 'auth/jwt/create/') {
                console.log('No token');
                await tokenService.doCreate({email: 'tabalex2005@gmail.com', password: 'tabalex13'});
            }
            console.log(config.url);
            config.headers.Authorization = 'Bearer ' + access;
            return config;
        },
        error => Promise.reject(error)
      );
    
      RESPONSE.use(
        res => res,
        async err => {
            console.log('Err', err);
            const originalConfig = err.config;
    
            if (err.response.data.code === 'token_not_valid') {
                await tokenService.doRefresh();
                // originalConfig._retry = true;
                if (originalConfig.data) {
                    originalConfig.data = JSON.parse(originalConfig.data); 
                }
                originalConfig.headers = {...originalConfig.headers};
                return axiosInstance(originalConfig);
            }
    
            return Promise.reject(err);
        }
      );
};
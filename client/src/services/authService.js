import api from './axiosClient';

const authService = {
    login(body){
        return api.post("auth/login",body);
    },
    register(body) {
        return api.post("auth/register",body);
    },
    updateUser(body){
        return api.put("auth/update-user",body);
    }
};

export default authService;

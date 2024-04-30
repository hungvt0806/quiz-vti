import api from './axiosClient';

const authService = {
    login(body){
        return api.post("/login",body);
    },
    register(body) {
        return api.post("/register",body);
    },
};

export default authService;

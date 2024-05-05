import api from './axiosClient';

const quizService = {
    getAll(params){
        return api.get("/quizzes",params);
    },
    create(body) {
        return api.post("/quizzes/create",body);
    },
    update(body) {
        return api.put("/quizzes/update",body);
    },
    delete(id) {
        return api.delete(`/quizzes/delete/${id}`);
    },
};

export default quizService;
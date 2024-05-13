import api from './axiosClient';

const quizService = {
    getAll(params){
        return api.get("/quizzes",params);
    },
    getAllMyQuizzes(createdBy){
        return api.get(`/quizzes/my-quizzes/${createdBy}`);
    },
    getQuizDetails(quizId){
        return api.get(`/quizzes/get-quiz/${quizId}`);
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



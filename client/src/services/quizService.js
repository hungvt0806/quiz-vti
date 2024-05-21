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
    updateOneQuestion(body){
        return api.put(`/quizzes/updateQuestion`,body);
    },
    addOneQuestion(body){
        return api.post(`/quizzes/addQuestion`,body);
    },
    deleteOneQuestion(params, body) {
        return api.delete(`/quizzes/deleteQuestion`, { params, data: body });
      },
    create(body) {
        return api.post("/quizzes/create",body);
    },
    update(quizId,body) {
        return api.put(`/quizzes/updateQuiz/${quizId}`,body);
    },
    delete(id) {
        return api.delete(`/quizzes/delete/${id}`);
    },
};

export default quizService;



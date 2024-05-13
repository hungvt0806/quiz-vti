const express = require('express');
const {createOneQuiz, getAllMyQuizzes, getAllQuizzes, getQuizDetails, addComment, addLike, addResult,getResultByScoreId,deleteOneQuiz } = require('../controllers/quizController.js');
const { verifyToken } = require('../middleware/verifyToken.js');

const Router = express.Router();


  Router.route('/create').post(verifyToken, createOneQuiz);
  Router.route("/my-quizzes/:id").get( verifyToken, getAllMyQuizzes);
  Router.route('/all-quizzes') .get(verifyToken, getAllQuizzes);
  Router.route('/get-quiz/:id') .get(verifyToken, getQuizDetails);
  Router.route('/add-comment' ).post(verifyToken, addComment);
  Router.route('/like-quiz' ).post(verifyToken, addLike);
  Router.route('/save-results') .post(verifyToken,addResult);
  Router.route('/results/:id' ).get(verifyToken,getResultByScoreId);
  Router.route('/delete/:id').delete(verifyToken,deleteOneQuiz);

module.exports = Router;
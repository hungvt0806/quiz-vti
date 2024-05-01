const express = require('express');
const { getAllQuizzes, createOneQuiz, updateOneQuiz, deleteOneQuiz } = require('../controllers/quizController.js');
const { verifyToken } = require('../middleware/verifyToken.js');

const Router = express.Router();

Router.route('/')
  .get(getAllQuizzes)
  .post(verifyToken, createOneQuiz);

Router.route('/:quizId')
  .put(verifyToken, updateOneQuiz)
  .delete(verifyToken, deleteOneQuiz);

module.exports = Router;
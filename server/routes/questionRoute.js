const express = require('express');
const { getAllQuestions, createOneQuestion, updateOneQuestion, deleteOneQuestion } = require('../controllers/questionController.js');
const { verifyToken } = require('../middleware/verifyToken.js');

const Router = express.Router();

Router.route('/')
  .get(getAllQuestions);
Router.route('/:quizId')
  .post(verifyToken, createOneQuestion);

Router.route('/:questionId')
  .put(verifyToken, updateOneQuestion)
  .delete(verifyToken, deleteOneQuestion);

module.exports = Router;
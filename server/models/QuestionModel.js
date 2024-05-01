const mongoose = require('mongoose');

const quizQuestionSchema = new mongoose.Schema({
 quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
 question: { type: String, required: true },
 options: [{ type: String }],
 correctOption: { type: Number, required: true },
}, { timestamps: true });

const QuizQuestion = mongoose.model('QuizQuestion', quizQuestionSchema);

module.exports = QuizQuestion;

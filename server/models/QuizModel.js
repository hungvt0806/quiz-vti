const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
 title: { type: String, required: true },
 type: { type: String },
 avatar: { type: String }, 
 createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
 questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'QuizQuestion' }],
}, { timestamps: true });

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;

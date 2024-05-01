const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
 title: {type: String, required: [true,'Quiz must have title'], trim: true},
 author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 type: { type: String },
 avatar: { type: String }, 
 questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'QuizQuestion' }],
 ranking: [{
    playId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: { type: Number }
}]
}, { timestamps: true });



const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;

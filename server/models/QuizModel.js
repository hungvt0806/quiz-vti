const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new mongoose.Schema({
 title: {
    type: String, 
    required: true, 
},
questions: [{
    type: Object,
    contains: {
        answers: {type: Array},
        correctAnswer: Number,
        questionName: String
        }
    }],
createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },
 category: { 
    type: String,
    required:true 
},
 avatar: { 
    type: String,
    required: false
}, 
mustBeSignedIn: {
    type: Boolean,
    default: false
},
imgUrl: {
    type: String,
    required: false
},
comments: [{
    type: Object,
    contains: {
        sentFromId: {type: Schema.Types.ObjectID},
        message: {type: String}
    }
}],
views: {
    type: Number,
    default: 0
},
likes: {
    type: Number,
    default: 0
},
scores: {
    type: Array, 
    default: []
},
deleted: {
    type: Boolean,
    default: false
}
}, { timestamps: true });

// Tính tổng số câu hỏi trong mỗi bài quiz
quizSchema.virtual('totalQuestions').get(function() {
    return this.questions.length;
  });

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;

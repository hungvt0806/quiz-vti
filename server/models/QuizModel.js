const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    answers: { type: [String], required: true },
    correctAnswer: { type: Number, required: true },
    questionName: { type: String, required: true }
});

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    questions: [questionSchema], // Sử dụng schema nhúng
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true
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
        sentFromId: { type: Schema.Types.ObjectId },
        message: { type: String }
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
        type: [Number],
        default: []
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Tính tổng số câu hỏi trong mỗi bài quiz
quizSchema.virtual('totalQuestions').get(function () {
    return this.questions.length;
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    quizId: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    answers: {
        type: Array,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectID,
        ref:'Uer',
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = Scores = mongoose.model("Scores", ScoreSchema);
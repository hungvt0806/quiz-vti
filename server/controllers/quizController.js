const Quiz = require('../models/QuizModel');
const Question = require('../models/QuestionModel');

//get all  quizes
exports.getAllQuizzes = async (req,res,next)=>{
    try{
        const quizzes = await Quiz.find({}).populate('author');
        res.status(200).json({
            status : 'success',
            results: quizzes.length,
            data:{quizzes}
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

//create one  quiz
exports.createOneQuiz = async (req,res,next)=>{
    try{
        const {userId} = req.user;

        const quiz = await Quiz.create({...req.body,author:userId});
    
        res.status(200).json({
            status : 'success',
            data:{quiz}
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}


//update one  quiz
exports.updateOneQuiz = async (req,res,next)=>{
    try{
        const {quizId} = req.params;

        if (!quizId) {
            return res.status(400).json({ status: 'ERR', message: 'Missing quizId' });
        }

        const quiz = await Quiz.findByIdAndUpdate(quizId,{...req.body},{new: true, runValidator: true});
    
        res.status(200).json({
            status : 'success',
            data:{quiz}
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}


//Delete one  quiz
exports.deleteOneQuiz = async (req,res,next)=>{
    try{
        const {quizId} = req.params;

        if (!quizId) {
            return res.status(400).json({ status: 'ERR', message: 'Missing quizId' });
        }

        await Question.deleteMany({ quizId });
        await Quiz.findByIdAndDelete(quizId);
    
        res.status(200).json({
            status : 'success',
            message: 'Quiz has been deleted'
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

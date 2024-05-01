const Question = require('../models/QuestionModel');

//get all  questions
exports.getAllQuestions = async (req,res,next)=>{
    try{
        const questions = await Question.find({}).populate('quizId');
        res.status(200).json({
            status : 'success',
            results: questions.length,
            data:{questions}
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

//create one  question
exports.createOneQuestion = async (req,res,next)=>{
    try{
        const {quizId} = req.params;

        if (!quizId) {
            return res.status(400).json({ status: 'ERR', message: 'Missing quizId' });
        }

        const question = await Question.create({...req.body,quizId:quizId});
    
        res.status(200).json({
            status : 'success',
            data:{question}
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}


//update one  question
exports.updateOneQuestion = async (req,res,next)=>{
    try{
        const {questionId } = req.params;

        if (!questionId) {
            return res.status(400).json({ status: 'ERR', message: 'Missing questionId' });
        }

        const question = await Question.findByIdAndUpdate(questionId,{...req.body},{new: true, runValidator: true});
    
        res.status(200).json({
            status : 'success',
            data:{question}
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}


//Delete one  question
exports.deleteOneQuestion = async (req,res,next)=>{
    try{
        const { questionId } = req.params;

        if (!questionId) {
            return res.status(400).json({ status: 'ERR', message: 'Missing questionId' });
        }

        await Question.findByIdAndDelete(questionId);
    
        res.status(200).json({
            status : 'success',
            message: 'Question has been deleted'
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

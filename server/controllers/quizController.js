const Quiz = require('../models/QuizModel');
const Question = require('../models/QuestionModel');

//get all  quizes+ Pagination + Sort + Filter
exports.getAllQuizzes = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1; // Số trang mặc định là 1 nếu không có truy vấn
        const limit = parseInt(req.query.limit) || 10; // Số lượng phần tử trên mỗi trang, mặc định là 10
        const sortBy = req.query.sortBy || '_id'; // Trường để sắp xếp, mặc định là 'createdAt'
        const sortOrder = req.query.sortOrder || 'asc'; // Hướng sắp xếp, mặc định là 'desc'

        const startIndex = (page - 1) * limit; // Vị trí bắt đầu của trang hiện tại

        let filter = {};
        // Xử lý các tham số filter từ query string của URL (ví dụ: /api/quizzes?type=languae)
        if (req.query.type) {
            filter.type = req.query.type;
        }
        // Các điều kiện filter khác có thể được xử lý tương tự

        const totalQuizzes = await Quiz.countDocuments(filter); // Tổng số lượng quizzes

        const totalPages = Math.ceil(totalQuizzes / limit); // Tổng số trang

        const quizzes = await Quiz.find(filter)
            .populate('author')
            .sort({ [sortBy]: sortOrder }) // Sắp xếp theo trường và hướng đã chỉ định
            .skip(startIndex) // Bỏ qua các phần tử từ vị trí bắt đầu
            .limit(limit); // Giới hạn số lượng phần tử trả về

        res.status(200).json({
            status: 'success',
            results: quizzes.length,
            currentPage: page,
            totalPages: totalPages,
            data: { quizzes }
        });
        
    } catch (error) {
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

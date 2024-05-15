const Quiz = require('../models/QuizModel');
const User = require('../models/UserModel');
const Score = require('../models/ScoresModel');

//get all  quizes+ Pagination + Sort + Filter

// exports.getAllQuizzes = async (authorId) => {
//     try {
//         // Tìm tất cả các bài quiz của tác giả với userId truyền vào
//         const quizzes = await Quiz.find({ 'author._id': authorId }).populate('author').exec();
//         return quizzes;
//     } catch (error) {
//         throw error;
//     }
// };







// exports.getAllQuizzes = async (req, res, next) => {
//     try {
//         const page = parseInt(req.query.page) || 1; // Số trang mặc định là 1 nếu không có truy vấn
//         const limit = parseInt(req.query.limit) || 20; // Số lượng phần tử trên mỗi trang, mặc định là 10
//         const sortBy = req.query.sortBy || '_id'; // Trường để sắp xếp, mặc định là 'createdAt'
//         const sortOrder = req.query.sortOrder || 'asc'; // Hướng sắp xếp, mặc định là 'desc'
    

//         const startIndex = (page - 1) * limit; // Vị trí bắt đầu của trang hiện tại

//         let filter = {};
//         // Xử lý các tham số filter từ query string của URL (ví dụ: /api/quizzes?type=languae)
//         if (req.query.id) {
//             filter._id =  req.query.idd ;
//         }
//         // Các điều kiện filter khác có thể được xử lý tương tự

//         const totalQuizzes = await Quiz.countDocuments(filter); // Tổng số lượng quizzes

//         const totalPages = Math.ceil(totalQuizzes / limit); // Tổng số trang

//         const quizzes = await Quiz.find(filter)
//             .populate('author')
//             .sort({ [sortBy]: sortOrder }) // Sắp xếp theo trường và hướng đã chỉ định
//             .skip(startIndex) // Bỏ qua các phần tử từ vị trí bắt đầu
//             .limit(limit); // Giới hạn số lượng phần tử trả về

//         res.status(200).json({
//             status : 'getAllQuizzes success',
//             results: quizzes.length,
//             currentPage: page,
//             totalPages: totalPages,
//             data: { quizzes }
//         });
        
//     } catch (error) {
//         return res.status(500).json({
//             status: 'ERR',
//             message: error.message || 'Internal server error'
//         });
//     }
// }



//create one  quiz
exports.createOneQuiz = async (req,res,next)=>{
    try{
        let quiz = new Quiz({
            ...req.body.quiz,
            createdBy: req.body.createdBy,
            questions: req.body.quiz.questions.map(ques => {
                return {
                    ...ques,
                    answers: ques.answers.map(ans => {
                        return {
                            name: ans,
                            selected: false
                        }
                    })
                }
            })
        });
        quiz.save().then(result => {
            res.status(200).json({success: true});
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

exports.getAllMyQuizzes = async (req,res,next)=>{
    try{

        const page = parseInt(req.query.page) || 1; // Số trang mặc định là 1 nếu không có truy vấn
        const limit = parseInt(req.query.limit) || 20; // Số lượng phần tử trên mỗi trang, mặc định là 10
        const sortBy = req.query.sortBy || 'category'; // Trường để sắp xếp, mặc định là 'createdAt'
        const sortOrder = req.query.sortOrder || 'asc'; // Hướng sắp xếp, mặc định là 'desc'
    

        const startIndex = (page - 1) * limit; // Vị trí bắt đầu của trang hiện tại

        let filter = {};
        // Xử lý các tham số filter từ query string của URL (ví dụ: /api/quizzes?type=languae)
        if (req.params.id) {
            filter.createdBy= req.params.id
        }
        // Các điều kiện filter khác có thể được xử lý tương tự

        const totalQuizzes = await Quiz.countDocuments(filter); // Tổng số lượng quizzes

        const totalPages = Math.ceil(totalQuizzes / limit); // Tổng số trang

        const quizzes = await Quiz.find(filter)
        .populate('createdBy')
            .sort({ [sortBy]: sortOrder }) // Sắp xếp theo trường và hướng đã chỉ định
            .skip(startIndex) // Bỏ qua các phần tử từ vị trí bắt đầu
            .limit(limit) // Giới hạn số lượng phần tử trả về
            .select('title questions category createdBy');

        // Tạo mảng các promises để lấy số lượng câu hỏi trong mỗi bài quiz
const promises = quizzes.map(async (quiz) => {
    const questionCount = quiz.questions.length;
    return { ...quiz.toObject(), questionCount };
});

// Chờ tất cả các promises hoàn thành
const quizzesWithQuestionCount = await Promise.all(promises);

res.status(200).json({
    status: 'success',
    results: quizzesWithQuestionCount.length,
    currentPage: page,
    totalPages: totalPages,
    data: { quizzes: quizzesWithQuestionCount }

        });

        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

exports.getAllQuizzes = async (req,res,next)=>{
    try{
        const page = parseInt(req.query.page) || 1; // Số trang mặc định là 1 nếu không có truy vấn
        const limit = parseInt(req.query.limit) || 20; // Số lượng phần tử trên mỗi trang, mặc định là 10
        const sortBy = req.query.sortBy || 'category'; // Trường để sắp xếp, mặc định là 'createdAt'
        const sortOrder = req.query.sortOrder || 'asc'; // Hướng sắp xếp, mặc định là 'desc'
    

        const startIndex = (page - 1) * limit; // Vị trí bắt đầu của trang hiện tại

        // Các điều kiện filter khác có thể được xử lý tương tự

        const totalQuizzes = await Quiz.countDocuments(); // Tổng số lượng quizzes

        const totalPages = Math.ceil(totalQuizzes / limit); // Tổng số trang

        const quizzes = await Quiz.find()
            .populate('createdBy')
            .sort({ [sortBy]: sortOrder }) // Sắp xếp theo trường và hướng đã chỉ định
            .skip(startIndex) // Bỏ qua các phần tử từ vị trí bắt đầu
            .limit(limit); // Giới hạn số lượng phần tử trả về

        // Tạo mảng các promises để lấy số lượng câu hỏi trong mỗi bài quiz
        const promises = quizzes.map(async (quiz) => {
            const questionCount = quiz.questions.length;
            return { ...quiz.toObject(), questionCount };
            });

            // Chờ tất cả các promises hoàn thành
        const quizzesWithQuestionCount = await Promise.all(promises);

        res.status(200).json({
            status: 'success',
            results: quizzesWithQuestionCount.length,
            currentPage: page,
            totalPages: totalPages,
            data: { quizzes: quizzesWithQuestionCount }
        
                });

        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

exports.getQuizDetails = async (req,res,next)=>{
    try{
        Quiz.findOne({ _id: req.params.id })
        .populate('createdBy')
        .then(quiz => {
            res.status(200).json({quiz});
        }).catch(er => {
            res.status(500).send(er);
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

exports.addComment = async (req,res,next)=>{
    try{
        Quiz.updateOne({ _id: req.body.quizId }, {
            $push: {
                comments: {
                    sentFromId: req.body.sentFromId,
                    message: req.body.message
                }
            }
        }).then(quiz => {
            res.status(200).json({success: true});
        }).catch(er => {
            res.status(500).send(er);
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

exports.addLike = async (req,res,next)=>{
    try{
        User.findOne({_id: req.body.userId, likedQuizzes: {$in: [req.body.quizId]}}).then(async user => {
            if (!user) {
                await User.updateOne({ _id: req.body.userId }, {
                    $push: {
                        likedQuizzes: req.body.quizId
                    }
                });
                await Quiz.updateOne({ _id: req.body.quizId }, {
                    $inc: {
                        likes: 1
                    }
                });
                res.status(200).json({message: 'Added To Liked'});
            } else {
                await User.updateOne({ _id: req.body.userId }, {
                    $pull: {
                        likedQuizzes: req.body.quizId
                    }
                });
                await Quiz.updateOne({_id: req.body.quizId}, {
                    $inc: {
                        likes: -1
                    }
                })
                res.status(200).json({message: 'Removed from liked'})
            }
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}


exports.addResult = async (req,res,next)=>{
    try{
        let score = new Score({
            userId: req.body.currentUser,
            answers: req.body.answers,
            quizId: req.body.quizId
        });
        score.save().then(async resp => {
            await Quiz.updateOne({ _id: req.body.quizId }, {
                $push: {
                    scores: resp._id
                }
            });
            res.status(200).json({scoreId: resp._id});
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

//tim bai lam cos scoreId
exports.getResultByScoreId = async (req,res,next)=>{
    try{
        if (!req.params.id) {
            res.status(500).send("No id provided in params");
        } else {
            Score.findOne({_id: req.params.id}).then(data => {
                if (!data) {
                    res.status(500).send("Error finding score");
                } else {
                    Quiz.findOne({_id: data.quizId}).then(quiz => {
                        if (!quiz) {
                            res.status(500).send("Error getting quiz");
                        } else {
                            res.status(200).json({score: data, quiz: quiz});
                        }
                    })
                }
            }).catch((err) => {
                console.log(err);
                res.status(500).send("Error finding score");
            })
        }
        
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
    
        const {quizId}  = req.query.id;

        if (!quizId) {
            return res.status(400).json({ status: 'ERR', message: 'Missing quizId' });
        }

        const quiz = await Quiz.findByIdAndUpdate(quizId,{...req.body},{new: true, runValidator: true});
    
        res.status(200).json({
            status : 'updateOneQuiz success',
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
        const quizId = req.params.id;

        if (!quizId) {
            return res.status(400).json({ status: 'ERR', message: 'Missing quizId' });
        }

        await Score.deleteMany({ quizId });
        await Quiz.findByIdAndDelete(quizId);
    
        res.status(200).json({
            status : 'deleteOneQuiz success',
            message: 'Quiz has been deleted'
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

exports.getDetailsQuiz = async (req, res, next) => {
    try {
        
        const quizId = req.query.id;

        const quiz = await Quiz.findOne(quizId).populate('author questions');

        const numberOfQuestions = await Question.countDocuments({ quizId: quiz._id });
            

        res.status(200).json({
            status: 'getDetailsQuiz success',
            author:quiz.author.name,
            title: quiz.title,
            avatar: quiz.avatar,
            ranking: quiz.ranking,
            numberOfQuestions: numberOfQuestions,
            data: quiz
        });
        
    } catch (error) {
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
        });
    }
}

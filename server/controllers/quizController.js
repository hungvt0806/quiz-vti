const Quiz = require('../models/QuizModel');
const User = require('../models/UserModel');
const Score = require('../models/ScoresModel');


//create one  quiz
exports.createOneQuiz = async (req,res,next)=>{
    try{
        let quizData = req.body;
    
        let quiz = new Quiz({
          ...quizData.quiz,
          createdBy: quizData.createdBy,
    
            // questions: req.body.quiz.questions.map(ques => {
            //     return {
            //         ...ques,
            //         answers: ques.answers.map(ans => {
            //             return {
            //                 name: ans,
            //                 selected: false
            //             }
            //         })
            //     }
            // })
        });
        quiz.save().then(result => {
            res.status(200).json({
                success: true,
                data:{quiz}
            });
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
        const limit = parseInt(req.query.limit) || 5; // Số lượng phần tử trên mỗi trang, mặc định là 10
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
            // .select('title questions category createdBy likes comments');

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

//update one  quizInform
exports.updateOneQuiz = async (req,res,next)=>{
    try{
    
        const quizId  = req.params.id;
        

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

//update one  question on Quiz
exports.updateOneQuestion = async (req, res, next) => {
    try {
      // 1. Trích xuất quizId và index của câu hỏi từ yêu cầu
      const { quizId, index, answers, correctAnswer, questionName } = req.body;
  
      // 2. Kiểm tra xem các thông tin cần thiết có tồn tại không
      if (!quizId || index === undefined) {
        return res.status(400).json({ status: 'ERR', message: 'Missing quizId or index' });
      }
  
      // 3. Tạo object câu hỏi mới
      const question = {
        answers: answers, // Mảng chuỗi
        correctAnswer: correctAnswer,
        questionName: questionName
      };
  
      // 4. Cập nhật câu hỏi trong bài trắc nghiệm
      const quiz = await Quiz.findByIdAndUpdate(quizId, {
        $set: { [`questions.${index}`]: question } // Sử dụng $set để cập nhật giá trị mới cho câu hỏi tại vị trí index trong mảng questions
      }, { new: true, runValidators: true });
  
      // Kiểm tra xem quiz đã được cập nhật thành công chưa
      if (!quiz) {
        return res.status(404).json({ status: 'ERR', message: 'Quiz not found' });
      }
  
      // Trả về kết quả thành công
      return res.status(200).json({ status: 'Success', data: { quiz } });
    } catch (error) {
      return res.status(500).json({
        status: 'ERR',
        message: error.message || 'Internal server error'
      });
    }
  }
  

exports.addOneQuestion = async (req, res, next) => {
    try {
        // Trích xuất quizId từ yêu cầu
        const { quizId, answers, correctAnswer, questionName } = req.body;

        // Kiểm tra xem quizId có tồn tại không
        if (!quizId) {
            return res.status(400).json({ status: 'ERR', message: 'Missing quizId' });
        }

        // Tạo object câu hỏi mới
        const question = {
            answers,
            correctAnswer,
            questionName
        };

        // Thêm câu hỏi mới vào mảng questions trong bài trắc nghiệm
        const quiz = await Quiz.findByIdAndUpdate(quizId, {
            $push: { questions: question } // Sử dụng $push để thêm câu hỏi mới vào mảng questions
        }, { new: true, runValidators: true });

        // Kiểm tra xem quiz đã được cập nhật thành công chưa
        if (!quiz) {
            return res.status(404).json({ status: 'ERR', message: 'Quiz not found' });
        }

        // Trả về kết quả thành công
        return res.status(200).json({ status: 'Success', data: { quiz } });

    } catch (error) {
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

//Delete one  quuestion
// router.js hoặc quizController.js

exports.deleteOneQuestion = async (req, res) => {
    try {
      const { quizId, questionId } = req.body;
  
      if (!quizId || !questionId) {
        return res.status(400).json({ status: 'ERR', message: 'Missing quizId or questionId' });
      }
  
      const quiz = await Quiz.findByIdAndUpdate(
        quizId,
        { $pull: { questions: { _id: questionId } } },
        { new: true }
      );
  
      if (!quiz) {
        return res.status(404).json({ status: 'ERR', message: 'Quiz not found' });
      }
  
      res.status(200).json({ status: 'Success', data: { quiz } });
    } catch (error) {
      res.status(500).json({ status: 'ERR', message: error.message });
    }
  };
  
  
  
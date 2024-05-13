const express = require ('express');
const {login} = require('../controllers/authController');
const{register}= require('../controllers/authController');
const{getDetailsUser}= require('../controllers/authController');
const { verifyToken } = require('../middleware/verifyToken');
const Router = express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);
Router.route('/:id').get( verifyToken, getDetailsUser);

// Router.route('/log-out').post( logoutUser)
// Router.route('/delete-user/:id').delete( authMiddleWare, deleteUser)
// Router.route('/update-user/:id').put( authMiddleWare, updateUser)
// Router.route('/getAll').get( authMiddleWare, getAllUser)
// Router.route('/get-details/:id').get( authUserMiddleWare,getDetailsUser)
// Router.route('/refresh-token').post( refreshToken)
// Router.route('/delete-many').post( authMiddleWare, deleteMany)



module.exports = Router;
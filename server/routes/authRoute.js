const express = require ('express');
const {login} = require('../controllers/authController');
const{register}= require('../controllers/authController');
const{updateUser}= require('../controllers/authController');
const { verifyToken } = require('../middleware/verifyToken');
const Router = express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);
Router.route('/update-user/:_id').put( verifyToken,updateUser);
// Router.route('/log-out').post( logoutUser)
// Router.route('/delete-user/:id').delete( authMiddleWare, deleteUser)
// Router.route('/getAll').get( authMiddleWare, getAllUser)
// Router.route('/get-details/:id').get( authUserMiddleWare,getDetailsUser)
// Router.route('/refresh-token').post( refreshToken)
// Router.route('/delete-many').post( authMiddleWare, deleteMany)



module.exports = Router;
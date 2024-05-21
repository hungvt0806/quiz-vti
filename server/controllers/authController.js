const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { cloudinary } = require('../config/cloudinary');

exports.register = async (req,res,next) => {
    try{
        //req.body -name,email,password,confirmPassword
        const { name, email, password, confirmPassword } = req.body;
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = reg.test(email);
        
        if(!name || !email || !password || !confirmPassword){
            return res.status(200).json({
                status: 'ERR',
                message:'The input is required'
            })
        }else if (!isCheckEmail){
            return res.status(200).json({
                status: 'ERR',
                message:'The input is email'
            })
        } else if (password !== confirmPassword){
            return res.status(200).json({
                status: 'ERR',
                message:'The password not equal confirmPassword'
            })
        }
        console.log('isCheckEmail', isCheckEmail)
        const user = await User.create(req.body);
        const token = jwt.sign({userId : user._id},process.env.APP_SECRET);
        return res.json({
            status: 'success',
            data:{token,
                user}
        })
        
    }catch (error){
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}

exports.login = async (req,res,next) => {
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user){
            //Error : Email  is not correct
        }
        if (bcrypt.compareSync(req.body.password,user.password)){
            const token = jwt.sign({userId : user._id},process.env.APP_SECRET);
             return res.json({
                status : 'success',
                data: {
                    token,
                    user
                }
            })
        }else {
            //Error: Password is not correct
        }
    }catch (error){
        res.json(error);
    }
}

exports.getDetailsUser = async (req, res,next) => {
    try {
        User.findOne({ _id: req.params.id }).then(user => {
            res.json({ user, success: true })
        }).catch(er => {
            res.json({ success: false, message: er.message });
        })
    } catch (e) {
        return res.status(500).json({
            status: 'ERR',
            message: error.message || 'Internal server error'
    });
    }
}




const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
        return res.status(200).json({
            status: 'success',
            data:{token,userName: user.name}
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
            res.status(200).json({
                status : 'success',
                data: {
                    token,userName: user.name
                }
            })
        }else {
            //Error: Password is not correct
        }
    }catch (error){
        res.json(error);
    }
}


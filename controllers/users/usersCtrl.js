const User = require("../../model/User");
const bcrypt=require('bcryptjs');
const { AppErr, appErr } = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");

//Register
const registerUserCtrl= async(req,res,next)=>{
    const {fullname,password,email}=req.body;
    try{
        //check if email exist
        const userFound=await User.findOne({email});
        if(userFound) {
            return next(new AppErr("User Already Exist",400));
        }
        //check if fields are empty
        if(!fullname||!password||!email){
            return res.json({message:"PLEASE PROVIDE ALL FIELD"})
        }
        //hash password
        //hash password
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);

       //create user
       const user=await User.create({
        fullname,
        email,
        password:hashedPassword,
       });
       res.json({
        status:"success",
        fullname:user.fullname,
        email:user.email,
        id:user._id,
        //token:generateToken(userFound._id),
       });
    }catch(error){
        next(new Error(error));

    }
        
        /*res.json({msg:"Register route"})
    }*/
};
//login
const loginUserCtrl= async(req,res)=>{
    const {email,password}=req.body;
    try{
        //check if email exist
        const userFound=await User.findOne({email})
        if(!userFound)
        return next(new AppErr("Invalid credential",400))
        //check for password validity
        const isPasswordMatch=await bcrypt.compare(password,userFound.password)
        if(!isPasswordMatch)
        return next(new AppErr("Invalid credential",400))
        res.json({status:"success",
        fullname:userFound.fullname,
        id:userFound._id,
        token:generateToken(userFound._id),
    })
    }catch(error){
        res.json(error);
    }
};

//profile
const userProfileCtrl=async(req,res)=>{
    //how to get token from header
    //console.log(req.headers)
    /*const result=verifyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTNiOWIzZGQ5ZDg5YjNjNmEwNjNkYSIsImlhdCI6MTY5Mjc3NTc2NywiZXhwIjoxNjkzNjM5NzY3fQ.yyXYgYRz4fXqzShIdtonPRQdHgyKVn3ImdAlQIEj2fc");
    console.log(result)*/
    console.log(req.user)
    
    try{
        const user=await User.findById(req.user)
        res.json(user)
    }catch(error){
        res.json(error);
    }
}
//delete
const deleteUserCtrl = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.user);
        res.status(200).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        next(new AppErr('not done', 403));
    }
};

const updateUserCtrl=async(req,res,next)=>{
    try{
        //check if email exist
        if(req.body.email){
            const userFound=await User.findOne({email:req.body.email})
        if(userFound) return next(new AppErr('Email is taken or u already logged in',400))
        }
        
        //check if user is updating the password
        if(req.body.password){
            const salt=await bcrypt.genSalt(10);
            const hashedPassword=await bcrypt.hash(req.body.password,salt);
            //update the user
            const user=await User.findByIdAndUpdate(
            req.user,
            {
                password:hashedPassword,
            },
            {
                new:true,
                runValidators:true,
            })
            //send the response
          return  res.status(200).json({
                status:"success",
                data:user,
            })
        }
        const user=await User.findByIdAndUpdate(req.user,req.body,{
            new:true,
            runValidators:true,
        })
        //send the response
        res.status(200).json({
            status:"success",
            data:user,
        })
    }catch(error){
        res.json(error);
    }
}
module.exports={registerUserCtrl,
    loginUserCtrl,
    userProfileCtrl,
    deleteUserCtrl,
    updateUserCtrl
};



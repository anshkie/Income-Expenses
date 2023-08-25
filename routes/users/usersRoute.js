const express=require('express');
const { registerUserCtrl, loginUserCtrl, userProfileCtrl, deleteUserCtrl, updateUserCtrl } = require('../../controllers/users/usersCtrl');
const isLogin = require('../../middlewares/isLogin');
const usersRoute=express.Router();


//POST/api/v1/users/register
usersRoute.post("/register",registerUserCtrl)/* async(req,res)=>{
    try{
        res.json({msg:"Register route"})
    }catch(error){
        res.json(error);
    }
});*/
//POST/api/v1/users/login
usersRoute.post("/login",loginUserCtrl);
//POST/api/v1/users/profile/
usersRoute.get("/profile/",isLogin,userProfileCtrl);
//delete/api/v1/users/
usersRoute.delete('/',isLogin,deleteUserCtrl);
//Put/api/v1/users/:id
usersRoute.put('/',isLogin,updateUserCtrl);

//get/api/v1/users/profile/id
/*usersRoute.get('/profile/:id',async(req,res)=>{
    try{
        res.json({msg:"Profile route"})
    }catch(error){
        res.json(error);
    }
});
//PUT/api/v1/users/profile/id
usersRoute.put('/profile/:id',async(req,res)=>{
    try{
        res.json({msg:" update Profile route"})
    }catch(error){
        res.json(error);
    }
});
//api/v1/users/delete/id
usersRoute.delete('/delete/:id',async(req,res)=>{
    try{
        res.json({msg:"Delete route"})
    }catch(error){
        res.json(error);
    }
});
//GET/api/v1/accounts/:id
usersRoute.get('/:id',async(req,res)=>{
    try{
        res.json({msg:"Get Account all route"})
    }catch(error){
        res.json(error);
    }
});*/



module.exports=usersRoute;
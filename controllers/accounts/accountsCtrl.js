const Account = require("../../model/Account");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");

//create
const createAccountCtrl=async(req,res)=>{
    const {name,initialBalance,accountType,notes}=req.body;
    try{
        //1. Find the logged in user
        const userFound=await User.findById(req.user)
        if(!userFound) return next(new AppErr('User not found',404))
        //2. Create the account
        const account=await Account.create({
            name,
            initialBalance,
            accountType,
            notes,
            createdBy:req.user,
        })
        //3. push the account into users accounts field
        userFound.accounts.push(account._id);
        //4. resave the user
        await userFound.save();
        res.json({status:"Success",
                   data:account, 
    })
    }catch(error){
        res.json(error);
    }
};
//for all
const getAccountCtrl=async(req,res)=>{
    try{
        const accounts=await Account.find();
        res.json(accounts)
    }catch(error){
        res.json(error);
    }
};
//single
const getAccountsCtrl=async(req,res)=>{
    try{
        //find the id from params
       /* const {id}=req.params;
        const accounts=await Account.findById(id).populate('transactions')
        res.json({
            status:"success",
            data:account,
        })*/
        const accounts=await Account.find();
    }catch(error){
        res.json(error);
    }
}
const updateAccountCtrl=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const account=await Account.findByIdAndUpdate(id,req.body,{
            new:true,
            runValidators:true,
        })
        res.json({
            status:"success",
            data:account
        })
    }catch(error){
        next(new AppErr('not updates',404))
    }
}
const deleteAccountCtrl=async(req,res)=>{
    try{
        const {id}=req.params
        await Account.findByIdAndDelete(id);
        res.status(200).josn({
            status:"success",
            data:null,
        })
        res.json({msg:"DELETE Account route"})
    }catch(error){
        res.json(error);
    }
}
module.exports={createAccountCtrl,
                getAccountCtrl,
                getAccountsCtrl,
                updateAccountCtrl,
                deleteAccountCtrl}
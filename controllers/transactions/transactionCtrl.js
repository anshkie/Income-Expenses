const Account = require("../../model/Account");
const Transaction = require("../../model/Transaction");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");

//create
const createTransactionCtrl=async(req,res,next)=>{
    try{
        const {name,amount,notes,transactionType,account,category}=req.body;
        //1.Find User
        const userFound=await User.findById(req.user)
        if(!userFound) return next(new AppErr('User not found',404))
        //2. Find the Account
        const accountFound=await Account.findById(account)
        if(!accountFound) return next(new AppErr('Account not found',404))
        //3. Create the transaction
        const transaction=await Transaction.create({
            amount,
            notes,
            account,
            transactionType,
            category,
            name
        })
        //4.Push the transaction to the account
        accountFound.transactions.push(transaction._id);
        //5.resave the account
        await accountFound.save()
        res.json({status:"Success",data:transaction})
    }catch(error){
        res.json(error);
    }
}
//all
const getTransactionsCtrl=async(req,res)=>{
    try{
        res.json({msg:"get Transaction y route"})
    }catch(error){
        res.json(error);
    }
}
//single
const getTransactionCtrl=async(req,res)=>{
    try{
        res.json({msg:"get Transaction route"})
    }catch(error){
        res.json(error);
    }
}
module.exports={
    createTransactionCtrl,
    getTransactionsCtrl,
    getTransactionCtrl
}
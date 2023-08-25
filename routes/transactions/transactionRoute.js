const express=require('express');
const { createTransactionCtrl, getTransactionsCtrl, getTransactionCtrl } = require('../../controllers/transactions/transactionCtrl');
const isLogin = require('../../middlewares/isLogin');
const transactionRoute=express.Router();

transactionRoute.post('/',isLogin,createTransactionCtrl);
//GET/api/v1/transactions
transactionRoute.get('/',getTransactionsCtrl);
//DELETE/api/v1/transactions/:id
transactionRoute.delete('/:id',async(req,res)=>{
    try{
        res.json({msg:"DELETE transaction route"})
    }catch(error){
        res.json(error);
    }
});
//put/api/v1/accounts/:id
transactionRoute.put('/:id',async(req,res)=>{
    try{
        res.json({msg:"update transaction route"})
    }catch(error){
        res.json(error);
    }
});
//GET/api/v1/transactions/:id
transactionRoute.get('/:id',getTransactionCtrl);
module.exports=transactionRoute;
const express=require('express');
const { createAccountCtrl, getAccountCtrl, getAccountsCtrl, updateAccountCtrl, deleteAccountCtrl } = require('../../controllers/accounts/accountsCtrl');
const isLogin = require('../../middlewares/isLogin');
const accountsRoute=express.Router();

//POST/api/v1/accounts
accountsRoute.post('/',isLogin,createAccountCtrl);
//DELETE/api/v1/accounts/:id
accountsRoute.delete('/:id',deleteAccountCtrl);
//PUT/api/v1/accounts/:id
accountsRoute.put('/:id',updateAccountCtrl);
//GET/api/v1/accounts
accountsRoute.get('/',getAccountCtrl);
//GET/api/v1/accounts/id
accountsRoute.get('/:id',getAccountsCtrl)
module.exports=accountsRoute;
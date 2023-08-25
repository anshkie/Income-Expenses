const express=require('express');
const usersRoute = require('./routes/users/usersRoute');
const transactionRoute = require('./routes/transactions/transactionRoute');
const accountsRoute = require('./routes/accounts/accountsRoute');
const globalErrHandler = require('./middlewares/globalErrHandler');
require("./config/dbConnect")

const app=express();

//middlewares
app.use(express.json())//pass incoming data
//routes

//user route
app.use('/api/v1/users',usersRoute);
app.use('/api/v1/transactions',transactionRoute)
app.use('/api/v1/accounts',accountsRoute)
//POST/api/v1/users/register
/*app.post('/api/v1/users/register',async(req,res)=>{
    try{
        res.json({msg:"Register route"})
    }catch(error){
        res.json(error);
    }
})*/;
//delete/api/v1/users/:id
/*app.delete('/api/v1/users/:id',async(req,res)=>{
    try{
        res.json({msg:"delete route"})
    }catch(error){
        res.json(error);
    }
});*/
//Put/api/v1/users/:id
/*app.put('/api/v1/users/:id',async(req,res)=>{
    try{
        res.json({msg:"update profile route"})
    }catch(error){
        res.json(error);
    }
});*/

//POST/api/v1/users/login
/*app.post('/api/v1/users/login',async(req,res)=>{
    try{
        res.json({msg:"Login route"})
    }catch(error){
        res.json(error);
    }
});*/
//POST/api/v1/users/profile/id
/*app.post('/api/v1/users/profile/:id',async(req,res)=>{
    try{
        res.json({msg:"Profile route"})
    }catch(error){
        res.json(error);
    }
});*/
//get/api/v1/users/profile/id
/*app.get('/api/v1/users/profile/:id',async(req,res)=>{
    try{
        res.json({msg:"Profile route"})
    }catch(error){
        res.json(error);
    }
});*/
//api/v1/users/delete/id
/*app.delete('/api/v1/users/delete/:id',async(req,res)=>{
    try{
        res.json({msg:"Delete route"})
    }catch(error){
        res.json(error);
    }
});*/
//PUT/api/v1/users/profile/id
/*app.put('/api/v1/users/profile/:id',async(req,res)=>{
    try{
        res.json({msg:"Profile route"})
    }catch(error){
        res.json(error);
    }
});*/

//account routes
//POST/api/v1/accounts
/*app.post('/api/v1/accounts',async(req,res)=>{
    try{
        res.json({msg:"Account route"})
    }catch(error){
        res.json(error);
    }
});*/
//GET/api/v1/accounts/:id

//DELETE/api/v1/accounts/:id
/*app.delete('/api/v1/accounts/:id',async(req,res)=>{
    try{
        res.json({msg:"DELETE Account route"})
    }catch(error){
        res.json(error);
    }
});*/

//PUT/api/v1/accounts/:id
/*app.put('/api/v1/accounts/:id',async(req,res)=>{
    try{
        res.json({msg:"Update Account route"})
    }catch(error){
        res.json(error);
    }
});*/
//GET/api/v1/accounts
/*app.get('/api/v1/accounts',async(req,res)=>{
    try{
        res.json({msg:"Get Account route"})
    }catch(error){
        res.json(error);
    }
});*/
//GET/api/v1/accounts/:id
/*app.get('/api/v1/accounts/:id',async(req,res)=>{
    try{
        res.json({msg:"Get Account all route"})
    }catch(error){
        res.json(error);
    }
});*/

//transaction route]

/*//POST/api/v1/transactions
app.post('/api/v1/transactions',async(req,res)=>{
    try{
        res.json({msg:"Create Transaction route"})
    }catch(error){
        res.json(error);
    }
});*/
//GET/api/v1/transactions/:id
/*app.get('/api/v1/transactions/:id',async(req,res)=>{
    try{
        res.json({msg:"get Transaction route"})
    }catch(error){
        res.json(error);
    }
});*/
/*//GET/api/v1/transactions
app.get('/api/v1/transactions',async(req,res)=>{
    try{
        res.json({msg:"get Transaction y route"})
    }catch(error){
        res.json(error);
    }
});*/
//DELETE/api/v1/transactions/:id
/*app.delete('/api/v1/transactions/:id',async(req,res)=>{
    try{
        res.json({msg:"DELETE transaction route"})
    }catch(error){
        res.json(error);
    }
});*/
//put/api/v1/accounts/:id
/*app.put('/api/v1/transactions/:id',async(req,res)=>{
    try{
        res.json({msg:"update transaction route"})
    }catch(error){
        res.json(error);
    }
});*/
//Error handlers
app.use(globalErrHandler);
//listen to server
const PORT=process.env.PORT||9000;
app.listen(PORT,console.log('server is listening'))
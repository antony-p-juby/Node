const express=require('express');
const cors=require('cors');
const body_parser=require('body-parser');
const userRouter=require('./routers/user.router');
const DataRouter=require('./routers/data.router');

const app=express();

app.use(cors());
app.use(body_parser.json());
app.use('/',userRouter);
app.use('/',DataRouter);

module.exports=app;
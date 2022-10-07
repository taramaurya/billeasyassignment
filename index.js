const express = require('express');
const app=express();
const employee = require('./routes/employee');
require('./db/db')


app.use(express.urlencoded({
    extended:true
  }))
app.use(express.json());
app.use(employee);

app.listen(5000,()=>{
    console.log("connected");
});
const express = require('express');
const employee=new express();
const {add,get,filter} =require('../controller/employee')

employee.post('/employee',add);
employee.get('/employee',get);
employee.post('/employeefilter',filter);

module.exports=employee;
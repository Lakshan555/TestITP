const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema({

    name : {

        type : String,
        required : true // this is back end validation 

    },
    email : {
        type : String,
        required : true
    },
    address : {
        type: String,
        required : true
    },
    mobileNo : {
        type: String,
        required : true
    },
    designation: {
        type: String,
        required : true
    },
    salary: {
        type: String,
        required : true
    }, 
    userName: {
        type: String,
        required : true
    },
     password: {
        type: String,
        required : true
    }


})

module.exports = mongoose.model('Employee',employeeSchema);
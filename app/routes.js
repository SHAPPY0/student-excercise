var express=require('express');
var Student = require('./models/studentmodel');
var bodyParser=require('body-parser'); 
var apiRoutes = express.Router();
 

 /*==========add Students==========*/
 apiRoutes.post('/student/create', function(req,res){
    var StuAddrss={hn:req.body.hn,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country};
   var addStudent=new Student({
        name:req.body.name,
        age:req.body.age,
        address:StuAddrss
   });
   addStudent.save(function(err,data){
    if(err){res.json({success:false, msg:"Error"})}
    else{
        res.json(data);
        console.log(data)
    }
   })
 })
 /*============get all students==========*/
 apiRoutes.get('/student/all', function(req,res){
    Student.find({},function(err,data){
        if(err){res.json({success:false, msg:"Error"})}
            else{
                res.json(data);
            }
    })
 });
 /*========get  address of student=====*/
 apiRoutes.get('/student/:id', function(req,res){
    Student.findOne({_id:req.params.id}, function(err,data){
        if(err){res.json({success:false, msg:"Error"})}
            else{
                res.json(data)
            }
    })
 })

 /*===============update address======*/
 apiRoutes.put('/student/add/address/:id', function(req,res){
    var stuAddress={hn:req.body.address[0].hn, city:req.body.address[0].city, state:req.body.address[0].state, country:req.body.address[0].country}
    console.log(stuAddress) 
    Student.update({_id:req.params.id}, {address:stuAddress},function(err,data){
        if(err){res.json({success:false, msg:"Error"})}
            else{
                res.json(data)
            }
    })
 })
module.exports = apiRoutes;


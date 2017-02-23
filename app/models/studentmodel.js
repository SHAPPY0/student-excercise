var mongoose=require('mongoose');  
var Schema=mongoose.Schema; 

var studentSchema=new Schema({ 
    name:{type:String},
    age:{type:Number},
    address:[ { hn:String, city:String, state:String, country:String}]
});
  
module.exports=mongoose.model('student', studentSchema);
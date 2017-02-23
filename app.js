var express        =require('express');
var app            =express();
var bodyParser     =require('body-parser');
var morgan         =require('morgan');
var mongoose       =require('mongoose'); 
var config         =require('./config/database'); 
var blogModel      =require('./app/models/studentmodel');
var port           =process.env.PORT||3000; 
var router         =require('./app/routes');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 
 
app.use(morgan('dev'));  

// for static files
app.use(express.static(__dirname+ "/public"));
// db connection
mongoose.connect(config.database);
//initialize apis
app.use('/api', router);


//start server
app.listen(port)
console.log('Server strated:' +port );

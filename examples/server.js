var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

var userRouter = express.Router();

userRouter.use(cookieParser('12345-67890-09876-54321'));

userRouter.use(bodyParser.urlencoded({extended: false}));
userRouter.use(bodyParser.json());

//home
userRouter.route('')
.all(function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  next();
})
.get(function(req, res, next) {
  res.end("Hello World");
});

app.use('/user', userRouter);

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}`);
});

var express = require('../node_modules/express');
var bodyParser = require('../node_modules/body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
var loginController = require('./controllers/login-controller');
var registerController = require('./controllers/register-controller');
var postsController = require('./controllers/posts-controller');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post('/api/register', registerController.register);
app.post('/api/login', loginController.login);

app.get('/api/posts', postsController.getPosts);

app.use(express.static('../src/'));
app.listen(8000, function (err) {
    if(!err){
        console.log("Server running on port 8000")
    } else {
        console.log(err);
    }
});
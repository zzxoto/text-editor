var express = require('express');
var app = express();
app.use(express.static('dist'));
app.listen(4000, ()=> console.log('server running at 4000'));
         
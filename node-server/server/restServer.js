const express = require('express');
let app = express();

let fun = function(request,response){
  response.send('Hello world');
};

app.get('/', fun);

app.listen(80,function(){
  console.log('express server started at port 300')
});

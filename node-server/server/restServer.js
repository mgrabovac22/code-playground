const express = require('express');
const app = express();

let fun = function(request, response) {
  response.send('Hello world');
};

app.get('/', fun);

const list =  [
  {
    "firstName": "Luka",
    "lastName": "Gvozdanic",
    "username": "Lux22",
    "email": "lux.2022gvozd@gmail.com",
    "age": 26,
    "registrationDate": "June, 20th 2018."
  },
  {
    "firstName": "Petar",
    "lastName": "Pocekalo",
    "username": "PepGuard",
    "email": "pepocekalo12@gmail.com",
    "age": 19,
    "registrationDate": "July, 28th 2012."
  },
  {
    "firstName": "Dora",
    "lastName": "Lupanic",
    "username": "Dominitrix",
    "email": "dominilpc@gmail.com",
    "age": 20,
    "registrationDate": "March, 30th 2016."
  },
  {
    "firstName": "Stjepan",
    "lastName": "Bogdanic",
    "username": "StipGdanic",
    "email": "bogdanPan",
    "age": 17,
    "registrationDate": "October, 23rd 2015."
  },
  {
    "firstName": "Marko",
    "lastName": "Luptic",
    "username": "MarkicLu",
    "email": "lupilu212@gmail.com",
    "age": 19,
    "registrationDate": "February, 1st 2022."
  }
];

app.get('/users', (req, res) => {
  res.json(list);
});

app.listen(3000, () => {
  console.log('Express server started at port 3000');
});

  

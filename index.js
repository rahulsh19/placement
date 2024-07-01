const express = require('express');
const app = express();
const PORT = 8000;
const mysql = require('mysql');

const con = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password :'rahul@4495',

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.listen(PORT, () => console.log('server started'))


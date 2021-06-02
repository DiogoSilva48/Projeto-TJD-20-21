const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

// app.use("/teste", express.static(__dirname + '/teste'));



app.use(function (req, res, next){
    res.status(404).sendFile(path.join(__dirname + '/frontend/no_connection.html'));
  })


  app.listen(process.env.PORT || 80,function(error){
      if (!error){
            console.log(__dirname);
      }
  });
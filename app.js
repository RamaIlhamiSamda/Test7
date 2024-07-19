const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const port = 3000

let records = [];

//Get all students
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')

});


app.listen(port,()=>{
  console.log(`app is listening on port ${port}`)
})

module.exports = app




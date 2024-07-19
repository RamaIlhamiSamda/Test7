const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

var path = require("path");

router.get("/", (req, res) => {
  // res.sendFile(__dirname + '/views/index.html')
  // res.render('indexx.ejs');
  // res.send('bababa')
  // res.sendFile(path.join(__dirname, './index.html'));
  // res.sendFile(__dirname + './public/index.html')
  // res.sendFile(path.join(__dirname, '../index.html'));
  router.get('/', (req, res) => {
    // Assuming your HTML file is located in a folder named 'public'
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
});

module.exports.handler = serverless(app);



const util = require('util');
const encoder = new util.TextEncoder('utf-8');
const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ljh040325:jh9171w!!@youtube.t3qdvoy.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connectred..."))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 4000;

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({success: true});
})

app.post('/webhook', (req, res) => {
  console.log('POST: /');
  let payload = req.body;
  console.log(req.body);
  res.send({success: true, payload: payload});
})


app.listen(port, ()=>{
  console.log(`Server is running at port: ${port}`);
})
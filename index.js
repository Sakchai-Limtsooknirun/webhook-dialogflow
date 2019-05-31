const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 4000;

// Import the appropriate class
const { WebhookClient } = require('dialogflow-fulfillment');

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({success: true});
})

app.post('/webhook', (req, res) => {
  console.log('POST: /');
  let payload = req.body;
  console.log(req.body);

   //Create an instance
   const agent = new WebhookClient({request: req, response: res});

   console.log('agentVersion: '+agent.agentVersion);
   console.log('intent: '+agent.intent);
   console.log('locale: '+agent.locale);
   console.log('query: ',agent.query);
   console.log('session: ',agent.session);
   
  function location(agent) {
    agent.add('Hiiiii Dev');
  }

  let intentMap = new Map();
  intentMap.set('Location', location);
  agent.handleRequest(intentMap);
  // res.send({success: true, payload: payload});
})

app.listen(port, ()=>{
  console.log(`Server is running at port: ${port}`);
})
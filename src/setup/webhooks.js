module.exports = (client) => {
<<<<<<< HEAD

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    app.use(bodyParser.json());
=======
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
>>>>>>> 0887b14624475e70c72a460e25b13d989dc7938d

    app.post('/webhooks/gad/thisisthetokenfortheghreofefdvdfvefhr4g5r41ds21vg', () => {
        client.logs.send(`Something has been pushed to the github repo`)
        console.log("Something has been pushed to the repo")
        require('child_process').exec('git pull origin master')
    })

<<<<<<< HEAD
    app.listen(4002, function () {
        console.log("Listening on port 3002");
    });
=======
  app.listen(4002, function () {
    console.log("Listening on port 4002");
  });
>>>>>>> 0887b14624475e70c72a460e25b13d989dc7938d

}

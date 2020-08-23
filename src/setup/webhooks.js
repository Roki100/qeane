module.exports = (client) => {

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');

    app.use(bodyParser.json());

    app.post('/webhooks/gad/thisisthetokenfortheghreofefdvdfvefhr4g5r41ds21vg', () => {
        client.logs.send(`Something has been pushed to the github repo`)
        console.log("Something has been pushed to the repo")
        require('child_process').exec('git pull origin master')
    })

    app.listen(4002, function () {
        console.log("Listening on port 3002");
    });

}

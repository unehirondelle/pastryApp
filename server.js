var port = 8000,
    express = require('express'),
    app = express();
app.use('/', express.static('public/'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'public/index.html/'));
});
app.listen(port);
console.log('Now serving http://localhost:' + port + '/index.html');
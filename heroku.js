var express = require('express'),
    http = require('http')
    path = require('path');


var appPath = path.normalize(__dirname + '/dist')

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.static(appPath));


var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

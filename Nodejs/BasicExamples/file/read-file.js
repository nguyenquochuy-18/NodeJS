const http = require('http');
const fs = require('fs');
http
  .createServer(function (req, res) {
    fs.readFile('demohtml.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(3001);


http
    .createServer(function(req, res) {
         
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<form action="#" method="post" enctype="mutipart/form-data">')
            res.write('<input name="uploadfile" type=text" value=""/>');
            res.write('</form>');
            return res.end();
    })
    .listen(3002);


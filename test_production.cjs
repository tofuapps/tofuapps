const express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/docs'));
app.listen(port);
console.log('Server started on port ' + port);
console.log('http://localhost:' + port);

var express = require('express');
var route = require('./Routes/route');
var app = express();
require('./Config/config');
require('./Config/connection');

app.use(route);
app.listen(PORT, () => console.log("Server listening port on ", PORT));

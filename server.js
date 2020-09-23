const express = require("express");
const bodyparser = require("body-parser");
const parksRoute = require("./routes/parks");


var app = express();
app.use(bodyparser.json());

app.use("/parks", parksRoute);


app.listen(3000);


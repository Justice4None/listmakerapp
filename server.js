var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
var db = require("./models/index.js");

db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function(){
        console.log("Listening on port " + PORT);
    });
});
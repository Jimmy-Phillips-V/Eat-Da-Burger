var express = require("express")
var app = express()
// var methodOverride = require("method-override")
var bodyParser = require("body-parser")
var routes = require("./controllers/burgers_controller")

var connection = require("./config/connection.js")

var exphbs = require("express-handlebars")
app.use(routes)
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers", function(err, result) {
        res.render("index", {items: result})
    })
})

app.listen(3000)
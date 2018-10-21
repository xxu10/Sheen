const sheen = require("../index");
const App = new sheen.Controller("/");

App.get("", function (res) {
    res.render ("index");
})
App.get("home", function (res) {
    res.body = "XXXXXX";
})
module.exports = App;

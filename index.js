const main = require("./lib/main");

module.exports = {
    Controller: main.Controller,
    Schedule: main.Schedule,
    config: main.config,
    utils: main.utils,
    Log: main.Log
}
require("./lib/index");

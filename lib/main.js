const config = require("config");
const utils = require("./utils");
const log = require("./log");
const schedule = require("./schedule");
const controller = require("./controller");

module.exports = {

    config: function (name) {
        if (name) return config.get(name);
        return config;
    },
    utils: utils,
    Log: log,
    Schedule: schedule,
    Controller: controller
}


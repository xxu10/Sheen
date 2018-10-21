const schedule = require('node-schedule');

module.exports = class {
    constructor() {
        this.time = "";
    }
    start() {}
    _run() {
        schedule.scheduleJob(this.time, this.start);
    }
}

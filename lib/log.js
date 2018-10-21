const log4js = require('log4js');

log4js.configure({
    appenders: {
        stdout: {
            type: "stdout"
        },
        error: {
            type: 'dateFile',
            filename: './logs/error.log'
        },
        info: {
            type: 'dateFile',
            filename: './logs/info.log'
        }
    },
    categories: {
        default: {
            appenders: ["info", "stdout"],
            level: 'info'
        },
        err: {
            appenders: ['error', "stdout"],
            level: 'error'
        }
    },
    pm2: true,
    pm2InstanceVar: "pm2-mode"
});

const log = log4js.getLogger('error');
const log2 = log4js.getLogger('info');

module.exports = {
    error() {
        log.error(...arguments);
    },
    info() {
        log2.info(...arguments);
    },
    warm() {
        log2.info(...arguments);
    }
};

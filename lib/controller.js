const Router = require("koa-router");


module.exports = function (prefix) {
    let opts = {};
    if (prefix) opts.prefix = prefix;
    return new Router(opts);
}

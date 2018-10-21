const Koa = require("koa");
const render = require("koa-art-template");
const server = require("koa-static");
const KoaBody = require("koa-body");

const {
    Log,
    config,
    utils
} = require("./main");

const port = config("port") || 3000;
const rootPath = process.cwd();
const app = new Koa();
let models = {};

app.root = rootPath;

render(app,{
       root: app.root + "/views",
       extname: ".html",
       debug: config.debug
});

app.use(server(app.root + "/public"));
app.use(KoaBody(config.body));

let middleware_list = utils.getFileList(app.root + "/middleware");
middleware_list.forEach(item => {
    try {
        let middleware_list = require(app.root + "/middleware/" + item);
        if (middleware_list) {
            app.use(middleware_list)
        }
    } catch (error) {
        Log.info(error.message);
    }
});

try {
    let application = require(app.root + "/app.js");
    application(app);
} catch (error) {
     Log.info(error.message);
}

let controller_list = utils.getFileList(app.root + "/controller");
controller_list.forEach(item => {
    try {
        let controller_item = require(app.root + "/controller/" + item);
        if (controller_item) {
            app.use(controller_item.routes()).use(controller_item.allowedMethods());
        }
    } catch (error) {
        Log.info(error.message);
    }
});

app.use(async function (ctx) {
    await ctx.render("err");
});
app.on('error', (err, ctx) => {
    Log.warm('server error', err, ctx)
});
app.listen(port, function () {
    Log.info("app is now running on:" + port)
});
process.on('SIGINT', function () {
    process.exit();
});
process.on('exit', (code) => {
    Log.info("app is now exiting:" + code)
});
process.on('uncaughtException', (code) => {
    Log.info("app has already exited:" + code)
});
module.exports = app;

let schedule_list = utils.getFileList(app.root + "/schedule");
schedule_list.forEach(item => {
    try {
        let schedule_item = require(app.root + "/schedule/" + item);
        if (schedule_item) new schedule_item()._run();
    } catch (error) {
        // Log.info(error.message);
    }
});

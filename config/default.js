module.exports = {
    name: "sheen.js",
    port: "3001",
    body: {
        multipart: true,
        strict: false,
        jsonLimit: '10mb',
        formLimit: '10mb',
        textLimit: '10mb'
    },
    debug: true,
    dbconfig: {},
    redis: {}
}

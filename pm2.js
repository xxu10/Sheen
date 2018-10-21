module.exports = {
    apps: [{
        name: 'sheen.js',
        script: './app.js',
        watch: false, 
        ignore_watch: ['node_modules', 'build', 'logs'],
        out_file: '/logs/out.log', 
        error_file: '/logs/error.log', 
        max_memory_restart: '200M', 
        env: {
            NODE_ENV: 'production'
        },
        exec_mode: 'cluster',
        instances: 'max', 
        autorestart: true 
    }]
}

const fs = require("fs");
const axios = require("axios");

module.exports = {
    
    getFileList(dir_path) {
        let file_list = []
        if (fs.existsSync(dir_path)) {
            file_list = fs.readdirSync(dir_path);
        }
        return file_list;
    },
    
    curl(url, opts) {
        return axios(Object.assign({url}, opts));
    }
}

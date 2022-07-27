const path = require('path')

module.exports = {
    devServer : {
        historyApiFallback: true
    },
    entry : path.resolve(__dirname, "./src/index.js")
}
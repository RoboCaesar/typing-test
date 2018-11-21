const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const outPath = path.join(__dirname, 'public');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer:  {
        contentBase: outPath
    }
});
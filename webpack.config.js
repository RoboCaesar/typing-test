const path = require('path');
const outPath = path.join(__dirname, 'public');

module.exports = {
    //where should webpack start?
    entry: "./src/app.js",
    output: {
        path: outPath,
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            //'use' lets you use an array of loaders, rather than just a single one.
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:  {
        contentBase: outPath
    }
}
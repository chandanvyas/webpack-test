var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './js/button1.js',
    output: {
        path: path.resolve(__dirname, 'test1'),
        filename: 'bundle.js',
        publicPath: "/test1"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'                    
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            
        })
    ]
};
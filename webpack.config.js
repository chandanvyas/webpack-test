var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./js/button1.js','./js/button2.js','./resource/style.css'],
    output: {
        path: path.resolve(__dirname, 'test2'),
        filename: 'bundle.js',
        publicPath: "/test2"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_module/,
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
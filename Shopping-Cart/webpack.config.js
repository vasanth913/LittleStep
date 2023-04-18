const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
     mode: "development",
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname,'dist'),
         filename: 'bundle.js'
     },
     module: {
         rules: [
             {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
             },
             {
                 test: /\.(js|jsx)$/,
                 exclude: /(node_modules)/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         "presets": [
                             "@babel/preset-env",
                             "@babel/preset-react"
                          ],
                          "comments": false
                     }
                 }
             }
         ]
     },
     resolve: {
        alias : {
            src: path.resolve(__dirname, 'src/')
        }
     },
     plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') })]
}
//entry point-where does our app kick off-----> src/app.js
//where the output file bundle.js gde?Thats going to allow us to run webpack successfuly
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
/* absoulute path to public folder */

module.exports = env =>{
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('styles.css')

 return { /*path is the absolute path on our machine to where u want to output that webpack file.Where we want to put bundle.js file?I want to put bundle.js inside of the public folder   */
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public','dist'),
        filename: 'bundle.js'
    },
    module: {
        rules : [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
    {
        test: /\.s?css$/,
        use: CSSExtract.extract({
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        })
    }]
    },
    plugins: [
        CSSExtract
    ],
    devtool: isProduction?'source-map':'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true, /*this tells that we're going to be handling routing via our client-side code, and this return this page for all 404 routes  */
        publicPath: '/dist/'
    }
}
}


/* loaderi govoryat webpacky convert SCss to old CSS */

/* run some file whenever webpack encouters styles.css,
 style-loader it takes that css thats in js and it adds it to the DOM, use allows us
 to provide an array of loaders*/
 /* whenever webpack ecounters a css file it is going to read that file in its going to
 dump its contents into the DOM */

 /* a new loader-->when you encouter SCSS file go ahead and compile it
 and compiler itself*/

/* webpack-dev-server is generating bundle.js but its not writing physical file and serving that up, it serving it up from memory */

/* devtool: 'cheap-module-eval-source-map' shtoby error videt gde imenno */
/*devServer eto kak live-server,contentBase eto gde index.html zhivet  */

/* whenever you see a file that ends in js  and its not in the node_modules folder
go ahead and run it through Babel,it includes app.js and other files app.js might import*/

// loader-- lets you custmoize the behaivour of  webpack when it loads a given file
// converting ES6 to ES5 JSX to regular old Javascript
//babel-cli allows you to run babel from comand line and babel-core module allows you
//to run babel from tools like webpack,babel-loader is a webpack plugin,its going to
//allow us to teach webpack how to run babel when webpack sees certaint files
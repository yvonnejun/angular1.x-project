var htmlWebpackPlugin = require('html-webpack-plugin');//专门处理入口文件模板index.html的插件模块
var extractPlugin = require('extract-text-webpack-plugin');//从bundle.js中提取css文件模块的插件模块
var path = require('path');//解析绝对路径用的插件模块赋值给变量
var webpack = require('webpack');
module.exports = {
    entry:{
        app:'./src/app/app.js',//入口文件，入口名app-->[name]获取
        framework:'./src/lib/vendor/framework.js',
    },
    output:{
        path:path.resolve(__dirname,'dist'),//出口目录，所有打包文件都会生成在dist下
        filename:'[name].bundle.js'//指定的打包文件名，可带前缀路径
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',//默认生成到dist目录下的入口文件index.html(这句可省略)
            template:'./src/index.html',//以src/下的index.html作为模板生成到dist/下作为入口文件index.html
            inject:'body'//把通过入口js文件app.js打包生成的bundle.js作为外链插入到入口的index.html<body>标签中,该属性还可取值'head'——插入到<head>标签中，取值true——插入到index.html中，false——不通过外链形式插入到index.html中
        }),
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:function(){//postcss在W2中也当插件来写，在W1中要单独声明
                    return [
                        require('autoprefixer')({//postcss中的一个功能性插件模块——自动为css3中的需要做兼容的属性加上浏览器前缀
                            broswers:['last 5 version']//给最近访问的5个浏览器加上css3属性的浏览器前缀
                        })
                    ]
                }
            }
        }),
        new extractPlugin('default.css'),//从bundle.js中提取导入到app.js入口中的css模块单独形成一个叫default.css的文件通过外链引入到入口index.html文件中
        new webpack.ProvidePlugin({//jquery包安装后，还需要这个插件来引入一下，并在index.html中用<script>标签引入才能生效
            $:'jquery',
            jquery:'jquery'
        })
    ],
    module:{
        loaders:[
            {
                test : /\.js$/,//匹配所有以.js结尾的文件
                loader : 'babel-loader',//用babel处理器转换ES6为ES5
                include:path.resolve(__dirname,'src'),//打包包含src目录
                exclude:path.resolve(__dirname,'node_modules'),//打包不包含依赖包目录
                query:{
                    presets:['latest']//latest可转换所有为ES5，包括ES6,ES7
                }
            },
            {
                test : /\.css$/,//匹配所有以.css结尾的文件
                loader:extractPlugin.extract({fallback:"style-loader",use:"css-loader!postcss-loader"})//用postcss、css、style处理器一次从后往前处理，并用extractPlugin插件提取出导入的css文件模块
            },
            {
                test:/\.html$/,//处理tpl模板——也就是比如指令中导入的template:import tpl from '../../tpl/xx.html'这样的html文件
                loader:'html-loader'
            },
            {
                test:/\.(png|jpg|jpeg)$/i,
                loader:'url-loader',
                query:{}
            }
        ]
    },
    // devtool:'source-map', // 不推荐这种模式，因为会导致chrome调试打断点失效
    devtool:'cheap-source-map', // 推荐这种模式，因为可以打上断点调试
    // devtool:'cheap-module-source-map', // 也可推荐这种模式，打断点也是有效的
    devServer:{//本地服务器配置
        port:8808,//端口号8808
        historyApiFallback:true//404重定向到index.html
    }
}


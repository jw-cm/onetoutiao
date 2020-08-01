module.exports = {
    lintOnSave:false,
    publicPath:"./",
    productionSourceMap:false,  //默认不生成 sourcemap 的文件 就是源代码文件
    // devServer: {
    //     proxy: 'http://tt.linweiqin.com/api/tt/'
    // }
    devServer: {
        proxy: 'http://localhost:9000'
    }
}
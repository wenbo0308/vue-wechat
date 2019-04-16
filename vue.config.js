/**
 * Created by Lee Wenbo on 2018/11/21.
 */
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    baseUrl:'/',
    css:{
        
    },
    devServer:{
        proxy: {
            '/api': { 
                target: 'http://172.16.0.247:3000',
                // pathRewrite: {'^/api/':''}
            }

        }
    }
    // resolve: {
    //     extensions: ['.js', '.vue', '.json'],
    //     alias: {
    //         '@': resolve('src'),
    //         'src': resolve('src'),
    //         'common': resolve('src/common'),
    //         'components': resolve('src/components'),
    //         // 'api': resolve('src/api'),
    //         // 'base': resolve('src/base')
    //     }
    // },
}

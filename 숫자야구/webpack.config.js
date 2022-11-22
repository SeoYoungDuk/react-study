const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'number-baseball-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    //입력
    entry: {
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {  // 자동으로 옛날 브라우저를 지원해주는 것인데, 그 설정을 보다 자세히 할 수 있음
                            browsers: ['> 5% in KR', 'last 2 chrome version'],  // 최근 2개 버전의 chrome 까지만 호환
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            }
        }],
    },

    plugins: [
        new RefreshWebpackPlugin()  // 플러그인이 설정 된 것으로, 앞으로 빌드 할 때마다 실행하게 된다.
    ],

    // 출력
    output: {
        path: path.join(__dirname, 'dist'),
        // path.join -> 경로를 알아서 합쳐 준다
        // __dirname -> webpack.config.js 가 있는 lecture 디렉토리 (현재 폴더)
        filename: 'app.js',
        publicPath: '/dist/',
    },

    devServer: {
        // publicPath: '/dist/',  // output 의 publicPath 를 똑같이 작성
        devMiddleware: { publicPath: '/dist' },
        static: {
            directory: path.resolve(__dirname),
        },
        hot: true,
    },

};
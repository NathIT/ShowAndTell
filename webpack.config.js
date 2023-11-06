const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjectAttributesPlugin = require('html-webpack-inject-attributes-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const getPlugins = (devMode, env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      title: 'InfoTrack',
      template: 'src/index.html',
      hsEnv: JSON.stringify({ ...env }),
    }),
    new HtmlWebpackInjectAttributesPlugin({
      crossorigin: 'anonymous',
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets'),
          to: path.resolve(__dirname, 'dist'),
          toType: 'dir',
        },
      ],
    }),
    new webpack.DefinePlugin({
      HS_ENV: devMode
        ? JSON.stringify('test')
        : JSON.stringify(env && env.value),
    }),
  ];

  if (env && env.analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }
  return plugins;
};

const config = (env, argv) => {
  const devMode = argv.mode !== 'production';

  let buildNr = 0;
  if (!devMode) {
    buildNr = env.buildNr;
    if (!buildNr) throw "env var 'buildNr' not set";
  }

  const config = {
    entry: {
      main: path.join(__dirname, 'src'),
    },
    output: {
      publicPath: devMode
        ? '/'
        : `https://cf.infotrack.com.au/home-screen/${buildNr}/`,
      path: path.join(__dirname, 'dist'),
      filename: devMode ? '[name].js' : '[name]-[contenthash:8].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: '/node_modules/',
          loader: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
          loader: 'file-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: getPlugins(devMode, env),
  };

  if (devMode) {
    config.devServer = {
      static: {
        directory: path.resolve(__dirname, 'src'),
      },
      port: 3000,
      hot: true,
      historyApiFallback: true,
      allowedHosts: 'auto',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': '*',
      },
      proxy: {
        '/services/fulfilmentPortal/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/app/static/*': {
          target: 'http://localhost:3000',
          pathRewrite: {
            '/app/static': '/assets',
          },
        },
        '/service/imenu/api/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/app/proxy-assets/*': {
          target: 'https://stagesearch.infotrack.com.au',
          changeOrigin: true,
        },
        '/Service/InfoTrackGIS/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/app/api/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/scripts/**': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/SecurePages/**': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/Images/**': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/Home/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/micro/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/Support1/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/InMail/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/AutoComplete/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/service/imenu/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/order/PostChaseComment': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/Clio/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/ITrack/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/services/marketplace-api': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          changeOrigin: true,
        },
        '/app/version/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
        '/app/api/*': {
          target: 'https://stagesearch.infotrack.com.au',
          secure: false,
          logLevel: 'debug',
          changeOrigin: true,
        },
      },
    };
  }

  return config;
};

module.exports = config;

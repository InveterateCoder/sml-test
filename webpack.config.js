const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')

function getModuleOption(client = false) {
  return {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              [
                '@babel/preset-env',
                client ? {
                  targets: {
                    chrome: 65,
                  }
                } : {
                    targets: {
                      node: 10
                    }
                  }
              ],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}

module.exports = env => {
  const NODE_ENV = env?.production ? 'production' : 'development'

  console.log(`compiling in ${NODE_ENV} mode...`)

  const base = {
    mode: NODE_ENV,
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: NODE_ENV === 'production' ? undefined : 'source-map',
  }

  const entry = {
    app: ['./client/src/index.tsx']
  }
  const plugins = [
    new copyWebpackPlugin({
      patterns: [
        { from: './client/public', to: '' }
      ]
    })
  ]

  if (NODE_ENV === 'development') {
    entry.app.push('webpack-hot-middleware/client')
    plugins.unshift(new webpack.HotModuleReplacementPlugin())
  }

  const client = {
    entry,
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist', 'public'),
      publicPath: '/'
    },
    module: getModuleOption(true),
    plugins,
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: 'vendor',
      },
    },
  }

  const server = {
    entry: NODE_ENV === 'production' ? './server/server.ts' : './server/server.dev.ts',
    target: 'node',
    externals: [nodeExternals()],
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: getModuleOption(false),
    plugins: [
      new CleanWebpackPlugin(),
    ],
  }

  return [{ ...base, ...server }, { ...base, ...client }]
}
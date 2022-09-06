/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
const { merge } = require('webpack-merge');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const rootDir = path.resolve(__dirname);
const CopyPlugin = require('copy-webpack-plugin');

const staticAssetsToLoad = [
  {
    from: path.resolve(rootDir, 'README.md'),
    to: '..',
  },
  {
    from: path.resolve(rootDir, 'package.json'),
    to: '..',
  },
];

module.exports = (config: unknown, _: any) => {
  //@ts-ignore
  const mergedConfig = merge(config, {
    entry: {
      main: ['./packages/libs/api/icy-graphql-client/src/index.ts'],
    },
    output: {
      filename: 'index.js',
      libraryTarget: 'commonjs',
      path: path.resolve(
        rootDir,
        '../../../../dist/packages/libs/api/icy-graphql-client/src'
      ),
    },
    devtool: 'inline-source-map',
    externals: [nodeExternals()],
    externalsPresets: { node: true },
    mode: 'development',
    target: 'node',
    optimization: {
      minimize: false,
      nodeEnv: false,
    },
    plugins: [
      new CopyPlugin({
        patterns: staticAssetsToLoad,
      }),
    ],
  });

  mergedConfig.module.rules = [
    {
      test: /\.([jt])sx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.([jt])sx?$/,
      loader:
        '/Users/alejandro/quicknode/qn-oss/node_modules/ts-loader/index.js',
      exclude: /node_modules/,
      options: {
        configFile:
          '/Users/alejandro/quicknode/qn-oss/packages/libs/api/icy-graphql-client/tsconfig.lib.json',
        transpileOnly: false,
      },
    },
  ];

  return mergedConfig;
};

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: 'current',
          browsers: ['last 2 versions'],
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    //'@babel/plugin-proposal-export-namespace-from',
    //'@babel/plugin-proposal-export-default-from',
    //'@babel/plugin-proposal-optional-catch-binding',
    //'@babel/plugin-proposal-nullish-coalescing-operator',
    //'@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    development: {
      plugins: ['react-refresh/babel'],
    },
    production: {
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            removeImport: true,
          },
        ],
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
  },
};

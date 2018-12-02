module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 9', 'safari >= 7']
        },
        modules: false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-proposal-object-rest-spread',
    'transform-class-properties'
  ],
  env: {
    test: {
      presets: [['@babel/preset-env']],
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  }
}

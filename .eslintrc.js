module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prefer-arrow'
  ],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'prefer-arrow-callback': 2,
    'prefer-template': 2,
    'no-template-curly-in-string': 2,
  },
}

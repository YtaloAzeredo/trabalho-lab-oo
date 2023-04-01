module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: 'standard',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    '@typescript-eslint/eslint-plugin'
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-useless-constructor': 0
  }
}

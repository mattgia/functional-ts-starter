module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        "prettier/prettier": ['error'],
        "sort-keys": ['error', 'asc', { caseSensitive: true, natural: false }],
        indent: ['error', 4],
        "linebreak-style": ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
    },
}

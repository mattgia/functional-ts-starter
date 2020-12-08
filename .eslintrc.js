/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/immutable-data */
module.exports = {
    env: {
        browser: false,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:functional/external-recommended',
        'plugin:functional/recommended'
    ],
    ignorePatterns: ['dist/*'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'functional',
        'sort-keys-fix',
        'json-format'
    ],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }],
        'sort-keys-fix/sort-keys-fix': 'warn',
    },
}

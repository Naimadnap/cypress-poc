module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prefer-template': 2,
        'no-console': 0,
        'no-debugger': 1,
        'no-var': 1,
        'no-mixed-operators': 0,
        'no-unused-expressions': 0,
        'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
        'no-underscore-dangle': 0,
        'no-alert': 0,
        'no-lone-blocks': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-extra-boolean-cast': 1,
        'no-continue': 1,
        'no-restricted-syntax': 2,
        'no-use-before-define': 2,
        'no-return-await': 0,
        'require-await': 0,
        'no-multi-assign': 0,
        'import/no-named-as-default': 1,
        'import/no-duplicates': [
            0,
            {
                commonjs: true,
            },
        ],
        'import/no-unresolved': [
            0,
            {
                commonjs: true,
            },
        ],
        'import/export': 1,
        'import/prefer-default-export': 0,
        'import/newline-after-import': 0,
        'import/no-extraneous-dependencies': 0,
        'import/imports-first': 0,
        'global-require': 2,
        'class-methods-use-this': 0,
    },
};

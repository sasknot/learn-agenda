/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2021
  },
  plugins: [
    'filenames-simple',
    'tailwindcss',
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    // 'plugin:n/recommended',
    // 'plugin:promise/recommended'
    // 'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'arrow-parens': ['warn'],
    'operator-linebreak': ['warn', 'before'],
    'no-var': ['error'],
    'prefer-const': ['warn'],
    'array-callback-return': ['error'],
    curly: ['error'],
    'default-case': 'off',
    'default-case-last': ['warn'],
    'default-param-last': ['warn'],
    // 'eqeqeq': ['error'],
    'no-eval': ['error'],
    'require-await': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'keyword-spacing': ['error'],
    'no-use-before-define': 'off',
    camelcase: 'off',
    'max-len': ['warn', {
      code: 90,
      tabWidth: 2,
      ignoreStrings: true,
      ignoreRegExpLiterals: true
    }],
    'comma-dangle': ['warn'],

    'filenames-simple/extension': 'error',
    'filenames-simple/named-export': ['warn', 'singular'],
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
    'filenames-simple/no-index': 'off',
    'filenames-simple/pluralize': 'off',
    'filenames-simple/typescript-module-declaration': 'off',

    // 'n/exports-style': ['error', 'module.exports'],
    // 'n/file-extension-in-import': ['error', 'always'],
    // 'n/prefer-global/buffer': ['error', 'always'],
    // 'n/prefer-global/console': ['error', 'always'],
    // 'n/prefer-global/process': ['error', 'always'],
    // 'n/prefer-global/url-search-params': ['error', 'always'],
    // 'n/prefer-global/url': ['error', 'always'],
    // 'n/prefer-promises/dns': 'error',
    // 'n/prefer-promises/fs': 'error'

    // 'promise/always-return': 'error',
    // 'promise/no-return-wrap': 'error',
    // 'promise/param-names': 'error',
    // 'promise/catch-or-return': 'error',
    // 'promise/no-native': 'off',
    // 'promise/no-nesting': 'warn',
    // 'promise/no-promise-in-callback': 'warn',
    // 'promise/no-callback-in-promise': 'warn',
    // 'promise/avoid-new': 'warn',
    // 'promise/no-new-statics': 'error',
    // 'promise/no-return-in-finally': 'warn',
    // 'promise/valid-params': 'warn'

    // https://typescript-eslint.io/rules/
    '@typescript-eslint/ban-ts-comment': ['warn', {
      'ts-expect-error': 'allow-with-description'
    }],
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   {
    //     'selector': 'default',
    //     'format': ['camelCase'],
    //     'leadingUnderscore': 'allow',
    //     'trailingUnderscore': 'allow'
    //   },
    //   {
    //     'selector': 'variable',
    //     'format': ['camelCase', 'UPPER_CASE'],
    //     'leadingUnderscore': 'allow',
    //     'trailingUnderscore': 'allow',
    //   },
    //   {
    //     'selector': 'typeLike',
    //     'format': ['PascalCase'],
    //   },
    //   {
    //     'selector': ['property', 'method'],
    //     'format': null
    //   }
    // ],

    // https://eslint.vuejs.org/rules/
    'vue/require-default-prop': 'off',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/attributes-order': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-tags-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/attribute-hyphenation': 'off',
    'vue/no-reserved-props': ['error', { vueVersion: 3 }],
    'vue/no-multiple-template-root': ['warn'],
    'vue/multi-word-component-names': 'off'
  }
}

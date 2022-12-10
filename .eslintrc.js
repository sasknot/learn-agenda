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
    'standard',
    // 'plugin:node/recommended',
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

    'filenames-simple/extension': 'error',
    'filenames-simple/named-export': ['warn', 'singular'],
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
    'filenames-simple/no-index': 'off',
    'filenames-simple/pluralize': 'off',
    'filenames-simple/typescript-module-declaration': 'off',

    // 'node/exports-style': ['error', 'module.exports'],
    // 'node/file-extension-in-import': ['error', 'always'],
    // 'node/prefer-global/buffer': ['error', 'always'],
    // 'node/prefer-global/console': ['error', 'always'],
    // 'node/prefer-global/process': ['error', 'always'],
    // 'node/prefer-global/url-search-params': ['error', 'always'],
    // 'node/prefer-global/url': ['error', 'always'],
    // 'node/prefer-promises/dns': 'error',
    // 'node/prefer-promises/fs': 'error'

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
    'vue/component-definition-name-casing': 'off', // should be: ['error', 'PascalCase'],
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/attributes-order': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/attribute-hyphenation': 'off',
    'vue/no-reserved-props': ['error', { vueVersion: 2 }]
  }
}

module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-recommended-scss',
    // 'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss'
  ],
  rules: {
    // @TODO: Consider removing these rules later
    'no-descending-specificity': null,

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        'ignoreAtRules': ['tailwind']
      }
    ]
  }
}

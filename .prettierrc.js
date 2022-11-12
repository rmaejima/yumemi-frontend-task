module.exports = {
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^components/(.*)$',
    '^contexts/(.*)$',
    '^utils/(.*)$',
    '^schemas/(.*)$',
    '^types/(.*)$',
    '^stories/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

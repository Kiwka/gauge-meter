var getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

export function getCurrencySymbol(currency) {
  return getSymbolFromCurrency(currency) || '🦄';
};

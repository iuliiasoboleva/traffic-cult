export const formatCurrency = (value) => value.toLocaleString('ru-RU') + '₽';
export const capitalize = (str) =>
  typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str;

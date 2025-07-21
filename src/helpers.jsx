export const formatCurrency = (value) => value.toLocaleString('ru-RU') + '₽';

export const capitalize = (str) =>
  typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str;

export const sortItems = (items, key, direction) => {
  const sorted = [...items].sort((a, b) => {
    const valueA = a[key].toString().replace(/[^\d.-]+/g, '');
    const valueB = b[key].toString().replace(/[^\d.-]+/g, '');
    const isNumeric = !isNaN(valueA) && !isNaN(valueB);

    if (isNumeric) {
      return direction === 'asc' ? valueA - valueB : valueB - valueA;
    }

    return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  });

  return sorted;
};

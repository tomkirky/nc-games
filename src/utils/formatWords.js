export const formatDropdownString = (str) => {
  return str.replace(/-|_/g, ' ').toUpperCase();
};

export const formatCategory = (str) => {
  let newCategory = str.replace(/-|_/g, ' ');
  return newCategory[0].toUpperCase() + newCategory.substring(1);
};

export default formatDropdownString;

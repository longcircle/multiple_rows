export const List = (arr1, arr2) => {
  return arr1.map((item, i) => {
    if (item.textId === arr2[i].textId) {
      return Object.assign({}, item, arr2[i]);
    }
  });
};

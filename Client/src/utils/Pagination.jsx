/** @format */

export const paginateHandler = data => {
  const itemsPerPage = 14;
  const pageQuantity = Math.ceil(data.length / itemsPerPage);
  const productsArr = Array.from({ length: pageQuantity }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return productsArr;
};

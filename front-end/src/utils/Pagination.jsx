export const paginateHandler = (data, category) => {
  // const itemsPerPage = 14;
  const itemsPerPage = 12;
  if (category.toLowerCase() === "all") {
    const pageQuantity = Math.ceil(data.length / itemsPerPage);
    const productsArr = Array.from({ length: pageQuantity }, (_, index) => {
      const start = index * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    });
    return productsArr;
  } else {
    const filteredByCategory = data.filter((product) => {
      return product.category.toLowerCase() === category;
    });
    const pageQuantity = Math.ceil(filteredByCategory.length / itemsPerPage);
    const productsArr = Array.from({ length: pageQuantity }, (_, index) => {
      const start = index * itemsPerPage;
      return filteredByCategory.slice(start, start + itemsPerPage);
    });
    return productsArr;
  }
};

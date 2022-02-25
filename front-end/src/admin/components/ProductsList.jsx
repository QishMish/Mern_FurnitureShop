import React from "react";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid";

function ProductsList() {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <ProductItem />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <ProductItem />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <ProductItem />
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
          <ProductItem />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <ProductItem />
        </Grid>
      </Grid>
    </>
  );
}

export default ProductsList;

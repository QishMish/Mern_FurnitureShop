import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProductItem() {
  return (
    <>
      <Card sx={{ maxWidth: 350,mx: "auto" }}  >
        <CardMedia
          component="img"
          height="200"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Lizard
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">Edit</Button>
          <Button size="small" variant="outlined" color="error">Delete</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ProductItem;

import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGlobalContext } from "../../context/AppContext";
import Loading from "../../components/Loading";
import Button from "@mui/material/Button";
import axiosInstance from "../../config/axiosConfig";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ProductsList({
  setModalOpel,
  setEditProductData,
  searchInput,
  setEditMode,
  editMode,
}) {
  const { products, loading, deleteProductHandler } = useGlobalContext();
  const { products: productsList, length, productsByCategory } = products;

  const productsListFiltered = productsList?.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const editHandler = (e) => {
    setEditMode(true);
    let id = e.target.id;
    const product = productsList.find((item) => item._id === id);
    setModalOpel((prevstate) => {
      return !prevstate;
    });
    setEditProductData(product);
  };

  const deleteHandler = async (e) => {
    let id = e.target.id;
    try {
      deleteProductHandler(id);
      console.log(id);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {productsListFiltered.length < 1 && (
        <h1 className="product-not-found">Product Not Found</h1>
      )}
      {productsListFiltered.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Title</StyledTableCell>
                <StyledTableCell align="left">Price</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Category</StyledTableCell>
                <StyledTableCell align="left">Image</StyledTableCell>
                <StyledTableCell align="left">Edit</StyledTableCell>
                <StyledTableCell align="left">Delete</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {productsListFiltered.length < 1 ? (
                <h1 className="not-found">Product Not Found</h1>
              ) : (
                productsListFiltered?.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell align="left">{row.title}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.price}$
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.description}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.category}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <img
                        src={
                          row.images
                            ? row?.images[0]
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
                        }
                        width="40px"
                        height="40px"
                        style={{ objectFit: "cover" }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button
                        size="small"
                        variant="outlined"
                        id={row._id}
                        onClick={(e) => editHandler(e)}
                      >
                        Edit
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        id={row._id}
                        onClick={(e) => deleteHandler(e)}
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

import "../styles/Cart-page.css";
import * as React from "react";
import { useGlobalContext } from "../context/AppContext";
import { increase, removeItem } from "../context/actions/cartActions";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import { MdOutlineDoneOutline } from "react-icons/md";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CartPage() {
  const { cartState, dispatch } = useGlobalContext();
  const { cartItems, total, amount } = cartState;
  const { cartAmount, setCartAmount } = React.useState(1);

  const removeItemHandler = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="bg-gray">
      <div className="cart-page container">
        {cartItems.length < 1 ? (
          <h1 className="cart-empty">Cart Is Empty</h1>
        ) : (
          <>
            <h1>Cart</h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Product</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Quantity</StyledTableCell>
                    <StyledTableCell align="right">Confirm</StyledTableCell>
                    <StyledTableCell align="right">Subtotal</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <StyledTableRow key={item.id}>
                      <StyledTableCell component="th" scope="row">
                        <img
                          className="cart-poster"
                          src={item.image}
                          alt={item.title}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.price}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <TextField
                          id="outlined-number"
                          type="number"
                          value={cartAmount}
                          min={1}
                          onChange={(e)=> setCartAmount(e.target.value)}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <MdOutlineDoneOutline className="cart-save" onClick={() => dispatch(increase(item.id))}/>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.subTotal}
                      </StyledTableCell>
                      <StyledTableCell className="item-center">
                        <AiOutlineCloseCircle
                          onClick={() => removeItemHandler(item.id)}
                          style={{ fontSize: "20px", cursor: "pointer" }}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="cart-calculation">
              <h1>Cart Totals</h1>
              <div className="subtotal">
                <div className="p">Subtotal</div>
                <div className="span">$798.31.91</div>
              </div>
              <div className="total">
                <div className="p">Total</div>
                <div className="span">$798.31.91</div>
              </div>
              <a className="checkout">Proceed To Checkout</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

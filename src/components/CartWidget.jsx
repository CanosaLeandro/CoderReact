import { useContext } from "react";
import { CartContext } from "../context/cart/index";
import { BiCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <NavLink to={"/cart"}>
      <BiCart color="grey" size={35} value="4" />
      <span
        className="badge badge-warning bg-danger"
        style={{
          padding: "0.17rem 0.17rem",
          fontSize: "0.8rem",
          borderRadius: "5px",
          position: "relative",
          marginTop: "-15px",
          marginLeft: "-10px",
        }}
      >
        {cart.length}
      </span>
    </NavLink>
  );
};

export default CartWidget;

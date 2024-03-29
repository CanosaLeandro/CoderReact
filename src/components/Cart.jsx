import { useContext } from "react";
import { CartContext } from "../context/cart";
import ResumeLine from "./ResumeLine";
import Message from "./Message";
import { Button } from "react-bootstrap";
import { cartTotal } from "../functions/utils";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart_section py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">
                <Message
                  msg={`${cart.length} item${
                    cart.length === 1 ? "" : "s"
                  } in cart`}
                />
              </div>
              <div className="cart_items">
                <ul className="cart_list px-2">
                  {cart.map((i) => (
                    <ResumeLine item={i} />
                  ))}
                </ul>
              </div>
              {cart.length > 0 ? (
                <div className="cart_subtotal">
                  <div className="cart_item_title">Subtotal</div>
                  <div
                    className="cart_item_subtotal"
                    style={{ whiteSpace: "pre-wrap" }}
                  >{`$${cartTotal(cart)}`}</div>
                  <br />
                  <Link to={"/checkout"}>
                    <Button className="btn-success">Checkout</Button>
                  </Link>
                </div>
              ) : '' }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

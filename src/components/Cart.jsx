import { useContext } from "react";
import { CartContext } from "../context/cart";
import ResumeLine from "./ResumeLine";
import Message from "./Message";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="cart_section py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">
                <Message msg={`${cart.length} item in cart`} />
              </div>
              <div className="cart_items">
                <ul className="cart_list px-2">
                  {cart.map((i) => (
                    <ResumeLine item={i} itemCount={cart.length} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import { Image } from "react-bootstrap";

const ResumeLine = (props) => {
  const { item, itemCount } = props;

  return (
    <>
      <li className="cart_item d-flex">
        <div className="d-flex justify-content-between">
          <div className="cart_item_image">
            <Image src={item.image} />
          </div>
        </div>
        <div className="cart_item_info d-flex flex-md-row flex-column justify-content-end gap-5">
          <div className="cart_item_name cart_info_col mx-auto">
            <div className="cart_item_title justify-content-center">Title</div>
            <div className="cart_item_text">{item.title}</div>
          </div>
          <div className="cart_item_quantity cart_info_col">
            <div className="cart_item_title">Quantity</div>
            <div className="cart_item_text">{item.quantity}</div>
          </div>
          <div className="cart_item_price cart_info_col">
            <div className="cart_item_title">Price</div>
            <div className="cart_item_text">${item.price.toFixed(2)}</div>
          </div>
          <div className="cart_item_total cart_info_col">
            <div className="cart_item_title">Total</div>
            <div className="cart_item_text">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </li>
      <hr className="hr-blurry" />
    </>
  );
};

export default ResumeLine;

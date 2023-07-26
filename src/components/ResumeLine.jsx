import { Image } from "react-bootstrap";

const ResumeLine = (props) => {
  const { item } = props;

  return (
    <>
      <li className="cart_item d-flex">
        <div className="d-flex justify-content-between">
          <div className="cart_item_image">
            <Image src={item.image} />
          </div>
        </div>
        <div className="cart_item_info d-flex flex-md-row flex-column justify-content-end gap-5">
          <div className="cart_item_name mx-auto">
            <div className="cart_item_title justify-content-center">Title</div>
            <div className="cart_item_text">{item.title}</div>
          </div>
          <div className="cart_item_quantity resume_line_info">
            <div className="cart_item_title">Quantity</div>
            <div className="cart_item_text">{item.quantity}</div>
          </div>
          <div className="cart_item_price resume_line_info">
            <div className="cart_item_title">Price</div>
            <div className="cart_item_text">${item.price.toFixed(2)}</div>
          </div>
          <div className="cart_item_total resume_line_info">
            <div className="cart_item_title">Total</div>
            <div className="cart_item_text">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </li>
      <hr className="hr-blurry m-0" />
    </>
  );
};

export default ResumeLine;

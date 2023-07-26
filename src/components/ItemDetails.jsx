import { useContext, useEffect, useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getItem } from "../functions/utils";
import Message from "./Message";
import { Counter } from "./Counter";
import { CartContext } from "../context/cart";

const ItemDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  const { addToCart, cart } = useContext(CartContext);

  useEffect(() => {
    getItem(setProduct, params.id);
  }, [params.id]);

  const handleAdd = async () => {
    quantity === 0
      ? console.log("Quantity is 0")
      : await addToCart(product, quantity);
    console.log(cart);
  };

  return product != null ? (
    <div className="product-details d-flex">
      <Card className="card-details">
        <div className="row g-0">
          <Image src={product.image} className="product-details-image" />
        </div>
      </Card>
      <Card>
        <div className="card-body p-4">
          <div className="card-headling">
            <h4 className="card-title">{product.title}</h4>
            <div className="card-caption">
              <h5>Unit price: ${product.price.toFixed(2)}</h5>
              <p>Category: {product.category}</p>
            </div>
          </div>
          <p className="card-text">{product.description}</p>
          <div className="details-buttons">
            <Counter stock={product.stock} setQuantity={setQuantity} />
            <br />
            <Button onClick={handleAdd}>Add to cart</Button>
          </div>
          <p
            className="card-text text-muted"
            style={{ whiteSpace: "pre-wrap" }}
          >
            In Stock: {product.stock} units
          </p>
        </div>
      </Card>
    </div>
  ) : (
    <Message msg="Item not found" />
  );
};

export default ItemDetails;

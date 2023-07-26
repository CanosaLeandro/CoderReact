import { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../functions/utils";
import Message from "./Message";

const ItemDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProduct(setProduct, params.id);
  }, [params.id]);

  return product != null ? (
    <div className="product-details d-flex">
      <Card className="card-details">
        <div className="row g-0">
          <Image src={product.image} className="product-details-image" />
        </div>
      </Card>
      <Card>
        <div className="card-body p-4">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <small className="text-muted" style={{whiteSpace: "pre-wrap"}}>
              Unit price: {product.price.toFixed(2)}    Stock: {product.rating.count}
            </small>
          </p>
        </div>
      </Card>
    </div>
  ) : (
    <Message msg="Item not found" />
  );
};

export default ItemDetails;

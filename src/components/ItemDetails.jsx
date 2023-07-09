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
    <Card className="card-details">
      <div className="row no-gutters">
        <div className="col-4">
          <Image src={product.image} className="product-details-image" />
        </div>
      </div>
      <div className="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description}</p>
          <p class="card-text">
            <small class="text-muted">{product.rating.count}</small>
          </p>
        </div>
      </div>
    </Card>
  ) : (
    <Message msg="Item not found" />
  );
};

export default ItemDetails;

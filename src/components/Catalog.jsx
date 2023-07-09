import { Container } from "react-bootstrap";
import Item from "./Item";
import Message from "./Message";
import { useEffect, useState } from "react";
import { allProducts } from "../functions/utils";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    allProducts(setProducts);
  }, []);

  const renderProducts = () => {
    return (
      <Container className="products-grid">
        {products.map((p) => (
          <Item product={p} />
        ))}
      </Container>
    );
  };

  return products ? renderProducts() : <Message msg="No products listed" />;
};

export default Catalog;

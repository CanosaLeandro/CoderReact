import { useEffect, useState } from "react";
import { allProducts } from "../functions/funcions";
import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const Catalog = () => {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    allProducts(setProducts);
  }, []);

  return (
    <>
      {products != null
        ? products.map((p) => (
            <Container>
              <Row>
                <Item product={p} />
              </Row>
            </Container>
          ))
        : "No proudcts listed"}
    </>
  );
};

export default Catalog;

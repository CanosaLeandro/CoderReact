import { Container } from "react-bootstrap";
import Item from "./Item";
import Message from "./Message";
import { useEffect, useState } from "react";
import { allItems, getItemsByCategory } from "../functions/utils";
import { useParams } from "react-router-dom";

const Catalog = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    setCategory(params.category);
  }, [params.category]);

  useEffect(() => {
    if (category) {
      getItemsByCategory(setProducts, category);
    } else {
      allItems(setProducts);
    }
  }, [category]);

  const renderProducts = () => {
    return (
      <Container className="products-grid">
        {products.map((p) => (
          <Item key={p.id} product={p} />
        ))}
      </Container>
    );
  };

  return products ? renderProducts() : <Message msg="No products listed" />;
};

export default Catalog;

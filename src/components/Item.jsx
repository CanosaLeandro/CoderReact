import { Card, Image } from "react-bootstrap";

const Item = (product) => {
  console.log(product);
  return (
    <>
      <Card>
        <Image src={product.image} />
      </Card>
    </>
  );
};

export default Item;

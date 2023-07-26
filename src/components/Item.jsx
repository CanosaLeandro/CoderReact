import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineInventory } from "react-icons/md";

const Item = (props) => {
  const p = props.product;

  return (
    <Card className="card-product border-0 d-flex flex-row p-2">
      <div className="col-auto text-info align-self-start position-relative">
        <MdOutlineInventory />
        <p className="p-1 m-0">{p.stock}</p>
      </div>
      <div className="card-content col-auto flex-grow-1 d-flex">
        <Link to={`/item/${p.id}`}>
          <Image src={p.image} className="product-image" />
        </Link>
      </div>
      <div className="col-auto invisible">Right</div>
    </Card>
  );
};

export default Item;

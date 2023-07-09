import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdOutlineInventory } from "react-icons/md";

const Item = (props) => {
  const p = props.product;

  return (
    <Card className="card-product border-0 d-flex flex-row justify-content-between p-2">
      <div className="card-content">
        <Link to={`/item/${p.id}`}>
          <Image src={p.image} className="product-image" />
        </Link>
      </div>
      <div className="text-info position-relative">
        <div>
          <MdOutlineInventory />
          <p className="me-1">{p.rating.count}</p>
        </div>
      </div>
    </Card>
  );
};

export default Item;

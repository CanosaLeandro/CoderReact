import { Card } from "react-bootstrap";

export default function Message(props) {
  return (
    <Card className="shadow d-flex align-items-center" bg="dark" text="white">
      <Card.Body>
        <p className="m-0">{props.msg}</p>
      </Card.Body>
    </Card>
  );
}

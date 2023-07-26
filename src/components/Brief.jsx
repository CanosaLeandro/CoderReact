import { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { cartTotal, createOrder } from "../functions/utils";
import { toast } from "react-toastify";

export const Brief = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { name, email, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      buyer: {
        name,
        email,
        phone,
      },
      total: cartTotal(cart),
      items: cart,
      date: new Date(),
    };

    createOrder(orderData).then((orderId) => {
      clearCart();
      navigate('/');
      const toastMsg = toast(
        `Buy Order generated successfully 🎉
      Buy Order n° ${orderId}`,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      console.log(toastMsg)
    });
  };

  return (
    <Card className="checkout-form px-4 py-2">
      <h2 className="checkout-header">Checkout Formulary</h2>
      <hr />
      <Form
        className="d-flex flex-column justify-content-between"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="+1234567890"
            value={phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Text className="text-muted">
          We'll never share your personal information with anyone else.
        </Form.Text>
        <br />
        <br />

        <div className="checkout-buttons">
          <Button className="checkout-submit" variant="success" type="submit">
            Done
          </Button>
          <Link to={"/cart"}>
            <Button variant="danger">Cancel</Button>
          </Link>
        </div>
      </Form>
    </Card>
  );
};

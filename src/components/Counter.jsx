import { useEffect, useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"

export const Counter = (props) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    props.setQuantity(counter)
  }, [counter, props])

  const increment = () => {
    if (counter < props.stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  const inputCounter = (e) => {
    const count = +e.target.value
    count > props.stock ? setCounter(props.stock) : setCounter(count)
  }

  return (
    <InputGroup className="cart-input">
      <Button onClick={decrement} className="input-group-text">-</Button>
      <Form.Control className="text-center" type="number" value={counter} onChange={inputCounter}></Form.Control>
      <Button onClick={increment} className="input-group-text">+</Button>
    </InputGroup>
  )
}
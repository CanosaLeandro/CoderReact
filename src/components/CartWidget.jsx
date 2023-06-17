import { BiCart } from "react-icons/bi"

export default function cart() {
  return (
    <>
      <BiCart color="yellow" size={50} value="4"/>
      <span
        className="badge badge-warning"
        style={{
          padding: "0 3px",
          backgroundColor: "red",
          fontSize: "1rem",
          borderRadius: "5px",
          position: "relative",
          marginTop: "-15px",
          marginLeft: "-10px"
        }}
      >5</span>
    </>
  )
}
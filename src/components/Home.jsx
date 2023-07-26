import BulbLogo from "../assets/logo-bulb.png";
import Message from "./Message";

export default function Home() {
  return (
    <div className="home-logo">
      <img src={BulbLogo} alt="Bulb logo" />
      <Message msg="Where wishes goes right to your door"/>
    </div>
  );
}
import axios from "axios";

const allProducts = async (state) => {
  const request = await axios.get("https://fakestoreapi.com/products");
  state(request.data);
};

export { allProducts };

import axios from "axios";

function sleep(s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
}

const allProducts = async (state) => {
  const request = await axios.get("https://fakestoreapi.com/products");
  state(request.data);
};

const getProduct = async (state, id) => {
  const request = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then(await sleep(0));
  state(request.data);
};

export { allProducts, getProduct };

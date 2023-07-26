import axios from "axios";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

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

const getItem = async (id) => {
  const db = getFirestore();
  const itemRef = doc(db, "items", id);
  const snapshot = await getDoc(itemRef);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  }

  return null;
};

const getItems = async () => {
  const db = getFirestore();
  const snapshot = await getDocs(collection(db, "items"));
  if (snapshot.size === 0) {
    return null;
  }

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const getItemByCategory = async (category) => {
  const db = getFirestore();
  const q = query(collection(db, "items"), where("category", "==", category));
  const snapshot = getDocs(q);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() };
  }

  return null;
};

const allItems = async (state) => {
  const items = await getItems();
  console.log(items);
  state(items);
};

export {
  allProducts,
  getProduct,
  getItems,
  getItem,
  getItemByCategory,
  allItems,
};

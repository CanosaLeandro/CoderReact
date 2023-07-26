import {
  doc,
  getDoc,
  getDocs,
  collection,
  getFirestore,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const getItem = async (state, id) => {
  const db = getFirestore();
  const itemRef = doc(db, "items", id);
  const snapshot = await getDoc(itemRef);
  if (snapshot.exists()) {
    return state({ id: snapshot.id, ...snapshot.data() });
  }

  return state(null);
};

const getItems = async () => {
  const db = getFirestore();
  const itemsRef = collection(db, "items");
  const snapshot = await getDocs(itemsRef);
  if (snapshot.size === 0) {
    return null;
  }

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const getItemsByCategory = async (state, category) => {
  const db = getFirestore();
  const itemsRef = collection(db, "items");
  const q =
    category === "clothing"
      ? query(
          itemsRef,
          where("category", "in", ["men's clothing", "women's clothing"])
        )
      : query(itemsRef, where("category", "==", category));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    return state(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  }

  return null;
};

const allItems = async (state) => {
  const items = await getItems();
  state(items);
};

const cartTotal = (items) => {
  return items.reduce((t, p) => t + p.price * p.quantity, 0).toFixed(2);
};

const createOrder = async (orderInfo) => {
  try {
    const db = getFirestore();
    const orderRef = await addDoc(collection(db, "orders"), orderInfo);
    return orderRef.id;
  } catch (error) {
    console.error("Error storing order. ", error);
    throw error;
  }
};

export {
  getItem,
  getItemsByCategory,
  allItems,
  cartTotal,
  createOrder,
};

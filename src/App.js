import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

// Components
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import ItemDetails from "./components/ItemDetails";

// Packages
import { BrowserRouter, Routes, Route } from "react-router-dom/dist";
import { SkeletonTheme } from "react-loading-skeleton";
import { CartProvider } from "./context/cart/index";
import Cart from "./components/Cart";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Brief } from "./components/Brief";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYiLU1AQoq8m4m1rfCPTrI_0-GTzWAgaA",
  authDomain: "fotnia-1.firebaseapp.com",
  projectId: "fotnia-1",
  storageBucket: "fotnia-1.appspot.com",
  messagingSenderId: "796140611747",
  appId: "1:796140611747:web:022bd084157590ef0a7716",
  measurementId: "G-QF01G8E8EV",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <ToastContainer/>
        <SkeletonTheme>
          <BrowserRouter>
            <Navbar />
            <div className="body-background d-flex align-items-center justify-content-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/categories/:category" element={<Catalog />} />
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Brief />} />
              </Routes>
            </div>
          </BrowserRouter>
        </SkeletonTheme>
      </CartProvider>
    </div>
  );
};

export default App;

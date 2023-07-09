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

const App = () => {
  return (
    <div className="App">
      <SkeletonTheme>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <div className="body-background d-flex align-items-center justify-content-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/categories/:category" element={<Catalog />} />
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </BrowserRouter>
        </CartProvider>
      </SkeletonTheme>
    </div>
  );
};

export default App;

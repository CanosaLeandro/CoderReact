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

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <body className="body-background d-flex align-items-center justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/:category" element={<Catalog />} />
            <Route path="/item/:id" element={<ItemDetails />} />
          </Routes>
        </body>
      </BrowserRouter>
    </div>
  );
};

export default App;

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/"/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Home />
      </div>
    </>
  );
}

export default App;

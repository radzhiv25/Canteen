import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Cart } from "./pages/Cart";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

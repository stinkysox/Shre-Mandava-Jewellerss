import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;

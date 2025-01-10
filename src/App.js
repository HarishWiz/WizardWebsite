// import AmazonLogin from './components/AmazonLogin';
// import YahooSignIn from './components/YahooSignIn';

import { useState } from "react";
import WizardAboutUs from "./components/WizardPage/WizardAboutUs";
import WizardContactUs from "./components/WizardPage/WizardContactUs";
import WizardLanding from "./components/WizardPage/WizardLanding";
import WizardNavbar from "./components/WizardPage/WizardNavbar";
import WizardProducts from "./components/WizardPage/WizardProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WizardCart from "./components/WizardPage/WizardCart";

function App() {
  const [cart, setCart] = useState([]);
  const handleAdd = (product) => {
    const exists = cart.find((item) => item.img === product.img);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.img === product.img
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (product) => {
    setCart(cart.filter((item) => item.img !== product.img));
  };
  return (
    <>
      {/* <AmazonLogin/> */}
      {/* <YahooSignIn/> */}

      <Router>
        <WizardNavbar />
        <Routes>
          <Route path="/" element={<WizardLanding />} />
          <Route
            path="/products"
            element={
              <WizardProducts
                handleAdd={handleAdd}
                cart={cart}
                handleRemove={handleRemove}
              />
            }
          />
          <Route
            path="/cart"
            element={<WizardCart cart={cart} handleRemove={handleRemove} setCart={setCart} />}
          />
          <Route path="/about" element={<WizardAboutUs />} />
          <Route path="/contact" element={<WizardContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

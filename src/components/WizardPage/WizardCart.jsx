import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";

const WizardCart = ({ cart, handleRemove, setCart }) => {
  const navigate = useNavigate();

  const decreaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.img === product.img && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const increaseQuantity = (product) => {
    const updatedCart = cart.map((item) =>
      item.img === product.img ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [modal, setModal] = useState(false);

  const handlePlaceOrder = () => {
    setModal(true);
  };

  const handleContinueShopping = () => {
    setCart([]);
    navigate("/cart");
    setModal(false);
  };

  return (
    <>
      <motion.div className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black py-20 absolute font-cinzel ">
        <motion.h1
          className="text-3xl text-violet-600 font-bold pt-4 text-center"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your Cart
        </motion.h1>
        {cart.length === 0 ? (
          <div className="flex flex-col space-y-6 justify-center items-center pt-4">
            <motion.h1
              className="text-2xl font-bold text-purple-500 rounded-md"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Your cart is Empty
            </motion.h1>
            <motion.button
              className="px-6 py-2 rounded-xl bg-violet-600 text-white font-bold"
              onClick={() => navigate("/products")}
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Check Our Products !
            </motion.button>
          </div>
        ) : (
          <motion.div
            className="w-full h-full flex flex-col lg:flex-row bg-transparent mt-5"
          >
            {/* Left Section: Cart Items */}

            <motion.div className="w-full h-full bg-gray-700"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            >
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.div
                    key={index}
                    className="w-full px-4 flex py-2 "
                    exit={{ opacity: 0, y: -200 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className="w-1/5">
                      <img
                        className="w-full h-28 md:h-40 rounded-md"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    <div className="w-3/5 px-4 flex flex-col">
                      <div className="w-full">
                        <h1 className="text-xl text-white">
                          Name: {item.name}
                        </h1>
                        <p className="text-base text-white">
                          Price: {item.price}
                        </p>
                      </div>
                      <div className="w-full flex mt-3">
                        <button
                          className="bg-purple-600 px-3 font-medium text-md rounded-md text-white"
                          onClick={() => decreaseQuantity(item)}
                        >
                          -
                        </button>
                        <p className="px-2 font-bold text-white">
                          {item.quantity}
                        </p>
                        <button
                          className="bg-purple-600 px-3 font-medium text-md rounded-md text-white"
                          onClick={() => increaseQuantity(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="w-1/5 flex justify-center items-start">
                      <button
                        className="px-4 py-2 bg-purple-700 text-white font-bold rounded-md self-center"
                        onClick={() => handleRemove(item)}
                      >
                        <BsTrash3 />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Right Section: Total */}
            <motion.div className="w-full md:w-1/3 mt-5 md:mt-0 "
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="md:mx-4 bg-gray-700 pt-5 rounded-md">
                <div className="bg-transparent px-4 w-full h-40 flex flex-col">
                  <h1 className="text-3xl bg-violet-600 font-bold text-white mt-5 rounded-md p-3 ">
                    Total: Rs.{totalPrice}
                  </h1>
                  <button
                    className="px-4 py-2 bg-violet-600 font-bold text-lg text-white mt-5 rounded-md hover:bg-violet-900"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {modal && (
          <div className="fixed inset-0 flex justify-center items-center h-full z-50 bg-opacity-80 bg-gray-800">
            <motion.div
              className=" rounded-lg bg-gray-500 flex flex-col items-center justify-center p-10 "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -200 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl text-white text-center px-8 pt-6 font-bold">
                Your Order Placed Successfully!
              </h2>

              <p className="text-violet-900 font-bold w-94 my-4">
                Thank You for Your Purchase! Your Magical items are on their
                way. You'll receive an Owl with the delivery details shortly.
                Happy Spell Casting!
              </p>
              <button
                className="px-4 py-2 bg-violet-600 text-white font-bold text-lg rounded-md"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default WizardCart;

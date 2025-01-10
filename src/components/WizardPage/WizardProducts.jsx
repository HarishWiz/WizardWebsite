import { motion } from "framer-motion";
import React from "react";
import book1 from "./Wizard page Assets/book1.jpg";
import book2 from "./Wizard page Assets/book2.jpg";
import book3 from "./Wizard page Assets/book3.jpg";
import book4 from "./Wizard page Assets/book4.jpeg";
import book5 from "./Wizard page Assets/book5.jpeg";
import book6 from "./Wizard page Assets/book6.jpeg";
import book7 from "./Wizard page Assets/book7.jpeg";
import book8 from "./Wizard page Assets/book8.jpeg";
import hat1 from "./Wizard page Assets/hat1.jpg";
import hat2 from "./Wizard page Assets/hat2.jpg";
import hat3 from "./Wizard page Assets/hat3.jpeg";
import {
  default as hat4,
  default as hat8,
} from "./Wizard page Assets/hat4.jpeg";
import hat5 from "./Wizard page Assets/hat5.jpeg";
import hat6 from "./Wizard page Assets/hat6.jpeg";
import hat7 from "./Wizard page Assets/hat7.jpeg";
import pet1 from "./Wizard page Assets/pet1.jpg";
import pet2 from "./Wizard page Assets/pet2.jpg";
import pet3 from "./Wizard page Assets/pet3.jpg";
import pet4 from "./Wizard page Assets/pet4.jpg";
import pet5 from "./Wizard page Assets/pet5.jpg";
import pet6 from "./Wizard page Assets/pet6.jpg";
import pet7 from "./Wizard page Assets/pet7.jpg";
import pet8 from "./Wizard page Assets/pet8.avif";
import potion1 from "./Wizard page Assets/potion1.webp";
import {
  default as potion2,
  default as potion7,
} from "./Wizard page Assets/potion2.jpeg";
import {
  default as potion3,
  default as potion8,
} from "./Wizard page Assets/potion3.jpeg";
import potion4 from "./Wizard page Assets/potion4.jpeg";
import potion5 from "./Wizard page Assets/potion5.jpeg";
import potion6 from "./Wizard page Assets/potion6.jpeg";
import stick1 from "./Wizard page Assets/stick1.jpeg";
import stick2 from "./Wizard page Assets/stick2.jpeg";
import stick3 from "./Wizard page Assets/stick3.jpeg";
import stick4 from "./Wizard page Assets/stick4.jpeg";
import stick5 from "./Wizard page Assets/stick5.jpg";
import stick6 from "./Wizard page Assets/stick6.jpg";
import stick7 from "./Wizard page Assets/stick7.jpg";
import stick8 from "./Wizard page Assets/stick8.jpg";

const parentContainerVarints = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childContainerVarients = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const WizardProducts = ({ handleAdd, cart, handleRemove }) => {
  const ProductCard = ({ img, name, price, onToggleCart, isAdded }, index) => (
    <div
      key={index}
      className="bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer overflow-hidden"
      variants={childContainerVarients}
    >
      <img
        className="w-full h-60 sm:h-40 object-cover rounded-md content-center"
        src={img}
        alt=""
      />
      <h3 className="font-semibold text-lg mt-2 text-violet-200  truncate">
        {name}
      </h3>
      <p className="text-md text-purple-200 mt-1 "> Price : {price}</p>
      <button
        onClick={() => onToggleCart({ img, name, price })}
        className={`px-8 py-2 rounded-lg text-white font-bold ${
          isAdded ? "bg-gray-700" : "bg-purple-600"
        }  mt-2`}
      >
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );

  const productCategories = [
    {
      id: 1,
      title: "MagicWands",
      products: [
        { img: stick1, name: "Eldrin's Ember", price: "550" },
        { img: stick2, name: "Astral Veil", price: "600" },
        { img: stick3, name: "Seraph’s Feather", price: "700" },
        { img: stick4, name: "Moonshadow Cane", price: "500" },
        { img: stick5, name: "Vortex Shard", price: "800" },
        { img: stick6, name: "Frostwrought Rod", price: "400" },
        { img: stick7, name: "Dragonheart Scepter", price: "700" },
        { img: stick8, name: "Sylvan Whisper", price: "600" },
      ],
    },
    {
      id: 2,
      title: "MagicPotions",
      products: [
        { img: potion1, name: "Elixir of Eternal Dawn", price: "300" },
        { img: potion2, name: "Veil of Shadows", price: "200" },
        { img: potion3, name: "Phoenix’s Tears", price: "500" },
        { img: potion4, name: "Witch's Reverien", price: "400" },
        { img: potion5, name: " Essence of the Void", price: "600" },
        { img: potion6, name: "Celerity Draught", price: "250" },
        { img: potion7, name: "Elixir of Dreamweaving", price: "350" },
        { img: potion8, name: "Moonlit Tonic", price: "400" },
      ],
    },
    {
      id: 3,
      title: "MagicBooks",
      products: [
        { img: book1, name: "The Codex of Forgotten Realmsk", price: "300" },
        { img: book2, name: "The Grimoire of Shadows", price: "200" },
        { img: book3, name: "The Book of Celestial Harmony", price: "500" },
        { img: book4, name: "The Tome of Eternal Flamesk", price: "400" },
        { img: book5, name: "The Scrolls of Arcane Mysteries", price: "600" },
        { img: book6, name: "The Book of Sanguine Rites", price: "250" },
        {
          img: book7,
          name: "The Enchiridion of Elemental Forces",
          price: "350",
        },
        { img: book8, name: "The Book of the Faerie Court", price: "400" },
      ],
    },
    {
      id: 4,
      title: "MagicHats",
      products: [
        { img: hat1, name: "The Cap of Everlight", price: "300" },
        { img: hat2, name: "The Veil of Shadows", price: "200" },
        { img: hat3, name: "The Crown of the Moonlit Realm", price: "500" },
        { img: hat4, name: "The Hat of Unseen Paths", price: "400" },
        { img: hat5, name: "The Infinite Top Hat", price: "600" },
        { img: hat6, name: "The Sorcerer’s Veil", price: "250" },
        { img: hat7, name: "The Twilight Tophat", price: "350" },
        { img: hat8, name: "The Hat of Whispers", price: "400" },
      ],
    },
    {
      id: 5,
      title: "MagicPets",
      products: [
        { img: pet1, name: "Noctis Vigil", price: "3000" },
        { img: pet2, name: "Whiskers of the Arcane", price: "2000" },
        { img: pet3, name: "Emberwing", price: "5000" },
        { img: pet4, name: "Luriel, the Enchanter", price: "4000" },
        { img: pet5, name: "Ashira, the Rebirth Flame", price: "6000" },
        { img: pet6, name: "Serpentis Velenus", price: "2500" },
        { img: pet7, name: "Nimblepaw, the Trickster", price: "3500" },
        { img: pet8, name: "Starhoof", price: "4000" },
      ],
    },
  ];

  const handleToggleCart = (product) => {
    const exists = cart.find((item) => item.img === product.img);
    if (exists) {
      handleRemove(product);
    } else {
      handleAdd(product);
    }
  };

  return (
    <>
      <div className=" h-full w-full bg-gradient-to-b from-gray-800 to-black py-20 font-cinzel">
        <motion.h1
          className="text-3xl text-violet-600 font-bold text-center pt-4 "
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Wizard Products
        </motion.h1>
        {productCategories.map(({ id, title, products }, index) => (
          <motion.section
            key={id}
            className="mt-10"
            variants={parentContainerVarints}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className={`flex w-full ${
                index % 2 === 0 ? "justify-start ps-10" : "justify-end pe-10"
              }`}
            >
              <h2 className="text-2xl font-extrabold text-white px-12 py-2 rounded-md animate-pulse bg-violet-800">
                {title}
              </h2>
            </div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-8">
              {products.map((product, index) => {
                const isAdded = cart.some((item) => item.img === product.img);
                return (
                  <ProductCard
                    key={index}
                    img={product.img}
                    name={product.name}
                    isAdded={isAdded}
                    onToggleCart={handleToggleCart}
                    price={product.price}
                  />
                );
              })}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </>
  );
};

export default WizardProducts;

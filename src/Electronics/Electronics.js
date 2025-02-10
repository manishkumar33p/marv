
import React, { useState , useEffect} from 'react';
import { NavLink } from "react-router-dom";
import "D:/marv/src/Shop/Shop.css";
import NavBar from '../Navbar/Navbar';
import charger1 from "../charger1.jpg";
import charger2 from "../charger2.jpg";
import Footer from "../Footer/Footer";
import charger3 from "../charger3.jpg"
import charger4 from "../charger4.jpg"
import charger5 from "../charger5.jpg"
import charger6 from "../charger6.jpg"
import charger7 from "../charger7.jpg"
import charger8 from "../charger8.jpg"
import charger9 from "../charger9.jpg"
import charger10 from "../charger10.jpg"
import charger11 from "../charger11.jpg"
import charger12 from "../charger12.jpg"
import charger13 from "../charger13.jpg"
import charger14 from "../charger14.jpg"

// other image imports...

// Sample product data
const products = [
  { id: 1, name: "Dell 180 watt ", image: charger1, price: "$499", description: "Original 100% furnished" },
  { id: 2, name: "Dell type c 90 watt", image: charger2, price: "$799", description: "Original 100% furnished" },
  { id: 3, name: "HP blue pin 120 watt", image: charger3, price: "$150", description: "Original 100% furnished" },
    {
    id: 4,
    name: "Lenovo usb 90 watt",
    image: charger4, // All products will use this image
    price: "$249",
    description: "Original 100% furnished",
  },
  {
    id: 5,
    name: "Lenovo usb 65 watt",
    image: charger5, // All products will use this image
    price: "$199",
    description: "Original 100% furnished",
  },
  {
    id: 6,
    name: "Dell 65 watt small pin",
    image: charger6, // All products will use this image
    price: "$349",
    description: "Original 100% furnished",
  },
  {
    id: 7,
    name: "Dell c type 65wd",
    image: charger7, // All products will use this image
    price: "$1299",
    description: "Original 100% furnished.",
  },
  {
    id: 8,
    name: "Power cable",
    image: charger8, // All products will use this image
    price: "$399",
    description: "Original 100% furnished",
  },
  {
    id: 9,
    name: "Dell 65 watt big pin",
    image: charger9,  // All products will use this image
    price: "$120",
    description: "Original 100% furnished",
  },
  {
    id: 10,
    name: "HP blue 65 watt",
    image: charger10, // All products will use this image
    price: "$299",
    description: "Original 100% furnished.",
  },
  {
    id: 11,
    name: "HP blue pin 150 watt",
    image: charger11, // All products will use this image
    price: "$499",
    description: "Original 100% furnished",
  },
  {
    id: 12,
    name: "Dell 240 watt big pin",
    image: charger12, // All products will use this image
    price: "$799",
    description: "Original 100% furnished",
  },
  {
    id: 13,
    name: "Lenevo c type 65 watt",
    image: charger13, // All products will use this image
    price: "$150",
    description: "Original 100% furnished",
  },
  {
    id: 14,
    name: "HP c type 65 watt",
    image: charger14, // All products will use this image
    price: "$249",
    description: "Original 100% furnished",
  },
 
  // Add other products...
];

const Electronics = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage if any
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Function to handle adding product to cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart in localStorage
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <div className="shop-container">
      <NavBar />
      <h2 className="shop-heading">Our Electronics Products</h2>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
            <NavLink to={`/product/${product.id}`} className="product-link">
              <button className="view-details-btn">View Details</button>
            </NavLink>
            <button 
              className="view-details-btn1" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
        <Footer />
    </div>
  );
};

export default Electronics;


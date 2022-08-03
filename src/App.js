import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductsSection from "./Components/ProductsSection/ProductsSection";
import "./App.css";
import products from "./data/products";
import Toast from "./Components/Toast/Toast";
import Cart from "./Components/Cart/Cart";
import productsContext from "./Components/Contexts/ProductsContext";

export default function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart , setUserCart]= useState([])
  const [isShowToast,setIsShowToast]= useState(false)
  const [isShowCart,setIsShowCart]= useState(false )

  return (
    <div>
      <productsContext.Provider value={{
        allProducts,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowCart

      }}>
        <Navbar />
        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title">All Products</h1>

            {allProducts.map(() => (
              <ProductsSection  />
            ))}
          </div>
        </main>
        <Toast />
        <Cart />
      </productsContext.Provider>
    </div>
  );
}

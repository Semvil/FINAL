import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProductCart from "../allproducts/ProductCard";
import CartPage from "../cartpage/cartPage";
import { useDispatch, useSelector } from "react-redux";
import "./navBar.css";
import { getCartTotal } from "../../store/cartSlice";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div className="Nav-bar">
      <h4>NavBar</h4>
      <NavLink to="/" component={ProductCart}>
        All Products
      </NavLink>

      <NavLink to="/Cart" component={CartPage}>
        Cart ({totalQuantity})
      </NavLink>
    </div>
  );
}

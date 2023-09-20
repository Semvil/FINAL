import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./products.css";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="cards">
      {items.map((item) => (
        <div className="div-col-md" key={item.id}>
          <div className="div-card">
            <img src={item.img} className="phone-img" />
            <div className="div-card-body">
              <h5 className="title-product">{item.title}</h5>
              <p className="title-price">{item.price}</p>
              <button
                className="Card-Button"
                onClick={() => dispatch(addToCart(item))}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cartpage.css";

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../store/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div class="bodyy">
      <div class="CartContainer">
        <div class="Header">
          <h3 class="Heading">Cart - {cart.length}</h3>
        </div>
        {cart?.map((data) => (
          <div class="Cart-Items">
            <div class="image-box">
              <img src={data.img} style={{ height: "120px" }} />
            </div>
            <div class="about">
              <h1 class="title">{data.title}</h1>
              <button class="btn" onClick={() => dispatch(removeItem(data.id))}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                  className="garbageImg"
                >
                  {" "}
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />{" "}
                </svg>
              </button>
            </div>
            <div class="counterBlock">
              <div class="counter">
                <button
                  class="btn"
                  onClick={() => dispatch(decreaseItemQuantity(data.id))}
                >
                  -
                </button>
                <div class="count">guantity {data.quantity}</div>
                <button
                  class="btn"
                  onClick={() => dispatch(increaseItemQuantity(data.id))}
                >
                  +
                </button>
              </div>
              <div class="price">{data.totalPrice}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="sumContainer">
        <div class="Header">
          <h3 class="Heading">Summary</h3>
        </div>
        <div className="cartInfo">
          <div className="quantityProduct">
            <p>Total quantity</p>
            <p>{totalQuantity}</p>
          </div>
          <div className="quantityProduct">
            <p>Total amount</p>
            <p>{totalPrice}</p>
          </div>
          <button className="checkout">GO TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

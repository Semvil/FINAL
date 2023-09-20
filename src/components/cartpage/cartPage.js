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
                <img src="" class="garbageImg" />
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

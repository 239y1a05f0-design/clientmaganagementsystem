import { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "React Basics",
      price: 499,
      image: "https://m.media-amazon.com/images/I/61Iz2yy2CKL.jpg",
      quantity: 1
    },
    {
      id: 2,
      title: "JavaScript Guide",
      price: 399,
      image: "data:image/jpeg;base64,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",
      quantity: 1
    },
    {
      id: 3,
      title: "Clean Code",
      price: 599,
      image: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg",
      quantity: 1
    }
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-details">
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                ✖
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;

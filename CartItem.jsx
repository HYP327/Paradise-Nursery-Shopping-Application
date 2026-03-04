import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem, selectCartItems } from './CartSlice';

// Calculate the total cart amount from all items
function calculateTotalCartAmount(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, price, emoji, quantity } = item;

  // Total cost for this individual item
  const total = (price * quantity).toFixed(2);

  // Total cart amount across all items in the cart
  const cartItems = useSelector(selectCartItems);
  const totalCartAmount = calculateTotalCartAmount(cartItems);

  return (
    <div className="cart-item">
      {/* Thumbnail */}
      <div className="cart-item__emoji">{emoji}</div>

      {/* Name + unit price */}
      <div className="cart-item__info">
        <div className="cart-item__name">{name}</div>
        <div className="cart-item__unit">${price.toFixed(2)} each</div>
      </div>

      {/* Quantity controls */}
      <div className="cart-item__controls">
        <button
          className="qty-btn"
          onClick={() => dispatch(decreaseQuantity(id))}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="qty-value">{quantity}</span>
        <button
          className="qty-btn"
          onClick={() => dispatch(increaseQuantity(id))}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Subtotal for this item */}
      <div className="cart-item__total">${total}</div>

      {/* Delete */}
      <button
        className="btn--delete"
        onClick={() => dispatch(removeItem(id))}
        aria-label={`Remove ${name}`}
        title="Remove item"
      >
        🗑
      </button>

      {/* Total cart amount — displayed on the last item row */}
      {cartItems[cartItems.length - 1]?.id === id && (
        <div className="cart-item__cart-total">
          <span className="cart-item__cart-total-label">Total Cart Amount:</span>
          <span className="cart-item__cart-total-value">${totalCartAmount}</span>
        </div>
      )}
    </div>
  );
}

export default CartItem;

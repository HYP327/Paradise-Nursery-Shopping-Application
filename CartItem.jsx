import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, price, emoji, quantity } = item;
  const total = (price * quantity).toFixed(2);

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

      {/* Subtotal */}
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
    </div>
  );
}

export default CartItem;

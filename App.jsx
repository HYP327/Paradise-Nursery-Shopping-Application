import React, { useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector } from 'react-redux';
import './App.css';

import cartReducer, {
  selectTotalItems,
  selectTotalCost,
  selectCartItems,
  clearCart,
} from './CartSlice';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';

// ── Redux Store ───────────────────────────────────────────────────────────────
const store = configureStore({
  reducer: { cart: cartReducer },
});

// ── Cart Page ─────────────────────────────────────────────────────────────────
function CartPage({ onContinue }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalCost = useSelector(selectTotalCost);

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Checkout will be available shortly.');
  };

  return (
    <div className="cart-page">
      <div className="page__header">
        <h2 className="page__title">Your Cart</h2>
        <p className="page__subtitle">Review your plants before checkout.</p>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty__icon">🛒</div>
          <p className="cart-empty__text">
            Your cart is empty — let's find some plants!
          </p>
          <button className="btn--cta" onClick={onContinue}>
            Browse Plants →
          </button>
        </div>
      ) : (
        <>
          {/* Summary bar */}
          <div className="cart-summary">
            <div className="cart-summary__stat">
              <div className="cart-summary__label">Total Plants</div>
              <div className="cart-summary__value">{totalItems}</div>
            </div>
            <div className="cart-summary__stat">
              <div className="cart-summary__label">Total Cost</div>
              <div className="cart-summary__value">${totalCost.toFixed(2)}</div>
            </div>
            <div className="cart-summary__actions">
              <button className="btn--secondary" onClick={onContinue}>
                Continue Shopping
              </button>
              <button className="btn--checkout" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>

          {/* Cart items */}
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header({ page, onNav, onCartClick }) {
  const totalItems = useSelector(selectTotalItems);

  return (
    <header className="header">
      <div className="header__logo" onClick={() => onNav('landing')}>
        🌿 Paradise Nursery
      </div>
      <nav className="header__nav">
        <button
          className={`header__link${page === 'landing' ? ' header__link--active' : ''}`}
          onClick={() => onNav('landing')}
        >
          Home
        </button>
        <button
          className={`header__link${page === 'products' ? ' header__link--active' : ''}`}
          onClick={() => onNav('products')}
        >
          Plants
        </button>
        <button className="header__cart" onClick={onCartClick}>
          🛒
          <span className="cart-badge">{totalItems}</span>
        </button>
      </nav>
    </header>
  );
}

// ── Inner App (inside Provider) ───────────────────────────────────────────────
function InnerApp() {
  const [page, setPage] = useState('landing');

  return (
    <div className="app">
      {page !== 'landing' && (
        <Header
          page={page}
          onNav={setPage}
          onCartClick={() => setPage('cart')}
        />
      )}

      {page === 'landing' && (
        <AboutUs onGetStarted={() => setPage('products')} />
      )}

      {page === 'products' && <ProductList />}

      {page === 'cart' && (
        <CartPage onContinue={() => setPage('products')} />
      )}
    </div>
  );
}

// ── Root App (with Provider) ──────────────────────────────────────────────────
function App() {
  return (
    <Provider store={store}>
      <InnerApp />
    </Provider>
  );
}

export default App;

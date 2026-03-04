import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';

const plants = [
  // ── Tropical ──────────────────────────────────────────
  {
    id: 1, name: 'Bird of Paradise', category: 'Tropical', price: 34.99,
    emoji: '🌺', bg: '#d4edda',
    description: 'Bold, dramatic leaves. A living sculpture for any room.',
  },
  {
    id: 2, name: 'Monstera Deliciosa', category: 'Tropical', price: 29.99,
    emoji: '🌿', bg: '#c8e6c9',
    description: 'Iconic split leaves. Effortlessly lush and photogenic.',
  },
  {
    id: 3, name: "Bird's Nest Fern", category: 'Tropical', price: 19.99,
    emoji: '🌱', bg: '#dcedc8',
    description: 'Rippling fronds with vibrant jungle-fresh energy.',
  },
  // ── Succulents ────────────────────────────────────────
  {
    id: 4, name: 'Echeveria Elegans', category: 'Succulents', price: 12.99,
    emoji: '🪴', bg: '#e8f5e9',
    description: 'Rosette-shaped beauty with soft blue-green leaves.',
  },
  {
    id: 5, name: 'Aloe Vera', category: 'Succulents', price: 14.99,
    emoji: '🌵', bg: '#f1f8e9',
    description: 'Hardy, healing, and timelessly cool on any windowsill.',
  },
  {
    id: 6, name: 'Jade Plant', category: 'Succulents', price: 17.99,
    emoji: '💚', bg: '#e0f2f1',
    description: 'Plump, glossy leaves — a traditional bringer of good fortune.',
  },
  // ── Air Purifiers ─────────────────────────────────────
  {
    id: 7, name: 'Peace Lily', category: 'Air Purifiers', price: 22.99,
    emoji: '🕊️', bg: '#e8eaf6',
    description: 'White blooms that clean your air and calm your mind.',
  },
  {
    id: 8, name: 'Snake Plant', category: 'Air Purifiers', price: 24.99,
    emoji: '🐍', bg: '#ede7f6',
    description: 'Architectural and virtually indestructible. Zero fuss.',
  },
  {
    id: 9, name: 'Spider Plant', category: 'Air Purifiers', price: 11.99,
    emoji: '🕷️', bg: '#fce4ec',
    description: 'Cascading runners and cheerful stripes. The friendliest filter.',
  },
];

const categories = [...new Set(plants.map(p => p.category))];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const getCartQty = (id) => {
    const item = cartItems.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const handleAdd = (plant) => {
    dispatch(addItem({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      emoji: plant.emoji,
      bg: plant.bg,
    }));
  };

  return (
    <div className="page">
      <div className="page__header">
        <h2 className="page__title">Our Plants</h2>
        <p className="page__subtitle">
          Carefully selected. Lovingly grown. Ready for your home.
        </p>
      </div>

      {categories.map(cat => (
        <div key={cat} className="category">
          <h3 className="category__title">
            <span className="category__dot" />
            {cat}
          </h3>
          <div className="plant-grid">
            {plants.filter(p => p.category === cat).map(plant => {
              const qty = getCartQty(plant.id);
              return (
                <div key={plant.id} className="plant-card">
                  <div
                    className="plant-card__img"
                    style={{ background: plant.bg }}
                  >
                    {plant.emoji}
                  </div>
                  <div className="plant-card__body">
                    <div className="plant-card__name">{plant.name}</div>
                    <div className="plant-card__desc">{plant.description}</div>
                    <div className="plant-card__footer">
                      <span className="plant-card__price">
                        ${plant.price.toFixed(2)}
                      </span>
                      <button
                        className={`btn--add${qty > 0 ? ' in-cart' : ''}`}
                        onClick={() => handleAdd(plant)}
                        disabled={qty > 0}
                      >
                        {qty > 0 ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

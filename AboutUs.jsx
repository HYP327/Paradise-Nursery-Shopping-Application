import React from 'react';

function AboutUs({ onGetStarted }) {
  return (
    <div className="landing">
      <div className="landing__pattern" />
      <div className="landing__deco landing__deco--tl">🌿</div>
      <div className="landing__deco landing__deco--br">🌺</div>

      <div className="landing__content">
        <p className="landing__eyebrow">Est. 2024 · Handpicked Plants</p>

        <h1 className="landing__title">
          Paradise<br />
          <span>Nursery</span>
        </h1>

        <p className="landing__subtitle">
          Where every leaf tells a story.
        </p>

        <p className="landing__desc">
          We believe a home comes alive when nature moves in. At Paradise Nursery,
          we handpick the finest houseplants — from bold tropical statement pieces
          to low-maintenance succulents and powerful air purifiers — so every
          corner of your space can bloom with character, calm, and color.
        </p>

        <button className="btn--cta" onClick={onGetStarted}>
          Get Started →
        </button>
      </div>
    </div>
  );
}

export default AboutUs;

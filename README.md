# 🌿 Paradise Nursery

A React + Redux shopping application for browsing and purchasing beautiful houseplants.

## Features

- **Landing Page** – Brand intro with a Get Started button
- **Product Listing** – 9 plants across 3 categories with Add to Cart functionality
- **Shopping Cart** – Full cart management: increase, decrease, delete, and checkout

## Tech Stack

- React 18
- Redux Toolkit (CartSlice)
- Vite
- CSS Modules / App.css

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy (GitHub Pages)

```bash
npm run build
# Push the /dist folder or use gh-pages package
```

## Project Structure

```
src/
├── App.jsx          # Root component, page routing, Redux Provider
├── App.css          # Global styles & CSS variables
├── AboutUs.jsx      # Landing page
├── ProductList.jsx  # Product listing page
├── CartItem.jsx     # Individual cart item row
├── CartSlice.jsx    # Redux slice (state management)
└── main.jsx         # Entry point
```

## Author

Built for the IBM Full Stack Developer Final Project.

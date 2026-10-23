# React TS Shopping Cart

[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Immer](https://img.shields.io/badge/Immer-00E7C3?logo=immer&logoColor=white)](https://immerjs.github.io/immer/)

A robust, type-safe shopping cart application built to demonstrate advanced global state management in React.

## Overview

This project explores a practical, production-minded approach to React state management with React Context API, `useImmerReducer`, and Immer. It is designed for a clean developer experience: predictable updates, strong typing, and a user-friendly shopping flow.

The app includes product browsing, cart summaries, quantity controls, and a responsive interface that keeps the customer journey simple and easy to reason about.

## Features

- Product browsing with a clean storefront layout
- Global cart state powered by Context API
- Immutable updates using `useImmerReducer` and Immer
- Type-safe state and actions with TypeScript
- Localized currency formatting for the Nigerian Naira (`₦`)
- Responsive UI with a polished shopping-cart flow
- Lightweight, modern front-end architecture with Vite

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Immer
- `useImmerReducer`
- Lucide React
- Bun

## Project Structure

```text
advanced-react-shopping-cart/
├── .gitignore
├── .oxlintrc.json
├── .prettierrc.json
├── CHANGELOG.md
├── README.md
├── biome.json
├── bun.lock
├── codebook.toml
├── index.html
├── package.json
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── App2.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Cart.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductList.tsx
│   │   ├── ThemeButton.tsx
│   │   └── snippets.tsx
│   ├── contexts/
│   │   ├── CartContext.tsx
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useTheme.tsx
│   └── utilities/
│       └── currency-formater.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── useContext.tsx
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/humbleUSE/advanced-react-shopping-cart.git
cd advanced-react-shopping-cart
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

## Why This Project Matters

Managing state in deeply nested React applications can become difficult very quickly. This repository is a clear example of how Context API reduces prop-drilling friction while preserving predictable, centralized state management.

The project focuses on the practical benefits of:

- cleaner component boundaries
- more maintainable state ownership
- easier global updates for cart actions
- improved developer ergonomics without losing immutability guarantees

## Comparison

| Feature | Prop Drilling Approach | Context API Approach |
| --- | --- | --- |
| Data flow | Passed manually through multiple component levels | Shared globally within the subtree |
| Component coupling | Higher | Lower |
| Maintainability | Harder to scale | Easier to maintain |
| State updates | More brittle | More centralized and predictable |

## Roadmap

- [x] Global cart state with Context API
- [x] Immutable state updates with `useImmerReducer`
- [x] Type-safe product and cart data modeling
- [x] Product browsing and cart controls
- [ ] Improved cart persistence
- [ ] Checkout flow and order summary
- [ ] Product detail page
- [ ] Accessibility review and polish

## License

This project currently has no license configured.

---

Built as a practical React state-management example for frontend development and portfolio demonstration.

# React TS Shopping Cart

A robust, type-safe shopping cart application built to demonstrate advanced global state management in React.

## 🚀 Features

- **Global State:** Powered by React Context API and `useReducer` to manage cart actions seamlessly.
- **Type Safety:** Full TypeScript implementation ensuring reliable compile-time data structures.
- **Local Currency:** Formatted beautifully with native currency localization (NGN/₦).
- **Smooth UX:** Micro-interactions and animated "Add to Cart" states using Lucide icons and Tailwind CSS.

## 🛠️ Tech Stack

- **Runtime:** Bun
- **Framework:** React + TypeScript
- **Icons:** Lucide React
- **Styling:** Tailwind CSS

> [!NOTE]
> Managing state in deeply nested components can quickly become messy. This repository serves as a clear, comparative showcase of how Context API simplifies data flow across a component subtree.

---

### 📊 Quick Comparison

| Feature                | Prop Drilling Approach                                                   | Context API Approach                                           |
| :--------------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------- |
| **Data Flow**          | Passed manually down through every intermediate component level.         | Broadcasted globally to the entire component subtree.          |
| **Component Coupling** | High. Intermediate components must know about props they don't use.      | Low. Components only consume the state they actually need.     |
| **Maintainability**    | Difficult. Changing a prop shape requires updates across multiple files. | Easy. State changes are isolated to the Provider and Consumer. |

---

### 💻 Core Tech Stack

- **Framework:** React (via Vite)
- **Language:** TypeScript (for strict type safety)
- **Package Manager:** Bun
- **State Management:** `useReducer`
- **Icons:** Lucide React
- **Styling:** Tailwind CSS

---

### ✨ Key Features

- **Visual Comparison:** Contrast the exact differences between prop drilling and Context API.
- **Type-Safe Architecture:** Strict TypeScript integration across the entire state lifecycle.
- **Predictable State:** Clean, action-based state transitions powered by `useReducer`.

---

### 🛠️ Getting Started

#### Prerequisites

Ensure you have [Bun](https://bun.sh) installed on your machine.

#### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/USE-WEB-DEV/advanced-react-shopping-cart.git
   cd advanced-react-shopping-cart
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

---

### 🔮 Project Roadmap

- [ ] **v2.0 Release:** Implement the [Immer](https://github.io) state management library to handle complex, immutable state mutations even more effortlessly.

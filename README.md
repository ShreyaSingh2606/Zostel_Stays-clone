# Zotel Stays

A fully responsive React landing page for a fictional backpacking brand — featuring real-time property filtering, persistent dark mode, wishlist management, and simulated booking flow.

🔗 **[Live Demo](https://zotel-stays.vercel.app)**

---

## Screenshots
<img width="1512" height="982" alt="Screenshot 2026-06-10 at 7 20 17 PM" src="https://github.com/user-attachments/assets/4235f5c5-0920-462e-927a-46e8dbdffab6" />
<img width="1512" height="982" alt="Screenshot 2026-06-10 at 7 20 48 PM" src="https://github.com/user-attachments/assets/4277dba8-e978-44c0-af73-5a0a8e29a4d7" />



---

## Features

- **Property filtering** — filter stays by category (Dorms, Private Rooms, Villas) or search by location; results update with a skeleton loading state
- **Dark / Light mode** — CSS variable-based theme system, persisted to localStorage so your preference survives page refresh
- **Wishlist** — save and unsave properties with a heart toggle; wishlist persists across sessions via localStorage
- **Booking flow** — click Details to view a property modal, Book Now to trigger a confirmation popup
- **Simulated auth** — login/logout with state-driven UI; displays your name in the header when logged in
- **Scroll animations** — sections fade in on scroll using the Intersection Observer API via a custom React hook
- **Responsive design** — fully optimized for mobile, tablet, and desktop

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 19 |
| Build tool | Vite |
| Styling | CSS Modules + CSS Variables |
| State management | React Context API |
| Animations | Intersection Observer API (custom hook) |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── components/        # UI components (Header, Hero, PropertyCards, etc.)
│   └── *.module.css   # Scoped styles per component
├── context/
│   └── ZotelContext.jsx   # Global state — theme, auth, search, wishlist, filters
├── data/
│   └── properties.js      # Property listings (acts as a mock database)
├── hooks/
│   └── useScrollReveal.js # Custom hook using IntersectionObserver
└── assets/            # Images and branding
```

---

## Getting Started

```bash
git clone https://github.com/ShreyaSingh2606/zotel-stays.git
cd zotel-stays
npm install
npm run dev
```

---

## Key Implementation Details

**Theme system** — CSS variables are defined on `:root` for light mode and overridden under `[data-theme='dark']`. Toggling theme sets `data-theme` on the `<html>` element, which cascades through every component automatically — no per-component theme logic needed.

**Search and filter** — Both run inside a single `useEffect` in Context that watches `searchQuery` and `activeCategory`. A 500ms debounce via `setTimeout` simulates a network delay and drives the skeleton loading UI.

**Custom hook** — `useScrollReveal` encapsulates IntersectionObserver logic so any component can get scroll-triggered animation with two lines of code instead of repeating 20 lines everywhere.

---

## License

MIT

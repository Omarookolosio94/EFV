# 🏢 Property Visualizer

A real estate tower explorer built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Faker.js** for dynamic mock data generation.

Users can explore Towers → Floors → Units with smooth navigation, state caching, and elegant responsive design.

---

#### 📸 Preview

> _Add screenshots, GIFs, or live demo links here when available._

---

#### 🔥 Features

- 🌍 Explore 3 predefined towers with 10–15 floors per tower.
- 🏠 Each floor contains 3–4 apartment units.
- 📊 Unit details include area, unit type, room count, and layout image.
- ⚡ Fast client-side routing using React Router v6.
- 🛆 Mock data generated dynamically using `faker.js`.
- 📆 State caching using localStorage to mimic API request caching.
- 🎨 Responsive design fully powered by Tailwind CSS.
- 🔥 Smooth hover animations and immersive navigation.
- 💻 Fully mobile-friendly experience.
- 🖼 Random apartment images for realistic presentation.
- 🔀 Clean file structure with custom reusable hooks and utilities.

---

#### 🚀 Tech Stack

| Technology                                    | Purpose                     |
| --------------------------------------------- | --------------------------- |
| [Vite](https://vitejs.dev/)                   | Lightning-fast build tool   |
| [React 18](https://reactjs.org/)              | Frontend framework          |
| [TypeScript](https://www.typescriptlang.org/) | Type safety                 |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first CSS framework |
| [Faker.js](https://fakerjs.dev/)              | Mock data generator         |
| [Iconify](https://iconify.design/)            | Icon system                 |

---

#### 📦 Installation

Clone and run locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Omarookolosio94/EFV

# 2️⃣ Navigate into the project directory
cd EFV

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start development server
npm run start
```

🔍 Access the app at `http://localhost:5173`

---

#### ⚙ Folder Structure

```
src/
 ┗ assets/             # Static assets (apartment images, logos, etc.)
 ┗ core/
   ┗ api/              # Mock data generation logic (faker based)
   ┗ components/       # Reusable UI components (Loader, MetaTags, etc.)
   ┗ const/            # app defaults
   ┗ hooks/            # Custom React hooks for managing data states
   ┗ layouts/          # Layout for different module
   ┗ types/            #  global handler for types and interfaces
   ┗ utilities/        # helper functions
 ┗ pages/              # All route pages: Home, Tower, Floor, Unit
 ┗ App.tsx             # App routes
```

---

## 🔗 State Management

- ✅ No external state library
- ✅ Uses `localStorage` for caching fetched data
- ✅ Mimics real-world API behavior with artificial delays
- ✅ Custom hooks like `useTowers()`, `useTower()`, `useFloor()`, `useUnit()` for modular state management

---

## 🌟 App Flow

1. **Home:**
   Displays list of Towers.

2. **Tower Detail:**
   Displays list of Floors in selected Tower.

3. **Floor Detail:**
   Displays Units available in selected Floor.

4. **Unit Detail:**
   Full Unit info: layout image, area, room count, unit type.

5. **Animations:**

   - Units hover animation (scaling + background darkening)
   - Smooth transitions between routes.

---

## 🧑‍💻 Author

| Name                    | Info              |
| ----------------------- | ----------------- |
| **Oghenemaro Okolosio** | Software Engineer |
| Location                | Lagos, Nigeria    |

---

## 📄 License

This project is licensed under the [Leisure Coding Open Source License (LCOSL)](LICENSE.txt).

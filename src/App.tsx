import { lazy, Suspense } from "react";
import Layout from "./core/layouts/Layout";
import Loader from "./core/components/Loader";
import { Routes, BrowserRouter as Router, Outlet } from "react-router-dom";
import { renderRoutes } from "./core/utilities/renderRoutes";

const Home = lazy(() => import("./pages/Home"));
const TowerDetail = lazy(() => import("./pages/TowerDetail"));
const FloorDetail = lazy(() => import("./pages/FloorDetail"));
const UnitDetail = lazy(() => import("./pages/UnitDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const routes: RouteType[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: ":tower-slug",
        element: <TowerDetail />,
      },
      {
        path: ":tower-slug/:floor-slug",
        element: <Outlet />,
        children: [
          { index: true, element: <FloorDetail /> },
          {
            path: ":unit-slug",
            element: <UnitDetail />,
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </Router>
  );
}

export default App;

import type { ReactNode } from "react";
import { Route } from "react-router-dom";

export const renderRoutes = (routes: RouteType[]): ReactNode =>
  routes.map(({ path, element, index, children }, i) =>
    index ? (
      <Route key={path! + i} index element={element} />
    ) : (
      <Route key={path! + i} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ),
  );

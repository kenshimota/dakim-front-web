import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import ProtectedCreateAdmin from "./ProtectedCreateAdmin";

const routerPublic = [{ path: "/", element: <Home /> }];

const arrayRoutes = [...routerPublic].map((c) => ({
  ...c,
  element: <ProtectedCreateAdmin>{c.element}</ProtectedCreateAdmin>,
}));

const router = createBrowserRouter(arrayRoutes);

export default router;

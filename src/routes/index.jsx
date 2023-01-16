import React from "react";
import { createBrowserRouter } from "react-router-dom";

const LandingPage = React.lazy(() => import("../containers/Landing-page"));

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, },
]);

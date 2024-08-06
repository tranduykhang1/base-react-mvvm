import { createBrowserRouter } from "react-router-dom";
import { AUTH_ROUTES } from "./constant";
import { Layout } from "@/layout/Main.layout";
import LoginPage from "@/pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: AUTH_ROUTES.login,
        element: <LoginPage />,
      },
     
    ],
  },
]);

export default router;
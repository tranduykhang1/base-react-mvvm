import { Layout } from "@/layout/Main.layout";
import { createBrowserRouter } from "react-router-dom";
import { AUTH_ROUTES } from "./constant";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: AUTH_ROUTES.login,
                async lazy() {
                    const LoginPage = await import("@/pages/Auth/Login/index");
                    return { Component: LoginPage.default };
                },
            },
        ],
    },
]);

export default router;

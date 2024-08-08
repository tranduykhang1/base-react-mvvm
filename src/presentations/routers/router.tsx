import { Layout } from "@/presentations/layout/Main.layout";
import { createBrowserRouter } from "react-router-dom";
import { AUTH_ROUTES } from "../../enum/router.enum";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: AUTH_ROUTES.login,
                async lazy() {
                    const LoginPage = await import("@/presentations/pages/Auth/Login/index");
                    return { Component: LoginPage.default };
                },
            },
        ],
    },
]);

export default router;

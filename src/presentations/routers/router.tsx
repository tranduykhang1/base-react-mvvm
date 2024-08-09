import { Layout } from "@/presentations/layout/Main.layout";
import { createBrowserRouter } from "react-router-dom";
import { AUTH_ROUTES, BASE_ROUTES } from "../../enum/router.enum";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: AUTH_ROUTES.login,
                async lazy() {
                    const LoginPage = await import(
                        "@/presentations/pages/Auth/Login/index"
                    );
                    return { Component: LoginPage.default };
                },
            },
            {
                path: BASE_ROUTES.home,
                async lazy() {
                    const HomePage = await import(
                        "@/presentations/pages/Home/index"
                    );
                    return { Component: HomePage.default };
                },
            },
        ],
    },
]);

export default router;

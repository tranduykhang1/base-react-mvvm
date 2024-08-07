import { AuthProvider } from "@/providers/AuthProvider";
import { AUTH_ROUTES } from "@/router/constant";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.layout";

export const Layout = () => {
    return (
        <AuthProvider redirectTo={AUTH_ROUTES.login}>
            <Suspense fallback={<>Loading</>}>
                <Header />
                <Outlet />
                <>Header</>
            </Suspense>
        </AuthProvider>
    );
};

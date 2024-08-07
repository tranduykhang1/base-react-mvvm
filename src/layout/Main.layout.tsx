import { AuthProvider } from "@/providers/AuthProvider";
import { AUTH_ROUTES } from "@/router/constant";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(()=> import("@/layout/Header.layout"));

export const Layout = () => {
    return (
        <AuthProvider redirectTo={AUTH_ROUTES.login}>
            <Suspense fallback={<>Loading</>}>
                <Header />
                <Outlet />
                <>Footer</>
            </Suspense>
        </AuthProvider>
    );
};

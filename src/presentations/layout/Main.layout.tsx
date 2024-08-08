import { AUTH_ROUTES } from "@/enum/router.enum";
import { AuthProvider } from "@/providers/AuthProvider";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = lazy(()=> import("@/presentations/layout/Header.layout"));

export const Layout = () => {
    return (
        <AuthProvider redirectTo={AUTH_ROUTES.login}>
            <Suspense fallback={<>Loading</>}>
                <Header />
                <Outlet />
            </Suspense>
        </AuthProvider>
    );
};

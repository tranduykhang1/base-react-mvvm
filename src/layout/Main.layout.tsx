import { useAuth } from "@/hooks/auth/useAuth";
import { AUTH_ROUTES } from "@/router/constant";
import { Outlet } from "react-router-dom";
import Header from "./Header.layout";

export const Layout = () => {
    useAuth({ redirectTo: AUTH_ROUTES.login });
    return (
        <>
            <Header/>
            <Outlet />
            <>Header</>
        </>
    );
};

import { AUTH_ROUTES } from "@/enum/router.enum";
import { AuthProvider } from "@/providers/AuthProvider";
import { Fragment, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import PageLoading from "../components/Loading/PageLoading";
import { useLayoutViewModel } from "../viewModels/LayoutViewModel";

const Header = lazy(() => import("@/presentations/layout/Header.layout"));

export const Layout = () => {
    const { showHeader } = useLayoutViewModel();

    return (
        <AuthProvider redirectTo={AUTH_ROUTES.login}>
            <Suspense fallback={<PageLoading />}>
                <Fragment>
                    {showHeader && <Header />}
                    <Outlet />
                </Fragment>
            </Suspense>
        </AuthProvider>
    );
};

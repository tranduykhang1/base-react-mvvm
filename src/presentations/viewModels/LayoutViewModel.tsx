import { AUTH_ROUTES } from "@/enum/router.enum";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface UseLayoutViewModelResponse {
    showHeader: boolean;
}

const excludeHeaderPaths = [AUTH_ROUTES.login] as string[];
export function useLayoutViewModel(): UseLayoutViewModelResponse {
    const [showHeader, setShowHeader] = useState<boolean>(true);

    const { pathname } = useLocation();

    useEffect(() => {
        if (excludeHeaderPaths.includes(pathname)) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }, [pathname]);

    return {
        showHeader,
    };
}

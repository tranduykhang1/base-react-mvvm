import { AuthModel } from "@/core/models/auth.model";
import { UserModel } from "@/core/models/user.model";
import { userUseCase } from "@/core/useCases/user.userCase";
import { AUTH_KEY } from "@/enum/auth.enum";
import { UseAuthResponse } from "@/types/auth.type";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../api/useFetching";
import { useLocalStorage } from "../common/useLocalStorage";

export const useAuth = (redirectTo = null): UseAuthResponse => {
    const { value: token, removeValue } = useLocalStorage<AuthModel>(
        AUTH_KEY.token
    );
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [currentUser, setCurrentUser] = useState<UserModel | null>(null);
    const { execute: fetchCurrentUser } = useFetching<UserModel>(
        userUseCase.getCurrent
    );

    const redirect = useCallback(() => {
        navigate(redirectTo, { replace: true });
    }, []);

    const getCurrentUser = useCallback(async () => {
        const { data, error } = await fetchCurrentUser();
        if (data) {
            setCurrentUser(data);
            setIsAuth(true);
        } else if (error) {
            setIsAuth(false);
            redirect();
            return;
        }
    }, [fetchCurrentUser, redirect]);

    useEffect(() => {
        if (!token?.accessToken) {
            removeValue(AUTH_KEY.token);
            redirect();
        } else {
            getCurrentUser();
        }
        setIsAuthenticating(false)
    }, [token]);

    return {
        getCurrentUser,
        isAuthenticating,
        isAuth,
        token: token?.accessToken ?? "",
        user: currentUser,
    };
};

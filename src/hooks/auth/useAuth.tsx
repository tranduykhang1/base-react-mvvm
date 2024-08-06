import { AuthModel } from "@/core/models/auth.model";
import { UserModel } from "@/core/models/user.model";
import { userUseCase } from "@/core/useCases/user.userCase";
import { AUTH_KEY } from "@/enum/auth.enum";
import { UseAuthResponse } from "@/types/auth.type";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../api/useFetching";
import { useLocalStorage } from "../common/useLocalStorage";
export const useAuth = ({
    redirectTo,
}: {
    redirectTo?: string;
}): UseAuthResponse => {
    const { value, setValue } = useLocalStorage<AuthModel>(AUTH_KEY.token);
    const navigate = useNavigate();
    const [isAuth] = useState(false);
    const [currentUser, setCurrentUser] = useState<UserModel>(null);
    const { execute: _getCurrentUser } = useFetching<UserModel>(
        userUseCase.getCurrent
    );

    const redirect = useCallback(() => {
        navigate(redirectTo, {
            replace: true,
        });
    }, [navigate, redirectTo]);

    const getCurrentUser = useCallback(async () => {
        const res = await _getCurrentUser();
        if (res.data) {
            setCurrentUser(res.data);
        }
        if (res.error) {
            redirect();
        }
    }, []);

    useEffect(() => {
        if (redirectTo && !value?.accessToken) {
            navigate(redirectTo, { replace: true });
            setValue(null);
            return;
        }
        getCurrentUser();
    }, [value]);

    return {
        getCurrentUser,
        isAuth,
        token: "13527f08-0986-566c-9437-9c814d32c27e",
        user: currentUser,
    };
};

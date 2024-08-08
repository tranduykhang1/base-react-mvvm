import { AuthModel } from "@/core/models/auth.model";
import { authUseCase } from "@/core/useCases/auth.useCase";
import { AUTH_KEY } from "@/enum/auth.enum";
import { AUTH_ROUTES } from "@/enum/router.enum";
import { LoginPayload } from "@/types/auth.type";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../hooks/api/useFetching";
import { useAuth } from "../hooks/auth/useAuth";
import { useLocalStorage } from "../hooks/common/useLocalStorage";
import { useSnackbar } from "../hooks/common/useSnackbar";

export const useAuthViewModel = () => {
    const { execute: _login, loading: isLogging } = useFetching<AuthModel>(
        authUseCase.login
    );
    const { execute: _logout } = useFetching<void>(authUseCase.logout);
    const { showSnackbar } = useSnackbar();
    const { setValue } = useLocalStorage(AUTH_KEY.token);
    const { getCurrentUser } = useAuth();
    const navigator = useNavigate();

    const onLogin = async (payload: LoginPayload) => {
        const { data, error } = await _login<LoginPayload>(payload);
        if (data) {
            setValue({ ...data });
            showSnackbar("Login successfully", "success");
            getCurrentUser();
            window.location.replace(import.meta.env.VITE_APP_URL);
        }
        if (error) {
            showSnackbar(error.message, "error");
        }
    };

    const logout = async () => {
        setValue(null);
        await _logout<LoginPayload>();
        navigator(AUTH_ROUTES.login);
    };

    return {
        isLogging,
        onLogin,
        logout,
    };
};

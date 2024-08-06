import { AUTH_KEY } from "@/enum/auth.enum";
import { useAuth } from "@/hooks/auth/useAuth";
import { useLocalStorage } from "@/hooks/common/useLocalStorage";
import { useSnackbar } from "@/hooks/common/useSnackbar";
import { AUTH_ROUTES, BASE_ROUTES } from "@/router/constant";
import { LoginPayload } from "@/types/auth.type";
import { useNavigate } from "react-router-dom";
import { useFetching } from "../../hooks/api/useFetching";
import { AuthModel } from "../models/auth.model";
import { authUseCase } from "../useCases/auth.useCase";

export const useAuthViewModel = () => {
    const { execute: _login, loading: isLogging } = useFetching<AuthModel>(
        authUseCase.login
    );
    const { execute: _logout } = useFetching<void>(authUseCase.logout);
    const { showSnackbar } = useSnackbar();
    const { setValue } = useLocalStorage(AUTH_KEY.token);
    const { getCurrentUser } = useAuth({ redirectTo: "" });
    const navigator = useNavigate();

    const onLogin = async (payload: LoginPayload) => {
        const { data, error } = await _login<LoginPayload>(payload);
        if (data) {
            showSnackbar("Login successfully", "success");
            setValue({ ...data });
            navigator(BASE_ROUTES.home);
            getCurrentUser();
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

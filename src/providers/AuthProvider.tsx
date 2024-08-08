import { useAuth } from "@/presentations/hooks/auth/useAuth";
import { UseAuthResponse } from "@/types/auth.type";
import React, { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps {
    children: ReactNode;
    redirectTo?: string;
}

const AuthContext = createContext<UseAuthResponse | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({
    children,
    redirectTo,
}) => {
    const auth = useAuth(redirectTo);

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): UseAuthResponse => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};

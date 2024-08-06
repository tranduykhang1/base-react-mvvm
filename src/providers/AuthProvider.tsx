import { createContext } from "react";

export const AuthProviderContext = createContext<object | undefined>(undefined);
export const AuthProvider = ({ children }) => {
    return (
        <AuthProviderContext.Provider value={{}}>
            {children}
        </AuthProviderContext.Provider>
    );
};

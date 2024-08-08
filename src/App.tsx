import { ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { coreTheme } from "./config/theme";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import router from "./presentations/routers/router";
import ErrorBoundary from "./presentations/pages/ErrorBoundary";

export function App() {
    const theme = useMemo(() => {
        return coreTheme.buildTheme({ mode: "light" }, "sans-serif");
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider>
                <ErrorBoundary>
                    <RouterProvider router={router} />
                </ErrorBoundary>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

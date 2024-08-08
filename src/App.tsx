import { ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { coreTheme } from "./config/theme";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import router from "./presentations/routers/router";

export function App() {
    const theme = useMemo(() => {
        return coreTheme.buildTheme({ mode: "light" }, "sans-serif");
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider>
                <RouterProvider router={router} />
            </SnackbarProvider>
        </ThemeProvider>
    );
}

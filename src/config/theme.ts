import { createTheme, ThemeOptions } from "@mui/material/styles";

export class ThemeBuilder {
    baserTheme: ThemeOptions = {
        components: {
            // Name of the component
            MuiButton: {
                styleOverrides: {
                    // Name of the slot
                    root: {
                        // Some CSS
                        textTransform: "capitalize",
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: "black",
                        fontSize: 14,
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: "black",
                        fontSize: 14,
                    },
                },
            },
        },
    };

    darkTheme = (fontFamily?: string) =>
        createTheme({
            ...this.baserTheme,
            palette: {
                primary: {
                    main: "#9966FF",
                },
                error: {
                    main: "#F46241",
                },
                background: {
                    default: "#070c27",
                },
                text: {
                    primary: "#C9CAD0",
                    secondary: "#C9CAD0",
                },
            },
            typography: {
                fontFamily: fontFamily,
                allVariants: {
                    color: "#C9CAD0",
                },
                h2: {
                    fontSize: "24px",
                    color: "#2A2A2A",
                    fontWeight: 500,
                    lineHeight: "20px",
                },
                h3: {
                    fontSize: "20px",
                    color: "#282531",
                    fontWeight: 600,
                    lineHeight: "27px",
                },
                h4: {
                    fontSize: "18px",
                    color: "#525252",
                    fontWeight: 400,
                    lineHeight: "20px",
                },
                h5: {
                    fontSize: "14px",
                    color: "#E4D4D3",
                    fontWeight: 400,
                    lineHeight: "20px",
                },
                h6: {
                    fontSize: "12px",
                    color: "#E4D4D3",
                    fontWeight: 400,
                    lineHeight: "20px",
                },
            },
        });

    lightTheme = (fontFamily?: string) =>
        createTheme({
            ...this.baserTheme,
            palette: {
                mode: "light",
                primary: {
                    main: "#254336",
                },
                secondary: {
                    main: "#254388",
                },
                error: {
                    main: "#f44336",
                },
                warning: {
                    main: "#ff9800",
                },
                info: {
                    main: "#2196f3",
                },
                success: {
                    main: "#4caf50",
                },
                background: {
                    default: "#FFFF",
                },
                text: {
                    primary: "#000000DE",
                    secondary: "#808080",
                    disabled: "#00000099",
                },
            },
            typography: {
                fontFamily: fontFamily,
                allVariants: {
                    color: "inherit",
                },
                h2: {
                    fontSize: "24px",
                    color: "#2A2A2A",
                    fontWeight: 500,
                    lineHeight: "20px",
                },
                h3: {
                    fontSize: "20px",
                    color: "#282531",
                    fontWeight: 600,
                    lineHeight: "27px",
                },
                h4: {
                    fontSize: "18px",
                    color: "#525252",
                    fontWeight: 400,
                    lineHeight: "20px",
                },
                h5: {
                    fontSize: "14px",
                    color: "#000000DE",
                    fontWeight: 400,
                    lineHeight: "20px",
                },
                h6: {
                    fontSize: "12px",
                    color: "#000000",
                    fontWeight: 400,
                    lineHeight: "20px",
                },
            },
        });

    buildTheme = (setting?: { mode: string }, fontFamily?: string) => {
        if (setting?.mode === "dark") {
            return this.darkTheme(fontFamily);
        }
        return this.lightTheme(fontFamily);
    };
}

export const coreTheme = new ThemeBuilder();

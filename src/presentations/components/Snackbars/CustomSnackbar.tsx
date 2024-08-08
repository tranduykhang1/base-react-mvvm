import { SnackbarContext } from "@/providers/SnackbarProvider";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useContext } from "react";

export default function CustomizedSnackbar() {
    const { state, closeSnackbar } = useContext(SnackbarContext)!;
    const { vertical, horizontal, open, message, severity } = state;

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={6000}
                onClose={closeSnackbar}
                key={vertical + horizontal}
            >
                <Alert
                    severity={severity}
                    variant="filled"
                    sx={{ width: "100%" }}
                    onClose={closeSnackbar}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}

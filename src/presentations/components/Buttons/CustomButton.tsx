// components/CustomButton.tsx
import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";

interface CustomButtonProps extends ButtonProps {
    label: string;
    loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    loading = false,
    ...props
}) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
            {...props}
            disableElevation
            onLoad={() => loading}
        >
            {label}
        </Button>
    );
};

export default CustomButton;

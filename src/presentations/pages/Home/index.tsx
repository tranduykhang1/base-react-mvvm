import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const HomePage: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundImage:
                    "url(https://images.pexels.com/photos/4022082/pexels-photo-4022082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add overlay for better text readability
                },
            }}
        >
            <Container maxWidth="lg" sx={{ textAlign: "center", py: 8, zIndex: 1 }}>
                <Typography variant="h3" color="white" gutterBottom>
                    Welcome to React MVVM
                </Typography>
                <Typography variant="h6" color="white" paragraph>
                    We build modern solutions for modern problems. Let's start
                    your journey with us.
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Get Started
                </Button>
            </Container>
        </Box>
    );
};

export default HomePage;

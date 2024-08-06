import CustomButton from "@/components/Buttons/CustomButton";
import CustomTextField from "@/components/TextFields/CustomTextField";
import { useAuthViewModel } from "@/core/view-models/AuthViewAuthModel";
import { loginValidationSchema } from "@/schemas/auth.schema";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Field, Form, Formik } from "formik";

export default function LoginPage() {
    const { onLogin } = useAuthViewModel();

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    pt: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={loginValidationSchema}
                    onSubmit={onLogin}
                >
                    {({ isSubmitting }) => (
                        <Form style={{ width: "100%", marginTop: 1 }}>
                            <Field
                                component={CustomTextField}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                required
                            />
                            <Field
                                component={CustomTextField}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                required
                            />
                            <FormControlLabel
                                control={
                                    <Field
                                        as={Checkbox}
                                        name="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <CustomButton
                                label="Login"
                                loading={isSubmitting}
                            />
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        // href={AuthRoute.register}
                                        variant="body2"
                                    >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
}

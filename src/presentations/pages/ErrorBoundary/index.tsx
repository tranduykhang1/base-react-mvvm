import React from "react";
import { Box, Button } from "@mui/material";

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(error);
		console.log(errorInfo);
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						minHeight: "100vh",
					}}
				>
					<h1 style={{ margin: 50 }}>Something went wrong!!!</h1>
					<Box sx={{ display: "flex", gap: 2 }}>
						<Button
							variant="contained"
							onClick={() => {
								window.location.href = "/";
							}}
						>
							Back Home
						</Button>
						<Button
							variant="contained"
							onClick={() => window.location.reload()}
						>
							Reload Page
						</Button>
					</Box>
				</Box>
			);
		}

		return this.props.children;
	}
}
export default ErrorBoundary;

import { Box } from "@material-ui/core";
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import theme from "../theme";

const Error = () => (
    <Box height='100vh' >
        <ThemeProvider theme={theme}>
            <Typography variant="h6">Something went wrong...Please, try again...</Typography>
        </ThemeProvider>
    </Box>
);

export default Error;

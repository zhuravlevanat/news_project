import {Box} from "@material-ui/core";
// import LinearProgress from "@material-ui/core/LinearProgress";
import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../theme";
import Typography from "@material-ui/core/Typography";

const Error = () => (
    <Box  height='100vh' >
        <ThemeProvider theme={theme}>
            <Typography variant="h6">Something went wrong...Please, try again...</Typography>
        </ThemeProvider>
    </Box>
);

export default Error;
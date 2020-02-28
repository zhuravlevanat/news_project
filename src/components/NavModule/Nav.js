import React, {Fragment} from "react";
import Box from '@material-ui/core/Box';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../theme";
import Typography from "@material-ui/core/Typography";
import Link from "./Link";

const Nav = () => {
    return (
        <Fragment>
            <Box paddingX={40} paddingY={4} bgcolor='#232223' color='#f2f3f4' display="flex">
                <Link path={"/"}/>
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">News Dealer</Typography>
                </ThemeProvider>

            </Box>
        </Fragment>
    )
}



export default Nav;

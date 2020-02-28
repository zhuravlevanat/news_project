import Nav from '../NavModule/Nav';
import React from "react";
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { useStyles } from "./styles";

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <Container maxWidth="lg" component="div" className={classes.root}>
                {children}
            </Container>
        </ThemeProvider>
    );
};

export default Layout;

import Nav from '../NavModule/Nav';
import React from "react";
import Container from '@material-ui/core/Container';
import theme from '../theme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
        height: '100%',
        padding: '20px',
    },
}));

const Layout = props => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <Container maxWidth="lg" component={"div"} classes={{root: classes.root}}>
                {props.children}
            </Container>
        </ThemeProvider>
    )
};

export default Layout;
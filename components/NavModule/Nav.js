import Link from './Link';
import React, {Fragment} from "react";
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "../theme";
import Typography from "@material-ui/core/Typography";

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const Nav = (props) => {
    return (
        <Fragment>
          <style jsx>{`
              .nav-link {
                text-decoration: none;
                color: #19857b; 
                margin-top: 5px;
                margin-right: 50px;       
                   
              }
              .active {
                pointer-events: none;
                color: #19857b;
                text-decoration: none;
                margin-top: 5px;
                margin-right: 50px;
                
              }
            `}
          </style>
            <Box paddingX={40} paddingY={4} bgcolor='#232223' color='#f2f3f4' display="flex">
                <Link activeClassName="active"  href="/">
                    <a className="nav-link"><HomeIcon fontSize="large" style={{ width: '60px' }} /></a>
                </Link>
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">News Dealer</Typography>
                </ThemeProvider>
                {/*<Link activeClassName="active"  href="/news">*/}
                {/*    <a className="nav-link">News</a>*/}
                {/*</Link>*/}
            </Box>
        </Fragment>
    )
}


export default Nav;

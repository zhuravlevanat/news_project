import Link from "next/link";
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import MyLink from '@material-ui/core/Link';
import { useStyles } from "./NewsLinkStyles";

const ListItemLink = ({ title }) => {
    const classes = useStyles();
    return (
        <ListItem>
            <Link href={`/news?category=${title}`}>
                <MyLink className={classes.root}>{title}</MyLink>
            </Link>
        </ListItem>
    );
};

export default ListItemLink;

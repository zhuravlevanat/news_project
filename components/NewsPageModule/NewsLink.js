import Link from "next/link";
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import MyLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ({
    root: {
        cursor: 'pointer',
        color: theme.palette.info.main,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: '1.5rem',
    },
}))


const ListItemLink = props => {
    const classes = useStyles();
    return (
         <ListItem>
           <Link href={`/news?category=${props.title}`}>
                <MyLink classes={{root: classes.root}}>{props.title}</MyLink>
            </Link>
        </ListItem>
    )
};


export default ListItemLink;
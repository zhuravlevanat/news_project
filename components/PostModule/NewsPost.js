import React from "react";
import { parsePublishedAt } from './logic';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '1000',
        margin: 'auto',
        marginBottom: '30px',
    },
    media: {
        minHeight: '200px',
        borderRadius: '3px',
        margin: '5px',
        width: '50%',
        float: 'left',
    },

    subheader: {
       textAlign: 'right',
        fontSize: '0.8rem',
        marginRight: '25px',

    },
}));

const useStyles2 = makeStyles(theme => ({
    root: {
        marginLeft: '290px',
        marginTop: '-15px',
        marginRight: '15px',
        textAlign: 'justify',
    },
}));

const NewsPost = ({item}) => {
    const {author, title, description, publishedAt, urlToImage, url } = item;
    const classes = useStyles();
    const classes2 = useStyles2();
    return (
          <Card className={classes.root}>
                <CardHeader
                    classes={{subheader: classes.subheader}}
                    title={title}
                    subheader={`${author} ${parsePublishedAt(publishedAt)}`}
                />
                {urlToImage && <CardMedia
                    className={classes.media}
                    image={`${urlToImage}`}
                    title={title}
                />}
                <CardContent className={classes2.root}>
                    {description}
                </CardContent>
                <CardActions>
                    <Link color='primary' href={url} target="_blank" >
                        Main source here...
                    </Link>
                </CardActions>
          </Card>
    )
};

export default NewsPost;
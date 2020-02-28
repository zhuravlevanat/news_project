import NewsLink from "../helpers/NewsLink";
import React from "react";
import List from '@material-ui/core/List';
import Spinner from "../helpers/Spinner";

const CategoriesList = ({ categories, loading }) => {
    return (
        <>
            {loading
                ? <Spinner />
                : (
                    <List component="ul" aria-label="news categories">
                        {categories.map((title, index) => <NewsLink title={title} key={index}/>)}
                    </List>
                )
            }
        </>
    )
};

export default CategoriesList;

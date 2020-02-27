import NewsLink from "../helpers/NewsLink";
import React, {Fragment} from "react";
import List from '@material-ui/core/List';
import Spinner from "../helpers/Spinner";

const CategoriesList = ({categories, loading}) => {
    return (
        <Fragment>
            {loading
                ? <Spinner />
                : (
                    <List component="ul" aria-label="news categories">
                        {categories.map((title, index) => <NewsLink title={title} key={index}/>)}
                    </List>
                )
            }
        </Fragment>
    )
};

export default CategoriesList;
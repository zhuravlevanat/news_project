import {connect} from "react-redux";
import NewsLink from "../NewsPageModule/NewsLink";
import { getCategories } from "../../redux/Categories/selector";
import React, {Fragment} from "react";
import List from '@material-ui/core/List';
import {getLoadingState} from "../../redux/News/selectors";
import Spinner from "../helpers/Spinner";

const mapStateToProps = (state) => {
    return {
        categories: getCategories(state),
        loading: getLoadingState(state),
    }
}

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

export default connect(mapStateToProps)(CategoriesList);
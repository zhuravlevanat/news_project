import React from "react";
import { connect } from 'react-redux'
import Layout from "../LayoutModule/Layout";
import {getLoadingState, getNews, isError} from '../../redux/News/selectors';
import NewsPost from "../PostModule/NewsPost";
import List from "@material-ui/core/List";

import Spinner from "../helpers/Spinner";
import Error from "../helpers/Error";

const mapStateToProps = (state) => {
    return {
        news: getNews(state),
        loading: getLoadingState(state),
        error: isError(state)
    }
}

const NewsPage = ({ news, loading, error }) => {
    return (
        <Layout >
            {loading ? <Spinner/>:  <List>{news.map((item, index) => (
                <NewsPost key={index} item={item}/>))}
            </List>}
            {error && <Error />}

        </Layout>
    )
}

export default connect(mapStateToProps)(NewsPage);

import {changeLoadingState, loadNews} from "../../redux/News/actions";
import { addCurrentCategory } from "../../redux/Categories/actions";
import { connect } from 'react-redux'
import React from "react";
import NewsPage from "../../components/NewsPageModule";

const PageWithNews = () => (
     <NewsPage/>
);

PageWithNews.getInitialProps = async function(props) {
    const { store, query } = props.ctx;
    await store.dispatch(addCurrentCategory(query.category));
    await store.dispatch(loadNews());
    await store.dispatch(changeLoadingState(true));

};

export default connect()(PageWithNews);
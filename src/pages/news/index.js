import { loadNews } from "../../redux/News/actions";
import { addCurrentCategory } from "../../redux/Categories/actions";
import { connect } from 'react-redux'
import React from "react";
import NewsPage from "../../components/NewsPageModule";

const PageWithNews = () => (
     <NewsPage/>
);

PageWithNews.getInitialProps = async (props) => {
    const { store, query } = props.ctx;
    await store.dispatch(addCurrentCategory(query.category));
    await store.dispatch(loadNews());
};

export default PageWithNews;
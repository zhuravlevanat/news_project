import React from "react";
import Layout from "../LayoutModule/Layout";
import NewsPost from "../PostModule/NewsPost";
import List from "@material-ui/core/List";
import Spinner from "../helpers/Spinner";
import Error from "../helpers/Error";

const NewsPage = ({ news, loading, error }) => {
    console.log('news', news);
    return (
        <Layout >
            {loading
                ? <Spinner/>
                : <List>{news.map((item, index) => (<NewsPost key={index} item={item}/>))}</List>}
            {error && <Error />}
        </Layout>
    )
};

export default NewsPage;

import React from "react";
import Layout from "../LayoutModule/Layout";
import NewsList from "./NewsList";
import Error from "../helpers/Error";

const NewsPage = ({ news, loading, error }) => (
    <Layout >
        {error ? <Error /> : <NewsList news={news} loading={loading}/>}
    </Layout>
);

export default NewsPage;

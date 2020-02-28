import List from "@material-ui/core/List";
import React from "react";
import Spinner from "../helpers/Spinner";
import NewsPost from "../NewsPost/NewsPost";


const NewsList = ({ news, loading }) => (
    <>
        {loading
            ? <Spinner/>
            : <List>{news.map((item, index) => <NewsPost key={index} item={item}/>)}</List>}
    </>
);

export default NewsList;

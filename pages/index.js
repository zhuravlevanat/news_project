import React from "react";
import CategoriesList from "../components/ListCategoriesModule/CategoriesList";
import Layout from "../components/LayoutModule/Layout";
import AddCategoryForm from "../components/AddCategoryModule/AddCategory";
import { loadCategories } from "../redux/Categories/actions";
import {connect} from "react-redux";
import  {categories} from "../constants/categoriesList";
import CssBaseline from "@material-ui/core/CssBaseline";
import {changeLoadingState} from "../redux/News/actions";


const Index = () => (
    <Layout>
        <CssBaseline/>
        <CategoriesList/>
        <AddCategoryForm/>
    </Layout>

);

Index.getInitialProps = async function(props) {
    const { store } = props.ctx;
    if (store.getState().categoryData.categories.length === 0) {
        await store.dispatch(changeLoadingState(true));
        await store.dispatch(loadCategories(categories));
        await store.dispatch(changeLoadingState(false));
    }

};

export default connect()(Index);



import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../components/LayoutModule/Layout";
import AddCategoryForm from "../components/CategoryForm";
import CategoriesList from "../components/ListCategoriesModule";
import { loadCategories } from "../redux/Categories/actions";
import { categories } from "../constants/categoriesList";

const Index = () => (
    <Layout>
        <CssBaseline/>
        <CategoriesList/>
        <AddCategoryForm/>
    </Layout>
);

Index.getInitialProps = async (props) => {
    const { store } = props.ctx;
    if (store.getState().categoryData.categories.length === 0) {
        await store.dispatch(loadCategories(categories));
    }
};

export default Index;

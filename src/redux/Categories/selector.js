import { createSelector } from 'reselect';

const getCategoryData = (state) => state.categoryData;

export const getCurrentCategory = createSelector(
    getCategoryData,
    (categoryData) => categoryData.currentCategory
);
export const getCategories = createSelector(
    getCategoryData,
    (categoryData) => categoryData.categories
);
export const getNewCategory = createSelector(
    getCategoryData,
    (categoryData) => categoryData.newCategory
)
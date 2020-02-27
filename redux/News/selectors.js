import { createSelector } from 'reselect';

const getNewsData = (state) => state.newsData;

export const getNews = createSelector(
    getNewsData,
    (newsData) => newsData.news
);

export const getLoadingState = createSelector(
    getNewsData,
    (newsData) => newsData.loading
);

export const isError = createSelector(
    getNewsData,
    (newsData) => newsData.error
);

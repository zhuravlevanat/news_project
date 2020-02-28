import React from "react";
import { shallow } from 'enzyme';
import NewsPage from "./NewsPage";

describe('NewsPage', () => {
    const props = {
        news: [],
        error: false,
    };
    describe('News page initial', () => {
        const newsPage = shallow(<NewsPage {...props} />);
        it('renders properly', () => {
            expect(newsPage).toMatchSnapshot();
        });

        it('render initial', () => {
            expect(newsPage.find('Error')).toHaveLength(0);
            expect(newsPage.find(`NewsList`)).toHaveLength(1);
        });
    });
    describe('News page with error', () => {
        const nextProps = {
            ...props,
            error: true,
        };
        const newsPage = shallow(<NewsPage {...nextProps} />);

        it('renders properly', () => {
            expect(newsPage).toMatchSnapshot();
        });

        it('render error', () => {
            expect(newsPage.find('Error')).toHaveLength(1);
            expect(newsPage.find(`NewsList`)).toHaveLength(0);
        });
    });
});

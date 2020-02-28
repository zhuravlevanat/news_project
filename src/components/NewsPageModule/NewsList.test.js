import React from "react";
import { shallow } from 'enzyme';
import NewsList from "./NewsList";


describe('NewsList', () => {
    const props = {
        news: [],
        loading: false,
    };
    describe('News list initial', () => {
        const newsList = shallow(<NewsList {...props} />);
        it('renders properly', () => {
            expect(newsList).toMatchSnapshot();
        });

        it('render initial', () => {
            expect(newsList.find('Spinner')).toHaveLength(0);
            expect(newsList.find(`WithStyles(ForwardRef(List))`)).toHaveLength(1);
        });
    });
    describe('NewsList with loading', () => {
        const nextProps = {
            ...props,
            loading: true,
        };
        const newsList = shallow(<NewsList {...nextProps} />);

        it('renders properly', () => {
            expect(newsList).toMatchSnapshot();
        });

        it('render loading', () => {
            expect(newsList.find('Spinner')).toHaveLength(1);
            expect(newsList.find(`WithStyles(ForwardRef(List))`)).toHaveLength(0);
        });
    });
    describe('NewsList with news', () => {
        const nextProps = {
            ...props,
            news: [{ title: 'hello' }],
            loading: false,
        };
        const list = shallow(<NewsList {...nextProps} />);
        console.log(list.debug());
        it('render loading', () => {
            expect(list.find('NewsPost')).toHaveLength(nextProps.news.length);
        });
    });
});

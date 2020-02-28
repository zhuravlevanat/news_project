import React from "react";
import { shallow } from 'enzyme';
import CategoriesList from "./CategoriesList";

describe('CategoriesList', () => {
    const props = {
        categories: [],
        loading: false,
    };
    describe('CategoriesList initial', () => {
        const list = shallow(<CategoriesList {...props} />);
        it('renders properly', () => {
            expect(list).toMatchSnapshot();
        });

        it('render initial', () => {
            expect(list.find('Spinner')).toHaveLength(0);
            expect(list.find(`WithStyles(ForwardRef(List))`)).toHaveLength(1);
        });
    });
    describe('CategoriesList loading', () => {
        const nextProps = {
            ...props,
            loading: true,
        };
        const list = shallow(<CategoriesList {...nextProps} />);

        it('renders properly', () => {
            expect(list).toMatchSnapshot();
        });

        it('render loading', () => {
            expect(list.find('Spinner')).toHaveLength(1);
            expect(list.find(`WithStyles(ForwardRef(List))`)).toHaveLength(0);
        });
    });
    describe('NewsList with loading', () => {
        const nextProps = {
            ...props,
            categories: ['food', 'drinks'],
            loading: false,
        };
        const list = shallow(<CategoriesList {...nextProps} />);
        console.log(list.debug());
        it('render loading', () => {
            expect(list.find('ListItemLink')).toHaveLength(nextProps.categories.length);
        });
    });
});

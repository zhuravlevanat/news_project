import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import NewsLink from "./NewsLink";

Enzyme.configure({ adapter: new Adapter() });

describe('NewsLink', () => {
    describe('NewsLink wrapper', () => {
        const props = {
            title: 'sport',
        }
        const link = shallow(<NewsLink {...props}/>);
        it('renders without crashing', () => {
            expect(toJson(link)).toMatchSnapshot();
        });
        it('renders 1 link wrapper', () => {
            expect(link.find('WithStyles(ForwardRef(ListItem))')).toHaveLength(1);
        });
    });
    describe('NewLink title', () => {
        const nextProps = {
            title: 'film',
        };
        const link = mount(<NewsLink {...nextProps}/>);
        it('NewsLink contains title', () => {
            expect(link.find('Link').text()).toEqual(nextProps.title);
        });
    });
});

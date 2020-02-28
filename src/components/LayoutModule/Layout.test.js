import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout';

Enzyme.configure({ adapter: new Adapter() });

describe('Layout', () => {
    const layout = shallow(<Layout />);
    it('renders correctly layout', () => {
        expect(toJson(layout)).toMatchSnapshot();
    });
    it('renders 1 Nav', () => {
        expect(layout.find('Nav')).toHaveLength(1);
    });
});

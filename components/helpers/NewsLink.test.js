import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import NewsLink from "./NewsLink";

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly news link', () => {
    const err = shallow(<NewsLink />);
    expect(toJson(err)).toMatchSnapshot();
});

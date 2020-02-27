import React from 'react';
import Error from './Error';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly error', () => {
    const err = shallow(<Error />);
    expect(toJson(err)).toMatchSnapshot();
});


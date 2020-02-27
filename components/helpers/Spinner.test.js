import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from "./Spinner";

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly error', () => {
    const err = shallow(<Spinner />);
    expect(toJson(err)).toMatchSnapshot();
});

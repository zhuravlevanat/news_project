import React from 'react';
import Error from './Error';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Error', () => {
    describe('Error wrapper', () => {
        const error = shallow(<Error/>);
        it('renders without crashing', () => {
            expect(toJson(error)).toMatchSnapshot();
        });
        it('renders 1 box', () => {
            expect(error.find('WithStyles(ForwardRef(Typography))')).toHaveLength(1);
        });
    });
    describe('Error description', () => {
        const errMessage = 'Something went wrong...Please, try again...';
        const error = mount(<Error />);
        it('error contains text', () => {
            expect(error.find('.MuiTypography-root').text()).toEqual(errMessage);
        });
    });
});

import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from "./Spinner";

Enzyme.configure({ adapter: new Adapter() });

describe('Spinner', () => {
    describe('Spinner box', () => {
        const spinner = shallow(<Spinner/>);
        it('renders without crashing', () => {
            expect(toJson(spinner)).toMatchSnapshot();
        });
        it('renders 1 box', () => {
            expect(spinner.find('Styled(MuiBox)'))
                .toHaveLength(1);
        });
    });
    describe('Spinners', () => {
        const spinner = mount(<Spinner />);
        it('renders container 2 spinner', () => {
            expect(spinner.find('WithStyles(ForwardRef(LinearProgress))')).toHaveLength(2);
        });
    });
});

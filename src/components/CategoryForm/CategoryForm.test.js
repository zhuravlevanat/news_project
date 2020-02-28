import React from 'react';
import { shallow } from 'enzyme';
import CategoryForm from './CategoryForm';

describe('CategoryForm', () => {
    const mockForm = jest.fn();
    let props = {};
    let form = null;
    beforeEach(() => {
        props = {
            addNewCategory: mockForm,
            addCategoryInList: mockForm,
            newCategory: 'film',
        };
        form = shallow(<CategoryForm {...props} />);
    });
    describe('initial render', () => {
        it('renders properly', () => {
            expect(form).toMatchSnapshot();
        });
        it('should have text field ', () => {
            expect(form).toHaveLength(1);
        });
        it('should have proper props for category input fields', () => {
            expect(form.find('[id="my-input"]').props()).toEqual({
                onChange: expect.any(Function),
                id: 'my-input',
                required: true,
                value: 'film',
            });
        });
    });
    describe('text data in form', () => {
        const labelText = 'Add your category here...';
        const helperText = 'We\'ll try to find latest news for you....';
        it('should equal label text', () => {
            expect(form.find('WithStyles(ForwardRef(InputLabel))').text()).toEqual(labelText);
        });
        it('should equal helper text', () => {
            expect(form.find('WithStyles(ForwardRef(FormHelperText))').text()).toEqual(helperText);
        });
    });

    describe('event handlers', () => {
        it('should set the category value on change event', () => {
            const component = shallow(<CategoryForm {...props} />);
            component.find('[id="my-input"]').simulate('change', {
                target: {
                    value: 'film',
                },
            });
            expect(component.find('[id="my-input"]').prop('value')).toEqual('film');
        });
        it('should call  on change', () => {
            const component = shallow(<CategoryForm {...props} />);
            component.find('WithStyles(ForwardRef(Input))').getElement().props.onChange({ target: { value: 'value' } });
            expect(props.addCategoryInList).toHaveBeenCalledTimes(1);
        });
        it('should call  on submit', () => {
            form.find('[id="my-input"]').simulate('change', {
                target: {
                    value: 'film',
                },
            });
            expect(props.addNewCategory).toHaveBeenCalledTimes(1);
        });
    });
});

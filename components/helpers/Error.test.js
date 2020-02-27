import React from 'react';
import Error from './Error';
import renderer from 'react-test-renderer';

test('Error renders correctly', () => {
    const component = renderer.create(
        <Error />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
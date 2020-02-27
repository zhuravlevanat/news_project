import React from 'react';
import Layout from './Layout';
import renderer from 'react-test-renderer';

test('Layout renders correctly', () => {
    const component = renderer.create(
        <Layout />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Title } from 'bloomer';

import Home from '../Home';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home/>, div);
});

it('renders without crashing', () => {
    shallow(<Home/>);
});

it('renders welcome message', () => {
    const wrapper = shallow(<Home/>);
    const welcome = <Title>Welcome to Advocado</Title>;
    expect(wrapper.contains(welcome)).toEqual(true);
});

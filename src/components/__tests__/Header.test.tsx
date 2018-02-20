import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import Header from '../Header';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Header color="success"/></BrowserRouter>, div);
});

it('renders without crashing', () => {
    shallow(<BrowserRouter><Header color="success"/></BrowserRouter>);
});

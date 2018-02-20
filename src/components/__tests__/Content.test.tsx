import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import Content from '../Content';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Content/></BrowserRouter>, div);
});

it('renders without crashing', () => {
    shallow(<BrowserRouter><Content/></BrowserRouter>);
});

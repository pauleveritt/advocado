import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Container } from 'bloomer';

import 'bulma/css/bulma.css';

import Header from './Header';
import Content from './Content';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Container isFluid={true} isMarginless={true}>
                    <Header color="success"/>
                    <Content/>
                </Container>
            </BrowserRouter>
        );
    }
}

export default App;

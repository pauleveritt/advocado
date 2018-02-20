import * as React from 'react';

import { Container } from 'bloomer';

import Main from './Main';
import { Header } from './Header';

class App extends React.Component {
    render() {
        return (
            <Container isFluid={true} isMarginless={true}>
                <Header color="success"/>
                <Main/>
            </Container>
        );
    }
}

export default App;

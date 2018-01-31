import * as React from 'react';

import { Container } from 'bloomer';

import Main from '@App/Main';
import { Header } from '@App/Header';

class App extends React.Component {
    render() {
        return (
            <Container isFluid={true} style={{marginTop: 10}}>
                <Header color="success"/>
                <Main/>
            </Container>
        );
    }
}

export default App;

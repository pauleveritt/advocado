import * as React from 'react';

import { Container, Box, Notification } from 'bloomer';

import Employees from './Employees';

class App extends React.Component {
    render() {
        return (
            <Container isFluid={true} style={{marginTop: 10}}>
                <Notification isColor="warning">This container is <strong>centered</strong> on desktop.</Notification>

                <Box>Hello World!

                    <div>
                        <h1>Welcome to Advocado</h1>
                        <p>It's bigly.</p>
                        <h2>Employees</h2>
                        <Employees/>
                    </div></Box>
            </Container>
        );
    }
}

export default App;

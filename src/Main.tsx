import * as React from 'react';
import { Box } from 'bloomer';

import Employees from './Employees';

class Main extends React.Component {
    render() {
        return (
            <Box>Hello World!
                <div>
                    <h1>Welcome to Advocado</h1>
                    <p>It's bigly.</p>
                    <h2>Employees</h2>
                    <Employees/>
                </div>
            </Box>
        );
    }
}

export default Main;
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Box } from 'bloomer';

import { Home } from '@App/Home';
import Employees from '@App/employees/Employees';

class Main extends React.Component {
    render() {
        return (
            <Box>
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        component={Home}
                    />
                    <Route
                        path="/employees"
                        component={Employees}
                    />
                </Switch>
            </Box>
        );
    }
}

export default Main;
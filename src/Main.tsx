import * as React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';

import { Box } from 'bloomer';

import { Home } from './Home';
import Employees from './employees/Employees';

interface TOwnProps extends RouteComponentProps<{}> {
}

const NoMatch = (props: TOwnProps) => (
    <div>
        <h3>No match for <code>{props.location.pathname}</code></h3>
    </div>
);

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
                    <Route component={NoMatch}/>
                </Switch>
            </Box>
        );
    }
}

export default Main;
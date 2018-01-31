import * as React from 'react';
import Employees from './Employees';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to Advocado</h1>
                <p>It's bigly.</p>
                <h2>Employees</h2>
                <Employees/>
            </div>
        );
    }
}

export default App;

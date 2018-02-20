import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'mobx-react';
import { Container } from 'bloomer';

import 'bulma/css/bulma.css';

import Header from './components/Header';
import Content from './components/Content';
import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider counterStore={store}>
                <BrowserRouter>
                    <Container isFluid={true} isMarginless={true}>
                        <Header color="success"/>
                        <Content/>
                    </Container>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;

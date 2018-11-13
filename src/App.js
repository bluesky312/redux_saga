import React, {Component} from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import MainSaga from "./containers";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainSaga/>
            </Provider>
        );
    }
}

export default App;

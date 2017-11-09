import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import FakeRedux from './FakeRedux';
import ComponentConnect from './ComponentConnect';
import spokesman from './spokesman';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppConnect from './AppConnect';
import TwoPartCode from './TwoPartCode';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(spokesman);

ReactDOM.render(
    <div>
        <Provider store={store}>
            <div>
            <Header/>
                <TwoPartCode/>
                <AppConnect/>
                <ComponentConnect/>
            <App store={store}/>
            <FakeRedux/>
            </div>
        </Provider>
    </div>,
    document.getElementById('root'));
registerServiceWorker();

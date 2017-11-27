import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configReducer from './config-reducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(configReducer);
const root = document.getElementById('root');

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>, root);
    </div>
);
registerServiceWorker();
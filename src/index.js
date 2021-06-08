import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import betReducer from './store/reducers/betReducer';
import usersReducer from './store/reducers/usersReducer';
import adminReducer from './store/reducers/adminReducer';

// import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    bets: betReducer,
    users: usersReducer,
    admin: adminReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
    <Provider store={store}>
            <App />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();

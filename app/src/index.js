import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import reducer from './reducers/index.js'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import jokesReducer from './reducers/index'

import {combineReducers}  from 'redux'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphiql'
});

export const store = createStore(combineReducers({
    joke:jokesReducer
 }))

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
        </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();

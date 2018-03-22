import thunkMiddleware from 'redux-thunk'

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'


import {  fetchPosts } from './actions/actions'
import { reducers } from './reducers'
import { App } from './containers/app/app'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




const store = createStore(reducers,composeWithDevTools(
    applyMiddleware(thunkMiddleware) ) );

store.dispatch(fetchPosts())

render(

    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,

    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from "redux-promise";
import App from "./containers/app";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const theme = createMuiTheme({
  palette: {
//    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: blue,

  },
});
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
  , document.querySelector('.container'));

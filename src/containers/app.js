import React, {Component} from 'react';
import {connect} from "react-redux";
import promise from "redux-promise";
import {withStyles} from '@material-ui/core/styles';
import { createStore, applyMiddleware } from 'redux';
import {getUserInSession} from '../actions/index';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Header from './header';
import Bye from './bye';
import Landing from './landing';
import Login from './login';
import Register from './register';
import Container from '../components/container';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Container>
                        <Header />
                            <Switch>
                                <Route path="/login" component={Login}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/landing" component={Landing}/>
                                <Route path="/" component={Bye}/>
                            </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default withStyles()(App);

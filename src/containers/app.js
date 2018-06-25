import React, {Component} from 'react';
import {connect} from "react-redux";
import promise from "redux-promise";
import {withStyles} from '@material-ui/core/styles';
import { createStore, applyMiddleware } from 'redux';
import {getUserInSession} from '../actions/index';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Header from './header';
import Bye from './bye';
import Landing from '../components/landing';
import Login from './login';
import Register from './register';
import RedirectPage from '../components/redirectPage';
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
                                <Route path='/misCursos' component={(RedirectPage) => window.location = 'https://www.mayahii.com/#!/user/myCourses'}/>
                                <Route path='/ra' component={(RedirectPage) => window.location = 'https://www.mayahii.com/#!/RAs'}/>
                                <Route path="/landing" component={Landing}/>
                                <Route path="/" component={Landing}/>
                            </Switch>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default withStyles()(App);

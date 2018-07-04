import React, {Component} from 'react';
import {connect} from "react-redux";
import promise from "redux-promise";
import {withStyles} from '@material-ui/core/styles';
import { createStore, applyMiddleware } from 'redux';
import {getUserInSession} from '../actions/index';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Header from './header';
import Landing from '../components/landing';
import Footer from '../components/footer';
import Login from './login';
import Register from './register';
import AllMyCourses from './allMyCourses';
import MyCoursesContainer from './myCourses';
import RedirectPage from '../components/redirectPage';
import Container from '../components/container';
import Infinite from './infinite';
import MyPortfolio from './myPortfolio';
import MyHistory from './myHistory';

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
                                <Route path='/myPortfolio' component={MyPortfolio}/>
                                <Route path='/myHistory' component={MyHistory}/>
                                <Route path='/myCourses' component={AllMyCourses}/>
                                <Route path='/infinite' component={Infinite}/>
                                <Route path="/landing" component={Landing}/>
                                <Route path="/" component={Landing}/>
                            </Switch>
                        <Footer />
                    </Container>
                </Router>
            </div>
        );
    }
}

export default withStyles()(App);

import React, {Component} from 'react';
import {connect} from "react-redux";
import {getUserInSession} from '../actions/index';

import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './header';
import Bye from './bye';
import Hi from './hi';
const BasicExample = () => (
    <Router>
        <div>
            <Header>
                <Switch>
                    <Route path="/landing" component={Hi}/>
                    <Route path="/" component={Bye}/>
                </Switch>
            </Header>
        </div>
    </Router>
)
export default BasicExample

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
import RedirectPage from '../components/redirectPage';
import Container from '../components/container';
import Privacy from '../components/privacy';
import AboutUs from '../components/aboutUs';
import CommunityGuidelines from '../components/communityGuidelines';
import Infinite from './infinite';
import MyPortfolio from './myPortfolio';
import MyHistory from './myHistory';
import ForgotPassword from './forgotPassword';
import KitTomaDecisiones from '../components/KitTomaDecisiones';
import KitMarketingDigital from '../components/kitMarketingDigital';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Container>
                        <Header />
                            <Switch>
                                <Route path="/aboutUs" component={AboutUs}/>
                                <Route path="/communityGuidelines" component={CommunityGuidelines}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/register" component={Register}/>
                                <Route path='/forgotPassword' component={ForgotPassword}/>
                                <Route path='/myPortfolio' component={MyPortfolio}/>
                                <Route path='/privacy' component={Privacy}/>
                                <Route path='/myHistory' component={MyHistory}/>
                                <Route path='/myCourses' component={AllMyCourses}/>
                                <Route path='/red/kit/td' component={KitTomaDecisiones}/>
                                <Route path='/red/kit/md' component={KitMarketingDigital}/>
                                <Route path='/red' component={Infinite}/>
                                <Route path='/eduStore/kit/td' component={KitTomaDecisiones}/>
                                <Route path='/eduStore/kit/md' component={KitMarketingDigital}/>
                                <Route path='/eduStore' component={Infinite}/>
                                <Route path='/infinite/kit/td' component={KitTomaDecisiones}/>
                                <Route path='/infinite/kit/md' component={KitMarketingDigital}/>
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

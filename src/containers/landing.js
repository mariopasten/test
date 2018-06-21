import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {getUserInSession} from '../actions/index';

class Landing extends Component {
    constructor(props){
        super(props);
        this.props.getUserInSession();
    }
    render() {
        return(
            <h1>Hola friend!!!</h1>
        );
    }
}

function mapStateToProps({userInSession}) {
    return ({userInSession});
}

export default (
 connect(mapStateToProps,{getUserInSession})(Landing)
);

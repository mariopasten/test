import React, { Component } from 'react';
import { connect } from "react-redux";
import {getUserInSession} from '../actions/index';

class Bye extends Component {
    constructor(props){
        super(props);
        // this.props.getUserInSession();
    }
    render() {
        return(
            <h1>Adios Nigga!!!</h1>
        );
    }
}

function mapStateToProps({userInSession}) {
    return ({userInSession});
}

export default (
 connect(mapStateToProps,{getUserInSession})(Bye)
);

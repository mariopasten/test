import React, { Component } from 'react';
import { connect } from "react-redux";
import {getUserInSession} from '../actions/index';

class Hi extends Component {
    constructor(props){
        super(props);
        this.props.getUserInSession();
    }
    render() {
        return(
            <h1>Hola Mundo!!!</h1>
        );
    }
}

function mapStateToProps({userInSession}) {
    return ({userInSession});
}

export default (
 connect(mapStateToProps,{getUserInSession})(Hi)
);

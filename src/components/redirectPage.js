import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        width: '20%',
        marginLeft: '40%',
        marginRight: '40%',
    },
});

class RedirectPage extends Component {
    constructor(props){
        super(props);
        this.props.getUserInSession();
    }
    render() {
        return(
            <CircularProgress className={classes.progress} size={50} />
        );
    }
}

function mapStateToProps({}) {
    return ({});
}

export default (
 connect(mapStateToProps,{})(RedirectPage)
);

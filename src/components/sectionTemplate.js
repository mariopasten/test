import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    button: {
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
    },
    descriptionRegisterContainer: {
        width: '40%',
        marginLeft: '5%',
        marginRight: '5%',
        height: 'auto',
        float: 'left',
    },
    forgotPassword: {
        width: '50%',
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: 20,
    },
    helpCenter: {
        textAlign: 'center',
    },
    imgRegisterContainer: {
        width: '100%',
        height: '100%',
        marginLeft: 0,
        marginRight: 0,
    },
    imgRegister: {
        width: '100%',
        height: '100%',
    },
    navContainer: {
        '@media (min-width: 960px)': {
            width: 960,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative'
        },
        '@media (min-width: 1200px)': {
            width: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative'
        }
    },
    progress: {
        display: 'none',
    },
    registerSection: {
        width: '45%',
        float: 'left',
        marginTop: 20,
        marginLeft: '2.5%',
        marginRight: '2.5%',
    },
    registerOption: {
        float: 'left',
        marginTop: 6,
    },
    registerText: {
        textAlign: 'left'
    },
    textField: {
        width: '100%',
    },
});
class SectionTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        const {classes, theme} = this.props;

        return(
            <div className={classes.navContainer}>
                <h1>
                    test
                </h1>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return ({});
}

export default withStyles(styles)(
 connect(mapStateToProps,{})(SectionTemplate)
);

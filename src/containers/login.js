import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {getUserInSession} from '../actions/index';

const styles = theme => ({
    root: {
        position: 'absolute',
        top: 55,
        zIndex: 9,
    },
});
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false,
        };
    }

    componentDidMount() {
        this.props.getUserInSession();
    }
    
    render() {
        const {classes, theme} = this.props;
        return(
            <div>
                {
                    !this.props.userInSession.usuario
                    ?
                    <h1>Login</h1>
                        // <h3 className={classes.loginText}>Iniciar sesión</h3>
                    :
                        <h1>
                            Usuario logeado
                        </h1>
                }
            </div>
        );
    }
}

function mapStateToProps({userInSession}) {
    return ({userInSession});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession})(Login)
);

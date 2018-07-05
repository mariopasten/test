import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import {Link} from 'react-router-dom';
import {forgotPasswordAction} from '../actions/index';

const styles = theme => ({
    button: {
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
        top: 15,
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
        marginLeft: '24%',
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
        top: 64,
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
            position: 'relative',
            height: 700,
        }
    },
    registerSection: {
        width: '45%',
        float: 'left',
        marginTop: 20,
        marginLeft: '2.5%',
        marginRight: '2.5%',
    },
    registerContainer: {
        position: 'relative',
        top: 15,
    },
    registerText: {
        textAlign: 'left'
    },
    registerTextP: {
        textAlign: 'left',
        fontWeight: 'bold',
    },
    textField: {
        width: '100%',
    },
});
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            statusForgotPassword: '',
            buttonState: true,
            showDialog: '',
            open: false,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose(){
        this.setState({ open: false, showDialog: '' });
    };

    handleUserChange(event) {
        this.setState({userEmail: event.target.value});
        if(event.target.value.length > 0) {
            this.setState({buttonState: false});
        }else {
            this.setState({buttonState: true});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({statusForgotPassword: true, open: true});
        this.props.forgotPasswordAction(this.state.userEmail);
    }

    shouldComponentUpdate(nextProps, nextState){

        return true;
    }

    render() {
        const {classes, theme, fullScreen} = this.props;

        return(
            <div className={classes.navContainer}>
                <aside className={classes.descriptionRegisterContainer}>
                    <figure className={classes.imgRegisterContainer}>
                        <img className={classes.imgRegister} src="https://s3.amazonaws.com/mayahii-frontend/img/loginImage.png" alt=""/>
                    </figure>
                    <Typography className={classes.helpCenter} variant="title" gutterBottom>
                        ¿Problemas para acceder? Ponte en contacto con nosotros
                        en nuestro <a href="http://ayuda.mayahii.com/" target="_blank">centro de ayuda.</a>
                    </Typography>
                </aside>
                <section className={classes.registerSection}>
                    <Typography className={classes.registerTextP} variant="display1" gutterBottom>
                        Restablecer contraseña
                    </Typography>
                    <Typography className={classes.registerText} variant="headline" gutterBottom>
                        Ingresa tu correo asociado a Mayahii
                    </Typography>
                    <Grid container spacing={8} className={classes.principalContainerForm}>
                    <Grid item className={classes.optionsContainer}>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                              label="Correo"
                              className={classes.textField}
                              margin="normal"
                              value={this.state.userEmail}
                              onChange={this.handleUserChange}
                            />

                            <Button
                                raised
                                variant="contained"
                                className={classes.button}
                                type="submit"
                                value="Submit"
                                color="primary"
                                disabled = {this.state.buttonState}
                            >
                                Recuperar
                            </Button>
                        </form>
                    </Grid>
                </Grid>
                </section>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogContent>
                        <DialogContentText>
                            {
                                this.props.forgotPassword
                                ?
                                    <p>
                                        Se te enviará un correo con las instrucciones para recuperar tu contraseña
                                    </p>
                                :
                                    <p>
                                        El correo no está asociado a ninguna cuenta
                                    </p>
                            }
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                          Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps({forgotPassword}) {
    return ({forgotPassword});
}

export default withStyles(styles)(
 connect(mapStateToProps,{forgotPasswordAction})(ForgotPassword)
);

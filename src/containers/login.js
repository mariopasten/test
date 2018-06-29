import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {getUserInSession} from '../actions/index';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {getLogin} from '../actions/index';

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
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
            statusLogin: '',
        };
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        this.setState({userEmail: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({userPassword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({statusLogin: 'loading'});
        this.props.getLogin(this.state.userEmail, this.state.userPassword);
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.getLoginUser != null){
            if(this.props.prevUrl != null) {
                window.location.href = `/${nextProps.prevUrl}`;
            }else {
                window.location.href = '/';
            }
        }

        return true;
    }

    componentDidMount() {
        this.props.getUserInSession();
    }

    render() {
        const {classes, theme} = this.props;

        if (!this.props.userInSession) {
            return <CircularProgress className={classes.progress} size={100}/>
        }

        return(
            <div className={classes.navContainer}>
                {
                    !this.props.userInSession.usuario
                    ?
                        <div>
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
                                <Typography className={classes.registerText} variant="display1" gutterBottom>
                                    Inicio de sesión en Mayahii
                                </Typography>
                                <Typography className={classes.registerText} variant="headline" gutterBottom>
                                    Ingresa tus datos de usuario
                                </Typography>
                                <Grid container spacing={8} className={classes.principalContainerForm}>
                                <Grid item className={classes.optionsContainer}>
                                    <form onSubmit={this.handleSubmit}>
                                        <TextField
                                          label="Usuario o correo"
                                          className={classes.textField}
                                          margin="normal"
                                          value={this.state.userEmail}
                                          onChange={this.handleUserChange}
                                        />
                                        <TextField
                                            label="Contraseña"
                                            className={classes.textField}
                                            margin="normal"
                                            type= "password"
                                            value={this.state.userPassword}
                                            onChange={this.handlePasswordChange}
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
                                            Iniciar sesión
                                        </Button>
                                    </form>
                                    <Button
                                        color="primary"
                                        component={Link}
                                        to="/forgotPassword"
                                        className={classes.forgotPassword}
                                    >
                                        Olvidé mi contraseña
                                    </Button>
                                    <aside>
                                        <Typography className={classes.registerOption} variant="body2" gutterBottom>
                                            ¿No tienes cuenta?
                                        </Typography>
                                        <Button
                                            color="primary"
                                            component={Link}
                                            to="/register"
                                            className={classes.register}
                                        >
                                            Registrate
                                        </Button>
                                    </aside>
                                    {/* <p id="warningTextStatus" className={classes.warningTextStatus}>
                                        * Tu usuario y contraseña no coinciden.
                                        Vuelve a escribirlos o restablece tu
                                        contraseña.
                                    </p> */}
                                </Grid>
                            </Grid>
                            </section>
                        </div>
                    :
                        <h1>sale</h1>
                }
            </div>
        );
    }
}

function mapStateToProps({userInSession, getLoginUser}) {
    return ({userInSession, getLoginUser});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession, getLogin})(Login)
);

import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {getRegisterNewUser} from '../actions/index';
import {Link} from 'react-router-dom';

const styles = theme => ({
    button: {
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
    },
    descriptionText: {
        marginTop: 35,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageRegister: {
        width: '100%',
        height: '100%'
    },
    imageRegisterContainer: {
        width: '30%',
        float: 'left',
        marginLeft: '1.5%',
        marginRight: '1.5%',
    },
    loginContainer: {
        marginTop: 20,
    },
    loginOption: {
        float: 'left',
        marginTop: 6,
    },
    loginText: {
        textAlign: 'left'
    },
    navContainer: {
        top: 84,
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
    registerDescription: {
        width: '30%',
        float: 'left',
        marginLeft: '1.5%',
        marginRight: '1.5%',
    },
    registerForm: {
        width: '30%',
        float: 'left',
        marginLeft: '1.5%',
        marginRight: '1.5%',
    },
    textField: {
        width: '100%',
    }
});
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            userPassword: '',
            checkedTerms: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({userPassword: event.target.value});
    }

    handleChange() {
        this.setState(state => ({ checkedTerms: !state.checkedTerms }));
    };

    handleSubmit(event) {
        event.preventDefault();
        const emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})?$/;
        if(this.state.name.length == 0) {
            const warningAll = document.getElementById('warningAll')
            warningAll.style.display = "block";
            setTimeout(function() {
                warningAll.style.display = "none";
            }, 3000);
            return false;
        }
        if(this.state.lastName.length == 0) {
            const warningAll = document.getElementById('warningAll')
            warningAll.style.display = "block";
            setTimeout(function() {
                warningAll.style.display = "none";
            }, 3000);
            return false;
        }
        if (!emailReg.test(this.state.email)) {
            const warningEmail = document.getElementById('warningEmail')
            warningEmail.style.display = "block";
            setTimeout(function() {
                warningEmail.style.display = "none";
            }, 3000);
            return false;
        }

        if(this.state.userPassword.length < 8) {
            const warningPassword = document.getElementById('warningPassword')
            warningPassword.style.display = "block";
            setTimeout(function() {
                warningPassword.style.display = "none";
            }, 3000);
            return false;
        }
        if(!this.state.checkedTerms) {
            const warningTerms = document.getElementById('warningTerms')
            warningTerms.style.display = "block";
            setTimeout(function() {
                warningTerms.style.display = "none";
            }, 3000);
            return false;
        }
        this.props.getRegisterNewUser(this.state.name, this.state.lastName, this.state.email, this.state.userPassword, this.state.checkedTerms);

    }

    shouldComponentUpdate(nextProps){
        if(nextProps.registerNewUser != null){
            if(nextProps.registerNewUser.value) {
                window.location.href = "/dist";
            }else {
                alert("Hubo un problema con tu registro, intentalo más tarde")
            }
        }
        return true;
    }

    render() {
        const {classes, theme} = this.props;

        return(
            <div className={classes.navContainer}>
                <Typography variant="display1" gutterBottom align="center">
                    Registro de cuenta Mayahii
                </Typography>
                <aside className={classes.registerDescription}>
                    <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                        className={classes.descriptionText}
                    >
                        Estás a un paso de la mejor
                        educación en línea, solo
                        llena este sencillo registro
                        y podrás empezar a tomar
                        miles de cursos.
                    </Typography>
                    <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                        className={classes.descriptionText}
                    >
                        ¿Problemas para registrarte?
                        Ponte en contacto con nosotros
                        en nuestro <a href="http://ayuda.mayahii.com/" target="_blank">centro de ayuda</a>.
                    </Typography>
                </aside>
                <section className={classes.registerForm}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            label="Nombre"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                        <TextField
                            label="Apellidos"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.lastName}
                            onChange={this.handleLastNameChange}
                        />
                        <TextField
                            label="Correo"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                        <TextField
                            label="Contraseña"
                            className={classes.textField}
                            margin="normal"
                            type= "password"
                            value={this.state.userPassword}
                            onChange={this.handlePasswordChange}
                        />
                        <Checkbox
                            checked={this.state.checkedTerms}
                            onChange={this.handleChange}
                            value="checkedTerms"
                            color="primary"
                        />
                        <a href={`https://www.mayahii.com/#!/t/terms`} target="_blank">
                            Acepto los Términos de Servicio
                        </a>
                        <Button
                            raised
                            variant="contained"
                            className={classes.button}
                            type="submit"
                            value="Submit"
                            color="primary"
                        >
                            Registrarse
                        </Button>
                    </form>
                    <aside className={classes.loginContainer}>
                        <Typography className={classes.loginOption} variant="body2" gutterBottom>
                            Ya tengo cuenta
                        </Typography>
                        <Button
                            color="primary"
                            component={Link}
                            to="/login"
                            className={classes.register}
                        >
                            Iniciar sesión
                        </Button>
                    </aside>
                </section>
                <aside className={classes.imageRegisterContainer}>
                    <figure className={classes.imageRegister}>
                        <img className={classes.image} src="https://s3.amazonaws.com/mayahii-frontend/img/registerImage.png" />
                    </figure>
                </aside>
            </div>
        );
    }
}

function mapStateToProps({registerNewUser}) {
    return ({registerNewUser});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getRegisterNewUser})(Register)
);

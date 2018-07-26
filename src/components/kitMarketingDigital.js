import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    btnInstructions: {
        marginTop: 10,
    },
    btnFab: {
        right: 0,
        position: 'fixed',
        bottom: 15,
        marginRight: '5%',
        zIndex: 99999,
        background: '#3D5AFE',
        '&:hover': {
            background: '#3D5AFE',
        },
    },
    btnMore: {
        background: '#AA00FF',
        color: '#FFFFFF',
        marginTop: 20,
        '&:hover': {
            background: '#AA00FF',
        }
    },
    iconBuy: {
        color: '#3D5AFE',
        padding: 0,
        fontSize: 20,
        marginBottom: 20,
        textDecoration: 'none',
        '&:hover': {
            background: 'transparent',
        }
    },
    iconShop: {
        position: 'relative',
        top: 5,
    },
    iconArrowLeft: {
        fontSize: 50,
    },
    iconReturn: {
        fontSize: 50,
        minWidth: 10,
        padding: 0,
    },
    imgKitContainer: {
        width: '100%',
        height: 'auto',
        margin: 0,
    },
    imgKit: {
        width: '100%',
        height: '100%',
    },
    kitDescription: {
        '@media (min-width: 1200px)': {
            float: 'left',
            width: '50%',
            marginBottom: 100,
        },
    },
    kitExtend: {
        '@media (min-width: 1280px)': {
            float: 'left',
            width: '45%',
            marginLeft: '5%',
            position: 'absolute',
            right: 0,
            top: 338,
        },
    },
    list: {
        color: '#455A64',
        paddingLeft: 25,
        '@media (min-width: 960px)': {
            paddingLeft: 0,
            float: 'left',
            width: '59%',
            margin: 0,
            marginBottom: 50,
        },
        '@media (min-width: 1200px)': {
            paddingLeft: 0,
            float: 'left',
            width: '100%',
            margin: 0,
            marginBottom: 50,
        },
    },
    navContainer: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        position: 'relative',
        paddingTop: 65,
        '@media (min-width: 960px)': {
            paddingTop: 125,
        },
        '@media (min-width: 1200px)': {
            paddingTop: 100,
        },
    },
    price: {
        color: '#455A64',
        marginTop: 20,
        '@media (min-width: 960px)': {
            marginTop: 40,
            marginBottom: 14,
        },
    },
    subText: {
        color: '#455A64',
        margin: '50px 0',
    },
    text: {
        color: '#455A64',
        fontWeight: 'bold',
    },
    textBuy: {
        color: '#455A64',
        '@media (min-width: 960px)': {
            float: 'left',
            width: '41%'
        },
        '@media (min-width: 1200px)': {
            float: 'left',
            width: '100%'
        },
    },
    title: {
        color: '#455A64',
        fontWeight: 'bold',
        width: '100%',
        fontSize: 34,
        '@media (min-width: 1200px)': {
            color: '#455A64',
            fontWeight: 'bold',
            width: '50%',
            fontSize: '2.8125rem',
        },
    },
});


class KitMarketingDigital extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            open: false,
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };

    render() {
        const {classes, theme} = this.props;
        return(
            <div className={classes.navContainer}>
                <Hidden lgUp='lgUp'>
                    <Button className={classes.iconReturn} component={Link} to={'/'}>
                        <Icon className={classes.iconArrowLeft}>chevron_left</Icon>
                    </Button>
                </Hidden>
                <Typography className={classes.title} variant="display2" gutterBottom align='left'>
                    Kit de acompañamiento del estudiante
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom align='left'>
                    Marketing digital: Esfuerzo local, impacto global
                </Typography>
                <Hidden lgUp='lgUp'>
                    <Typography className={classes.subText} variant="title" gutterBottom align='left'>
                        Tecnologías de la información 3 y 4
                    </Typography>
                </Hidden>
                <aside className={classes.kitDescription}>
                    <figure className={classes.imgKitContainer}>
                        <img className={classes.imgKit} src="https://s3.amazonaws.com/mayahii-frontend/img/marketinDigitalN.png" alt=""/>
                    </figure>
                    <Hidden mdDown='mdDown'>
                        <Button className={classes.btnInstructions} variant="contained" onClick={this.handleClickOpen} color="primary" aria-label="add">
                            instrucciones
                        </Button>
                    </Hidden>
                    <Typography className={classes.price} variant="title" gutterBottom align='left'>
                        Precio: $ 371.00 MXN
                    </Typography>
                    <a className={classes.iconBuy} href="https://www.mayahii.com/marketingdigital#!/book/md" target="_blank">
                        <Icon className={classes.iconShop}>shopping_cart</Icon> Comprar
                    </a>
                </aside>
                <aside className={classes.kitExtend}>
                    <Typography className={classes.textBuy} variant="title" gutterBottom align='left'>
                        Tu compra incluye:
                    </Typography>
                    <ul className={classes.list}>
                        <li>
                            Acceso a la academia Mayahii
                        </li>
                        <li>
                            Libro del estudiante para Tecnologías de la Información 3
                        </li>
                        <li>
                            Libro del estudiante para Tecnologías de la Información 4
                        </li>
                        <li>
                            Examen diagnóstico
                        </li>
                        <li>
                            Examen de Certificación
                        </li>
                        <li>
                            Diploma de la Certificación “Marketing digital: Esfuerzo local, impacto global” (En caso de cumplir con los criterios)
                        </li>
                        {/* <li>
                            Atención técnica y académica
                        </li>
                        <li>
                            Comunidad en línea para estudiantes
                        </li> */}
                    </ul>
                </aside>
                <Hidden lgUp='lgUp'>
                    <Button variant="extendedFab" onClick={this.handleClickOpen} variant="fab" color="primary" aria-label="add" className={classes.btnFab}>
                        ?
                    </Button>
                </Hidden>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"INSTRUCCIONES DE COMPRA Y ACTIVACIÓN DE CUENTA"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <ol>
                                <li>
                                    "Ingresa a ver más" en el kit
                                    que te corresponde.
                                </li>
                                <li>
                                    Adquiere tu kit de acompañamiento:
                                    Haz clic en "Comprar" abajo de la foto
                                    del kit podrás realizar la compra.
                                    Ingresa todos tus datos, realiza el pago,
                                    y recibirás un correo con las
                                    instrucciones de acceso a tu biblioteca
                                    electrónica y a la academia Mayahii.
                                </li>
                                <li>
                                    Ingresa al libro electrónico:
                                    Después de realizar tu pago,
                                    una vez que hayas configurado
                                    tu cuenta al recibir el correo,
                                    podrás consultar tu(s) libro(s) desde
                                    la página biblioteca.mayahii.com
                                </li>
                                <li>
                                    Ingresa a los cursos en tu Academia
                                    Mayahii: podrás acceder a los cursos
                                    de esta academia una vez que realices
                                    el pago de tu Kit.
                                    <br/>
                                    Tu cuenta se activa en las 48 horas que siguen tu pago y tendrás acceso a todos los recursos de tu academia
                                </li>
                                <li>
                                    Si tienes dudas, acude al <a href="http://ayuda.mayahii.com/" target="_blank">centro de ayuda</a>.
                                </li>
                            </ol>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                          Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return ({});
}

export default withStyles(styles)(
 connect(mapStateToProps,{})(KitMarketingDigital)
);

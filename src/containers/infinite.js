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
    btnMore: {
        background: '#AA00FF',
        color: '#FFFFFF',
        marginTop: 20,
        '&:hover': {
            background: '#AA00FF',
        }
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
    icon: {
        color: '#FFFFFF',
        opacity: '.72',
    },
    iconArrow: {
        marginLeft: 20,
        opacity: '.72',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    kitContainer: {
        paddingBottom: 27,
        paddingTop: 27,
        '@media (min-width: 960px)': {
            float: 'left',
            width: '40%',
            marginRight: '10%',
            paddingBottom: 54,
            paddingTop: 25,
        },
    },
    kitImage: {
        width: '100%',
        height: '10%',
        margin: 0,
    },
    kitPeriod: {
        color: '#455A64',
        fontSize: 14,
    },
    kitSubtitle: {
        color: '#455A64',
        fontSize: 14,
        fontWeight: 'bold',
    },
    kitText: {
        color: '#455A64',
        fontSize: 14,
    },
    kitTitle: {
        color: '#455A64',
        fontSize: 24,
        fontWeight: 'bold',
    },
    seeMore: {
        opacity: '.72',
    },
    subTitle: {
        width: '100%',
        color: '#455A64',
        '@media (min-width: 960px)': {
            width: '50%',
        },
    },
    title: {
        fontWeight: 'bold',
        color: '#455A64',
    },
    navContainer: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        position: 'relative',
        paddingTop: 65,
        '@media (min-width: 960px)': {
            paddingTop: 100,
        },
        '@media (min-width: 1200px)': {
            paddingTop: 80,
        },
    },
});

const kits = [
    {
	    "title": "Toma de decisiones para el impacto social: G Suite en acción",
        "subTitle": "Tecnologías de la información 1 y 2",
        "period": "Semestres: 3º y 4º",
        "imageMobile": "https://s3.amazonaws.com/mayahii-frontend/img/gSuiteEnAccionN.png",
        "url": "td",
    },
    {
	    "title": "Marketing digital: Esfuerzo local, impacto global",
        "subTitle": "Tecnologías de la información 3 y 4",
        "period": "Semestres: 5º y 6º",
        "imageMobile": "https://s3.amazonaws.com/mayahii-frontend/img/marketinDigitalN.png",
        "url": "md",
    }
];

class Infinite extends Component {
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
        const {anchorEl} = this.state;
        return(
            <div className={classes.navContainer}>
                <Typography className={classes.title} variant="display2" gutterBottom align='left'>
                    Compra tu kit de materias
                </Typography>
                <Typography className={classes.subTitle} variant="body1" gutterBottom align='left'>
                    Te damos la bienvenida a nuestro
                    catálogo de materias, por favor
                    selecciona la materia asignada
                    por tu escuela.
                </Typography>
                {
                    kits.map(kit => {
                        return(
                            <aside className={classes.kitContainer}>
                                <Typography className={classes.kitText} variant="caption" align='left'>
                                    KIT
                                </Typography>
                                <Typography className={classes.kitTitle} variant="display1" gutterBottom align='left'>
                                    {kit.title}
                                </Typography>
                                <Typography className={classes.kitSubtitle} variant="body1" gutterBottom align='left'>
                                    {kit.subTitle}
                                </Typography>
                                <Typography className={classes.kitPeriod} variant="body1" gutterBottom align='left'>
                                    {kit.period}
                                </Typography>
                                <figure className={classes.kitImage}>
                                    <img className= {classes.image} src={kit.imageMobile} alt=""/>
                                </figure>
                                <Button
                                    className={classes.btnMore}
                                    variant="contained"
                                    color="primary"
                                    component={Link}
                                    to={`red/kit/${kit.url}`}
                                >
                                    <span className={classes.seeMore}>Ver Más</span> <Icon className={classes.iconArrow}>arrow_forward</Icon>
                                </Button>
                            </aside>
                        );
                    })
                }
                <Button variant="extendedFab" onClick={this.handleClickOpen} variant="fab" aria-label="add" className={classes.btnFab}>
                    <span className={classes.icon}>?</span>
                </Button>
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
 connect(mapStateToProps,{})(Infinite)
);

import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {SectionTemplate} from './sectionTemplate';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const url = 'url';

const styles = theme => ({
    banner: {
        background: `${url}('https://s3.amazonaws.com/mayahii-frontend/img/landing_fondo.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'top',
        backgroundSize: 'auto',
        backgroundAttachment: 'relative',
        backgroundPosition: 'center',
        height: 550,
        width: '100vw',
        backgroundSize: '100%',
        backgroundSize: 'cover',
        position: 'relative',
    },
    bannerLink: {
        width: '50%',
        background: '#FFFFFF',
        position: 'absolute',
        paddingLeft: '10%',
        zIndex: 9999,
        top: 129,
        borderRadius: 0,
        '&:hover': {
            background: '#FFFFFF',
        },
    },
    bannerLinkIcon: {
        float: 'right',
        background: '#536DFE',
        borderRadius: '50%',
        padding: 2,
        color: '#FFFFFF',
        marginRight: 50,
        marginTop: 30,
    },
    bannerLinkImage: {
        width: '100%',
        height: '100%',
    },
    bannerLinkImageContainer: {
        width: '20%',
        height: 'auto',
        margin: 0,
        float: 'left',
    },
    bookImageContainer: {
        width: '90%',
        height: 'auto',
        marginRight: '10%',
    },
    bannerLinkText: {
        fontSize: 15,
        color: '#4A4A4A',
    },
    bannerLinkSubText: {
        marginTop: 20,
        fontSize: 17,
        color: '#4A4A4A',
        textDecoration: 'underline',
    },
    bannerLinkTextcontainer: {
        marginLeft: 50,
        float: 'left',
        marginTop: 10,
        fontSize: 13,
        color: '#4A4A4A',
    },
    descriptionProductContainer: {
        width: '40%',
        float: 'left',
    },
    descriptionTitle: {
        color: '#4A4A4A',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: '2px',
    },
    descriptionSubText: {
        margin: '45px 0',
    },
    descriptionText: {
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 20,

    },
    externalLink: {
        textDecoration: 'none',
        color: '#536DFE',
        fontSize: 14,
    },
    externalLinkIcon: {
        position: 'relative',
        top: 6,
        marginLeft: 20,
        color: '#FFFFFF',
        borderRadius: '50%',
        background: '#536DFE',
        padding: 2,
    },
    titleProductContainer: {
        width: '60%'
    },
    mayahiiDescriptionContainer: {
        marginTop: 50,
        display: 'inline-block',
        width: '100%',
    },
    mayahiiDescriptionF: {
        width: '45%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        float: 'left',
    },
    mayahiiDescriptionList: {
        marginTop: 5,
        color: '#4A4A4A',
        marginBottom: 15,
    },
    mayahiiDescriptionText: {
        marginTop: 50,
        color: '#4A4A4A',
    },
    mayahiiDescriptionTitle: {
        marginTop: 5,
        color: '#4A4A4A',
        width: '50%',
        marginBottom: 15,
    },
    mayahiiDescriptionTitleSection: {
        marginTop: 5,
        color: '#4A4A4A',
    },
    mayahiiDescriptionSubTitle: {
        marginTop: 5,
        color: '#4A4A4A',
        width: '50%',
    },
    menuItem: {
        textDecoration: 'none',
        color: '#4A4A4A'
    },
    navContainer: {
        '@media (min-width: 1280px)': {
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            position: 'relative',
            paddingTop: 25,
        }
    },
    navItem: {
        minWidth: '25%',
        marginLeft: '4.165%',
        marginRight: '4.165%'
    },
    navMenu: {
        position: 'absolute',
        top: 8,
        width: '56%',
        marginLeft: '22%',
        marginRight: '22%',
        color: '#FFFFFF',
    },
    productContainer: {
        width: '100%',
        minHeight: 230,
    },
    productsContainer: {
        width: '100%',
        display: 'inline-block',
    },
    productDescription: {
        height: 100,
        marginTop: '2em',
        marginBottom: '4em',
    },
    productImage: {
        width: '100%',
        height: 'auto',
    },
    productImageContainer: {
        width: '60%',
        margin: 0,
        paddingBottom: 50,
    },
    productImageSecondContainer: {
        width: '130%',
        paddingBottom: 50,
        marginLeft: '-90px',
        marginTop: 50,
    },
    productLink: {
        textDecoration: 'none',
    },
    productLinkText: {
        color: '#009688',
        marginTop: '4em',
    },
    sectionColor: {
        background: '#FFEBEE',
    },
    servicesContainer: {
        width: '100%',
        display: 'inline-block',
    },
    serviceContainer: {
        width: '25%',
        float: 'left',
        marginTop: 25,
        marginLeft: '4.165%',
        marginRight: '4.165%',
    },
    serviceTitle: {
        width: '100%',
        height: 50,
    },
    spaceImage: {
        width: '100%',
        height: '100%',
    },
    spaceImageContainer: {
        width: '100%',
        height: 'auto',
    },
    subHeader: {
        marginTop: 64,
        background: '#243640',
        position: 'fixed',
        zIndex: 99999,
    },
    subTitle: {
        width: '75%',
        color: '#455A64',
        lineHeight: '62px',
        fontWeight: 'bold',
    },
    textBanner: {
        color: '#ffffff',
        paddingTop: 10,
        fontSize: '1.5em',
        '@media (min-width: 960px)': {
            marginLeft: 0,
        },
    },
    textBannerContainer: {
        position: 'relative',
        top: 250,
    },
    subTextBanner: {
        color: '#ffffff',
        paddingTop: 10,
        width: '60%',
        lineHeight: '25px',
        fontSize: '1.125em',
        fontWeight: 'lighter',
        '@media (min-width: 960px)': {
            marginLeft: 0,
        },
    },
    titleProductContainer: {
        width: '50%',
        float: 'left',
    },
    titleSection: {
        color: '#455A64',
        fontWeight: 'initial',
    },
    toolContainer: {
        width: '25%',
        float: 'left',
        marginTop: 25,
        height: 400,
    },
    toolContainerImage: {
        width: '100',
        height: 200,
    },
    toolImage: {
        width: '100%',
        height: '100%',
    },
    toolType: {
        width: '100%',
        marginTop: 30,
    },
    userType: {
        width: '100%',
        marginTop: 30,
    }

});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose() {
        this.setState({anchorEl: null});
    };

    render() {
        const {classes, theme} = this.props;
        const {anchorEl} = this.state;
        return(
            <div>
                <AppBar className={classes.subHeader} position="static" color="default">
                    <Toolbar>
                        <Tabs className={classes.navMenu}>
                            <Tab className={classes.navItem} button="button" href={`http://formacioncontinua.mayahii.com/`} label="FORMACIÓN DOCENTE"/>
                            <Tab className={classes.navItem} button="button" href={`https://www.mayahii.com/#!/academy`} label="CREA TU ACADEMIA"/>
                            <Tab className={classes.navItem} label="Universo Mayahii" aria-owns={anchorEl
                                    ? 'simple-menu'
                                    : null} aria-haspopup="true" onClick={this.handleClick}/>

                            <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                                <MenuItem onClick={this.handleClose}><a className={classes.menuItem} href="https://www.mayahii.com/educadores" target="_blank">Mayahii Educadores</a></MenuItem>
                                <MenuItem onClick={this.handleClose}><a className={classes.menuItem} href="https://www.mayahii.com/campusgoogle" target="_blank">Mayahii Campus Google</a></MenuItem>
                            </Menu>
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <aside className={classes.banner}>
                    <Button className={classes.bannerLink} component={Link} to={`/myCourses`}>
                        <figure className={classes.bannerLinkImageContainer}>
                            <img className={classes.bannerLinkImage} src="https://s3.amazonaws.com/mayahii-frontend/img/search-label.png" alt=""/>
                        </figure>
                        <aside className={classes.bannerLinkTextcontainer}>
                            <Typography className={classes.bannerLinkText} variant="headline" gutterBottom align="left">
                                ¿Estás buscando tus cursos?
                            </Typography>
                            <Typography className={classes.bannerLinkSubText} variant="headline" gutterBottom align="left">
                                Encuentralos aquí
                            </Typography>
                        </aside>
                        <Icon className={classes.bannerLinkIcon}>arrow_forward</Icon>
                    </Button>
                    <div className={classes.navContainer}>
                        <section className={classes.textBannerContainer}>
                            <Typography className={classes.textBanner} variant="display1" align="left">
                                Enseñanza de calidad.
                            </Typography>
                            <Typography className={classes.textBanner} variant="display1" align="left">
                                Aprendizaje ideal.
                            </Typography>
                            <Typography className={classes.textBanner} variant="display1" align="left">
                                Capacitación sin límites.
                            </Typography>
                            <Typography className={classes.subTextBanner} variant="Subheading" gutterBottom align="left">
                                Mayahii es una plataforma
                                de educación y transformación
                                digital. En Mayahii nos dedicamos
                                a resolver los problemas de la
                                educación del Siglo XXI a través
                                de una plataforma que permite educar
                                de manera pública y privada a un gran
                                número de alumnos.
                            </Typography>
                        </section>
                    </div>
                </aside>
                <div className={classes.navContainer}>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <div className={classes.productContainer}>
                            <aside className={classes.titleProductContainer}>
                                <Typography className={classes.titleSection} variant="headline" gutterBottom align="left">
                                    Evaluación docente
                                </Typography>
                                <Typography className={classes.subTitle} variant="display3" gutterBottom align="left">
                                    Formación Docente
                                </Typography>
                            </aside>
                            <section className={classes.descriptionProductContainer}>
                                <div>
                                    <Typography className={classes.descriptionTitle} variant="headline" gutterBottom align="left">
                                        SIGUE DESARROLLÁNDOTE
                                    </Typography>
                                    <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                                        Para docentes de educación básica, aquí encontrarás cursos oficiales para seguir desarrollándote en tu profesión. Somos una Instancia Formadora con reconocimiento oficial de la Dirección General de Formación Continua, Actualización y Desarrollo Profesional de Maestros de Educación Básica de la Secretaría de Educación Pública.
                                    </Typography>
                                    <a href="http://formacioncontinua.mayahii.com/" className={classes.externalLink}>
                                        VISITAR FORMACIÓN CONTINUA  <Icon className={classes.externalLinkIcon}>arrow_forward</Icon>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <div className={classes.sectionColor}>
                    <div className={classes.navContainer}>
                        <section className={classes.mayahiiDescriptionContainer}>
                            <div className={classes.productContainer}>
                                <aside className={classes.titleProductContainer}>
                                    <Typography className={classes.titleSection} variant="headline" gutterBottom align="left">
                                        Enseña sin límites
                                    </Typography>
                                    <Typography className={classes.subTitle} variant="display3" gutterBottom align="left">
                                        Crea tu Academia
                                    </Typography>
                                    <figure className={classes.productImageContainer}>
                                        <img src='https://s3.amazonaws.com/mayahii-frontend/img/landingFN.png' alt="" className={classes.productImage}  />
                                    </figure>
                                </aside>
                                <section className={classes.descriptionProductContainer}>
                                    <div>
                                        <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                                            Crea contenido y compártelo con el mundo, con un grupo selecto o cobra por el contenido, conoce más en nuestro sitio.
                                        </Typography>
                                        <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                                            Una Academia Mayahii es tu campus en línea disponible en minutos.  Consiste en una suite de herramientas web especialmente diseñadas para la enseñanza y el aprendizaje sobre demanda, sin límite de usuarios, sin límite de cursos, con tu imagen de marca y con accesibilidad desde cualquier lugar y cualquier dispositivo.
                                        </Typography>
                                        <a href="https://www.mayahii.com/#!/academy" className={classes.externalLink}>
                                            VISITAR ACADEMIAS  <Icon className={classes.externalLinkIcon}>arrow_forward</Icon>
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={classes.navContainer}>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <div className={classes.productContainer}>
                            <aside className={classes.titleProductContainer}>
                                <Typography variant="headline" gutterBottom align="left">
                                    Capacita tu empresa
                                </Typography>
                                <Typography className={classes.subTitle} variant="display3" gutterBottom align="left">
                                    Universidades Corporativas
                                </Typography>
                            </aside>
                            <section className={classes.descriptionProductContainer}>
                                <div>
                                    <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                                        Si tu organización posee múltiples academias, puede crear una Universidad Corporativa con Mayahii, con solo unos cuantos clicks.
                                    </Typography>
                                    <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                                        Brinda a tus usuarios acceso a todos los contenidos y academias de tu organización en un solo lugar, con una experiencia de usuario intuitiva y plenamente integrada.
                                    </Typography>
                                    <figure className={classes.productImageSecondContainer}>
                                        <img src='https://s3.amazonaws.com/mayahii-frontend/img/universidadesImage.png' alt="" className={classes.productImage}  />
                                    </figure>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <div className={classes.sectionColor}>
                    <div className={classes.navContainer}>
                        <section className={classes.mayahiiDescriptionContainer}>
                            <div className={classes.productContainer}>
                                <aside className={classes.titleProductContainer}>
                                    <Typography variant="headline" gutterBottom align="left">
                                        Producción de material
                                    </Typography>
                                    <Typography className={classes.subTitle} variant="display3" gutterBottom align="left">
                                        PLANEACIÓN Y PRODUCCIÓN EDUCATIVA
                                    </Typography>
                                    <figure className={classes.productImageContainer}>
                                        <img src='https://s3.amazonaws.com/mayahii-frontend/img/landingTN.png' alt="" className={classes.productImage}  />
                                    </figure>
                                </aside>
                                <section className={classes.descriptionProductContainer}>
                                    <div>
                                        <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                                            Nuestros servicios de producción de contenidos educativos habilitarán a su organización con la capacidad de proveer a sus usuarios cursos y entrenamiento de clase mundial, desarrollado con las técnicas pedagógicas y audiovisuales más actuales.
                                        </Typography>
                                        <Typography className={classes.descriptionSubText} variant="title" gutterBottom align="left">
                                            ¿Necesitas capacitar o instruir pero no tienes contenido?
                                        </Typography>
                                        <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                                            Te ayudamos a configurar un plan académico para tu audiencia y a crear contenido original o bien usar material de nuestra vasta red de lecciones y academias.
                                        </Typography>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return ({});
}

export default withStyles(styles)(
 connect(mapStateToProps,{})(Login)
);

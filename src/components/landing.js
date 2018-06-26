import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {SectionTemplate} from './sectionTemplate';
import Button from '@material-ui/core/Button';
const url = 'url';

const styles = theme => ({
    banner: {
        background: `${url}('https://s3.amazonaws.com/mayahii-frontend/img/landingBannerN.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'top',
        backgroundSize: 'auto',
        backgroundAttachment: 'relative',
        backgroundPosition: 'center',
        height: 608,
        width: '100vw',
        backgroundSize: '100%',
        backgroundSize: 'cover',
        position: 'relative',
        // filter: 'grayscale(16%)',
        top: 64,
    },
    bookImageContainer: {
        width: '90%',
        height: 'auto',
        marginRight: '10%',
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
    navContainer: {
        '@media (min-width: 1280px)': {
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            position: 'relative',
            paddingTop: 25,
        }
    },
    productContainer: {
        width: '20%',
        float: 'left',
        marginTop: 25,
        marginLeft: '2.5%',
        marginRight: '2.5%',
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
        width: '100%',
        margin: 0
    },
    productLink: {
        textDecoration: 'none',
    },
    productLinkText: {
        color: '#009688',
        marginTop: '4em',
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
    textBanner: {
        color: '#ffffff',
        paddingTop: 10,
        '@media (min-width: 960px)': {
            marginLeft: 0,
        },
    },
    subTextBanner: {
        color: '#ffffff',
        paddingTop: 10,
        width: '60%',
        lineHeight: 2,
        '@media (min-width: 960px)': {
            marginLeft: 0,
        },
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

const includedServices = [
    {
        title: 'Centro de ayuda',
        description: 'Contamos con un equipo dedicado a resolver tus dudas y darle seguimiento a problemas técnicos, también ponemos una serie de Preguntas Frecuentes que resuelven problemas comúnes.',
        img:'https://s3.amazonaws.com/mayahii-frontend/img/centro-ayuda.png'
    },
    {
        title: 'Estadística y Analítica',
        description: 'Ya sea que tengas Academias, Poblaciones o ambos operando en Mayahii, siempre tendrás a la mano un panel de estadística y analítica que te permitirá ver tus estadísticas de interés.',
        img:'https://s3.amazonaws.com/mayahii-frontend/img/datos.png'
    },
    {
        title: 'Portafolio del usuario',
        description: 'Cada usuario Mayahii tiene su portafolio personal siempre actualizado, donde se detallan los cursos que ha terminado históricamente.',
        img:'https://s3.amazonaws.com/mayahii-frontend/img/diplomaNuevo.png'
    },
];

const services = [
    {
        title: 'Arquitectura y Diseño Académico',
        description: 'Diagnósticamos y analisamos las necesidades de su organización, para ayudarle a desarrollar un plan curricular e instruccional.',
        img:'https://s3.amazonaws.com/mayahii-frontend/img/Fservice.png'
    },
    {
        title: 'Producción de Cursos y Contenidos Educativos',
        description: 'Crea contenido y compártelo con el mundo, con un grupo selecto o cobra por el contenido, conoce más en nuestro sitio.',
        img:'https://s3.amazonaws.com/mayahii-frontend/img/Sserivice.png'
    },
    {
        title: 'Operación de Proyectos Educativos',
        description: 'Crea contenido y compártelo con el mundo, con un grupo selecto o cobra por el contenido, conoce más en nuestro sitio.',
        img:'https://s3.amazonaws.com/mayahii-frontend/img/Tservice.png'
    },
];
const products = [
    {
        title: 'ACADEMIAS',
        description: 'Crea contenido y compártelo con el mundo, con un grupo selecto o cobra por el contenido, conoce más en nuestro sitio.',
        img: 'https://s3.amazonaws.com/mayahii-frontend/img/academiesLanding.png',
        link: 'http://www.mayahii.com/catalogos/adminProductos.action',
    },
    {
        title: 'CAMPUS EDUCADORES',
        description: 'Actualízate como educador, encuentra cursos de actualidad y aprende sobre la era digital.',
        img: 'https://s3.amazonaws.com/mayahii-frontend/img/eduLanding.png',
        link: 'http://educadores.mayahii.com/',
    },
    {
        title: 'FORMACIÓN CONTINUA',
        description: 'Para docentes de educación básica, aquí encontrarás cursos oficiales para seguir desarrollándote en tu profesión.',
        img: 'https://s3.amazonaws.com/mayahii-frontend/img/educationLanding.png',
        link: 'http://formacioncontinua.mayahii.com/',
    },
    {
        title: 'INFINITE',
        description: 'Crea contenido y compártelo con el mundo, con un grupo selecto o cobra por el contenido, conoce más en nuestro sitio.',
        img: 'https://s3.amazonaws.com/mayahii-frontend/img/infiniteLanding.png',
        link: 'http://www.mayahii.com/#!/infinite',
    }
];

const users = [
    {
        img:'https://s3.amazonaws.com/mayahii-frontend/img/maestro.png',
        type: 'Educadores e instructores'
    },
    {
        img:'https://s3.amazonaws.com/mayahii-frontend/img/alumno.png',
        type: 'Alumnos y público en general'
    },
    {
        img:'https://s3.amazonaws.com/mayahii-frontend/img/instituto.png',
        type: 'Instituciones'
    },
    {
        img:'https://s3.amazonaws.com/mayahii-frontend/img/negocio.png',
        type: 'Organizaciones y emperesas'
    }
];

const tools = [
    {
        img:'https://s3.amazonaws.com/mayahii-frontend/img/analisis.png',
        type: 'Análisis y bases de datos'
    },
    {
        img:'https://s3.amazonaws.com/mayahii-frontend/img/reporte.png',
        type: 'Reportes de avances curriculares'
    },
    {
        img:'https://s3.amazonaws.com/mayahii-frontend/img/diplomaNuevo.png',
        type: 'Portafolio de usuario'
    },
    {
        img:'https://s3.amazonaws.com/mayahii-frontend/img/seguimiento_usuario.png',
        type: 'Seguimiento personalizado de usuarios'
    }
];

class Login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes, theme} = this.props;

        return(
            <div>
                <aside className={classes.banner}>
                    <div className={classes.navContainer}>
                        <Typography className={classes.textBanner} variant="display1" gutterBottom align="left">
                            Enseñanza de calidad.
                        </Typography>
                        <Typography className={classes.textBanner} variant="display1" gutterBottom align="left">
                            Aprendizaje ideal.
                        </Typography>
                        <Typography className={classes.textBanner} variant="display1" gutterBottom align="left">
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
                    </div>
                </aside>
                <div className={classes.navContainer}>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <aside className={classes.mayahiiDescriptionF}>
                            <figure className={classes.spaceImageContainer}>
                                <img src="https://s3.amazonaws.com/mayahii-frontend/img/libro_abierto.png" alt="" className={classes.spaceImage} />
                            </figure>
                        </aside>
                        <aside className={classes.mayahiiDescriptionF}>
                            <Typography className={classes.mayahiiDescriptionTitleSection} variant="headline" gutterBottom align="left">
                                Experiencia educativa
                                completa y moderna
                            </Typography>
                            <Typography className={classes.mayahiiDescriptionText} variant="subheading" gutterBottom align="left">
                                Lleva tu centro de formación
                                al siguiente nivel con la
                                experiencia educativa que
                                ofrecemos en Mayahii. Combina
                                una moderna aula virtual
                                con ejercicios interactivos,
                                presentaciones, foros de
                                discusión y cualquier otro
                                tipo de material adicional
                                que gustes.
                            </Typography>
                        </aside>
                    </section>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <Typography className={classes.mayahiiDescriptionTitle} variant="headline" gutterBottom align="left">
                            Mayahii Plataforma de Enseñanza
                            y Aprendizaje
                        </Typography>
                        <Typography className={classes.mayahiiDescriptionSubTitle} variant="subheading" gutterBottom align="left">
                            Contamos con una infraestructura
                            digital que permite crear contenido
                            en línea sin límite de usuarios y
                            con la posibilidad de segmentarse
                            en audiencias.
                        </Typography>
                        <div className={classes.productsContainer}>
                            {
                                products.map(product =>(
                                    <aside className={classes.productContainer}>
                                        <Typography variant="subheading" gutterBottom align="center">
                                            {product.title}
                                        </Typography>
                                        <Typography className={classes.productDescription} variant="body1" gutterBottom align="center">
                                            {product.description}
                                        </Typography>
                                        <figure className={classes.productImageContainer}>
                                            <img src={product.img} alt="" className={classes.productImage}  />
                                        </figure>
                                        <a href={product.link} target="_blank" className={classes.productLink}>
                                            <Typography className={classes.productLinkText} variant="body1" gutterBottom align="center">
                                                VISITA <br></br>{product.title}
                                            </Typography>
                                        </a>
                                    </aside>
                                ))
                            }
                        </div>
                    </section>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <Typography className={classes.mayahiiDescriptionTitle} variant="headline" gutterBottom align="left">
                            Mayahii Servicios de Acompañamiento
                            Académico y Producción Educativa
                        </Typography>
                        <Typography className={classes.mayahiiDescriptionSubTitle} variant="subheading" gutterBottom align="left">
                            También contamos con servicios de
                            consultoría educativa y desarrollo
                            de material educativo, si está
                            interesado en conocer más a detalle
                            estos servicios mándanos un correo.
                        </Typography>
                        <div className={classes.servicesContainer}>
                            {
                                services.map(service =>(
                                    <aside className={classes.serviceContainer}>
                                        <Typography className={classes.serviceTitle} variant="subheading" gutterBottom align="center">
                                            {service.title}
                                        </Typography>
                                        <Typography className={classes.productDescription} variant="body1" gutterBottom align="center">
                                            {service.description}
                                        </Typography>
                                        <figure className={classes.productImageContainer}>
                                            <img src={service.img} alt="" className={classes.productImage}  />
                                        </figure>
                                    </aside>
                                ))
                            }
                        </div>
                    </section>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <Typography className={classes.mayahiiDescriptionTitle} variant="headline" gutterBottom align="left">
                            ¿Quién usa Mayahii?
                        </Typography>
                        <Typography className={classes.mayahiiDescriptionSubTitle} variant="subheading" gutterBottom align="left">
                            Nuestra plataforma puede ser
                            usada por cualquiera, no
                            importa el tamaño de tu organización
                            o de tu reto educativo, contamos con
                            la infraestructura y el personal
                            para ayudarte a superar cualquier
                            desafío.
                        </Typography>
                        <div className={classes.servicesContainer}>
                            {
                                users.map(user =>(
                                    <aside className={classes.productContainer}>
                                        <figure className={classes.productImageContainer}>
                                            <img src={user.img} alt="" className={classes.productImage}  />
                                        </figure>
                                        <Typography className={classes.userType} variant="subheading" gutterBottom align="center">
                                            {user.type}
                                        </Typography>
                                    </aside>
                                ))
                            }
                        </div>
                    </section>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <aside className={classes.mayahiiDescriptionF}>
                            <figure className={classes.spaceImageContainer}>
                                <img src="https://s3.amazonaws.com/mayahii-frontend/img/userTablet.png" alt="" className={classes.spaceImage} />
                            </figure>
                        </aside>
                        <aside className={classes.mayahiiDescriptionF}>
                            <Typography className={classes.mayahiiDescriptionTitleSection} variant="headline" gutterBottom align="left">
                                ¿Necesitas capacitar o instruir
                                pero no tienes contenido?
                            </Typography>
                            <Typography className={classes.mayahiiDescriptionText} variant="subheading" gutterBottom align="left">
                                Te ayudamos a configurar un plan
                                académico para tu audiencia y a
                                crear contenido original o bien
                                usar material de nuestra vasta
                                red de lecciones y academias.
                            </Typography>
                        </aside>
                    </section>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <Typography className={classes.mayahiiDescriptionTitle} variant="headline" gutterBottom align="left">
                            Herramientas de vanguardia
                            para administradores de cursos
                        </Typography>
                        <Typography className={classes.mayahiiDescriptionSubTitle} variant="subheading" gutterBottom align="left">
                            Estos son algunos de nuestros
                            clientes y alianzas a las que
                            Mayahii ha ayudado a superar
                            grandes retos educativos y de formación.
                        </Typography>
                        <div className={classes.servicesContainer}>
                            {
                                tools.map(tool =>(
                                    <aside className={classes.toolContainer}>
                                        <figure className={classes.toolContainerImage}>
                                            <img src={tool.img} alt="" className={classes.toolImage}  />
                                        </figure>
                                        <Typography className={classes.toolType} variant="subheading" gutterBottom align="center">
                                            {tool.type}
                                        </Typography>
                                    </aside>
                                ))
                            }
                        </div>
                    </section>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <Typography className={classes.mayahiiDescriptionTitle} variant="headline" gutterBottom align="left">
                            Servicios siempre incluidos
                        </Typography>
                        <Typography className={classes.mayahiiDescriptionSubTitle} variant="subheading" gutterBottom align="left">
                            Porqué el servicio y satisfacción
                            de nuestros clientes nos importa
                            Mayahii pone a su disposición los
                            siguientes servicios en cualquiera
                            de sus planes:
                        </Typography>
                        <div className={classes.servicesContainer}>
                            {
                                includedServices.map(includedService =>(
                                    <aside className={classes.serviceContainer}>
                                        <Typography className={classes.serviceTitle} variant="subheading" gutterBottom align="center">
                                            {includedService.title}
                                        </Typography>
                                        <Typography className={classes.productDescription} variant="body1" gutterBottom align="center">
                                            {includedService.description}
                                        </Typography>
                                        <figure className={classes.productImageContainer}>
                                            <img src={includedService.img} alt="" className={classes.productImage}  />
                                        </figure>
                                    </aside>
                                ))
                            }
                        </div>
                    </section>
                    <section className={classes.mayahiiDescriptionContainer}>
                        <aside className={classes.mayahiiDescriptionF}>
                            <figure className={classes.bookImageContainer}>
                                <img src="https://s3.amazonaws.com/mayahii-frontend/img/imageBookB.png" alt="" className={classes.spaceImage} />
                            </figure>
                        </aside>
                        <aside className={classes.mayahiiDescriptionF}>
                            <Typography className={classes.mayahiiDescriptionTitle} variant="headline" gutterBottom align="left">
                                Servicios adicionales
                            </Typography>
                            <Typography className={classes.mayahiiDescriptionText} variant="subheading" gutterBottom align="left">
                                Nuestros servicios de producción
                                de contenidos educativos habilitarán
                                a su organización con la capacidad
                                de proveer a sus usuarios cursos y
                                entrenamiento de clase mundial,
                                desarrollado con las técnicas
                                pedagógicas y audiovisuales más actuales.
                            </Typography>
                            <Typography className={classes.mayahiiDescriptionList} variant="subheading" gutterBottom align="left">
                                Producción de cursos
                            </Typography>
                            <Typography className={classes.mayahiiDescriptionList} variant="subheading" gutterBottom align="left">
                                Paquete de soporte técnico y acompañamiento
                            </Typography>
                            <Typography className={classes.mayahiiDescriptionList} variant="subheading" gutterBottom align="left">
                                Administración completa de Academia
                            </Typography>
                            <Typography className={classes.mayahiiDescriptionList} variant="subheading" gutterBottom align="left">
                                Servicio de consultoría educativa
                            </Typography>
                        </aside>
                    </section>
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

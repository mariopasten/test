import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {connect} from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const drawerWidth = 240;

const styles = theme => ({
    descriptionContainer: {
        width: '100%',
        float: 'left',
        '@media (min-width: 960px)': {
            width: '60%',
        }
    },
    descriptionText: {
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 20,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    imgContainer: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        float: 'left',
        '@media (min-width: 960px)': {
            width: '40%',
            marginLeft: 0,
            marginRight: 0,
        }
    },
    navContainer: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        position: 'relative',
        paddingTop: 100,
    },
    text: {
        color: '#4A4A4A',
    },
    subTitle: {
        fontSize: 17,
        color: '#4A4A4A',
        marginBottom: 20,
    }
});

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            anchorEl: null,
            userMenu: null,
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.navContainer}>
                <section className={classes.descriptionContainer}>
                    <Typography className={classes.title} variant="display2" gutterBottom align='left'>
                        Sobre nosotros
                    </Typography>
                    <Typography className={classes.subTitle} variant="display1" align="left">
                        Somos una Organización Mexicana
                    </Typography>
                    <Typography className={classes.descriptionText} variant="headline" align="left">
                        Dedicada al diseño, desarrollo y ejecución holística de proyectos educativos y de capacitación a gran escala. Nuestra visión es proveer a todo individuo y organización con las herramientas necesarias para aprender o enseñar cualquier tema.
                    </Typography>
                    <Typography className={classes.descriptionText} variant="headline" align="left">
                        En Mayahii desarrollamos una plataforma tecnológica de aprendizaje en la nube que permite a nuestros estudiantes mantener acceso permanente a toda la educación que han recibido a lo largo de su vida en un solo lugar.
                    </Typography>
                </section>
                <figure className={classes.imgContainer}>
                    <img className={classes.img} src="https://s3.amazonaws.com/mayahii-frontend/img/aboutUsL.png" alt=""/>
                </figure>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return ({});
}

export default withStyles(styles)(connect(mapStateToProps, {})(AboutUs));

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
    btnHome: {
        padding: 0,
    },
    btnUserMenu: {
        width: '100%',
    },
    appBar: {
        background: '#37474F',
        position: 'relative',
        bottom: 0,
    },
    avatar: {
        margin: 0,
        position: 'absolute',
        right: 0
    },
    fullList: {
        width: 'auto'
    },
    'headerInfoUser': {
        position: 'absolute',
        right: 0,
        top: 13,
        width: '22%',
    },
    hide: {
        display: 'none'
    },
    imgHeader: {
        width: '100%',
        height: '100%'
    },
    imgHeaderContainer: {
        width: 128,
        height: 64,
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 0,
        '@media (min-width: 960px)': {
            margin: 0,
            float: 'left',
            position: 'relative',
            top: 0
        }
    },
    list: {
        width: 250
    },
    'loginText': {
        margin: theme.spacing.unit,
        margin: 0,
        top: 15,
        right: 15,
        position: 'absolute',
        '@media (min-width: 960px)': {
            margin: theme.spacing.unit,
            margin: 0,
            float: 'right',
            position: 'relative',
            left: '-10px'
        }
    },
    nameHeader: {
        position: 'absolute',
        right: 0,
        top: 8,
        color: '#FFFFFF',
        width: '75%',
        textAlign: 'right',
        paddingRight: 60,
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
        minWidth: '15%',
        marginLeft: 0,
        marginRight: 0,
    },
    navMenu: {
        position: 'absolute',
        top: 8,
        width: '98%',
        marginLeft: '1%',
        marginRight: '1%'
    },
    progress: {
        marginLeft: '40%',
        marginRight: '40%',
        width: '20%'
    },
    root: {
        flexGrow: 1
    },
    subTextFooter: {
        color: '#FFFFFF',
        marginTop: 23,
    },
    textFooter: {
        marginTop: 20,
        paddingLeft: 20,
        width: '10%',
        float: 'left',
        color: '#FFFFFF'
    },
    toolBar: {
        padding: 0,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
    },
});

class Footer extends React.Component {
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
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <Tabs className={classes.navMenu}>
                            <Tab className={classes.navItem} button="button" href={`http://ayuda.mayahii.com/`} label="Contáctanos"/>
                            <Tab className={classes.navItem} button="button" href={`https://www.mayahii.com/m#!/about`} label="Acerca de"/>
                            <Tab className={classes.navItem} button="button" href={`http://mayahii.org/`} label="Fundación Mayahii"/>
                            <Tab className={classes.navItem} button="button" href={`https://www.mayahii.com/m#!/t/community_guidelines`} label="Lineamientos de la Comunidad"/>
                            <Tab className={classes.navItem} button="button" href={`https://www.mayahii.com/m#!/t/privacy`} label="Aviso de privacidad"/>
                        </Tabs>
                    </Toolbar>
                    <div className={classes.navContainer}>
                        <figure className={classes.imgHeaderContainer}>
                            <img src="https://s3.amazonaws.com/mayahii-frontend/img/mayahiiLogoNew.png" alt="" className={classes.imgHeader}/>
                        </figure>
                        <Typography className={classes.textFooter} variant="subheading" gutterBottom align="left">
                            2018 ©
                        </Typography>
                        <Typography className={classes.subTextFooter} variant="body1" gutterBottom align="right">
                            Todos los derechos reservados. Prohibida su reproducción parcial o total.
                        </Typography>
                    </div>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return ({});
}

export default withStyles(styles)(connect(mapStateToProps, {})(Footer));

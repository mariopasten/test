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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import {getUserInSession} from '../actions/index';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        background: '#37474F'
    },
    avatar: {
        margin: 10,
        position: 'absolute',
        right: 0
    },
    fullList: {
        width: 'auto'
    },
    'headerInfoUser': {
        position: 'absolute',
        right: 0,
        top: 0
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
        top: 10,
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
        right: 80,
        top: 20,
        color: '#FFFFFF'
    },
    navContainer: {
        '@media (min-width: 960px)': {
            width: 960,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative'
        },
        '@media (min-width: 1280px)': {
            width: 1280,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative'
        },
    },
    navItem: {
        minWidth: 0
    },
    navMenu: {
        position: 'absolute',
        top: 5,
        width: '56%',
        marginLeft: '22%',
        marginRight: '22%'
    },
    progress: {
        marginLeft: '40%',
        marginRight: '40%',
        width: '20%'
    },
    root: {
        flexGrow: 1
    }
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            anchorEl: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.props.getUserInSession();
    }

    handleClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose() {
        this.setState({anchorEl: null});
    };

    handleDrawerClose() {
        this.setState({left: false});
    };

    handleDrawerOpen() {
        this.setState({left: true});
    };

    render() {
        const {classes} = this.props;
        const {anchorEl} = this.state;
        if (!this.props.userInSession) {
            return <CircularProgress className={classes.progress} size={100}/>
        }

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <Hidden mdUp="mdUp">
                            <Button onClick={this.handleDrawerOpen}>
                                <Icon>menu</Icon>
                            </Button>
                            <SwipeableDrawer open={this.state.left} onClose={this.handleDrawerClose} onOpen={this.handleDrawerOpen}>
                                <div tabIndex={0} role="button" onClick={this.handleDrawerClose} onKeyDown={this.handleDrawerClose}>
                                    <div className={classes.list}>
                                        <ListItem button="button" component={Link} to={`/login`}>
                                            <ListItemText primary="Materias"/>
                                        </ListItem>
                                        <Divider/>
                                        <List>2</List>
                                    </div>
                                </div>
                            </SwipeableDrawer>
                        </Hidden>
                        <div className={classes.navContainer}>
                            <figure className={classes.imgHeaderContainer}>
                                <img src="https://s3.amazonaws.com/mayahii-frontend/img/mayahiiLogoNew.png" alt="" className={classes.imgHeader}/>
                            </figure>
                            <Hidden smDown="smDown">
                                <Tabs className={classes.navMenu}>
                                    {/* <Tab button="button" component={Link} to={`/landing`} className={classes.navItem} label="Inicio"/> */}
                                    <Tab className={classes.navItem} button="button" component={Link} to={`/misCursos`} label="Mis Cursos"/>
                                    <Tab className={classes.navItem} button="button" component={Link} to={`/landing`} label="Recursos Abiertos"/>
                                    {/* <Tab className={classes.navItem} label="Alianza"/>
                                    <Tab className={classes.navItem} label="Empresa"/> */}
                                    <Tab className={classes.navItem} label="Universo Mayahii" aria-owns={anchorEl
                                            ? 'simple-menu'
                                            : null} aria-haspopup="true" onClick={this.handleClick}/>

                                    <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                                        <MenuItem onClick={this.handleClose}><a href="https://www.mayahii.com/catalogos/adminProductos.action" target="_blank">Academias</a></MenuItem>
                                        <MenuItem onClick={this.handleClose}><a href="https://www.mayahii.com/educadores" target="_blank">Mayahii Educadores</a></MenuItem>
                                        <MenuItem onClick={this.handleClose}><a href="https://www.mayahii.com/formacioncontinua" target="_blank">Mayahii Formación Continua</a></MenuItem>
                                        <MenuItem onClick={this.handleClose}><a href="https://www.mayahii.com/campusgoogle" target="_blank">Mayahii Campus Google</a></MenuItem>
                                    </Menu>
                                </Tabs>
                            </Hidden>
                            {
                                !this.props.userInSession.usuario
                                    ? <Button className={classes.loginText} variant="contained" component={Link} to={`/login`}>
                                            Iniciar sesión
                                        </Button>
                                    : <div className={classes.headerInfoUser}>
                                            <Hidden xsDown="xsDown">
                                                <Typography className={classes.nameHeader}>{this.props.userInSession.nombre}</Typography>
                                            </Hidden>
                                            <Avatar alt="User Image" src={this.props.userInSession.foto} className={classes.avatar}/>
                                        </div>
                            }
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps({userInSession}) {
    return ({userInSession});
}

export default withStyles(styles)(connect(mapStateToProps, {getUserInSession})(Header));

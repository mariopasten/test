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
import {getLogOut} from '../actions/index';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        background: '#37474F',
        boxShadow: 'none',
        position: 'fixed',
        zIndex: 99999,
    },
    avatar: {
        margin: 0,
        position: 'relative',
        right: 0,
        top: '-5px',
        width: 25,
        height: 25,
        '@media (min-width: 960px)': {
            width: 40,
            height: 40,
        },
        '@media (min-width: 1280px)': {
            margin: 0,
            position: 'absolute',
            right: 0,
            width: 40,
            height: 40,
        },
    },
    btnHome: {
        padding: 0,
    },
    btnUserMenu: {
        width: '100%',
    },
    btnMenu: {
        right: 0,
        position: 'absolute',
        top: 8,
    },
    buttonsContainer: {
        float: 'right'
    },
    fullList: {
        width: 'auto'
    },
    'headerInfoUser': {
        position: 'absolute',
        right: 0,
        top: 13,
        width: '20%',
        marginLeft: '40%',
        marginRight: '40%',
        '@media (min-width: 1280px)': {
            position: 'absolute',
            right: 0,
            top: 13,
            width: '22%',
            marginLeft: 0,
            marginRight: 0,
        },
    },
    hide: {
        display: 'none'
    },
    imgHeader: {
        width: '100%',
        height: '100%'
    },
    imgHeaderContainer: {
        width: 63,
        height: 31,
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 0,
        '@media (min-width: 1280px)': {
            width: 128,
            height: 64,
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 0,
            marginBottom: 0,
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
        '@media (min-width: 960px)': {
            width: 960,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative'
        },
        '@media (min-width: 1280px)': {
            width: '100%',
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
        top: 8,
        width: '56%',
        marginLeft: '22%',
        marginRight: '22%'
    },
    progress: {
        marginLeft: '40%',
        marginRight: '40%',
        width: '20%'
    },
    registerText: {
        marginRight: 25,
        position: 'relative',
        top: 15,
        color: '#FFFFFF',
    },
    root: {
        flexGrow: 1
    },
    toolBar: {
        padding: 0,
        width: '100%',
        '@media (min-width: 1280px)': {
            padding: 0,
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
        },
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            right: false,
            anchorEl: null,
            userMenu: null,
        };
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickUser = this.handleClickUser.bind(this);
        this.handleCloseUser = this.handleCloseUser.bind(this);
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

    handleClickUser(event) {
        this.setState({ userMenu: event.currentTarget });
    };

    handleCloseUser() {
        this.setState({userMenu: null});
    };

    handleDrawerClose() {
        this.setState({right: false});
    };

    handleDrawerOpen() {
        this.setState({right: true});
    };

    handleLogOut() {
        this.props.toggle;
        this.props.getLogOut();
        setTimeout(function(){
            window.location.href = "/"
        }, 1000);

    }

    render() {
        const {classes} = this.props;
        const {anchorEl, userMenu} = this.state;
        if (!this.props.userInSession) {
            return <CircularProgress className={classes.progress} size={100}/>
        }

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.toolBar}>
                        <div className={classes.navContainer}>
                            <Button className={classes.btnHome} component={Link} to={`/`}>
                                <figure className={classes.imgHeaderContainer}>
                                    <img src="https://s3.amazonaws.com/mayahii-frontend/img/mayahiiLogoNew.png" alt="" className={classes.imgHeader}/>
                                </figure>
                            </Button>
                            <Hidden mdDown="mdDown">
                                <Tabs className={classes.navMenu}>
                                    <Tab className={classes.navItem} button="button" component={Link} to={`/myCourses`} label="Mis Cursos"/>
                                    <Tab className={classes.navItem} button="button" component="a" href="https://www.mayahii.com/m#!/infinite" label="Infinite"/>
                                    <Tab className={classes.navItem} button="button" component="a" href="https://www.mayahii.com/m#!/RAs" label="Recursos abiertos"/>
                                </Tabs>
                            </Hidden>
                            {
                                !this.props.userInSession.usuario
                                    ?
                                        <Hidden mdDown="mdDown">
                                            <div className={classes.buttonsContainer}>
                                                <Button component={Link} to={`/register`}  className={classes.registerText}>
                                                    Regístrate
                                                </Button>
                                                <Button className={classes.loginText} variant="contained" component={Link} to={`/login`}>
                                                    Iniciar sesión
                                                </Button>
                                            </div>
                                        </Hidden>
                                    :
                                        <div className={classes.headerInfoUser}>
                                            <Button
                                                aria-owns={userMenu ? 'fade-menu' : null}
                                                aria-haspopup="true"
                                                onClick={this.handleClickUser}
                                                className={classes.btnUserMenu}
                                            >
                                                <Hidden smDown="smDown">
                                                    <Typography className={classes.nameHeader}>{this.props.userInSession.nombre}</Typography>
                                                </Hidden>
                                                <Avatar alt="User Image" src={this.props.userInSession.foto} className={classes.avatar}/>
                                            </Button>
                                            <Hidden smDown="smDown">
                                                <Menu
                                                    id="fade-menu"
                                                    anchorEl={userMenu}
                                                    open={Boolean(userMenu)}
                                                    onClose={this.handleCloseUser}
                                                >
                                                    <MenuItem onClick={this.handleCloseUser} button="button" component={Link} to={`/myPortfolio`}>Portafolio</MenuItem>
                                                    <MenuItem onClick={this.handleCloseUser} button="button" component={Link} to={`/myHistory`}>Historial</MenuItem>
                                                    <MenuItem onClick={this.handleCloseUser} button="button" component="a" href="http://ayuda.mayahii.com/" target="_blank">Centro de ayuda</MenuItem>
                                                    <Divider/>
                                                    <MenuItem onClick={this.handleCloseUser} button="button" component="a" href="https://www.mayahii.com/catalogos/adminProductos.action" target="_blank">Administrar</MenuItem>
                                                    <Divider/>
                                                    <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
                                                </Menu>
                                            </Hidden>
                                        </div>
                            }
                            <Hidden lgUp="lgUp">
                                <Button className={classes.btnMenu} onClick={this.handleDrawerOpen}>
                                    <Icon>menu</Icon>
                                </Button>
                                <SwipeableDrawer anchor="right" open={this.state.right} onClose={this.handleDrawerClose} onOpen={this.handleDrawerOpen}>
                                    <div tabIndex={0} role="button" onClick={this.handleDrawerClose} onKeyDown={this.handleDrawerClose}>
                                        {
                                            !this.props.userInSession.usuario
                                                ?
                                                    <div className={classes.list}>
                                                        <ListItem button="button" component={Link} to={`/login`}>
                                                            <ListItemText primary="Login"/>
                                                        </ListItem>
                                                        <ListItem button="button" component={Link} to={`/register`}>
                                                            <ListItemText primary="Regístro"/>
                                                        </ListItem>
                                                    </div>
                                                :
                                                    <div className={classes.list}>
                                                        <ListItem button="button" component={Link} to={`/`}>
                                                            <ListItemText primary="Inicio"/>
                                                        </ListItem>
                                                        <ListItem button="button" component={Link} to={`/myCourses`}>
                                                            <ListItemText primary="Mis cursos"/>
                                                        </ListItem>
                                                        <Divider/>
                                                        <ListItem button="button" component={Link} to={`/myHistory`}>
                                                            <ListItemText primary="Historial"/>
                                                        </ListItem>
                                                        <ListItem button="button" component={Link} to={`/myPortfolio`}>
                                                            <ListItemText primary="Portafolio"/>
                                                        </ListItem>
                                                        <Divider/>
                                                        <ListItem button="button" component="a" href="http://ayuda.mayahii.com/" target="_blank">
                                                            <ListItemText primary="Centro de ayuda"/>
                                                        </ListItem>
                                                        <Divider/>
                                                        <ListItem button="button" component="a" href="https://www.mayahii.com/catalogos/adminProductos.action" target="_blank">
                                                            <ListItemText primary="Administrar"/>
                                                        </ListItem>
                                                        <Divider/>
                                                        <ListItem onClick={this.handleLogOut}>
                                                            <ListItemText primary="Logout"/>
                                                        </ListItem>
                                                    </div>
                                        }
                                    </div>
                                </SwipeableDrawer>
                            </Hidden>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps({userInSession, logOutUser}) {
    return ({userInSession, logOutUser});
}

export default withStyles(styles)(connect(mapStateToProps, {getUserInSession, getLogOut})(Header));

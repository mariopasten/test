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
    btnHome: {
        padding: 0,
    },
    btnUserMenu: {
        width: '100%',
    },
    appBar: {
        background: '#37474F',
        position: 'fixed',
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
    root: {
        flexGrow: 1
    },
    toolBar: {
        padding: 0,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
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
        this.setState({left: false});
    };

    handleDrawerOpen() {
        this.setState({left: true});
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
                            <Button className={classes.btnHome} component={Link} to={`/`}>
                                <figure className={classes.imgHeaderContainer}>
                                    <img src="https://s3.amazonaws.com/mayahii-frontend/img/mayahiiLogoNew.png" alt="" className={classes.imgHeader}/>
                                </figure>
                            </Button>
                            <Hidden smDown="smDown">
                                <Tabs className={classes.navMenu}>
                                    {/* <Tab button="button" component={Link} to={`/landing`} className={classes.navItem} label="Inicio"/> */}
                                    <Tab className={classes.navItem} button="button" component={Link} to={`/myCourses`} label="Mis Cursos"/>
                                    <Tab className={classes.navItem} button="button" component={Link} to={`/infinite`} label="Infinite"/>
                                    {/* <Tab className={classes.navItem} label="Alianza"/>
                                    <Tab className={classes.navItem} label="Empresa"/> */}
                                    {/* <Tab className={classes.navItem} label="Universo Mayahii" aria-owns={anchorEl
                                            ? 'simple-menu'
                                            : null} aria-haspopup="true" onClick={this.handleClick}/>

                                    <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                                        <MenuItem onClick={this.handleClose}><a href="https://www.mayahii.com/catalogos/adminProductos.action" target="_blank">Academias</a></MenuItem>
                                        <MenuItem onClick={this.handleClose}><a href="https://www.mayahii.com/educadores" target="_blank">Mayahii Educadores</a></MenuItem>
                                        <MenuItem onClick={this.handleClose}><a href="https://www.mayahii.com/formacioncontinua" target="_blank">Mayahii Formación Continua</a></MenuItem>
                                        <MenuItem onClick={this.handleClose}><a href="https://www.mayahii.com/campusgoogle" target="_blank">Mayahii Campus Google</a></MenuItem>
                                    </Menu> */}
                                </Tabs>
                            </Hidden>
                            {
                                !this.props.userInSession.usuario
                                    ?   <Button className={classes.loginText} variant="contained" component={Link} to={`/login`}>
                                            Iniciar sesión
                                        </Button>
                                    :   <div className={classes.headerInfoUser}>
                                            <Button
                                                aria-owns={userMenu ? 'fade-menu' : null}
                                                aria-haspopup="true"
                                                onClick={this.handleClickUser}
                                                className={classes.btnUserMenu}
                                            >
                                                <Hidden xsDown="xsDown">
                                                    <Typography className={classes.nameHeader}>{this.props.userInSession.nombre}</Typography>
                                                </Hidden>
                                                <Avatar alt="User Image" src={this.props.userInSession.foto} className={classes.avatar}/>
                                            </Button>
                                            <Menu
                                                id="fade-menu"
                                                anchorEl={userMenu}
                                                open={Boolean(userMenu)}
                                                onClose={this.handleCloseUser}
                                            >
                                                <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
                                            </Menu>
                                        </div>
                            }
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

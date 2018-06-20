import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {getUserInSession} from '../actions/index';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    'navContainer': {
        '@media (min-width: 960px)': {
            width: 1218,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    appFrame: {
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        background: '#37474F',
        maxHeight: 60,
        transition: theme.transitions.create([
            'margin', 'width'
        ], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create([
            'margin', 'width'
        ], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    'appBarShift-left': {
        marginLeft: drawerWidth
    },
    'appBarShift-right': {
        marginRight: drawerWidth
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
        color: '#FFFFFF',
    },
    hide: {
        display: 'none'
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    'content-left': {
        marginLeft: -drawerWidth
    },
    'content-right': {
        marginRight: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    'contentShift-left': {
        marginLeft: 0
    },
    'contentShift-right': {
        marginRight: 0
    },
    'imgHeaderContainer': {
        width: 128,
        height: 64,
        marginLeft: 'auto',
        marginRight: 'auto',
        '@media (min-width: 960px)': {
            margin: 0,
            float: 'left',
            position: 'absolute',
            top: 0,
        },
    },
    'imgHeader': {
        width: '100%',
        height: '100%',
    },
    'container': {
        marginTop: 50,
    },
    avatar: {
        margin: 10,
        position: 'absolute',
        right: 0,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    nameHeader: {
        position: 'absolute',
        right: 80,
        top: 20,
        color: '#FFFFFF',
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
            top: '-3px',
            left: '-10px',
        },
    },
    'navMenu': {
        position: 'absolute',
        top: 5,
        width: '56%',
        marginLeft: '22%',
        marginRight: '22%',
    },
    'navItem': {
        minWidth: 0
    },
    'headerInfoUser': {
        position: 'absolute',
        right: 0,
        top: 0,
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchor: 'left'
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleChangeAnchor = this.handleChangeAnchor.bind(this);
        this.props.getUserInSession();
    }

    handleDrawerOpen() {
        this.setState({open: true});
    };

    handleDrawerClose() {
        this.setState({open: false});
    };

    handleChangeAnchor() {
        this.setState({anchor: event.target.value});
    };

    render() {
        const {classes, theme} = this.props;
        const {anchor, open} = this.state;

        const drawer = (
            <Drawer variant="persistent" anchor={anchor} open={open} classes={{
                paper: classes.drawerPaper
            }}>
                <div className={classes.drawerHeader}></div>
                {/* <Divider/>
                <List>uno</List>
                <Divider/>
                <List>dos</List> */}
                <List component="nav">
                    <ListItem button component={Link} to={`/home`} >
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} to={`/courses`} >
                        <ListItemText primary="Cursos" />
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} to={`/academies`} >
                        <ListItemText primary="Academias" />
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} to={`/educadores`} >
                        <ListItemText primary="Educadores" />
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} to={`/infinite`} >
                        <ListItemText primary="Infinite" />
                    </ListItem>
                    <Divider/>
                    <ListItem button component={Link} to={`/subjects`} >
                        <ListItemText primary="Materias" />
                    </ListItem>
                    <Divider/>
                </List>
            </Drawer>
        );



        if(!this.props.userInSession) {
            return <h1>Cargando...</h1>
        }

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                            [classes[`appBarShift-${anchor}`]]: open
                        })}>
                        <Toolbar disableGutters={!open}>
                            <Hidden mdUp>
                                <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerOpen} className={classNames(classes.menuButton, open && classes.hide)}>
                                    <Icon>menu</Icon>
                                </IconButton>
                            </Hidden>
                            <div className={classes.navContainer}>
                                <figure className={classes.imgHeaderContainer}>
                                    <img src="http://educadores21cdmx.mayahii.com/img/loog_mayahii.png" alt="" className={classes.imgHeader}/>
                                </figure>
                                <Hidden smDown>
                                    <Tabs className={classes.navMenu}>
                                        <Tab button component={Link} to={`/infinite`} className={classes.navItem} label="Inicio" />
                                        <Tab className={classes.navItem} label="Cursos" />
                                        <Tab className={classes.navItem} label="Alianza"/>
                                        <Tab className={classes.navItem} label="Empresa"/>
                                        <Tab className={classes.navItem} label="Universo Mayahii"/>
                                    </Tabs>
                                </Hidden>
                                {
                                    !this.props.userInSession.usuario
                                    ?
                                    <Button className={classes.loginText} variant="contained">
                                        Iniciar sesión
                                    </Button>
                                        // <h3 className={classes.loginText}>Iniciar sesión</h3>
                                    :
                                        <div className={classes.headerInfoUser}>
                                            <Hidden xsDown>
                                                <Typography className={classes.nameHeader}>{this.props.userInSession.nombre}</Typography>
                                            </Hidden>
                                            <Avatar alt="User Image" src={this.props.userInSession.foto} className={classes.avatar} />
                                        </div>
                                }
                            </div>
                        </Toolbar>
                    </AppBar>

                    {drawer}
                    <main
                        onClick={this.handleDrawerClose}
                        className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: open,
                            [classes[`contentShift-${anchor}`]]: open
                        })}>
                        <div className={classes.drawerHeader}/>
                        <div className={classes.container}>
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

function mapStateToProps({userInSession}) {
  return ({userInSession});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession})(Header)
);

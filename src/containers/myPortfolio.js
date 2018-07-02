import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Login from './login';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import {getUserAwards} from '../actions/index';
import {getUserInSession} from '../actions/index';

const styles = theme => ({
    awardContainer: {
        width: '20%',
        margin: '30px 2.5%',
        float: 'left',
        height: 200,
    },
    awardImageCourse: {
        width: '100%',
        height: 'auto',
        margin: 0,
    },
    awardImage: {
        width: '100%',
        height: '100%',
    },
    button: {
        background: '#536DFE',
        color: '#FFFFFF',
        position: 'relative',
        width: '80%',
        margin: '0 10%',
        top: '-50px',
        '&:hover': {
            background: '#536DFE',
            color: '#FFFFFF',
        },
    },
    buttonDisabled: {
        background: '#B6C1FF',
        color: '#FFFFFF',
        position: 'relative',
        width: '80%',
        margin: '0 10%',
        top: '-50px',
        cursor: 'auto',
        '&:hover': {
            background: '#B6C1FF',
            color: '#FFFFFF',
        },
    },
    buttonText: {
        marginTop: 3,
        marginLeft: 10
    },
    courseName: {
        color: '#536DFE',
        top: '-25px',
        position: 'relative',
    },
    navContainer: {
        '@media (min-width: 1280px)': {
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            position: 'relative',
            paddingTop: 75,
        }
    },
    progress: {
        display: 'none',
    },
});


class MyPortfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadAwards: false,

        };
    }

    componentDidMount() {
        this.props.getUserInSession();
    }


    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.userInSession != null && nextProps.userawards == null && nextState.loadAwards == false) {
            this.props.getUserAwards(nextProps.userInSession.usuario);
            this.setState({loadAwards: true});
        }
        return true;
    }
    showDegree(url) {
        window.open(`${url}`, '_blank');
    }
    render() {
        const {classes, theme} = this.props;
        const { expanded } = this.state;
        let render = null;
        if (!this.props.userInSession) {
            return <CircularProgress className={classes.progress} size={100}/>
        }
        {
            !this.props.userInSession.usuario
                ?
                    render = <Login
                                prevUrl="myPortfolio"
                            />
                :
                    render = <div>
                                <Typography variant="display2" gutterBottom align='left'>
                                    Mi Portafolio
                                </Typography>
                                {
                                    this.props.userawards != null && this.props.userawards.map(userAward => {
                                        return(
                                            <aside className={classes.awardContainer}>
                                                <figure className={classes.awardImageCourse}>
                                                    <img className={classes.awardImage} alt={userAward.courseName} src={userAward.imgBig} />
                                                </figure>
                                                {
                                                    userAward.isDiploma
                                                    ?
                                                        <div>
                                                            <Button onClick={() => this.showDegree(userAward.diplomaUrl)} variant="contained" className={classes.button}>
                                                                <Icon>star_rate</Icon> <span className={classes.buttonText}>VER DIPLOMA</span>
                                                            </Button>
                                                            <Typography noWrap='true' className={classes.courseName} variant="subheading" gutterBottom align="center">
                                                                {userAward.courseName}
                                                            </Typography>
                                                        </div>
                                                    :
                                                        <div>
                                                            <Button variant="contained" className={classes.buttonDisabled}>
                                                                <Icon>star_rate</Icon> <span className={classes.buttonText}>finalizado</span>
                                                            </Button>
                                                            <Typography noWrap='true' className={classes.courseName} variant="subheading" gutterBottom align="center">
                                                                {userAward.courseName}
                                                            </Typography>
                                                        </div>
                                                }

                                            </aside>
                                        )
                                })}
                            </div>

        }

        return(
            <div className={classes.navContainer}>
                {render}
            </div>
        );
    }
}

function mapStateToProps({userInSession, userawards}) {
    return ({userInSession, userawards});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession, getUserAwards})(MyPortfolio)
);

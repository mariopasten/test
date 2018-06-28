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
import StarsIcon from '@material-ui/icons/Stars';
import {getCoursesByPopulation} from '../actions/index';
import {getUserInSession} from '../actions/index';
import {getMyPopulations} from '../actions/index';
import {getMyCourses} from '../actions/index';
import {getHistory} from '../actions/index';

const styles = theme => ({
    avatar: {
        margin: 7,
        float: 'left',
        border: '2px solid #E0E0E0',
    },
    button: {
        margin: theme.spacing.unit,
    },
    courseName: {
        position: 'relative',
        top: 16,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    navContainer: {
        '@media (min-width: 1280px)': {
            width: '80%',
            marginLeft: '10%',
            marginRight: '10%',
            position: 'relative',
            paddingTop: 65,
        }
    },
    openNewLink: {
        cursor: 'pointer',
    },
    progress: {
        marginLeft: '40%',
        marginRight: '40%',
        width: '20%',
        display: 'none',
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let uuidPrev = null;
let renderCourses = [];

class MyHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadHistory: false,
        };
    }

    componentDidMount() {
        this.props.getUserInSession();
    }


    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.userInSession != null && nextProps.userHistory == null && nextState.loadHistory == false) {
            this.props.getHistory();
            this.setState({loadHistory: true});
        }

        return true;
    }

    render() {
        const {classes, theme} = this.props;
        const { expanded } = this.state;
        let render = null;
        if (!this.props.userInSession) {
            return <CircularProgress className={classes.progress} size={100}/>
        }

        return(
            <div className={classes.navContainer}>
                <h1>My Historial</h1>
            </div>
        );
    }
}

function mapStateToProps({userInSession, userHistory}) {
    return ({userInSession, userHistory});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession, getHistory})(MyHistory)
);

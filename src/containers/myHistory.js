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
import Dotdotdot from 'react-dotdotdot'
import {getCoursesByPopulation} from '../actions/index';
import {getUserInSession} from '../actions/index';
import {getMyPopulations} from '../actions/index';
import {getMyCourses} from '../actions/index';
import {getHistory} from '../actions/index';
import {deleteVideoHistory} from '../actions/index';

const styles = theme => ({
    clearIcon: {
        width: '2%',
        marginRight: '2%',
        float: 'left',
        marginLeft: '1%',
        cursor: 'pointer',
    },
    descriptionLesson: {
        fontWeight: 'normal',
        fontSize: 16,
    },
    descriptionLessonContainer: {
        width: '45%',
        float: 'left',
        marginLeft: '5%',
    },
    historySection: {
        width: '100%',
        overflow: 'hidden',
        height: 350,
        borderBottom: '1px solid gray',
        marginTop: 25,
    },
    imagenLeccion: {
        width: '100%',
        height: '100%',
    },
    imagenLeccionContainer: {
        width: '45%',
        float: 'left',
        height: 300,
        margin: 0,
        cursor: 'pointer',
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
    playImage: {
        width: '10%',
        position: 'absolute',
        margin: 0,
        marginLeft: '26%',
        zIndex: 999,
        marginTop: 125,
        opacity: '0.7',
        cursor: 'pointer',
    },
    progress: {
        marginLeft: '40%',
        marginRight: '40%',
        width: '20%',
        display: 'none',
    },
    titleLesson: {
        cursor: 'pointer',
    }
});

let idVideoDelete = null;
class MyHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadHistory: false,
            hideLesson: false,
        };
    }

    componentDidMount() {
        this.props.getUserInSession();
    }

    deleteVideoFunction(idObjeto) {
        idVideoDelete = idObjeto;
        this.props.deleteVideoHistory(idObjeto);
        this.setState({hideLesson: true});
    }
    showLesson(academy, idCourse, idVideo) {
        window.open(`https://www.mayahii.com/${academy}#!/c/${idCourse}/${idVideo}`, '_blank');
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.userInSession != null && nextProps.userHistory == null && nextState.loadHistory == false) {
            this.props.getHistory();
            this.setState({loadHistory: true});
        }
        if(nextProps.deleteVideo && nextState.hideLesson) {
            let idVideoNoShow = document.getElementById(idVideoDelete);
            idVideoNoShow.style.display = "none";
            this.setState({hideLesson: false});
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
        {
            !this.props.userInSession.usuario
                ?
                    render = <Login
                                prevUrl="myHistory"
                            />
                :
                    render = <div>
                                <Typography variant="display2" gutterBottom align='left'>
                                    Historial
                                </Typography>
                                {
                                    this.props.userHistory != null && this.props.userHistory.map(history => {
                                        return(
                                            <aside id={history.idObjeto} className={classes.historySection}>
                                                <Icon onClick={() => this.deleteVideoFunction(history.idObjeto)} className={classes.clearIcon}>
                                                    clear
                                                </Icon>
                                                <figure className={classes.playImage} onClick={() => this.showLesson(history.academyShortName, history.idLista, history.idObjeto)}>
                                                    <img src="https://s3.amazonaws.com/mayahii-frontend/img/play-arrow.png" alt=""/>
                                                </figure>
                                                <figure onClick={() => this.showLesson(history.academyShortName, history.idLista, history.idObjeto)} className={classes.imagenLeccionContainer}>
                                                    <img className={classes.imagenLeccion} src={history.imagenLeccion} alt={history.titulo}/>
                                                </figure>

                                                <div className={classes.descriptionLessonContainer}>
                                                    <Typography className={classes.titleLesson} onClick={() => this.showLesson(history.academyShortName, history.idLista, history.idObjeto)} variant="headline" gutterBottom align='left'>
                                                        {history.titulo}
                                                    </Typography>
                                                    <Typography variant="subheading" gutterBottom align='left'>
                                                        Curso: {history.serie}
                                                    </Typography>
                                                    <Typography variant="subheading" gutterBottom align='left'>
                                                        Academia: {history.emisor}
                                                    </Typography>
                                                    <Typography variant="subheading" gutterBottom align='left'>
                                                        Visto: {history.fecha}
                                                    </Typography>
                                                    <Dotdotdot clamp={3}>
                                                        <p className={classes.descriptionLesson}>
                                                            {history.desc}
                                                        </p>
                                                    </Dotdotdot>

                                                </div>
                                            </aside>
                                        );
                                })}
                            </div>

        }

        return(
            <div className={classes.navContainer}>
                <h1>{render}</h1>
            </div>
        );
    }
}

function mapStateToProps({userInSession, userHistory, deleteVideo}) {
    return ({userInSession, userHistory, deleteVideo});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession, getHistory, deleteVideoHistory})(MyHistory)
);

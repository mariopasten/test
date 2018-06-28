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
class AllMyCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadPopulations: false,
            showCourses: false,
            expanded: null,
        };
        this.handleChangeExpansion = this.handleChangeExpansion.bind(this);
        this.handleOpenCourse = this.handleOpenCourse.bind(this);

    }

    componentDidMount() {
        this.props.getUserInSession();
    }

    handleClickCoursesByPopulation(uuid) {
        if(uuid == 'myAutoCourses') {
            this.props.getMyCourses();
        }else if (uuidPrev != uuid) {
            if(!this.state.showCourses) {
                uuidPrev = uuid;
                this.props.getCoursesByPopulation(uuid);
            }
        }
    }

    seeDegree(degree) {
        window.open(`${degree}`, '_blank');
    }
    handleOpenCourse(academy, idCourse) {
        window.open(`https://www.mayahii.com/${academy}#!/c/${idCourse}`, '_blank');
    }

    handleChangeExpansion(uuid, expanded){
        if(expanded == uuid) {
            this.setState({expanded: false});
        }else {
            this.setState({expanded: uuid});
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.userInSession != null && nextProps.myPopulations == null && nextState.loadPopulations == false) {
            this.props.getMyPopulations();
            this.setState({loadPopulations: true});
        }
        if(nextProps.coursesByPopulation != null) {
            renderCourses = nextProps.coursesByPopulation[0];
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
                                prevUrl="myCourses"
                            />
                :
                    render = <div>
                                <ExpansionPanel expanded={expanded === 'myAutoCourses'} onChange={() => this.handleChangeExpansion('myAutoCourses', this.state.expanded)}>
                                    <ExpansionPanelSummary onClick={() => this.handleClickCoursesByPopulation("myAutoCourses")} expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>
                                            Mis Cursos
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Paper className={classes.root}>
                                            <Table className={classes.table}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Curso</TableCell>
                                                        <TableCell numeric>Progreso</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {
                                                        this.props.myCourses != null && this.props.myCourses.map(course => {
                                                            return(
                                                                <TableRow className={classes.openNewLink} onClick={() => this.handleOpenCourse(course.nameEmisor, course.idLista)}>
                                                                    <TableCell component="th" scope="row">
                                                                      <Avatar alt="Remy Sharp" src={course.pathImagen} className={classes.avatar} />
                                                                      <Typography className={classes.courseName} variant="body2" gutterBottom>
                                                                        {course.nombre}
                                                                      </Typography>
                                                                    </TableCell>
                                                                    {
                                                                        course.avance == '100'
                                                                        ?
                                                                            course.urlDiploma != null
                                                                            ?
                                                                                <TableCell>
                                                                                    <IconButton color="primary" onClick={() => this.seeDegree(course.urlDiploma)} className={classes.button} aria-label="Delete">
                                                                                        <StarsIcon />
                                                                                    </IconButton>
                                                                                </TableCell>
                                                                            :
                                                                                <TableCell>
                                                                                    <IconButton color="primary" disabled className={classes.button} aria-label="Delete">
                                                                                        <StarsIcon />
                                                                                    </IconButton>
                                                                                </TableCell>
                                                                        :
                                                                        <TableCell numeric>{course.avance} %</TableCell>
                                                                    }

                                                                </TableRow>
                                                            );
                                                        })
                                                    }
                                                </TableBody>
                                            </Table>
                                        </Paper>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                {this.props.myPopulations != null && this.props.myPopulations.map(population => {
                                    return (
                                        <ExpansionPanel expanded={expanded === `${population.uuid}`} onChange={() => this.handleChangeExpansion(population.uuid, this.state.expanded)}>
                                            <ExpansionPanelSummary onClick={() => this.handleClickCoursesByPopulation(population.uuid)} expandIcon={<ExpandMoreIcon />}>
                                                <Typography className={classes.heading}>
                                                    {population.populationName}
                                                </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                {
                                                    renderCourses.length > 0
                                                    ?
                                                        <Paper className={classes.root}>
                                                            <Table className={classes.table}>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        <TableCell>Curso</TableCell>
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {
                                                                        renderCourses.map(renderCourse => {
                                                                            return(
                                                                                <TableRow className={classes.openNewLink} onClick={() => this.handleOpenCourse(renderCourse.academyShortName, renderCourse.idCourse)}>
                                                                                    <TableCell component="th" scope="row">
                                                                                      <Avatar alt="Remy Sharp" src={renderCourse.imageShort} className={classes.avatar} />
                                                                                      <Typography className={classes.courseName} variant="body2" gutterBottom>
                                                                                        {renderCourse.name}
                                                                                      </Typography>
                                                                                    </TableCell>
                                                                                </TableRow>
                                                                            );
                                                                        })
                                                                    }
                                                                </TableBody>
                                                            </Table>
                                                        </Paper>
                                                    :
                                                        <Typography className={classes.courseName} variant="body2" gutterBottom align="center">
                                                          Sin cursos asignados
                                                        </Typography>
                                                }

                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    );
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

function mapStateToProps({userInSession, myPopulations, coursesByPopulation, myCourses}) {
    return ({userInSession, myPopulations, coursesByPopulation, myCourses});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession, getMyPopulations, getCoursesByPopulation, getMyCourses})(AllMyCourses)
);

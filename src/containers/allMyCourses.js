import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import {getCoursesByPopulation} from '../actions/index';
import {getUserInSession} from '../actions/index';
import {getMyPopulations} from '../actions/index';
import {getMyCourses} from '../actions/index';
import {getBooksPaidUser} from '../actions/index';

const styles = theme => ({
    avatar: {
        margin: 7,
        float: 'left',
        border: '2px solid #E0E0E0',
    },
    button: {
        margin: theme.spacing.unit,
    },
    buttonCard: {
        width: '100%',
        position: 'relative'
    },
    buttonCardContainer: {
        width: '100%',
        margin: '10px 0',
        '&:hover': {
            background: 'transparent',
        },
        '@media (min-width: 1280px)': {
            marginTop: 0,
            marginBottom: 20,
        },
    },
    card: {
        width: '100%',
        position: 'relative',
        marginBottom: 50,
        '@media (min-width: 960px)': {
            width: '45%',
            marginRight: '5%',
            position: 'relative',
            display: 'inline-block',
            float: 'left',
        },
        '@media (min-width: 1280px)': {
            width: '45%',
            marginRight: '5%',
            position: 'relative',
            display: 'inline-block',
        },
    },
    containerBtnsCard: {
        width: '46%',
        marginLeft: '2%',
        marginRight: '2%',
        float: 'left',
    },
    courseName: {
        position: 'relative',
        top: 16,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    iconBtncard: {
        left: 5,
        position: 'absolute',
    },
    iconDescriptionBtnCard: {
        left: 40,
        position: 'absolute',
        top: 8,
    },
    imgKitContainer: {
        float: 'left',
        width: '50%',
        margin: 0,
        height: 261,
    },
    imgKit: {
        width: '100%',
        height: '100%',
    },
    kitsContainer: {
        marginTop: 50,
        paddingBottom: 50,
        overflow: 'hidden',
    },
    kitTitle: {
        position: 'absolute',
        bottom: 180,
        padding: 10,
        fontSize: 14,
        color: '#FFFFFF',
    },
    kitTitleLgCard: {
        fontSize: 24,
        color: '#4A4A4A',
        padding: 10,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: '200% 100%',
        filter: 'contrast(40%)',
    },
    myCoursesPanel: {
        marginTop: 50,
    },
    navContainer: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        position: 'relative',
        paddingTop: 75,
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
    progressCourses: {
        marginLeft: '40%',
        marginRight: '40%',
        width: '20%',
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    title: {
        fontWeight: 'bold',
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
            loadCourses: false,
        };
        this.handleChangeExpansion = this.handleChangeExpansion.bind(this);
        this.handleOpenCourse = this.handleOpenCourse.bind(this);

    }

    componentDidMount() {
        this.props.getUserInSession();
    }

    handleClickCoursesByPopulation(uuid) {
        this.setState({loadCourses: 'loading'})
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
            this.props.getBooksPaidUser();
            this.props.getMyPopulations();
            this.setState({loadPopulations: true});
        }
        if(nextProps.coursesByPopulation != null) {
            renderCourses = nextProps.coursesByPopulation[0];
        }
        return true;
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.coursesByPopulation != this.props.coursesByPopulation){
            this.setState({loadCourses: true});
        }
    }

    render() {
        const {classes, theme} = this.props;
        const { expanded } = this.state;
        let render = null;
        if (!this.props.userInSession && !this.props.kitsPaidUser) {
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
                                <Typography className={classes.title} variant="display2" gutterBottom align='left'>
                                    Mis Cursos
                                </Typography>
                                <div className={classes.kitsContainer}>
                                    {
                                        this.props.kitsPaidUser != null && this.props.kitsPaidUser.map(kit => {
                                            return(
                                                <div>
                                                    <Hidden lgUp>
                                                        <Card className={classes.card}>
                                                            <CardMedia
                                                              className={classes.media}
                                                              image={kit.urlImagen}
                                                              title={kit.academia}
                                                            />
                                                            <Typography className={classes.kitTitle} component="p">
                                                                {kit.descripcion}
                                                            </Typography>
                                                            <CardContent>
                                                                <div className={classes.buttonCardContainer}>
                                                                    <Button component="a" href={`http://www.mayahii.com/${kit.nombreCortoAcademia}`} target="_blank" variant="outlined" className={classes.buttonCard}>
                                                                        <Icon className={classes.iconBtncard}>view_list</Icon> <span className={classes.iconDescriptionBtnCard}>Academia</span>
                                                                    </Button>
                                                                </div>
                                                                <div className={classes.buttonCardContainer}>
                                                                    <Button component="a" href={kit.urlBook} target="_blank" variant="outlined" className={classes.buttonCard}>
                                                                        <Icon className={classes.iconBtncard}>chrome_reader_mode</Icon> <span className={classes.iconDescriptionBtnCard}>Libro</span>
                                                                    </Button>
                                                                </div>
                                                                <div className={classes.buttonCardContainer}>
                                                                    <Button component="a" href="http://ayuda.mayahii.com/" target="_blank" variant="outlined" className={classes.buttonCard}>
                                                                        <Icon className={classes.iconBtncard}>live_help</Icon> <span className={classes.iconDescriptionBtnCard}>Centro de ayuda</span>
                                                                    </Button>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    </Hidden>
                                                    <Hidden mdDown>
                                                        <Paper className={classes.card} elevation={1}>
                                                            <Typography className={classes.kitTitleLgCard} component="p">
                                                                {kit.descripcion}
                                                            </Typography>
                                                            <figure className={classes.imgKitContainer}>
                                                                <img className={classes.imgKit} src={kit.urlImagen} alt=""/>
                                                            </figure>
                                                            <aside className={classes.containerBtnsCard}>
                                                                <div className={classes.buttonCardContainer}>
                                                                    <Button component="a" href={`http://www.mayahii.com/${kit.nombreCortoAcademia}`} target="_blank" variant="outlined" className={classes.buttonCard}>
                                                                        <Icon className={classes.iconBtncard}>view_list</Icon> <span className={classes.iconDescriptionBtnCard}>Academia</span>
                                                                    </Button>
                                                                </div>
                                                                <div className={classes.buttonCardContainer}>
                                                                    <Button component="a" href={kit.urlBook} target="_blank" variant="outlined" className={classes.buttonCard}>
                                                                        <Icon className={classes.iconBtncard}>chrome_reader_mode</Icon> <span className={classes.iconDescriptionBtnCard}>Libro</span>
                                                                    </Button>
                                                                </div>
                                                                <div className={classes.buttonCardContainer}>
                                                                    <Button component="a" href="http://ayuda.mayahii.com/" target="_blank" variant="outlined" className={classes.buttonCard}>
                                                                        <Icon className={classes.iconBtncard}>live_help</Icon> <span className={classes.iconDescriptionBtnCard}>Centro de ayuda</span>
                                                                    </Button>
                                                                </div>
                                                            </aside>
                                                        </Paper>
                                                    </Hidden>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <Divider />
                                <ExpansionPanel className={classes.myCoursesPanel} expanded={expanded === 'myAutoCourses'} onChange={() => this.handleChangeExpansion('myAutoCourses', this.state.expanded)}>
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
                                                    this.state.loadCourses == 'loading'
                                                    ?
                                                        <CircularProgress className={classes.progressCourses} size={100}/>
                                                    :
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

function mapStateToProps({userInSession, myPopulations, coursesByPopulation, myCourses, kitsPaidUser}) {
    return ({userInSession, myPopulations, coursesByPopulation, myCourses, kitsPaidUser});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession, getMyPopulations, getCoursesByPopulation, getMyCourses, getBooksPaidUser})(AllMyCourses)
);

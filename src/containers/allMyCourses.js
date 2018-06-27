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
import Login from './login';
import MyCoursesContainer from './myCourses';
import {getCoursesByPopulation} from '../actions/index';
import {getUserInSession} from '../actions/index';
import {getMyPopulations} from '../actions/index';

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
    }
});

class AllMyCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadPopulations: false,
        };
    }

    componentDidMount() {
        this.props.getUserInSession();
    }

    handleClickCoursesByPopulation(uuid) {
        // this.props.getCoursesByPopulation(uuid);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.userInSession != null && nextProps.myPopulations == null && nextState.loadPopulations == false) {
            this.props.getMyPopulations();
            this.setState({loadPopulations: true});
        }
        return true;
    }

    render() {
        const {classes, theme} = this.props;

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
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}>
                                            Mis Cursos
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                {this.props.myPopulations != null && this.props.myPopulations.map(population => {
                                    return (
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary onClick={() => this.handleClickCoursesByPopulation(population.uuid)} expandIcon={<ExpandMoreIcon />}>
                                                <Typography className={classes.heading}>
                                                    {population.populationName}
                                                </Typography>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    );
                                })}
                            </div>



                    // render = <Paper className={classes.root}>
                    //     <Table className={classes.table}>
                    //         <TableHead>
                    //             <TableRow>
                    //                 <TableCell>Población</TableCell>
                    //             </TableRow>
                    //         </TableHead>
                    //         <TableBody>
                    //             {this.props.myPopulations != null && this.props.myPopulations.map(population => {
                    //                 return (
                    //                     <TableRow key={population.uuid}>
                    //                         <TableCell component="th" scope="row">
                    //                           <Typography className={classes.courseName} variant="body2" gutterBottom>
                    //                             {population.populationName}
                    //                           </Typography>
                    //                         </TableCell>
                    //                     </TableRow>
                    //                 );
                    //             })}
                    //         </TableBody>
                    //     </Table>
                    // </Paper>
        }

        return(
            <div className={classes.navContainer}>
                {render}
            </div>
        );
    }
}

function mapStateToProps({userInSession, myPopulations, coursesByPopulation}) {
    return ({userInSession, myPopulations, coursesByPopulation});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getUserInSession, getMyPopulations, getCoursesByPopulation})(AllMyCourses)
);

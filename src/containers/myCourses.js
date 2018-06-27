import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {getMyCourses} from '../actions/index';
import {getUserInSession} from '../actions/index';
import Login from './login';

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
    },
    table: {
        minWidth: 700,
    },
});

class MyCoursesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        this.props.getUserInSession();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.getMyCourses();
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
                    render = <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Curso</TableCell>
                                    <TableCell numeric>Progreso</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.myCourses != null && this.props.myCourses.map(course => {
                                    return (
                                        <TableRow key={course.nombre}>
                                            <TableCell component="th" scope="row">
                                              <Avatar alt="Remy Sharp" src={course.pathImagen} className={classes.avatar} />
                                              <Typography className={classes.courseName} variant="body2" gutterBottom>
                                                {course.nombre}
                                              </Typography>
                                            </TableCell>
                                            <TableCell numeric>{course.avance} %</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
        }

        return(
            <div className={classes.navContainer}>
                {render}
            </div>
        );
    }
}

function mapStateToProps({myCourses, userInSession}) {
    return ({myCourses, userInSession});
}

export default withStyles(styles)(
 connect(mapStateToProps,{getMyCourses, getUserInSession})(MyCoursesContainer)
);

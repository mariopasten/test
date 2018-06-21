import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position:'fixed',
    top:0,
    left:0,
    bottom:0,
    right:0,
    overflow: 'auto',
    fontFamily: theme.typography.fontFamily,
    background: theme.palette.background.default,
  },
});


function Container(props) {
    const { classes } = props;
    return(<div className={classes.root}>
      {props.children}
    </div>);
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);

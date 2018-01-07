import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginLeft:10,
    textDecoration:'none'
  },
});

const Header  = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit" >
          <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: 'bold',
            color: '#3f51b5',
            textDecoration:'underline',
          }}
        >Favourite Movies</NavLink>
          </Typography>
          <Button className={classes.button} color="inherit"><NavLink
          exact
          to="/battle"
          activeStyle={{
            fontWeight: 'bold',
            color: '#3f51b5',
            textDecoration:'underline',
          }}
        >Battle</NavLink></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
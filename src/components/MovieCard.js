import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { apiKey } from '../api_key';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 450,
  },
  container: {
    margin: 1,
  }
});

class MovieCard extends Component {

  constructor(props) {
    super(props);
    this.state = { topMovies : []};
 
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
    .then((response) => {
      response.json().then((data) => {
        this.setState({ topMovies : data.results}); 
      });      
    });
  }

  render() {
    const { classes } = this.props;

    return (

      <div>
        <Grid container className={classes.container} spacing={24}>
          { this.state.topMovies.map((movie) =>

            <Grid item md={3} xs={6} key={movie.id}>
              <Card className={classes.card} >
                <CardMedia
                  className={classes.media}
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.title}
                />
                <CardContent>
                  <Typography type="headline" component="h2">
                    {movie.title}
                  </Typography>
                  <Typography component="p">
                    {movie.overview}
                  </Typography>
                </CardContent>
                <CardActions>
                  <span>{movie.vote_average}</span>
                  <Button dense color="primary">
                    Share
          </Button>
                  <Button dense color="primary">
                    Learn More
          </Button>

                </CardActions>
              </Card>
            </Grid>
          )
          }
        </Grid>
      </div>
    );
  }

}


MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { apiKey } from '../api_key';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItem: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  card: {
    maxWidth: 345,
    height:500
  },
  media: {
    height: 425,
  },
  marginRight: {
    marginRight:30
  }
});

function MovieCard(props) {
  return (
    <div className={props.classes.marginRight}>
    <Card className={props.classes.card} >
    <CardContent>
    { props.isWinner ? <Icon color="primary" style={{ fontSize: 30 }}>
    star
    </Icon> : ""}
    <Typography type="headline" component="h2">
      {props.movie.title}
    </Typography>
    <Typography component="p">
    <span>{props.movie.vote_average}</span>
    </Typography>
  </CardContent>
    <CardMedia
      className={props.classes.media}
      image={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
      title={props.movie.title}
    />
  </Card>
  </div>
  )
}

class BattlePage extends Component {
    state = {
        movie1Name : "",
        movie2Name : "" ,
        loading: false,
        movie1Result: [],
        movie2Result: [],
        winner :"",
    }

    handleMovie1Change = name => event => {
        this.setState({ movie1Name : event.target.value})
    }

    handleMovie2Change = name => event => {
        this.setState({ movie2Name : event.target.value})
    }

    submitClickHandler = () => {
        let movie1Data = fetch(`https://api.themoviedb.org/3/find/${this.state.movie1Name}?api_key=${apiKey}&external_source=imdb_id`).then(
          response => {
            response.json().then(data => {
              this.setState({ movie1Result: data.movie_results[0] });
            });
          }
        );

        let movie2Data = fetch(`https://api.themoviedb.org/3/find/${this.state.movie2Name}?api_key=${apiKey}&external_source=imdb_id`).then(
          response => {
            response.json().then(data => {
              this.setState({ movie2Result: data.movie_results[0] });
            });
          }
        );

        Promise.all([movie1Data , movie2Data]).then( () => {
            if(this.state.movie1Result.vote_average > this.state.movie2Result.vote_average) {
              this.setState({winner : "Movie1"});
            } else if (this.state.movie1Result.vote_average === this.state.movie2Result.vote_average) {
              this.setState({winner : "Mie"});
            } else {
              this.setState({winner : "Movie2"});
            }
        }
        );
    }

    render() {
        const { classes } = this.props;    
        return (
            <div >
                <Header />
                <h1>Movies Battle!</h1>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                    id="movie1-name"
                    label="Enter an IMDB ID"
                    className={classes.textField}
                    value={this.state.movie1Name}
                    onChange={this.handleMovie1Change('movie1-name')}
                    margin="normal"
                    />
                    <TextField
                    id="movie2-name"
                    label="Enter an IMDB ID"
                    className={classes.textField}
                    value={this.state.movie2Name}
                    onChange={this.handleMovie2Change('movie2-name')}
                    margin="normal"
                    />
              
                </form>
                <Button onClick={this.submitClickHandler} raised color="primary" className={classes.button}>
                Submit
                </Button>   

                { this.state.winner ?          
                  <div>
                  <div>
                  <h3 > 
                  {this.state.winner === "Movie1" || this.state.winner === "Movie2" ? `The winner is ${this.state.winner} !` : 'Its a Tie !'}
                  </h3>
                  </div>
                  <div className={classes.container}>
                  <MovieCard classes = {classes} isWinner = {this.state.winner === "Movie1" ?  true : false } result={this.state.winner} movie={this.state.movie1Result}/>
                  <MovieCard classes = {classes} isWinner = {this.state.winner === "Movie2" ?  true : false } movie={this.state.movie2Result} result={this.state.winner}/>  
                  </div>
                  </div>: "" }         
            </div>
        );
    }
}

BattlePage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  movie:  PropTypes.any.isRequired,
  result: PropTypes.string.isRequired,
  isWinner: PropTypes.bool.isRequired
}
export default withStyles(styles)(BattlePage);
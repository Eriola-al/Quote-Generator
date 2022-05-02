import React, { Component } from 'react';
import './App.css';
import getQuotes from './getQuotes';

import { Button, Card, CardContent, Typography } from '@material-ui/core';

class App extends Component {
  state = {
    quote: '',
    quoter: '',
  }

  handleClick = () => {
    //promise function to extract data from getData function
    getQuotes().then((data) => {
      //After we get the data we need to parse it to manipulate it, but Axios offers that out of the box

      // JSON.stringify() converts an object to JSON
      // JSON.parse() converts JSON to an object

      //using setState build in method to mutate the data instead of interfering directy into the state
      this.setState({
        quote: data.quote, 
        quoter: data.quoter,
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Typography variant="h2">Random Quote Generator</Typography>
        <Card className='card'>
          <CardContent>
            <Typography variant="h5">{this.state.quote}</Typography>
            <Typography className="margin-top" color="textSecondary">{this.state.quoter}</Typography>
            <hr />
            <Button className="margin-top" color="primary" variant="outlined" onClick={() => this.handleClick()}>
              Click for Quotes
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;

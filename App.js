import React from 'react';
import ListItem from './ListItem';
import Button from './Button';
import RestOfList from './RestOfList';

class App extends React.Component {

  render() {
    return (
      <div className="ui raised very padded text container segment">
        <div className="ui teal header">The Grocery List</div>
        <div className="ui header">Hard Coded Items</div>
        <ListItem food="Tomato" />
        <ListItem food="Onion" />
        <ListItem food="Strawberries" />
        <ListItem food="Off Brand Ramen" />
        <br />
        <RestOfList />
        <br />
        <Button />
      </div >
    );
  }
}

export default App;

import React, { Component } from 'react';
import { animals } from './animals';
import AnimalsCard from "./AnimalsCard";
import { Switch, Route } from 'react-router-dom';
import AnimalSingle from './AnimalSingle';

class AnimalsList extends Component {
  state = {
    searchInput: "",
  }

  searchInputHandler = (event) => {
    this.setState({
      searchInput:event.target.value,
    });
  };

render() {
  const animalFilter = animals.filter(animal => {
    return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
  });

  const animalslisting = animalFilter.map((item) => (
    <AnimalsCard key={item.name} name={item.name} />
    ));

    return (
    <div className="animalsList">
      <Switch>
        <Route exact path={this.props.match.path}>
          <div className="searchInput">
          <input 
          type="text" 
          placeholder="Search..."
          onChange={this.searchInputHandler}/>
          </div>
        {animalslisting}
        </Route>
        <Route path={`${this.props.match.path}/:animal`}>
          <AnimalSingle />
        </Route>
      </Switch>
    </div>
    );
  };
};

export default AnimalsList;
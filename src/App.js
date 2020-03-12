import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Title from "./components/Title/Title";
import SearchForm from "./components/SearchForm/SearchForm";

class App extends Component {
  state = { results: [] };

  resultsHandler = results => {
    this.setState({ results });
  };

  renderResults() {
    const { results } = this.state;
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>;
    });
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <br />
        <div className="SearchForm-Wrapper">
          <SearchForm onResults={this.resultsHandler} />
        </div>
        {this.state.results.length === 0 ? (
          <p>No results</p>
        ) : (
          this.renderResults()
        )}
      </div>
    );
  }
}

export default App;

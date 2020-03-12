import React, { Component } from "react";

const API_KEY = "3a8ed301";

class searchForm extends Component {
  state = {
    inputMovie: ""
  };

  changeNameHandler = event => {
    this.setState({ inputMovie: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    const { inputMovie } = this.state;
    fetch(
      // `http://www.omdbapi.com/?apikey=${API_KEY}&t=${inputMovie}`
      `http://www.omdbapi.com/?s=${inputMovie}&apikey=${API_KEY}`
    )
      .then(res => res.json())
      .then(results => {
        const { Search, totalResults } = results;
        console.log(Search, totalResults);
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Find movies..."
              onChange={this.changeNameHandler}
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}

export default searchForm;

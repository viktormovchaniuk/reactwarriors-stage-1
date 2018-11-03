import React, { Component } from "react";
import { moviesData } from "../moviesData";
import AppHeader from "./AppHeader";
import MovieList from "./MovieList";
import MovieListWillWatch from "./MovieListWillWatch";

import "./App.css";
import "../index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: moviesData,
      MovieListWillWatch: []
    };
  }

  addItemWillWatch = item => {
    this.setState(prevState => ({
      MovieListWillWatch: [...prevState.MovieListWillWatch, item]
    }));
  };

  removeItemWillWatch = item => {
    this.setState(prevState => ({
      MovieListWillWatch: prevState.MovieListWillWatch.filter(
        i => i.id !== item.id
      )
    }));
  };

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-9">
              <MovieList
                addItemWillWatch={this.addItemWillWatch}
                removeItemWillWatch={this.removeItemWillWatch}
                data={this.state.data}
              />
            </div>
            <div className="col-12 col-lg-3">
              <MovieListWillWatch list={this.state.MovieListWillWatch} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

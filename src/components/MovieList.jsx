import React, { Component } from "react";
import MovieItem from "./MovieItem";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const list = this.props.data;
    list.sort((a, b) => b.vote_average - a.vote_average);
    return (
      <div className="row">
        {list.length === 0 && (
          <span className="badge badge-warning">
            <h3>"There are no item to show now"</h3>
          </span>
        )}
        {list.map(item => (
          <MovieItem
            addItemWillWatch={this.props.addItemWillWatch}
            removeItemWillWatch={this.props.removeItemWillWatch}
            item={item}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;

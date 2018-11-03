import React, { Component } from "react";

class MoviesListWillWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let watchList = this.props.list;
    return (
      <div>
        <div className="text-center">
          <h6>Will Watch: {watchList.length} movies</h6>
        </div>
        <ul className="list-group mb-3">
          {watchList.map(item => (
            <li className="list-group-item" key={item.id}>
              <span>{item.title}</span>
              <span className="float-right">{item.rating}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesListWillWatch;

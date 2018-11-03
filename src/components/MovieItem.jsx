import React, { Component } from "react";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      willWatch: false
    };
  }

  handleChangeWillWatch = () => {
    const { addItemWillWatch, removeItemWillWatch, item } = this.props;

    this.state.willWatch ? removeItemWillWatch(item) : addItemWillWatch(item);
    this.setState(prevState => ({
      willWatch: !prevState.willWatch
    }));
  };

  render() {
    const { item } = this.props;
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div className="card">
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={this.props.item.title}
          />
          <div className="card-body">
            <h6 className="card-title mb-0">{item.title}</h6>
          </div>
          <footer className="card-footer d-flex justify-content-between align-items-center">
            <p className="card-text mb-0">{item.vote_average}</p>
            <button
              type="button"
              onClick={this.handleChangeWillWatch}
              className={this.getBtnClasses()}
            >
              Will Watch
            </button>
          </footer>
        </div>
      </div>
    );
  }

  getBtnClasses() {
    let classes = "btn btn-sm ";
    classes += this.state.willWatch ? "btn-success" : "btn-primary";
    return classes;
  }
}

export default MovieItem;

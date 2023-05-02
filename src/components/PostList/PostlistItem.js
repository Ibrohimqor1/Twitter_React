import React from "react";
import "./PostList.css";
export default class PostlistItem extends React.Component {
  render() {
    const {
      label,
      onDelete,
      onToogleimportant,
      onToogleLike,
      important,
      like,
    } = this.props;

    let classNames = " app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToogleLike}>
          {label}
        </span>
        <div className="d-flex  justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToogleimportant}
          >
            <i className="fas fa-star"></i>
          </button>
          <button onClick={onDelete} type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash"></i>
          </button>
          <button type="button" className="btn-heart btn-sm">
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    );
  }
}

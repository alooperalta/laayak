import React, { Component } from "react";

class Details extends Component {
  state = {};
  render() {
    return (
      <div
        className="my-card-details shadow-hover p-2"
        style={{ width: "18rem" }}
      >
        {this.getDetails()}
        <button
          className="btn btn-warning mb-2 d-block"
          style={{ width: "100%" }}
          onClick={this.props.onEdit}
        >
          Update Details{" "}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-pencil-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
            />
          </svg>
        </button>
      </div>
    );
  }
  getDetails = () => {
    const { branch, college, course, sem, crName } = this.props.details;
    return (
      <div>
        <p>
          Branch: <strong>{branch}</strong>
        </p>
        <p>
          College: <strong>{college}</strong>
        </p>
        <p>
          Course: <strong>{course}</strong>
        </p>
        <p>
          Semester: <strong>{sem}</strong>
        </p>
        <p>
          Class Representative: <strong>{crName}</strong>
        </p>
      </div>
    );
  };
}

export default Details;

import React, { Component } from "react";

class Subject extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="my-card-details shadow-hover text-center"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{this.props.subject.subject}</h5>
            <p className="card-text">
              Subject Code: <strong>{this.props.subject.subjectCode}</strong>
              <br />
              Teacher: <strong>{this.props.subject.teacher}</strong>
            </p>
            <a href="#" className="btn btn-sm btn-warning mr-2">
              Edit{" "}
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
            </a>
            <a
              href="#"
              className="btn btn-sm btn-danger"
              onClick={() =>
                this.props.onDelete(this.props.subject.subjectCode)
              }
            >
              Delete
              <svg
                width="1.3em"
                height="1.3em"
                viewBox="0 0 16 16"
                className="bi bi-x"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Subject;

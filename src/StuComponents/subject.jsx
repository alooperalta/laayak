import React, { Component } from "react";

class Subject extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="card shadow-hover my-card-details subject-card"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">{this.props.subject.subject}</h5>
            <p className="card-text">
              Subject Code: <strong>{this.props.subject.subjectCode}</strong>
              <br />
              Teacher: <strong>{this.props.subject.teacher}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Subject;

import React, { Component } from "react";

class Lecture extends Component {
  state = {};
  render() {
    return (
      <div className="my-card-details shadow-hover">{this.renderLecture()}</div>
    );
  }

  renderLecture = () => {
    const {
      subject,
      subjectCode,
      teacher,
      startTime,
      endTime,
      link,
      text,
      group,
    } = this.props.lecture;

    return (
      <div className="container d-flex flex-column text-left">
        <p>
          Subject: <strong>{subject}</strong>
        </p>
        <p>
          Subject Code: <strong>{subjectCode}</strong>
        </p>
        <p>
          Teacher: <strong>{teacher}</strong>
        </p>
        <p>
          Start Time: <strong>{String(startTime.toDate())}</strong>
        </p>
        <p>
          endTime: <strong>{String(endTime.toDate())}</strong>
        </p>
        <p>
          Class Link: <strong>{link}</strong>
        </p>
        <p>
          Group: <strong>{group ? group : "Everyone"}</strong>
        </p>
        <p>
          Description: <strong>{text}</strong>
        </p>
        <button className="btn btn-warning mb-2">Update Details 🖋</button>
        <button
          className="btn btn-danger mb-2"
          onClick={() => this.props.onDelete(link, startTime)}
        >
          Delete ❌
        </button>
      </div>
    );
  };
}

export default Lecture;

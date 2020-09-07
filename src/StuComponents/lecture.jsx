import React, { Component } from "react";

class Lecture extends Component {
  state = {};
  render() {
    return (
      <div className="shadow-hover my-card-details p-2">
        {this.renderLecture()}
      </div>
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
    } = this.props.lecture;

    return (
      <div className="text-left">
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
          Description: <strong>{text}</strong>
        </p>
        <br />
        <a href={link} className="btn btn-sm btn-primary m-2 p-1">
          Join now
        </a>
      </div>
    );
  };
}

export default Lecture;

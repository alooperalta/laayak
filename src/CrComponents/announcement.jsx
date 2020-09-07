import React, { Component } from "react";

class Announcement extends Component {
  state = {};

  render() {
    return (
      <div className={this.getClass()} style={{ width: "100%" }}>
        {this.displayUpdate()}
        {this.createButtons()}
      </div>
    );
  }

  displayUpdate = () => {
    const { type } = this.props.announcement;
    switch (type) {
      case "announcement":
        return this.displayAnnouncement();
      case "poll":
        return this.displayPoll();
      case "link":
        return this.displayLink();
    }
  };

  displayAnnouncement = () => {
    const { dateAndTime, text } = this.props.announcement;
    let dateTime = String(dateAndTime.toDate());
    return (
      <div>
        <p>
          Date Time: <strong>{dateTime}</strong>
        </p>
        <p>
          Announcement: <strong>{text}</strong>
        </p>
      </div>
    );
  };

  displayLink = () => {
    const { dateAndTime, text, link } = this.props.announcement;
    let dateTime = String(dateAndTime.toDate());
    return (
      <div>
        <p>
          Date Time: <strong>{dateTime}</strong>
        </p>
        <p>
          Link:{" "}
          <span className="alert-link">
            <strong>{link}</strong>
          </span>
        </p>
        <p>
          About this Link: <strong>{text}</strong>
        </p>
      </div>
    );
  };

  displayPoll = () => {
    const {
      dateAndTime,
      text,
      yesCount,
      yesOption,
      noCount,
      noOption,
    } = this.props.announcement;
    const yesVotePercent = (yesCount * 100) / (noCount + yesCount);
    let dateTime = String(dateAndTime.toDate());
    return (
      <div>
        <p>
          Date Time: <strong>{dateTime}</strong>
        </p>
        <p>
          Poll: <strong>{text}</strong>
        </p>
        <p>
          Option 1: {yesOption} <br /> Votes: <strong>{yesCount}</strong>{" "}
          Percentage: <strong>{yesVotePercent}</strong>%
        </p>
        <p>
          Option 2: {noOption} <br /> Votes: <strong>{noCount}</strong>{" "}
          Percentage: <strong>{100 - yesVotePercent}%</strong>
        </p>
      </div>
    );
  };

  getClass = () => {
    const { type } = this.props.announcement;
    let cls = "col-md-6 m-2 ";
    switch (type) {
      case "announcement":
        cls = cls + "alert-warning announcement-card";
        break;
      case "poll":
        cls = cls + "alert-info poll-card";
        break;
      case "link":
        cls = cls + "alert-danger link-card";
        break;
    }
    return cls;
  };

  createButtons = () => {
    return (
      <div className="d-inline container">
        <button className="btn btn-warning btn-sm m-1">Edit🖊</button>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() =>
            this.props.onDelete(this.props.announcement.dateAndTime)
          }
        >
          Delete❌
        </button>
      </div>
    );
  };
}

export default Announcement;

// type: announcement , polls, links

import React, { Component } from "react";

class AddSubject extends Component {
  state = {
    show: false,
    subject: "",
    code: "",
    teacher: "",
  };

  // toggle show state
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  // modal show/hide class
  showHideClassName = () => (this.state.show ? "" : "d-none");

  styles = {
    position: "fixed",
    display: "block",
    background: "pink",
    color: "black",
    width: "60%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1,
    boxShadow: "2px 2px 10px 10px rgba(255, 31, 255, 0.226)",
  };

  render() {
    return (
      <div
        className="my-card-details shadow-hover text-center"
        style={{ width: "18rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">Add Subject</h5>
          <button className="btn btn-info" onClick={this.showModal}>
            <svg
              width="5em"
              height="5em"
              viewBox="0 0 16 16"
              className="bi bi-plus"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </button>

          <div className={this.showHideClassName()}>
            <section className="" style={this.styles}>
              <h3 className="mt-2">Add Subject Details:</h3>
              <form onSubmit={this.callAddSubject}>{this.getForm()}</form>
              <button className="btn-info btn mb-2" onClick={this.hideModal}>
                Close
              </button>
            </section>
          </div>
        </div>
      </div>
    );
  }

  getForm = () => {
    return (
      <div className="">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Subject Name:</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="subject-name"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Subject Code:</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="subject-code"
              name="code"
              value={this.state.code}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Subject Teacher:</label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="subject-teacher"
              name="teacher"
              value={this.state.teacher}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button className="btn btn-success m-2">Add</button>
      </div>
    );
  };

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  callAddSubject = (e) => {
    e.preventDefault(); // preventing reload
    const subj = {
      subject: this.state.subject,
      subjectCode: this.state.code,
      teacher: this.state.teacher,
    };
    this.setState({ show: false });
    this.props.addSubject(subj);
    this.setState({
      subject: "",
      code: "",
      teacher: "",
    });
  };
}

export default AddSubject;

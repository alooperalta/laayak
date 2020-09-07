import React, { Component } from "react";
import Details from "./details";
import Subject from "./subject";
import Lecture from "./lecture";
import Announcement from "./announcement";
import firebase from "../firebase";
import "./assets/css/mainPage.css";

// reference to firestore
const db = firebase.firestore();

class MainPage extends Component {
  collRef = db.collection("classes");
  docRef = this.collRef.doc(this.props.studentCode);
  collRefLec = this.docRef.collection("lectures");
  docRefLec = this.collRefLec.doc("lecturesToday");
  collRefUp = this.docRef.collection("updates");
  docRefUp = this.collRefUp.doc("announcements");
  state = {
    subjects: [],
    details: [],
    lecturesToday: [],
    announcements: [],
  };

  // extracting data from db
  componentDidMount() {
    this.docRef.onSnapshot((doc) => {
      this.setState({
        subjects: doc.data().subjects.map((subject) => {
          return { ...subject };
        }),
        details: doc.data().details,
      });
    });
    this.docRefLec.onSnapshot((doc) => {
      this.setState({
        lecturesToday: doc.data().lectures.map((lecture) => {
          return { ...lecture };
        }),
      });
    });
    this.docRefUp.onSnapshot((doc) => {
      this.setState({
        announcements: doc.data().announcements.map((announcement) => {
          return { ...announcement };
        }),
      });
      this.sortAnnouncements();
    });
  }

  render() {
    return (
      // heading
      <div className="container-fluid">
        <h1 className="mainPageHeading">Welcome!</h1>

        {/* semester details */}
        <h2 className="subHeading">Semester Details: </h2>

        <hr className="mb-4" style={{ margin: "0 auto", width: "18rem" }} />
        <Details details={this.state.details} />

        {/* list of subjects */}
        <h2 className="subHeading">Subjects You study:</h2>

        <hr className="mb-4" style={{ margin: "0 auto", width: "40%" }} />

        <div className="my-flex-container">
          {this.state.subjects.map((subject) => (
            <Subject subject={subject} key={subject.subjectCode} />
          ))}
        </div>

        {/* lectures on the day */}
        <h2 className="subHeading">Lectures Today:</h2>

        <hr className="mb-4" style={{ margin: "0 auto", width: "40%" }} />

        <div className="my-flex-container">
          {this.state.lecturesToday.map((lecture) => (
            <Lecture lecture={lecture} key={lecture.startTime} />
          ))}
        </div>

        {/* Announcement/polls/links */}
        <div className="d-inline container-fluid">
          <h2 className="subHeading">Mitron! Announcement Suno</h2>
          <hr className="mb-4" style={{ margin: "0 auto", width: "40%" }} />
        </div>

        <div className="m-4 ">
          {this.state.announcements.map((announcement) => (
            <div className="my-flex-container">
              <Announcement
                announcement={announcement}
                key={announcement.dateAndTime}
                id={announcement.dateAndTime}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  // Sort Announcements
  sortAnnouncements = () => {
    let temp = this.state.announcements;
    for (let i = 0; i < temp.length; i++) {
      for (let j = i + 1; j < temp.length; j++) {
        if (temp[i].dateAndTime < temp[j].dateAndTime) {
          let x = temp[i];
          temp[i] = temp[j];
          temp[j] = x;
        }
      }
    }
    this.setState({
      announcements: temp,
    });
  };
}

export default MainPage;

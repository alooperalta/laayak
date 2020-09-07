import React, { Component } from "react";
import Details from "./details";
import Subject from "./subject";
import Lecture from "./lecture";
import Announcement from "./announcement";
import AddSubject from "./addSubject";
import AddLecture from "./addLecture";
import AddAnnouncement from "./addAnnouncement";
import AddPoll from "./addPoll";
import AddLink from "./addLink";
import firebase from "../firebase";

// reference to firestore

let db = firebase.firestore();

class MainPage extends Component {
  state = {
    subjects: [],
    details: [],
    lecturesToday: [],
    announcements: [],
    user: firebase.auth().currentUser,
    crCode: this.props.CrCode,
  };

  collRef = db.collection("classes");
  docRef = this.collRef.doc(this.state.crCode);
  collRefLec = this.docRef.collection("lectures");
  docRefLec = this.collRefLec.doc("lecturesToday");
  collRefUp = this.docRef.collection("updates");
  docRefUp = this.collRefUp.doc("announcements");

  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("signed out");
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
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
        <h1 className="mt-3 mainPageHeading">CR Control Page!</h1>
        {/* signout btn */}
        <button className="btn btn-danger" onClick={this.handleSignOut}>
          Sign Out
        </button>

        {/* semester details */}
        <h2 className="subHeading">Semester Details: </h2>
        <hr className="mb-4" style={{ margin: "0 auto", width: "18rem" }} />

        <Details details={this.state.details} onEdit={this.handleDetailsEdit} />

        {/* list of subjects */}
        <h2 className="subHeading">Subjects You study:</h2>
        <hr className="mb-4" style={{ margin: "0 auto", width: "18rem" }} />

        <div className="my-flex-container">
          {this.state.subjects.map((subject) => (
            <Subject
              subject={subject}
              key={subject.subjectCode}
              onDelete={this.deleteSubject}
            />
          ))}

          {/* button to add a new subject */}
          <AddSubject addSubject={this.addSubject} />
        </div>

        {/* lectures on the day */}
        <h2 className="subHeading">Lectures Today:</h2>
        <hr className="mb-4" style={{ margin: "0 auto", width: "18rem" }} />

        <AddLecture addLecture={this.addLecture} />

        <div className="my-flex-container">
          {this.state.lecturesToday.map((lecture) => (
            <Lecture
              lecture={lecture}
              key={lecture.startTime}
              onDelete={this.deleteLecture}
            />
          ))}
        </div>

        {/* Announcement/polls/links */}
        <div className="d-inline container-fluid">
          <h2 className="subHeading">Mitron! Announcement Suno</h2>
          <hr className="mb-4" style={{ margin: "0 auto", width: "18rem" }} />

          <div className="d-flex justify-content-center">
            <AddAnnouncement AddAnnouncement={this.AddAnnouncement} />
            <AddPoll addPoll={this.AddAnnouncement} />
            <AddLink addLink={this.AddAnnouncement} />
          </div>
        </div>
        <div className="my-flex-container">
          {this.state.announcements.map((announcement) => (
            <Announcement
              announcement={announcement}
              key={announcement.dateAndTime}
              id={announcement.dateAndTime}
              onDelete={this.deleteAnnouncement}
            />
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

  // All add functions
  addSubject = (newSubject) => {
    const finSubjects = [...this.state.subjects, newSubject];

    this.docRef.update({
      subjects: finSubjects,
    });
  };

  addLecture = (newLecture) => {
    const finLectures = [...this.state.lecturesToday, newLecture];
    console.log(finLectures);
    this.docRefLec.update({
      lectures: finLectures,
    });
  };

  AddAnnouncement = (newAnnouncement) => {
    const finAnnouncements = [...this.state.announcements, newAnnouncement];
    this.docRefUp.update({
      announcements: finAnnouncements,
    });
  };

  // All update/edit functions
  handleDetailsEdit = () => {};

  // All delete functions
  deleteAnnouncement = (dateAndTime) => {
    this.docRefUp.update({
      announcements: this.state.announcements.filter(
        (a) => a.dateAndTime != dateAndTime
      ),
    });
  };

  deleteSubject = (subjectCode) => {
    this.docRef.update({
      subjects: this.state.subjects.filter((s) => s.subjectCode != subjectCode),
    });
  };

  deleteLecture = (link, startTime) => {
    this.docRefLec.update({
      lectures: this.state.lecturesToday.filter(
        (l) => l.link != link && l.startTime != startTime
      ),
    });
  };
}

export default MainPage;

// TODO:
// logout btn
// cards of subjects
// lectures today + // announcements
// cr profile with sem and batch details

// passwordCSE@laayak

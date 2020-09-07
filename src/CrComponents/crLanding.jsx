import React, { Component } from "react";
import firebase from "../firebase";
import CrLogin from "./crLogin";
import MainPage from "./mainPage";

const db = firebase.firestore();

class CrLanding extends Component {
  state = {
    user: null,
    doc: "",
  };

  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const docRef = db.collection("students").doc("listOfCRs");
        docRef.get().then((doc) => {
          const loc = doc.data().listOfCRs;
          const email = user.email;
          this.setState({
            doc: loc[email],
          });
        });
      }
      this.setState({ user });
    });
  };

  componentDidMount() {
    this.authListener();
  }

  render() {
    return this.state.user && this.state.doc ? (
      <MainPage CrCode={this.state.doc} />
    ) : (
      <CrLogin />
    );
  }
}
export default CrLanding;

// CrEmail={this.state.doc}

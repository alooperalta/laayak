import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import StuLanding from "./StuComponents/stuLanding";
import CrLanding from "./CrComponents/crLanding";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/student" component={StuLanding} />
          <Route path="/cr" component={CrLanding} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

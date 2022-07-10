import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;

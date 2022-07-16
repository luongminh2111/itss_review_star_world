import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreateReview from "./components/CreateReview";
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/review/writereview" component={CreateReview} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;

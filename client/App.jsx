import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home.jsx";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </Router>
  );
};

export default App;

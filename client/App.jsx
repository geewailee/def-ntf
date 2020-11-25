import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Registration from "./components/Registration.jsx";
import CharactersPage from "./components/characters/CharactersPage.jsx";
import EpisodesPage from "./components/Episodes/EpisodesPage.jsx";
import { MyProvider } from "./context/userContext.jsx";
const App = () => {
  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/characters'>
            <CharactersPage />
          </Route>
          <Route exact path='/episodes'>
            <EpisodesPage />
          </Route>
          <Route exact path='/registration'>
            <Registration />
          </Route>
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </Router>
    </MyProvider>
  );
};

export default App;

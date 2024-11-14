import React from "react";
import Signup from './Login/Login'
import Home from './Home'
import translate from './backend'
import BookC1 from "./pages/bookc1";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={BookC1} />
        <Route path="/english" exact component={BookC1} />
      </Switch>
    </Router>
  );
}

export default App;

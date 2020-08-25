import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/User'
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/emenu/login" exect component={LoginPage} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;

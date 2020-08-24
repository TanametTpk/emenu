import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/notfound" exact component={NotFound} />
    </Router>
  );
}

export default App;

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
        <Route path="/" exact component={HomePage} />
        <Route path="/emenu/login" exect component={LoginPage} />
    </Router>
  );
}

export default App;

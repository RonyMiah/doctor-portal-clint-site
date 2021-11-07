
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AppointmentPage from './Pages/AppointmentPage/AppointmentPage/AppointmentPage';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/appointment">
          <AppointmentPage></AppointmentPage>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;

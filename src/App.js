
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
import AuthProvider from './Contex/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Deshbord from './Pages/Deshbord/Deshbord/Deshbord';




function App() {
  return (
    <div className="App">
      <AuthProvider>
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
          <PrivateRoute exact path="/appointment">
          <AppointmentPage></AppointmentPage>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
          <Deshbord></Deshbord>
          </PrivateRoute>
        </Switch>
     </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

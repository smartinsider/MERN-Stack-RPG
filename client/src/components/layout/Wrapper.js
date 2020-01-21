import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser } from "../../actions/authActions";

import "./Wrapper.css";

import PrivateRoute from "../private-route/PrivateRoute";
import Navbar from "../layout/Navbar";
import Landing from "../layout/Landing";
import Register from "../auth/Register";
import Login from "../auth/Login";
import HUB from "../HUB/HUB";
import CelestialTower from "../Dungeons/CelestialTower";
import CombatController from "../Combat/CombatController";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";

class Wrapper extends Component {
  state = {
    characterUploaded: false
  };

  componentDidMount() {
    const { user } = this.props.auth;
    //console.log(user);
    if (!this.checkObj(user.character)) {
      console.log("Getting User");
      getUser(user);
    }
  }

  componentDidUpdate() {
    const { user } = this.props.auth;
    //console.log(user);
    if (!this.checkObj(user.character)) {
      console.log("Getting User");
      getUser(user);
    }
  }

  checkObj = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) return true;
    }
    return false;
  };

  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <Navbar />
          </div>
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/emailreset" component={ForgotPassword} />
            <Route path="/reset/:token" component={ResetPassword} />
            <Switch>
              <PrivateRoute exact path="/HUB" component={HUB} />
              <PrivateRoute
                exact
                path="/HUB/CelestialTower"
                component={CelestialTower}
              />
              <PrivateRoute
                exact
                path="/HUB/CelestialTower/Combat"
                component={CombatController}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

Wrapper.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Wrapper);

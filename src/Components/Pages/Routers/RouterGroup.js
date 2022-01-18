import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavbarMenu from "../LandingPage/NavbarMenu";
import Home from "../LandingPage/Home";
import Exam from "../LandingPage/Exam";
import News from "../LandingPage/News";
import Registration from "../LandingPage/Registration";
import Footer from "../LandingPage/Footer";
export default function RouterGroup() {
  return (
    <div>
      <Router>
        <NavbarMenu />

        <Route exact path="/" exact component={Home} />
        <Route path="/exam" component={Exam} />
        <Route path="/news" component={News} />
        <Route path="/authentication" component={Registration} />

      </Router>
      <Footer/>
    </div>
  );
}

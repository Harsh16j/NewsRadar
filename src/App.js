import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  c = "Harsh";
  render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    );
  }
}

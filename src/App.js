import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./component/header/Header";
import Featured from "./component/featured";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;

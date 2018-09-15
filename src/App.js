import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./component/header/Header";
import Featured from "./component/featured";
import VenueInfo from "./component/venueInfo";
import Highlights from "./component/highlights";
import Pricing from "./component/pricing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
      </div>
    );
  }
}

export default App;

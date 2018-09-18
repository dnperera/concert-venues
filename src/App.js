import React, { Component } from "react";
import { Element } from "react-scroll";
import "./resources/styles.css";
import Header from "./component/header/Header";
import Featured from "./component/featured";
import VenueInfo from "./component/venueInfo";
import Highlights from "./component/highlights";
import Pricing from "./component/pricing";
import Location from "./component/location";
import Footer from "./component/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="startTime">
          <Featured />
        </Element>

        <Element name="venue">
          <VenueInfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  displayPercentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({ discountStart: this.state.discountStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.displayPercentage();
    }, 50);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.displayPercentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 30th of October</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                quaerat itaque similique sequi quos commodi, magnam nobis
                officia amet, blanditiis autem distinctio saepe hic optio rerum.
                Sequi corporis veritatis doloribus?
              </p>
              <div>Button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Discount;

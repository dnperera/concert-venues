import React, { Component } from "react";
import Button from "../utils/Button";
import ticketIcon from "../../resources/images/icons/ticket.png";
import Zoom from "react-reveal/Zoom";
class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, sunt earum iste numquam voluptatum",
      "rem dolores quidem fugiat cumque amet neque debitis iure aliquid quos dolorem ratione laudantium assumenda animi!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad reiciendis adipisci quam aliquam facilis repudiandae voluptatem unde"
    ],
    linkto: [
      "https://www.stubhub.com/balcony",
      "https://www.stubhub.com/medium",
      "https://www.stubhub.com/star"
    ],
    delay: [800, 0, 800]
  };

  showPricing = () =>
    this.state.prices.map((price, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${price}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <Button
                img={ticketIcon}
                size="large"
                alt="Purchase ticket now"
                name="Buy Now"
                bck="#1690F0"
                color="#fff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
        </div>
        <div className="pricing_wrapper">{this.showPricing()}</div>
      </div>
    );
  }
}
export default Pricing;

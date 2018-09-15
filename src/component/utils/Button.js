import React from "react";
import UIButton from "@material-ui/core/Button";
const Button = props => {
  return (
    <UIButton
      href={props.link ? props.link : "#"}
      variant="contained"
      size={props.size}
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img src={props.img} alt={props.alt} className="iconImage" />
      {props.name}
    </UIButton>
  );
};
export default Button;

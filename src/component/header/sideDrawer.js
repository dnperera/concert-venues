import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faBuilding,
  faDrum,
  faDollarSign,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

const SideDrawer = props => {
  const scrollToSection = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 150,
      smooth: true,
      offset: -160
    });
    props.onClose(false);
  };

  const navIcon = {
    color: "#1690F0",
    padding: "10px",
    fontSize: "25px"
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToSection("startTime")}>
          <FontAwesomeIcon icon={faCalendarAlt} style={navIcon} />
          Event starts in
        </ListItem>
        <ListItem button onClick={() => scrollToSection("venue")}>
          <FontAwesomeIcon icon={faBuilding} style={navIcon} />
          Venue Info
        </ListItem>
        <ListItem button onClick={() => scrollToSection("highlights")}>
          <FontAwesomeIcon icon={faDrum} style={navIcon} />
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToSection("pricing")}>
          <FontAwesomeIcon icon={faDollarSign} style={navIcon} />
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToSection("location")}>
          <FontAwesomeIcon icon={faMapMarker} style={navIcon} />
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};
export default SideDrawer;

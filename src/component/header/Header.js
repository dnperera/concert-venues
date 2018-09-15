import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollEvent);
  }

  handleScrollEvent = () => {
    if (window.scrollY > 0) {
      this.setState({ headerShow: true });
    } else {
      this.setState({ headerShow: false });
    }
  };
  //Remove the event listner when the component unmount. if you do not need the header effect to transfer to next page
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollEvent);
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue ">
              The Concert Venues
            </div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconButton
            area-lable="Menu"
            color="inherit"
            onClick={() => this.setState({ drawerOpen: true })}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.setState({ drawerOpen: value })}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

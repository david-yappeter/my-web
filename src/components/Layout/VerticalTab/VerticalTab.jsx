import React, { Fragment } from "react";
import { AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import { useWindowSize } from "./../../MainPage/MainPage";

const VerticalTab = (props) => {
  const { value, handleAreaClick } = props;
  const mobileView = useWindowSize();
  const isMobile = mobileView[0] < 960;
  const isSmallerMobile = mobileView[0] < 480;
  return (
    <Fragment>
      {!isMobile && (
        <AppBar
          position={window.pageYOffset < 900 ? "absolute" : "fixed"}
          style={{
            float: "right",
            width: "200px",
            marginRight: "125px",
            top: window.pageYOffset < 900 ? "1000px" : "50px",
          }}>
          <Tabs
            value={value}
            onChange={(e, newVal) => handleAreaClick(newVal)}
            orientation="vertical"
            aria-label="simple tabs example">
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
          </Tabs>
        </AppBar>
      )}
    </Fragment>
  );
};

export default VerticalTab;

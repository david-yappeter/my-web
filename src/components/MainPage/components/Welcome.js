import React, { Fragment } from "react";
import "./../MainPage.css";

import { Link as LinkScroll } from "react-scroll";
import { Button, Typography } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import { PlaceHolder } from "./index";
import { useWindowSize } from "../MainPage";

const Welcome = (props) => {
  const { open, open2, handleChange } = props;
  const windowSize = useWindowSize();
  const isMobile = windowSize[0] < 960;

  const Welcome1 = () => (
    <Typography
      variant="h4"
      style={{
        textAlign: "center",
        fontFamily: "inherit",
        fontSize: isMobile ? "26px" : null,
      }}>
      Welcome To My Simple Website
    </Typography>
  );

  const Welcome2 = () => (
    <Fragment key="welcome_2">
      <Typography
        variant="h6"
        style={{
          padding: isMobile ? null : "0 20vw 0",
          fontFamily: "inherit",
          fontSize: isMobile ? "20px" : null,
        }}>
        I don't have much to fill right now, but as time goes by I will be
        adding more things to this site But Let's get started by my profile
      </Typography>

      <Button
        style={{
          marginTop: "30px",
          backgroundColor: "#000000",
          color: "#ffffff",
          textTransform: "initial",
        }}>
        <LinkScroll
          activeClass="active"
          to="profile"
          spy={true}
          smooth={true}
          offset={-20}
          duration={600}>
          <Typography
            variant="h5"
            style={{
              fontFamily: "inherit",
            }}>
            My Profile
          </Typography>
        </LinkScroll>
      </Button>
    </Fragment>
  );

  return (
    <Fragment key="welcome_page_1">
      <PlaceHolder comp={<Welcome1 />} open={open} />
      <CSSTransition
        in={open}
        timeout={2000}
        classNames="my-name"
        unmountOnExit
        onEntered={() => {
          handleChange("welcome2");
        }}
        style={{ marginBottom: "30px" }}>
        <div>
          <Welcome1 />
        </div>
      </CSSTransition>
      <PlaceHolder comp={<Welcome2 />} open={open2} />
      <CSSTransition
        in={open2}
        timeout={2500}
        classNames="my-name"
        unmountOnExit
        style={{ textAlign: "center" }}>
        <div>
          <div>
            <Welcome2 />
          </div>
        </div>
      </CSSTransition>
    </Fragment>
  );
};

export default Welcome;

import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, Typography } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import { useWindowSize } from "../MainPage";
import { PlaceHolder } from "./index";

const useStyles = makeStyles(() => ({
  root: {
    padding: "200px 0",
  },
}));

const Experience = (props) => {
  const { open } = props;
  const classes = useStyles();
  const mobileView = useWindowSize();
  const isMobile = mobileView[0] < 960;
  const isSmallerMobile = mobileView[0] < 480;
  const careers = [
    {
      workplace: "PT Pundi Mas Berjaya",
      position: "Backend Developer",
      from: "2020 Jul",
      to: null,
      desc: `Right after I graduated from High School, I started working at PT Pundi Mas Berjaya as a Backend Developer.
      Developing APIs, Authentification, Mailing System, Integrating with Third-Party API
      and other things that related to Web-Development.`,
    },
  ];
  const educations = [
    {
      instance: "STMIK Mikroskil",
      position: "University",
      from: "2020",
      to: null,
      desc: "",
    },
    {
      instance: "Sutomo 2",
      position: "Highschool",
      from: "2017",
      to: "2020",
      desc: `I enjoyed doing a Math problem, Logic, and Programming (Most are C/C++ Language).
      During this, I already set my target to become a Developer (Not sure yet about what)
      `,
    },
  ];

  const CareerDetails = () => {
    return careers.map((career) => (
      <div style={{ marginBottom: "25px" }}>
        <Grid container>
          <Grid
            item
            xs={isSmallerMobile ? 12 : 3}
            style={{
              borderBottom: isSmallerMobile
                ? "1px solid rgba(154,154,154,0.5)"
                : null,
              padding: isSmallerMobile ? "10px 0" : null,
              margin: isSmallerMobile ? "10px 0" : null,
            }}>
            <Typography
              id="profile"
              variant="h6"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                fontWeight: "bold",
                fontSize: isMobile ? "18px" : null,
              }}>
              {career.workplace}
            </Typography>
            <Typography
              id="profile"
              variant="body1"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
              }}>
              {career.from}-{career.to ? career.to : "Now"}
            </Typography>
          </Grid>
          <Grid item xs={isSmallerMobile ? 12 : 9}>
            <Typography
              id="profile"
              variant="body1"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                fontWeight: "bold",
              }}>
              {career.position}
            </Typography>
            <Typography
              id="profile"
              variant="body1"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                fontSize: isMobile ? "14px" : null,
              }}>
              {career.desc}
            </Typography>
          </Grid>
        </Grid>
      </div>
    ));
  };

  const EducationDetails = () => {
    return educations.map((education) => (
      <div style={{ marginBottom: "25px" }}>
        <Grid container>
          <Grid
            item
            xs={isSmallerMobile ? 12 : 3}
            style={{
              borderBottom: isSmallerMobile
                ? "1px solid rgba(154,154,154,0.5)"
                : null,
              padding: isSmallerMobile ? "10px 0" : null,
              margin: isSmallerMobile ? "10px 0" : null,
            }}>
            <Typography
              id="profile"
              variant="h6"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                fontWeight: "bold",
                fontSize: isMobile ? "18px" : null,
              }}>
              {education.instance}
            </Typography>
            <Typography
              id="profile"
              variant="body1"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
              }}>
              {education.from}-{education.to ? education.to : "Now"}
            </Typography>
          </Grid>
          {isSmallerMobile && <Divider style={{ margin: "10px 0" }} />}
          <Grid item xs={isSmallerMobile ? 12 : 9}>
            <Typography
              id="profile"
              variant="body1"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                fontWeight: "bold",
              }}>
              {education.position}
            </Typography>
            <Typography
              id="profile"
              variant="body1"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                fontSize: isMobile ? "14px" : null,
              }}>
              {education.desc}
            </Typography>
          </Grid>
        </Grid>
      </div>
    ));
  };

  return (
    <div className={classes.root}>
      <Typography
        id="profile"
        variant="h3"
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: isMobile ? "36px" : null,
        }}>
        Experiences
      </Typography>
      <hr style={{ margin: "40px 10%" }} />
      <Typography
        id="profile"
        variant="h4"
        style={{
          textAlign: "left",
          fontFamily: "inherit",
          width: "70%",
          margin: "0 auto 35px",
          fontSize: isMobile ? "25px" : null,
        }}>
        Education
      </Typography>
      <PlaceHolder comp={<EducationDetails />} open={open} />
      <CSSTransition
        in={open}
        timeout={3000}
        classNames="my-name"
        unmountOnExit
        style={{ textAlign: "center", width: "70%", margin: "0 auto 0" }}>
        <div>
          <EducationDetails />
        </div>
      </CSSTransition>
      <hr style={{ margin: "40px 10%" }} />
      <Typography
        id="profile"
        variant="h4"
        style={{
          textAlign: "left",
          fontFamily: "inherit",
          width: "70%",
          margin: "0 auto 35px",
          fontSize: isMobile ? "25px" : null,
        }}>
        Career
      </Typography>
      <PlaceHolder comp={<CareerDetails />} open={open} />
      <CSSTransition
        in={open}
        timeout={3000}
        classNames="my-name"
        unmountOnExit
        style={{ textAlign: "center", width: "70%", margin: "0 auto 0" }}>
        <div>
          <CareerDetails />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Experience;

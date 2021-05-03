import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useWindowSize } from "./../MainPage";
import { Grid, Typography } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import { PlaceHolder } from "./index";

import { myImage } from "./../../../images/index";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F3EFE0",
    padding: "200px 0",
    marginTop: "700px",
  },
  roundedImage: {
    margin: "auto",
    borderRadius: "50%",
    border: "10px solid #FFFFE8",
    width: "180px",
    "&:hover": {
      border: "10px solid #00b4d4",
    },
  },
}));

const Profile = (props) => {
  const { open } = props;
  const classes = useStyles();
  const mobileView = useWindowSize();
  const isMobile = mobileView[0] < 960;
  const profileDetails = [
    { key: "Name :", value: "David Yappeter" },
    {
      key: "Age :",
      value:
        new Date().getUTCFullYear() - new Date("2002-01-01").getUTCFullYear(),
    },
    {
      key: "Location :",
      value: "Sumatera Utara, Indonesia",
    },
  ];

  const ProfileAbout = () => (
    <Fragment key="profile_about_1">
      <Typography
        variant="h6"
        style={{
          textAlign: isMobile ? "center" : "left",
          fontFamily: "inherit",
          fontWeight: "700",
        }}>
        About Me
      </Typography>
      <Typography
        variant="body1"
        style={{
          textAlign: isMobile ? "center" : "left",
          fontFamily: "inherit",
        }}>
        Right now, I am a University Student Semester 2 taking Information
        Technology Courses. It has been one year since I started learning deeper
        into Web-Development.
      </Typography>
    </Fragment>
  );

  const ProfileDetails = () => {
    return profileDetails.map(({ key, value }, index) => (
      <Fragment key={`detail_about${index}`}>
        <Typography
          variant="h6"
          style={{
            textAlign: isMobile ? "center" : "left",
            fontFamily: "inherit",
            fontWeight: "700",
          }}>
          {key}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: isMobile ? "center" : "left",
            fontFamily: "inherit",
          }}>
          {value}
        </Typography>
      </Fragment>
    ));
  };

  const ProfileMainTransition = () => (
    <Grid container>
      <Grid item xs={isMobile ? 12 : 3}>
        <ProfileAbout />
      </Grid>
      <Grid item xs={isMobile ? 12 : 6}>
        <img
          src={myImage}
          className={classes.roundedImage}
          style={{
            margin: isMobile ? "20px 0" : null,
            transition: "all 0.4s",
            width: isMobile ? "140px" : null,
          }}
        />
      </Grid>
      <Grid item xs={isMobile ? 12 : 3}>
        <ProfileDetails />
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Typography
        id="profile"
        variant="h3"
        style={{
          textAlign: "center",
          fontFamily: "inherit",
        }}>
        Profile
      </Typography>
      <hr style={{ margin: "40px 10%" }} />

      <PlaceHolder comp={<ProfileMainTransition />} open={open} />
      <CSSTransition
        in={open}
        timeout={3000}
        classNames="my-name"
        unmountOnExit
        style={{ textAlign: "center", width: "70%", margin: "0 auto 0" }}>
        <div>
          <ProfileMainTransition />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Profile;

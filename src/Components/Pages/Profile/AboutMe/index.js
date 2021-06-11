import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import meJpg from "./../../../../images/Me.jpg";

const useStyles = makeStyles((theme) => ({
  _container: {
    userSelect: "none",
    position: "fixed",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Source Sans Pro",
  },
  _paper: {
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "50%",
    padding: "30px 50px",
  },
  profilePic: {
    borderRadius: "50%",
    width: "150px",
    margin: "10px 0 30px",
    [theme.breakpoints.up("md")]: {
      margin: "0",
    },
  },
  flexWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  profileDesc: {
    fontSize: "0.9em",
    fontFamily: "inherit",
    alignSelf: "flex-start",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1em",
      marginRight: "50px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2em",
    },
  },
}));

const AboutMe = ({ refer, idx }) => {
  const classes = useStyles();
  return (
    <div
      ref={(el) => {
        refer.current[idx] = el;
      }}
      className={classes._container}>
      <Typography
        style={{
          fontFamily: "inherit",
          color: "white",
        }}
        variant="h3">
        About Me
      </Typography>
      <Paper className={classes._paper}>
        <div className={classes.flexWrapper}>
          <Typography variant="body1" className={classes.profileDesc}>
            Hi there, my name is David Yappeter, 3rd semester student pursuing a
            IT Bachelor Degree at STMIK/STIE Mikroskil. <br />I am currently
            working as a Backend-Developer, honing my skill from time to time.
          </Typography>
          <img
            alt="Me"
            loading="lazy"
            className={classes.profilePic}
            src={meJpg}
          />
        </div>
      </Paper>
    </div>
  );
};

export default AboutMe;

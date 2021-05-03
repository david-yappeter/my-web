import React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../MainPage/MainPage";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "20px",
  },
  toolbar: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    paddingLeft: 0,
    height: "4vw",
  },
  mainLogo: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: "2vw",
    letterSpacing: "0.5vw",
    // padding: "auto 2vw auto",
    heigth: "48px",
    "&:hover": {
      backgroundColor: "#00b4d4",
      transition: "background-color 0.5s",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const windowSize = useWindowSize();
  const isMobile = windowSize[0] < 960;

  const MainLogo = () => (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography
        className={classes.mainLogo}
        component="body"
        variant="inherit"
        style={{ fontSize: isMobile ? "25px" : null }}
      >
        MyWeb
      </Typography>
    </Link>
  );

  return (
    <AppBar position="relative" className={classes.root}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <MainLogo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

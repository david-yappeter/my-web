import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "./../../../images/logo.png";

const useStyles = makeStyles((theme) => ({
  _container: {
    position: "fixed",
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
  },
  backdropFilter: {
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    position: "absolute",
    width: "100vw",
    height: "56px",
    [theme.breakpoints.up("sm")]: {
      height: "64px",
    },
  },
  sectionDesktop: {
    margin: "0 100px 0 auto",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    marginLeft: "auto",
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  menuItem: {
    textDecoration: "unset",
    color: "white",
    cursor: "pointer",
    margin: "0 5px",
    padding: "0 20px",
    fontWeight: "bold",
    "&:hover": {
      color: "rgba(30, 30, 30, 0.9)",
      textDecoration: "underline",
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "64px",
    filter: "invert(100%)",
  },
}));

const Header = () => {
  const classes = useStyles();

  const listMenu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    // {
    //   name: "Contact",
    //   path: "/contact",
    // },
    // {
    //   name: "Other",
    //   path: "/other",
    // },
  ];

  return (
    <div className={classes._container}>
      <div className={classes.backdropFilter} />
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={logo} alt="Logo" />
            {/* <Typography style={{ marginLeft: "20px", color: "white" }}>
              My Web
            </Typography> */}
          </div>
          <div className={classes.sectionDesktop}>
            {listMenu.map((menu, index) => (
              <Typography
                key={`menulist_typography_index_${index}`}
                className={classes.menuItem}
                component="a"
                href={menu.path}>
                {menu.name}
              </Typography>
            ))}
          </div>
          <div className={classes.sectionMobile}>
            {listMenu.map((menu, index) => (
              <Typography
                key={`menulist_typography_index_${index}`}
                className={classes.menuItem}
                component="a"
                href={menu.path}>
                {menu.name}
              </Typography>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

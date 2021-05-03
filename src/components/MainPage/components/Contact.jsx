import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useWindowSize } from "./../MainPage";
import { PlaceHolder } from "./index";
import { CSSTransition } from "react-transition-group";
import { Typography, Grid } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: "#F3EFE0",
    padding: "200px 0 0",
  },
  iconLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "#00b4d4",
    },
    "&:active": {
      opacity: "0.5",
    },
  },
}));

const Contact = (props) => {
  const { open } = props;
  const classes = useStyles();
  const mobileView = useWindowSize();
  const isMobile = mobileView[0] < 960;
  const isSmallerMobile = mobileView[0] < 480;
  const contacts = [
    {
      icon: <GitHubIcon />,
      name: "david-yappeter",
      link: "https://github.com/david-yappeter",
    },
    {
      icon: <MailIcon />,
      name: "davidyap11les@gmail.com",
      link: "mailto:davidyap11les@gmail.com",
    },
  ];

  const ContactMainTransition = () => (
    <Grid
      container
      style={{ width: isMobile ? "100%" : "60%", margin: "0 auto" }}>
      {contacts.map((contact) => (
        <Grid
          item
          xs={isSmallerMobile ? 12 : 6}
          style={{ margin: isSmallerMobile ? "10px 0" : "40px 0" }}>
          <span
            style={{ marginRight: "15px", float: "left", marginTop: "5px" }}>
            {contact.icon}
          </span>
          <a href={contact.link} target="_blank" className={classes.iconLink}>
            <Typography
              variant="h6"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                fontSize: isMobile ? "16px" : null,
              }}
              noWrap>
              {contact.name}
            </Typography>
          </a>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: isMobile ? "36px" : null,
        }}>
        Contact
      </Typography>
      <hr style={{ margin: "40px 10% 20px" }} />
      <PlaceHolder comp={<ContactMainTransition />} open={open} />
      <CSSTransition
        in={open}
        timeout={3000}
        classNames="my-name"
        unmountOnExit
        style={{ textAlign: "center", width: "70%", margin: "0 auto 0" }}>
        <div>
          <ContactMainTransition />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Contact;

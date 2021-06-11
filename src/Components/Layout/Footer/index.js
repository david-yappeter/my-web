import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  _container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  iconsContainer: {
    right: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
    [theme.breakpoints.up("sm")]: {
      margin: "0",
      position: "absolute",
    },
  },
  icon: {
    color: "white",
    margin: "0 10px",
    transition: "color 0.2s",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
}));

const Footer = ({ bgLink }) => {
  const classes = useStyles();
  const iconPayloads = [
    {
      content: <InstagramIcon />,
      link: "https://www.instagram.com/davidy__",
    },
    {
      content: <GitHubIcon />,
      link: "https://github.com/david-yappeter",
    },
    {
      content: <EmailIcon />,
      link: "mailto:davidyap11les@gmail.com?subject=Hello&body=Hi There :D",
    },
  ];

  return (
    <div
      className={classes._container}
      style={
        {
          // background: `url(${bgLink})`,
          // backgroundRepeat: "no-repeat",
          // backroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundAttachment: "fixed",
        }
      }>
      <div className={classes.iconsContainer}>
        {iconPayloads.map((payload, index) => (
          <Icon
            key={`icon_payload_${index}`}
            component="a"
            href={payload.link}
            target="_blank"
            className={classes.icon}>
            {payload.content}
          </Icon>
        ))}
      </div>
      <Typography variant="subtitle2" style={{ color: "white" }}>
        © davidyappeter.xyz 2020 (responsive in progress)
      </Typography>
    </div>
  );
};

export default Footer;

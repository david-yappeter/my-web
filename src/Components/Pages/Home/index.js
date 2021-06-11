import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Footer from "../../Layout/Footer";
import GithubList from "../../Components/GithubRepoList";
import MediumList from "../../Components/MediumList";
import ProjectList from "../../Components/ProjectList";

const useStyles = makeStyles((theme) => ({
  _container: {},
  parallax_group: {
    background: "url(https://wallpapercave.com/wp/wp1887019.jpg)",
    backgroundRepeat: "no-repeat",
    backroundSize: "cover",
    backgroundAttachment: "fixed",
    // position: "relative",
    // height: "100vh",
    // overflowY: "auto",
    // perspective: "10px",
    // backgroundColor: "black"
  },
  bgImage: {
    // position: "absolute",
    // zIndex: "-1",
    // transform: "translateZ(-10px) scale(2) translateY(-30px)",
    width: "100vw",
    height: "90vh",
  },
  quote: {
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "rgba(230, 230, 230, 0.9)",
    fontFamily: "Vollkorn",
    fontStyle: "italic",
    backgroundColor: "transparent",
  },
  articleGroup: {
    position: "absolute",
    top: "90%",
    left: "0",
    width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.parallax_group}>
      <div className={classes.bgImage}>
        <Typography align="center" variant="h3" className={classes.quote}>
          "The journey of a thousand miles begins with one step"
          <br />- Lao Tzu -
        </Typography>
      </div>
      <div>
        <MediumList username={"david-yappeter"} />
        <GithubList username={"david-yappeter"} />
        <ProjectList />
      </div>
      <Footer bgLink="https://wallpapercave.com/wp/wp1887019.jpg" />
    </div>
  );
};

export default Home;

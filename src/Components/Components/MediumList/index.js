import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Grid4ItemWrapper, Grid4Wrapper } from "../../Layout/Grid4";
import Paper from "@material-ui/core/Paper";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  _container: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: "50px 0",
  },
  mediumPaper: {
    backdropFilter: "blur(3px)",
    background:
      "linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4))",
    filter: "drop-shadow(0 0 16px rgba(255, 255, 255, 0.5))",
    textAlign: "center",
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  mediumTitle: {
    fontWeight: "bold",
    fontSize: "0.8em",
    paddingBottom: "10px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1em",
    },
  },
  title: {
    fontWeight: "bolder",
    fontSize: "1.3em",
    margin: "2em 0",
    color: "inherit",
    filter: "invert(100%)",
    WebkitFilter: "invert(100%)",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6em",
    },
  },
}));

const MediumList = ({ username }) => {
  const classes = useStyles();
  const [stories, setStories] = useState([]);

  const SingleMedium = ({ data }) => {
    return (
      <Grid4ItemWrapper>
        <a
          rel="noreferrer"
          href={data.link}
          target="_blank"
          style={{ textDecoration: "none" }}>
          <Paper className={classes.mediumPaper}>
            <img
              loading="lazy"
              style={{ width: "80%", margin: "10%" }}
              alt="Github"
              src={data.thumbnail}
            />
            <Typography className={classes.mediumTitle}>
              {data.title}
            </Typography>
          </Paper>
        </a>
      </Grid4ItemWrapper>
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
      )
      .then((resp) => {
        setStories(resp.data.items);
      });
  }, [username]);

  return (
    <div className={classes._container}>
      <Container>
        <Typography className={classes.title}>Medium Articles</Typography>
        <Grid4Wrapper>
          {stories.map((story, index) => (
            <SingleMedium key={`single_github_index_${index}`} data={story} />
          ))}
        </Grid4Wrapper>
      </Container>
    </div>
  );
};

export default MediumList;

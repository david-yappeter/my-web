import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Typography } from "@material-ui/core";
import axios from "axios";
import { Grid4ItemWrapper, Grid4Wrapper } from "../../Layout/Grid4";
import GitHubButton from "react-github-btn";

const useStyles = makeStyles((theme) => ({
  _container: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    padding: "50px 0",
  },
  githubPaper: {
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
  githubTitle: {
    fontWeight: "bold",
    fontSize: "0.8em",
    paddingBottom: "10px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1em",
    },
  },
  title: {
    color: "inherit",
    fontWeight: "bolder",
    fontSize: "1.3em",
    margin: "2em 0",
    filter: "invert(100%)",
    WebkitFilter: "invert(100%)",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.6em",
    },
  },
}));

const GithubList = ({ username }) => {
  const classes = useStyles();
  const [repos, setRepos] = useState([]);

  const SingleGithub = ({ data }) => {
    return (
      <Grid4ItemWrapper>
        <a
          rel="noreferrer"
          href={data.html_url}
          target="_blank"
          style={{ textDecoration: "none" }}>
          <Paper className={classes.githubPaper}>
            <img
              style={{ width: "80%", margin: "10%" }}
              alt="Github"
              src="http://pngimg.com/uploads/github/github_PNG40.png"
            />
            <Typography className={classes.githubTitle}>{data.name}</Typography>
          </Paper>
        </a>
      </Grid4ItemWrapper>
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${username}/repos?per_page=4&sort=pushed`
      )
      .then((resp) => {
        setRepos(resp.data);
      });
  }, [username]);

  return (
    <div className={classes._container}>
      <Container>
        <Typography className={classes.title}>
          Latest Pushed Repositories
        </Typography>
        <Grid4Wrapper>
          {repos.map((repo, index) => (
            <SingleGithub key={`single_github_index_${index}`} data={repo} />
          ))}
        </Grid4Wrapper>
        <div
          style={{
            width: "100%",
            paddingTop: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <GitHubButton
            target="_blank"
            href="https://github.com/david-yappeter?tab=repositories">
            More
          </GitHubButton>
        </div>
      </Container>
    </div>
  );
};

export default GithubList;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid6ItemWrapper, Grid6Wrapper } from "../../Layout/Grid6";
import Paper from "@material-ui/core/Paper";
import { Container, Typography } from "@material-ui/core";
import postappImage from "./../../../images/postapp.png";
import welloImage from "./../../../images/wello.png";

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
    userSelect: "none",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  projectTitle: {
    fontWeight: "bold",
    fontSize: "0.8em",
    padding: "10px 0",
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
  projectDesc: {
    textAlign: "justify",
    padding: "15px 20px",
  },
}));

const ProjectList = ({ username }) => {
  const classes = useStyles();
  const projects = [
    {
      name: "Postapp",
      desc: "My First Project when i start off learning React. Taking 'MERNG Stack' as the frontend design inspiration, and using 'Go' as the backend with GraphQL as the architecture. Improving the design by adding responsiveness and customization of avatar image",
      image: postappImage,
      link: "https://postapp.davidyappeter.xyz",
    },
    {
      name: "Wello",
      desc: "This is My Second Project, mock from 'Trello'. The reason i choose this one is to learn about drag and drop. Some features are not fully working yet. But I will fix it little by little",
      image: welloImage,
      link: "https://wello.davidyappeter.xyz",
    },
  ];

  const SingleProject = ({ data }) => {
    return (
      <Grid6ItemWrapper>
        <a
          rel="noreferrer"
          href={data.link}
          target="_blank"
          style={{ textDecoration: "none" }}>
          <Paper className={classes.mediumPaper}>
            <img
              loading="lazy"
              style={{ width: "100%" }}
              alt={data.name}
              src={data.image}
            />
            <Typography className={classes.projectTitle}>
              {data.name}
            </Typography>
            <Typography variant="subtitle2" className={classes.projectDesc}>
              {data.desc}
            </Typography>
          </Paper>
        </a>
      </Grid6ItemWrapper>
    );
  };

  return (
    <div className={classes._container}>
      <Container>
        <Typography className={classes.title}>Projects</Typography>
        <Grid6Wrapper>
          {projects.map((project, index) => (
            <SingleProject
              key={`single_project_index_${index}`}
              data={project}
            />
          ))}
        </Grid6Wrapper>
      </Container>
    </div>
  );
};

export default ProjectList;

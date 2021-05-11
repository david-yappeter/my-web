import React from "react";

import { useWindowSize } from "../MainPage";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import WebPreview from "./WebPreview";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F3EFE0",
    padding: "175px 0",
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

const Project = (props) => {
  const classes = useStyles();
  const mobileView = useWindowSize();
  const isMobile = mobileView[0] < 960;
  const isSmallerMobile = mobileView[0] < 480;

  const projects = [
    {
      link: "https://postapp.davidyappeter.xyz",
      title: "Post App",
      desc: "My First Project when i start off learning React. Taking 'MERNG Stack' as the frontend design inspiration, and using 'Go' as the backend with GraphQL as the architecture. Improving the design by adding responsiveness and customization of avatar image",
      repo: "https://github.com/david-yappeter/frontend-desain-web-dasar",
    },
    {
      link: "https://wello.davidyappeter.xyz",
      title: "Wello",
      desc: "This is My Second Project, mock from 'Trello'. The reason i choose this one is to learn about drag and drop. Some features are not fully working yet. But I will fix it little by little",
      repo: "https://github.com/david-yappeter/noteapp-frontend",
    },
  ];

  const ProjectMain = () => {
    return (
      <div>
        <Grid container>
          {projects.map((project, index) => (
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={mobileView[0] <= 1050 ? 12 : 6}
              // xs={12}
              key={`grid_item_project_index_${index}`}>
              <WebPreview {...project} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: isMobile ? "36px" : null,
        }}>
        Personal Projects
      </Typography>
      <hr style={{ margin: "40px 10% 20px" }} />
      <div>
        <ProjectMain />
      </div>
    </div>
  );
};

export default Project;

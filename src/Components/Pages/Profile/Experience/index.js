import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

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
  },
  _paper: {
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "50%",
    padding: "30px 50px",
  },
  singleExperience: {
    maxHeight: "450px",
    overflowY: "auto",
    margin: "1em 0",
  },
  experienceDesc: {
    fontSize: "0.8em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
    },
  },
  experienceYear: {
    fontSize: "0.65em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.75em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.85em",
    },
  },
}));

const Experience = ({ refer, idx }) => {
  const classes = useStyles();
  const experienceData = [
    {
      name: "PT Pundi Mas Berjaya",
      desc: "Right after I graduated from High School, I started working as a Backend Developer, creating things related to APIs; especially GraphQL. I learned so many things like docker, some of the frontend skill, ERD, and a little about CI/CD although it is handled by other departments.",
      year: "2020-present",
    },
  ];

  return (
    <div
      ref={(el) => {
        refer.current[idx] = el;
      }}
      className={classes._container}>
      <Typography style={{ color: "white" }} variant="h3">
        Experience
      </Typography>
      <Paper className={classes._paper}>
        <div className={classes.educationContainer}>
          {experienceData.map((data, index) => (
            <div
              key={`index_education_item_${index}`}
              className={classes.singleExperience}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "1.2em",
                }}>
                {data.name}
              </Typography>
              <Typography
                variant="subtitle2"
                className={classes.experienceYear}>
                {data.year}
              </Typography>
              <Typography className={classes.experienceDesc}>
                {data.desc}
              </Typography>
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Experience;

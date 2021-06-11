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
    maxHeight: "450px",
    overflowY: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "50%",
    padding: "30px 50px",
  },
  singleEducation: {
    margin: "1em 0",
  },
  educationDesc: {
    fontSize: "0.8em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.9em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1em",
    },
  },
  educationYear: {
    fontSize: "0.65em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.75em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.85em",
    },
  },
}));

const Education = ({ refer, idx }) => {
  const classes = useStyles();
  const educationData = [
    {
      name: "STMIK/STIE Mikroskil",
      desc: "In my first and second semester, I didn't think I learn anything new from My College. And because of the global pandemic, our learning system is changing to online-class, but I hate to said that the quality of the teaching is poor because of the online class.",
      year: "2020-present",
    },
    {
      name: "Sutomo 2",
      desc: "I enjoyed doing a Math problem, Logic, and Programming (Most are C/C++ Language). During this, I already set my target to become a Developer (Not sure yet about what)",
      year: "2017-2020",
    },
  ];

  return (
    <div
      ref={(el) => {
        refer.current[idx] = el;
      }}
      className={classes._container}>
      <Typography style={{ color: "white" }} variant="h3">
        Education
      </Typography>
      <Paper className={classes._paper}>
        <div className={classes.educationContainer}>
          {educationData.map((data, index) => (
            <div
              key={`index_education_item_${index}`}
              className={classes.singleEducation}>
              <Typography style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                {data.name}
              </Typography>
              <Typography variant="subtitle2" className={classes.educationYear}>
                {data.year}
              </Typography>
              <Typography className={classes.educationDesc}>
                {data.desc}
              </Typography>
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Education;

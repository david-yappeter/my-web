import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { Grid6ItemWrapper } from "../../../Layout/Grid6";

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
    maxHeight: "450px",
    overflowY: "auto",
  },
  rating: {
    fontSize: "1.4em",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.8em",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1em",
    },
  },
  gridRating: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
      paddingRight: "50px",
      fontSize: "1.5em",
    },
  },
  gridSkill: {
    margin: "10px 0",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
}));

const Skill = ({ refer, idx }) => {
  const classes = useStyles();
  const skillData = [
    {
      name: "Go",
      iconLink: "https://seekicon.com/free-icon-download/golang_1.png",
      rate: 4,
    },
    {
      name: "GraphQL",
      iconLink:
        "https://cdn.iconscout.com/icon/free/png-256/graphql-3521468-2944912.png",
      rate: 4,
    },
    {
      name: "MySQL",
      iconLink:
        "https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png",
      rate: 4,
    },
    {
      name: "React",
      iconLink:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      rate: 3.5,
    },
    {
      name: "HTML",
      iconLink:
        "https://img.favpng.com/19/10/24/html-web-development-logo-world-wide-web-consortium-icon-png-favpng-MAPZmkr0NXUS5YCCLUL6wZyhp.jpg",
      rate: 3.5,
    },
    {
      name: "CSS(3)",
      iconLink:
        "https://img.favpng.com/24/19/0/logo-icon-css-icon-css-3-icon-UBHuaihc.jpg",
      rate: 3,
    },
    {
      name: "REST API",
      iconLink:
        "https://toppng.com/uploads/preview/rest-api-icon-rest-api-icon-11553510526uqs2ynyga2.png",
      rate: 3,
    },
    {
      name: "C/C++",
      iconLink: "https://img.icons8.com/ios/452/c-plus-plus-logo.png",
      rate: 3,
    },
    {
      name: "Javascript",
      iconLink:
        "https://img.favpng.com/8/24/8/javascript-comment-html-logo-international-conference-on-missions-png-favpng-raGbYqesJT7eGHRkGh0BPvbdV.jpg",
      rate: 2.5,
    },
    {
      name: "Python",
      iconLink:
        "https://img.favpng.com/4/0/25/python-logo-clojure-javascript-png-favpng-nCzz7E30hyikMZdgnLrBgf1GV.jpg",
      rate: 1.5,
    },
    {
      name: "Node JS",
      iconLink:
        "https://img.favpng.com/25/3/10/node-js-npm-mean-javascript-png-favpng-7mNte3uggEENwBbkF4WKvfFNr.jpg",
      rate: 1,
    },
  ];

  return (
    <div
      ref={(el) => {
        refer.current[idx] = el;
      }}
      className={classes._container}>
      <Typography style={{ color: "white" }} variant="h3">
        Skill
      </Typography>
      <Paper className={classes._paper}>
        <div className={classes.educationContainer}>
          <Grid container>
            {skillData.map((skill, index) => (
              <Grid6ItemWrapper key={`profile_skill_item_index_${index}`}>
                <Grid container>
                  <Grid6ItemWrapper className={classes.gridSkill}>
                    <img
                      alt={`${skill.name}`}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "1em",
                      }}
                      src={skill.iconLink}
                    />
                    <Typography>{skill.name}</Typography>
                  </Grid6ItemWrapper>
                  <Grid6ItemWrapper item xs={6} className={classes.gridRating}>
                    <Rating
                      defaultValue={skill.rate}
                      precision={0.5}
                      max={5}
                      readOnly
                      className={classes.rating}
                    />
                  </Grid6ItemWrapper>
                </Grid>
              </Grid6ItemWrapper>
            ))}
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default Skill;

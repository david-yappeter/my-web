import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useWindowSize } from "../MainPage";
import { Divider, Grid, Typography } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import Rating from "@material-ui/lab/Rating";
import { PlaceHolder } from "./index";

import {
  goImage,
  reactImage,
  graphqlImage,
  pythonImage,
  cImage,
  mysqlImage,
  htmlImage,
  cssImage,
  nodejsImage,
  jsImage,
} from "../../../images/index";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#F3EFE0",
    padding: "200px 0",
  },
  star: {
    "&:hover": {
      margin: "0 2px",
      "& > *": {
      },
    },
  },
}));

const Skill = (props) => {
  const { open } = props;
  const classes = useStyles();
  const mobileView = useWindowSize();
  const isMobile = mobileView[0] < 960;
  const isSmallerMobile = mobileView[0] < 480;
  const skills = [
    { icon: goImage, name: "Go", rate: "4" },
    { icon: mysqlImage, name: "MYSQL", rate: "4" },
    { icon: graphqlImage, name: "GraphQL", rate: "4" },
    { icon: cImage, name: "C/C++", rate: "3" },
    { icon: htmlImage, name: "HTML(5)", rate: "3" },
    { icon: cssImage, name: "CSS(3)", rate: "3" },
    { icon: reactImage, name: "React", rate: "2.5" },
    { icon: jsImage, name: "Javascript", rate: "2" },
    { icon: pythonImage, name: "Python", rate: "1.5" },
    { icon: nodejsImage, name: "Node Js", rate: "1" },
  ];
  const languages = [
    { lang: "Indonesia (Mother Tongue)", rate: "5" },
    { lang: "English", rate: "2.5" },
  ];

  const ProgrammingSkills = () => (
    <Fragment key="programming_page_head">
      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          fontWeight: "700",
        }}
        gutterBottom>
        Programming
      </Typography>
      {skills.map((skill, index) => (
        <Fragment key={`skill_page_${index}`}>
          <Grid container>
            <Grid item xs={4}>
              <img src={skill.icon} style={{ width: "30px" }} />
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h6"
                style={{
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: isMobile ? "16px" : null,
                }}>
                {skill.name}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Rating
                className={classes.star}
                value={skill.rate}
                readOnly
                max={5}
                precision={0.5}
              />
            </Grid>
          </Grid>
        </Fragment>
      ))}
    </Fragment>
  );

  const LanguageSkills = () => (
    <Fragment key="language_skill_head">
      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          fontWeight: "700",
        }}
        gutterBottom>
        Language
      </Typography>
      {languages.map((language) => (
        <Grid container style={{ paddingLeft: isMobile ? 0 : "15px" }}>
          <Grid item xs={7}>
            <Typography
              variant="h6"
              style={{
                textAlign: "left",
                fontFamily: "inherit",
                fontSize: isMobile ? "16px" : null,
                paddingLeft: isMobile ? "25%" : null,
              }}>
              {language.lang}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Rating value={language.rate} readOnly max={5} precision={0.5} />
          </Grid>
        </Grid>
      ))}
    </Fragment>
  );

  const SkillMainTransition = () => (
    <Grid container>
      <Grid
        item
        xs={isMobile ? 12 : 6}
        style={{
          borderRight: isMobile ? null : "solid 1px black",
          marginBottom: isMobile ? "30px" : null,
        }}>
        <ProgrammingSkills />
      </Grid>
      <Divider absolute orientation="vertical" flexItem />
      <Grid item xs={isMobile ? 12 : 6}>
        <LanguageSkills />
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Typography
        id="profile"
        variant="h3"
        style={{
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: isMobile ? "36px" : null,
        }}>
        Skills
      </Typography>
      <hr style={{ margin: "40px 10%" }} />
      <PlaceHolder comp={<SkillMainTransition />} open={open} />
      <CSSTransition
        in={open}
        timeout={3000}
        classNames="my-name"
        unmountOnExit
        style={{
          textAlign: "center",
          width: isMobile ? "100%" : "70%",
          margin: "0 auto 0",
        }}>
        <div>
          <SkillMainTransition />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Skill;

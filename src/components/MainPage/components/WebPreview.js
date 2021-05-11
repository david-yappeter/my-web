import React, { useEffect, useState } from "react";
import { useScrapper } from "react-tiny-link";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import GitHubButton from "react-github-btn";

function WebPreview({ link, title, desc, repo }) {
  const [result, loading, error] = useScrapper({
    url: link,
  });

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <h3> Error . . .</h3>;
  }

  return (
    <Card style={{ width: "500px", margin: "30px 0" }}>
      <a
        href={link}
        target="_blank"
        style={{ textDecoration: "none", color: "inherit" }}>
        <CardActionArea>
          <CardMedia title={title}>
            <img width="500px" src={result.image[0] ? result.image[0] : ""} />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              style={{ fontWeight: "bold", fontFamily: "inherit" }}
              variant="h5"
              component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
      <CardContent
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px 0",
        }}>
        <GitHubButton href={repo}>Repository</GitHubButton>
      </CardContent>
    </Card>
  );
}

export default WebPreview;

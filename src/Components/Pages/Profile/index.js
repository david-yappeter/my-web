import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";

const useStyles = makeStyles((theme) => ({
  _container: {
    position: "absolute",
    zIndex: "-1",
    width: "100vw",
    background: "url(https://wallpaperaccess.com/full/279553.jpg)",
    backgroundRepeat: "no-repeat",
    backroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "4400px",
    [theme.breakpoints.up("xl")]: {
      height: "4500px",
    },
  },
  parallax: {
    position: "fixed",
    perspective: "10000px",
    transformStyle: "preserve-3d",
    transition: "all 0.2s",
  },
  parallax_item: {
    width: "50%",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const refContainer = useRef(null);
  const refItems = useRef([]);
  const parallaxItems = [<AboutMe />, <Experience />, <Education />, <Skill />];

  const handleScroll = () => {
    var parallaxLens = parallaxItems.length;
    for (var i = 0; i < parallaxLens; i++) {
      var tempElem = refItems.current[i];
      var deg = (-360 / parallaxLens) * i + window.pageYOffset / 10;
      tempElem.style.transform = `
        rotateX(${deg}deg)
        translateZ(400px)
        `;

      var degMod = (deg + 360) % 360;
      if (degMod >= 90 && degMod <= 270) {
        tempElem.style.opacity = `0`;
      } else if (degMod >= 60 && degMod < 90) {
        tempElem.style.opacity = `${(90 - degMod) * 0.03}`;
      } else if (degMod > 270 && degMod <= 300) {
        tempElem.style.opacity = `${(degMod - 270) * 0.03}`;
      } else {
        tempElem.style.opacity = `1`;
      }
    }
  };

  const handleMouseMove = (e) => {
    const { pageX, pageY } = e;
    refContainer.current.style.perspectiveOrigin = `${pageX}px ${pageY}px`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes._container}>
      <div ref={refContainer} className={classes.parallax}>
        <div className={classes.parallax_item}>
          {parallaxItems.map((item, index) => {
            const Cloned = React.cloneElement(item, {
              key: `cloned_item_profile_index_${index}`,
              refer: refItems,
              idx: index,
            });
            return Cloned;
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;

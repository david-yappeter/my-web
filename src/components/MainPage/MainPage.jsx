import React, { useState, useEffect, useLayoutEffect } from "react";
import { Header, Footer, VerticalTab } from "./../Layout/index";

import "./MainPage.css";

import {
  Profile,
  Welcome,
  Skill,
  Experience,
  Contact,
} from "./components/index";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}

const MainPage = () => {
  const [open, setOpen] = useState({
    welcome: false,
    welcome2: false,
    profile: false,
    skill: false,
    career: false,
    contact: false,
  });
  const [area, setArea] = useState();
  const fadeIn = [
    { name: "profile", offset: "900" },
    { name: "career", offset: "1600" },
    { name: "skill", offset: "2400" },
    { name: "contact", offset: "3100" },
  ];
  const divided = [0, 900, 1600, 2400, 3100];

  const handleAreaClick = (val) => {
    setArea(val);
  };

  const handleScroll = () => {
    fadeIn.map((value, index) => {
      if (!open[value.name] && window.pageYOffset >= value.offset) {
        setOpen((prev) => ({
          ...prev,
          [value.name]: true,
        }));
      }
    });

    for (var i = 0; i < divided.length - 1; i++) {
      if (
        window.pageYOffset >= divided[i] &&
        window.pageYOffset <= divided[i + 1]
      ) {
        setArea(i);
      }
    }
  };

  const handleChange = (change) => {
    setOpen((prev) => ({
      ...prev,
      [change]: true,
    }));
  };

  useEffect(() => {
    setOpen((prev) => ({
      ...prev,
      welcome: true,
    }));
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{}}>
      <Header />
      <VerticalTab value={area} handleAreaClick={handleAreaClick} />
      <Welcome
        open={open.welcome}
        open2={open.welcome2}
        handleChange={handleChange}
      />
      <Profile open={open.profile} />
      <Experience open={open.career} />
      <Skill open={open.skill} />
      <Contact open={open.contact} />

      <Footer />
    </div>
  );
};

export default MainPage;
export { useWindowSize };

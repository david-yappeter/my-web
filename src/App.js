import React from "react";
import "./App.css";

//Font
import "./fonts/SairaSemiCondensed-Regular.ttf";

import MainPage from "./components/MainPage/MainPage";
import { Project } from "./components/MainPage/components";
import { Footer } from "./components/Layout";

const App = () => {
  return (
    <div style={{ fontFamily: "'Saira Semi Condensed'" }}>
      <MainPage />
      <Project />
      <Footer />
    </div>
  );
};

export default App;

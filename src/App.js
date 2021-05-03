import React from "react";
import "./App.css";

//Font
import "./fonts/SairaSemiCondensed-Regular.ttf";

import MainPage from "./components/MainPage/MainPage";

const App = () => {
  return (
    <div style={{ fontFamily: "'Saira Semi Condensed'" }}>
      <MainPage />
    </div>
  );
};

export default App;

import Contact from "./Contact";
import Experience from "./Experience";
import Profile from "./Profile";
import Skill from "./Skill";
import Welcome from "./Welcome";
import Project from "./Project";

const PlaceHolder = (props) => {
  const { open, comp } = props;
  return (
    <div style={{ visibility: "hidden", display: open ? "none" : null }}>
      {comp}
    </div>
  );
};

export { Contact, Experience, Profile, Skill, Project, Welcome, PlaceHolder };

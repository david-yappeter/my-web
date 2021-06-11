import React, { useEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const Grid4ItemWrapper = ({ children }) => {
  const forceUpdate = useForceUpdate();
  const theme = useTheme();
  const grid4 = useMediaQuery(theme.breakpoints.up("md"));
  const grid3 = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    forceUpdate();
    // eslint-disable-next-line
  }, [grid4, grid3]);

  return (
    <Grid item xs={grid4 ? 3 : grid3 ? 4 : 6}>
      {children}
    </Grid>
  );
};

const Grid4Wrapper = ({ children }) => {
  const forceUpdate = useForceUpdate();
  const theme = useTheme();
  const grid4 = useMediaQuery(theme.breakpoints.up("md"));
  const grid3 = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    forceUpdate();
    // eslint-disable-next-line
  }, [grid4, grid3]);
  return (
    <Grid container spacing={grid4 ? 10 : grid3 ? 5 : 2}>
      {children}
    </Grid>
  );
};

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value); // update the state to force render
}

export { Grid4Wrapper, Grid4ItemWrapper };

import React, { useEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const Grid6ItemWrapper = ({ className, children, style }) => {
  const forceUpdate = useForceUpdate();
  const theme = useTheme();
  const grid4 = useMediaQuery(theme.breakpoints.up("md"));
  // const grid3 = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    forceUpdate();
    // eslint-disable-next-line
  }, [grid4]);

  return (
    <Grid item xs={grid4 ? 6 : 12} className={className} style={style}>
      {children}
    </Grid>
  );
};

const Grid6Wrapper = ({ children }) => {
  const forceUpdate = useForceUpdate();
  const theme = useTheme();
  const grid4 = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    forceUpdate();
    // eslint-disable-next-line
  }, [grid4]);
  return (
    <Grid container spacing={grid4 ? 10 : 2}>
      {children}
    </Grid>
  );
};

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value); // update the state to force render
}

export { Grid6Wrapper, Grid6ItemWrapper };

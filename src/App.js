import React from "react";
import { Box, Grommet, Heading } from "grommet";
import Movies from "./components/movies";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none">
            Mediate
          </Heading>
        </AppBar>
        <Box fill>
          <Movies />
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;

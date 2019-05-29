import * as React from "react";
import { Box, Heading } from "grommet";

const Movie = props => {
  return (
    <Box align="center" direction="row">
      <Heading level={3}>{props.movie.name}</Heading>
    </Box>
  );
};

export default Movie;

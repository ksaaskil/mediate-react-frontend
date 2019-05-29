import * as React from "react";
import { Box, Grid, Heading } from "grommet";
import Movie from "./movie";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const mockMovies = Array(5)
      .fill(0)
      .map((_, i) => ({ name: `Movie ${i}` }));
    console.log(`Set ${mockMovies.length} movies`);
    setMovies(mockMovies);
  }, []);

  return (
    <Box fill>
      <Heading alignSelf="center">Movies</Heading>
      <Grid columns={{ count: 3, size: "auto" }} gap="small">
        {movies.map((movie, i) => (
          <Movie movie={movie} key={`movie_${i}`} />
        ))}
      </Grid>
    </Box>
  );
};

export default Movies;

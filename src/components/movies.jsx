import * as React from "react";
import { Box, Grid, Heading } from "grommet";
import Movie from "./movie";
import * as moviesApi from "../apis/movies-api";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);

  async function setMoviesAsync() {
    const fetchedMovies = await moviesApi.getMovies();
    console.log(`Set ${fetchedMovies.length} movies`);
    setMovies(fetchedMovies);
  }

  React.useEffect(() => {
    setMoviesAsync();
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

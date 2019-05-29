const mockMovies = Array(5)
  .fill(0)
  .map((_, i) => ({ name: `Movie ${i}` }));

export const getMovies = async () => {
  return mockMovies;
};

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

export default requests;


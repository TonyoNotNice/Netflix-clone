import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // The Movie DB API base URL
});

export default instance;

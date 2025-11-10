import React from 'react';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import ContentSection from './ContentSection';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <ContentSection 
        key="trending"
        title="Trending Now" 
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=54796065dd1d0c37fecf01e4660f00af" 
      />
      <ContentSection 
        key="top-rated"
        title="Top Rated" 
        fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=54796065dd1d0c37fecf01e4660f00af" 
      />
      <ContentSection 
        key="action-movies"
        title="Action Movies" 
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=54796065dd1d0c37fecf01e4660f00af&with_genres=28" 
      />
      <ContentSection 
        key="comedy-movies"
        title="Comedy Movies" 
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=54796065dd1d0c37fecf01e4660f00af&with_genres=35" 
      />
      <ContentSection 
        key="horror-movies"
        title="Horror Movies" 
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=54796065dd1d0c37fecf01e4660f00af&with_genres=27" 
      />
      <ContentSection 
        key="romance-movies"
        title="Romance Movies" 
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=54796065dd1d0c37fecf01e4660f00af&with_genres=10749" 
      />
      <ContentSection 
        key="documentaries"
        title="Documentaries" 
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=54796065dd1d0c37fecf01e4660f00af&with_genres=99" 
      />
      <Footer />
    </div>
  );
}

export default App;

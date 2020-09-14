import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import TopMovies from '../top-movies/top-movies/TopMovies';
import TopMoviesModal from '../top-movies/top-movies-modal/TopMoviesModal';
import Pagination from '../pagination/Pagination';
import axios from 'axios';

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);


  useEffect(() => {
    async function fetchItunesAPI() {
      let result = await axios('https://itunes.apple.com/us/rss/topmovies/limit=100/json');
      setMovies(result.data.feed.entry);
    }
    fetchItunesAPI()
  }, [])

  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home-page-container">
      <Header />
      <Navigation />
      <TopMovies currentMovies={currentMovies} />
      <TopMoviesModal currentMovies={currentMovies} />
      <Pagination
        currentPage={currentPage}
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />

    </div>
  );
}

export default HomePage;

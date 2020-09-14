import React, { useState, useEffect } from 'react';
import Header from '../header/Header'
import Navigation from '../navigation/Navigation'
import TopMovies from '../top-movies/TopMovies'
import Pagination from '../pagination/Pagination'
import axios from 'axios';

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [moviesPerPage] = useState(20);


  useEffect(() => {
    async function fetchItunesAPI() {
      let result = await axios('https://itunes.apple.com/us/rss/topmovies/limit=100/json');
      let data = result.data;
      setMovies(data.entry);
    }
    fetchItunesAPI()
  }, [])

  // // Get current movies
  // const indexOfLastMovie = currentPage * moviesPerPage;
  // const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  // const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // //Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="home-page-container">
      <Header />
      <Navigation />
      <section className="top-movies-list">
        <TopMovies />
        <Pagination />
      </section>
    </div>
  );
}

export default HomePage;

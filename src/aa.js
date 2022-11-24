import { useState, useEffect } from "react";

export default function useFetchData() {
 

  const API_URl = "http://www.omdbapi.com?apikey=b6003d8a";

  async function searchMovies(movieTitle) {
    const resp = await fetch(`${API_URl}&s=${movieTitle}`);
    const data = await resp.json();

    // if data.Search is undefined or null  set movies = []
    setMovies(data.Search ?? []);
  }

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  function search() {
    if (prevSearchTerm.toLowerCase() === searchTerm.toLowerCase()) return;

    const searchText = searchTerm.trim();
    setPrevSearchTerm(searchText);

    if (searchText) searchMovies(searchText);
  }

  return { movies, search, searchTerm, setSearchTerm };
}

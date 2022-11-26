<script lang="ts">
  // style
  import "./app.css";

  // components
  import MovieCard from "./components/MovieCard.svelte";
  import MovieHeader from "./components/MovieHeader.svelte";

  // types
  interface MovieData {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
  }

  interface ResponseData {
    Search: MovieData[];
    Response: "True";
    totalResults: string;
    Error?: never;
  }

  interface ResponseError {
    Error: string;
    Response: "False";
    totalResults?: never;
    Search?: never;
  }

  async function searchMovies(movieTitle: string): Promise<MovieData[]> {
    const API_URl = "http://www.omdbapi.com?apikey=b6003d8a";
    const response = await fetch(`${API_URl}&s=${movieTitle}`);

    const data: ResponseData | ResponseError = await response.json();

    return data.Error ? [] : data.Search;
  }

  let searchTerm = "Batman";
  let prevSearch = searchTerm;

  let promise = searchMovies(searchTerm);

  function onSearch() {
    // removing unnecessary space from user search     
    const currentSearch = searchTerm.trim();
    // rendering trim search     
    searchTerm = currentSearch;

    if (prevSearch.toLowerCase() === currentSearch.toLowerCase()) return;

    prevSearch = currentSearch;
    promise = searchMovies(currentSearch);
  }
</script>

<MovieHeader on:search={onSearch}>
  <input
    type="text"
    enterKeyHint="search"
    aria-label="search"
    spellCheck="false"
    autoComplete="off"
    class="search-bar"
    placeholder="Search for movies"
    bind:value={searchTerm}
  />
</MovieHeader>

<div class="movie-card-container">
  {#await promise}
    <p class="not-found">loading....</p>
  {:then moviesData}
    {#each moviesData as movieData}
      <MovieCard {movieData} />
    {:else}
      <h2 class="not-found">Movie not found!</h2>
    {/each}
  {/await}
</div>

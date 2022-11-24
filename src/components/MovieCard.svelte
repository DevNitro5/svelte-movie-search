<script lang="ts">
  interface MovieData {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
  }
  
  export let movieData: MovieData;

  const { Title, Year, Type, Poster } = movieData;
</script>

<div class="movie-card group">
  <p class="movie-year">{Year}</p>
  <img
    src={Poster === "N/A" ? "https://via.placeholder.com/400" : Poster}
    class="movie-poster w-full h-full group-hover:opacity-[0.3]"
    alt={Title}
  />
  <div class="movie-details group-hover:bg-transparent">
    <span class="type">{Type}</span>
    <h2 class="movie-title">{Title}</h2>
  </div>
</div>

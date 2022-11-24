<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import searchIcon from "../assets/search.svg";

  const dispatch = createEventDispatcher();

  function onSubmitHandler() {
    dispatch("search");
  }
</script>

return (
<header class="py-6">
  <h1 class="title">MovieLand</h1>
  <form
    class="relative w-[85%] h-fit max-w-[33rem] mx-auto"
    on:submit|preventDefault={onSubmitHandler}
  >
    <slot />
    <button type="submit">
      <img src={searchIcon} alt="search" class="search-icon" />
    </button>
  </form>
</header>

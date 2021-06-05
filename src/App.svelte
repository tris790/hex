<script>
  import Logo from "./lib/Logo.svelte";
  import Search from "./lib/Search.svelte";
  import RecentContainer from "./lib/RecentContainer.svelte";
</script>

<main>
  <div
    class="container mx-auto flex flex-col items-center space-y-10 w-4/5 md:w-2/5 mt-28"
  >
    <Logo />
    <Search />
    <RecentContainer />
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>

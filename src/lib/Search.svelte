<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<form class="mt-80 w-full flex items-center bg-white p-4 shadow-md">
  <div class="hidden md:inline-block">
    <span class="bg-gray-200 p-1 text-gray-500 cursor-default">hex.tris790</span
    >
    <span class="pl-1">/</span>
  </div>
  <input
    name="q"
    type="text"
    data-js-search-input=""
    placeholder="Search..."
    class="appearance-none focus:outline-none flex-grow bg-white mx-1 text-gray-600 font-bold min-w-min"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6 hidden lg:inline-block"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</form>

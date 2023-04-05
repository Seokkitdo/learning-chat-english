<!-- Main.svelte -->

<div class="flex-1 flex flex-col bg-gray-100 overflow-hidden">
  <!-- Top bar -->
  <div
    class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
    <button
      class="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
      aria-expanded="false">
      <span class="sr-only">Open sidebar</span>
    </button>
    <div class="flex-1 px-4 flex justify-between">
      <div class="flex-1 flex">
        <form class="w-full flex md:ml-0" action="#" method="GET">
          <label for="search_field" class="sr-only">Search</label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div
              class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M9 2a7 7 0 11-1.41 1.41A1 1 0 018 4v-.001a1 1 0 01.293-.707l3-3a1 1 0 011.414 0l3 3A1 1 0 0116 4.999V5a1 1 0 01-1 1h-1.586a2 2 0 00-1.414.586l-.828.828A2 2 0 0010.586 9H11a1 1 0 110 2H8a1 1 0 01-1-1V8H6a2 2 0 00-2 2v3a2 2 0 002 2h8a2 2 0 002-2v-3a2 2 0 00-2-2h-1a1 1 0 110-2h3a1 1 0 01.707.293l.828.828A1 1 0 0118 11.414V12a1 1 0 01-1 1h-.001a1 1 0 01-.707-.293l-.828-.828A1 1 0 0115 10.586z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <input
              id="search_field"
              class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
              placeholder="Search"
              type="search"
              name="search" />
          </div>
        </form>
      </div>
      <div class="ml-4 flex items-center md:ml-6">
        <button
          class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100"
          aria-label="Notifications" />
      </div>
    </div>
  </div>
</div>

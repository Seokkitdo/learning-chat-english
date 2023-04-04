<!-- src/routes/Login.svelte -->
<script>
  let username = "";
  let password = "";

  function handleSubmit(event) {
    event.preventDefault();

    // 로그인 로직 처리
    console.log(`username: ${username}, password: ${password}`);
  }
</script>


<form class="border border-gray-300 max-w-4xl mx-auto  rounded-lg" on:submit={handleSubmit}>
  <div class="grid grid-cols-1 md:grid-cols-2  h-full">
    <div class="md:h-full">
      <img class="h-full w-full object-cover" src="https://placekitten.com/400/400" alt="cat" />
    </div>
    <div class="flex flex-col justify-center p-4">
      <label class="block mb-2">
        Username
        <input
          class="border border-gray-300 rounded-md w-full py-2 px-3"
          type="text"
          bind:value={username}
        />
      </label>
      <label class="block mb-4">
        Password
        <input
          class="border border-gray-300 rounded-md w-full py-2 px-3"
          type="password"
          bind:value={password}
        />
      </label>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      <p class="mt-4 text-sm text-center">or continue with</p>
      <div class="mt-2 flex justify-center">
        <button
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          <span class="flex items-center">
            <img
              class="h-6 w-6 rounded-full mr-2 object-cover"
              src="https://avatars.githubusercontent.com/u/3392074?s=460&u=aad8cc3b3cc3ed0fb0d2f3c8bc9e2149d015c073&v=4"
              alt="google logo"
            />
            <span>Google</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</form>

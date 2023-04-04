<script lang="ts">
  import user from '$stores/user'

  const { signIn, signOut } = user
  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }
  let welcomeText = [
    'Learning Gpt English 에 오신 것을 환영합니다',
    '로그인하시고 다양한 기능들을 체험해 보세요'
  ]
</script>

<div class="flex justify-center items-center flex-col sm:bg-white px-8">
  <div class="flex justify-center items-center flex-col mb-8">
    {#each welcomeText as text}
      <p class="text-black">{text}</p>
    {/each}
  </div>
  <button
    on:click={signIn}
    on:keydown={signIn}
    type="button"
    class="flex justify-center items-center w-fit p-4 bg-google hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
    <svg
      width="20"
      height="20"
      class="mr-2"
      fill="currentColor"
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z" />
    </svg>
    Sign in with Google
  </button>
</div>

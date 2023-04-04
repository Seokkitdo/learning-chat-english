<!-- src/routes/Login.svelte -->
<script>
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-navigator'
  import { onAuthStateChanged } from 'firebase/auth'

  import { auth } from '$auth/firebase'
  import user from '$stores/user'

  const { signIn, signOut } = user

  onMount(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!!currentUser) {
        $user = currentUser
        navigate('/chat-learning')
      } else {
        $user = null
      }
    })
  })

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.log(error)
    }
  }

  user.subscribe((user) => {
    console.log('user', user)
  })
</script>

<div class="border border-gray-300 max-w-4xl mx-auto rounded-lg">
  <div class="grid grid-cols-1 md:grid-cols-2 h-full">
    <div class="md:h-full">
      <img
        class="h-full w-full object-cover"
        src="https://placekitten.com/400/400"
        alt="cat" />
    </div>
    <div>
      <button
        on:click={signIn}
        on:keydown={signIn}
        type="button"
        class="py-2 px-4 max-w-md flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="mr-2"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z" />
        </svg>
        Sign in with Google
      </button>
      <div on:click={handleSignOut} on:keydown={handleSignOut}>로그아웃</div>
    </div>
  </div>
</div>

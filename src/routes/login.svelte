<!-- src/routes/Login.svelte -->
<script>
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-navigator'
  import { onAuthStateChanged } from 'firebase/auth'

  import { auth } from '$auth/firebase'
  import LoginImg from '$components/login/LoginImg.svelte'
  import LoginForm from '$components/login/LoginForm.svelte'
  import user from '$stores/user'

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

  user.subscribe((user) => {
    console.log('user', user)
  })
</script>

<div class="w-screen h-screen flex justify-center items-center bg-bgLogin">
  <div class="sm:border border-gray-300 max-w-4xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:min-h-[600px]">
      <LoginImg />
      <LoginForm />
    </div>
  </div>
</div>

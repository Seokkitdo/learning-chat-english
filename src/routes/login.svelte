<!-- src/routes/Login.svelte -->
<script>
  import { onMount } from 'svelte'
  import { navigate } from 'svelte-navigator'
  import { onAuthStateChanged } from 'firebase/auth'

  import { auth } from '$auth/firebase'
  import user from '$stores/user'
  import LoginImg from '$components/login/LoginImg.svelte'
  import LoginForm from '$components/login/LoginForm.svelte'

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
    <div class="grid grid-cols-1 md:grid-cols-2 h-full">
      <LoginImg />
      <LoginForm />
    </div>
  </div>
</div>

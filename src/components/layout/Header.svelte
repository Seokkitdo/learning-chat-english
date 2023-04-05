<script lang="ts">
  import { navigate, useLocation } from 'svelte-navigator'
  import Nav from '$components/layout/nav/Index.svelte'
  import user from '$stores/user'

  const location = useLocation()
  const handleLogIn = async (e) => {
    const targetText = e.target.innerText
    if (targetText === '로그인') {
      navigate('/login')
    } else {
      await user.signOut()
      navigate('/login')
    }
  }
</script>

{#if $location.pathname !== '/login'}
  <header
    class="fixed left-0 w-full bg-gray-500 text-white text-sm leading-none z-50">
    <div class="min-w-5xl max-w-screen-xl px-5 mx-auto">
      <div class="flex items-center justify-between">
        <div class="h-20 flex items-center gap-18">
          <Nav
            navItems={[
              ...[
                {
                  name: '마이페이지',
                  pathname: '/mypage'
                },
                {
                  name: '챗러닝',
                  pathname: 'chat-learning'
                }
              ]
            ]} />
        </div>
        <button
          on:click={handleLogIn}
          class="relative -mr-5 px-5 py-2 leading-normal hover:font-bold">
          {$user?.displayName ? '로그아웃' : '로그인'}
        </button>
      </div>
    </div>
  </header>
{/if}

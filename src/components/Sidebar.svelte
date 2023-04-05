<script>
  import user from '$stores/user'
  import { navigate } from 'svelte-navigator'

  // Sidebar 아이콘 클릭 시 열리는 메뉴 리스트
  const menuList = [
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' },
    { name: 'History', icon: 'history' }
  ]

  const handleLogIn = async () => {
    await user.signOut()
    navigate('/login')
  }
</script>

<div class="bg-[#202123] hidden bg-gray-900 md:flex md:w-[260px] md:flex-col">
  <div class="flex h-full flex-1 flex-col space-y-1 p-2">
    <div
      class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20">
      구문 분석하기
    </div>
    <div class="flex-col flex-1 overflow-y-auto border-b border-white/20 -mr-2">
      {#each menuList as menu}
        <a
          href="#"
          class="flex items-center px-2 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-500">
          <span class="ml-2 text-white">{menu.name}</span>
        </a>
      {/each}
    </div>
    <div
      class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
      <p>히스토리 초기화</p>
    </div>
    <div
      class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
      <p>마이 페이지</p>
    </div>
    <div
      on:click={handleLogIn}
      on:keydown={handleLogIn}
      class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
      <p>로그아웃</p>
    </div>
  </div>
</div>

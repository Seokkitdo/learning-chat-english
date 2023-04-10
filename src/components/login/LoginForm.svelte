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

  const mainText: string[] = [
    'GPT를 활용한 영어 학습,',
    ' 더욱 효율적인 공부를 경험하세요.'
  ]
  const subText: string =
    'GPT를 활용한 영어 학습을 통해 단순한 언어 학습이 아닌 더 많은 경험을 제공합니다. GPT AI가 만들어낸 다양한 상황에서의 문장과 대화를 통해, 여러분은 영어 실력뿐만 아니라 커뮤니케이션 능력도 향상시킬 수 있습니다.'
</script>

<div
  class="flex w-full h-full justify-between items-between sm:flex-col sm:bg-white p-8">
  <div class="hidden sm:block">
    {#each mainText as text}
      <h1 class="text-xl font-bold text-black">{text}</h1>
    {/each}
  </div>
  <div
    class="hidden sm:block sm:my-4 sm:border-b sm:border-gray-300 sm:antialiased" />
  <div class=" w-full flex justify-center flex-col">
    <div
      class="flex justify-center flex-col items-center mb-4 sm:flex sm:justify-center sm:items-start sm:flex-col sm:mb-4">
      {#each welcomeText as text}
        <p class="text-black text-sm">{text}</p>
      {/each}
    </div>
    <div class="flex justify-center w-full">
      <button
        on:click={signIn}
        on:keydown={signIn}
        type="button"
        class="flex justify-center items-center w-fit p-4 bg-google hover:bg-blue-600 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
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
  </div>

  <div
    class="hidden sm:block sm:my-6 sm:border-b sm:border-gray-300 sm:antialiased" />
  <div
    class="hidden sm:block sm:w-full sm:p-4 sm:bg-gray-600 sm:text-sm sm:text-white sm:rounded-lg">
    <p class="">{subText}</p>
  </div>
</div>

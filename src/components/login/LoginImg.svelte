<script lang="ts">
  const mainText: string[] = [
    'GPT를 활용한 영어 학습,',
    ' 더욱 효율적인 공부를 경험하세요.'
  ]
  const subText: string =
    'GPT를 활용한 영어 학습, 단순한 언어 학습이 아닌 더 많은 경험을 제공합니다. GPT AI가 만들어낸 다양한 상황에서의 문장과 대화를 통해, 여러분은 영어 실력뿐만 아니라 커뮤니케이션 능력도 향상시킬 수 있습니다.'
</script>

<!-- <div class="sm:w-full sm:h-full object-cover hidden sm:block relative">
  <img
    class="h-full w-full object-cover"
    src="/imgs/bg-login2.jpg"
    alt="login-img" />
  <div class="absolute top-[30%] left-0 text-white p-4">
    <h1 class="text-4xl font-bold mb-4">효과적인 학습을 통해</h1>
    <p class="text-xl">영어 실력을 향상시켜 보세요!</p>
  </div>
</div> -->

<div
  class="relative sm:w-full sm:h-full w-full h-full hidden sm:block pl-4 pt-4 pb-4 bg-white">
  <div
    class="flex justify-between flex-col w-full rounded-lg items-start bg-[#F1F3F7] h-full p-6">
    <div />
    <div class="">
      {#each mainText as text}
        <h1 class="text-2xl font-bold text-black">{text}</h1>
      {/each}
    </div>

    <div class="w-full p-4 bg-gray-600 text-white rounded-lg">
      <p class="">{subText}</p>
    </div>
  </div>
</div>

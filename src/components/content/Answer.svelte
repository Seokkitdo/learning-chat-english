<script lang="ts">
  import { onMount, afterUpdate } from 'svelte'
  import questions from '$stores/questions'
  function scrollToBottom() {
    const chatContainer = document.getElementById('chatContainer')
    chatContainer.scrollTop = chatContainer.scrollHeight
  }

  onMount(scrollToBottom)
  afterUpdate(scrollToBottom)
</script>

<div class="flex-1 overflow-auto" id="chatContainer">
  <div
    id="chat-container"
    class="flex flex-col items-center text-sm dark:bg-gray-800">
    <div
      class="flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300">
      Learning Chat English
    </div>

    {#if !!$questions}
      {#each $questions as question}
        <div
          class="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10">
          <div
            class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
            <div
              class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
              <div class="flex flex-grow flex-col gap-3">
                <div
                  class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                  AI : {question}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 bg-gray-50 dark:bg-[#444654]">
          <div
            class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
            <div
              class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
              <div class="flex flex-grow flex-col gap-3">
                <div
                  class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                  <div
                    class="markdown prose w-full break-words dark:prose-invert light">
                    <p>'sender', '안녕하세요! 무엇을 도와드릴까요?'</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    {/if}
    <div class="w-full h-32 md:h-48 flex-shrink-0" />
  </div>
</div>

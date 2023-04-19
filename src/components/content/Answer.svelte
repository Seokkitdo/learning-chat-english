<script lang="ts">
  import { onMount, afterUpdate } from 'svelte'
  import questions from '$stores/questions'
  function scrollToBottom() {
    const chatContainer = document.getElementById('chatContainer')
    chatContainer.scrollTop = chatContainer.scrollHeight
  }

  onMount(scrollToBottom)
  afterUpdate(scrollToBottom)

  document.addEventListener('DOMContentLoaded', () => {
    const dropzone = document.querySelector<HTMLInputElement>('#dropzone-file')
    const fileLabel =
      document.querySelector<HTMLParagraphElement>('#file-label')

    dropzone.addEventListener('change', (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        fileLabel.textContent = file.name
      }
    })
  })
</script>

<div class="flex-1 overflow-auto" id="chatContainer">
  <div id="chat-container" class="flex flex-col items-center text-sm">
    <div
      class="flex w-full items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500">
      Learning Chat English
    </div>

    <div class="group w-full h-full text-gray-800 border-b border-black/10">
      <div
        class="flex flex-col text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
            <div class="flex flex-col items-center justify-center pt-2 pb-3">
              <svg
                aria-hidden="true"
                class="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              <p id="file-label" class="mb-2 text-sm text-gray-500">
                <span class="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p class="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
          <div id="file-name" class="hidden" />
        </div>
        <div class="w-full">
          <textarea
            class="w-full resize-none border rounded-lg p-2"
            name="submitSenetence"
            id=""
            cols="10"
            rows="10" />
        </div>
      </div>
    </div>
    {#if !!$questions}
      {#each $questions as question}
        <div class="group w-full text-gray-800 border-b border-black/10">
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
          class="group w-full text-gray-800 border-b border-black/10 bg-gray-50">
          <div
            class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
            <div
              class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
              <div class="flex flex-grow flex-col gap-3">
                <div
                  class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">
                  <div class="markdown prose w-full break-words light">
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

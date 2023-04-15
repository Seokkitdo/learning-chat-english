<script lang="ts">
  import answers from '$stores/answers'
  import questions from '$stores/questions'

  let value: string = ''
  let originalHeight: string = '1rem'
  let maxRows: number = 8

  function resizeTextarea() {
    setTimeout(() => {
      const textarea: HTMLTextAreaElement = document.getElementById(
        'textarea'
      ) as HTMLTextAreaElement
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'

      if (Number(textarea.style.height.split('px')[0]) / 16 > maxRows) {
        textarea.value = textarea.value.replace(/\n+$/, '')
        textarea.style.height = maxRows * 16 + 'px'
      }
    }, 0)
  }

  function handleKeyPress(event: KeyboardEvent) {
    if (event.shiftKey && event.key === 'Enter') {
      event.preventDefault()
      const { selectionStart, selectionEnd } =
        event.target as HTMLTextAreaElement
      value = value.slice(0, selectionStart) + '\n' + value.slice(selectionEnd)
      resizeTextarea()
    } else if (event.key === 'Enter') {
      event.preventDefault()
      event.stopImmediatePropagation() // 이 부분을 추가
      ;(event.target as HTMLTextAreaElement).style.height = originalHeight
      if (value.trim()) {
        // 공백 문자열이 아닐 경우에만 질문을 추가하도록 변경
        questions.updateQuestion(value)
        value = ''
      }
    }
  }

  function handleFocus() {
    originalHeight = (
      document.getElementById('textarea') as HTMLTextAreaElement
    ).style.height
  }
</script>

<div
  class="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
  <div class="relative mx-2 gap-3 mb-2 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
    <div
      class="absolute w-full bottom-5 flex-1 flex bg-gray-100 overflow-y-auto">
      <div
        class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
        <textarea
          id="textarea"
          class="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 outline-none focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"
          rows="1"
          style="resize: none; max-height: 200px; height: 24px; overflow-y: hidden;"
          placeholder="Type something..."
          bind:value={value}
          on:input={resizeTextarea}
          on:keypress={handleKeyPress}
          on:focus={handleFocus} />

        <button
          class="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40"
          ><svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 mr-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            ><line x1="22" y1="2" x2="11" y2="13" /><polygon
              points="22 2 15 22 11 13 2 9 22 2" /></svg
          ></button>
      </div>
    </div>
  </div>
</div>

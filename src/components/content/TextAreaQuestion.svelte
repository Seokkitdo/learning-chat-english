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
      ;(event.target as HTMLTextAreaElement).style.height = originalHeight
      questions.updateQuestion(value)
      value = ''
      answers.set(
        '행정각부의 설치·조직과 직무범위는 법률로 정한다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 이 경우 공무원 자신의 책임은 면제되지 아니한다.모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다.'
      )
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
          on:keydown={handleKeyPress}
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

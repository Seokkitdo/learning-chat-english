<script lang="ts">
  import user from '$stores/user'
  import Answer from './content/Answer.svelte'
  import TextAreaQuestion from './content/TextAreaQuestion.svelte'
</script>

<div
  class="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
  <Answer />
  <TextAreaQuestion />
</div>

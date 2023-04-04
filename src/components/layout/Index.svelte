<script lang="ts">
  export let pageTitle = '페이지 제목'
</script>

<div class="h-screen">
  <slot name="header" />
  <main class="pt-20 overflow-x-hidden">
    <div class="min-w-5xl max-w-screen-xl mx-auto py-18 px-5">
      <slot name="etc" />
      <div class="page-title">{pageTitle}</div>
      <slot name="main" />
    </div>
  </main>
</div>

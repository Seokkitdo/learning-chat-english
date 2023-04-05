<script>
  import Content from '$components/Content.svelte'
  import Sidebar from '$components/Sidebar.svelte'
  import Header from '$components/layout/Header.svelte'
  import Layout from '$components/layout/Index.svelte'
</script>

<!-- <Layout pageTitle="페이지">
  <Header slot="header" />
  <svelte:fragment slot="main">
    <div>챗러닝이빈다</div>
  </svelte:fragment>
</Layout> -->

<div class="h-screen flex overflow-hidden bg-gray-100">
  <!-- Sidebar -->
  <Sidebar />

  <!-- Main -->
  <Content />
</div>

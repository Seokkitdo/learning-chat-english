<script lang="ts">
  import { Router, Link, Route } from 'svelte-navigator'
  import Chat from '$routes/chat.svelte'
  import Home from '$routes/home.svelte'
  import Mypage from '$routes/mypage.svelte'
  import Login from '$routes/login.svelte'
</script>

<!-- Router를 사용하여 라우팅 처리 -->
<Router>
  <!-- TODO : nav header 로 빼내기 -->
  <nav>
    <Link to="/">Home</Link>
    <Link to="/mypage">mypage</Link>
    <Link to="/chat-learning">chat</Link>
    <Link to="/login">login</Link>
  </nav>
  <Route path="/" component={Home} />
  <Route path="/mypage" component={Mypage} />
  <Route path="/chat-learning" component={Chat} />
  <Route path="/login" component={Login} />
</Router>

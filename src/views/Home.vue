<template>
  <div class="app">

    <div class="sidebar">
      <Sidebar/>
    </div>

    <div class="right">
      <div class="header">
        <Header/>
      </div>

      <div class="content">
        <div class="content-container">
          <VideoCards/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import VideoCards from '@/components/VideoCards.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Sidebar,
    Header,
    VideoCards,
  }
}
</script>

<style>
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  margin: 0;
}
.sidebar {
  background: #D7E8D4;
  flex: 1;
}
.right {
  display: flex;
  flex-direction: column;
  flex: 5;
}
.content {
  display: flex;
  flex-direction: row;
}
.content > .content-container {
  flex: 4;
  min-height: 60vh;
  background-color: whitesmoke;
}
.header {
  background: yellowgreen;
}
.header, .content-container, .sidebar {
  padding: 1em;
}
</style>
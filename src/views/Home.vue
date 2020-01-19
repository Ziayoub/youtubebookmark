<template>
  <div class="app">

    <div class="sidebar-layout">
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
.sidebar-layout {
  flex: 1;
  border-right: 1px solid whitesmoke;
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
 border-bottom: 1px solid #ccc;
 height: 60px;
 

 
}
.header, .content-container, .sidebar {
  
}
</style>
<template>
  <div class="app-videos">
    <div class="sidebar-layout">
      <Sidebar/>
    </div>

    <div class="right">
      <Header/>

      <div class="content">
        <div class="content-container">
          <VideosOfCategory/>

          {{ category }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import VideosOfCategory from '@/components/VideosOfCategory.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Sidebar,
    Header,
    VideosOfCategory
  },
  props: {
    route: Object,
    category: String
  }
}
</script>

<style>
.app-videos {
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  margin: 0;
}
.sidebar-layout {
  flex: 1;
}
.right {
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  border-left: 1px solid rgb(220, 220, 220);
  flex: 5;
}
.content {
  display: flex;
  flex-direction: row;
}
.content > .content-container {
  flex: 4;
  min-height: 60vh;
}
</style>
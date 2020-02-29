<template>
  <div class="app-categories">
    <div class="sidebar-layout">
      <Sidebar/>
    </div>

    <div class="right">
      <Header/>

      <div class="content">
        <div class="content-container">
          <CategoriesContainer/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import CategoriesContainer from '@/components/CategoriesContainer.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Sidebar,
    Header,
    CategoriesContainer,
  }
}
</script>

<style>
.app-categories {
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  margin: 0;
}
</style>
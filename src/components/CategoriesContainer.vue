<template>
  <div class="p-5 d-flex flex-wrap">
    <h2>Categories</h2>
      <div class="d-flex w-100 mt-5 flex-wrap text-center text-uppercase">
        <Category name="Education" icon="book-outline" />
        <Category name="Podcast" icon="video-outline"/>
        <Category name="Sport" icon="alert-triangle-outline"/>
        <Category name="business" icon="layers-outline"/>
        <Category name="Motivation" icon="at-outline"/>
        <Category name="Music" icon="music"/>
        <Category name="kitchen" icon="bell-outline"/>
        <Category name="learning" icon="bulb-outline"/>
        <Category name="learning" icon="github-outline"/>
      </div>
  </div>
</template>

<script>
import Category from './Category';

export default {
  components: {
    Category
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

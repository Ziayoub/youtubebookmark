<template>
  <div class="p-5 d-flex flex-wrap">
    <h2>Categories</h2>
      <div class="d-flex w-100 mt-5 flex-wrap text-center text-uppercase">
        <Category id="education" name="Education" color="#313C74" icon="book-outline" />
        <Category id="podcast" name="Podcast" color="#57AFB9" icon="video-outline"/>
        <Category id="sport" name="Sport" color="#E68675" icon="alert-triangle-outline"/>
        <Category id="business" name="business" color="#A0CC55" icon="layers-outline"/>
        <Category id="motivation" name="Motivation" color="#F3BC7A" icon="at-outline"/>
        <Category id="music" name="Music" color="#0F6B59" icon="music"/>
        <Category id="kitchen" name="kitchen" color="#E3D9C8" icon="bell-outline"/>
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

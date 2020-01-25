<template>
  <div class="p-5 d-flex flex-wrap">
    <h2>Categories</h2>
      <div class="d-flex w-100 mt-5 flex-wrap text-center text-uppercase">
        <Category name="Education" color="#313C74" icon="book-outline" />
        <Category name="Podcast" color="#57AFB9" icon="video-outline"/>
        <Category name="Sport" color="#E68675" icon="alert-triangle-outline"/>
        <Category name="business" color="#A0CC55" icon="layers-outline"/>
        <Category name="Motivation" color="#F3BC7A" icon="at-outline"/>
        <Category name="Music" color="#0F6B59" icon="music"/>
        <Category name="kitchen" color="#E3D9C8" icon="bell-outline"/>
        <Category name="learning" color="#547BCD" icon="bulb-outline"/>
        <Category name="learning" color="#14C39E" icon="github-outline"/>
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

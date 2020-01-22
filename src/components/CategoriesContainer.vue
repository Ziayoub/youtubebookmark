<template>
  <div class="p-5 d-flex flex-wrap">
    <h2>Categories</h2>
      <div class="d-flex w-100 mt-5 flex-wrap text-center text-uppercase">
        <Category name="Education"  />
        <Category name="Podcast"  />
        <Category name="Sport"  />
        <Category name="business"  />
        <Category name="Motivation"  />
        <Category name="Music"  />
        <Category name="kitchen"  />
        <Category name="learning"  />
        <Category name="learning"  />
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

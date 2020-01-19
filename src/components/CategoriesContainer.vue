<template>
  <div class="p-5 d-flex flex-wrap">
    <h2>Categories</h2>
    <div class="d-flex w-100 mt-5">
      <Category name="Education" icon="book-outline" color="#FFC001" />
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

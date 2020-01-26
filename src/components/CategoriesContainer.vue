<template>
  <div class="p-5 d-flex flex-wrap">

    <div class="w-100 d-flex justify-content-between align-items-center">
      <h2>Categories</h2>
      <div class="btn btn-primary mr-5" @click="show">Create</div>
    </div>

    <CreateCategory name="create-category" />

    <div class="d-flex w-100 mt-5 justify-content-start flex-wrap">
      <Category id="education" class="category-card" name="Education" color="#313C74" icon="book-outline" />
      <Category id="podcast" class="category-card" name="Podcast" color="#57AFB9" icon="video-outline"/>
      <Category id="sport" class="category-card" name="Sport" color="#E68675" icon="alert-triangle-outline"/>
      <Category id="business" class="category-card" name="business" color="#A0CC55" icon="layers-outline"/>
      <Category id="motivation" class="category-card" name="Motivation" color="#F3BC7A" icon="at-outline"/>
      <Category id="music" class="category-card" name="Music" color="#0F6B59" icon="music"/>
      <Category id="kitchen" class="category-card" name="kitchen" color="#E3D9C8" icon="bell-outline"/>
    </div>
  </div>
</template>

<script>
import Category from './Category';
import CreateCategory from './modals/CreateCategory';

export default {
  components: {
    Category,
    CreateCategory
  },
  methods: {
    show () {
      this.$modal.show('create-category');
    },
    hide () {
      this.$modal.hide('create-category');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category-card {
  text-align: center;
  text-transform: uppercase;
}
</style>

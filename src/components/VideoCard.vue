<template>
  <router-link to="/video">
    <div class="card mr-4 mt-5 p-2" style="width: 18rem;">
        <img class="youtube-thumb" :src="cover" />
        <div class="card-body px-2 pb-0">
          <h6 class="card-title">{{ title }}</h6>
          <p class="card-text text-secondary">{{ description }}</p>
           <span class="text-secondary">Category: <span class="badge badge-info"> {{ category }}</span></span>
        </div>
      </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    cover: String,
    description: {
      type: String,
      default: ''
    },
    category: String,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.youtube-thumb {
  width: 100%;
  object-fit: cover;
}
</style>

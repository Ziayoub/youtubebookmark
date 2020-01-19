<template>
  <div class="card m-3" style="width: 18rem;">
    <img class="card-img-top" :src="cover" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a href="#" class="btn btn-primary">{{ buttonText || 'ButtonText' }}</a>
    </div>
  </div>
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
    buttonText: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

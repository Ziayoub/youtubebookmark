<template>
  <router-link to="/videos-of-category"  >
    <div class="category card mr-5 mt-5" :style="{ backgroundColor: color }">
      <i :class="['icon', `eva eva-${icon}`]" />
      <h3>{{ name }}</h3>
    </div>
  </router-link>  
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    color: String
  }
}
</script>

<style>

h3 {
  font-family: 'Poppins', sans-serif;
}

.category {
  height: 100px;
  width: 300px;
  border: none;
}

.icon {
  font-size: 50px;
  margin-bottom: 15px;
}
</style>
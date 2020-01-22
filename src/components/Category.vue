<template>
  <router-link to="/videos-of-category"  >
    <div class="category card mr-5 mt-5" :style="{ backgroundColor: color }">
      <i :class="['icon', `eva eva-${icon}`]" />
      <h4>{{ name }}</h4>
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
  padding: 40px;
  height: 200px;
  width: 300px;
  border: none;
}

.category:hover {
  transform: translateY(-3px);
  box-shadow: 2px 4px .6rem rgba(0, 0, 0, .1)
}


.icon {
  font-size: 50px;
  margin-bottom: 15px;
}
</style>
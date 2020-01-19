<template>
  <div class="category card p-4 mr-2" :style="{ backgroundColor: color }">
    <i :class="['icon', `eva eva-${icon}`]" />
    {{ name }}
  </div>
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
.category {
  height: 200px;
  width: 200px;
}
.icon {
  font-size: 50px;
}
</style>
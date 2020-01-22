<template>
  <div class="sidebar-content d-flex flex-column h-100">
    <Logo/>
    <Menu/>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Menu from './Menu.vue'

export default {
  components:{
    Logo,
    Menu
  }
}
</script>

<style>


</style>
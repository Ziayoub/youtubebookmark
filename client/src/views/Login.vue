<template>
  <div class="app-videos">
    <div class="right">
      <div class="content">
        <div class="content-container">
          <div class="p-5 d-flex flex-wrap">
           <LoginForm />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'


export default {
  components: {
    LoginForm
    
  }
}
</script>

<style>

</style>
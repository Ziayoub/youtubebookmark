<template>
  <div class="app-videos">
    <div class="right">
      <div class="content">
        <div class="content-container">
          <div class="p-5 d-flex flex-wrap">
           <RegisterForm />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterForm from '@/components/RegisterForm.vue'


export default {
  components: {
    RegisterForm
    
  }
}
</script>

<style>

</style>
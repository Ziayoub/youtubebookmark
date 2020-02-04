<template>
    <div class="p-5 d-flex flex-wrap">
        <h2>Video <small class="text-secondary"> &nbsp;— Category: {{ categoryId }}</small></h2>
        <div class="d-flex w-100 mt-5 justify-content-center">
            <div class="video embed-responsive embed-responsive-21by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </div> 
        </div>
        
    </div>
</template>


<script>


export default {
  props: {
    categoryId: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.video {
    width: 80%;
    
}

</style>
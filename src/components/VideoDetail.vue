<template>
    <div class="p-5 d-flex flex-wrap">
        <div class="d-flex w-100 mt-5 justify-content-center">
            <div class="video embed-responsive embed-responsive-21by9">
                <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${videoId}`"></iframe>
            </div> 
        </div>
    </div>
</template>

<script>

export default {
 
  props: {
    videoId: {
      type: String,
      default: ''
    }
  }
}
</script>


<style scoped>

.video {
    width: 70%; 
}

</style>
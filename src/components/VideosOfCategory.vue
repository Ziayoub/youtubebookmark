<template>
  <div class="p-5 d-flex flex-wrap">
    <h2>All Videos</h2>
    <div class="d-flex flex-wrap w-100 mt-5 text-center">
      <VideoCard
        title="Une approche minimaliste de la finance personnelle"
        cover="https://www.youtube.com/embed/tgbNymZ7vqY"
        description=" Hello world"
        category="graphic design"
      />
      <VideoCard
        title="Comment se réveiller avant 6 heures chaque jour"
        cover="https://www.youtube.com/embed/u8dW8DrcSmo"
        description=" Hello World"
        category="Business"
      />
      
      
    </div>  
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard.vue'

export default {
  components: {
    VideoCard
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

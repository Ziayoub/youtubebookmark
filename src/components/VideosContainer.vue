<template>
  <div class="p-5  d-flex flex-wrap">
    <h2>All Videos</h2>
    <div class="d-flex flex-wrap w-100 mt-5 text-center">
      <VideoCard
        title="Une approche minimaliste de la finance personnelle"
        cover="http://img.youtube.com/vi/tgbNymZ7vqY/0.jpg"
        description=" Hello world"
        category="graphic design"
      />
      <VideoCard
        title="Comment se réveiller avant 6 heures chaque jour"
        cover="http://img.youtube.com/vi/u8dW8DrcSmo/0.jpg"
        description=" Hello World"
        category="Business"
      />
      <VideoCard
        title="Use a generic close icon for dismissing content"
         cover="http://img.youtube.com/vi/FfptlvPMdII/0.jpg"
        description=" Hello world"
        category="Learning"
      />
      <VideoCard
        title="How To Add Video Popup In Website Using HTML CSS Bootstrap | Add Video On HTML Website Pop-up"
         cover="http://img.youtube.com/vi/8iU8LPEa4o0/0.jpg"
        description=" Hello World"
        category="web developement"
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

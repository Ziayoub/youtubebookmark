<template>
  <div class="p-5 d-flex flex-wrap">
    <h2>All Videos</h2>
    <div class="d-flex flex-wrap w-100 mt-5 text-center">
      <VideoCard
        v-for="video in videos"
        :key="video.title"
        :title="video.title"
        :cover="video.cover"
        :description="video.description"
        :category="video.category"
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
  data: () => ({
    videos: [
      {
        title:'Hello',
        cover: "http://img.youtube.com/vi/tgbNymZ7vqY/0.jpg",
        description: " Hello world",
        category: "graphic design"
      },
      {
        title: "Comment se réveiller avant 6 heures chaque jour",
        cover: "http://img.youtube.com/vi/u8dW8DrcSmo/0.jpg",
        description: " Hello World",
        category: "Business"
      }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

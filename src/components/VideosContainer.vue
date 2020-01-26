<template>
  <div class="d-flex flex-wrap w-100 mt-5 text-center">
    <div v-if="videos.length === 0">No videos</div>
    <VideoCard
      v-for="video in videos"
      :key="video.title"
      :title="video.title"
      :cover="`http://img.youtube.com/vi/${video.youtube_id}/0.jpg`"
      :description="video.description"
      :category="video.category.name"
    />
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard.vue'
import videosData from '@/data/videos';

export default {
  components: {
    VideoCard
  },
  props: {
    categoryId: {
      type: String,
      default: ''
    }
  },
  computed: {
    videos: function () {
      return this.getVideos();
    }
  },
  methods: {
    getVideos: function() {
      if (this.categoryId === '') {
        return videosData;
      }
      return videosData.filter(v => v.category_id === this.categoryId)
    }
  }
}
</script>
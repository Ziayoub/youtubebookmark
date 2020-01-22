<template>
  <div class="p-5  d-flex flex-wrap">
    <h2>All Videos</h2>
    <div class="d-flex flex-wrap w-100 mt-5 text-center">
      <VideoCard
        title="The Secret to Superhuman Performance"
        cover="https://www.youtube.com/watch?v=bQzIQa5YKvw"
        description=" Hello world"
        category="sport"
      />
      <VideoCard
        title="Simple Steps to Financial Freedom"
        cover="https://www.youtube.com/watch?v=DKSzY7Dg-rA"
        description=" Hello World"
        category="podcast"
      />
      <VideoCard
        title="Une approche minimaliste de la finance personnelle"
        cover="https://www.youtube.com/watch?v=bQzIQa5YKvw"
        description=" Hello world"
        category="graphic design"
      />
      <VideoCard
        title="Comment se réveiller avant 6 heures chaque jour"
        cover="https://www.youtube.com/watch?v=DKSzY7Dg-rA"
        description=" Hello World"
        category="Business"
      />
      <VideoCard
        title="Use a generic close icon for dismissing content"
        cover="https://www.youtube.com/watch?v=bQzIQa5YKvw"
        description=" Hello world"
        category="Learning"
      />
      <VideoCard
        title="How To Add Video Popup In Website Using HTML CSS Bootstrap | Add Video On HTML Website Pop-up"
        cover="https://www.youtube.com/watch?v=DKSzY7Dg-rA"
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

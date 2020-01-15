<template>
  <div class="home">
    <Header/>
    <HelloWorld/>
    <VideoCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import VideoCard from '@/components/VideoCard.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Header,
    VideoCard
  }
}
</script>

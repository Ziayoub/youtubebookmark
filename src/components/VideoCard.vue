<template>
    <div class="card mr-4 mb-5" style="width: 18rem;">
      <router-link :to="`/${videoId}/video`">
        <img class="youtube-thumb" :src="cover" />

        <div
          class="category-banner py-1 px-4"
          :style="{backgroundColor: category.color}"
        >
          {{ category.name }}
        </div>

        <div class="card-body px-4 py-4">
          <h6 class="card-title mb-1">{{ title }}</h6>
          <p class="card-text text-secondary">{{ description }}</p>
        </div>
      </router-link>

      <div class="card-footer d-flex justify-content-end">
        <i
          class="eva eva-trash-2-outline"
          style="cursor: pointer"
          @click="deleteVideo"
        ></i>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    cover: String,
    description: {
      type: String,
      default: ''
    },
    category: {
      type: Object,
      default() { return {} }
    },
  },
  methods: {
    deleteVideo: function() {
      if (window.confirm("Do you really want to delete this video?")) {
        console.log('deleted');
      } else {
        console.log('not deleted');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.youtube-thumb {
  width: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 22px;
  color: black;
  font-weight: bold;
  max-height: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.category-banner {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 11px;
  color: white;
}

.card-footer {
  background-color: white;
}

</style>
